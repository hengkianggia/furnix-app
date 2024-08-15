import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function addPrefix(prefix: string, classNames: string): string {
  return classNames
    .split(" ")
    .map((className) => `${prefix}${className}`)
    .join(" ");
}

export function cleanPath(path: string): string[] {
  // Menghilangkan slash di awal dan akhir path
  const trimmedPath = path.replace(/^\/|\/$/g, "");

  // Memisahkan path berdasarkan slash
  const segments = trimmedPath.split("/");

  // Mendecode URL-encoded strings dan mengganti underscore dengan spasi
  return segments
    .map((segment) => decodeURIComponent(segment).replace(/%20/g, " "))
    .filter((segment) => segment !== "");
}
