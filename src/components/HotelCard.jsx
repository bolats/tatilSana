import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Wifi, Coffee, Utensils, BedDouble, ParkingCircle, Wind } from "lucide-react";
import { motion } from "framer-motion";

const HotelCard = ({ hotel }) => {
  const renderAmenities = () => {
    const amenitiesMap = {
      wifi: { icon: <Wifi className="h-4 w-4" />, label: "Ücretsiz WiFi" },
      breakfast: { icon: <Coffee className="h-4 w-4" />, label: "Kahvaltı Dahil" },
      restaurant: { icon: <Utensils className="h-4 w-4" />, label: "Restoran" },
      pool: { icon: <BedDouble className="h-4 w-4" />, label: "Havuz" }, // Placeholder, replace with actual pool icon
      spa: { icon: <Wind className="h-4 w-4" />, label: "Spa" }, // Placeholder
      beach: { icon: <BedDouble className="h-4 w-4" />, label: "Plaj" }, // Placeholder
      gym: { icon: <BedDouble className="h-4 w-4" />, label: "Spor Salonu" }, // Placeholder
      kids_club: { icon: <BedDouble className="h-4 w-4" />, label: "Çocuk Kulübü" }, // Placeholder
      room_service: { icon: <BedDouble className="h-4 w-4" />, label: "Oda Servisi" }, // Placeholder
      concierge: { icon: <BedDouble className="h-4 w-4" />, label: "Konsiyerj" }, // Placeholder
      valet_parking: { icon: <ParkingCircle className="h-4 w-4" />, label: "Vale Park" },
      water_slides: { icon: <BedDouble className="h-4 w-4" />, label: "Su Kaydırakları" }, // Placeholder
      beach_access: { icon: <BedDouble className="h-4 w-4" />, label: "Plaj Erişimi" }, // Placeholder
      nature_walks: { icon: <BedDouble className="h-4 w-4" />, label: "Doğa Yürüyüşleri" }, // Placeholder
    };

    return (
      <div className="flex flex-wrap gap-2 mt-3">
        {hotel.amenities && hotel.amenities.slice(0,4).map((amenity) => (
          <div key={amenity} className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full" title={amenitiesMap[amenity]?.label}>
            {amenitiesMap[amenity]?.icon}
            <span className="ml-1 capitalize">{amenity.replace(/_/g, " ")}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden h-full flex flex-col card-hover">
        <div className="relative h-56 overflow-hidden">
          <img  
            src={hotel.image || "https://images.unsplash.com/photo-1615618922335-9e2cd04a9aef"} 
            alt={hotel.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
           />
          
          {hotel.discount && (
            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
              %{hotel.discount} İndirim
            </div>
          )}
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-white font-bold text-xl line-clamp-2">{hotel.name}</h3>
          </div>
        </div>
        
        <CardContent className="flex-grow p-4">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <MapPin className="h-4 w-4 mr-1.5 text-primary shrink-0" />
            <span className="line-clamp-1">{hotel.location}</span>
          </div>
          
          <div className="flex items-center mb-3">
            {Array(5).fill(0).map((_, i) => (
              <Star 
                key={i} 
                className={`h-5 w-5 ${i < Math.round(hotel.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">({hotel.reviewCount} değerlendirme)</span>
          </div>
          
          <p className="text-sm text-gray-600 line-clamp-2 mb-2">{hotel.description}</p>
          
          {hotel.amenities && renderAmenities()}
        </CardContent>
        
        <CardFooter className="p-4 pt-0 flex items-center justify-between border-t mt-auto">
          <div>
            {hotel.oldPrice && (
              <span className="text-sm text-gray-400 line-through mr-2">
                {hotel.oldPrice.toLocaleString('tr-TR')} TL
              </span>
            )}
            <span className="text-xl font-bold text-primary">
              {hotel.price.toLocaleString('tr-TR')} TL
            </span>
            <span className="text-xs text-gray-500">/gece</span>
          </div>
          
          <Link to={`/oteller/${hotel.id}`}>
            <Button size="sm">Detaylar</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default HotelCard;