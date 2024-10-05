"use client";
import React from "react";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";

const SelectFilter = ({
  type,
  sort,
}: {
  type?: string | undefined;
  sort?: string | undefined;
}) => {
  const router = useRouter();

  const pathname = usePathname();

  const handleSelectChange = (value: string) => {
    console.log(type + " in select components");
    if (type !== undefined) {
      router.push(`${pathname}?type=${type}&sort=${value}`);
    } else {
      router.push(`${pathname}?sort=${value}`);
    }
  };

  return (
    <Select onValueChange={handleSelectChange} value={sort}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Default sorting" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="lowerprice">Lower Price</SelectItem>
          <SelectItem value="higherprice">Higher Price</SelectItem>
          <SelectItem value="morediscount">More Discount</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectFilter;
