import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from "lucide-react";
import NotFound from "@/pages/not-found";
import { blogPosts, getPostBySlug } from "@/data/blogPosts";

const categoryColors: Record<string, string> = {
  Marketing: "bg-blue-100 text-blue-800",
  SEO: "bg-emerald-100 text-emerald-800",
  "Case Study": "bg-amber-100 text-amber-800",
  Operations: "bg-slate-100 text-slate-800",
  Industry: "bg-purple-100 text-purple-800",
  Guide: "bg-rose-100 text-rose-800",
};

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = params?.slug ? getPostBySlug(params.slug) : undefined;

  if (!post) return <NotFound />;

  const Content = post.content;
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

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
            <Link href="/blog" className="text-slate-600 hover:text-primary">Blog</Link>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white" size="sm">
              <Link href="/#contact">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="py-12 md:py-20 bg-transparent">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <Link href="/blog" className="text-primary text-sm font-semibold inline-flex items-center gap-1 hover:underline mb-6" data-testid="link-back-to-blog">
            <ArrowLeft className="w-4 h-4" /> Back to all posts
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Badge className={categoryColors[post.category]}>{post.category}</Badge>
              <Badge variant="outline" className="border-slate-300 text-slate-600">{post.format}</Badge>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6 leading-tight">{post.title}</h1>

            <div className="flex items-center gap-5 text-sm text-slate-500 mb-10 pb-8 border-b border-slate-200 flex-wrap">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime} min read</span>
            </div>

            <div className="prose prose-slate max-w-none prose-headings:font-heading prose-a:text-primary">
              <Content />
            </div>
          </motion.div>

          {/* CTA */}
          <Card className="mt-16 bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white border-0 overflow-hidden">
            <CardContent className="p-8 md:p-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3">Want a website that does all of this for you?</h3>
              <p className="text-white/90 mb-6 max-w-xl mx-auto">
                We build done-for-you towing websites in 7 days, with everything in this article baked in.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold h-12 px-8">
                <Link href="/#contact">Get Your Free Mockup <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </article>

      {/* Related */}
      <section className="py-16 bg-transparent border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-2xl font-bold font-heading text-slate-900 mb-8">Keep reading</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} data-testid={`link-related-${p.slug}`}>
                <Card className="bg-white border border-slate-200 h-full hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
                  <CardHeader>
                    <Badge className={`${categoryColors[p.category]} w-fit mb-2`}>{p.category}</Badge>
                    <h3 className="font-bold font-heading text-slate-900 leading-snug">{p.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 line-clamp-2">{p.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
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
