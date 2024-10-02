"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Icons } from "@/data/data";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function PaginationComponents({
  categoryPath,
  type,
  page,
  totalPage,
}: {
  categoryPath?: string;
  type?: string | string[] | undefined;
  page?: string | string[] | undefined;
  totalPage?: number;
}) {
  const router = useRouter();
  let pages = page ?? 1;
  return (
    <Pagination>
      <PaginationContent>
        {pages! >= "2" && (
          <PaginationItem
            onClick={() => {
              let path = "";
              if (type && Number(pages) == 2) {
                path = `/shop/${categoryPath}?type=${type}`;
              } else if (type) {
                path = `/shop/${categoryPath}?type=${type}&page=${
                  Number(pages) - 1
                }`;
              } else if (pages! == 2) {
                path = `/shop/${categoryPath}`;
              } else {
                path = `/shop/${categoryPath}?page=${Number(pages) - 1}`;
              }
              router.push(path);
            }}
          >
            <Button variant={"ghost"} className="space-x-2">
              <Icon icon={Icons.ArrowLeftCircle} /> <p>Prev</p>
            </Button>
          </PaginationItem>
        )}
        {pages! != String(totalPage) && (
          <>
            <PaginationItem>
              <Button variant={"ghost"} className="space-x-2 bg-gray-200">
                <p>{page ?? 1}</p>
              </Button>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}
        {pages && totalPage != 1 && (
          <PaginationItem>
            <Button
              variant={"ghost"}
              className={cn("space-x-2", pages == totalPage && "bg-gray-200")}
            >
              {totalPage}
            </Button>
          </PaginationItem>
        )}
        {pages! != String(totalPage) && (
          <PaginationItem
            onClick={() => {
              let path = "";
              if (type) {
                path = `/shop/${categoryPath}?type=${type}&page=${
                  Number(pages) + 1
                }`;
              } else {
                path = `/shop/${categoryPath}?page=${Number(pages) + 1}`;
              }
              router.push(path);
            }}
          >
            <Button variant={"ghost"} className="space-x-2">
              <p>Next</p> <Icon icon={Icons.ArrowRightCircle} />
            </Button>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
