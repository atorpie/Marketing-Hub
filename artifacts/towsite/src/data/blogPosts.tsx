import type { ReactNode } from "react";
import { CheckCircle2, XCircle, AlertTriangle, TrendingUp, Phone, Star } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Marketing" | "SEO" | "Case Study" | "Operations" | "Industry" | "Guide";
  format: "Ultimate Guide" | "Listicle" | "How-To" | "Case Study" | "Comparison" | "FAQ" | "Checklist" | "Industry Report";
  readTime: number;
  date: string;
  keyword: string;
  author: string;
  content: () => ReactNode;
}

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="mt-10">
    <h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mt-12 mb-4">{title}</h2>
    <div className="text-slate-700 leading-relaxed space-y-4">{children}</div>
  </section>
);

const Callout = ({ children, tone = "info" }: { children: ReactNode; tone?: "info" | "warn" | "success" }) => {
  const styles = {
    info: "bg-primary/5 border-primary/30 text-slate-800",
    warn: "bg-amber-50 border-amber-300 text-amber-900",
    success: "bg-emerald-50 border-emerald-300 text-emerald-900",
  }[tone];
  const Icon = tone === "warn" ? AlertTriangle : tone === "success" ? CheckCircle2 : TrendingUp;
  return (
    <div className={`my-6 border-l-4 rounded-r-lg p-4 flex gap-3 ${styles}`}>
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
};

export const blogPosts: BlogPost[] = [
  {
    slug: "marketing-towing-business-2026-ultimate-guide",
    title: "The Ultimate Guide to Marketing Your Towing Business in 2026",
    excerpt: "Everything a tow company owner needs to win local search, fill the dispatch board, and stop relying on motor club scraps — broken down step by step.",
    category: "Guide",
    format: "Ultimate Guide",
    readTime: 14,
    date: "May 1, 2026",
    keyword: "towing company marketing",
    author: "TowSite Team",
    content: () => (
      <>
        <p className="text-lg text-slate-700 leading-relaxed">
          If you own a towing company in 2026, the rules of getting calls have changed. Yellow Pages is dead.
          Motor clubs pay less every year. The owners winning right now are the ones treating their website like
          their #1 truck — running 24/7, responding instantly, and showing up first when somebody searches
          <em> "tow truck near me."</em>
        </p>
        <p>
          This is the complete playbook we've used to help 50+ towing companies double or triple their inbound
          call volume. No fluff, no theory — just what works.
        </p>

        <Callout>
          <strong>Quick context:</strong> The average towing company spends $0–$200/month on marketing and
          wonders why they only get motor club calls. The companies clearing 30+ cash calls a day are spending
          $300–$800/month — and earning 10× that back.
        </Callout>

        <Section title="1. Own your local Google search results">
          <p>
            When somebody's car breaks down on the side of the road, they pull out their phone and type a few
            words. The top three results on Google Maps — what marketers call the "local pack" — get over 70% of
            those clicks. If you're not in those three spots for your city, you don't exist.
          </p>
          <p>
            The good news: ranking locally is mostly mechanical. You need a verified Google Business Profile, a
            consistent business name/address/phone across the web, regular review activity, and a website that
            Google trusts.
          </p>
        </Section>

        <Section title="2. Build a website that converts on mobile in 3 seconds">
          <p>
            Stranded drivers don't read. They tap the call button. If your site loads slowly or buries the phone
            number, you've already lost the call to the next result. The only metrics that matter for a towing
            site are:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Time to first call button visible:</strong> under 2 seconds</li>
            <li><strong>Phone number tap-to-call:</strong> in the header, hero, and sticky footer</li>
            <li><strong>Service area + main services:</strong> visible without scrolling</li>
          </ul>
        </Section>

        <Section title="3. Go all-in on Google reviews">
          <p>
            Reviews are the single highest-leverage marketing activity in this industry. Every truck should
            have a printed card with a QR code linking directly to your review form. Every successful tow ends
            with a 30-second review request from the driver. Owners who do this hit 100+ reviews in their first
            year and never look back.
          </p>
        </Section>

        <Section title="4. Stop chasing motor club calls and start owning cash calls">
          <p>
            Motor clubs pay $40–$70 per call. A direct cash call is $150–$400. Same truck, same hour, four
            times the revenue. Every dollar you spend on marketing should be aimed at ringing your direct line,
            not your dispatch app.
          </p>
        </Section>

        <Section title="5. Track everything or you're flying blind">
          <p>
            You should know — to the dollar — how much each lead source is making you. Set up call tracking,
            tag every form submission, and review the numbers monthly. The companies who track double their
            margins because they kill the channels that don't pay.
          </p>
        </Section>

        <p className="mt-12 text-lg">
          Marketing a towing business in 2026 isn't complicated — it's just unfamiliar to most operators.
          Pick one section above, execute it this week, and stack from there.
        </p>
      </>
    ),
  },
  {
    slug: "10-local-seo-tips-towing-companies",
    title: "10 Local SEO Tips Every Towing Company Needs in 2026",
    excerpt: "A no-nonsense list of the highest-ROI local SEO moves for towing operators — most you can do yourself in an afternoon.",
    category: "SEO",
    format: "Listicle",
    readTime: 8,
    date: "April 24, 2026",
    keyword: "local SEO for towing companies",
    author: "TowSite Team",
    content: () => {
      const tips = [
        { n: 1, title: "Claim and verify your Google Business Profile", body: "If you only do one thing, do this. An unverified GBP costs you 80% of your local visibility. Make sure the category is set to \"Towing service\" — not \"Auto repair shop.\"" },
        { n: 2, title: "Match your name, address, and phone everywhere", body: "Your business name should appear identically on Google, Yelp, your website, your invoices, and any directory listing. \"Joe's Towing LLC\" and \"Joe's Towing\" look the same to you — Google sees two different businesses." },
        { n: 3, title: "Build a service-area page for every city you cover", body: "Don't just have one \"Service Area\" page. Build one page per city: /tow-truck-springfield, /tow-truck-greenville, etc. Each ranks independently." },
        { n: 4, title: "Get reviews — constantly", body: "Aim for 4–8 new reviews per month. Quantity, recency, and reply rate all factor into ranking. Use a QR card on every truck." },
        { n: 5, title: "Add real photos of your trucks and drivers", body: "Stock photos kill trust. Real photos with your trucks, your team, and your service area boost both ranking and conversion." },
        { n: 6, title: "Embed a Google Map of your service area", body: "Adding a real interactive map to your contact page helps Google understand exactly where you operate." },
        { n: 7, title: "Build pages for each service you offer", body: "Heavy duty towing, motorcycle towing, lockouts, jump starts, fuel delivery, accident recovery — each gets its own page targeting that keyword." },
        { n: 8, title: "Get local backlinks", body: "A link from your local Chamber of Commerce, a body shop you partner with, or your local news site is worth 100 generic directory links." },
        { n: 9, title: "Use schema markup for local business and service", body: "This is technical, but worth it. Local business + service schema helps Google show your phone number, hours, and ratings directly in search." },
        { n: 10, title: "Check your rankings monthly, not daily", body: "Rankings fluctuate. Pick 5–10 important keywords and track them once a month. Adjust based on the trend, not the day-to-day noise." },
      ];
      return (
        <>
          <p className="text-lg text-slate-700 leading-relaxed">
            Local SEO for a towing company isn't about beating a national chain — it's about beating the three
            other towing companies in your zip code. Here are the 10 moves that move the needle.
          </p>
          <div className="mt-8 space-y-6">
            {tips.map((t) => (
              <div key={t.n} className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white font-bold font-heading flex items-center justify-center text-xl">{t.n}</div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 mb-1">{t.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
          <Callout tone="success">
            <strong>Pro tip:</strong> If you do #1, #2, #3, and #4 only — and ignore the rest — you'll still
            outrank 80% of your local competition. Stack the others as you have time.
          </Callout>
        </>
      );
    },
  },
  {
    slug: "how-to-get-more-5-star-reviews-towing",
    title: "How to Get More 5-Star Google Reviews for Your Tow Truck Business",
    excerpt: "A step-by-step playbook for collecting reviews from real customers — without sounding pushy or breaking Google's rules.",
    category: "Marketing",
    format: "How-To",
    readTime: 6,
    date: "April 17, 2026",
    keyword: "tow truck google reviews",
    author: "TowSite Team",
    content: () => (
      <>
        <p className="text-lg text-slate-700 leading-relaxed">
          Reviews are the closest thing to free advertising in this business. A tow company with 80 reviews
          averaging 4.7 stars will out-earn a competitor with 12 reviews every single time — even if the
          competitor has been around longer.
        </p>
        <p>Here's the exact system we recommend, in order.</p>

        <Section title="Step 1: Set up a short review link">
          <p>
            Don't send customers to your full Google profile and hope they find the review button. Get your
            short Google review link from your Business Profile dashboard. It looks like
            <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm mx-1">g.page/r/yourname/review</code>.
            Save it as a bookmark on every driver's phone.
          </p>
        </Section>

        <Section title="Step 2: Print QR cards and put them in every truck">
          <p>
            A 2"×3.5" card that says "Was your driver awesome? Tell Google in 30 seconds" with a big QR code.
            Cost: $30 for 250 cards. Conversion rate when handed over by the driver: about 1 in 4.
          </p>
        </Section>

        <Section title="Step 3: Ask in person, immediately, every time">
          <p>
            The single highest converting moment is right after the customer signs the invoice and you're
            handing them their keys. Word for word:
          </p>
          <blockquote className="border-l-4 border-primary pl-6 py-2 my-4 italic text-slate-700">
            "Hey — if you've got 30 seconds, my boss tracks our reviews and it really helps me out. Just scan
            this QR code, and thanks again."
          </blockquote>
          <p>That phrasing works because it's about the driver, not the company. Customers want to help a person.</p>
        </Section>

        <Section title="Step 4: Send a same-day text follow-up">
          <p>
            For customers you didn't get in person, send a text within 4 hours of completing the job:
          </p>
          <blockquote className="border-l-4 border-primary pl-6 py-2 my-4 italic text-slate-700">
            "Hey [name] — this is Mike at Acme Towing. Glad we got you taken care of today. If you have a
            second, mind leaving us a quick Google review? [link]"
          </blockquote>
        </Section>

        <Section title="Step 5: Respond to every single review">
          <p>
            Both 5-star and 1-star. Reply within 48 hours. Thank good reviewers by name. For bad reviews, stay
            calm, acknowledge the issue, and offer to make it right offline. Google's algorithm rewards active
            profiles.
          </p>
        </Section>

        <Callout tone="warn">
          <strong>What NOT to do:</strong> Never offer a discount or refund in exchange for a review. Never
          ask only your happy customers (called "review gating"). Both violate Google's policy and can get your
          profile suspended.
        </Callout>

        <Section title="What to expect">
          <p>
            Companies running this system land 4–8 new reviews per month consistently. Hit 100 lifetime reviews
            and you'll notice your phone ringing more — even when you change nothing else.
          </p>
        </Section>
      </>
    ),
  },
  {
    slug: "case-study-2-truck-operation-tripled-calls-90-days",
    title: "Case Study: How a 2-Truck Operation Tripled Cash Calls in 90 Days",
    excerpt: "A real-world breakdown of what one Midwest towing company changed — and the exact numbers that came out the other side.",
    category: "Case Study",
    format: "Case Study",
    readTime: 7,
    date: "April 10, 2026",
    keyword: "towing company case study",
    author: "TowSite Team",
    content: () => (
      <>
        <p className="text-lg text-slate-700 leading-relaxed">
          Names and a few details have been changed for privacy, but the numbers are real. This is what one
          owner did in 90 days to go from 8 cash calls a week to 26.
        </p>

        <div className="my-8 grid sm:grid-cols-3 gap-4">
          <div className="bg-primary text-white rounded-lg p-6 text-center">
            <div className="text-4xl font-bold font-heading">+225%</div>
            <div className="text-sm opacity-90 mt-1">Cash call volume</div>
          </div>
          <div className="bg-secondary text-slate-900 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold font-heading">+$11k</div>
            <div className="text-sm opacity-90 mt-1">Monthly revenue lift</div>
          </div>
          <div className="bg-slate-900 text-white rounded-lg p-6 text-center">
            <div className="text-4xl font-bold font-heading">90</div>
            <div className="text-sm opacity-90 mt-1">Days from start to finish</div>
          </div>
        </div>

        <Section title="The starting point">
          <p>
            Two trucks. Owner-operator plus one full-time driver. Doing roughly 60% motor club work, 40% cash.
            Old website built by a cousin in 2019, not mobile-friendly, no Google Business Profile photos, 11
            total reviews averaging 4.2 stars.
          </p>
          <p>Average week: 8 direct cash calls, 22 motor club tows. Monthly gross: about $14,500.</p>
        </Section>

        <Section title="What we changed (in order)">
          <p><strong>Days 1–7:</strong> Rebuilt the website on a mobile-first template with click-to-call buttons everywhere. Added pages for each city in the service area and each service offered.</p>
          <p><strong>Days 8–14:</strong> Cleaned up the Google Business Profile. Added 30+ real photos of trucks, drivers, and recoveries. Updated business hours, services, and category.</p>
          <p><strong>Days 15–30:</strong> Started the review system. Printed QR cards, gave the driver a script, set up text follow-ups. Got 14 new reviews in the first 30 days.</p>
          <p><strong>Days 31–60:</strong> Built five city-specific landing pages targeting the surrounding towns. Added schema markup to help Google understand the service area.</p>
          <p><strong>Days 61–90:</strong> Started a small Google Local Service Ads budget — $300/month. Tracked every call.</p>
        </Section>

        <Section title="The results at day 90">
          <Table className="my-4">
            <TableHeader>
              <TableRow>
                <TableHead>Metric</TableHead>
                <TableHead>Day 0</TableHead>
                <TableHead>Day 90</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow><TableCell>Weekly cash calls</TableCell><TableCell>8</TableCell><TableCell>26</TableCell></TableRow>
              <TableRow><TableCell>Google reviews</TableCell><TableCell>11</TableCell><TableCell>47</TableCell></TableRow>
              <TableRow><TableCell>Average rating</TableCell><TableCell>4.2</TableCell><TableCell>4.8</TableCell></TableRow>
              <TableRow><TableCell>Local pack ranking</TableCell><TableCell>Page 2</TableCell><TableCell>#2</TableCell></TableRow>
              <TableRow><TableCell>Monthly revenue</TableCell><TableCell>$14.5k</TableCell><TableCell>$25.6k</TableCell></TableRow>
            </TableBody>
          </Table>
        </Section>

        <Section title="What the owner said">
          <blockquote className="border-l-4 border-primary pl-6 py-2 my-4 italic text-slate-700">
            "I should have done this five years ago. The crazy part is I'm doing the same job — same trucks,
            same drivers — and bringing home twice the money. The phone just rings more."
          </blockquote>
        </Section>

        <Callout tone="success">
          <strong>The takeaway:</strong> Nothing in this 90-day plan was complicated. It was website + reviews +
          GBP + tracking. Most operators never get around to step one.
        </Callout>
      </>
    ),
  },
  {
    slug: "website-builder-vs-custom-towing-site",
    title: "Towing Website Builders vs. Custom Sites: Which Wins in 2026?",
    excerpt: "Wix, Squarespace, GoDaddy, custom developers, or a done-for-you towing template — a side-by-side comparison of what actually delivers calls.",
    category: "Marketing",
    format: "Comparison",
    readTime: 9,
    date: "April 3, 2026",
    keyword: "towing website builder vs custom",
    author: "TowSite Team",
    content: () => (
      <>
        <p className="text-lg text-slate-700 leading-relaxed">
          Every towing company owner eventually faces the same question: do I build my website on a $20/month
          drag-and-drop builder, hire a developer for $5,000+, or use a done-for-you template made for the
          industry? Here's an honest comparison.
        </p>

        <Section title="The four real options">
          <Table className="my-4">
            <TableHeader>
              <TableRow>
                <TableHead>Option</TableHead>
                <TableHead>Cost</TableHead>
                <TableHead>Setup time</TableHead>
                <TableHead>Optimized for towing?</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow><TableCell>DIY (Wix, Squarespace)</TableCell><TableCell>$15–35/mo</TableCell><TableCell>20–40 hrs you</TableCell><TableCell>No</TableCell></TableRow>
              <TableRow><TableCell>Local web designer</TableCell><TableCell>$2k–8k upfront + hosting</TableCell><TableCell>4–10 weeks</TableCell><TableCell>Rarely</TableCell></TableRow>
              <TableRow><TableCell>National agency</TableCell><TableCell>$500–2,000/mo</TableCell><TableCell>6–12 weeks</TableCell><TableCell>Sometimes</TableCell></TableRow>
              <TableRow><TableCell>Industry template (TowSite)</TableCell><TableCell>$49–149/mo</TableCell><TableCell>3–7 days</TableCell><TableCell>Yes — built for towing</TableCell></TableRow>
            </TableBody>
          </Table>
        </Section>

        <Section title="Where each option wins">
          <h3 className="text-xl font-bold font-heading text-slate-900 mt-6 mb-2">DIY builder</h3>
          <p className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" /> Cheapest monthly cost.</p>
          <p className="flex gap-2"><XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" /> Almost always slow on mobile, terrible for SEO, no industry expertise.</p>

          <h3 className="text-xl font-bold font-heading text-slate-900 mt-6 mb-2">Local web designer</h3>
          <p className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" /> One-on-one relationship, fully custom.</p>
          <p className="flex gap-2"><XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" /> Expensive, slow, and they almost never know what works specifically for towing companies.</p>

          <h3 className="text-xl font-bold font-heading text-slate-900 mt-6 mb-2">National agency</h3>
          <p className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" /> Often includes ongoing SEO and ads management.</p>
          <p className="flex gap-2"><XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" /> $500–2,000/month adds up fast. You're a small account, you'll get junior reps.</p>

          <h3 className="text-xl font-bold font-heading text-slate-900 mt-6 mb-2">Industry-specific template</h3>
          <p className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" /> Built around proven towing layouts. Fast, mobile-first, SEO-ready out of the box.</p>
          <p className="flex gap-2"><XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" /> Less customization than a fully bespoke build.</p>
        </Section>

        <Section title="The honest recommendation">
          <p>
            For 90% of towing companies grossing under $1M/year, an industry template wins on every dimension
            that matters: speed to launch, monthly cost, mobile performance, and conversion rate. Save the
            custom build for after you have $2M in annual revenue and specific needs your competitors don't have.
          </p>
        </Section>
      </>
    ),
  },
  {
    slug: "towing-website-faq",
    title: "Frequently Asked Questions About Towing Company Websites",
    excerpt: "Real questions we hear from towing operators every week, with straight-shooting answers — no sales pitch.",
    category: "Operations",
    format: "FAQ",
    readTime: 5,
    date: "March 27, 2026",
    keyword: "towing company website questions",
    author: "TowSite Team",
    content: () => {
      const faqs = [
        { q: "How much should a towing company website cost?", a: "If you're paying more than $200/month for a website that's not also running your ads, you're overpaying. A solid done-for-you towing site lives in the $49–$149/month range. Custom builds are $3k–$8k upfront — fine if you have specific needs, overkill for most." },
        { q: "How long does it take to launch a new website?", a: "On a template platform: 3–7 days from kickoff to live. Custom builds: 4–12 weeks. The biggest delay is usually the owner getting photos and copy back to the designer, not the build itself." },
        { q: "Will a new website actually get me more calls?", a: "Only if it's faster, ranks better, and converts visitors into calls — and only if you're driving traffic to it. A new website with no SEO and no reviews is just a digital business card. The website is one piece of the puzzle." },
        { q: "Do I need a separate website for each city I serve?", a: "No — one website with separate pages for each city works better than separate domains. Each city page targets its own keywords and ranks independently." },
        { q: "What if I already have a website? Do I have to start over?", a: "Sometimes a refresh is enough — better mobile speed, clearer call buttons, updated reviews. Other times the underlying platform is so old it has to be replaced. A free audit usually makes the answer obvious." },
        { q: "Should my logo and trucks match my website colors?", a: "Yes. Visual consistency across your trucks, uniforms, business cards, and website builds trust and recognition. If your truck is red and your website is blue, you look like two different businesses." },
        { q: "What hosting and security do I need?", a: "SSL certificate (the padlock in the browser) is non-negotiable. Beyond that, just make sure your host has uptime guarantees and automatic backups. If you're on a done-for-you platform, this is included." },
        { q: "Can I edit the website myself once it's built?", a: "On most modern platforms, yes — you can update phone numbers, hours, photos, and service areas without a developer. For bigger structural changes, you'd usually go back to your provider." },
      ];
      return (
        <>
          <p className="text-lg text-slate-700 leading-relaxed">
            We talk to dozens of towing operators every month. These are the questions that come up over and
            over, with the answers we'd give a friend.
          </p>
          <Accordion type="single" collapsible className="mt-8 space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-slate-200 rounded-lg px-4 bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </>
      );
    },
  },
  {
    slug: "12-point-towing-website-audit-checklist",
    title: "The 12-Point Towing Website Audit Checklist",
    excerpt: "Print this, sit at your laptop, and grade your own site. If you can't check all 12, you're leaving calls on the table.",
    category: "SEO",
    format: "Checklist",
    readTime: 6,
    date: "March 20, 2026",
    keyword: "towing website audit",
    author: "TowSite Team",
    content: () => {
      const items = [
        { title: "Phone number tap-to-call in the header", body: "Visible without scrolling, even on the smallest phone screen." },
        { title: "Hero loads in under 2 seconds on mobile", body: "Test it on your own phone using your data plan, not your home Wi-Fi." },
        { title: "Service area and main services visible above the fold", body: "A stranded driver should see \"24/7 Towing in [City]\" in the first second." },
        { title: "Real photos — not stock", body: "At least 6 photos of your actual trucks, drivers, or recoveries." },
        { title: "Google Business Profile linked and consistent", body: "Same business name, address, and phone on your site as on Google." },
        { title: "At least one page per city you serve", body: "Each page mentions the city by name in the title, headers, and copy." },
        { title: "At least one page per major service", body: "Heavy duty, motorcycle, lockout, jump start, fuel delivery, accident recovery." },
        { title: "Reviews displayed on the homepage", body: "Embedded Google reviews with your live star rating, not screenshots." },
        { title: "SSL certificate (padlock in browser)", body: "Without it, Chrome shows a \"Not Secure\" warning that kills conversion." },
        { title: "Sticky bottom call bar on mobile", body: "A persistent bar with phone + \"Call Now\" that follows the user as they scroll." },
        { title: "Contact form that emails you immediately", body: "Test it. Submit a fake lead. Did you get the email in under 60 seconds?" },
        { title: "Schema markup for local business", body: "Helps Google show your phone, hours, and rating directly in search results." },
      ];
      return (
        <>
          <p className="text-lg text-slate-700 leading-relaxed">
            Open your website on your phone. Score yourself out of 12. Anything under 10 is costing you calls
            every single day.
          </p>
          <div className="mt-8 space-y-3">
            {items.map((item, i) => (
              <label key={i} className="flex gap-4 p-4 border border-slate-200 rounded-lg bg-white hover:border-primary/50 transition-colors cursor-pointer">
                <input type="checkbox" className="mt-1 w-5 h-5 accent-blue-700 cursor-pointer" />
                <div>
                  <div className="font-semibold text-slate-900">{i + 1}. {item.title}</div>
                  <div className="text-sm text-slate-600 mt-0.5">{item.body}</div>
                </div>
              </label>
            ))}
          </div>
          <Callout>
            <strong>Score 10–12:</strong> You're in the top 10% of towing websites. Keep stacking reviews.<br />
            <strong>Score 7–9:</strong> Solid foundation, but specific fixes will move you up the local pack fast.<br />
            <strong>Score 0–6:</strong> Your website is actively losing you money. Time for a serious overhaul.
          </Callout>
        </>
      );
    },
  },
  {
    slug: "towing-industry-marketing-trends-2026",
    title: "Towing Industry Marketing Trends to Watch in 2026",
    excerpt: "What's shifting in tow truck marketing this year — from AI-assisted dispatch to the slow death of motor club dependence.",
    category: "Industry",
    format: "Industry Report",
    readTime: 7,
    date: "March 13, 2026",
    keyword: "towing industry trends 2026",
    author: "TowSite Team",
    content: () => (
      <>
        <p className="text-lg text-slate-700 leading-relaxed">
          The towing industry is in the middle of a quiet transformation. Owners who pay attention to where
          things are heading will run circles around the operators still doing things the 2018 way. Here are
          the five trends we're watching closely in 2026.
        </p>

        <Section title="Trend 1: Cash calls are pulling further ahead of motor club work">
          <div className="flex items-start gap-3 my-4">
            <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <p>
                Motor club rates have grown roughly 2% per year since 2020. Cash call rates have grown 8–11%
                annually. The gap is now wide enough that some 4-truck operations are deliberately turning down
                motor club volume to keep capacity for higher-margin direct calls.
              </p>
              <Badge variant="outline" className="mt-2 border-primary/30 text-primary">Margin per hour: roughly 3.2× higher on cash</Badge>
            </div>
          </div>
        </Section>

        <Section title="Trend 2: Google's local pack now favors review velocity over total count">
          <div className="flex items-start gap-3 my-4">
            <Star className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
            <div>
              <p>
                A company with 60 reviews and 5 new ones this month is now beating a company with 200 reviews
                and zero in the last six months. Recency matters more than ever — which means review collection
                has to be a continuous process, not a one-time push.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Trend 3: Mobile site speed is now the #1 ranking signal">
          <p>
            Google's Core Web Vitals update fully rolled out in late 2025. Sites that load slower than 2.5
            seconds on mobile are being deprioritized in local search — even if everything else is dialed in.
            If you haven't tested your site speed in the last six months, that's the single most important
            audit you can do this week.
          </p>
        </Section>

        <Section title="Trend 4: AI-assisted dispatch is bottom-up, not top-down">
          <p>
            The big motor clubs have been talking about AI dispatch for years. The actual adoption is happening
            at the owner-operator level — small companies using AI tools to answer after-hours calls, qualify
            leads, and send automated review requests. Expect the gap between "tech-forward" and "old school"
            shops to widen significantly this year.
          </p>
        </Section>

        <Section title="Trend 5: Local Service Ads are eating Google Ads spend">
          <p>
            Google Local Service Ads — the ones at the very top of search with the green "Google Guaranteed"
            badge — are now where the smart spend is going. They're cheaper per call than traditional Google
            Ads and convert better because they're tied to real reviews.
          </p>
        </Section>

        <Callout>
          <strong>Bottom line for 2026:</strong> The companies winning this year are the ones who treat
          marketing like a system, not a one-time expense. Pick one trend, install it as a habit, and stack
          from there.
        </Callout>
      </>
    ),
  },
];

export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
