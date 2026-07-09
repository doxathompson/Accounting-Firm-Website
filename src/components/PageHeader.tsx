import { Container } from "@/components/Container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-[#101923] py-16 text-white sm:py-20 lg:py-24">
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            {eyebrow ? (
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-sm">
                {eyebrow}
              </p>
            ) : null}

            <h1 className="max-w-3xl text-4xl font-normal leading-[1.03] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              {title}
            </h1>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}