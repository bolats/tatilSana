const kapadokyaTour = {
  id: "1",
  title: "Kapadokya Balon Turu",
  destination: "Kapadokya, Nevşehir",
  description: "Eşsiz peri bacaları manzarası eşliğinde unutulmaz bir balon deneyimi yaşayın. Güneşin doğuşunu gökyüzünden izlemenin keyfini çıkarın.",
  duration: "3 gün 2 gece",
  price: 10000,
  oldPrice: 15000,
  discount: 12,
  rating: 4.8,
  reviewCount: 124,
  minGuests: 2,
  features: [
    "Balon turu",
    "Konaklama",
    "Kahvaltı",
    "Rehberlik hizmeti",
    "Ulaşım"
  ],
  itinerary: [
    { day: 1, title: "Varış ve Tanışma", description: "Nevşehir Havalimanı'ndan karşılama, otele transfer ve akşam yemeği." },
    { day: 2, title: "Balon Turu ve Açık Hava Müzesi", description: "Sabah erken saatlerde balon turu, kahvaltı, Göreme Açık Hava Müzesi ziyareti." },
    { day: 3, title: "Yeraltı Şehri ve Dönüş", description: "Derinkuyu Yeraltı Şehri ziyareti, öğle yemeği ve havalimanına transfer." }
  ],
  images: [ "https://images.unsplash.com/photo-1599463966301-f82cd13c735c", "https://images.unsplash.com/photo-1570974904527-105ad81141e7", "https://images.unsplash.com/photo-1560320880-14c4ef109080" ],
  image: "https://images.unsplash.com/photo-1599463966301-f82cd13c735c"
};

const antalyaTour = {
  id: "2",
  title: "Antalya Lüks Tatil Paketi",
  destination: "Antalya",
  description: "Turkuaz denizi, altın kumsalları ve lüks her şey dahil otelleriyle Antalya'da mükemmel bir tatil sizi bekliyor.",
  duration: "5 gün 4 gece",
  price: 7500,
  oldPrice: 8200,
  discount: 23,
  rating: 4.6,
  reviewCount: 89,
  minGuests: 1,
  features: [ "5 yıldızlı otel konaklaması", "Her şey dahil konsept", "Havaalanı transferleri", "Plaj aktiviteleri", "Spa kullanımı" ],
  itinerary: [
    { day: 1, title: "Varış ve Yerleşme", description: "Antalya Havalimanı'ndan karşılama, otele transfer ve dinlenme." },
    { day: 2, title: "Plaj Keyfi", description: "Tüm gün plaj aktiviteleri ve su sporları." },
    { day: 3, title: "Antik Kent Turu", description: "Side ve Aspendos antik kentlerine yarım günlük tur." },
    { day: 4, title: "Tekne Turu", description: "Koyları keşfetmek için tekne turu ve yüzme molası." },
    { day: 5, title: "Dönüş", description: "Son gün serbest zaman ve havalimanına transfer." }
  ],
  images: [ "https://images.unsplash.com/photo-1677938103365-01934db259a3", "https://images.unsplash.com/photo-1589960095785-1df015db0ae2", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" ],
  image: "https://images.unsplash.com/photo-1677938103365-01934db259a3"
};

const istanbulTour = {
  id: "3",
  title: "İstanbul Kültür Turu",
  destination: "İstanbul",
  description: "İki kıtayı birleştiren şehirde, Bizans ve Osmanlı mirasını keşfedin. Tarihi yarımadada unutulmaz bir kültür turu.",
  duration: "4 gün 3 gece",
  price: 7200,
  rating: 4.7,
  reviewCount: 156,
  minGuests: 2,
  features: [ "Butik otel konaklaması", "Kahvaltı", "Profesyonel rehber", "Müze giriş ücretleri", "Boğaz turu" ],
  itinerary: [
    { day: 1, title: "Varış ve Oryantasyon", description: "İstanbul Havalimanı'ndan karşılama, otele transfer ve kısa bir yürüyüş turu." },
    { day: 2, title: "Tarihi Yarımada", description: "Ayasofya, Sultanahmet Camii, Topkapı Sarayı ve Kapalı Çarşı ziyareti." },
    { day: 3, title: "Boğaz Turu", description: "Boğaz turu, Dolmabahçe Sarayı ziyareti ve Taksim gezisi." },
    { day: 4, title: "Serbest Zaman ve Dönüş", description: "Serbest alışveriş zamanı ve havalimanına transfer." }
  ],
  images: [ "https://images.unsplash.com/photo-1676486640140-98f539fe8019", "https://images.unsplash.com/photo-1527838832700-5059252407fa", "https://images.unsplash.com/photo-1534275450406-b2483a743095" ],
  image: "https://images.unsplash.com/photo-1676486640140-98f539fe8019"
};

const bodrumTour = {
  id: "4",
  title: "Bodrum Yaz Tatili",
  destination: "Bodrum, Muğla",
  description: "Bembeyaz evleri, masmavi denizi ve canlı gece hayatıyla Bodrum'da unutulmaz bir yaz tatili.",
  duration: "6 gün 5 gece",
  price: 7600,
  oldPrice: 8200,
  discount: 12,
  rating: 4.5,
  reviewCount: 78,
  minGuests: 1,
  features: [ "Deniz manzaralı otel", "Yarım pansiyon konaklama", "Havaalanı transferleri", "Tekne turu", "Gümbet plajı girişi" ],
  itinerary: [
    { day: 1, title: "Varış", description: "Bodrum Havalimanı'ndan karşılama ve otele transfer." },
    { day: 2, title: "Bodrum Kalesi ve Marina", description: "Bodrum Kalesi ziyareti ve marinada serbest zaman." },
    { day: 3, title: "Tekne Turu", description: "Gökova Körfezi'nde tekne turu ve yüzme molaları." },
    { day: 4, title: "Plaj Günü", description: "Gümbet plajında tam gün dinlenme." },
    { day: 5, title: "Antik Kentler", description: "Bodrum çevresindeki antik kentlere yarım günlük tur." },
    { day: 6, title: "Dönüş", description: "Son gün serbest zaman ve havalimanına transfer." }
  ],
  images: [ "https://images.unsplash.com/photo-1654162067258-63794833dd52", "https://images.unsplash.com/photo-1584132967334-10e028bd69f7", "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8" ],
  image: "https://images.unsplash.com/photo-1654162067258-63794833dd52"
};

const pamukkaleTour = {
  id: "5",
  title: "Pamukkale & Hierapolis Turu",
  destination: "Denizli",
  description: "Doğa harikası travertenleri ve antik Hierapolis kentini keşfedin. Şifalı sularda yüzme fırsatı.",
  duration: "2 gün 1 gece",
  price: 7000,
  rating: 4.4,
  reviewCount: 62,
  minGuests: 2,
  features: [ "Otel konaklaması", "Kahvaltı ve akşam yemeği", "Rehberlik hizmeti", "Giriş ücretleri", "Ulaşım" ],
  itinerary: [
    { day: 1, title: "Varış ve Pamukkale", description: "Denizli'ye varış, travertenlerde yürüyüş ve Kleopatra Havuzu'nda yüzme imkanı." },
    { day: 2, title: "Hierapolis ve Dönüş", description: "Antik Hierapolis kenti ziyareti, öğle yemeği ve dönüş yolculuğu." }
  ],
  images: [ "https://images.unsplash.com/photo-1583531172005-8041612185c0", "https://images.unsplash.com/photo-1600677700548-9219e6637c99", "https://images.unsplash.com/photo-1614082242765-7c970755031e" ],
  image: "https://images.unsplash.com/photo-1583531172005-8041612185c0"
};

const karadenizTour = {
  id: "6",
  title: "Karadeniz Yaylalar Turu",
  destination: "Trabzon, Rize",
  description: "Yeşilin her tonunu görebileceğiniz Karadeniz yaylalarında doğa ile baş başa bir tatil.",
  duration: "5 gün 4 gece",
  price: 7400,
  rating: 4.9,
  reviewCount: 45,
  minGuests: 4,
  features: [ "Yayla evlerinde konaklama", "Tam pansiyon yemekler", "Özel araçla ulaşım", "Yerel rehber", "Doğa yürüyüşleri" ],
  itinerary: [
    { day: 1, title: "Trabzon Varış", description: "Trabzon Havalimanı'ndan karşılama, Uzungöl'e transfer ve yerleşme." },
    { day: 2, title: "Uzungöl", description: "Uzungöl çevresinde doğa yürüyüşü ve göl turu." },
    { day: 3, title: "Ayder Yaylası", description: "Ayder Yaylası'na geçiş, şifalı kaplıcalarda dinlenme." },
    { day: 4, title: "Pokut Yaylası", description: "Pokut Yaylası'na gidiş, bulutların üzerinde gün batımı izleme." },
    { day: 5, title: "Sümela Manastırı ve Dönüş", description: "Sümela Manastırı ziyareti ve Trabzon Havalimanı'na transfer." }
  ],
  images: [ "https://images.unsplash.com/photo-1702214726119-f204f6913880", "https://images.unsplash.com/photo-1598403303060-0338ddc1460a", "https://images.unsplash.com/photo-1559274097-2dc3c4a0527e" ],
  image: "https://images.unsplash.com/photo-1702214726119-f204f6913880"
};

export const tours = [
  kapadokyaTour,
  antalyaTour,
  istanbulTour,
  bodrumTour,
  pamukkaleTour,
  karadenizTour
];