import { profile } from "@/data/resume";

const stats = [
  { value: "8+", label: "Years building software" },
  { value: "15+", label: "Years in tech leadership" },
  { value: "10+", label: "Shipped products" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="glow -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 bg-accent/30" />
      <div className="glow top-20 right-0 h-72 w-72 bg-accent-2/20" />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Available for freelance &amp; contract work
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
          I build <span className="text-gradient">full‑stack products</span> that ship.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-muted">{profile.tagline}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            View my work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Start a project
          </a>
        </div>

        <dl className="mt-20 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-3xl font-semibold text-gradient">{s.value}</dt>
              <dd className="mt-1 text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
