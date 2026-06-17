import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/lib/site';

export default function PrivacyPage() {
  return (
    <main><Header />
      <section className="bg-white py-12 sm:py-16 lg:py-20"><div className="container-pad max-w-4xl">
        <span className="badge bg-sand">Privacy Policy</span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">Privacy Policy</h1>
        <div className="mt-6 space-y-5 text-base leading-8 text-ink/75">
          <p>This Privacy Policy explains how {siteConfig.brand} may collect and use information when visitors use this website or call the phone number shown on the site.</p>
          <h2 className="text-xl font-bold text-ink">Information you may provide</h2>
          <p>When you call, you may choose to provide project details such as service type, location, property type, phone number, and scheduling preferences. Do not provide information you do not want discussed with a provider.</p>
          <h2 className="text-xl font-bold text-ink">Website data</h2>
          <p>We may use standard analytics or advertising measurement tools to understand traffic sources, page performance, and ad effectiveness. Advertising platforms may append tracking parameters to URLs for measurement.</p>
          <h2 className="text-xl font-bold text-ink">How information may be used</h2>
          <p>Information may be used to respond to inquiries, discuss provider availability, improve website content, measure advertising performance, and maintain site security.</p>
          <h2 className="text-xl font-bold text-ink">No guarantee of service</h2>
          <p>Providing information does not guarantee service availability, pricing, scheduling, or project outcome. Independent providers determine service details.</p>
        </div>
      </div></section><Footer /></main>
  );
}
