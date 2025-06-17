import React from "react";
import { Menu, X } from "lucide-react";

const MobileMenuButton = ({ isMenuOpen, toggleMenu }) => {
  return (
    <button
      className="md:hidden flex items-center text-gray-700"
      onClick={toggleMenu}
      aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
    >
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

export default MobileMenuButton;