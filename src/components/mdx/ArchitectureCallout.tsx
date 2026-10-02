// src/components/mdx/ArchitectureCallout.tsx

export type CalloutType = 
  | "problem" 
  | "pain-point" 
  | "solution" 
  | "fix" 
  | "decision" 
  | "trade-off";

interface CalloutProps {
  type?: CalloutType;
  title: string;
  children: React.ReactNode;
}

const STYLES = {
  problem: {
    border: "border-red-900/50",
    bg: "bg-red-950/20",
    badge: "text-red-400 bg-red-950/60 border border-red-900/60",
    title: "text-red-300",
    label: "PAIN POINT",
  },
  solution: {
    border: "border-emerald-900/50",
    bg: "bg-emerald-950/20",
    badge: "text-emerald-400 bg-emerald-950/60 border border-emerald-900/60",
    title: "text-emerald-300",
    label: "ARCHITECTURAL FIX",
  },
  decision: {
    border: "border-amber-900/50",
    bg: "bg-amber-950/20",
    badge: "text-amber-400 bg-amber-950/60 border border-amber-900/60",
    title: "text-amber-300",
    label: "TRADE-OFF",
  },
};

export function ArchitectureCallout({
  type = "problem",
  title,
  children,
}: CalloutProps) {
  // Direct, safe mapping:
  const key = 
    type === "solution" || type === "fix"
      ? "solution"
      : type === "decision" || type === "trade-off"
      ? "decision"
      : "problem";

  const current = STYLES[key];

  return (
    <aside className={`my-8 p-6 sm:p-8 rounded-xl border ${current.border} ${current.bg} not-prose flex flex-col gap-3`}>
      {/* Badge & Title Row */}
      <div className="flex flex-wrap items-center gap-2.5">
        <span className={`font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded font-bold ${current.badge}`}>
          {current.label}
        </span>
        <h4 className={`text-base font-semibold tracking-tight ${current.title}`}>
          {title}
        </h4>
      </div>

      {/* Narrative Body */}
      <div className="text-neutral-300 text-sm leading-relaxed">
        {children}
      </div>
    </aside>
  );
}