// src/components/home/MetricMatrix.tsx
import { MetricImpact } from "@/types/case-study";

interface MetricMatrixProps {
  metrics: MetricImpact[];
}

export function MetricMatrix({ metrics }: MetricMatrixProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
        System Impact & Out-of-the-Box Metrics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((item) => (
          <div
            key={item.label}
            className="p-6 rounded-lg border border-neutral-800 bg-neutral-900/40 hover:border-red-900/40 transition-colors"
          >
            <div className="font-mono text-3xl lg:text-4xl font-bold text-red-400">
              {item.value}
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-200 mt-2">
              {item.label}
            </div>
            <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
              {item.context}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}