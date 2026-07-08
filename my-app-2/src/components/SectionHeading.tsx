type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }
    >
      {eyebrow ? (
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-[#4B5563]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-4xl font-normal leading-[1.05] tracking-[-0.05em] text-[#111827] sm:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-6 max-w-2xl text-base leading-7 text-[#4B5563] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}