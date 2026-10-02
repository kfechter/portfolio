// src/app/page.tsx
import { CASE_STUDIES } from "@/data/case-studies";
import { ProfileHero } from "@/components/home/ProfileHero";
import { FeaturedCaseStudy } from "@/components/home/FeaturedCaseStudy";
import { AboutSection } from "@/components/home/AboutSection";

export default function HomePage() {
  // Extract metrics from your featured case study (or aggregate them)
  const featured = CASE_STUDIES[0];

  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* 1. Header & Identity */}
      <ProfileHero />
      
      {/* 3. Deep Background, Pillars, & Homelab Specs */}
      <AboutSection />

      {/* 2. Flagship Project Dossier & Impact Matrix */}
      {featured && <FeaturedCaseStudy study={featured} />}

    </main>
  );
}