type TeamCardProps = {
  name: string;
  role: string;
  initials: string;
  bio: string;
};

export function TeamCard({ name, role, initials, bio }: TeamCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100 text-lg font-bold text-slate-800">
        {initials}
      </div>
      <h3 className="mt-5 text-xl font-bold text-slate-950">{name}</h3>
      <p className="mt-1 text-sm font-semibold text-blue-700">{role}</p>
      <p className="mt-4 leading-7 text-slate-600">{bio}</p>
    </article>
  );
}