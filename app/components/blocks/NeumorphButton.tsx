import { HTMLProps } from "react";
import { cn } from "@/app/elses/css/util";

const NeumorphButton = ({
  className,
  children,
}: HTMLProps<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        `
        w-[100%]
        rounded-[20px] bg-[#e3e3e3] cursor-pointer
        shadow-[6px_6px_30px_#c5c5c5,-6px_-6px_30px_#ffffff]
        active:shadow-[inset_4px_4px_20px_#c5c5c5,inset_-4px_-4px_20px_#ffffff]
        px-[30px] py-[15px]
        flex flex-col justify-start items-center
  `,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default NeumorphButton;
