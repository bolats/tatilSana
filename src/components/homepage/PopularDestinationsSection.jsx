import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
};

const PopularDestinationsSection = ({ destinations }) => {
  if (!destinations || destinations.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">Popüler Destinasyonlar</h2>
          <p className="text-gray-600">Şu anda gösterilecek popüler destinasyon bulunmamaktadır.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Popüler Destinasyonlar</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Türkiye'nin ve dünyanın en gözde tatil bölgelerini keşfedin.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative rounded-lg overflow-hidden shadow-lg group aspect-[3/4]"
            >
              <Link to={`/turlar?q=${destination.name.toLowerCase()}`} className="block w-full h-full">
                <img  
                  src={destination.image || `https://source.unsplash.com/400x600/?${destination.name.toLowerCase()},travel`} 
                  alt={destination.alt || destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                    {destination.name}
                  </h3>
                  <div className="flex items-center text-xs text-primary-foreground/80 group-hover:text-primary/80 transition-colors">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Keşfet</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PopularDestinationsSection;