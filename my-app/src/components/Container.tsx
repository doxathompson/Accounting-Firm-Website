import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
};

export function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const sizes = {
    narrow: "max-w-5xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  };

  return (
    <div
      className={`mx-auto w-full ${sizes[size]} px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 2xl:px-28 ${className}`}
    >
      {children}
    </div>
  );
}