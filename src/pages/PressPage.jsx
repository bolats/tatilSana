import React from "react";
import { motion } from "framer-motion";
import { Newspaper, Download, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PressPage = () => {
  const pressReleases = [
    { 
      date: "2025-04-15", 
      title: "Tatilsana, Yaz Sezonu İçin Yeni Rotalarını Açıkladı", 
      summary: "Türkiye'nin önde gelen seyahat platformu Tatilsana, yaklaşan yaz sezonu için heyecan verici yeni tur ve otel seçeneklerini duyurdu. Kapadokya'dan Ege kıyılarına uzanan geniş bir yelpazede tatil fırsatları sunuluyor.",
      link: "#" 
    },
    { 
      date: "2025-03-01", 
      title: "Tatilsana, Mobil Uygulamasını Yeniledi", 
      summary: "Kullanıcı deneyimini en üst seviyeye taşımayı hedefleyen Tatilsana, mobil uygulamasını baştan sona yeniledi. Yeni arayüz ve özelliklerle tatil planlamak artık çok daha kolay.",
      link: "#" 
    },
    { 
      date: "2025-01-20", 
      title: "Tatilsana, Sektörde Yılın En İyi Çıkış Yapan Seyahat Platformu Ödülünü Aldı", 
      summary: "Tatilsana, yenilikçi yaklaşımı ve müşteri memnuniyetine verdiği önem sayesinde prestijli bir ödülün sahibi oldu.",
      link: "#" 
    },
  ];

  const mediaKit = {
    logoUrl: "/logo-high-res.png",
    companyProfileUrl: "/tatilsana-company-profile.pdf",
    brandGuidelinesUrl: "/tatilsana-brand-guidelines.pdf"
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <Newspaper className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Basın Odası</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tatilsana hakkında en son haberler, basın bültenleri ve medya materyalleri.
        </p>
      </motion.div>

      <section className="mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-center mb-12"
        >
          Basın Bültenleri
        </motion.h2>
        <div className="space-y-8">
          {pressReleases.map((release, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <CalendarDays className="h-4 w-4 mr-2" />
                <span>{new Date(release.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{release.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">{release.summary}</p>
              <Button asChild variant="link" className="p-0 h-auto">
                <Link to={release.link}>Devamını Oku <Download className="h-4 w-4 ml-2" /></Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-16 p-8 bg-gray-100 rounded-lg"
      >
        <h2 className="text-3xl font-semibold text-center mb-8">Medya Kiti</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img  alt="Tatilsana Logo" className="h-16 mx-auto mb-4" src="https://res.cloudinary.com/dpoalndyg/image/upload/v1746808378/tatilsana_new_logo_wqjhr7.png" />
            <h4 className="font-semibold mb-2">Yüksek Çözünürlüklü Logo</h4>
            <Button asChild>
              <a href={mediaKit.logoUrl} download>İndir</a>
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Newspaper className="h-16 text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Şirket Profili</h4>
            <Button asChild>
              <a href={mediaKit.companyProfileUrl} download>İndir (PDF)</a>
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img  alt="Marka Kılavuzu ikonu" className="h-16 mx-auto mb-4" src="https://images.unsplash.com/photo-1599213153841-a1d614be79de" />
            <h4 className="font-semibold mb-2">Marka Kılavuzu</h4>
            <Button asChild>
              <a href={mediaKit.brandGuidelinesUrl} download>İndir (PDF)</a>
            </Button>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Basın İletişim</h2>
        <p className="text-gray-700 mb-2">Medya ve basınla ilgili tüm sorularınız için:</p>
        <p className="text-primary font-semibold text-lg mb-1">E-posta: <a href="mailto:info@tatilsana.com" className="hover:underline">info@tatilsana.com</a></p>
        <p className="text-gray-600">Telefon: +90 212 987 65 43</p>
      </motion.section>
    </div>
  );
};

export default PressPage;