import Link from 'next/link';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-sand/95 backdrop-blur">
      <div className="container-pad flex min-h-[72px] flex-wrap items-center justify-between gap-3 py-3 sm:min-h-[80px] sm:flex-nowrap">
        <Link href="/gutters/installation" className="flex min-w-0 items-center gap-3" aria-label="Gutter Service Connect home">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-leaf text-white font-bold sm:h-11 sm:w-11">G</div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold leading-5 sm:text-base">{siteConfig.brand}</p>
            <p className="hidden text-xs text-ink/60 sm:block">Gutter project education & provider options</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-ink/75 lg:flex" aria-label="Site navigation">
          <Link href="/gutters/installation" className="hover:text-ink">Installation</Link>
          <Link href="/gutters/replacement" className="hover:text-ink">Replacement</Link>
          <Link href="/about" className="hover:text-ink">About</Link>
          <Link href="/contact" className="hover:text-ink">Contact</Link>
        </nav>
        <a className="inline-flex shrink-0 items-center justify-center rounded-full bg-ink px-4 py-2.5 text-xs font-semibold text-white shadow-soft transition hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-ink/20 sm:px-5 sm:py-3 sm:text-sm" href={siteConfig.phoneHref} aria-label={`Call ${siteConfig.phoneDisplay}`}>
          <Phone className="mr-1.5 h-4 w-4 sm:mr-2" /> <span className="whitespace-nowrap">{siteConfig.phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
}
