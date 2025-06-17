import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-12">
          <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gradient mb-2">Kullanım Şartları</h1>
          <p className="text-gray-500">Son Güncelleme: 07 Mayıs 2025</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Tatilsana web sitesine ("Site") hoş geldiniz. Bu Siteyi kullanarak, aşağıdaki kullanım şartlarını ("Şartlar") kabul etmiş olursunuz. Lütfen bu Şartları dikkatlice okuyun. Bu Şartları kabul etmiyorsanız, Siteyi kullanmamalısınız.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Hizmetlerin Kullanımı</h2>
          <p>
            Tatilsana, kullanıcılara tatil turları ve otel rezervasyonları yapma imkanı sunan bir platformdur. Siteyi yalnızca yasal amaçlarla ve bu Şartlara uygun olarak kullanmayı kabul edersiniz.
          </p>
          <p>
            Hizmetlerimizi kullanırken:
          </p>
          <ul>
            <li>Yanlış, yanıltıcı veya eksik bilgi vermemelisiniz.</li>
            <li>Başkalarının haklarını ihlal eden veya yasa dışı faaliyetlerde bulunmamalısınız.</li>
            <li>Sitenin işleyişine müdahale etmeye veya güvenliğini tehlikeye atmaya çalışmamalısınız.</li>
            <li>Ticari amaçlarla spam veya yetkisiz reklam yapmamalısınız.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Hesap Oluşturma</h2>
          <p>
            Bazı hizmetlerimizden yararlanmak için bir hesap oluşturmanız gerekebilir. Hesap bilgilerinizin (kullanıcı adı, şifre vb.) gizliliğinden ve güvenliğinden siz sorumlusunuz. Hesabınız üzerinden yapılan tüm işlemlerden siz sorumlu tutulacaksınız. Yetkisiz bir kullanım fark ederseniz derhal bizi bilgilendirmelisiniz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Rezervasyonlar ve Ödemeler</h2>
          <p>
            Site üzerinden yapılan tüm rezervasyonlar, ilgili tur operatörünün veya otelin kendi şart ve koşullarına tabidir. Rezervasyon yapmadan önce bu şartları dikkatlice okumanız önemlidir.
          </p>
          <p>
            Ödemeler, güvenli ödeme ağ geçitleri aracılığıyla işlenir. Ödeme bilgilerinizin doğruluğundan siz sorumlusunuz. Fiyatlar ve müsaitlik durumu değişebilir.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Fikri Mülkiyet</h2>
          <p>
            Sitede yer alan tüm içerikler (metinler, grafikler, logolar, görseller, yazılımlar vb.) Tatilsana'ya veya lisans verenlerine aittir ve telif hakkı yasalarıyla korunmaktadır. Yazılı iznimiz olmadan bu içerikleri kopyalayamaz, dağıtamaz, değiştiremez veya türev çalışmalarını oluşturamazsınız.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Sorumluluğun Sınırlandırılması</h2>
          <p>
            Tatilsana, Sitenin kesintisiz veya hatasız çalışacağını garanti etmez. Sitenin kullanımıyla ilgili tüm riskler size aittir. Yasaların izin verdiği ölçüde, Tatilsana, Sitenin kullanımından veya kullanılamamasından kaynaklanan doğrudan, dolaylı, arızi, özel veya sonuç olarak ortaya çıkan zararlardan sorumlu olmayacaktır.
          </p>
          <p>
            Tur ve otel hizmetleri üçüncü taraf sağlayıcılar tarafından sunulmaktadır. Bu hizmetlerin kalitesi, güvenliği veya uygunluğu konusunda Tatilsana herhangi bir garanti vermez.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Değişiklikler ve Fesih</h2>
          <p>
            Tatilsana, bu Şartları herhangi bir zamanda değiştirme hakkını saklı tutar. Değişiklikler Sitede yayınlandığı anda yürürlüğe girer. Siteyi kullanmaya devam etmeniz, değiştirilmiş Şartları kabul ettiğiniz anlamına gelir.
          </p>
          <p>
            Ayrıca, herhangi bir zamanda, önceden bildirimde bulunmaksızın Siteye veya hizmetlerimize erişiminizi askıya alma veya sonlandırma hakkını saklı tutarız.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Uygulanacak Hukuk</h2>
          <p>
            Bu Şartlar, Türkiye Cumhuriyeti yasalarına tabi olacak ve bu yasalara göre yorumlanacaktır. Bu Şartlardan kaynaklanan veya bunlarla ilgili herhangi bir anlaşmazlıkta İstanbul Mahkemeleri ve İcra Daireleri yetkili olacaktır.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. İletişim</h2>
          <p>
            Bu Kullanım Şartları hakkında herhangi bir sorunuz varsa, lütfen <a href="/iletisim" className="text-primary hover:underline">iletişim sayfamızdan</a> bize ulaşın.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsOfServicePage;