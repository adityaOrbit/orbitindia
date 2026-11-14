import type { Metadata } from "next";
import Link from "next/link";
import { withBasePath } from "@/lib/utils";

/**
 * The Knowledge Hub has no overview page any more: its content lives on
 * /knowledge-hub/blogs/, /knowledge-hub/tools/ and /knowledge-hub/resources/
 * (reached from the Knowledge Hub menu). This address only forwards old links
 * and bookmarks to Blogs.
 */
export const metadata: Metadata = {
  title: "Knowledge Hub",
  robots: { index: false, follow: true },
};

export default function KnowledgeHubRedirect() {
  const target = withBasePath("/knowledge-hub/blogs/");
  return (
    <div className="container-x py-16">
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <h1 className="text-2xl font-semibold text-[var(--ink)]">Knowledge Hub</h1>
      <p className="mt-3 text-[var(--ink-2)]">
        The Knowledge Hub has moved. Go to{" "}
        <Link href="/knowledge-hub/blogs/" className="font-medium text-[#0056B3] hover:underline">Blogs</Link>,{" "}
        <Link href="/knowledge-hub/tools/" className="font-medium text-[#0056B3] hover:underline">Tools</Link> or{" "}
        <Link href="/knowledge-hub/resources/" className="font-medium text-[#0056B3] hover:underline">Resources</Link>.
      </p>
    </div>
  );
}
