// src/components/mdx/ArchitectureCallout.tsx
interface CalloutProps {
  type?: "bottleneck" | "decision" | "reliability";
  title: string;
  children: React.ReactNode;
}

export function ArchitectureCallout({ type = "decision", title, children }: CalloutProps) {
  return (
    <aside className="my-6 p-4 rounded-lg border border-red-950/60 bg-red-950/20">
        <div className="font-mono text-xs uppercase tracking-wider text-red-400 mb-2">
            [{type}] {title}
        </div>
        <div className="text-neutral-300 text-sm leading-relaxed">{children}</div>
    </aside>
  );
}