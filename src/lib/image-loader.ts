"use client";

export default function imageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (!src) return "";
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:") ||
    src.startsWith("blob:")
  ) {
    return src;
  }

  const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const basePath = rawBasePath.endsWith("/")
    ? rawBasePath.slice(0, -1)
    : rawBasePath;

  if (basePath && (src === basePath || src.startsWith(`${basePath}/`))) {
    return src;
  }

  const cleanPath = src.startsWith("/") ? src : `/${src}`;
  return `${basePath}${cleanPath}`;
}
