import { skills } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-2">
          Skills
        </h2>
        <p className="mt-4 max-w-xl text-3xl font-semibold tracking-tight">
          Tools I reach for when building.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.name} className="glass rounded-xl p-4">
              <p className="text-sm font-medium">{s.name}</p>
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 flex-1 rounded-full ${
                      i < s.level ? "bg-gradient-to-r from-accent to-accent-2" : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
