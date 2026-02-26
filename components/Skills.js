"use client";

const SKILLS = {
  Backend: ["Java", "Spring Boot", "Node.js", "Express", ".NET (C#)"],
  Frontend: ["React", "Next.js", "HTML", "CSS", "Tailwind", "Bootstrap"],
  Databases: ["MySQL", "MongoDB", "SQL Server", "SQLite"],
  "Cloud/DevOps": ["AWS", "Git", "GitHub", "CI/CD", "Render", "Vercel"],
};

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold">Skills</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div
              key={group}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}