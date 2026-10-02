import { CASE_STUDIES } from "@/data/case-studies";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCaseStudyContent } from "@/lib/mdx"; // Or wherever your helper lives
import Link from "next/link";
import { MetricMatrix } from "@/components/home/MetricMatrix";

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  // 1. Validate against the TS registry
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) {
    notFound(); // Triggers the default Next.js 404 page
  }

  // 2. Fetch compiled MDX content
  const content = await getCaseStudyContent(slug);

  return (
    <article className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-red-400 transition-colors group mb-8" >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to Overview
        </Link>
      {/* Header section populated from typed TS metadata */}
      <header className="space-y-4 border-b border-neutral-800 pb-8">
        <div className="text-xs font-mono uppercase tracking-wider text-red-400">
            {study.systemDomain}
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">
          {study.title}
        </h1>
        <p className="text-lg text-neutral-400">{study.headline}</p>
        
        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {study.stack.map((tech) => (
            <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-800 text-neutral-300">
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Executive Scorecard */}
      <section className="my-8">
        <MetricMatrix metrics={study.metrics} />
      </section>

      {/* Narrative body rendered from MDX */}
      <div className="prose prose-invert prose-red max-w-none">
        {content}
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>; // In Next.js 15+, params is a Promise
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  
  if (!study) return {};

  return {
    title: `${study.title} | Architecture Case Study`,
    description: study.summary,
  };
}