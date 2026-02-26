"use client";

export default function Navbar() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-semibold tracking-tight">
          Nikhil Oggu
        </a>

        <div className="hidden gap-6 text-sm text-white/80 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white/90 hover:border-white/30"
        >
          Let’s talk
        </a>
      </nav>
    </header>
  );
}