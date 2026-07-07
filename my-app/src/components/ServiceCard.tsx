import Link from "next/link";
import type { Service } from "@/data/site";

type ServiceCardProps = {
  service: Service;
  detailed?: boolean;
};

export function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{service.short}</p>

      {detailed ? (
        <div className="mt-6 space-y-5">
          <div>
            <p className="text-sm font-bold text-slate-950">Who it is for</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{service.who}</p>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-950">How we help</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{service.how}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex text-sm font-bold text-blue-700 hover:text-blue-900"
          >
            Book a free consultation →
          </Link>
        </div>
      ) : (
        <Link
          href="/services"
          className="mt-5 inline-flex text-sm font-bold text-blue-700 hover:text-blue-900"
        >
          Learn more →
        </Link>
      )}
    </article>
  );
}