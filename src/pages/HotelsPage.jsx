import React, { useState, useMemo } from "react";
import HotelCard from "@/components/HotelCard";
import { hotels as allHotels } from "@/data/hotels";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Filter, Search, Star, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HotelsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const uniqueAmenities = useMemo(() => {
    const amenities = allHotels.flatMap(hotel => hotel.amenities || []);
    return [...new Set(amenities)];
  }, []);
  const [selectedAmenities, setSelectedAmenities] = useState([]);


  const handleRatingChange = (rating) => {
    setSelectedRatings(prev => 
      prev.includes(rating) 
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };

  const handleAmenityChange = (amenity) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  const filteredHotels = useMemo(() => {
    return allHotels.filter(hotel => {
      const matchesSearchTerm = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                hotel.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
      const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(Math.floor(hotel.rating));
      const matchesAmenities = selectedAmenities.length === 0 || selectedAmenities.every(sa => hotel.amenities && hotel.amenities.includes(sa));
      return matchesSearchTerm && matchesPrice && matchesRating && matchesAmenities;
    });
  }, [searchTerm, priceRange, selectedRatings, selectedAmenities]);

  const resetFilters = () => {
    setSearchTerm("");
    setPriceRange([0, 10000]);
    setSelectedRatings([]);
    setSelectedAmenities([]);
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
        <h1 className="text-4xl font-bold text-gradient mb-2">Oteller</h1>
        <p className="text-lg text-gray-600">Konforlu bir konaklama için en iyi seçenekler</p>
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
              key="filter-panel-mobile-hotel"
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
              {renderHotelFilters(resetFilters, searchTerm, setSearchTerm, priceRange, setPriceRange, selectedRatings, handleRatingChange, uniqueAmenities, selectedAmenities, handleAmenityChange)}
            </motion.div>
          )}
        </AnimatePresence>
        
        <aside className="hidden lg:block lg:w-1/4 sticky top-24 self-start">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Filtreler</h2>
            {renderHotelFilters(resetFilters, searchTerm, setSearchTerm, priceRange, setPriceRange, selectedRatings, handleRatingChange, uniqueAmenities, selectedAmenities, handleAmenityChange)}
          </div>
        </aside>

        <main className="lg:w-3/4">
          {filteredHotels.length > 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filteredHotels.map(hotel => (
                <motion.div
                  key={hotel.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HotelCard hotel={hotel} />
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
              <p className="text-gray-500">Arama kriterlerinize uygun otel bulunamadı. Lütfen filtrelerinizi değiştirmeyi deneyin.</p>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
};

const renderHotelFilters = (resetFilters, searchTerm, setSearchTerm, priceRange, setPriceRange, selectedRatings, handleRatingChange, uniqueAmenities, selectedAmenities, handleAmenityChange) => (
  <>
    <div className="mb-6">
      <Label htmlFor="search-hotel" className="text-sm font-medium">Otel Ara</Label>
      <Input
        id="search-hotel"
        type="text"
        placeholder="Otel adı veya şehir..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-1"
      />
    </div>

    <div className="mb-6">
      <Label className="text-sm font-medium">Fiyat Aralığı (Gecelik)</Label>
      <Slider
        min={0}
        max={25000}
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
      <Label className="text-sm font-medium">Yıldız Derecelendirmesi</Label>
      <div className="mt-2 space-y-2">
        {[5, 4, 3].map(rating => (
          <div key={rating} className="flex items-center space-x-2">
            <Checkbox
              id={`rating-${rating}`}
              checked={selectedRatings.includes(rating)}
              onCheckedChange={() => handleRatingChange(rating)}
            />
            <Label htmlFor={`rating-${rating}`} className="text-sm font-normal flex items-center">
              {Array(rating).fill(0).map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
              {Array(5-rating).fill(0).map((_, i) => <Star key={i+rating} className="h-4 w-4 text-gray-300" />)}
            </Label>
          </div>
        ))}
      </div>
    </div>

    <div className="mb-6">
      <Label className="text-sm font-medium">Olanaklar</Label>
      <div className="mt-2 space-y-2 max-h-40 overflow-y-auto">
        {uniqueAmenities.map(amenity => (
          <div key={amenity} className="flex items-center space-x-2">
            <Checkbox
              id={`amenity-${amenity}`}
              checked={selectedAmenities.includes(amenity)}
              onCheckedChange={() => handleAmenityChange(amenity)}
            />
            <Label htmlFor={`amenity-${amenity}`} className="text-sm font-normal capitalize">
              {amenity.replace(/_/g, " ")}
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

export default HotelsPage;