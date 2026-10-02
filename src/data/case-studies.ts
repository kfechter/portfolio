import { CaseStudyMeta } from "@/types/case-study";

export const CASE_STUDIES: CaseStudyMeta[] = [
  {
    slug: "benchmark-automation-engine",
    title: "Zero-Touch Benchmark Automation Engine",
    headline: "Automating Bare-Metal Hardware Provisioning & Battery Telemetry at Scale",
    systemDomain: "Bare-Metal Provisioning • Edge Daemons • Hardware Lifecycle",
    stack: ["WinPE", "Unattend.xml", "Batch/PowerShell", "Snipe-IT API", "REST/SSE"],
    metrics: [
      {
        value: "0-Touch",
        label: "Provisioning",
        context: "From boxed bare-metal to bench execution without manual intervention."
      },
      {
        value: "99.8%",
        label: "Shelf Allocation",
        context: "Eliminated technician shelf-assignment and asset tagging bottlenecks."
      },
      {
        value: "100%",
        label: "Reboot Resilience",
        context: "Daemon-managed local state survived multi-cycle reboot benchmarks."
      }
    ],
    summary: "Replaced a fragile RPC/PSExec legacy pipeline with an unattended bootstrap pipeline, dynamic Snipe-IT shelf allocation, and reboot-resilient telemetry collection."
  },

  {
  slug: "homelab-platform-architecture",
  title: "Private Homelab Platform & GitOps Pipeline",
  headline: "Containerized Self-Hosting, Nginx Reverse Proxy Ingress, and Gitea Actions CI/CD",
  systemDomain: "DevOps • Self-Hosted Infrastructure • GitOps",
  stack: ["Docker", "Nginx", "Gitea Actions", "Alpine Linux", "Bash"],
  metrics: [
    {
      value: "~120MB",
      label: "Container Footprint",
      context: "Multi-stage Alpine Docker build with Next.js standalone dependency tracing."
    },
    {
      value: "0",
      label: "Cloud Vendor Locks",
      context: "Fully self-contained hosting on private bare-metal compute."
    },
    {
      value: "100%",
      label: "Automated Deployments",
      context: "Gitea act_runner triggers build and rolling container replacement on git push."
    }
  ],
  summary: "An architectural overview of the private homelab infrastructure powering this site, featuring reverse proxy ingress, automated mirror syncing, and zero-downtime container deployments."
}
];