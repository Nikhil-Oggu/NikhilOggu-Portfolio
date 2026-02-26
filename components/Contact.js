"use client";

export default function Contact() {
    return (
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Contact</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Want to talk about an SWE role or a project? Send a message and I Will respond.
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
                className="md:col-span-2 min-h-30 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-white/30"
                placeholder="Your message"
              />
              <button
                type="button"
                className="md:col-span-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
              >
                Send Message (we’ll wire EmailJS later)
              </button>
            </form>
  
            <div className="mt-6 text-sm text-white/60">
              Or reach me on LinkedIn / GitHub (we’ll add links).
            </div>
          </div>
        </div>
      </section>
    );
  }