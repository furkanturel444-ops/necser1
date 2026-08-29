import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import { contact, seoKeywords } from "../lib/site-data";
import { pageMetadata } from "../lib/seo";
import { contactPageSchema } from "../lib/schema";

export const metadata: Metadata = pageMetadata({
  absoluteTitle: "İletişim | Sakarya Yazıcı Kiralama - Necser",
  title: "İletişim - Sakarya Yazıcı Kiralama",
  description:
    "Sakarya yazıcı kiralama ve fotokopi makinesi kiralama teklif almak için Necser ile iletişime geçin. Ücretsiz keşif, aynı gün geri dönüş.",
  path: "/iletisim",
  keywords: [
    ...seoKeywords,
    "Sakarya yazıcı kiralama iletişim",
    "Sakarya fotokopi kiralama teklif",
    "necser iletişim",
  ],
});

const contactCards = [
  {
    icon: Phone,
    label: "Telefon",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    render: () => (
      <div className="space-y-1.5">
        {contact.phones.map((phone, i) => (
          <a
            key={phone}
            href={`tel:${contact.phoneLinks[i]}`}
            className="block text-[15px] font-semibold text-slate-800 hover:text-blue-600 transition-colors tracking-wide"
          >
            {phone}
          </a>
        ))}
      </div>
    ),
  },
  {
    icon: Mail,
    label: "E-posta",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    render: () => (
      <a
        href={`mailto:${contact.email}`}
        className="text-[15px] font-semibold text-slate-800 hover:text-blue-600 transition-colors break-all"
      >
        {contact.email}
      </a>
    ),
  },
  {
    icon: MapPin,
    label: "Adres",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    render: () => (
      <p className="text-[15px] font-semibold text-slate-800">{contact.address}</p>
    ),
  },
];

export default function IletisimPage() {
  return (
    <>
      <JsonLd data={contactPageSchema()} />
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navigation />

        {/* Başlık — içerikle aynı genişlik ve hizalama */}
        <header className="bg-slate-900 border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
            <p className="text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-2 sm:mb-3">
              İletişim
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
              Sakarya Yazıcı Kiralama İletişim
            </h1>
            <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
              Fotokopi makinesi kiralama, büro tipi yazıcı kiralama veya teknik destek
              için bize ulaşın ücretsiz teklif sunuyoruz.
            </p>
          </div>
        </header>

        <main className="flex-1">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-start">

              {/* İletişim kartları — alt alta */}
              <div className="flex flex-col gap-4">
                {contactCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article
                      key={card.label}
                      className="bg-white rounded-2xl border border-slate-200/80 px-5 py-4 sm:px-6 sm:py-5 flex gap-4 items-center hover:border-blue-200 hover:shadow-sm transition-all duration-200"
                    >
                      <div
                        className={`flex-shrink-0 w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center`}
                      >
                        <Icon className={`h-5 w-5 ${card.iconColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400 mb-1">
                          {card.label}
                        </h2>
                        {card.render()}
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Teklif kutusu */}
              <aside>
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
                  <div className="bg-brand px-5 py-4 flex items-center gap-3">
                    <div className="w-9 h-9 bg-white/15 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Send className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h2 className="text-white font-bold text-sm leading-tight">
                        Ücretsiz Teklif Alın
                      </h2>
                      <p className="text-blue-200 text-xs mt-0.5">
                        Aynı gün geri dönüş
                      </p>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    {contact.phones.map((phone, i) => (
                      <Link
                        key={phone}
                        href={`tel:${contact.phoneLinks[i]}`}
                        className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl font-semibold text-sm transition-colors min-h-[48px] ${
                          i === 0
                            ? "bg-brand text-white hover:bg-brand-dark"
                            : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Phone className="h-4 w-4 opacity-80" />
                          Ara
                        </span>
                        <span className="tracking-wide">{phone}</span>
                      </Link>
                    ))}
                    <Link
                      href={`mailto:${contact.email}`}
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:border-blue-300 hover:text-blue-600 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      E-posta Gönder
                    </Link>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
