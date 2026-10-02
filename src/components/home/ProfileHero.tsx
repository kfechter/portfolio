// src/components/home/ProfileHero.tsx
export function ProfileHero() {
  return (
    <header className="space-y-6">
      {/* Name & Title */}
      <div className="space-y-2">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Kenneth Fechter
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
          href="https://github.com/kfechter" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-white transition-colors"
        >
          GitHub ↗
        </a>
        <a 
          href="www.linkedin.com/in/kafechter" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-white transition-colors"
        >
          LinkedIn ↗
        </a>
        <a 
          href="mailto:kfechter@kennethfechter.com" 
          className="text-neutral-400 hover:text-white transition-colors"
        >
          Email ↗
        </a>
      </div>
    </header>
  );
}