import Link from "next/link";
import { contact, seoPages } from "../lib/site-data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      aria-label="Sayfa alt bilgisi"
      className="bg-slate-900 text-white py-10 sm:py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
          <div>
            <div className="mb-4 sm:mb-5">
              <Logo />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Sakarya yazıcı kiralama ve fotokopi makinesi kiralama hizmetleri.
              Büro tipi yazıcı kiralama, sarf malzemeleri ve teknik destek.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 sm:mb-5 text-sm uppercase tracking-wider">
              Hizmetler
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-slate-400 text-sm">
              {seoPages.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${p.slug}`}
                    className="hover:text-white transition-colors inline-block py-1"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#hizmetler" className="hover:text-white transition-colors inline-block py-1">
                  Tüm Hizmetler
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 sm:mb-5 text-sm uppercase tracking-wider">
              Hızlı Menü
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-slate-400 text-sm">
              <li>
                <Link href="/#hizmetler" className="hover:text-white transition-colors inline-block py-1">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/#neden-necser" className="hover:text-white transition-colors inline-block py-1">
                  Neden Necser?
                </Link>
              </li>
              <li>
                <Link href="/#urunler" className="hover:text-white transition-colors inline-block py-1">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/#referanslar" className="hover:text-white transition-colors inline-block py-1">
                  Referanslar
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-white transition-colors inline-block py-1">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-white mb-4 sm:mb-5 text-sm uppercase tracking-wider">
              İletişim
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-slate-400 text-sm">
              {contact.phones.map((phone, i) => (
                <li key={phone}>
                  <a
                    href={`tel:${contact.phoneLinks[i]}`}
                    className="hover:text-white transition-colors inline-block py-1"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-white transition-colors break-all inline-block py-1"
                >
                  {contact.email}
                </a>
              </li>
              <li>{contact.workingHours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-slate-500 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Necser. Tüm hakları saklıdır.
          </p>
          <p className="text-slate-500 text-xs">
            Sakarya Yazıcı Kiralama · Fotokopi Makinesi Kiralama · Teknik Destek
          </p>
        </div>
      </div>
    </footer>
  );
}
