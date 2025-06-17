import React, { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useReservation } from "@/contexts/ReservationContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CalendarDays, Tag, XCircle, CheckCircle, Info, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

const ReservationsPage = () => {
  const { user } = useAuth();
  const { reservations, getUserReservations, cancelReservation } = useReservation();
  const [userReservations, setUserReservations] = useState([]);

  useEffect(() => {
    if (user) {
      setUserReservations(getUserReservations(user.id));
    }
  }, [user, reservations, getUserReservations]);

  const handleCancelReservation = (id) => {
    cancelReservation(id);
  };

  const getStatusInfo = (status) => {
    switch (status) {
      case "confirmed":
        return { text: "Onaylandı", icon: <CheckCircle className="h-5 w-5 text-green-500" />, color: "text-green-500" };
      case "cancelled":
        return { text: "İptal Edildi", icon: <XCircle className="h-5 w-5 text-red-500" />, color: "text-red-500" };
      default:
        return { text: "Bilinmiyor", icon: <Info className="h-5 w-5 text-gray-500" />, color: "text-gray-500" };
    }
  };

  if (!user) {
    return <p>Rezervasyonlarınızı görmek için lütfen giriş yapın.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-2 text-gradient">Rezervasyonlarım</h1>
        <p className="text-lg text-gray-600 text-center mb-12">Geçmiş ve güncel rezervasyonlarınızı buradan yönetebilirsiniz.</p>

        {userReservations.length === 0 ? (
          <Alert className="max-w-lg mx-auto">
            <ShoppingBag className="h-4 w-4" />
            <AlertTitle>Henüz Rezervasyonunuz Yok!</AlertTitle>
            <AlertDescription>
              Harika tatil fırsatlarını keşfetmek için turlarımıza ve otellerimize göz atın.
            </AlertDescription>
          </Alert>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userReservations.sort((a,b) => new Date(b.date) - new Date(a.date)).map((reservation, index) => {
              const statusInfo = getStatusInfo(reservation.status);
              return (
                <motion.div
                  key={reservation.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="w-full h-40 rounded-t-md overflow-hidden mb-4">
                        <img  
                          alt={reservation.itemName} 
                          className="w-full h-full object-cover"
                         src="https://images.unsplash.com/photo-1649635839465-731f7dffd0a0" />
                      </div>
                      <CardTitle className="text-xl">{reservation.itemName}</CardTitle>
                      <CardDescription className="capitalize flex items-center">
                        <Tag className="h-4 w-4 mr-1 text-primary" /> {reservation.itemType === "tour" ? "Tur" : "Otel"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                        <span>Rezervasyon Tarihi: {format(new Date(reservation.date), "dd MMMM yyyy, HH:mm", { locale: tr })}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        {statusInfo.icon}
                        <span className={`ml-2 font-medium ${statusInfo.color}`}>{statusInfo.text}</span>
                      </div>
                      <p className="text-lg font-semibold text-primary">{reservation.price} TL</p>
                    </CardContent>
                    <CardFooter>
                      {reservation.status === "confirmed" && (
                        <Button
                          variant="destructive"
                          onClick={() => handleCancelReservation(reservation.id)}
                          className="w-full"
                        >
                          İptal Et
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ReservationsPage;