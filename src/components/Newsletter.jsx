import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Abonelik Başarılı!",
        description: `${email} adresiniz bültenimize eklendi.`,
      });
      setEmail("");
    } else {
      toast({
        title: "Hata",
        description: "Lütfen geçerli bir e-posta adresi girin.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center bg-white/10 p-8 md:p-12 rounded-xl shadow-2xl backdrop-blur-sm"
        >
          <Mail className="h-12 w-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Fırsatlardan Haberdar Olun!
          </h2>
          <p className="text-white/90 mb-8">
            En yeni turlar, özel indirimler ve seyahat ipuçları için e-bültenimize abone olun.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="E-posta adresiniz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/90 text-gray-800 placeholder-gray-500 border-transparent focus:ring-2 focus:ring-white/50"
              required
            />
            <Button type="submit" size="lg" className="bg-white text-primary hover:bg-white/90">
              Abone Ol
            </Button>
          </form>
          <p className="text-xs text-white/70 mt-6">
            İstediğiniz zaman abonelikten çıkabilirsiniz. <Link to="/gizlilik-politikasi" className="underline hover:text-white">Gizlilik Politikamızı</Link> inceleyin.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;