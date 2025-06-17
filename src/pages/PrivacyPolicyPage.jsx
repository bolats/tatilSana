import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-12">
          <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gradient mb-2">Gizlilik Politikası</h1>
          <p className="text-gray-500">Son Güncelleme: 07 Mayıs 2025</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Tatilsana ("biz", "bizim" veya "şirket") olarak, gizliliğinize saygı duyuyor ve kişisel bilgilerinizi korumaya kararlıyız. Bu Gizlilik Politikası, web sitemizi (www.tatilsana.com) ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda hangi bilgileri topladığımızı, bu bilgileri nasıl kullandığımızı, paylaştığımızı ve koruduğumuzu açıklamaktadır.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Topladığımız Bilgiler</h2>
          <p>
            Sizden aşağıdaki türde bilgiler toplayabiliriz:
          </p>
          <ul>
            <li><strong>Kişisel Kimlik Bilgileri:</strong> Adınız, soyadınız, e-posta adresiniz, telefon numaranız gibi bize doğrudan sağladığınız bilgiler.</li>
            <li><strong>Hesap Bilgileri:</strong> Kullanıcı adınız, şifreniz ve diğer kayıt bilgileriniz.</li>
            <li><strong>Rezervasyon Bilgileri:</strong> Yaptığınız tur ve otel rezervasyonlarına ilişkin detaylar.</li>
            <li><strong>Ödeme Bilgileri:</strong> Ödeme işlemleri için gerekli olan kredi kartı bilgileri gibi bilgiler (bu bilgiler güvenli ödeme işlemcilerimiz tarafından işlenir ve tarafımızca saklanmaz).</li>
            <li><strong>Kullanım Verileri:</strong> IP adresiniz, tarayıcı türünüz, ziyaret ettiğiniz sayfalar, ziyaret süreniz gibi web sitemizi kullanımınızla ilgili bilgiler.</li>
            <li><strong>Çerezler ve Takip Teknolojileri:</strong> Web sitemizdeki deneyiminizi geliştirmek için çerezler ve benzeri teknolojiler kullanırız.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Bilgilerinizi Nasıl Kullanıyoruz?</h2>
          <p>
            Topladığımız bilgileri aşağıdaki amaçlarla kullanırız:
          </p>
          <ul>
            <li>Hizmetlerimizi sunmak ve yönetmek (rezervasyonlarınızı işleme koymak, hesap yönetimi vb.).</li>
            <li>Sizinle iletişim kurmak (müşteri desteği, bildirimler, pazarlama mesajları vb.).</li>
            <li>Web sitemizi ve hizmetlerimizi iyileştirmek ve kişiselleştirmek.</li>
            <li>Yasal yükümlülüklerimize uymak.</li>
            <li>Dolandırıcılığı önlemek ve güvenliği sağlamak.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Bilgilerinizi Nasıl Paylaşıyoruz?</h2>
          <p>
            Kişisel bilgilerinizi aşağıdaki durumlar dışında üçüncü taraflarla paylaşmayız:
          </p>
          <ul>
            <li><strong>Hizmet Sağlayıcılar:</strong> Rezervasyonlarınızı tamamlamak için oteller, tur operatörleri gibi iş ortaklarımızla.</li>
            <li><strong>Ödeme İşlemcileri:</strong> Ödeme işlemlerinizi güvenli bir şekilde gerçekleştirmek için.</li>
            <li><strong>Yasal Gereklilikler:</strong> Yasal bir zorunluluk veya resmi bir talep olması durumunda.</li>
            <li><strong>Sizin Rızanızla:</strong> Bilgilerinizi paylaşmamız için onay verdiğiniz durumlarda.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Veri Güvenliği</h2>
          <p>
            Kişisel bilgilerinizi yetkisiz erişim, kullanım veya ifşaya karşı korumak için uygun teknik ve organizasyonel önlemler alıyoruz. Ancak, internet üzerinden hiçbir veri aktarım yönteminin %100 güvenli olmadığını lütfen unutmayın.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Çocukların Gizliliği</h2>
          <p>
            Hizmetlerimiz 18 yaşın altındaki bireylere yönelik değildir. Bilerek 18 yaşın altındaki çocuklardan kişisel bilgi toplamıyoruz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Gizlilik Politikasındaki Değişiklikler</h2>
          <p>
            Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Değişiklikler web sitemizde yayınlandığı anda yürürlüğe girer. Politikadaki önemli değişiklikler hakkında sizi bilgilendireceğiz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Bize Ulaşın</h2>
          <p>
            Bu Gizlilik Politikası veya kişisel bilgilerinizin işlenmesi hakkında herhangi bir sorunuz varsa, lütfen <a href="/iletisim" className="text-primary hover:underline">iletişim sayfamızdan</a> bize ulaşın.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicyPage;