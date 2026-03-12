import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-[#22333b] text-[#e6e4d8] hover:bg-[#8c6d51] border border-[#22333b] hover:border-[#8c6d51]",
  secondary:
    "bg-[#8c6d51] text-[#e6e4d8] hover:bg-[#22333b] border border-[#8c6d51] hover:border-[#22333b]",
  outline:
    "bg-transparent text-[#22333b] border border-[#22333b] hover:bg-[#22333b] hover:text-[#e6e4d8]",
  ghost:
    "bg-transparent text-[#22333b] hover:text-[#8c6d51] border border-transparent",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium tracking-wide rounded-sm transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
