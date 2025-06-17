import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    toast({
      title: "Mesajınız Gönderildi!",
      description: "En kısa sürede sizinle iletişime geçeceğiz.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Bize Ulaşın</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Soru, öneri veya işbirliği talepleriniz için bizimle iletişime geçmekten çekinmeyin.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-xl space-y-8"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium">Adres</h4>
                  <p className="text-gray-600">Atatürk Cad. No:123, Merkez, İstanbul, Türkiye</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium">Telefon</h4>
                  <p className="text-gray-600">+90 212 123 45 67</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium">E-posta</h4>
                  <p className="text-gray-600">info@tatilsana.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Çalışma Saatleri</h3>
            <p className="text-gray-600">Hafta içi: 09:00 - 18:00</p>
            <p className="text-gray-600">Hafta sonu: Kapalı</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-6">Mesaj Gönderin</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Adınız Soyadınız</Label>
              <Input id="name" type="text" value={formData.name} onChange={handleChange} required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">E-posta Adresiniz</Label>
              <Input id="email" type="email" value={formData.email} onChange={handleChange} required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="subject">Konu</Label>
              <Input id="subject" type="text" value={formData.subject} onChange={handleChange} required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="message">Mesajınız</Label>
              <Textarea id="message" value={formData.message} onChange={handleChange} rows={5} required className="mt-1" />
            </div>
            <Button type="submit" className="w-full gap-2" disabled={isLoading}>
              {isLoading ? "Gönderiliyor..." : <>Mesajı Gönder <Send className="h-4 w-4" /></>}
            </Button>
          </form>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Konumumuz</h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=28.9736,41.0075,28.9836,41.0125&layer=mapnik&marker=41.01,28.9786"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ofis Konumu"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;