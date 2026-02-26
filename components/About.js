"use client";

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold">About</h2>

        <p className="mt-4 max-w-3xl text-white/70">
          I’m a full-stack software engineer focused on building reliable systems
          and clean user experiences. I enjoy designing APIs, implementing
          authentication/authorization, and building real-time features that
          feel smooth and responsive.
        </p>

        <p className="mt-4 max-w-3xl text-white/70">
          I care about clean structure, readable code, and shipping — the same
          mindset used in production teams.
        </p>
      </div>
    </section>
  );
}