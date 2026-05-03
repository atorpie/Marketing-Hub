import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import TemplateSandboxPreview from "@/components/TemplateSandboxPreview";
import { CheckCircle2, ChevronRight, Menu, PhoneOff, MonitorX, TrendingDown, Clock, ShieldCheck, Search, Star, MapPin } from "lucide-react";

export default function Landing() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <div className="min-h-[100dvh] bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
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
              Professional Towing Websites. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400">Built Fast.</span> Designed to Convert.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Get a custom, high-converting website for your towing business in days, not months. No coding. No long contracts. Start dominating local search today.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(29,78,216,0.25)] hover:shadow-[0_0_40px_rgba(29,78,216,0.4)] transition-all rounded-md" onClick={() => scrollTo("contact")} data-testid="button-hero-primary">
                Get Your Free Mockup <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold border-slate-300 hover:bg-slate-100 text-slate-900 rounded-md" onClick={() => scrollTo("templates")} data-testid="button-hero-secondary">
                See Templates
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
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
              <Card className="bg-card border-none shadow-lg h-full">
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
              <Card className="bg-card border-none shadow-lg h-full">
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
              <Card className="bg-card border-none shadow-lg h-full">
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
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-heading text-slate-900 leading-tight">
                TowSite: Done-For-You Towing Websites
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-slate-600">
                Stop stressing over tech. We build, host, and maintain a high-performance website for your towing business. Delivered in just 7 days, optimized to make your phone ring.
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
                    <p className="text-slate-600 text-sm">Blazing fast load times and optimized for local "towing near me" searches.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-semibold mb-1">Recurring Revenue Model ($49-$99/month)</h4>
                    <p className="text-slate-600 text-sm">No huge upfront costs. We handle the hosting, security, and updates.</p>
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
      <section id="templates" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Choose Your Template</h2>
            <p className="text-lg text-slate-600">Every template is optimized for conversion, fully responsive, and customized with your branding, photos, and services.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Emergency Hero", desc: "Dark, bold, and urgent. Focuses entirely on emergency dispatch and immediate action.", colors: "from-red-600 to-rose-700" },
              { name: "Local Authority", desc: "Clean and established. Perfect for building trust in your community as the go-to tow service.", colors: "from-blue-600 to-blue-900" },
              { name: "Fleet Specialist", desc: "Corporate and professional. Ideal for companies with large fleets handling commercial accounts.", colors: "from-slate-700 to-slate-900" },
              { name: "Modern Minimalist", desc: "Premium and sleek. Removes all clutter to get customers to call you as fast as possible.", colors: "from-zinc-700 to-zinc-900" },
              { name: "Service Multiplier", desc: "Service-focused design. Best if you offer towing, recovery, lockouts, and roadside assistance.", colors: "from-amber-500 to-orange-700" }
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
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full text-card-foreground border-card-border hover:bg-card-border/50" data-testid={`button-view-template-${i}`}>
                          View Template
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-background text-foreground border-slate-200 max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-slate-900">{tpl.name} Preview</DialogTitle>
                          <DialogDescription className="text-slate-600">
                            This is a wireframe preview. All templates are customized with your actual brand colors, logo, and copy.
                          </DialogDescription>
                        </DialogHeader>
                        <TemplateSandboxPreview template={tpl.name} />
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Your Path to a Professional Website</h2>
            <p className="text-lg text-slate-600">We do the heavy lifting so you can focus on running your business.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-300 -z-10"></div>
            
            {[
              { step: "01", title: "Book a Demo", desc: "Quick 15-minute call to learn about your business and needs.", icon: PhoneOff },
              { step: "02", title: "Choose a Template", desc: "Select the design that best fits your brand identity.", icon: MonitorX },
              { step: "03", title: "We Customize", desc: "We add your colors, logo, photos, and write SEO copy.", icon: ShieldCheck },
              { step: "04", title: "Go Live in 7 Days", desc: "We launch your site and set up tracking to measure calls.", icon: CheckCircle2 }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-24 h-24 rounded-full bg-white border-4 border-primary flex items-center justify-center text-3xl font-bold font-heading text-primary mb-6 shadow-[0_0_20px_rgba(29,78,216,0.2)]">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm max-w-[200px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-600">No massive upfront builds. Just a simple monthly fee that covers everything. All plans include 24/7 uptime, SSL security, and Google SEO optimization.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {/* Starter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-card border-none shadow-lg text-card-foreground">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-heading text-card-foreground/70">Starter</CardTitle>
                  <div className="text-4xl font-bold mt-2">$49<span className="text-xl text-card-foreground/50 font-normal">/mo</span></div>
                  <CardDescription className="text-card-foreground/60 mt-2">Perfect for single-truck operators.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {["1 Page Website", "Choice of 2 Templates", "Mobile Optimized", "Basic SEO", "Click-to-Call Buttons"].map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-card-border text-card-foreground" onClick={() => scrollTo("contact")} data-testid="button-pricing-starter">
                    Choose Starter
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Professional */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-slate-50 border border-primary relative shadow-[0_0_30px_rgba(29,78,216,0.15)] transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-heading text-slate-900">Professional</CardTitle>
                  <div className="text-4xl font-bold mt-2 text-slate-900">$79<span className="text-xl text-slate-500 font-normal">/mo</span></div>
                  <CardDescription className="text-slate-600 mt-2">For growing towing fleets.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-700">
                    {["5 Page Website", "All Templates", "Advanced Local SEO", "Lead Capture Forms", "Google Business Profile Sync", "Monthly Reporting"].map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={() => scrollTo("contact")} data-testid="button-pricing-pro">
                    Choose Professional
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Premium */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-card border-none shadow-lg text-card-foreground">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-heading text-card-foreground/70">Premium</CardTitle>
                  <div className="text-4xl font-bold mt-2">$99<span className="text-xl text-card-foreground/50 font-normal">/mo</span></div>
                  <CardDescription className="text-card-foreground/60 mt-2">For established regional players.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {["Unlimited Pages", "Custom Branding Focus", "Multi-Location SEO", "Dispatch Integration Setup", "Priority 24/7 Support", "Quarterly Strategy Call"].map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-card-border text-card-foreground" onClick={() => scrollTo("contact")} data-testid="button-pricing-premium">
                    Choose Premium
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
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
      <section id="faq" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Frequently Asked Questions</h2>
          </motion.div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "Do you offer custom designs?", a: "While we use high-converting templates as a foundation, every site is heavily customized with your branding, colors, photos, and specific service offerings. It will look entirely unique to your business." },
              { q: "Can I cancel anytime?", a: "Yes. We don't believe in holding businesses hostage. Our service is month-to-month and you can cancel anytime with 30 days notice." },
              { q: "What if I need changes?", a: "Just email us! Minor text and image updates are included in your monthly fee. We typically handle updates within 24-48 hours." },
              { q: "Do you handle SEO?", a: "Yes. All our sites are built with on-page SEO best practices (schema markup, fast load times, optimized headings). The Professional and Premium plans include advanced local SEO strategies." },
              { q: "Is there a setup fee?", a: "No! We waive all setup and design fees. You just pay the flat monthly rate starting the day your site goes live." },
              { q: "Can you integrate with my dispatch software?", a: "Yes, we can add tracking numbers, embed web booking widgets, and connect to most modern dispatch and CRM software (available on Premium plan)." }
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
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
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
            Join 50+ towing companies already using TowSite to generate more calls and dominate their local market.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 text-white rounded-md" asChild data-testid="button-final-cta">
              <a href="mailto:hello@towsite.com">Email hello@towsite.com</a>
            </Button>
            <p className="text-slate-500 text-sm mt-4 sm:mt-0 sm:ml-4">No credit card required. Takes 5 minutes.</p>
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
