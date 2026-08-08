import { projects } from "@/data/resume";

const sortedProjects = [...projects].sort(
  (a, b) => Number(b.year || 0) - Number(a.year || 0)
);

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
          {sortedProjects.map((p) => (
            <article
              key={p.name}
              className="glass group flex flex-col rounded-2xl p-6 transition-colors hover:border-accent/50"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold leading-snug">{p.name}</h3>
                {p.year && <span className="shrink-0 text-xs text-muted">{p.year}</span>}
              </div>
              <p className="mt-3 flex-1 text-sm text-muted">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
