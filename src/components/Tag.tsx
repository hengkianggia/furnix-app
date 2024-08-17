import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const Tag = ({ text, className }: { text: string; className?: string }) => {
  return (
    <Button
      className={cn(
        "border border-myDarkGray bg-mySmoothGray text-myDarkGray hover:text-myBrokenWhite",
        className
      )}
    >
      {text}
    </Button>
  );
};

export default Tag;
