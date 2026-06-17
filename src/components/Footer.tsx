import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="container-pad py-8 sm:py-10">
        <div className="grid gap-7 sm:gap-8 md:grid-cols-4">
          <div className="min-w-0 md:col-span-2">
            <p className="font-bold">{siteConfig.brand}</p>
            <p className="mt-3 text-sm leading-6 text-ink/70">{siteConfig.disclosure}</p>
            <p className="mt-3 text-sm leading-6 text-ink/70">Call center hours: {siteConfig.hours}.</p>
          </div>
          <div className="min-w-0">
            <p className="font-bold">Gutter Guides</p>
            <ul className="mt-3 space-y-2 text-sm text-ink/70">
              <li><Link href="/gutters/installation" className="hover:text-ink">Installation guide</Link></li>
              <li><Link href="/gutters/replacement" className="hover:text-ink">Replacement guide</Link></li>
              <li><Link href="/gutter-installation" className="hover:text-ink">Project overview</Link></li>
            </ul>
          </div>
          <div className="min-w-0">
            <p className="font-bold">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-ink/70">
              <li><Link href="/about" className="hover:text-ink">About</Link></li>
              <li><Link href="/contact" className="hover:text-ink">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-ink">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-ink">Terms</Link></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs text-ink/50">© 2026 {siteConfig.brand}. All rights reserved. Educational information only; not a service guarantee.</p>
      </div>
    </footer>
  );
}
