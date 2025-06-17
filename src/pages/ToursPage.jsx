import React, { useState, useMemo } from "react";
import TourCard from "@/components/TourCard";
import { tours as allTours } from "@/data/tours";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Filter, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ToursPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 15000]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const uniqueDurations = useMemo(() => {
    const durations = allTours.map(tour => tour.duration);
    return [...new Set(durations)];
  }, []);

  const handleDurationChange = (duration) => {
    setSelectedDurations(prev => 
      prev.includes(duration) 
        ? prev.filter(d => d !== duration)
        : [...prev, duration]
    );
  };

  const filteredTours = useMemo(() => {
    return allTours.filter(tour => {
      const matchesSearchTerm = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                tour.destination.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = tour.price >= priceRange[0] && tour.price <= priceRange[1];
      const matchesDuration = selectedDurations.length === 0 || selectedDurations.includes(tour.duration);
      return matchesSearchTerm && matchesPrice && matchesDuration;
    });
  }, [searchTerm, priceRange, selectedDurations]);

  const resetFilters = () => {
    setSearchTerm("");
    setPriceRange([0, 15000]);
    setSelectedDurations([]);
  };

  const filterPanelVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: "0%", opacity: 1 },
    exit: { x: "-100%", opacity: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gradient mb-2">Turlar</h1>
        <p className="text-lg text-gray-600">Hayalinizdeki macerayı bulun</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:hidden mb-4">
          <Button onClick={() => setIsFiltersOpen(true)} className="w-full">
            <Filter className="mr-2 h-4 w-4" /> Filtreler
          </Button>
        </div>

        <AnimatePresence>
          {isFiltersOpen && (
            <motion.div 
              key="filter-panel-mobile"
              variants={filterPanelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 z-50 bg-white p-6 lg:hidden overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Filtreler</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsFiltersOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              {renderFilters(resetFilters, searchTerm, setSearchTerm, priceRange, setPriceRange, uniqueDurations, selectedDurations, handleDurationChange)}
            </motion.div>
          )}
        </AnimatePresence>
        
        <aside className="hidden lg:block lg:w-1/4 sticky top-24 self-start">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Filtreler</h2>
            {renderFilters(resetFilters, searchTerm, setSearchTerm, priceRange, setPriceRange, uniqueDurations, selectedDurations, handleDurationChange)}
          </div>
        </aside>

        <main className="lg:w-3/4">
          {filteredTours.length > 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filteredTours.map(tour => (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <TourCard tour={tour} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Search className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Sonuç Bulunamadı</h3>
              <p className="text-gray-500">Arama kriterlerinize uygun tur bulunamadı. Lütfen filtrelerinizi değiştirmeyi deneyin.</p>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
};

const renderFilters = (resetFilters, searchTerm, setSearchTerm, priceRange, setPriceRange, uniqueDurations, selectedDurations, handleDurationChange) => (
  <>
    <div className="mb-6">
      <Label htmlFor="search-tour" className="text-sm font-medium">Tur Ara</Label>
      <Input
        id="search-tour"
        type="text"
        placeholder="Tur adı veya destinasyon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-1"
      />
    </div>

    <div className="mb-6">
      <Label className="text-sm font-medium">Fiyat Aralığı</Label>
      <Slider
        min={0}
        max={15000}
        step={500}
        value={priceRange}
        onValueChange={setPriceRange}
        className="mt-2"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{priceRange[0]} TL</span>
        <span>{priceRange[1]} TL</span>
      </div>
    </div>

    <div className="mb-6">
      <Label className="text-sm font-medium">Süre</Label>
      <div className="mt-2 space-y-2">
        {uniqueDurations.map(duration => (
          <div key={duration} className="flex items-center space-x-2">
            <Checkbox
              id={`duration-${duration.replace(/\s+/g, "-")}`}
              checked={selectedDurations.includes(duration)}
              onCheckedChange={() => handleDurationChange(duration)}
            />
            <Label htmlFor={`duration-${duration.replace(/\s+/g, "-")}`} className="text-sm font-normal">
              {duration}
            </Label>
          </div>
        ))}
      </div>
    </div>

    <Button onClick={resetFilters} variant="outline" className="w-full">
      Filtreleri Temizle
    </Button>
  </>
);

export default ToursPage;