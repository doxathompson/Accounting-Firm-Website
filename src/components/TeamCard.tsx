import Image from "next/image";

type TeamCardProps = {
  name: string;
  role: string;
  initials: string;
  image?: string;
  bio: string;
};

export function TeamCard({ name, role, initials, image, bio }: TeamCardProps) {
  return (
    <article className="bg-[#FAF9F4]">
      <div className="relative h-80 overflow-hidden bg-[#DED8CC]">
        {image ? (
          <Image
            src={image}
            alt={`${name}, ${role}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-2xl font-semibold text-[#111827]">
            {initials}
          </div>
        )}
      </div>

      <div className="border border-t-0 border-[#E5E1D8] p-6">
        <h3 className="text-xl font-semibold text-[#111827]">{name}</h3>
        <p className="mt-1 text-sm font-medium text-[#4B5563]">{role}</p>
        <p className="mt-4 text-sm leading-6 text-[#4B5563]">{bio}</p>
      </div>
    </article>
  );
}