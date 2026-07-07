type ResourceCardProps = {
  title: string;
  excerpt: string;
  tag: string;
};

export function ResourceCard({ title, excerpt, tag }: ResourceCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800">
        {tag}
      </p>
      <h3 className="mt-4 text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{excerpt}</p>
      <p className="mt-5 text-sm font-bold text-slate-400">Article preview</p>
    </article>
  );
}