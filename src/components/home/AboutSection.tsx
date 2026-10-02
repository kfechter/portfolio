import Link from "next/link";

export function AboutSection() {
  return (
    <section className="space-y-10 border-t border-neutral-800 pt-16">
      {/* Section Header */}
      <div className="space-y-2">
        <span className="font-mono text-xs uppercase tracking-widest text-red-400">
          Background & Philosophy
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-white">
          About Me
        </h2>
      </div>

      {/* Narrative Story */}
      <div className="prose prose-invert prose-red max-w-none text-neutral-300 space-y-4 leading-relaxed">
        <p>
          I am a Senior Software Engineer with over a decade of experience building and scaling 
          proprietary enterprise systems. Much of my career has lived at the intersection of 
          hardware and software—transforming fragile, manual operational processes into deterministic, 
          zero-touch automated pipelines.
        </p>
        <p>
          Because the majority of my career has centered around proprietary internal architectures, 
          I treat this site as an engineering dossier and architectural portfolio. I believe in 
          autonomous client-side daemons, crash-only state resilience, and keeping infrastructure 
          transparent and self-hosted.
        </p>
      </div>

      {/* Homelab Specifications Card */}
      <div className="p-6 rounded-lg border border-neutral-800/80 bg-neutral-950 space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
            Homelab
          </span>
        </div>
        <p className="text-xs text-neutral-400 leading-relaxed">
          This site is running on docker hosted on a server in my house. Deployed from a public github repo via a gitea mirror and gitea actions.
        </p>
        <Link
            href="/case-studies/homelab-platform-architecture"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-red-400 hover:text-red-300 transition-colors pt-2 group" >
                Explore Homelab Architecture & Ingress Specs
                <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
      </div>
    </section>
  );
}