import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/lib/site';

export default function TermsPage() {
  return (
    <main><Header />
      <section className="bg-white py-12 sm:py-16 lg:py-20"><div className="container-pad max-w-4xl">
        <span className="badge bg-sand">Terms</span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">Terms of Use</h1>
        <div className="mt-6 space-y-5 text-base leading-8 text-ink/75">
          <p>By using {siteConfig.brand}, you understand that this website provides educational gutter project information and helps visitors discuss provider options.</p>
          <h2 className="text-xl font-bold text-ink">Informational content</h2>
          <p>Website content is general information only. It is not a quote, professional inspection, engineering advice, warranty, or guarantee of service.</p>
          <h2 className="text-xl font-bold text-ink">Independent providers</h2>
          <p>{siteConfig.brand} does not directly perform gutter installation, replacement, repair, inspection, or maintenance. Independent providers decide service availability, pricing, terms, appointment timing, and project scope.</p>
          <h2 className="text-xl font-bold text-ink">No guaranteed pricing or availability</h2>
          <p>Prices, materials, service areas, and scheduling vary. Calling the phone number on this site does not guarantee that a provider is available in your area or that a project will be accepted.</p>
          <h2 className="text-xl font-bold text-ink">Visitor responsibility</h2>
          <p>Visitors should ask providers about licensing, insurance, warranties, included work, materials, cleanup, and any written estimate before authorizing a project.</p>
        </div>
      </div></section><Footer /></main>
  );
}
