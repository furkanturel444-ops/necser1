import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";
import { seoPages } from "../lib/site-data";
import { pageMetadata } from "../lib/seo";

const page = seoPages[0];

export const metadata: Metadata = pageMetadata({
  absoluteTitle: page.metaTitle,
  title: page.title,
  description: page.metaDescription,
  path: `/${page.slug}`,
  keywords: [...page.keywords],
});

export default function SakaryaYaziciKiralamaPage() {
  return (
    <SeoLandingPage
      h1={page.h1}
      subtitle="Sakarya'da büro tipi yazıcı kiralama, toner dahil paketler ve aynı gün teknik destek. Adapazarı, Serdivan, Akyazı, Hendek ve çevre ilçelerde kurumsal yazıcı çözümleri."
      intro="Necser olarak Sakarya yazıcı kiralama alanında yılların deneyimiyle kamu kurumları, özel sektör firmaları ve eğitim kurumlarına büro tipi yazıcı kiralama hizmeti sunuyoruz. Yazıcı satın alma maliyeti olmadan, sabit aylık ödemelerle kurumsal baskı altyapınızı güçlendirin."
      sections={[
        {
          title: "Sakarya Büro Tipi Yazıcı Kiralama",
          content:
            "Sakarya yazıcı kiralama hizmetimiz kapsamında renkli ve siyah-beyaz büro tipi yazıcılar, çok fonksiyonlu cihazlar (MFP) ve yüksek hacimli baskı sistemleri kiralanmaktadır. Adapazarı, Serdivan, Erenler, Arifiye, Akyazı ve Hendek başta olmak üzere Sakarya genelinde aynı gün kurulum yapıyoruz. Toner dahil kiralama paketleri ile beklenmedik sarf maliyeti ödemezsiniz.",
        },
        {
          title: "Kimler İçin Uygun?",
          content:
            "Ofisler, hukuk büroları, mali müşavirlik firmaları, okul ve dershaneler, hastaneler, üretim tesisleri ve kamu kurumları için Sakarya yazıcı kiralama çözümleri sunuyoruz. İhtiyacınıza göre aylık baskı hacminize uygun cihaz ve sözleşme süresi belirlenir.",
        },
        {
          title: "Sakarya Yazıcı Kiralama Süreci",
          content:
            "Ücretsiz keşif ve ihtiyaç analizi sonrası size özel teklif sunuyoruz. Sözleşme imzalandıktan sonra aynı gün veya ertesi gün cihaz kurulumu yapılır. Kurulum sonrası toner takibi, periyodik bakım ve arıza müdahalesi Necser tarafından sağlanır.",
        },
      ]}
      benefits={[
        "Sıfır yatırım maliyeti ile yazıcı kullanımı",
        "Toner ve sarf malzemesi dahil paketler",
        "Sakarya genelinde aynı gün teknik servis",
        "Esnek 12, 24, 36 aylık sözleşme seçenekleri",
        "Canon, HP, Kyocera, Ricoh kurumsal cihazlar",
        "Adapazarı, Akyazı, Hendek, Serdivan servis ağı",
      ]}
      faqs={[
        {
          question: "Sakarya yazıcı kiralama aylık maliyeti ne kadar?",
          answer:
            "Maliyet; cihaz modeli, aylık baskı kotası ve pakete dahil hizmetlere göre değişir. Ücretsiz teklif için bizi arayın.",
        },
        {
          question: "Sakarya'da hangi marka yazıcılar kiralanıyor?",
          answer:
            "Canon, HP, Kyocera, Ricoh, Konica Minolta ve diğer kurumsal markaların büro tipi yazıcıları kiralanmaktadır.",
        },
        {
          question: "Toner dahil mi?",
          answer:
            "Evet, toner dahil Sakarya yazıcı kiralama paketlerimiz mevcuttur.",
        },
      ]}
      breadcrumbName={page.title}
      breadcrumbPath={`/${page.slug}`}
      serviceName="Sakarya Yazıcı Kiralama"
      serviceDescription={page.metaDescription}
    />
  );
}
