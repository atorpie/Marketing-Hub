import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useSubmitContact } from "@workspace/api-client-react";
import { SubmitContactBody } from "@workspace/api-zod";
import { CheckCircle2, ChevronRight, Menu, PhoneOff, MonitorX, TrendingDown, Clock, ShieldCheck, Search, Star, MapPin, Loader2, Mail, Truck, PhoneCall, Wrench, LayoutGrid, Zap, Radio, Phone } from "lucide-react";

type ContactFormValues = z.infer<typeof SubmitContactBody>;

export default function Landing() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(SubmitContactBody),
    defaultValues: { name: "", email: "", company: "", phone: "", message: "" },
  });
  const submitContact = useSubmitContact({
    mutation: {
      onSuccess: () => {
        setSubmitted(true);
        form.reset();
        toast({ title: "Message sent!", description: "We'll get back to you within one business day." });
      },
      onError: (err: unknown) => {
        const message = err instanceof Error ? err.message : "Please try again in a moment.";
        toast({ title: "Couldn't send message", description: message, variant: "destructive" });
      },
    },
  });
  const onSubmitContact = form.handleSubmit((values) => {
    submitContact.mutate({ data: values });
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-[100dvh] text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md border-b border-slate-200 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center font-bold text-white font-heading text-xl">T</div>
            <span className="font-heading font-bold text-xl tracking-tight text-slate-900">TowSite</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo("features")} className="text-sm font-medium text-slate-700 hover:text-primary transition-colors" data-testid="link-features">Features</button>
            <button onClick={() => scrollTo("templates")} className="text-sm font-medium text-slate-700 hover:text-primary transition-colors" data-testid="link-templates">Templates</button>
            <button onClick={() => scrollTo("pricing")} className="text-sm font-medium text-slate-700 hover:text-primary transition-colors" data-testid="link-pricing">Pricing</button>
            <button onClick={() => scrollTo("faq")} className="text-sm font-medium text-slate-700 hover:text-primary transition-colors" data-testid="link-faq">FAQ</button>
            <Link href="/blog" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors" data-testid="link-blog">Blog</Link>
            <Button onClick={() => scrollTo("contact")} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-md shadow-[0_0_20px_rgba(29,78,216,0.25)] hover:shadow-[0_0_25px_rgba(29,78,216,0.4)] transition-all" data-testid="button-nav-cta">
              Get Started
            </Button>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden text-slate-900 hover:bg-slate-100" data-testid="button-mobile-menu">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center text-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-white to-white -z-10"></div>
        {/* Decorative blurred orbs */}
        <div className="absolute top-32 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: "6s" }}></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/15 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: "8s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-blue-300/30 rounded-full blur-2xl -z-10"></div>
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 -z-10 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(circle, #1d4ed8 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Accepting new clients for this month
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold font-heading text-slate-900 leading-[1.1] tracking-tight">
              Done-For-You Websites <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400">for Towing Companies</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We build, host, and manage your towing website so you can get found online and turn visitors into phone calls. No setup fee. Domain included if needed. Built fast and optimized for mobile.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(29,78,216,0.25)] hover:shadow-[0_0_40px_rgba(29,78,216,0.4)] transition-all rounded-md" onClick={() => scrollTo("contact")} data-testid="button-hero-primary">
                Get Started Now <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold border-slate-300 hover:bg-slate-100 text-slate-900 rounded-md" onClick={() => scrollTo("templates")} data-testid="button-hero-secondary">
                See Templates
              </Button>
            </motion.div>

            {/* Trust row */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 pt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["#1d4ed8", "#f59e0b", "#0f172a", "#475569"].map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" style={{ background: c }}></div>
                  ))}
                </div>
                <span className="text-slate-700 font-medium">50+ towing companies</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-slate-300"></div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-secondary text-secondary" />)}
                </div>
                <span className="text-slate-700 font-medium">4.9/5 average rating</span>
              </div>
            </motion.div>

            {/* Interactive phone mockup — live dispatch preview */}
            <motion.div variants={fadeInUp} className="relative mx-auto mt-12 w-full max-w-md">
              {/* Floating dispatch chips */}
              <motion.div
                initial={{ opacity: 0, y: -10, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -left-4 sm:-left-16 top-8 z-20 bg-white shadow-xl rounded-xl border border-slate-200 px-3 py-2.5 items-center gap-2.5 w-56 hidden sm:flex"
                data-testid="hero-chip-call"
              >
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <PhoneCall className="w-4 h-4 text-red-600" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900">Incoming call</div>
                  <div className="text-[11px] text-slate-500">I-95 · mile 142 · 0:08 ago</div>
                </div>
                <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse ml-auto"></span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="absolute -right-4 sm:-right-16 top-32 z-20 bg-white shadow-xl rounded-xl border border-slate-200 px-3 py-2.5 items-center gap-2.5 w-52 hidden sm:flex"
                data-testid="hero-chip-truck"
              >
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-4 h-4 text-amber-600" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900">Truck dispatched</div>
                  <div className="text-[11px] text-slate-500">ETA 8 min · Unit 03</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -left-4 sm:-left-12 bottom-12 z-20 bg-white shadow-xl rounded-xl border border-slate-200 px-3 py-2.5 items-center gap-2.5 w-52 hidden sm:flex"
                data-testid="hero-chip-review"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900">New 5-star review</div>
                  <div className="text-[11px] text-slate-500">"Fast and professional"</div>
                </div>
              </motion.div>

              {/* Phone frame */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: -3 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                className="relative mx-auto w-[260px] sm:w-[280px] bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl shadow-primary/20"
              >
                {/* Screen */}
                <div className="rounded-[2rem] bg-white overflow-hidden h-[540px] flex flex-col relative">
                  {/* Phone notch (inside screen, doesn't cover content) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-b-2xl z-30"></div>
                  {/* Emergency banner */}
                  <div className="bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider py-2 text-center flex items-center justify-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    24/7 Emergency Towing
                  </div>
                  {/* Mini nav */}
                  <div className="px-4 pt-4 pb-2 flex items-center justify-between border-b border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-white text-[10px] font-bold">A</div>
                      <span className="text-[11px] font-bold text-slate-900">Acme Towing</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[1,2,3,4,5].map(s => <Star key={s} className="h-2 w-2 fill-secondary text-secondary" />)}
                      <span className="text-[9px] text-slate-500 ml-1">4.9</span>
                    </div>
                  </div>
                  {/* Hero */}
                  <div className="px-4 pt-4 flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Stranded?</div>
                    <div className="text-lg font-heading font-bold text-slate-900 leading-tight mb-2">We'll be there in <span className="text-primary">15 min</span> or less.</div>
                    <div className="text-[10px] text-slate-500 mb-4">Serving Springfield + 30-mile radius</div>

                    {/* Pulsing call button */}
                    <div className="relative">
                      <span className="absolute inset-0 rounded-xl bg-red-500/50 animate-ping"></span>
                      <div className="relative w-full bg-red-600 text-white rounded-xl py-3 px-4 flex items-center justify-center gap-2 shadow-lg shadow-red-500/40">
                        <Phone className="w-4 h-4 fill-white" />
                        <span className="font-bold text-sm">Call (555) 911-TOWS</span>
                      </div>
                    </div>

                    {/* Mini services grid */}
                    <div className="grid grid-cols-3 gap-1.5 mt-4">
                      {[
                        { icon: Truck, label: "Towing" },
                        { icon: Wrench, label: "Lockout" },
                        { icon: Zap, label: "Jump" },
                      ].map(({ icon: Icon, label }) => (
                        <div key={label} className="bg-slate-50 rounded-md py-2 flex flex-col items-center gap-1">
                          <Icon className="w-3.5 h-3.5 text-primary" />
                          <span className="text-[9px] font-semibold text-slate-700">{label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Trust strip */}
                    <div className="mt-4 flex items-center gap-1.5 text-[9px] text-slate-500">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>Licensed · Insured · GPS-tracked fleet</span>
                    </div>
                  </div>
                  {/* Bottom sticky call bar */}
                  <div className="border-t border-slate-100 px-4 py-2.5 bg-white flex items-center justify-between">
                    <div>
                      <div className="text-[9px] text-slate-500">Tap to call</div>
                      <div className="text-[11px] font-bold text-slate-900">(555) 911-TOWS</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-md">
                      <Phone className="w-3.5 h-3.5 text-white fill-white" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Subtle ambient glow under phone */}
              <div className="absolute inset-x-0 -bottom-8 h-16 bg-primary/20 blur-3xl rounded-full -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </section>

      {/* Stats Band */}
      <section className="relative py-12 md:py-16 bg-gradient-to-r from-primary via-blue-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "50+", label: "Towing Companies" },
              { num: "7", label: "Day Turnaround" },
              { num: "+340%", label: "Avg. Call Volume Lift" },
              { num: "24/7", label: "Hosting & Support" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold font-heading text-white mb-2 tracking-tight">{stat.num}</div>
                <div className="text-sm md:text-base text-blue-100 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #0f172a 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-destructive bg-destructive/10 px-3 py-1.5 rounded-full mb-4">The Problem</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Most Towing Companies Have Terrible Websites</h2>
            <p className="text-lg text-slate-600">And it's costing you high-paying jobs every single day. When a driver is stranded on the side of the road, they don't have time to navigate a broken site.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-card border-none shadow-lg h-full relative overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-destructive to-rose-400"></div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                    <MonitorX className="h-6 w-6 text-destructive" />
                  </div>
                  <CardTitle className="text-xl font-heading text-card-foreground">No Mobile Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground/70">80% of towing searches happen on a phone. If your site is hard to read or doesn't have a tap-to-call button, they will leave and call your competitor instantly.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-card border-none shadow-lg h-full relative overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-destructive to-rose-400"></div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                    <PhoneOff className="h-6 w-6 text-destructive" />
                  </div>
                  <CardTitle className="text-xl font-heading text-card-foreground">Outdated Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground/70">A site that looks like it was built in 2005 destroys trust. If you don't look professional online, customers assume you aren't professional on the road.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-card border-none shadow-lg h-full relative overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-destructive to-rose-400"></div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                    <TrendingDown className="h-6 w-6 text-destructive" />
                  </div>
                  <CardTitle className="text-xl font-heading text-card-foreground">No Lead Capture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground/70">Getting traffic means nothing if it doesn't convert into calls. Most sites are digital brochures instead of 24/7 lead-generating machines.</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Solution Section */}
      <section id="features" className="py-24 bg-slate-50 relative border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="md:w-1/2 space-y-6"
            >
              <motion.span variants={fadeInUp} className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1.5 rounded-full">The Solution</motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-heading text-slate-900 leading-tight">
                TowSite: Done-For-You Towing Websites
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-slate-600">
                We handle your website so you can focus on towing calls. Built fast, kept up to date, and designed to get your phone ringing — not to impress other web designers.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-semibold mb-1">5 Professional Templates</h4>
                    <p className="text-slate-600 text-sm">Tested and proven to convert stranded drivers into callers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-semibold mb-1">Mobile-First & SEO-Ready</h4>
                    <p className="text-slate-600 text-sm">Fast load times, tap-to-call buttons, and optimized for "towing near me" searches.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-semibold mb-1">Affordable Monthly Plans</h4>
                    <p className="text-slate-600 text-sm">No huge upfront costs. We build, host, and maintain your towing website for one simple monthly price.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 relative"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-2xl relative bg-white flex items-center justify-center">
                 {/* Abstract UI representation */}
                 <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-100 p-6 flex flex-col">
                    <div className="h-10 w-full flex items-center justify-between border-b border-slate-200 pb-4">
                      <div className="w-24 h-6 bg-slate-200 rounded"></div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded bg-slate-100"></div>
                        <div className="w-8 h-8 rounded bg-primary/80"></div>
                      </div>
                    </div>
                    <div className="flex-1 mt-6 flex flex-col gap-4">
                      <div className="w-3/4 h-12 bg-slate-200 rounded"></div>
                      <div className="w-1/2 h-6 bg-slate-100 rounded"></div>
                      <div className="w-40 h-10 bg-primary rounded mt-4"></div>
                    </div>
                 </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-xl border border-card-border flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-green-600 rotate-180" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">Call Volume</p>
                  <p className="text-2xl font-bold text-green-600">+340%</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">Templates</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Choose Your Template</h2>
            <p className="text-lg text-slate-600">Every template is optimized for conversion, fully responsive, and customized with your branding, photos, and services.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Emergency", desc: "Bold and urgent. Built for companies that run 24/7 emergency towing and need calls fast.", colors: "from-red-600 to-rose-700", subdomain: "emergency" },
              { name: "Local", desc: "Clean and trustworthy. Perfect for building your reputation as the go-to towing company in your area.", colors: "from-blue-600 to-blue-900", subdomain: "local" },
              { name: "Fleet", desc: "Professional and structured. Great for companies with multiple trucks handling commercial accounts.", colors: "from-slate-700 to-slate-900", subdomain: "fleet" },
              { name: "Modern", desc: "Simple and fast. No clutter — just your number, your services, and a clear reason to call.", colors: "from-zinc-700 to-zinc-900", subdomain: "modern" },
              { name: "Service", desc: "Service-focused. Best when you offer towing, lockouts, fuel delivery, and roadside assistance.", colors: "from-amber-500 to-orange-700", subdomain: "service" }
            ].map((tpl, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="bg-card border-none shadow-lg overflow-hidden group h-full flex flex-col">
                  <div className={`h-40 w-full bg-gradient-to-br ${tpl.colors} relative flex items-center justify-center p-6 border-b border-card-border`}>
                    <div className="w-full h-full border-2 border-slate-200 rounded-md bg-background/50 backdrop-blur-sm p-4 flex flex-col gap-2 relative overflow-hidden">
                       <div className="w-1/3 h-3 bg-white/20 rounded"></div>
                       <div className="w-2/3 h-6 bg-white/40 rounded mt-2"></div>
                       <div className="w-1/4 h-8 bg-primary rounded mt-auto"></div>
                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                         <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">Preview</span>
                       </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-card-foreground">{tpl.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-card-foreground/70 text-sm">{tpl.desc}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full text-card-foreground border-card-border hover:bg-card-border/50"
                      data-testid={`button-view-template-${i}`}
                    >
                      <a
                        href={`https://${tpl.subdomain}.towsite.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Template <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — Dispatch Journey */}
      <section className="py-24 bg-slate-100 relative overflow-hidden">
        {/* Asphalt-style background */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #0f172a 1px, transparent 1px)", backgroundSize: "16px 16px" }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary bg-secondary/10 px-3 py-1.5 rounded-full mb-4">
              <Radio className="w-3.5 h-3.5 inline -mt-0.5 mr-1" />
              The Dispatch Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">From <span className="text-primary">Intake</span> to <span className="text-primary">Phone Ringing</span> in 7 Days</h2>
            <p className="text-lg text-slate-600">We handle the buildout. You stay on the road running calls.</p>
          </motion.div>

          {/* The road */}
          <div className="relative max-w-6xl mx-auto">
            {/* Animated dashed road line */}
            <div className="hidden md:block absolute top-12 left-[8%] right-[8%] h-1 bg-slate-300 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
                className="h-full bg-gradient-to-r from-primary via-secondary to-primary"
                style={{ backgroundSize: "20px 100%", backgroundImage: "repeating-linear-gradient(90deg, #1d4ed8 0 10px, transparent 10px 20px)" }}
              />
            </div>
            {/* Truck animation along the road */}
            <motion.div
              initial={{ left: "0%", opacity: 0 }}
              whileInView={{ left: "calc(100% - 56px)", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.2, ease: "easeOut", delay: 0.5 }}
              className="hidden md:flex absolute -top-2 w-14 h-14 rounded-full bg-secondary items-center justify-center shadow-xl shadow-secondary/40 z-10"
            >
              <Truck className="w-7 h-7 text-slate-900" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 relative">
              {[
                { step: "01", title: "Tell Us About Your Operation", desc: "Quick 15-min call. Service area, services, and what makes your shop different.", icon: Radio, color: "from-blue-500 to-primary" },
                { step: "02", title: "Pick Your Template", desc: "Emergency, Local, Fleet, Modern, or Service — whichever fits your brand.", icon: LayoutGrid, color: "from-amber-500 to-orange-500" },
                { step: "03", title: "We Build & Customize", desc: "Your colors, your trucks, your service area. SEO baked in from day one.", icon: Wrench, color: "from-slate-700 to-slate-900" },
                { step: "04", title: "Go Live in 7 Days", desc: "Site is live, tracking wired up, GBP connected. Your phone starts ringing.", icon: PhoneCall, color: "from-emerald-500 to-emerald-700" }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                    className="flex flex-col items-center text-center group cursor-default"
                  >
                    {/* Numbered milestone */}
                    <div className="relative mb-6">
                      <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300`}>
                        <Icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center text-xs font-bold font-heading text-slate-900 shadow-md">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm max-w-[220px] leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Result strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="mt-16 bg-slate-900 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white fill-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">Day 7 onward</div>
                  <div className="text-white font-semibold">Your phone rings. We keep your site running.</div>
                </div>
              </div>
              <Button onClick={() => scrollTo("contact")} className="bg-secondary hover:bg-secondary/90 text-slate-900 font-semibold w-full sm:w-auto" data-testid="button-howitworks-cta">
                Start the Build <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">Pricing</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-600">No setup fee. No surprise charges. Just one flat monthly price that covers your website, hosting, and ongoing support.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {/* Starter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-card border-none shadow-lg text-card-foreground h-full flex flex-col">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-heading text-card-foreground/70">Starter</CardTitle>
                  <div className="text-4xl font-bold mt-2">$49<span className="text-xl text-card-foreground/50 font-normal">/mo</span></div>
                  <CardDescription className="text-card-foreground/60 mt-2">For towing companies that need a simple website online fast.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {[
                      "1-page towing website",
                      "Choice of any template",
                      "Mobile optimized",
                      "Click-to-call buttons",
                      "Google Business Profile connection",
                      "Basic contact form",
                      "Review / testimonial section",
                      "Basic on-page SEO",
                      "Hosting + SSL included",
                      "Domain included if needed",
                      "Basic launch edits",
                    ].map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-card-border text-card-foreground" onClick={() => scrollTo("contact")} data-testid="button-pricing-starter">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Pro */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-slate-50 border border-primary relative shadow-[0_0_30px_rgba(29,78,216,0.15)] transform md:-translate-y-4 h-full flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-heading text-slate-900">Pro</CardTitle>
                  <div className="text-4xl font-bold mt-2 text-slate-900">$79<span className="text-xl text-slate-500 font-normal">/mo</span></div>
                  <CardDescription className="text-slate-600 mt-2">Best for towing companies that want stronger local visibility without extra work.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 text-slate-700">
                    {[
                      "Everything in Starter",
                      "Up to 3 pages",
                      "Google Business Profile optimization",
                      "Active review management",
                      "Service area SEO section",
                      "Monthly performance snapshot",
                    ].map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={() => scrollTo("contact")} data-testid="button-pricing-pro">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Growth */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-card border-none shadow-lg text-card-foreground h-full flex flex-col">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-heading text-card-foreground/70">Growth</CardTitle>
                  <div className="text-4xl font-bold mt-2">$129<span className="text-xl text-card-foreground/50 font-normal">/mo</span></div>
                  <CardDescription className="text-card-foreground/60 mt-2">For towing companies that want ongoing local SEO support.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {[
                      "Everything in Pro",
                      "Up to 5 pages",
                      "1 Google Business Profile post/mo",
                      "1 blog or service-area post/mo",
                      "Monthly website updates",
                      "Advanced local SEO structure",
                      "Priority support",
                      "Quarterly growth check-in",
                    ].map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-card-border text-card-foreground" onClick={() => scrollTo("contact")} data-testid="button-pricing-growth">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>

          {/* Domain note */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 max-w-2xl mx-auto text-center text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-lg px-6 py-4"
          >
            <strong className="text-slate-900">Need a domain?</strong> First year is included. Domain renewals are $99/year after year one.{" "}
            <strong className="text-slate-900">Already have a domain?</strong> We'll connect it and give you <span className="text-primary font-semibold">50% off your first month</span>.
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary bg-secondary/10 px-3 py-1.5 rounded-full mb-4">Reviews</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Trusted by Towing Companies Across the Country</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "TowSite built our website in a week. We went from 2 calls a day to 8. Best money I spend every month.", name: "Mike R.", loc: "Austin, TX" },
              { text: "I don't have time to mess with WordPress. TowSite handles everything. My site looks better than companies 10x my size.", name: "Sarah L.", loc: "Denver, CO" },
              { text: "The click-to-call button optimization alone paid for the entire year of service in the first weekend. Highly recommended.", name: "Dave J.", loc: "Orlando, FL" }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="bg-background border border-slate-200 h-full">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-secondary text-secondary" />)}
                    </div>
                    <p className="text-slate-700 italic mb-6">"{t.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-slate-900 font-bold text-sm">{t.name}</p>
                        <p className="text-slate-500 text-xs flex items-center gap-1"><MapPin className="h-3 w-3"/> {t.loc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-transparent">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Frequently Asked Questions</h2>
          </motion.div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "How fast can my website go live?", a: "Most websites are completed within 5–7 business days after we receive your information." },
              { q: "Is there a setup fee?", a: "No. TowSite has no setup fee." },
              { q: "Do I need a domain?", a: "No. We can purchase and set up your domain for you. The first year is included with your plan." },
              { q: "What if I already own a domain?", a: "We'll connect it to your new site and give you 50% off your first month." },
              { q: "Can I cancel?", a: "Yes, but hosting, updates, and management stop when the subscription ends." },
              { q: "Who is this for?", a: "TowSite is built for towing companies that want a professional website without paying thousands upfront." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-slate-200 bg-slate-50 px-6 rounded-lg data-[state=open]:border-primary/50 transition-colors">
                <AccordionTrigger className="text-slate-900 hover:text-primary transition-colors text-left py-4">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-32 relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
        {/* Decorative orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #1d4ed8 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-6"
          >
            Get Started Today
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-heading text-slate-900 mb-6"
          >
            Ready to Get Your Professional Towing Website?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 mb-10"
          >
            Tell us about your towing business and we'll send a free mockup of your new site within 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-white border border-slate-200 shadow-xl text-left">
              <CardContent className="p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-8" data-testid="contact-success">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2">Thanks — we got it!</h3>
                    <p className="text-slate-600 mb-6">We'll reply within one business day with your free mockup.</p>
                    <Button variant="outline" onClick={() => setSubmitted(false)} data-testid="button-send-another">Send another message</Button>
                  </div>
                ) : (
                  <form onSubmit={onSubmitContact} className="space-y-4" data-testid="form-contact" noValidate>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contact-name" className="text-slate-900 font-medium">Name *</Label>
                        <Input
                          id="contact-name"
                          placeholder="Your name"
                          className="mt-1.5 bg-white"
                          autoComplete="name"
                          data-testid="input-name"
                          {...form.register("name")}
                        />
                        {form.formState.errors.name && (
                          <p className="text-destructive text-xs mt-1">{form.formState.errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="contact-email" className="text-slate-900 font-medium">Email *</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          placeholder="you@example.com"
                          className="mt-1.5 bg-white"
                          autoComplete="email"
                          data-testid="input-email"
                          {...form.register("email")}
                        />
                        {form.formState.errors.email && (
                          <p className="text-destructive text-xs mt-1">{form.formState.errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contact-company" className="text-slate-900 font-medium">Company</Label>
                        <Input
                          id="contact-company"
                          placeholder="Towing company name"
                          className="mt-1.5 bg-white"
                          autoComplete="organization"
                          data-testid="input-company"
                          {...form.register("company")}
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-phone" className="text-slate-900 font-medium">Phone</Label>
                        <Input
                          id="contact-phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          className="mt-1.5 bg-white"
                          autoComplete="tel"
                          data-testid="input-phone"
                          {...form.register("phone")}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="contact-message" className="text-slate-900 font-medium">Tell us about your business *</Label>
                      <Textarea
                        id="contact-message"
                        placeholder="What services do you offer? What area do you cover? Any specific goals for your new website?"
                        className="mt-1.5 min-h-32 bg-white"
                        data-testid="input-message"
                        {...form.register("message")}
                      />
                      {form.formState.errors.message && (
                        <p className="text-destructive text-xs mt-1">{form.formState.errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitContact.isPending}
                      className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-white rounded-md shadow-[0_0_25px_rgba(29,78,216,0.25)]"
                      data-testid="button-submit-contact"
                    >
                      {submitContact.isPending ? (
                        <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending…</>
                      ) : (
                        <>Get My Free Mockup <ChevronRight className="w-5 h-5 ml-1" /></>
                      )}
                    </Button>

                    <p className="text-slate-500 text-xs text-center pt-2">
                      Or email us directly at <a href="mailto:hello@towsite.com" className="text-primary hover:underline inline-flex items-center gap-1"><Mail className="w-3 h-3" />hello@towsite.com</a>. No credit card required.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background pt-16 pb-8 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-primary flex items-center justify-center font-bold text-white font-heading text-sm">T</div>
                <span className="font-heading font-bold text-lg tracking-tight text-slate-900">TowSite</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-6">
                Done-for-you websites for towing companies. We build it, host it, and optimize it so you can focus on the road.
              </p>
            </div>
            
            <div>
              <h4 className="text-slate-900 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollTo("features")} className="text-slate-500 hover:text-primary transition-colors text-sm">Features</button></li>
                <li><button onClick={() => scrollTo("templates")} className="text-slate-500 hover:text-primary transition-colors text-sm">Templates</button></li>
                <li><button onClick={() => scrollTo("pricing")} className="text-slate-500 hover:text-primary transition-colors text-sm">Pricing</button></li>
                <li><button onClick={() => scrollTo("faq")} className="text-slate-500 hover:text-primary transition-colors text-sm">FAQ</button></li>
                <li><Link href="/blog" className="text-slate-500 hover:text-primary transition-colors text-sm">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-slate-900 font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="mailto:hello@towsite.com" className="text-slate-500 hover:text-primary transition-colors text-sm">hello@towsite.com</a></li>
                <li><a href="tel:18005550199" className="text-slate-500 hover:text-primary transition-colors text-sm">1-800-555-0199</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} TowSite. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-slate-400 hover:text-slate-900 transition-colors text-sm" data-testid="link-privacy">Privacy Policy</Link>
              <Link href="/terms" className="text-slate-400 hover:text-slate-900 transition-colors text-sm" data-testid="link-terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-background/95 backdrop-blur-md border-t border-slate-200 z-50">
        <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg" onClick={() => scrollTo("contact")}>
          Get Started Now
        </Button>
      </div>
    </div>
  );
}
