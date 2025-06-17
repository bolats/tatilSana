import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/turlar", label: "Turlar" },
  { to: "/oteller", label: "Oteller" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/iletisim", label: "İletişim" },
];

const menuVariants = {
  closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  open: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.07, delayChildren: 0.1 } },
};

const itemVariants = {
  closed: { opacity: 0, y: -10 },
  open: { opacity: 1, y: 0 },
};

const MobileMenu = ({ isMenuOpen, closeMenu, user, logout }) => {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="md:hidden bg-white border-b"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <motion.div variants={itemVariants} key={link.to}>
                <Link
                  to={link.to}
                  className="block py-2 text-base font-medium hover:text-primary"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            
            <div className="pt-4 border-t">
              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar || ""} alt={user.name || "Kullanıcı Avatarı"} />
                      <AvatarFallback className="bg-primary text-white">
                        {user.name?.charAt(0).toUpperCase() || "K"}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{user.name || "Kullanıcı"}</p>
                      <p className="text-xs text-muted-foreground">{user.email || "kullanici@example.com"}</p>
                    </div>
                  </div>
                  <motion.div variants={itemVariants}>
                    <Link
                      to="/profil"
                      className="block py-2 text-base font-medium hover:text-primary"
                      onClick={closeMenu}
                    >
                      Profilim
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link
                      to="/rezervasyonlarim"
                      className="block py-2 text-base font-medium hover:text-primary"
                      onClick={closeMenu}
                    >
                      Rezervasyonlarım
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <button
                      onClick={() => {
                        logout();
                        closeMenu();
                      }}
                      className="block w-full text-left py-2 text-base font-medium text-red-500 hover:text-red-600"
                    >
                      Çıkış Yap
                    </button>
                  </motion.div>
                </div>
              ) : (
                <div className="flex flex-col space-y-3">
                  <motion.div variants={itemVariants} className="w-full">
                    <Link to="/giris" onClick={closeMenu}>
                      <Button variant="outline" className="w-full">
                        Giriş Yap
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants} className="w-full">
                    <Link to="/kayit" onClick={closeMenu}>
                      <Button className="w-full">Üye Ol</Button>
                    </Link>
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;