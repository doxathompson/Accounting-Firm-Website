import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const styles = {
    primary:
      "bg-[#0F2742] text-white hover:bg-[#173B5C] focus-visible:outline-[#0F2742]",
    secondary:
      "border border-[#D8D3C8] bg-[#FAF9F4] text-[#111827] hover:bg-white focus-visible:outline-[#101923]",
    ghost:
      "text-[#111827] hover:opacity-70 focus-visible:outline-[#101923]",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}