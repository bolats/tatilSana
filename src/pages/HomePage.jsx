
import React from "react";
import { tours } from "@/data/tours.jsx";
import { hotels as allHotelsData } from "@/data/hotels.js"; // Import from .js file
import { testimonials } from "@/data/testimonials";
import HeroSection from "@/components/homepage/HeroSection";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import PopularToursSection from "@/components/homepage/PopularToursSection";
import PopularHotelsSection from "@/components/homepage/PopularHotelsSection";
import PopularDestinationsSection from "@/components/homepage/PopularDestinationsSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import Newsletter from "@/components/Newsletter";

const HomePage = () => {
  const featuredTours = tours.length >=3 ? tours.slice(0, 3) : tours;
  
  const kapadokyaHotel = allHotelsData.find(hotel => hotel.id === "3");
  let featuredHotels = allHotelsData.slice(0, 3);

  if (kapadokyaHotel) {
    const isKapadokyaFeatured = featuredHotels.some(hotel => hotel.id === "3");
    if (!isKapadokyaFeatured) {
      if (featuredHotels.length === 3) {
        featuredHotels = [kapadokyaHotel, ...featuredHotels.slice(0, 2)];
      } else {
         featuredHotels.unshift(kapadokyaHotel); 
         featuredHotels = featuredHotels.slice(0,3);
      }
    }
  }
  featuredHotels = featuredHotels.slice(0, 3);


  const displayedTestimonials = testimonials.length >=3 ? testimonials.slice(0, 3) : testimonials;
  
  const destinations = [
    { name: "Antalya", image: "https://images.unsplash.com/photo-1589960095785-1df015db0ae2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80", alt: "Antalya'da Kemer sahili, turkuaz deniz ve yeşil dağlar" },
    { name: "İstanbul", image: "https://images.unsplash.com/photo-1534275450406-b2483a743095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80", alt: "İstanbul Boğazı ve tarihi yalılar" },
    { name: "Kapadokya", image: "https://images.unsplash.com/photo-1560320880-14c4ef109080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80", alt: "Kapadokya'da gün doğumunda uçan sıcak hava balonları ve peri bacaları" },
    { name: "Bodrum", image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80", alt: "Bodrum'da beyaz badanalı evler ve begonvillerle süslü dar sokaklar" },
    { name: "Fethiye", image: "https://images.unsplash.com/photo-1598503409130-09838039effe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80", alt: "Fethiye Ölüdeniz'in muhteşem lagünü ve kumsalı kuşbakışı" },
    { name: "Trabzon", image: "https://images.unsplash.com/photo-1598403303060-0338ddc1460a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80", alt: "Trabzon Sümela Manastırı'nın sarp kayalıklara kurulu etkileyici görüntüsü" },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <PopularToursSection tours={featuredTours} />
      <PopularHotelsSection hotels={featuredHotels} />
      <PopularDestinationsSection destinations={destinations} />
      <TestimonialsSection testimonials={displayedTestimonials} />
      <Newsletter />
    </div>
  );
};

export default HomePage;
