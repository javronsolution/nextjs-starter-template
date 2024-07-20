import { cn } from "@/utils/utils";
import React, { ButtonHTMLAttributes } from "react";
import { FiArrowRight } from "react-icons/fi";
import { cva, type VariantProps } from "class-variance-authority";
import { RiLoader5Fill } from "react-icons/ri";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors ring-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-800 text-white hover:bg-primary-600/95",
        secondary: "bg-white text-black hover:bg-white/90",
        link: "text-text-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "py-2.5 px-6",
        sm: "py-2 px-4",
        lg: "py-4 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonPorps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    icon?: boolean;
  };
const Button = ({
  children,
  variant,
  size,
  className,
  icon = false,
  loading = false,
  ...props
}: ButtonPorps) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {loading ? (
        <span className="animate-spin">
          <RiLoader5Fill size={30} />
        </span>
      ) : (
        <>
          <span className="font-medium text-lg">{children}</span>
          {icon && <FiArrowRight size={20} />}
        </>
      )}
    </button>
  );
};

export default Button;
