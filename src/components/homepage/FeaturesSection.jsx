import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, ThumbsUp } from "lucide-react";

const features = [
  { 
    icon: <Shield className="h-8 w-8 text-primary" />, 
    title: "Güvenli Ödeme", 
    description: "128-bit SSL güvenlik sertifikası ile tüm ödemeleriniz güvence altında." 
  },
  { 
    icon: <Award className="h-8 w-8 text-primary" />, 
    title: "En İyi Fiyat Garantisi", 
    description: "Aynı turu veya oteli daha uygun fiyata bulursanız, farkı iade ediyoruz." 
  },
  { 
    icon: <ThumbsUp className="h-8 w-8 text-primary" />, 
    title: "7/24 Destek", 
    description: "Seyahatiniz boyunca 7/24 müşteri hizmetlerimiz yanınızda." 
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tatilsana olarak size en iyi tatil deneyimini sunmak için çalışıyoruz. İşte bizi farklı kılan özellikler:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;