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
  path,
  category,
}: {
  path?: string;
  category?: string;
}) => {
  const router = useRouter();

  const pathname = usePathname();

  const handleSelectChange = (value: string) => {
    router.push(`${pathname}?sort=${value}`);
  };

  return (
    <Select onValueChange={handleSelectChange}>
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
