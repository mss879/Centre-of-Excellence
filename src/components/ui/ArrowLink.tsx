import Link from "next/link";
import type { ReactNode } from "react";

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 9h13.5M10.5 4 15.5 9l-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  variant?: "default" | "filled" | "light";
  className?: string;
}

/** Harvard-style circular arrow call-to-action. */
export default function ArrowLink({
  href,
  children,
  variant = "default",
  className = "",
}: ArrowLinkProps) {
  const variantClass =
    variant === "filled"
      ? "btn-circle--filled"
      : variant === "light"
        ? "btn-circle--light"
        : "";
  return (
    <Link href={href} className={`btn-circle ${variantClass} ${className}`}>
      <span className="btn-circle__disc">
        <ArrowIcon />
      </span>
      <span>{children}</span>
    </Link>
  );
}
