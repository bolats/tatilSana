import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

const TourCard =({ tour }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden h-full flex flex-col card-hover">
        <div className="relative h-56 overflow-hidden">
          <img  
            src={tour.image || "https://images.unsplash.com/photo-1569372314472-8aea12c94019"} 
            alt={tour.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
           />
          
          {tour.discount && (
            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
              %{tour.discount} İndirim
            </div>
          )}
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-white font-bold text-xl line-clamp-2">{tour.title}</h3>
          </div>
        </div>
        
        <CardContent className="flex-grow p-4">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <MapPin className="h-4 w-4 mr-1.5 text-primary shrink-0" />
            <span className="line-clamp-1">{tour.destination}</span>
          </div>
          
          <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1.5 text-primary shrink-0" />
              <span>{tour.duration}</span>
            </div>
            
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1.5 text-primary shrink-0" />
              <span>Min. {tour.minGuests} kişi</span>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            {Array(5).fill(0).map((_, i) => (
              <Star 
                key={i} 
                className={`h-5 w-5 ${i < Math.round(tour.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">({tour.reviewCount} değerlendirme)</span>
          </div>
          
          <p className="text-sm text-gray-600 line-clamp-3 mb-4">{tour.description}</p>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 flex items-center justify-between border-t mt-auto">
          <div>
            {tour.oldPrice && (
              <span className="text-sm text-gray-400 line-through mr-2">
                {tour.oldPrice.toLocaleString('tr-TR')} TL
              </span>
            )}
            <span className="text-xl font-bold text-primary">
              {tour.price.toLocaleString('tr-TR')} TL
            </span>
            <span className="text-xs text-gray-500">/kişi</span>
          </div>
          
          <Link to={`/turlar/${tour.id}`}>
            <Button size="sm">Detaylar</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default TourCard;