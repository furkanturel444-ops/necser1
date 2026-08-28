import {
  Printer,
  Package,
  CheckCircle2,
  Clock,
  Send,
  Copy,
  ChevronRight,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import References from "./components/References";
import JsonLd from "./components/JsonLd";
import {
  SITE_URL,
  contact,
  services,
  whyUs,
  productCategories,
  stats,
  seoKeywords,
  seoFaqs,
  seoPages,
} from "./lib/site-data";
import { pageMetadata, SEO } from "./lib/seo";
import {
  breadcrumbSchema,
  serviceListSchema,
  faqSchema,
} from "./lib/schema";

export const metadata: Metadata = pageMetadata({
  absoluteTitle: SEO.defaultTitle,
  title: "Sakarya Yazıcı Kiralama | Fotokopi Makinesi Kiralama",
  description: SEO.defaultDescription,
  path: "/",
  keywords: seoKeywords,
});

const serviceIcons = {
  printer: Printer,
  package: Package,
  wrench: Wrench,
  copy: Copy,
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Sakarya Yazıcı Kiralama", url: SITE_URL }]),
          serviceListSchema("Sakarya Yazıcı Kiralama Hizmetleri"),
          faqSchema(seoFaqs),
        ]}
      />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="relative bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-brand/20 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24 lg:py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-brand/20 border border-brand/30 rounded-full">
                <span className="w-2 h-2 bg-brand rounded-full animate-pulse shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-blue-100">
                  Sakarya Yazıcı Kiralama Uzmanı
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Sakarya Yazıcı Kiralama &{" "}
                <span className="text-brand">Fotokopi Makinesi Kiralama</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                Sakarya&apos;da büro tipi yazıcı kiralama, fotokopi makinesi kiralama,
                sarf malzemeleri ve teknik destek hizmetleri. Adapazarı, Akyazı,
                Hendek, Serdivan ve çevre ilçelerde toner dahil kurumsal çözümler.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/iletisim"
                  className="bg-brand text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold hover:bg-brand-dark transition-colors inline-flex items-center justify-center gap-2 min-h-[48px] text-sm sm:text-base"
                >
                  <Send className="h-5 w-5 shrink-0" />
                  Ücretsiz Teklif Al
                </Link>
                <a
                  href="#hizmetler"
                  className="border border-slate-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors inline-flex items-center justify-center gap-2 min-h-[48px] text-sm sm:text-base"
                >
                  Hizmetlerimiz
                  <ChevronRight className="h-5 w-5 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center px-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hizmetler */}
        <section id="hizmetler" className="py-12 sm:py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-xs sm:text-sm font-semibold text-brand uppercase tracking-wider">
                Hizmetlerimiz
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-2 sm:mt-3 mb-3 sm:mb-4 px-2">
                Sakarya Yazıcı Kiralama & Fotokopi Kiralama
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-2">
                Sakarya fotokopi makinesi kiralama, büro tipi yazıcı kiralama,
                sarf malzemeleri ve teknik destek — tek çatı altında.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {services.map((service) => {
                const Icon = serviceIcons[service.icon];
                return (
                  <article
                    key={service.id}
                    className="bg-white rounded-xl border border-slate-200 p-5 sm:p-7 hover:border-brand/40 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="bg-blue-50 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-brand" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Neden Necser */}
        <section id="neden-necser" className="py-12 sm:py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span className="text-xs sm:text-sm font-semibold text-brand uppercase tracking-wider">
                  Neden Necser?
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-2 sm:mt-3 mb-4 sm:mb-6">
                  Sakarya&apos;da Yazıcı Kiralama ve Fotokopi Çözümleri
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 sm:mb-8">
                  Necser olarak Sakarya ve çevre illerde kamu kurumları, özel sektör
                  ve eğitim kurumlarına yazıcı kiralama, fotokopi makinesi kiralama,
                  sarf malzemeleri ve teknik destek sunuyoruz.
                </p>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-dark transition-colors min-h-[44px]"
                >
                  Hemen teklif alın
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {whyUs.map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200"
                  >
                    <CheckCircle2 className="h-6 w-6 text-brand mb-3" />
                    <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ürünler */}
        <section id="urunler" className="py-12 sm:py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-xs sm:text-sm font-semibold text-brand uppercase tracking-wider">
                Ürün Kategorileri
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-2 sm:mt-3 mb-3 sm:mb-4 px-2">
                Sakarya Fotokopi Makinesi Kiralama
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-2">
                Renkli ve siyah-beyaz büro tipi yazıcı kiralama seçenekleri.
                Sakarya yazıcı kiralama ihtiyaçlarınıza uygun çözümler.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
              {productCategories.map((product, i) => (
                <article
                  key={product.title}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {i === 0 ? (
                    <div className="h-2 flex">
                      <div className="flex-1 bg-[#33aff6]" />
                      <div className="flex-1 bg-red-500" />
                      <div className="flex-1 bg-yellow-400" />
                      <div className="flex-1 bg-black" />
                    </div>
                  ) : (
                    <div className={`h-2 ${i === 1 ? "bg-slate-700" : "bg-indigo-600"}`} />
                  )}
                  <div className="p-5 sm:p-8">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                      {product.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 sm:mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <References />

        {/* SEO İçerik — Sakarya bölgesel anahtar kelimeler */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">
              Sakarya Yazıcı Kiralama ve Fotokopi Makinesi Kiralama
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                <strong>Sakarya yazıcı kiralama</strong> hizmetimizle Adapazarı, Serdivan,
                Erenler, Arifiye, Akyazı ve Hendek başta olmak üzere Sakarya genelinde büro
                tipi yazıcı kiralama çözümleri sunuyoruz. Kamu kurumları, özel sektör ve
                eğitim kurumları için toner dahil, aynı gün servis garantili paketler
                hazırlıyoruz.
              </p>
              <p>
                <strong>Sakarya fotokopi makinesi kiralama</strong> hizmetimiz kapsamında
                renkli ve siyah-beyaz fotokopi cihazları, yüksek hacimli baskı sistemleri
                ve çok fonksiyonlu kurumsal yazıcılar kiralanmaktadır. Sarf malzemeleri
                tedariki ve teknik destek hizmetlerimizle kesintisiz ofis operasyonu
                sağlıyoruz.
              </p>
              <p>
                Detaylı bilgi için{" "}
                <Link href={`/${seoPages[0].slug}`} className="text-brand font-semibold hover:underline">
                  Sakarya yazıcı kiralama
                </Link>{" "}
                ve{" "}
                <Link href={`/${seoPages[1].slug}`} className="text-brand font-semibold hover:underline">
                  Sakarya fotokopi makinesi kiralama
                </Link>{" "}
                sayfalarımızı inceleyebilir veya{" "}
                <Link href="/iletisim" className="text-brand font-semibold hover:underline">
                  ücretsiz teklif
                </Link>{" "}
                alabilirsiniz.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 md:py-20 bg-brand">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
              Sakarya Yazıcı Kiralama Teklifi Alın
            </h2>
            <p className="text-blue-50 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 px-2">
              Fotokopi makinesi kiralama, büro tipi yazıcı kiralama veya teknik destek
              için ücretsiz teklif alın. Aynı gün geri dönüş garantisi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link
                href="/iletisim"
                className="bg-white text-brand px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2 min-h-[48px] text-sm sm:text-base"
              >
                <Send className="h-5 w-5 shrink-0" />
                İletişime Geç
              </Link>
              <a
                href={`tel:${contact.phoneLinks[0]}`}
                className="border-2 border-white text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold hover:bg-brand-dark transition-colors inline-flex items-center justify-center gap-2 min-h-[48px] text-sm sm:text-base"
              >
                <Clock className="h-5 w-5 shrink-0" />
                Hemen Ara
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
