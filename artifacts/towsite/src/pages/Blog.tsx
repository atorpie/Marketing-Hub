import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const categoryColors: Record<string, string> = {
  Marketing: "bg-blue-100 text-blue-800",
  SEO: "bg-emerald-100 text-emerald-800",
  "Case Study": "bg-amber-100 text-amber-800",
  Operations: "bg-slate-100 text-slate-800",
  Industry: "bg-purple-100 text-purple-800",
  Guide: "bg-rose-100 text-rose-800",
};

export default function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="min-h-[100dvh] text-foreground font-sans">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home">
            <div className="w-9 h-9 rounded-md bg-primary text-white flex items-center justify-center font-bold font-heading">T</div>
            <span className="text-xl font-bold font-heading text-slate-900">TowSite</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-slate-600 hover:text-primary">Home</Link>
            <Link href="/blog" className="text-primary font-semibold">Blog</Link>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white" size="sm">
              <a href="/#contact">Get Started</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-6">
            <BookOpen className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
            The TowSite Blog
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-slate-900 mb-6">
            Build a Towing Business That <span className="text-primary">Wins Online</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Marketing, SEO, and operations playbooks built specifically for towing company owners. No fluff,
            no theory — just what works.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8 bg-transparent">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href={`/blog/${featured.slug}`} data-testid={`link-featured-${featured.slug}`}>
              <Card className="bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 p-10 md:p-14 text-white flex flex-col justify-center min-h-64">
                    <Badge className="bg-white/20 text-white border-0 w-fit mb-4">Featured · {featured.format}</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 leading-tight">{featured.title}</h2>
                    <p className="text-white/90 text-lg">{featured.excerpt}</p>
                  </div>
                  <CardContent className="p-10 md:p-14 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                      <Badge className={categoryColors[featured.category]}>{featured.category}</Badge>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featured.readTime} min read</span>
                      <span>·</span>
                      <span>{featured.date}</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-6">
                      The complete playbook for owning local search, building a website that converts, and
                      stacking the marketing systems that actually fill your dispatch board.
                    </p>
                    <div className="text-primary font-semibold inline-flex items-center gap-2">
                      Read the guide <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mb-8">More from the blog</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`} data-testid={`link-post-${post.slug}`}>
                  <Card className="bg-white border border-slate-200 h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={categoryColors[post.category]}>{post.category}</Badge>
                        <Badge variant="outline" className="border-slate-300 text-slate-600 text-xs">{post.format}</Badge>
                      </div>
                      <h3 className="text-lg font-bold font-heading text-slate-900 leading-snug">{post.title}</h3>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-slate-600 text-sm leading-relaxed">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="text-xs text-slate-500 flex items-center gap-3">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime} min read
                      <span>·</span>
                      <span>{post.date}</span>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">Ready to put this into practice?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Get a professional towing website built around everything in this blog — launched in 7 days.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg font-semibold">
            <a href="/#contact">Get Your Free Mockup</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background pt-12 pb-8 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} TowSite. All rights reserved. · <Link href="/privacy" className="hover:text-primary">Privacy</Link> · <Link href="/terms" className="hover:text-primary">Terms</Link></p>
        </div>
      </footer>
    </div>
  );
}
