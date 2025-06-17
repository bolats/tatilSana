import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import ToursPage from "@/pages/ToursPage";
import TourDetailPage from "@/pages/TourDetailPage";
import HotelsPage from "@/pages/HotelsPage";
import HotelDetailPage from "@/pages/HotelDetailPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import ProfilePage from "@/pages/ProfilePage";
import ReservationsPage from "@/pages/ReservationsPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsOfServicePage from "@/pages/TermsOfServicePage";
import CookiePolicyPage from "@/pages/CookiePolicyPage";
import CareerPage from "@/pages/CareerPage";
import PressPage from "@/pages/PressPage";
import BlogPage from "@/pages/BlogPage";
import FaqPage from "@/pages/FaqPage";
import LiveSupportPage from "@/pages/LiveSupportPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { AuthProvider } from "@/contexts/AuthContext";
import { ReservationProvider } from "@/contexts/ReservationContext";
import { Toaster } from "@/components/ui/toaster";
import { motion, AnimatePresence } from "framer-motion";

const PageLayout = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <ReservationProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<PageLayout><HomePage /></PageLayout>} />
                  <Route path="/turlar" element={<PageLayout><ToursPage /></PageLayout>} />
                  <Route path="/turlar/:id" element={<PageLayout><TourDetailPage /></PageLayout>} />
                  <Route path="/oteller" element={<PageLayout><HotelsPage /></PageLayout>} />
                  <Route path="/oteller/:id" element={<PageLayout><HotelDetailPage /></PageLayout>} />
                  <Route path="/hakkimizda" element={<PageLayout><AboutPage /></PageLayout>} />
                  <Route path="/iletisim" element={<PageLayout><ContactPage /></PageLayout>} />
                  <Route path="/giris" element={<PageLayout><LoginPage /></PageLayout>} />
                  <Route path="/kayit" element={<PageLayout><RegisterPage /></PageLayout>} />
                  <Route path="/profil" element={<PageLayout><ProfilePage /></PageLayout>} />
                  <Route path="/rezervasyonlarim" element={<PageLayout><ReservationsPage /></PageLayout>} />
                  <Route path="/gizlilik-politikasi" element={<PageLayout><PrivacyPolicyPage /></PageLayout>} />
                  <Route path="/kullanim-sartlari" element={<PageLayout><TermsOfServicePage /></PageLayout>} />
                  <Route path="/cerez-politikasi" element={<PageLayout><CookiePolicyPage /></PageLayout>} />
                  <Route path="/kariyer" element={<PageLayout><CareerPage /></PageLayout>} />
                  <Route path="/basin" element={<PageLayout><PressPage /></PageLayout>} />
                  <Route path="/blog" element={<PageLayout><BlogPage /></PageLayout>} />
                  <Route path="/blog/:id" element={<PageLayout><BlogPage /></PageLayout>} />
                  <Route path="/sss" element={<PageLayout><FaqPage /></PageLayout>} />
                  <Route path="/canli-destek" element={<PageLayout><LiveSupportPage /></PageLayout>} />
                  <Route path="*" element={<PageLayout><NotFoundPage /></PageLayout>} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
            <Toaster />
          </div>
        </ReservationProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;