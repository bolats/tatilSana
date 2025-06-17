const maviDenizResort = {
  id: "1",
  name: "Mavi Deniz Resort & Spa",
  location: "Antalya, Kemer",
  description: "Akdeniz'in berrak sularına sıfır konumda, lüks bir tatil deneyimi sunan 5 yıldızlı otel. Özel plajı, açık ve kapalı havuzları, spa merkezi ile tam bir dinlenme fırsatı.",
  price: 1200, oldPrice: 1500, discount: 20, rating: 4.7, reviewCount: 230,
  amenities: ["wifi", "breakfast", "restaurant", "pool", "spa", "beach"],
  rooms: [
    { id: "101", type: "Standart Oda", price: 1200, capacity: 2, description: "Deniz veya bahçe manzaralı, konforlu standart odalar.", features: ["Klima", "Minibar", "LCD TV", "Balkon", "Ücretsiz Wi-Fi"] },
    { id: "102", type: "Aile Odası", price: 1800, capacity: 4, description: "Aileler için ideal, geniş ve konforlu odalar.", features: ["Klima", "Minibar", "LCD TV", "Balkon", "Ücretsiz Wi-Fi", "Ayrı Yatak Odası"] },
    { id: "103", type: "Deluxe Suite", price: 2500, capacity: 2, description: "Lüks ve konfor arayanlar için özel tasarlanmış süit odalar.", features: ["Klima", "Minibar", "LCD TV", "Jakuzi", "Deniz Manzarası", "Özel Teras"] }
  ],
  images: [ "https://images.unsplash.com/photo-1566073771259-6a8506099945", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9" ],
  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
};

const istanbulBosphorusHotel = {
  id: "2",
  name: "İstanbul Bosphorus Hotel",
  location: "İstanbul, Beşiktaş",
  description: "Boğaz'ın eşsiz manzarasına sahip, şehrin merkezinde konumlanmış butik otel. Tarihi yarımadaya ve alışveriş merkezlerine yakın konumu ile İstanbul'u keşfetmek için ideal.",
  price: 1500, rating: 4.8, reviewCount: 186,
  amenities: ["wifi", "breakfast", "restaurant"],
  rooms: [
    { id: "201", type: "Standart Oda", price: 1500, capacity: 2, description: "Şehir manzaralı, şık dekore edilmiş odalar.", features: ["Klima", "Minibar", "LCD TV", "Ücretsiz Wi-Fi"] },
    { id: "202", type: "Boğaz Manzaralı Oda", price: 2200, capacity: 2, description: "Boğaz'ın muhteşem manzarasına sahip lüks odalar.", features: ["Klima", "Minibar", "LCD TV", "Balkon", "Ücretsiz Wi-Fi"] },
    { id: "203", type: "Executive Suite", price: 3000, capacity: 2, description: "Geniş yaşam alanı ve lüks detaylarla donatılmış süit odalar.", features: ["Klima", "Minibar", "LCD TV", "Oturma Alanı", "Boğaz Manzarası", "Jakuzi"] }
  ],
  images: [ "https://images.unsplash.com/photo-1568084680786-a84f91d1153c", "https://images.unsplash.com/photo-1618773928121-c32242e63f39", "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e" ],
  image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c"
};

const kapadokyaTasKonak = {
  id: "3",
  name: "Kapadokya Taş Konak",
  location: "Nevşehir, Ürgüp",
  description: "Kapadokya'nın eşsiz doğasında, geleneksel taş mimarisi ile inşa edilmiş butik otel. Peri bacalarının arasında unutulmaz bir konaklama deneyimi.",
  price: 900, oldPrice: 1100, discount: 18, rating: 4.9, reviewCount: 120,
  amenities: ["wifi", "breakfast", "restaurant"],
  rooms: [
    { id: "301", type: "Standart Oda", price: 900, capacity: 2, description: "Geleneksel taş mimarisi ile dekore edilmiş konforlu odalar.", features: ["Klima", "Minibar", "LCD TV", "Ücretsiz Wi-Fi"] },
    { id: "302", type: "Deluxe Oda", price: 1200, capacity: 2, description: "Daha geniş, özel dekore edilmiş odalar.", features: ["Klima", "Minibar", "LCD TV", "Oturma Alanı", "Ücretsiz Wi-Fi"] },
    { id: "303", type: "Mağara Suite", price: 1800, capacity: 2, description: "Doğal mağara içerisinde özel tasarlanmış eşsiz süit odalar.", features: ["Klima", "Minibar", "LCD TV", "Jakuzi", "Şömine", "Özel Teras"] }
  ],
  images: [ 
    "https://images.unsplash.com/photo-1605346484980-51de707d25f5", 
    "https://images.unsplash.com/photo-1560320880-14c4ef109080", 
    "https://images.unsplash.com/photo-1570974904527-105ad81141e7" 
  ],
  image: "https://images.unsplash.com/photo-1605346484980-51de707d25f5" 
};

const bodrumParadiseBay = {
  id: "4",
  name: "Bodrum Paradise Bay",
  location: "Muğla, Bodrum",
  description: "Bodrum'un masmavi koyunda, özel plajı ve muhteşem manzarası ile lüks bir tatil deneyimi sunan 5 yıldızlı resort otel.",
  price: 1800, oldPrice: 2200, discount: 18, rating: 4.6, reviewCount: 210,
  amenities: ["wifi", "breakfast", "restaurant", "pool", "spa", "beach"],
  rooms: [
    { id: "401", type: "Standart Oda", price: 1800, capacity: 2, description: "Deniz veya bahçe manzaralı, modern dekore edilmiş odalar.", features: ["Klima", "Minibar", "LCD TV", "Balkon", "Ücretsiz Wi-Fi"] },
    { id: "402", type: "Deluxe Oda", price: 2400, capacity: 2, description: "Deniz manzaralı, geniş ve lüks odalar.", features: ["Klima", "Minibar", "LCD TV", "Geniş Balkon", "Ücretsiz Wi-Fi"] },
    { id: "403", type: "Villa Suite", price: 4000, capacity: 4, description: "Özel havuzlu, tam donanımlı lüks villalar.", features: ["Klima", "Tam Donanımlı Mutfak", "LCD TV", "Özel Havuz", "Deniz Manzarası", "Teras"] }
  ],
  images: [ "https://images.unsplash.com/photo-1584132967334-10e028bd69f7", "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8", "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6" ],
  image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7"
};

const fethiyeBlueLagoon = {
  id: "5",
  name: "Fethiye Blue Lagoon Resort",
  location: "Muğla, Fethiye",
  description: "Ölüdeniz'in turkuaz sularına yakın konumda, doğayla iç içe bir tatil deneyimi sunan resort otel.",
  price: 1100, rating: 4.5, reviewCount: 175,
  amenities: ["wifi", "breakfast", "restaurant", "pool"],
  rooms: [
    { id: "501", type: "Standart Oda", price: 1100, capacity: 2, description: "Bahçe manzaralı, konforlu odalar.", features: ["Klima", "Minibar", "LCD TV", "Balkon", "Ücretsiz Wi-Fi"] },
    { id: "502", type: "Aile Odası", price: 1600, capacity: 4, description: "Aileler için ideal, geniş ve konforlu odalar.", features: ["Klima", "Minibar", "LCD TV", "Balkon", "Ücretsiz Wi-Fi", "Ayrı Yatak Odası"] },
    { id: "503", type: "Bungalow", price: 2000, capacity: 2, description: "Bahçe içerisinde özel bungalow evler.", features: ["Klima", "Minibar", "LCD TV", "Teras", "Bahçe", "Ücretsiz Wi-Fi"] }
  ],
  images: [ "https://images.unsplash.com/photo-1602002418816-5c0ae93f68bc", "https://images.unsplash.com/photo-1598503409130-09838039effe", "https://images.unsplash.com/photo-1540541338287-41700207dee6" ],
  image: "https://images.unsplash.com/photo-1602002418816-5c0ae93f68bc"
};

const trabzonYaylaResort = {
  id: "6",
  name: "Trabzon Yayla Resort",
  location: "Trabzon, Uzungöl",
  description: "Karadeniz'in eşsiz doğasında, göl kenarında konumlanmış, geleneksel mimariye sahip otel.",
  price: 850, rating: 4.4, reviewCount: 95,
  amenities: ["wifi", "breakfast", "restaurant"],
  rooms: [
    { id: "601", type: "Standart Oda", price: 850, capacity: 2, description: "Göl veya dağ manzaralı, ahşap dekore edilmiş odalar.", features: ["Isıtma", "LCD TV", "Balkon", "Ücretsiz Wi-Fi"] },
    { id: "602", type: "Aile Odası", price: 1200, capacity: 4, description: "Aileler için ideal, geniş ve konforlu odalar.", features: ["Isıtma", "LCD TV", "Balkon", "Ücretsiz Wi-Fi", "Ayrı Yatak Odası"] },
    { id: "603", type: "Göl Manzaralı Suite", price: 1500, capacity: 2, description: "Göl manzaralı, özel tasarlanmış süit odalar.", features: ["Isıtma", "LCD TV", "Geniş Balkon", "Oturma Alanı", "Ücretsiz Wi-Fi"] }
  ],
  images: [ "https://images.unsplash.com/photo-1559274097-2dc3c4a0527e", "https://images.unsplash.com/photo-1598403303060-0338ddc1460a", "https://images.unsplash.com/photo-1615618922335-9e2cd04a9aef" ],
  image: "https://images.unsplash.com/photo-1559274097-2dc3c4a0527e"
};

export const hotels = [
  maviDenizResort,
  istanbulBosphorusHotel,
  kapadokyaTasKonak,
  bodrumParadiseBay,
  fethiyeBlueLagoon,
  trabzonYaylaResort
];
