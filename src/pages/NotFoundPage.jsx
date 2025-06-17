import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertTriangle, Home } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50">
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10, duration: 0.7 }}
      >
        <AlertTriangle className="h-32 w-32 text-red-400 mx-auto mb-8" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-6xl md:text-8xl font-extrabold text-red-500 mb-4"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6"
      >
        Sayfa Bulunamadı
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg text-gray-500 mb-10 max-w-md"
      >
        Aradığınız sayfa mevcut değil, taşınmış veya silinmiş olabilir. Lütfen adresi kontrol edin veya ana sayfaya dönün.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link to="/">
          <Button size="lg" className="gap-2 bg-red-500 hover:bg-red-600 text-white">
            <Home className="h-5 w-5" />
            Ana Sayfaya Dön
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;