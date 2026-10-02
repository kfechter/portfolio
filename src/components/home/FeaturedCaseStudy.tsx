// src/components/home/FeaturedCaseStudy.tsx
import Link from "next/link";
import { CaseStudyMeta } from "@/types/case-study";
import { MetricMatrix } from "./MetricMatrix";

interface Props {
  study: CaseStudyMeta;
}

export function FeaturedCaseStudy({ study }: Props) {
  return (
<section className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 sm:p-10 space-y-8">      
<div className="space-y-2">
        <div className="text-xs font-mono uppercase tracking-widest text-red-400">
          Featured Architecture • {study.systemDomain}
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          {study.title}
        </h2>
        <p className="text-neutral-400 text-sm leading-relaxed max-w-3xl">
          {study.summary}
        </p>
      </div>

      {/* Only renders if the case study actually defines metrics */}
      {study.metrics && study.metrics.length > 0 && (
        <section className="my-8">
          <MetricMatrix metrics={study.metrics} />
        </section>
      )}

      {/* Footer: Tech Stack + Deep Dive CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-neutral-800/60">
        <div className="flex flex-wrap gap-2">
          {study.stack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 text-xs font-mono rounded bg-neutral-800 text-neutral-300">
              {tech}
            </span>
          ))}
        </div>
        <Link
          href={`/case-studies/${study.slug}`}
          className="text-xs font-mono uppercase tracking-wider text-red-400 hover:text-red-300 flex items-center gap-1 group"
        >
          Read Architecture RFC
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}