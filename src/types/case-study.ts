export interface MetricImpact {
  label: string;
  value: string;
  context: string;
}

export interface CaseStudyMeta {
  slug: string;
  title: string;
  headline: string;
  systemDomain: string; // e.g. "Bare-Metal Automation & Distributed Daemons"
  stack: string[];      // e.g. ["PowerShell", "WinPE/Sysprep", "Snipe-IT REST API", "Go/Rust"]
  metrics: MetricImpact[];
  summary: string;
}