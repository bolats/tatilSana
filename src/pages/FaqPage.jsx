import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqPage = () => {
  const faqItems = [
    {
      question: "Nasıl rezervasyon yapabilirim?",
      answer: "Web sitemiz üzerinden tur veya otel seçiminizi yaptıktan sonra, 'Rezervasyon Yap' butonuna tıklayarak adımları takip edebilirsiniz. Gerekli bilgileri doldurduktan ve ödemeyi tamamladıktan sonra rezervasyonunuz onaylanacaktır."
    },
    {
      question: "Ödeme seçenekleri nelerdir?",
      answer: "Kredi kartı, banka kartı ve havale/EFT gibi çeşitli ödeme yöntemlerini kabul ediyoruz. Ödeme sayfasında mevcut tüm seçenekleri görebilirsiniz."
    },
    {
      question: "Rezervasyonumu iptal edebilir miyim veya değiştirebilir miyim?",
      answer: "İptal ve değişiklik koşulları, seçtiğiniz tur veya otelin politikalarına göre değişiklik göstermektedir. Rezervasyon yapmadan önce ilgili politikaları dikkatlice okumanızı öneririz. Detaylı bilgi için müşteri hizmetlerimizle iletişime geçebilirsiniz."
    },
    {
      question: "Vize işlemleri konusunda yardımcı oluyor musunuz?",
      answer: "Vize işlemleri tamamen yolcunun sorumluluğundadır. Ancak, bazı turlarımız için vize danışmanlık hizmeti sunan anlaşmalı kurumlarımız hakkında bilgi verebiliriz. Lütfen gitmek istediğiniz destinasyonun vize gerekliliklerini önceden kontrol edin."
    },
    {
      question: "Tur fiyatlarına neler dahildir?",
      answer: "Tur fiyatlarına dahil olan hizmetler turdan tura değişiklik göstermektedir. Genellikle konaklama, rehberlik hizmetleri, belirtilen öğünler ve bazı aktiviteler dahildir. Tur detay sayfasında 'Fiyata Dahil Olanlar' bölümünü inceleyebilirsiniz."
    },
    {
      question: "Seyahat sigortası yaptırmak zorunlu mu?",
      answer: "Seyahat sigortası bazı turlar için zorunlu olabilirken, bazıları için isteğe bağlıdır. Ancak, olası sağlık sorunları, bagaj kaybı veya tur iptalleri gibi durumlara karşı seyahat sigortası yaptırmanızı şiddetle tavsiye ederiz."
    },
    {
      question: "Çocuklar için indirim var mı?",
      answer: "Evet, birçok tur ve otelimizde çocuklar için yaşa göre değişen oranlarda indirimler uygulanmaktadır. Rezervasyon sırasında çocuk sayısını ve yaşlarını belirttiğinizde indirimli fiyatları görebilirsiniz."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <HelpCircle className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Sıkça Sorulan Sorular (S.S.S.)</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tatilsana hizmetleri hakkında merak ettiğiniz her şey. Aradığınız cevabı bulamazsanız, lütfen bizimle <a href="/iletisim" className="text-primary hover:underline">iletişime geçin</a>.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b">
              <AccordionTrigger className="text-left hover:no-underline py-4 text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pt-1 pb-4 text-gray-700 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
};

export default FaqPage;