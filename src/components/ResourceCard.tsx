import Image from "next/image";

type ResourceCardProps = {
  title: string;
  excerpt: string;
  tag: string;
  image?: string;
};

export function ResourceCard({ title, excerpt, tag, image }: ResourceCardProps) {
  return (
    <article className="overflow-hidden border border-[#E5E1D8] bg-[#FAF9F4]">
      {image ? (
        <div className="relative h-56 bg-[#DED8CC]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="p-6">
        <p className="inline-flex bg-[#E8E3D8] px-3 py-1 text-xs font-semibold text-[#111827]">
          {tag}
        </p>

        <h3 className="mt-5 text-xl font-normal leading-tight tracking-[-0.03em] text-[#111827]">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-6 text-[#4B5563]">{excerpt}</p>

        <p className="mt-6 text-sm font-semibold text-[#111827]">
          Article preview
        </p>
      </div>
    </article>
  );
}