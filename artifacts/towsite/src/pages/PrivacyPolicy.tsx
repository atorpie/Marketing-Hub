import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "May 2, 2026";

  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center font-bold text-white font-heading text-xl">T</div>
            <span className="font-heading font-bold text-xl tracking-tight text-slate-900">TowSite</span>
          </Link>
          <Link href="/" data-testid="link-back-home">
            <Button variant="ghost" size="sm" className="text-slate-700 hover:text-primary">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to home
            </Button>
          </Link>
        </div>
      </header>

      {/* Title */}
      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-600">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 md:px-6 max-w-3xl py-16 prose prose-slate prose-headings:font-heading prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700 prose-a:text-primary prose-strong:text-slate-900">
        <p className="lead text-lg text-slate-700">
          TowSite ("we", "us", or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or use our services.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We collect information in the following ways:</p>
        <ul>
          <li><strong>Information you provide.</strong> When you contact us, request a demo, sign up for our service, or email us, we collect your name, business name, email address, phone number, and any other details you choose to share.</li>
          <li><strong>Service data.</strong> When we build and host your towing website, we collect the content, photos, branding, and configuration you provide for your site.</li>
          <li><strong>Automatic data.</strong> Like most websites, we collect basic technical information such as IP address, browser type, device type, pages viewed, and referring URLs through cookies and similar technologies.</li>
          <li><strong>Payment information.</strong> If you subscribe to a paid plan, payment details are processed by our payment provider. We do not store full credit card numbers on our servers.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Build, host, customize, and maintain your towing website.</li>
          <li>Communicate with you about your account, billing, support, and service updates.</li>
          <li>Send marketing emails about our services (you can opt out at any time).</li>
          <li>Improve our templates, designs, and overall service quality.</li>
          <li>Detect, investigate, and prevent fraudulent or abusive activity.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2>3. How We Share Information</h2>
        <p>We do not sell your personal information. We share information only with:</p>
        <ul>
          <li><strong>Service providers</strong> who help us operate (hosting, email delivery, payment processing, analytics). These providers are bound by confidentiality obligations.</li>
          <li><strong>Legal authorities</strong> when required by law, court order, or to protect our rights, your safety, or the safety of others.</li>
          <li><strong>Business transfers</strong> in connection with a merger, acquisition, or sale of all or part of our business.</li>
        </ul>

        <h2>4. Cookies and Tracking</h2>
        <p>
          We use cookies and similar technologies to operate our site, remember your preferences, and understand how visitors use our service. You can control cookies through your browser settings, though disabling them may affect site functionality.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We use industry-standard safeguards including SSL encryption, secured hosting, and access controls to protect your information. No system is 100% secure, but we work hard to keep your data safe and notify you promptly if a breach affects you.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          We retain your information for as long as your account is active or as needed to provide services. After cancellation, we may retain certain information to comply with legal obligations, resolve disputes, and enforce our agreements.
        </p>

        <h2>7. Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of your information.</li>
          <li>Opt out of marketing communications.</li>
          <li>Request a copy of your information in a portable format.</li>
        </ul>
        <p>To exercise these rights, contact us at <a href="mailto:hello@towsite.com">hello@towsite.com</a>.</p>

        <h2>8. Children's Privacy</h2>
        <p>
          Our services are intended for businesses and adults 18 and older. We do not knowingly collect personal information from children under 13. If we learn we have collected information from a child under 13, we will delete it.
        </p>

        <h2>9. Third-Party Links</h2>
        <p>
          Our site may link to third-party services (Google Business Profile, dispatch software, etc.). We are not responsible for the privacy practices of those sites. Please review their policies before sharing information.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The "Last updated" date at the top reflects the most recent revision. Material changes will be communicated via email or a notice on our website.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          Questions about this Privacy Policy? Reach us at <a href="mailto:hello@towsite.com">hello@towsite.com</a> or call <a href="tel:18005550199">1-800-555-0199</a>.
        </p>
      </article>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} TowSite. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-slate-500 hover:text-primary transition-colors text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-primary transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
