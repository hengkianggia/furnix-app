import { Product } from "@/types/Product";
import { type ClassValue, clsx } from "clsx";
import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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

export const convertTeksToUrl = (path: string) => {
  return path?.toLocaleLowerCase().split(" ").join("-");
};

export function convertUrlToTeks(path: string) {
  return path?.toLocaleLowerCase().split("-").join(" ");
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

export function calculateFinalPrice(price: number, discount: number): number {
  if (discount < 0 || discount > 100) {
    throw new Error("Discount must be between 0 and 100.");
  }
  const discountAmount = (price * discount) / 100;
  const finalPrice = price - discountAmount;
  return finalPrice;
}

export function paginateProducts(
  products: Product[],
  totalData: number,
  itemsPerPage: number,
  currentPage: number,
  redirectDefaultPage?: string
): Product[] {
  const totalPages = Math.ceil(totalData / itemsPerPage);

  // Validasi halaman saat ini
  if (currentPage < 1 || currentPage > totalPages) {
    // throw new Error("Current page is out of range.");
    redirect(redirectDefaultPage!);
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Mengambil produk untuk halaman saat ini
  return products.slice(startIndex, endIndex);
}

export function getCurrentUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.href;
  }
  return "";
}

export function getCurrentUrlWithoutQuery(): string {
  if (typeof window !== "undefined") {
    const { protocol, hostname, port, pathname } = window.location;
    return `${protocol}//${hostname}${port ? `:${port}` : ""}${pathname}`;
  }
  return "";
}

export function addQueryToUrl(
  url: string,
  queryParams: Record<string, string>
): string {
  const urlObj = new URL(url);
  urlObj.search = new URLSearchParams(queryParams).toString();
  return urlObj.toString();
}
