import type { ReactNode } from "react";

type Props = { template: string };

function normalize(t: string) {
  const v = (t || "").toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
  if (v.includes("emergency")) return "emergency";
  if (v.includes("local") || v.includes("authority")) return "local";
  if (v.includes("fleet")) return "fleet";
  if (v.includes("minimal") || v.includes("modern")) return "minimalist";
  if (v.includes("service") || v.includes("multiplier")) return "service";
  return "fallback";
}

function SkeletonBar({ className = "" }: { className?: string }) {
  return <div className={`bg-slate-300 rounded ${className}`} />;
}

function SkeletonButton({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return <div className={`${dark ? "bg-slate-700" : "bg-slate-400"} rounded ${className}`} />;
}

function SkeletonCard({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <div className={`bg-white border border-slate-200 rounded-md p-2 flex flex-col gap-1.5 ${className}`}>
      {children}
    </div>
  );
}

function SkeletonImage({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-slate-200 rounded border border-slate-300 flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-slate-400" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    </div>
  );
}

function SectionBlock({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return <div className={`p-3 ${className}`}>{children}</div>;
}

function Header({ navLinks = 0, dark = false }: { navLinks?: number; dark?: boolean }) {
  return (
    <div className={`flex items-center justify-between p-2.5 border-b border-slate-200 ${dark ? "bg-slate-800" : "bg-white"}`}>
      <div className={`w-12 h-3.5 rounded ${dark ? "bg-slate-500" : "bg-slate-300"}`} />
      {navLinks > 0 && (
        <div className="hidden sm:flex gap-2">
          {Array.from({ length: navLinks }).map((_, i) => (
            <div key={i} className={`w-8 h-2 rounded ${dark ? "bg-slate-500" : "bg-slate-300"}`} />
          ))}
        </div>
      )}
      <div className="flex items-center gap-1.5">
        <div className={`w-10 h-2.5 rounded ${dark ? "bg-slate-500" : "bg-slate-300"}`} />
        <div className={`w-12 h-5 rounded ${dark ? "bg-slate-500" : "bg-slate-700"}`} />
      </div>
    </div>
  );
}

function FinalCTA() {
  return (
    <div className="p-3 bg-slate-100 border-t border-slate-200 text-center flex flex-col items-center gap-1.5">
      <SkeletonBar className="h-3 w-2/3" />
      <SkeletonBar className="h-2 w-1/2" />
      <SkeletonButton className="h-5 w-20 mt-1" dark />
    </div>
  );
}

function Reviews({ count = 3 }: { count?: number }) {
  return (
    <SectionBlock className="bg-white">
      <div className="grid grid-cols-3 gap-1.5">
        {Array.from({ length: count }).map((_, i) => (
          <SkeletonCard key={i}>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, j) => (
                <div key={j} className="w-1.5 h-1.5 bg-slate-400 rounded-sm" />
              ))}
            </div>
            <SkeletonBar className="h-1.5 w-full" />
            <SkeletonBar className="h-1.5 w-3/4" />
            <SkeletonBar className="h-1.5 w-1/3 mt-1" />
          </SkeletonCard>
        ))}
      </div>
    </SectionBlock>
  );
}

function ServicesGrid({ count = 6, cols = 3 }: { count?: number; cols?: number }) {
  return (
    <SectionBlock className="bg-slate-50">
      <SkeletonBar className="h-3 w-32 mx-auto mb-2" />
      <div className={`grid ${cols === 4 ? "grid-cols-4" : "grid-cols-3"} gap-1.5`}>
        {Array.from({ length: count }).map((_, i) => (
          <SkeletonCard key={i}>
            <div className="w-4 h-4 bg-slate-300 rounded" />
            <SkeletonBar className="h-1.5 w-3/4" />
            <SkeletonBar className="h-1.5 w-1/2" />
          </SkeletonCard>
        ))}
      </div>
    </SectionBlock>
  );
}

function EmergencyHero() {
  return (
    <div className="bg-slate-100 rounded overflow-hidden border border-slate-200">
      <Header dark />
      <SectionBlock className="bg-slate-700 text-center flex flex-col items-center gap-1.5 py-5">
        <div className="w-16 h-2 bg-slate-500 rounded mb-1" />
        <div className="w-3/4 h-4 bg-slate-300 rounded" />
        <div className="w-2/3 h-4 bg-slate-300 rounded" />
        <div className="w-1/2 h-2 bg-slate-400 rounded mt-1" />
        <div className="flex gap-2 mt-2">
          <SkeletonButton className="h-6 w-20 bg-slate-200" />
          <SkeletonButton className="h-6 w-20 bg-slate-500" />
        </div>
        <SkeletonImage className="w-full h-16 mt-2 bg-slate-600 border-slate-500" />
      </SectionBlock>
      <div className="bg-slate-800 px-3 py-1.5 flex items-center justify-between">
        <div className="w-20 h-2 bg-slate-500 rounded" />
        <div className="w-16 h-2 bg-slate-500 rounded" />
        <div className="w-12 h-4 bg-slate-300 rounded" />
      </div>
      <ServicesGrid count={8} cols={4} />
      <Reviews />
      <FinalCTA />
    </div>
  );
}

function LocalAuthority() {
  return (
    <div className="bg-slate-100 rounded overflow-hidden border border-slate-200">
      <Header navLinks={4} />
      <SectionBlock className="bg-white">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5 justify-center">
            <SkeletonBar className="h-2 w-1/2" />
            <SkeletonBar className="h-3 w-full" />
            <SkeletonBar className="h-3 w-5/6" />
            <SkeletonBar className="h-1.5 w-full mt-1" />
            <SkeletonBar className="h-1.5 w-3/4" />
            <div className="flex gap-1.5 mt-1">
              <SkeletonButton className="h-5 w-14" dark />
              <SkeletonButton className="h-5 w-14" />
            </div>
          </div>
          <SkeletonImage className="w-full h-24" />
        </div>
      </SectionBlock>
      <SectionBlock className="bg-slate-50 grid grid-cols-3 gap-1.5">
        {Array.from({ length: 3 }).map((_, i) => (
          <SkeletonCard key={i} className="items-center text-center">
            <div className="w-6 h-3 bg-slate-400 rounded mx-auto" />
            <SkeletonBar className="h-1.5 w-3/4 mx-auto" />
          </SkeletonCard>
        ))}
      </SectionBlock>
      <ServicesGrid count={6} />
      <SectionBlock className="bg-white">
        <div className="grid grid-cols-2 gap-3">
          <SkeletonImage className="w-full h-20" />
          <div className="flex flex-col gap-1.5 justify-center">
            <SkeletonBar className="h-2.5 w-2/3" />
            <SkeletonBar className="h-1.5 w-full" />
            <SkeletonBar className="h-1.5 w-full" />
            <SkeletonBar className="h-1.5 w-3/4" />
          </div>
        </div>
      </SectionBlock>
      <SectionBlock className="bg-slate-50">
        <SkeletonBar className="h-2 w-24 mx-auto mb-2" />
        <div className="flex flex-wrap gap-1 justify-center">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="px-2 py-1 bg-white border border-slate-200 rounded-full">
              <div className="w-8 h-1.5 bg-slate-300 rounded" />
            </div>
          ))}
        </div>
      </SectionBlock>
      <Reviews />
      <FinalCTA />
    </div>
  );
}

function FleetSpecialist() {
  return (
    <div className="bg-slate-100 rounded overflow-hidden border border-slate-200">
      <Header navLinks={5} />
      <SectionBlock className="bg-slate-50">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5 justify-center">
            <div className="w-12 h-2 bg-slate-400 rounded" />
            <SkeletonBar className="h-3.5 w-full" />
            <SkeletonBar className="h-3.5 w-4/5" />
            <SkeletonBar className="h-1.5 w-full mt-1" />
            <SkeletonBar className="h-1.5 w-2/3" />
            <div className="flex gap-1.5 mt-1">
              <SkeletonButton className="h-5 w-16" dark />
              <SkeletonButton className="h-5 w-16" />
            </div>
          </div>
          <SkeletonImage className="w-full h-28" />
        </div>
      </SectionBlock>
      <div className="bg-white px-3 py-2 flex items-center justify-around border-y border-slate-200">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="w-10 h-4 bg-slate-200 rounded" />
        ))}
      </div>
      <ServicesGrid count={6} />
      <SectionBlock className="bg-white">
        <SkeletonBar className="h-2 w-28 mx-auto mb-2" />
        <div className="grid grid-cols-3 gap-1.5">
          {Array.from({ length: 3 }).map((_, i) => (
            <SkeletonCard key={i}>
              <SkeletonImage className="h-10 w-full" />
              <SkeletonBar className="h-1.5 w-2/3" />
              <SkeletonBar className="h-1.5 w-full" />
            </SkeletonCard>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock className="bg-slate-50">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5 justify-center">
            <SkeletonBar className="h-2.5 w-1/2" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-slate-400 rounded-full flex-shrink-0" />
                <SkeletonBar className="h-1.5 flex-1" />
              </div>
            ))}
          </div>
          <SkeletonImage className="w-full h-24" />
        </div>
      </SectionBlock>
      <SectionBlock className="bg-white">
        <div className="grid grid-cols-4 gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="w-5 h-5 bg-slate-700 text-white rounded-full" />
              <SkeletonBar className="h-1.5 w-3/4" />
            </div>
          ))}
        </div>
      </SectionBlock>
      <FinalCTA />
    </div>
  );
}

function ModernMinimalist() {
  return (
    <div className="bg-white rounded overflow-hidden border border-slate-200">
      <div className="flex items-center justify-between p-3 border-b border-slate-100">
        <div className="w-12 h-3 bg-slate-300 rounded" />
        <div className="flex items-center gap-2">
          <div className="w-12 h-2 bg-slate-300 rounded" />
          <div className="w-10 h-4 bg-slate-700 rounded" />
        </div>
      </div>
      <SectionBlock className="bg-white text-center flex flex-col items-center gap-2 py-8">
        <div className="w-16 h-1.5 bg-slate-200 rounded mb-1" />
        <div className="w-3/4 h-4 bg-slate-300 rounded" />
        <div className="w-2/3 h-4 bg-slate-300 rounded" />
        <div className="w-1/2 h-1.5 bg-slate-200 rounded mt-1" />
        <SkeletonButton className="h-6 w-24 mt-3" dark />
        <div className="flex items-center gap-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-slate-300 rounded-sm" />
          ))}
          <div className="w-12 h-1.5 bg-slate-200 rounded ml-1" />
        </div>
      </SectionBlock>
      <div className="px-6 pb-6">
        <SkeletonImage className="w-full h-28" />
      </div>
      <SectionBlock className="bg-white px-6 pb-6">
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <div className="w-5 h-5 bg-slate-200 rounded" />
              <SkeletonBar className="h-1.5 w-3/4" />
              <SkeletonBar className="h-1 w-full bg-slate-200" />
            </div>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock className="bg-slate-50 px-6 py-6">
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div className="w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
              </div>
              <SkeletonBar className="h-1.5 w-3/4" />
            </div>
          ))}
        </div>
      </SectionBlock>
      <Reviews />
      <FinalCTA />
    </div>
  );
}

function ServiceMultiplier() {
  return (
    <div className="bg-slate-100 rounded overflow-hidden border border-slate-200">
      <Header />
      <SectionBlock className="bg-white text-center flex flex-col items-center gap-1.5 py-4">
        <SkeletonBar className="h-3 w-2/3" />
        <SkeletonBar className="h-3 w-1/2" />
        <SkeletonBar className="h-1.5 w-3/4 mt-1" />
        <div className="flex gap-1.5 mt-2">
          <SkeletonButton className="h-5 w-16" dark />
          <SkeletonButton className="h-5 w-16" />
        </div>
        <div className="flex flex-wrap gap-1 justify-center mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded-full">
              <div className="w-8 h-1.5 bg-slate-300 rounded" />
            </div>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock className="bg-slate-50">
        <SkeletonBar className="h-2.5 w-40 mx-auto mb-2" />
        <div className="grid grid-cols-3 gap-1.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} className="items-center text-center py-2">
              <div className="w-6 h-6 bg-slate-300 rounded-full" />
              <SkeletonBar className="h-1.5 w-3/4 mx-auto" />
              <SkeletonBar className="h-1 w-1/2 mx-auto bg-slate-200" />
            </SkeletonCard>
          ))}
        </div>
      </SectionBlock>
      <ServicesGrid count={8} cols={4} />
      <SectionBlock className="bg-white">
        <SkeletonBar className="h-2 w-24 mx-auto mb-2" />
        <div className="grid grid-cols-3 gap-1.5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="w-5 h-5 bg-slate-700 text-white rounded-full flex items-center justify-center" />
              <SkeletonBar className="h-1.5 w-2/3" />
              <SkeletonBar className="h-1 w-full bg-slate-200" />
            </div>
          ))}
        </div>
      </SectionBlock>
      <Reviews />
      <FinalCTA />
    </div>
  );
}

function Fallback() {
  return (
    <div className="bg-slate-100 rounded overflow-hidden border border-slate-200">
      <Header />
      <SectionBlock className="bg-white text-center flex flex-col items-center gap-1.5 py-6">
        <SkeletonBar className="h-3 w-2/3" />
        <SkeletonBar className="h-3 w-1/2" />
        <SkeletonBar className="h-1.5 w-3/4 mt-1" />
        <SkeletonButton className="h-6 w-20 mt-2" dark />
      </SectionBlock>
      <SkeletonImage className="mx-3 h-20" />
      <ServicesGrid count={6} />
      <Reviews />
      <FinalCTA />
    </div>
  );
}

export default function TemplateSandboxPreview({ template }: Props) {
  const key = normalize(template);
  const Comp =
    key === "emergency" ? EmergencyHero :
    key === "local" ? LocalAuthority :
    key === "fleet" ? FleetSpecialist :
    key === "minimalist" ? ModernMinimalist :
    key === "service" ? ServiceMultiplier :
    Fallback;

  return (
    <div className="w-full max-h-[65vh] overflow-y-auto rounded-md border border-slate-200 bg-slate-50 p-2">
      <Comp />
    </div>
  );
}
