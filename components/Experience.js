"use client";

const experience = [
    {
      company: "SOLTECH",
      title: "Software Engineer",
      period: "Present",
      bullets: [
        "Built and supported full-stack features with a focus on reliability and performance.",
        "Designed scalable APIs and collaborated with DevOps and cross-functional teams.",
        "Improved API performance and contributed to production support and incident resolution.",
      ],
    },
  ];
  
  export default function Experience() {
    return (
      <section id="experience" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Experience</h2>
  
          <div className="mt-8 space-y-6">
            {experience.map((item) => (
              <div key={item.company} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-white/70">{item.company}</p>
                  </div>
                  <p className="text-sm text-white/60">{item.period}</p>
                </div>
  
                <ul className="mt-4 list-disc space-y-2 pl-5 text-white/70">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }