import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-600">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 md:px-6 max-w-3xl py-16 prose prose-slate prose-headings:font-heading prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700 prose-a:text-primary prose-strong:text-slate-900">
        <p className="lead text-lg text-slate-700">
          Welcome to TowSite. These Terms of Service ("Terms") govern your access to and use of our website, design services, hosting, and related products (collectively, the "Service"). By using the Service, you agree to these Terms. If you do not agree, please do not use the Service.
        </p>

        <h2>1. Eligibility and Accounts</h2>
        <p>
          You must be at least 18 years old and authorized to enter into binding contracts on behalf of your business to use the Service. You are responsible for keeping your account credentials confidential and for all activity that occurs under your account.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          TowSite provides done-for-you website design, hosting, maintenance, and SEO services for towing companies. We deliver a customized website built from one of our templates within approximately 7 business days of receiving your content and approval. Specific deliverables depend on the plan you select.
        </p>

        <h2>3. Subscription Plans and Billing</h2>
        <ul>
          <li><strong>Recurring fees.</strong> Plans are billed monthly in advance. The first charge occurs on the day your site goes live.</li>
          <li><strong>Payment method.</strong> You authorize us to charge your designated payment method on each billing date until you cancel.</li>
          <li><strong>Failed payments.</strong> If a payment fails, we may suspend or terminate the Service after providing reasonable notice.</li>
          <li><strong>Price changes.</strong> We may change pricing with at least 30 days' notice. Continued use after the effective date constitutes acceptance of the new price.</li>
          <li><strong>Taxes.</strong> Fees are exclusive of applicable taxes, which you are responsible for paying.</li>
        </ul>

        <h2>4. Cancellation and Refunds</h2>
        <p>
          You may cancel at any time by emailing us with 30 days' notice. After cancellation, your site will be taken offline at the end of the current billing cycle and any custom domain you own will be released back to you. Monthly fees already paid are non-refundable except where required by law.
        </p>

        <h2>5. Your Content</h2>
        <p>
          You retain ownership of all content (text, photos, logos, branding) you provide to us. By submitting content, you grant TowSite a non-exclusive, worldwide license to use, reproduce, and display that content solely to operate and promote your website. You represent that you have all necessary rights to the content you submit and that it does not infringe on any third party's rights.
        </p>

        <h2>6. Our Intellectual Property</h2>
        <p>
          The TowSite name, logo, templates, code, designs, and underlying technology are owned by TowSite. While your site is active, you receive a license to use the design and code we deliver as part of the Service. If you cancel, that license ends — but the content you provided remains yours and we will assist with reasonable export.
        </p>

        <h2>7. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service for any unlawful, fraudulent, or harmful purpose.</li>
          <li>Upload content that is defamatory, obscene, infringing, or violates anyone's privacy.</li>
          <li>Attempt to gain unauthorized access to our systems or interfere with the Service.</li>
          <li>Resell, sublicense, or redistribute the Service without our written permission.</li>
          <li>Use the Service to send spam or unsolicited communications.</li>
        </ul>
        <p>We may suspend or terminate accounts that violate these rules.</p>

        <h2>8. Service Availability</h2>
        <p>
          We strive for 99.9% uptime, but we do not guarantee uninterrupted service. Scheduled maintenance, third-party outages, or events beyond our control may cause downtime. We will work in good faith to restore service as quickly as possible.
        </p>

        <h2>9. Disclaimers</h2>
        <p>
          THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. We do not guarantee specific business results, search rankings, or call volumes.
        </p>

        <h2>10. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, TowSite's total liability for any claim arising out of or relating to the Service is limited to the amount you paid us in the three (3) months preceding the claim. We are not liable for indirect, incidental, special, consequential, or punitive damages, including lost profits, lost revenue, or lost data.
        </p>

        <h2>11. Indemnification</h2>
        <p>
          You agree to indemnify and hold TowSite harmless from any claims, damages, or expenses (including reasonable attorneys' fees) arising out of your content, your violation of these Terms, or your violation of any law or third-party right.
        </p>

        <h2>12. Termination</h2>
        <p>
          We may suspend or terminate your access to the Service at any time, with or without notice, if you breach these Terms or if continued service would expose us to legal or financial risk. Sections that by their nature should survive termination (intellectual property, disclaimers, limitation of liability, indemnification, governing law) will survive.
        </p>

        <h2>13. Governing Law and Dispute Resolution</h2>
        <p>
          These Terms are governed by the laws of the United States and the state in which TowSite is registered, without regard to conflict-of-law principles. Any dispute will be resolved in the state or federal courts located in that jurisdiction, and you consent to that venue.
        </p>

        <h2>14. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. The "Last updated" date at the top reflects the most recent revision. Material changes will be communicated via email or a notice on our website. Continued use of the Service after the effective date constitutes acceptance of the updated Terms.
        </p>

        <h2>15. Contact</h2>
        <p>
          Questions about these Terms? Reach us at <a href="mailto:hello@towsite.com">hello@towsite.com</a> or call <a href="tel:18005550199">1-800-555-0199</a>.
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
