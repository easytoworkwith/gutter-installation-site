import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/lib/site';

export default function AboutPage() {
  return (
    <main><Header />
      <section className="bg-white py-12 sm:py-16 lg:py-20"><div className="container-pad max-w-4xl">
        <span className="badge bg-sand">About</span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">About {siteConfig.brand}</h1>
        <div className="mt-6 space-y-5 text-base leading-8 text-ink/75">
          <p>{siteConfig.brand} is an informational website built to help homeowners understand gutter installation, replacement, repair, drainage, downspouts, and project planning topics before speaking with a service provider.</p>
          <p>We do not directly install, replace, repair, inspect, or warrant gutter systems. We do not provide fixed quotes, financing, insurance advice, or guaranteed appointment times. When you call, you may discuss provider options and availability, which can vary by location, provider schedule, home layout, and project type.</p>
          <p>Our goal is to provide clear educational content so homeowners can ask better questions and understand common project factors such as materials, linear footage, roofline complexity, drainage routes, removal of old gutters, and downspout placement.</p>
        </div>
      </div></section><Footer /></main>
  );
}
