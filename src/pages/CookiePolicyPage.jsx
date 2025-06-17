import React from "react";
import { motion } from "framer-motion";
import { Cookie } from "lucide-react";

const CookiePolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-12">
          <Cookie className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gradient mb-2">Çerez Politikası</h1>
          <p className="text-gray-500">Son Güncelleme: 07 Mayıs 2025</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Bu Çerez Politikası, Tatilsana ("biz", "bizim" veya "şirket") olarak web sitemizde (www.tatilsana.com) çerezleri ve benzeri teknolojileri nasıl kullandığımızı açıklamaktadır. Web sitemizi kullanarak, bu politikada açıklanan şekilde çerez kullanımını kabul etmiş olursunuz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Çerez Nedir?</h2>
          <p>
            Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza indirilen küçük metin dosyalarıdır. Çerezler, web sitesinin tercihlerinizi (örneğin dil, yazı tipi boyutu) hatırlamasına, site trafiğini analiz etmesine ve kullanıcı deneyimini iyileştirmesine yardımcı olur.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Kullandığımız Çerez Türleri</h2>
          <p>
            Web sitemizde aşağıdaki türde çerezler kullanabiliriz:
          </p>
          <ul>
            <li><strong>Zorunlu Çerezler:</strong> Bu çerezler, web sitesinin temel işlevlerinin çalışması için gereklidir. Örneğin, oturum açma bilgilerinizi hatırlamak veya alışveriş sepetinizi yönetmek için kullanılırlar. Bu çerezler olmadan web sitemiz düzgün çalışmayabilir.</li>
            <li><strong>Performans ve Analitik Çerezleri:</strong> Bu çerezler, web sitemizin nasıl kullanıldığı hakkında anonim bilgiler toplar. Örneğin, hangi sayfaların en çok ziyaret edildiğini, kullanıcıların sitede ne kadar zaman geçirdiğini ve herhangi bir hata mesajı alıp almadıklarını anlamamıza yardımcı olurlar. Bu bilgiler, web sitemizin performansını iyileştirmek için kullanılır. Google Analytics gibi üçüncü taraf hizmetlerini kullanabiliriz.</li>
            <li><strong>İşlevsellik Çerezleri:</strong> Bu çerezler, web sitesinin tercihlerinizi (kullanıcı adı, dil seçimi, bölge vb.) hatırlamasını sağlar ve size daha kişiselleştirilmiş bir deneyim sunar.</li>
            <li><strong>Hedefleme ve Reklam Çerezleri:</strong> Bu çerezler, ilgi alanlarınıza daha uygun reklamlar göstermek için kullanılır. Ayrıca, bir reklamı görme sayınızı sınırlamak ve reklam kampanyalarının etkinliğini ölçmek için de kullanılabilirler. Bu çerezler genellikle üçüncü taraf reklam ağları tarafından yerleştirilir.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
          <p>
            Çoğu web tarayıcısı, çerezleri otomatik olarak kabul edecek şekilde ayarlanmıştır. Ancak, tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir veya çerez gönderildiğinde uyarı alabilirsiniz. Çerezleri devre dışı bırakırsanız, web sitemizin bazı özelliklerinin düzgün çalışmayabileceğini lütfen unutmayın.
          </p>
          <p>
            Tarayıcınızdaki çerez ayarlarını nasıl yöneteceğiniz hakkında daha fazla bilgi için tarayıcınızın yardım menüsüne başvurabilirsiniz. Popüler tarayıcılar için çerez yönetimi hakkında bilgiye aşağıdaki bağlantılardan ulaşabilirsiniz:
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/tr/kb/cerezleri-silme-web-sitelerinin-bilgilerini-kaldirma" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.microsoft.com/tr-tr/windows/tanımlama-bilgilerini-silme-ve-yönetme-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            <li><a href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Üçüncü Taraf Çerezleri</h2>
          <p>
            Web sitemizde, içerik paylaşımı veya analiz gibi amaçlarla üçüncü taraf hizmetlerini (örneğin, sosyal medya butonları, gömülü videolar, analitik araçları) kullanabiliriz. Bu üçüncü taraflar da kendi çerezlerini yerleştirebilirler. Bu çerezler üzerinde doğrudan kontrolümüz yoktur. Bu üçüncü tarafların gizlilik ve çerez politikalarını incelemenizi öneririz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Bu Politikadaki Değişiklikler</h2>
          <p>
            Bu Çerez Politikasını zaman zaman güncelleyebiliriz. Değişiklikler web sitemizde yayınlandığı anda yürürlüğe girer. Politikadaki önemli değişiklikler hakkında sizi bilgilendireceğiz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Bize Ulaşın</h2>
          <p>
            Bu Çerez Politikası hakkında herhangi bir sorunuz varsa, lütfen <a href="/iletisim" className="text-primary hover:underline">iletişim sayfamızdan</a> bize ulaşın.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CookiePolicyPage;