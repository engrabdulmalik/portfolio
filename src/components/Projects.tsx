import { projects } from "@/data/resume";

const sortedProjects = [...projects].sort(
  (a, b) => Number(b.year || 0) - Number(a.year || 0)
);

// Fixed categorical order — each technology keeps the same color everywhere.
const techColors: Record<string, string> = {
  Python: "#3987e5",
  Django: "#d95926",
  ".NET": "#199e70",
  AI: "#c98500",
  "Team Build": "#d55181",
  React: "#008300",
  "React JS": "#9085e9",
  Laravel: "#e66767",
};
const fallbackTechColor = "#9a9ab0";

// Sequential ramp (older -> newer), one hue light-to-dark.
const yearColors: Record<string, string> = {
  "2022": "#6da7ec",
  "2023": "#5598e7",
  "2024": "#3987e5",
  "2025": "#2a78d6",
  "2026": "#256abf",
};
const fallbackYearColor = "#9a9ab0";

export default function Projects() {
  return (
    <section id="work" className="relative border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-2">
          Selected work
        </h2>
        <p className="mt-4 max-w-xl text-3xl font-semibold tracking-tight">
          Products, platforms &amp; experiments.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProjects.map((p) => {
            const yearColor = yearColors[p.year] ?? fallbackYearColor;
            return (
              <article
                key={p.name}
                className="glass group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold leading-snug">{p.name}</h3>
                  {p.year && (
                    <span
                      className="shrink-0 rounded-full px-2.5 py-1 text-xs font-medium transition-transform duration-300 group-hover:scale-110"
                      style={{
                        color: yearColor,
                        backgroundColor: `${yearColor}1a`,
                        border: `1px solid ${yearColor}4d`,
                      }}
                    >
                      {p.year}
                    </span>
                  )}
                </div>
                <p className="mt-3 flex-1 text-sm text-muted">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => {
                    const color = techColors[s] ?? fallbackTechColor;
                    return (
                      <span
                        key={s}
                        className="rounded-full px-2.5 py-1 text-xs font-medium transition-transform duration-300 hover:scale-110"
                        style={{
                          color,
                          backgroundColor: `${color}1a`,
                          border: `1px solid ${color}4d`,
                        }}
                      >
                        {s}
                      </span>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
