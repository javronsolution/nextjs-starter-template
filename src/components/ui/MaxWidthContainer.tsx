import { cn } from "@/utils/utils";
import React from "react";

const MaxWidthContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("h-full mx-auto max-w-screen-xl px-2.5 md:px-20 text-white", className)}>
      {children}
    </div>
  );
};

export default MaxWidthContainer;
