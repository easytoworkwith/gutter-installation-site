import { AlertCircle, CheckCircle2, ClipboardCheck, Hammer, Home, Phone, ShieldCheck, Wrench, Ruler, Droplets, FileText, MapPin } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/lib/site';

type PageType = 'installation' | 'replacement' | 'overview';

const content = {
  installation: {
    eyebrow: 'Gutter installation information',
    h1: 'Gutter Installation Guide For Homeowners',
    intro: 'Understand common gutter installation options, project planning steps, material considerations, drainage details, and questions to ask before speaking with a provider.',
    primaryCta: 'Call About Installation Options',
    projectType: 'New gutter installation',
    overviewTitle: 'What usually matters in a gutter installation project?',
    overview: 'A new gutter system needs more than a simple roof measurement. Providers may review roofline length, fascia condition, water runoff, downspout placement, walkways, landscaping, and how water should move away from the home. The goal is to build a system that collects water and routes it to safe discharge areas.',
    steps: [
      ['Measure roof edges', 'Linear footage, corners, inside miters, and outside miters influence materials and installation time.'],
      ['Plan downspouts', 'Downspouts should be placed where water can drain away from siding, walkways, and foundation areas.'],
      ['Choose materials', 'Material type, gauge, color, profile, and fastening approach can affect performance and appearance.'],
      ['Review access', 'Stories, slope, landscaping, and obstacles may influence scheduling and project scope.']
    ],
    faq: [
      ['Do new gutters always need new downspouts?', 'Not always, but downspout sizing and placement are important. A provider may recommend adding or relocating downspouts if water flow is not adequate.'],
      ['Are seamless gutters the only option?', 'No. Seamless gutters are common for residential projects, but available options can vary by provider, property layout, and material preference.'],
      ['Can this website provide an exact installation quote?', 'No. This website does not provide fixed quotes. Project pricing depends on home measurements, material choice, local provider availability, and on-site details.'],
      ['What should I ask before scheduling?', 'Ask about materials, removal of old gutters if needed, downspout placement, warranty terms offered by the provider, expected timeline, and whether an on-site review is required.']
    ]
  },
  replacement: {
    eyebrow: 'Gutter replacement information',
    h1: 'Gutter Replacement Guide For Older Or Damaged Systems',
    intro: 'Learn when replacement may be considered, what affects replacement scope, and how to prepare for a conversation about old, leaking, sagging, or poorly draining gutters.',
    primaryCta: 'Call About Replacement Options',
    projectType: 'Gutter replacement',
    overviewTitle: 'When does gutter replacement become worth discussing?',
    overview: 'Replacement may be considered when gutters have repeated leaks, sagging runs, rust or corrosion, separated joints, poor slope, damaged fascia connections, or drainage issues that keep returning after repair. A provider can review whether repair, partial replacement, or full replacement is appropriate.',
    steps: [
      ['Review existing damage', 'Look for sagging sections, separated seams, rust, holes, loose fasteners, and overflow points.'],
      ['Check drainage behavior', 'Notice where water spills over, pools near the home, or fails to move through downspouts.'],
      ['Discuss removal needs', 'Old gutter removal, disposal, and fascia concerns may affect project scope and timing.'],
      ['Compare replacement options', 'Material, profile, downspout count, color, and layout changes may be reviewed before scheduling.']
    ],
    faq: [
      ['Can only part of a gutter system be replaced?', 'Sometimes. Partial replacement may be possible when damage is limited. A provider can explain whether matching materials and layout make sense.'],
      ['What are common signs old gutters are failing?', 'Frequent leaks, overflowing water, sagging, pulling away from fascia, rust, cracks, and pooling water near the home can indicate issues worth discussing.'],
      ['Does replacement include gutter guards?', 'Not automatically. Gutter guards or covers are separate options and may not be included unless the provider offers and quotes them.'],
      ['Is replacement pricing guaranteed here?', 'No. Pricing is not guaranteed by this website. Providers determine pricing after reviewing the property, project details, and service availability.']
    ]
  },
  overview: {
    eyebrow: 'Gutter project information',
    h1: 'Gutter Installation, Replacement & Repair Options',
    intro: 'Read a practical homeowner guide about gutter systems, drainage planning, cost factors, project preparation, and how to discuss provider availability.',
    primaryCta: 'Call To Check Options',
    projectType: 'Gutter project planning',
    overviewTitle: 'How gutter projects are commonly evaluated',
    overview: 'A gutter project may involve new installation, replacement, repair, or downspout changes. Providers often review the roofline, corners, drainage path, fascia attachment points, material options, and whether the current system is moving water away from the home properly.',
    steps: [
      ['Identify the service type', 'Decide whether the need is installation, replacement, repair, downspouts, or drainage improvement.'],
      ['Review home layout', 'Stories, roof shape, corners, access, and landscaping can all affect project scope.'],
      ['Consider water flow', 'Downspout discharge and ground slope matter because water should be routed away from sensitive areas.'],
      ['Ask provider questions', 'Discuss availability, pricing method, materials, timeline, and whether a site visit is needed.']
    ],
    faq: [
      ['What information should I have before calling?', 'Helpful details include home type, number of stories, current gutter issue, whether old gutters exist, and whether you need installation, replacement, or repair.'],
      ['Do gutter systems affect drainage near the home?', 'Yes. Gutters and downspouts help route roof water away from siding, walkways, landscaping, and foundation areas. Poor routing can create recurring water problems.'],
      ['Can this site schedule work directly?', 'This site provides information and helps consumers discuss provider options. Independent providers determine availability and scheduling.'],
      ['Are services available everywhere?', 'No. Provider availability varies by location, service type, and schedule. Calling does not guarantee that a provider is available in your area.']
    ]
  }
} satisfies Record<PageType, any>;

const materialOptions = [
  ['Aluminum gutters', 'A common residential option because aluminum is lightweight, rust resistant, and available in many colors. Gauge and installation quality matter.'],
  ['Seamless gutters', 'Longer gutter runs can reduce joints on straight sections. Corners, end caps, downspouts, and slope still require careful setup.'],
  ['Steel gutters', 'May be used where added strength is desired, but corrosion resistance and coating quality should be discussed with the provider.'],
  ['Copper or specialty profiles', 'Often selected for appearance or architectural needs and may involve different costs and installation requirements.'],
  ['Downspouts', 'Downspouts, elbows, splash blocks, and extensions help move water away from the home after it leaves the gutter.'],
  ['Fascia and attachment points', 'Loose or damaged fascia can affect installation. Some providers may flag fascia concerns before completing gutter work.']
];

const costFactors = [
  'Total linear feet needed around the home',
  'Number of corners, rooflines, and difficult access areas',
  'One-story versus multi-story installation access',
  'Material type, gauge, color, and profile style',
  'Downspout count, location, extensions, and drainage needs',
  'Removal or disposal of old gutter sections',
  'Local labor availability and provider scheduling',
  'Whether fascia, trim, or related areas need separate review'
];

const prepChecklist = [
  'Know whether you need installation, replacement, repair, or downspout work',
  'Note visible issues such as sagging, overflow, rust, cracks, or water pooling',
  'Estimate number of stories and whether access around the home is clear',
  'Ask whether pricing requires an on-site measurement or inspection',
  'Ask what is included, such as removal, downspouts, cleanup, and materials',
  'Confirm service area availability and appointment timing before making plans'
];

export function ServicePage({ type }: { type: PageType }) {
  const page = content[type];
  return (
    <main>
      <Header />
      <section className="relative overflow-hidden bg-gradient-to-br from-sand via-white to-[#e8efe4]">
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-leaf/10 blur-3xl" />
        <div className="absolute -left-20 bottom-8 h-72 w-72 rounded-full bg-clay/10 blur-3xl" />
        <div className="container-pad relative grid gap-8 py-10 sm:py-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-12 lg:py-20">
          <div className="flex flex-col justify-center">
            <span className="badge w-fit">{page.eyebrow}</span>
            <h1 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">{page.h1}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">{page.intro}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a className="btn-primary" href={siteConfig.phoneHref}><Phone className="mr-2 h-4 w-4" /> {page.primaryCta}</a>
              <a className="btn-secondary" href="#guide">Read Project Guide</a>
            </div>
            <p className="mt-5 text-sm text-ink/60">This page is informational. Availability, pricing, and appointment times vary by provider and location.</p>
          </div>
          <div className="card p-4 sm:p-6 lg:p-8">
            <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-roof to-ink p-5 sm:p-6 text-white">
              <div className="flex items-center gap-3"><Home className="h-8 w-8" /><div><p className="text-sm text-white/70">Project type</p><p className="text-xl font-bold">{page.projectType}</p></div></div>
              <ul className="mt-6 space-y-4">
                {prepChecklist.slice(0, 4).map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/90"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0" />{item}</li>)}
              </ul>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-sand p-4"><p className="font-bold">Call hours</p><p className="mt-2 text-sm leading-6 text-ink/65">{siteConfig.hours}.</p></div>
              <div className="rounded-2xl bg-sand p-4"><p className="font-bold">Provider disclosure</p><p className="mt-2 text-sm leading-6 text-ink/65">Independent providers determine service availability and pricing.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="guide" className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container-pad grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-10">
          <div>
            <span className="badge bg-sand">Homeowner guide</span>
            <h2 className="section-title mt-4">{page.overviewTitle}</h2>
            <p className="mt-4 text-base leading-7 text-ink/70 sm:mt-5 sm:leading-8">{page.overview}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {page.steps.map(([title, text]: string[], idx: number) => (
              <div className="rounded-2xl sm:rounded-3xl border border-black/5 bg-sand p-5 sm:p-6" key={title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf text-white font-bold">{idx + 1}</div>
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="materials" className="py-12 sm:py-16 lg:py-20">
        <div className="container-pad">
          <div className="max-w-3xl"><span className="badge">Materials and components</span><h2 className="section-title mt-4">Gutter materials, profiles, and drainage parts</h2><p className="mt-4 text-base leading-7 text-ink/70 sm:mt-5 sm:leading-8">Material selection is only one part of the project. Slope, joints, fasteners, corners, downspout placement, and discharge direction can be just as important for performance.</p></div>
          <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {materialOptions.map(([title, text]) => (
              <article key={title} className="card p-5 sm:p-7"><div className="flex items-center gap-3"><div className="rounded-2xl bg-leaf/10 p-3 text-leaf"><Hammer className="h-6 w-6" /></div><h3 className="text-lg font-bold sm:text-xl">{title}</h3></div><p className="mt-4 leading-7 text-ink/70">{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section id="cost-factors" className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container-pad grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div><span className="badge bg-sand">Cost education</span><h2 className="section-title mt-4">What may affect gutter project cost?</h2><p className="mt-4 text-base leading-7 text-ink/70 sm:mt-5 sm:leading-8">This website does not publish prices or provide quotes. Gutter pricing can vary widely because each home has different measurements, access needs, material choices, and drainage requirements.</p><a className="btn-primary mt-8" href={siteConfig.phoneHref}><Phone className="mr-2 h-4 w-4" /> Discuss Options</a></div>
          <div className="card p-5 sm:p-7"><ul className="space-y-4">{costFactors.map((factor) => <li key={factor} className="flex gap-3 leading-7 text-ink/75"><ClipboardCheck className="mt-1 h-5 w-5 shrink-0 text-leaf" />{factor}</li>)}</ul></div>
        </div>
      </section>

      <section id="process" className="py-12 sm:py-16 lg:py-20">
        <div className="container-pad">
          <div className="max-w-3xl"><span className="badge">Process</span><h2 className="section-title mt-4">What happens when you call?</h2><p className="mt-4 text-base leading-7 text-ink/70">A phone conversation helps collect basic project information and discuss available provider options. It does not guarantee service, price, or appointment availability.</p></div>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {[
              [Ruler, 'Share details', 'Describe the gutter project, visible issues, home size, and service type.'],
              [MapPin, 'Confirm area', 'Provider options depend on location and service coverage.'],
              [Droplets, 'Discuss drainage', 'Explain overflow, pooling, downspout, or water routing concerns.'],
              [FileText, 'Review next step', 'Ask what information a provider may need before scheduling.']
            ].map(([Icon, title, text]: any) => <div key={title} className="card p-5 sm:p-6"><Icon className="h-7 w-7 text-leaf" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-ink/65">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container-pad grid gap-5 sm:gap-8 lg:grid-cols-3">
          <div className="card p-5 sm:p-7"><Wrench className="h-8 w-8 text-leaf" /><h3 className="mt-4 text-lg font-bold sm:text-xl">Repair versus replacement</h3><p className="mt-3 leading-7 text-ink/70">A small isolated issue may be handled differently than widespread sagging, rust, repeated leaks, or a system with poor slope.</p></div>
          <div className="card p-5 sm:p-7"><ShieldCheck className="h-8 w-8 text-leaf" /><h3 className="mt-4 text-lg font-bold sm:text-xl">Questions to ask</h3><p className="mt-3 leading-7 text-ink/70">Ask what is included, what materials may be used, whether removal is included, and how downspout placement is determined.</p></div>
          <div className="card p-5 sm:p-7"><AlertCircle className="h-8 w-8 text-clay" /><h3 className="mt-4 text-lg font-bold sm:text-xl">Important disclosure</h3><p className="mt-3 leading-7 text-ink/70">We do not directly perform gutter services. Independent providers decide availability, pricing, timing, and project scope.</p></div>
        </div>
      </section>

      <section id="faq" className="bg-sand py-12 sm:py-16 lg:py-20">
        <div className="container-pad">
          <div className="max-w-3xl"><span className="badge bg-white">FAQ</span><h2 className="section-title mt-4">Common gutter project questions</h2></div>
          <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2">
            {page.faq.map(([q, a]: string[]) => <div className="rounded-2xl sm:rounded-3xl border border-black/5 bg-white p-5 sm:p-6" key={q}><h3 className="font-bold">{q}</h3><p className="mt-3 text-sm leading-7 text-ink/70">{a}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-ink py-10 sm:py-14 text-white">
        <div className="container-pad flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div><p className="text-sm font-semibold text-white/60">Ready to discuss gutter options?</p><h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Call to check provider availability.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">This call does not guarantee service availability or pricing. It helps you discuss project details and available provider options.</p></div>
          <a className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-ink sm:w-auto" href={siteConfig.phoneHref}><Phone className="mr-2 h-4 w-4" /> {siteConfig.phoneDisplay}</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
