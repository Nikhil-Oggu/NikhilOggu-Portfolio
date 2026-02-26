"use client";

export default function Hero() {
    return (
      <section id="hero" className="min-h-screen px-6 pt-28">
        <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-6xl flex-col justify-center gap-6">
          <p className="text-sm uppercase tracking-widest text-white/60">
            SWE II Ready • Full-Stack Engineer
          </p>
  
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Building scalable, real-time, production-ready web systems.
          </h1>
  
          <p className="max-w-2xl text-lg text-white/70">
            I build full-stack applications with clean architecture, secure authentication,
            and performance in mind — from APIs to UI.
          </p>
  
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white hover:border-white/30"
            >
              Contact Me
            </a>
          </div>
  
          <div className="pt-8 text-sm text-white/60">
            Java • Spring Boot • React • Node • .NET • SQL • AWS
          </div>
        </div>
      </section>
    );
  }