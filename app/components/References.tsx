import { ShieldCheck } from "lucide-react";
import { references } from "../lib/site-data";
import ReferenceLogo from "./ReferenceLogo";

export default function References() {
  return (
    <section id="referanslar" className="py-12 sm:py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 rounded-full border border-blue-100">
            <ShieldCheck className="h-4 w-4 text-brand shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-brand">Referanslarımız</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 px-2">
            Güvenilir İş Ortaklarımız
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-2">
            Sakarya yazıcı kiralama hizmetimizle sanayiden eğitime birçok köklü
            kuruma hizmet veriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {references.map((ref) => (
            <article
              key={ref.name}
              className="group bg-white rounded-xl border border-slate-200 p-3 sm:p-5 flex flex-col items-center justify-center hover:border-brand/40 hover:shadow-md transition-all duration-200 h-[120px] sm:h-[160px]"
            >
              <ReferenceLogo name={ref.name} logo={ref.logo} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
