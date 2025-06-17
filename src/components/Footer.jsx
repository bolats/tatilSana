import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Şirket",
      links: [
        { label: "Hakkımızda", to: "/hakkimizda" },
        { label: "Kariyer", to: "/kariyer" },
        { label: "Basın", to: "/basin" },
        { label: "Blog", to: "/blog" },
      ],
    },
    {
      title: "Destek",
      links: [
        { label: "İletişim", to: "/iletisim" },
        { label: "S.S.S.", to: "/sss" },
        { label: "Canlı Destek", to: "/canli-destek" },
      ],
    },
    {
      title: "Yasal",
      links: [
        { label: "Gizlilik Politikası", to: "/gizlilik-politikasi" },
        { label: "Kullanım Şartları", to: "/kullanim-sartlari" },
        { label: "Çerez Politikası", to: "/cerez-politikasi" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, label: "Facebook", to: "#" },
    { icon: <Instagram className="h-5 w-5" />, label: "Instagram", to: "#" },
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter", to: "#" },
    { icon: <Youtube className="h-5 w-5" />, label: "Youtube", to: "#" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", to: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Tatilsana</h3>
            <p className="text-sm">
              Hayalinizdeki tatili planlamak için en doğru adres. En iyi turlar ve oteller Tatilsana'da!
            </p>
          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.to} className="text-sm hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} Tatilsana. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Link key={index} to={social.to} aria-label={social.label} className="hover:text-primary transition-colors">
                {social.icon}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;