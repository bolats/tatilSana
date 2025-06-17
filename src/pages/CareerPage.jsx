import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Lightbulb, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CareerPage = () => {
  const jobOpenings = [
    { title: "Kıdemli Frontend Geliştirici", location: "İstanbul (Hibrit)", department: "Teknoloji", type: "Tam Zamanlı" },
    { title: "Tur Operasyon Uzmanı", location: "Antalya", department: "Operasyon", type: "Tam Zamanlı" },
    { title: "Dijital Pazarlama Uzmanı", location: "Uzaktan", department: "Pazarlama", type: "Tam Zamanlı" },
    { title: "Müşteri Hizmetleri Temsilcisi (Almanca Bilen)", location: "İstanbul", department: "Destek", type: "Tam Zamanlı" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <Briefcase className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Kariyer</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tatilsana ekibine katılın, seyahat tutkunuzu kariyerinize dönüştürün! Yenilikçi, dinamik ve eğlenceli bir çalışma ortamında bize katılın.
        </p>
      </motion.div>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img  
              alt="Tatilsana ofis ortamı, çalışanlar toplantıda"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
             src="https://images.unsplash.com/photo-1637622124152-33adfabcc923" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-6">Neden Tatilsana?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tatilsana'da çalışmak, sadece bir işten daha fazlasıdır. Seyahat endüstrisini şekillendiren, tutkulu bir ekibin parçası olursunuz. Çalışanlarımızın gelişimine yatırım yapıyor, yaratıcılığı teşvik ediyor ve başarıları birlikte kutluyoruz.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <Lightbulb className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                <span>Yenilikçi projelerde yer alma ve sektöre yön verme fırsatı.</span>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                <span>Destekleyici ve işbirlikçi bir ekip kültürü.</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                <span>Sürekli öğrenme ve kariyer gelişim imkanları.</span>
              </li>
              <li className="flex items-start">
                <Briefcase className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                <span>Rekabetçi maaş ve yan haklar paketi.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-center mb-12"
        >
          Açık Pozisyonlar
        </motion.h2>
        {jobOpenings.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">{job.title}</h3>
                <p className="text-sm text-gray-500 mb-1"><strong>Konum:</strong> {job.location}</p>
                <p className="text-sm text-gray-500 mb-1"><strong>Departman:</strong> {job.department}</p>
                <p className="text-sm text-gray-500 mb-4"><strong>Çalışma Şekli:</strong> {job.type}</p>
                <Button asChild variant="outline">
                  <Link to="/iletisim?subject=Basvuru:"{...job.title}>Detayları Gör ve Başvur</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Şu anda açık pozisyonumuz bulunmamaktadır. Genel başvurular için <Link to="/iletisim" className="text-primary hover:underline">iletişim</Link> sayfamızdan bize ulaşabilirsiniz.</p>
        )}
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg"
      >
        <h3 className="text-2xl font-semibold mb-4">Aradığınız Pozisyonu Bulamadınız Mı?</h3>
        <p className="text-gray-700 mb-6 max-w-lg mx-auto">
          Size uygun bir pozisyon göremeseniz bile, yetenekli ve tutkulu bireylerle tanışmaktan her zaman mutluluk duyarız. Genel başvurunuzu bize gönderin!
        </p>
        <Button asChild size="lg">
          <Link to="/iletisim?subject=Genel Basvuru">Genel Başvuru Yap</Link>
        </Button>
      </motion.section>
    </div>
  );
};

export default CareerPage;