import { PRODUCT_IMAGE_MAP } from "@/data/product-media";
import type { KnowledgeArticle } from "@/data/knowledge-hub";

/**
 * Small shared pieces for the Knowledge Hub pages. No hooks, so both the
 * server pages and the client section components can import them.
 */

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`font-[family-name:var(--font-poppins)] text-[13px] font-semibold uppercase tracking-[0.08em] ${
        dark ? "text-[#7fb2f0]" : "text-[#0056B3]"
      }`}
    >
      {children}
    </p>
  );
}

export const h2Cls = "text-[1.65rem] font-semibold leading-tight tracking-[-0.015em] sm:text-[2.1rem]";

const isBrandLogo = (url: string) =>
  /parr-1\.png|elite(-1)?\.png|sylab-[a-z0-9]+\.png|orlab-[a-z0-9]+\.png/i.test(url);

/** Hand-picked photos where the first recommended product isn't the article's subject. */
const ARTICLE_IMAGES: Record<string, string> = {
  "ash-fusibility-determination": "/images/orbit/IF2000G.jpg",
  "high-frequency-combustion-cs": "/images/orbit/CSbox.jpg",
};

/** Photo for an article: a hand-picked one, else the first real product photo among its instruments. */
export function articleImage(article: KnowledgeArticle): string | null {
  if (ARTICLE_IMAGES[article.slug]) return ARTICLE_IMAGES[article.slug];
  for (const slug of article.recommendedProductSlugs) {
    const img = (PRODUCT_IMAGE_MAP[slug] || []).find(
      (i) => !isBrandLogo(i) && !/pdf|catalog|brochure/i.test(i)
    );
    if (img) return img;
  }
  return null;
}
