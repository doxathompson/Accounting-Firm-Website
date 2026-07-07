import { Container } from "@/components/Container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-[#101923] py-24 text-white sm:py-28">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            {eyebrow ? (
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
                {eyebrow}
              </p>
            ) : null}

            <h1 className="max-w-3xl text-5xl font-normal leading-[1] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
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