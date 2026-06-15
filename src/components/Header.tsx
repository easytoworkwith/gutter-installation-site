import { Phone } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-sand/95 backdrop-blur">
      <div className="container-pad flex min-h-[72px] flex-wrap items-center justify-between gap-3 py-3 sm:min-h-[80px] sm:flex-nowrap">
        <div className="flex min-w-0 items-center gap-3" aria-label="Gutter Service Connect">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-leaf text-white font-bold sm:h-11 sm:w-11">G</div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold leading-5 sm:text-base">{siteConfig.brand}</p>
            <p className="hidden text-xs text-ink/60 sm:block">Gutter project information</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink/75 lg:flex" aria-label="Page navigation">
          <a href="#overview" className="hover:text-ink">Overview</a>
          <a href="#types" className="hover:text-ink">Gutter Types</a>
          <a href="#cost" className="hover:text-ink">Cost Factors</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
        </nav>
        <a className="inline-flex shrink-0 items-center justify-center rounded-full bg-ink px-4 py-2.5 text-xs font-semibold text-white shadow-soft transition hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-ink/20 sm:px-5 sm:py-3 sm:text-sm" href={siteConfig.phoneHref} aria-label={`Call ${siteConfig.phoneDisplay}`}>
          <Phone className="mr-1.5 h-4 w-4 sm:mr-2" /> <span className="whitespace-nowrap">{siteConfig.phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
}
