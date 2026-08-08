import { profile, affiliation } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="relative border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-2">
              About
            </h2>
            <p className="mt-4 text-3xl font-semibold tracking-tight">
              Engineer &amp; educator, based in {profile.location}.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>

            <div className="glass grid grid-cols-2 gap-6 rounded-2xl p-6 sm:grid-cols-3">
              <Fact label="Based in" value={profile.location} />
              <Fact label="Focus" value="Web & mobile products" />
              <Fact label="Stack" value="React · Django · Laravel" />
              <Fact label="Also" value="Full-stack instructor" />
              <Fact label="Licensed" value={affiliation.id} />
              <Fact label="Since" value={affiliation.since} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 text-sm font-medium">{value}</p>
    </div>
  );
}
