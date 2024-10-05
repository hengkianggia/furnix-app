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
import { cn, convertTeksToUrl } from "@/lib/utils";

export function PaginationComponents({
  categoryPath,
  type,
  page,
  totalPage,
  pathname,
}: {
  categoryPath?: string;
  type?: string | undefined;
  page?: string | undefined;
  totalPage?: number;
  pathname?: string;
}) {
  const router = useRouter();
  let pages = page ?? 1;

  let path = `/${pathname}`;
  if (categoryPath) {
    path = `/${pathname}/${categoryPath}`;
  }

  console.log(type);

  const prevPath = ({
    path,
    type,
    page,
  }: {
    path: string;
    type: string | string[] | undefined;
    page: number;
  }) => {
    let prevPagePath: string;
    if (type && +page! == 2) {
      prevPagePath = `${path}?type=${type}`;
    } else if (type) {
      prevPagePath = `${path}?type=${type}&page=${page - 1}`;
    } else if (+page! == 2) {
      prevPagePath = `${path}`;
    } else {
      prevPagePath = `${path}?page=${+page! - 1}`;
    }

    return prevPagePath;
  };

  const nextPath = ({
    path,
    type,
    page,
  }: {
    path: string;
    type: string | string[] | undefined;
    page: number;
  }) => {
    let nextPagePath: string;
    if (type) {
      nextPagePath = `${path}?type=${type}&page=${page + 1}`;
    } else {
      nextPagePath = `${path}?page=${+pages! + 1}`;
    }

    return nextPagePath;
  };
  return (
    <Pagination>
      <PaginationContent>
        {totalPage && +pages > 1 && (
          <>
            <PaginationItem
              onClick={() => {
                type ? router.push(`${path}?type=${type}`) : router.push(path);
              }}
            >
              <Button variant={"ghost"} className={cn("space-x-2")}>
                <Icon icon={Icons.LeftPage} />
                <Icon icon={Icons.LeftPage} />
                <p>First</p>
              </Button>
            </PaginationItem>
          </>
        )}
        {+pages! >= 2 && (
          <PaginationItem
            onClick={() => {
              let pathh = prevPath({ path, type, page: +pages! });
              router.push(pathh);
            }}
          >
            <Button variant={"ghost"} className="space-x-2">
              <Icon icon={Icons.LeftPage} /> <p>Prev</p>
            </Button>
          </PaginationItem>
        )}
        {pages != totalPage && (
          <>
            <PaginationItem>
              <Button variant={"ghost"} className="space-x-2 bg-gray-200">
                <p>{pages}</p>
              </Button>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}
        {pages && totalPage != 1 && (
          <PaginationItem
            onClick={() => router.push(`${path}?page=${totalPage}`)}
          >
            <Button
              variant={"ghost"}
              className={cn("space-x-2", pages == totalPage && "bg-gray-200")}
            >
              {totalPage}
            </Button>
          </PaginationItem>
        )}
        {pages! != totalPage && (
          <PaginationItem
            onClick={() => {
              let pathh = nextPath({ path, type, page: +pages! });
              router.push(pathh);
            }}
          >
            <Button variant={"ghost"} className="space-x-2">
              <p>Next</p> <Icon icon={Icons.RightPage} />
            </Button>
          </PaginationItem>
        )}
        {totalPage != +pages && (
          <>
            <PaginationItem
              onClick={() => {
                type
                  ? router.push(`${path}?type=${type}&page=${totalPage}`)
                  : router.push(`${path}?page=${totalPage}`);
                
              }}
            >
              <Button variant={"ghost"} className={cn("space-x-2")}>
                <Icon icon={Icons.RightPage} />
                <Icon icon={Icons.RightPage} />
                <p>last</p>
              </Button>
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
}
