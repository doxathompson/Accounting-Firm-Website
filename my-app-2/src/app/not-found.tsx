import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="bg-[#F6F4EE] py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-[#4B5563]">
            Page not found
          </p>

          <h1 className="text-5xl font-normal leading-[1.02] tracking-[-0.05em] text-[#111827] sm:text-6xl">
            This page seems to have wandered off.
          </h1>

          <p className="mt-6 text-base leading-7 text-[#4B5563]">
            The page you are looking for does not exist, may have moved, or is
            hiding somewhere in the great filing cabinet of the internet.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/">Back to home</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Book a free consultation
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}