import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Eye, Award } from "lucide-react";

const AboutPage = () => {
  const teamMembers = [
    { name: "Ayşe Yılmaz", role: "CEO & Kurucu Ortak", image: "team1.jpg", description: "Seyahat tutkunu ve deneyimli bir girişimci." },
    { name: "Mehmet Özdemir", role: "CTO & Kurucu Ortak", image: "team2.jpg", description: "Teknoloji ve inovasyon odaklı bir lider." },
    { name: "Zeynep Kaya", role: "Operasyon Müdürü", image: "team3.jpg", description: "Müşteri memnuniyetini her zaman ön planda tutar." },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Hakkımızda</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tatilsana olarak, unutulmaz seyahat deneyimleri sunmak için buradayız. Misyonumuz, vizyonumuz ve değerlerimizle tanışın.
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
              alt="Hakkımızda - Ofis Ortamı"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
             src="https://images.unsplash.com/photo-1566833546763-672775492199" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-6">Biz Kimiz?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tatilsana, seyahat tutkunlarının hayallerini gerçeğe dönüştürmek amacıyla kurulmuş yenilikçi bir platformdur. Geniş tur ve otel seçeneklerimiz, kullanıcı dostu arayüzümüz ve müşteri odaklı hizmet anlayışımızla sektörde fark yaratmayı hedefliyoruz.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Deneyimli ekibimiz, her bütçeye ve zevke uygun tatil alternatifleri sunmak için titizlikle çalışmaktadır. Teknolojiyi yakından takip ederek, seyahat planlama sürecinizi kolaylaştırmak ve size en iyi deneyimi yaşatmak için sürekli kendimizi geliştiriyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mb-16 py-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6"
          >
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Misyonumuz</h3>
            <p className="text-gray-600">
              Herkesin hayalindeki tatile kolayca ulaşmasını sağlamak, kaliteli ve güvenilir hizmet sunarak müşteri memnuniyetini en üst düzeye çıkarmak.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6"
          >
            <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Vizyonumuz</h3>
            <p className="text-gray-600">
              Türkiye'nin lider seyahat platformu olmak ve global pazarda tanınan, tercih edilen bir marka haline gelmek.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6"
          >
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Değerlerimiz</h3>
            <ul className="text-gray-600 space-y-1">
              <li>Müşteri Odaklılık</li>
              <li>Güvenilirlik ve Şeffaflık</li>
              <li>Yenilikçilik ve Sürekli Gelişim</li>
              <li>Takım Çalışması ve İşbirliği</li>
              <li>Sorumluluk Sahibi Olmak</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-center mb-12"
        >
          Ekibimizle Tanışın
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center card-hover"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                <img  
                  alt={member.name}
                  className="w-full h-full object-cover"
                 src="https://images.unsplash.com/photo-1603991414220-51b87b89a371" />
              </div>
              <h4 className="text-xl font-semibold text-primary mb-1">{member.name}</h4>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <p className="text-sm text-gray-600">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;