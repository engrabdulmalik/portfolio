import { education, certifications, publications } from "@/data/resume";

export default function Credentials() {
  return (
    <section id="credentials" className="relative border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-2">
          Credentials
        </h2>
        <p className="mt-4 max-w-xl text-3xl font-semibold tracking-tight">
          Education, certifications &amp; research.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-muted">Education</h3>
            <ul className="mt-4 space-y-5">
              {education.map((e) => (
                <li key={e.degree}>
                  <p className="text-sm font-medium">{e.degree}</p>
                  <p className="text-sm text-muted">{e.school}</p>
                  <p className="mt-1 text-xs text-muted">
                    {e.period} · {e.detail}
                  </p>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-sm font-semibold text-muted">Publications</h3>
            <ul className="mt-4 space-y-4">
              {publications.map((p) => (
                <li key={p.title}>
                  <p className="text-sm leading-snug font-medium">{p.title}</p>
                  <p className="mt-1 text-xs text-muted">
                    {p.venue} · {p.date}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-muted">Certifications</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {certifications.map((c) => (
                <div
                  key={c.name}
                  className="glass flex items-center justify-between gap-3 rounded-xl px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-medium">{c.name}</p>
                    <p className="text-xs text-muted">{c.issuer}</p>
                  </div>
                  <span className="shrink-0 text-xs text-muted">{c.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
