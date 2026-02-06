import Link from "next/link";

export function PricingCTA() {
  return (
    <section className="py-16 bg-white px-6 text-center">
      <h2 className="text-4xl font-semibold">
        Not sure which package fits you?
      </h2>

      <p className="mt-4 text-lg text-black/60">
        Let’s talk about your story and create something personal.
      </p>

      <Link
        href="/contact"
        className="inline-block mt-10 px-10 py-4 rounded-full bg-black text-white text-sm tracking-wide hover:scale-105 transition"
      >
        Get a Custom Quote
      </Link>
    </section>
  );
}
