"use client";

export default function Navbar() {
    return (
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="font-semibold tracking-tight">
            Nikhil Oggu
          </a>
  
          <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
  
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/90 hover:border-white/30"
          >
            Let’s talk
          </a>
        </div>
      </nav>
    );
}