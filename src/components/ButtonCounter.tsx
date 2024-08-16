import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export default function ButtonCounter() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="flex items-center justify-center border border-gray-300 p-2 rounded-full w-fit">
      <button
        className={cn(
          "cursor-pointer rounded-full bg-gray-100 p-1",
          count === 1 && "cursor-not-allowed opacity-50"
        )}
        onClick={decrement}
        disabled={count === 1}
      >
        <Icon icon={"ic:round-remove"} className="text-2xl text-myDarkGray" />
      </button>
      <span className="w-10 grid place-items-center">{count}</span>
      <button
        className="cursor-pointer bg-gray-100 p-1 rounded-full"
        onClick={increment}
      >
        <Icon icon={"ic:round-add"} className="text-2xl text-myDarkGray" />
      </button>
    </div>
  );
}
