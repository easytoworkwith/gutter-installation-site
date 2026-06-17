import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Phone, Clock, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export default function ContactPage() {
  return (
    <main><Header />
      <section className="bg-white py-12 sm:py-16 lg:py-20"><div className="container-pad max-w-4xl">
        <span className="badge bg-sand">Contact</span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">Contact Gutter Service Connect</h1>
        <p className="mt-5 text-base leading-8 text-ink/75">Call to discuss gutter installation, replacement, repair, and downspout service options. Calls do not guarantee service availability, pricing, or appointment timing.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="card p-6"><Phone className="h-7 w-7 text-leaf" /><h2 className="mt-4 font-bold">Phone</h2><a className="mt-2 block text-ink/75" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a></div>
          <div className="card p-6"><Clock className="h-7 w-7 text-leaf" /><h2 className="mt-4 font-bold">Call center hours</h2><p className="mt-2 text-sm leading-6 text-ink/75">{siteConfig.hours}</p></div>
          <div className="card p-6"><AlertCircle className="h-7 w-7 text-clay" /><h2 className="mt-4 font-bold">Disclosure</h2><p className="mt-2 text-sm leading-6 text-ink/75">Independent providers determine service availability and project details.</p></div>
        </div>
      </div></section><Footer /></main>
  );
}
