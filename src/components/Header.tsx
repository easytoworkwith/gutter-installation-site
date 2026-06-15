import { Phone } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-sand/95 backdrop-blur">
      <div className="container-pad flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-3" aria-label="Gutter Service Connect">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf text-white font-bold">G</div>
          <div>
            <p className="text-base font-bold leading-5">{siteConfig.brand}</p>
            <p className="text-xs text-ink/60">Gutter project information</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink/75 lg:flex" aria-label="Page navigation">
          <a href="#overview" className="hover:text-ink">Overview</a>
          <a href="#types" className="hover:text-ink">Gutter Types</a>
          <a href="#cost" className="hover:text-ink">Cost Factors</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
        </nav>
        <a className="btn-primary" href={siteConfig.phoneHref} aria-label={`Call ${siteConfig.phoneDisplay}`}>
          <Phone className="mr-2 h-4 w-4" /> {siteConfig.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
