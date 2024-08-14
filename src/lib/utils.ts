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
  // Menghapus "/" di awal dan akhir string (jika ada)
  const trimmedPath = path.replace(/^\/|\/$/g, "");

  // Memisahkan string berdasarkan "/" dan menghapus elemen kosong
  return trimmedPath.split("/").filter((segment) => segment.length > 0);
}
