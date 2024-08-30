import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function addPrefix(prefix: string, classNames: string): string {
//   return classNames
//     .split(" ")
//     .map((className) => `${prefix}${className}`)
//     .join(" ");
// }

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

export function getRandomEvenNumber(min: number, max: number): number {
  // Pastikan min dan max adalah bilangan bulat
  min = Math.ceil(min);
  max = Math.floor(max);

  // Hitung angka acak dalam rentang tersebut
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  // Pastikan angka acak adalah bilangan genap
  if (randomNum % 2 !== 0) {
    randomNum += 1;
  }

  // Jika lebih dari max, kurangi dengan 2
  if (randomNum > max) {
    randomNum -= 2;
  }

  return randomNum;
}

// Contoh penggunaan
const randomEvenNumber = getRandomEvenNumber(2, 100);
