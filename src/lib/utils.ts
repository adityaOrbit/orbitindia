import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function withBasePath(path: string) {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("blob:")
  ) {
    return path;
  }

  const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const basePath = rawBasePath.endsWith("/")
    ? rawBasePath.slice(0, -1)
    : rawBasePath;

  if (basePath && (path === basePath || path.startsWith(`${basePath}/`))) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
