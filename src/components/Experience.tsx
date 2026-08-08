import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-2">
          Experience
        </h2>
        <p className="mt-4 max-w-xl text-3xl font-semibold tracking-tight">
          Where I&apos;ve built &amp; taught.
        </p>

        <ol className="mt-14 space-y-10 border-l border-white/10 pl-8">
          {experience.map((job) => (
            <li key={job.company + job.role} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-accent to-accent-2" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">{job.role}</h3>
                <span className="text-xs text-muted">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-accent-2">
                {job.url ? (
                  <a href={job.url} target="_blank" rel="noreferrer" className="hover:underline">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
                {job.location ? ` · ${job.location}` : ""}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
