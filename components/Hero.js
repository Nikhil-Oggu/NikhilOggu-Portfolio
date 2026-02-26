"use client";

export default function Hero() {
  return (
    <section id="hero" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-widest text-white/60">
          SWE II Ready • Full-Stack Engineer
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Building fast, clean, production-ready web apps.
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-white/70">
          I ship full-stack features end-to-end — UI, APIs, auth, real-time
          systems, and deployment — with performance and maintainability in mind.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:border-white/30"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 text-sm text-white/60">
          Java • Spring Boot • React • Next.js • Node • SQL • AWS • Git
        </div>
      </div>
    </section>
  );
}