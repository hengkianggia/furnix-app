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
