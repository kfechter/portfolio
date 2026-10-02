// src/components/home/ProfileHero.tsx
export function ProfileHero() {
  return (
    <header className="space-y-6">
      {/* Live Homelab Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs font-mono text-neutral-300">
        <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
        <span>Self-hosted on Homelab Docker Node</span>
      </div>

      {/* Name & Title */}
      <div className="space-y-2">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Your Name
        </h1>
        <p className="text-lg font-mono text-red-400">
          Senior Systems & Platform Engineer
        </p>
      </div>

      {/* Short Tagline */}
      <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl">
        10+ years engineering automated bare-metal infrastructure, resilient edge daemons, 
        and enterprise software systems.
      </p>

      {/* Direct Outbound Links */}
      <div className="flex items-center gap-6 pt-2 font-mono text-xs uppercase tracking-wider">
        <a 
          href="https://github.com/your-username" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-white transition-colors"
        >
          GitHub ↗
        </a>
        <a 
          href="https://linkedin.com/in/your-profile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-white transition-colors"
        >
          LinkedIn ↗
        </a>
        <a 
          href="mailto:your-email@domain.com" 
          className="text-neutral-400 hover:text-white transition-colors"
        >
          Email ↗
        </a>
      </div>
    </header>
  );
}