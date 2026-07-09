import Link from "next/link";
import type { Service } from "@/data/site";

type ServiceCardProps = {
  service: Service;
  detailed?: boolean;
};

export function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  return (
    <article className="group border border-[#E5E1D8] bg-[#FAF9F4] p-7 transition hover:bg-white">
      <div className="flex h-10 w-10 items-center justify-center bg-[#0F2742] text-sm font-semibold text-white">
        +
      </div>

      <h3 className="mt-7 font-serif text-2xl font-normal leading-tight tracking-tight text-[#111827]">
        {service.title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-[#4B5563]">{service.short}</p>

      {detailed ? (
        <div className="mt-8 space-y-6 border-t border-[#E5E1D8] pt-6">
          <div>
            <p className="text-sm font-semibold text-[#111827]">
              Who it is for
            </p>
            <p className="mt-2 text-sm leading-6 text-[#4B5563]">
              {service.who}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#111827]">
              How we help
            </p>
            <p className="mt-2 text-sm leading-6 text-[#4B5563]">
              {service.how}
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex text-sm font-semibold text-[#111827] underline underline-offset-4 transition hover:opacity-70"
          >
            Book a free consultation
          </Link>
        </div>
      ) : (
        <Link
          href="/services"
          className="mt-7 inline-flex text-sm font-semibold text-[#111827] underline underline-offset-4 transition hover:opacity-70"
        >
          Learn more
        </Link>
      )}
    </article>
  );
}