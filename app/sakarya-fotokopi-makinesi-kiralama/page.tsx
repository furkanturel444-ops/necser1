import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";
import { seoPages } from "../lib/site-data";
import { pageMetadata } from "../lib/seo";

const page = seoPages[1];

export const metadata: Metadata = pageMetadata({
  absoluteTitle: page.metaTitle,
  title: page.title,
  description: page.metaDescription,
  path: `/${page.slug}`,
  keywords: [...page.keywords],
});

export default function SakaryaFotokopiKiralamaPage() {
  return (
    <SeoLandingPage
      h1={page.h1}
      subtitle="Sakarya'da renkli ve siyah-beyaz fotokopi makinesi kiralama. Yüksek hacimli baskı, toner dahil paketler, kurumsal teknik destek."
      intro="Necser, Sakarya fotokopi makinesi kiralama alanında işletmenizin baskı ihtiyaçlarına uygun renkli ve siyah-beyaz fotokopi çözümleri sunar. Ofis, okul, hastane ve üretim tesisleri için yüksek kapasiteli fotokopi makineleri kiralayarak maliyetlerinizi düşürmenize yardımcı oluyoruz."
      sections={[
        {
          title: "Sakarya Fotokopi Makinesi Kiralama Seçenekleri",
          content:
            "Renkli fotokopi makinesi kiralama ve siyah-beyaz fotokopi makinesi kiralama seçeneklerimiz mevcuttur. A3 ve A4 format destekli, network bağlantılı, tarama ve fotokopi özellikli çok fonksiyonlu cihazlar ile yüksek hacimli baskı ihtiyaçlarınızı karşılıyoruz. Sakarya merkez, Adapazarı, Serdivan, Akyazı ve Hendek bölgelerinde hızlı kurulum sağlıyoruz.",
        },
        {
          title: "Fotokopi Kiralama Avantajları",
          content:
            "Fotokopi makinesi satın almak yerine kiralama tercih ederek bütçenizi koruyabilirsiniz. Sakarya fotokopi makinesi kiralama paketlerimizde toner, drum ünitesi ve teknik servis dahil edilebilir. Cihaz yenileme ve bakım sorumluluğu Necser'e aittir.",
        },
        {
          title: "Hangi Sektörlere Hizmet Veriyoruz?",
          content:
            "Eğitim kurumları, sağlık sektörü, sanayi tesisleri, kamu kurumları ve perakende zincirleri Sakarya fotokopi kiralama hizmetimizden yararlanmaktadır. ASAŞ, eğitim kurumları ve birçok köklü firma referanslarımız arasındadır.",
        },
      ]}
      benefits={[
        "Renkli ve siyah-beyaz fotokopi seçenekleri",
        "Yüksek hacimli kurumsal baskı kapasitesi",
        "Toner dahil fotokopi kiralama paketleri",
        "Sakarya genelinde aynı gün teknik destek",
        "A3/A4 çok fonksiyonlu cihazlar",
        "Sıfır yatırım maliyeti, sabit aylık ödeme",
      ]}
      faqs={[
        {
          question: "Sakarya fotokopi makinesi kiralama fiyatları nasıl?",
          answer:
            "Fiyatlar cihaz kapasitesi, renkli/siyah-beyaz tercihi ve aylık baskı hacmine göre belirlenir. Ücretsiz teklif alabilirsiniz.",
        },
        {
          question: "Renkli fotokopi makinesi kiralanabilir mi?",
          answer:
            "Evet, Sakarya'da renkli fotokopi makinesi kiralama hizmeti sunuyoruz.",
        },
        {
          question: "Kurulum ne kadar sürer?",
          answer:
            "Sakarya içi kurulum genellikle aynı gün veya ertesi iş günü tamamlanır.",
        },
      ]}
      breadcrumbName={page.title}
      breadcrumbPath={`/${page.slug}`}
      serviceName="Sakarya Fotokopi Makinesi Kiralama"
      serviceDescription={page.metaDescription}
    />
  );
}
