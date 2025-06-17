import React, { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const [reservations, setReservations] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    const storedReservations = localStorage.getItem("reservations");
    if (storedReservations) {
      setReservations(JSON.parse(storedReservations));
    }
  }, []);

  const addReservation = (reservation) => {
    let finalPrice = reservation.price;
    if (reservation.discountCode === "TOBB2025") {
      finalPrice = reservation.price * 0.70; // %30 indirim
      toast({
        title: "İndirim Uygulandı!",
        description: "TOBB2025 kodu ile %30 indirim uygulandı.",
        duration: 5000,
      });
    }

    const newReservation = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      status: "confirmed",
      ...reservation,
      price: finalPrice,
    };
    
    const updatedReservations = [...reservations, newReservation];
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
    setReservations(updatedReservations);
    
    toast({
      title: "Rezervasyon Talebi Alındı",
      description: "En kısa sürede sizinle iletişime geçeceğiz. Rezervasyon detaylarınızı 'Rezervasyonlarım' sayfasından takip edebilirsiniz.",
      duration: 5000,
    });
    
    return newReservation;
  };

  const cancelReservation = (reservationId) => {
    const updatedReservations = reservations.map(res => 
      res.id === reservationId ? { ...res, status: "cancelled" } : res
    );
    
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
    setReservations(updatedReservations);
    
    toast({
      title: "Rezervasyon iptal edildi",
      description: "Rezervasyonunuz başarıyla iptal edildi.",
    });
  };

  const getUserReservations = (userId) => {
    return reservations.filter(res => res.userId === userId);
  };

  const value = {
    reservations,
    addReservation,
    cancelReservation,
    getUserReservations,
  };

  return <ReservationContext.Provider value={value}>{children}</ReservationContext.Provider>;
};

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
};