import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { hotels } from "@/data/hotels";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { MapPin, Star, Wifi, Coffee, Utensils, BedDouble, CheckCircle, DollarSign, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useReservation } from "@/contexts/ReservationContext";

const HotelDetailPage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const { user } = useAuth();
  const { addReservation } = useReservation();
  const navigate = useNavigate();
  const hotel = hotels.find(h => h.id === id);
  const [showDiscountDialog, setShowDiscountDialog] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);

  if (!hotel) {
    return <div>Otel bulunamadı.</div>;
  }

  const handleBookNow = (room) => {
    if (!user) {
      toast({
        title: "Giriş Gerekli",
        description: "Rezervasyon yapmak için lütfen giriş yapın.",
        variant: "destructive",
      });
      navigate("/giris");
      return;
    }
    setSelectedRoom(room);
    setShowDiscountDialog(true);
  };

  const handleDiscountSubmit = () => {
    let discountAmount = 0;
    const originalPrice = selectedRoom.price;
    
    if (discountCode === "TOBB2025") {
      discountAmount = originalPrice * 0.10; // %10 indirim
      toast({
        title: "İndirim Uygulandı!",
        description: "%10 indirim başarıyla uygulandı.",
      });
    } else if (discountCode.trim() !== "") {
      toast({
        title: "Geçersiz Kod",
        description: "Girdiğiniz indirim kodu geçersiz.",
        variant: "destructive",
      });
      return;
    }

    const finalPrice = originalPrice - discountAmount;

    addReservation({
      userId: user.id,
      itemId: hotel.id,
      itemName: `${hotel.name} - ${selectedRoom.type}`,
      itemType: "hotel",
      price: finalPrice,
      image: hotel.image,
      discountCode: discountCode,
      originalPrice: originalPrice,
      discountAmount: discountAmount
    });

    setShowDiscountDialog(false);
    toast({
      title: "Rezervasyon Talebi Alındı",
      description: "En kısa sürede sizinle iletişime geçeceğiz. Rezervasyon detaylarınızı 'Rezervasyonlarım' sayfasından takip edebilirsiniz.",
      duration: 5000,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden">
            <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{hotel.name}</h1>
              <div className="flex items-center gap-2 mt-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{hotel.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>{hotel.rating}</span>
                <span className="text-gray-500">({hotel.reviewCount} değerlendirme)</span>
              </div>
            </div>
            <p className="text-gray-600">{hotel.description}</p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Otel Özellikleri</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="capitalize">{amenity.replace('_', ' ')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {hotel.rooms && hotel.rooms.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <h2 className="text-3xl font-semibold mb-6">Oda Seçenekleri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotel.rooms.map(room => (
                <div key={room.id} className="border rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow bg-white">
                  <h3 className="text-xl font-semibold text-primary mb-2">{room.type}</h3>
                  <p className="text-gray-600 mb-2 text-sm line-clamp-2">{room.description}</p>
                  <div className="text-sm text-gray-500 mb-3">
                    <p>Kapasite: {room.capacity} kişi</p>
                    {room.features && room.features.length > 0 && (
                      <ul className="list-disc list-inside mt-1">
                        {room.features.slice(0,3).map((f, i) => <li key={i} className="line-clamp-1">{f}</li>)}
                      </ul>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <p className="text-lg font-bold text-gray-800">{room.price.toLocaleString('tr-TR')} TL <span className="text-xs font-normal">/gece</span></p>
                    <Button onClick={() => handleBookNow(room)}>
                      <BedDouble className="mr-2 h-4 w-4" /> Rezervasyon Yap
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <Dialog open={showDiscountDialog} onOpenChange={setShowDiscountDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>İndirim Kodu</DialogTitle>
            </DialogHeader>
            <Form>
              <FormItem>
                <FormLabel>İndirim Kodunuz (Opsiyonel)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="İndirim kodunuzu girin"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                  />
                </FormControl>
              </FormItem>
            </Form>
            <DialogFooter className="mt-4">
              <Button variant="outline" onClick={() => setShowDiscountDialog(false)}>
                İptal
              </Button>
              <Button onClick={handleDiscountSubmit}>
                Rezervasyonu Tamamla
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  );
};

export default HotelDetailPage;