"use client";

const projects = [
    {
      name: "Real-time Video Calling Platform",
      summary:
        "WebRTC video calling with authentication, live chat, meeting rooms, and Socket.IO signaling.",
      tags: ["React", "WebRTC", "Socket.IO", "Node", "MongoDB"],
    },
    {
      name: "Stock Trading Platform (Zerodha-inspired)",
      summary:
        "Full-stack trading simulator with auth, portfolio management, and real-time price updates.",
      tags: ["React", "Node", "Express", "MongoDB/MySQL", "APIs"],
    },
    {
      name: "Travel & Tourism Platform (RBAC)",
      summary:
        "Role-based platform with User/Provider/Admin flows, bookings, listings, and analytics reports.",
      tags: [".NET 8", "Angular", "SQL Server", "RBAC"],
    },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Projects</h2>
          <p className="mt-3 max-w-3xl text-white/70">
            Top projects with real-time features, authentication, and production-style structure.
            We’ll add expandable buttons (Architecture / Challenges / Tech Stack / Why) next.
          </p>
  
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium">{p.name}</h3>
                <p className="mt-3 text-sm text-white/70">{p.summary}</p>
  
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
  
                <div className="mt-6 flex gap-3 text-sm">
                  <button className="rounded-full border border-white/15 px-4 py-2 text-white/90 hover:border-white/30">
                    Details
                  </button>
                  <button className="rounded-full border border-white/15 px-4 py-2 text-white/90 hover:border-white/30">
                    Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }