import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center text-center text-white px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Antalya Kaş'ta gün batımında denize bakan bir teras"
          className="w-full h-full object-cover"
         src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Hayalinizdeki Tatili <span className="text-gradient">Bugün</span> Planlayın!
        </h1>
        <p className="text-lg md:text-xl mb-10 text-gray-200">
          Binlerce tur ve otel seçeneği arasından size en uygun olanı bulun, unutulmaz bir kaçamak için ilk adımı atın.
        </p>
        
        <div className="mb-10 max-w-xl mx-auto">
          <SearchBar />
        </div>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/turlar">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Turları Keşfet
            </Button>
          </Link>
          <Link to="/oteller">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Otelleri İncele
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;