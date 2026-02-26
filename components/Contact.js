"use client";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4 max-w-2xl text-white/70">
          Want to talk about an SWE role or a project? Send a message and I’ll
          respond.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <form className="grid gap-4 md:grid-cols-2">
            <input
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-white/30"
              placeholder="Your name"
            />
            <input
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-white/30"
              placeholder="Your email"
            />
            <textarea
              className="min-h-[120px] rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-white/30 md:col-span-2"
              placeholder="Your message"
            />
            <button
              type="button"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 md:col-span-2"
            >
              Send Message (we’ll connect EmailJS later)
            </button>
          </form>

          <div className="mt-6 text-sm text-white/60">
            Add LinkedIn + GitHub links here next.
          </div>
        </div>
      </div>
    </section>
  );
}