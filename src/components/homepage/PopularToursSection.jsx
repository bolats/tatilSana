import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TourCard from "@/components/TourCard";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const PopularToursSection = ({ tours }) => {
  if (!tours || tours.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">Popüler Turlar</h2>
          <p className="text-gray-600">Şu anda gösterilecek popüler tur bulunmamaktadır.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">Popüler Turlar</h2>
            <p className="text-gray-600">En çok tercih edilen turlarımızı keşfedin</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/turlar">
              <Button variant="outline" className="gap-2">
                Tümünü Gör <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tours.map((tour) => (
            <motion.div key={tour.id} variants={itemVariants}>
              <TourCard tour={tour} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PopularToursSection;