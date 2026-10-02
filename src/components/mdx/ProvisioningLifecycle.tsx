const STAGES = [
  {
    step: "01",
    phase: "Bare-Metal Ingestion",
    subsystem: "Unattend.xml / WinPE",
    description: "Factory laptop powers on; unattended answer file bypasses OOBE and configures base OS environment without user input."
  },
  {
    step: "02",
    phase: "Bootstrap Execution",
    subsystem: "Batch / PowerShell",
    description: "First-boot hook executes single bootstrap script; establishes secure network credentials and pulls deployment payloads."
  },
  {
    step: "03",
    phase: "Asset & Shelf Allocation",
    subsystem: "Snipe-IT REST API",
    description: "Queries inventory API to dynamically reserve physical shelf coordinates; automatically dispatches thermal asset label to print queue."
  },
  {
    step: "04",
    phase: "Daemon Enrollment",
    subsystem: "Background Service",
    description: "Registers hardware with central benchmark orchestrator; checks in with device specs, battery health, and test capabilities."
  },
  {
    step: "05",
    phase: "Resilient Execution",
    subsystem: "Local State Machine",
    description: "With NATS messages being durable, the system can pick up messages after reboots, and tests can now be re-ordered or cancelled while in flight."
  }
];

// src/components/mdx/ProvisioningLifecycle.tsx
export function ProvisioningLifecycle() {
  return (
    <div className="my-10 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8 not-prose">
      <div className="mb-6 flex items-center justify-between border-b border-neutral-800 pb-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-red-400">
            System Architecture Flow
          </span>
          <h3 className="text-lg font-bold text-white mt-1">
            Zero-Touch Provisioning Lifecycle
          </h3>
        </div>
        <span className="font-mono text-xs text-neutral-400">
          5 Sequential Phases
        </span>
      </div>

      <div className="relative border-l border-neutral-800 ml-3 sm:ml-4 space-y-8 pl-6 sm:pl-8">
        {STAGES.map((stage) => (
          <div key={stage.step} className="relative group">
            {/* Red glowing timeline node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-red-500 bg-neutral-950 transition-colors group-hover:bg-red-500" />

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-red-400 font-semibold">
                  Phase {stage.step}
                </span>
                <span className="text-neutral-500 text-xs">•</span>
                <span className="font-mono text-xs text-neutral-400 bg-neutral-800/80 px-2 py-0.5 rounded">
                  {stage.subsystem}
                </span>
              </div>
              <h4 className="text-base font-semibold text-neutral-100">
                {stage.phase}
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {stage.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}