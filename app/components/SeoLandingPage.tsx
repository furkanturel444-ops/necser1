import Link from "next/link";
import { CheckCircle2, ChevronRight, Phone, Send } from "lucide-react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import JsonLd from "./JsonLd";
import { contact } from "../lib/site-data";
import {
  breadcrumbSchema,
  servicePageSchema,
  faqSchema,
} from "../lib/schema";

type SeoLandingPageProps = {
  h1: string;
  subtitle: string;
  intro: string;
  sections: { title: string; content: string }[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  breadcrumbName: string;
  breadcrumbPath: string;
  serviceName: string;
  serviceDescription: string;
};

export default function SeoLandingPage({
  h1,
  subtitle,
  intro,
  sections,
  benefits,
  faqs,
  breadcrumbName,
  breadcrumbPath,
  serviceName,
  serviceDescription,
}: SeoLandingPageProps) {
  const pageUrl = `https://necser.com${breadcrumbPath}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Ana Sayfa", url: "https://necser.com" },
            { name: breadcrumbName, url: pageUrl },
          ]),
          servicePageSchema({
            name: serviceName,
            description: serviceDescription,
            url: pageUrl,
          }),
          faqSchema(faqs),
        ]}
      />

      <div className="min-h-screen bg-white">
        <Navigation />

        <header className="bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Ana Sayfa
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-brand">{breadcrumbName}</li>
              </ol>
            </nav>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
              {h1}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/iletisim"
                className="bg-brand text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-brand-dark transition-colors inline-flex items-center justify-center gap-2 min-h-[48px] text-sm sm:text-base"
              >
                <Send className="h-5 w-5 shrink-0" />
                Ücretsiz Teklif Al
              </Link>
              <a
                href={`tel:${contact.phoneLinks[0]}`}
                className="border border-slate-600 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-slate-800 transition-colors inline-flex items-center justify-center gap-2 min-h-[48px] text-sm sm:text-base"
              >
                <Phone className="h-5 w-5 shrink-0" />
                {contact.phones[0]}
              </a>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-10">
            {intro}
          </p>

          <div className="space-y-8 sm:space-y-10 mb-12">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  {section.title}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Necser ile Avantajlarınız
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6"
                >
                  <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-dark transition-colors text-sm sm:text-base"
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
              Ana sayfaya dön
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
