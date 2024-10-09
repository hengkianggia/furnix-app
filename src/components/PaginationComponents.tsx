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
import { usePathname, useRouter } from "next/navigation";
import { cn, convertTeksToUrl, getCurrentUrlWithoutQuery } from "@/lib/utils";

export function PaginationComponents({
  type,
  page,
  sort,
  totalPage,
}: {
  type?: string | undefined;
  page?: string | undefined;
  sort?: string | undefined;
  totalPage?: number;
}) {
  const router = useRouter();
  const url = getCurrentUrlWithoutQuery(); //get current url with pathname and without query

  const path = usePathname();

  let pages = page ?? 1;

  const prevPath = ({
    path,
    type,
    sort,
    page,
  }: {
    path: string;
    type: string | undefined;
    sort: string | undefined;
    page: number;
  }) => {
    let prevPagePath: string;
    if (type && sort && +page! == 2) {
      prevPagePath = `${path}?type=${type}&sort=${sort}`;
    } else if (type && sort) {
      prevPagePath = `${path}?type=${type}&sort=${sort}&page=${page - 1}`;
    } else if ((type || sort) && +page! == 2) {
      prevPagePath = `${path}${type ? "?type=" + type : ""}${
        sort ? "?sort=" + sort : ""
      }`; // this is work
    } else if (type || sort) {
      prevPagePath = `${path}${type ? "?type=" + type : ""}${
        sort ? "?sort=" + sort : ""
      }&page=${page - 1}`; // this is work
    } else if (+page! == 2) {
      prevPagePath = `${path}`;
    } else {
      prevPagePath = `${path}?page=${+page! - 1}`;
    }

    return prevPagePath;
  }; //work with type, sort and page

  const nextPath = ({
    path,
    type,
    page,
  }: {
    path: string;
    type: string | undefined;
    page: number;
  }) => {
    let nextPagePath: string;
    if (type && sort) {
      nextPagePath = `${path}?type=${type}&sort=${sort}&page=${page + 1}`;
    } else if (type || sort) {
      nextPagePath = `${path}${type ? "?type=" + type : ""}${
        sort ? "?sort=" + sort : ""
      }&page=${page + 1}`;
    } else {
      nextPagePath = `${path}?page=${+pages! + 1}`;
    }

    return nextPagePath;
  }; //work with type, sort and page

  return (
    <Pagination>
      <PaginationContent>
        {totalPage && +pages > 1 && (
          <>
            <PaginationItem
              onClick={() => {
                type && sort
                  ? router.push(`${url}?type=${type}&sort=${sort}`)
                  : type || sort
                  ? router.push(
                      `${url}${type ? "?type=" + type : ""}${
                        sort ? "?sort=" + sort : ""
                      }`
                    )
                  : router.push(path);
              }}
              className="max-md:hidden"
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
              let pathh = prevPath({ path, type, sort, page: +pages! });
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
                type && sort
                  ? router.push(
                      `${path}?type=${type}&sort=${sort}&page=${totalPage}`
                    )
                  : type || sort
                  ? router.push(
                      `${path}${type ? "?type=" + type : ""}${
                        sort ? "?sort=" + sort : ""
                      }&page=${totalPage}`
                    )
                  : router.push(`${path}?page=${totalPage}`);
              }}
              className="max-md:hidden"
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
