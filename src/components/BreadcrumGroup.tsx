"use client";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useParams, usePathname } from "next/navigation";
import { cleanPath, cn } from "@/lib/utils";

export function BreadcrumGroup() {
  const pathname = usePathname();
  let pathNew = cleanPath(pathname);

  const { category, id } = useParams();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={"/"}>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {pathNew.length > 1 && (
          <>
            {pathNew.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    asChild
                    className={cn(
                      "text-slate-950",
                      index + 1 < pathNew.length &&
                        "text-slate-500 hover:text-slate-950"
                    )}
                  >
                    <Link
                      href={index + 1 < pathNew.length ? `/${item}` : ""}
                      className="capitalize"
                    >
                      {item}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index + 1 < pathNew.length && <BreadcrumbSeparator />}
              </div>
            ))}
          </>
        )}
        {pathNew.length == 1 && (
          <BreadcrumbItem>
            <BreadcrumbPage className="capitalize">{pathNew}</BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
