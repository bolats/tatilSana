import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { tours } from "@/data/tours.jsx";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { MapPin, Calendar, Users, Star, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useReservation } from "@/contexts/ReservationContext";

const TourDetailPage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const { user } = useAuth();
  const { addReservation } = useReservation();
  const tour = tours.find(t => t.id === id);
  const [showDiscountDialog, setShowDiscountDialog] = useState(false);
  const [discountCode, setDiscountCode] = useState("");

  if (!tour) {
    return <div>Tur bulunamadı.</div>;
  }

  const handleBookNow = () => {
    if (!user) {
      toast({
        title: "Giriş Gerekli",
        description: "Rezervasyon yapmak için lütfen giriş yapın.",
        variant: "destructive",
      });
      return;
    }
    setShowDiscountDialog(true);
  };

  const handleDiscountSubmit = () => {
    let discountAmount = 0;
    const originalPrice = tour.price;
    
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
      itemId: tour.id,
      itemName: tour.title,
      itemType: "tour",
      price: finalPrice,
      image: tour.image,
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
            <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{tour.title}</h1>
              <div className="flex items-center gap-2 mt-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{tour.destination}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>{tour.rating}</span>
                <span className="text-gray-500">({tour.reviewCount} değerlendirme)</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-5 h-5 text-blue-500" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-5 h-5 text-green-500" />
                <span>Min. {tour.minGuests} kişi</span>
              </div>
            </div>
            <p className="text-gray-600">{tour.description}</p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Tur Özellikleri</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {tour.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">{tour.price.toLocaleString('tr-TR')} TL</p>
                  {tour.oldPrice && (
                    <p className="text-gray-500 line-through text-sm">
                      {tour.oldPrice.toLocaleString('tr-TR')} TL
                    </p>
                  )}
                </div>
                <Button size="lg" onClick={handleBookNow}>
                  Hemen Rezervasyon Yap
                </Button>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-semibold mb-6">Tur Programı</h2>
          <div className="space-y-6">
            {tour.itinerary.map((day, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold">{day.title}</h3>
                <p className="text-gray-600 mt-2">{day.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

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

export default TourDetailPage;
