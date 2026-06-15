import { AlertCircle, CheckCircle2, ClipboardCheck, Hammer, Home, Phone, ShieldCheck, Wrench } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/lib/site';

const benefits = [
  'Discuss gutter installation, replacement, or repair needs',
  'Review common material and layout considerations',
  'Ask about provider availability for your property type',
  'Understand what may affect scheduling and project scope'
];

const types = [
  {
    title: 'Aluminum Gutters',
    copy: 'Aluminum is commonly used for residential gutter systems because it is lightweight, resistant to rust, and suitable for many home styles. Thickness, fastening method, and installation quality can affect long-term performance.'
  },
  {
    title: 'Seamless Gutters',
    copy: 'Seamless gutters are formed in longer runs to reduce the number of joints. Fewer joints may help reduce leak points, but corners, downspouts, and proper slope still need careful installation.'
  },
  {
    title: 'Copper & Specialty Gutters',
    copy: 'Some homes use copper or specialty profiles for appearance or architectural reasons. These systems can require different installation methods and may cost more than standard materials.'
  },
  {
    title: 'Downspouts & Drainage',
    copy: 'Gutters work with downspouts, extensions, splash blocks, or drainage solutions. Placement matters because water should move away from siding, walkways, landscaping, and the foundation area.'
  }
];

const costFactors = [
  'Total linear feet of gutter needed around the home',
  'Number of corners, stories, rooflines, and difficult access areas',
  'Material type, gauge, color, and profile style',
  'Downspout quantity, placement, and drainage extensions',
  'Whether old gutters need removal or disposal',
  'Local labor availability and provider scheduling'
];

const faqs = [
  {
    q: 'When should gutters be replaced instead of repaired?',
    a: 'Replacement may be discussed when there are recurring leaks, sagging sections, rust, separation from fascia, poor slope, or widespread damage. A provider can review whether repair or replacement is appropriate.'
  },
  {
    q: 'What information should I have before calling?',
    a: 'Helpful details include the home type, approximate number of stories, current gutter issues, whether downspouts are working, and whether the project is installation, replacement, or repair.'
  },
  {
    q: 'Do all homes need the same gutter material?',
    a: 'No. Material choice can depend on local weather, home style, budget, roofline, and provider recommendations. Aluminum and seamless systems are common, but options vary.'
  },
  {
    q: 'Can gutter issues affect other parts of a home?',
    a: 'Poor drainage can contribute to water pooling near siding, walkways, landscaping, or foundation areas. Gutter work should be considered alongside proper downspout placement and drainage flow.'
  },
  {
    q: 'Is pricing shown on this website?',
    a: 'No. Pricing depends on the project details and local provider. This site does not quote prices or guarantee cost. Call to discuss options and availability.'
  },
  {
    q: 'Does this website directly perform gutter work?',
    a: 'No. This website provides information and helps consumers discuss available options with independent service providers. Service details vary by provider and location.'
  }
];

export default function GutterInstallationPage() {
  return (
    <main>
      <Header />
      <section className="relative overflow-hidden bg-gradient-to-br from-sand via-white to-[#e8efe4]">
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-leaf/10 blur-3xl" />
        <div className="absolute -left-20 bottom-8 h-72 w-72 rounded-full bg-clay/10 blur-3xl" />
        <div className="container-pad relative grid gap-8 py-10 sm:py-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-12 lg:py-20">
          <div className="flex flex-col justify-center">
            <span className="badge w-fit">Gutter installation • replacement • repair information</span>
            <h1 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Gutter Installation & Repair Options For Your Home
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
              Learn what to consider before starting a gutter project, compare common gutter system options, and call to discuss provider availability for installation, replacement, or repair.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a className="btn-primary" href={siteConfig.phoneHref}><Phone className="mr-2 h-4 w-4" /> Call To Check Options</a>
              <a className="btn-secondary" href="#overview">Read Project Guide</a>
            </div>
            <p className="mt-5 text-sm text-ink/60">Availability, pricing, and appointment times vary by provider and location.</p>
          </div>
          <div className="card p-4 sm:p-6 lg:p-8">
            <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-roof to-ink p-5 sm:p-6 text-white">
              <div className="flex items-center gap-3">
                <Home className="h-8 w-8" />
                <div>
                  <p className="text-sm text-white/70">Project checklist</p>
                  <p className="text-xl font-bold">Before You Call</p>
                </div>
              </div>
              <ul className="mt-6 space-y-4">
                {benefits.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-white/90"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-sand p-4">
                <p className="font-bold">Common projects</p>
                <p className="mt-2 text-sm leading-6 text-ink/65">Installation, replacement, repair, downspouts, drainage extensions.</p>
              </div>
              <div className="rounded-2xl bg-sand p-4">
                <p className="font-bold">Call center hours</p>
                <p className="mt-2 text-sm leading-6 text-ink/65">{siteConfig.hours}. Provider schedules may vary.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container-pad grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-10">
          <div>
            <span className="badge bg-sand">Original project guide</span>
            <h2 className="section-title mt-4">How a gutter project is usually evaluated</h2>
            <p className="mt-4 text-base leading-7 text-ink/70 sm:mt-5 sm:leading-8">A gutter project is more than measuring the roof edge. Providers often consider the roof shape, water flow, fascia condition, number of downspouts, ground slope, and where water should be carried after it leaves the roofline.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['1', 'Project Type', 'Identify whether you need new installation, replacement, repair, or downspout changes.'],
              ['2', 'Home Layout', 'Consider stories, roofline complexity, corners, and access around the property.'],
              ['3', 'Water Flow', 'Review where water currently pools and where downspouts should discharge.'],
              ['4', 'Provider Review', 'Discuss availability, scope, timing, and whether an on-site estimate is needed.']
            ].map(([num, title, text]) => (
              <div className="rounded-2xl sm:rounded-3xl border border-black/5 bg-sand p-5 sm:p-6" key={title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf text-white font-bold">{num}</div>
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="types" className="py-12 sm:py-16 lg:py-20">
        <div className="container-pad">
          <div className="max-w-3xl">
            <span className="badge">Gutter system options</span>
            <h2 className="section-title mt-4">Common gutter types and related components</h2>
            <p className="mt-4 text-base leading-7 text-ink/70 sm:mt-5 sm:leading-8">The right system can depend on the home, climate, roofline, and drainage goals. These descriptions are general and do not replace provider recommendations.</p>
          </div>
          <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2">
            {types.map((type) => (
              <article key={type.title} className="card p-5 sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-leaf/10 p-3 text-leaf"><Hammer className="h-6 w-6" /></div>
                  <h3 className="text-lg font-bold sm:text-xl">{type.title}</h3>
                </div>
                <p className="mt-4 leading-7 text-ink/70">{type.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cost" className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container-pad grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <span className="badge bg-sand">No price guarantees</span>
            <h2 className="section-title mt-4">What may affect gutter installation cost?</h2>
            <p className="mt-4 text-base leading-7 text-ink/70 sm:mt-5 sm:leading-8">This website does not provide fixed prices. Gutter project costs can vary because each property has different measurements, access conditions, materials, and drainage needs.</p>
            <a className="btn-primary mt-8" href={siteConfig.phoneHref}><Phone className="mr-2 h-4 w-4" /> Discuss Options</a>
          </div>
          <div className="card p-5 sm:p-7">
            <ul className="space-y-4">
              {costFactors.map((factor) => (
                <li key={factor} className="flex gap-3 leading-7 text-ink/75"><ClipboardCheck className="mt-1 h-5 w-5 shrink-0 text-leaf" />{factor}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-pad grid gap-5 sm:gap-8 lg:grid-cols-3">
          <div className="card p-5 sm:p-7">
            <Wrench className="h-8 w-8 text-leaf" />
            <h3 className="mt-4 text-lg font-bold sm:text-xl">Repair Questions</h3>
            <p className="mt-3 leading-7 text-ink/70">Ask whether the issue is isolated to a joint, bracket, downspout, or slope problem. Some issues may not require full replacement.</p>
          </div>
          <div className="card p-5 sm:p-7">
            <ShieldCheck className="h-8 w-8 text-leaf" />
            <h3 className="mt-4 text-lg font-bold sm:text-xl">Replacement Questions</h3>
            <p className="mt-3 leading-7 text-ink/70">Ask about materials, removal of existing gutters, downspout placement, and whether fascia concerns need separate review.</p>
          </div>
          <div className="card p-5 sm:p-7">
            <AlertCircle className="h-8 w-8 text-clay" />
            <h3 className="mt-4 text-lg font-bold sm:text-xl">Important Disclosure</h3>
            <p className="mt-3 leading-7 text-ink/70">Service availability, timing, and pricing are not guaranteed. Independent providers determine project scope and availability.</p>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container-pad">
          <div className="max-w-3xl">
            <span className="badge bg-sand">FAQ</span>
            <h2 className="section-title mt-4">Gutter installation and repair questions</h2>
          </div>
          <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2">
            {faqs.map((item) => (
              <div className="rounded-2xl sm:rounded-3xl border border-black/5 bg-sand p-5 sm:p-6" key={item.q}>
                <h3 className="font-bold">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-10 sm:py-14 text-white">
        <div className="container-pad flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-semibold text-white/60">Ready to discuss gutter options?</p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Call to check provider availability.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">This call does not guarantee service availability or pricing. It helps you discuss project details and available provider options.</p>
          </div>
          <a className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-ink sm:w-auto" href={siteConfig.phoneHref}><Phone className="mr-2 h-4 w-4" /> {siteConfig.phoneDisplay}</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
