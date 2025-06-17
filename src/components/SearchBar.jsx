import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Calendar, MapPin, Users, Search } from "lucide-react";
import { motion } from "framer-motion";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState("tur");
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    // Basit bir arama parametresi oluştur
    const searchParams = new URLSearchParams();
    if (destination) searchParams.append("destination", destination);
    if (dates) searchParams.append("dates", dates);
    if (guests) searchParams.append("guests", guests);

    // Arama tipine göre yönlendir
    if (searchType === "tur") {
      navigate(`/turlar?${searchParams.toString()}`);
    } else {
      navigate(`/oteller?${searchParams.toString()}`);
    }
  };

  return (
    <div className="w-full max-w-4xl text-black mx-auto bg-white rounded-xl shadow-lg p-1 sm:p-2">
      <Tabs defaultValue="tur" onValueChange={setSearchType} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="tur" className="text-base">
            Tur Ara
          </TabsTrigger>
          <TabsTrigger value="otel" className="text-base">
            Otel Ara
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tur" className="mt-0">
          <form
            onSubmit={handleSearch}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          >
            <div className="relative">
              <MapPin
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type="text"
                placeholder="Nereye gitmek istiyorsunuz?"
                className="pl-10"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            <div className="relative">
              <Calendar
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type="text"
                placeholder="Tarih seçin"
                className="pl-10"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
              />
            </div>

            <div className="relative">
              <Users
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type="text"
                placeholder="Kişi sayısı"
                className="pl-10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button type="submit" className="w-full h-10">
                <Search className="mr-2 h-4 w-4" /> Tur Ara
              </Button>
            </motion.div>
          </form>
        </TabsContent>

        <TabsContent value="otel" className="mt-0">
          <form
            onSubmit={handleSearch}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          >
            <div className="relative">
              <MapPin
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type="text"
                placeholder="Şehir veya otel adı"
                className="pl-10"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            <div className="relative">
              <Calendar
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type="text"
                placeholder="Giriş - Çıkış tarihi"
                className="pl-10"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
              />
            </div>

            <div className="relative">
              <Users
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type="text"
                placeholder="Kişi ve oda sayısı"
                className="pl-10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button type="submit" className="w-full h-10">
                <Search className="mr-2 h-4 w-4" /> Otel Ara
              </Button>
            </motion.div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchBar;
