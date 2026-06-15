import { siteConfig } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="container-pad py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-bold">{siteConfig.brand}</p>
            <p className="mt-3 text-sm leading-6 text-ink/70">{siteConfig.disclosure}</p>
          </div>
          <div>
            <p className="font-bold">Helpful Pages</p>
            <ul className="mt-3 space-y-2 text-sm text-ink/70">
              <li><a href="#overview" className="hover:text-ink">Gutter project overview</a></li>
              <li><a href="#cost" className="hover:text-ink">Cost factors</a></li>
              <li><a href="#faq" className="hover:text-ink">Frequently asked questions</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Important Note</p>
            <p className="mt-3 text-sm leading-6 text-ink/70">This site provides general information and helps users discuss service options. It does not guarantee service availability, price, timing, financing, or project outcome.</p>
          </div>
        </div>
        <p className="mt-8 text-xs text-ink/50">© 2026 {siteConfig.brand}. All rights reserved.</p>
      </div>
    </footer>
  );
}
