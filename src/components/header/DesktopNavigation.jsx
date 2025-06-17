import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/turlar", label: "Turlar" },
  { to: "/oteller", label: "Oteller" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/iletisim", label: "İletişim" },
];

const DesktopNavigation = () => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNavigation;