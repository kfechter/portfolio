import fs from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import { ArchitectureCallout } from "@/components/mdx/ArchitectureCallout"
import { ProvisioningLifecycle } from "@/components/mdx/ProvisioningLifecycle";

// Resolves to the /content/case-studies directory in your project root
const CONTENT_DIR = path.join(process.cwd(), "content", "case-studies");

export async function getCaseStudyContent(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  
  // Read the raw markdown from disk
  const rawSource = await fs.readFile(filePath, "utf-8");

  // Compile MDX into React elements (runs on the server)
  const { content } = await compileMDX({
    source: rawSource,
    components: {
        ArchitectureCallout,
        ProvisioningLifecycle
    },
    options: {
      parseFrontmatter: false, // Metadata lives in your TS registry
    },
  });

  return content;
}