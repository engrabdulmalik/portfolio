import { profile } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-white/5 py-28">
      <div className="glow bottom-0 left-1/2 h-72 w-[36rem] -translate-x-1/2 bg-accent/20" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-2">
          Contact
        </h2>
        <p className="mt-4 text-4xl font-semibold tracking-tight">
          Have a project in mind? <span className="text-gradient">Let&apos;s build it.</span>
        </p>
        <p className="mt-4 text-muted">
          Open to freelance, contract, and full-time full-stack opportunities.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s|-/g, "")}`}
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            {profile.phone}
          </a>
        </div>

        <p className="mt-6 text-sm text-muted">{profile.location}</p>
      </div>
    </section>
  );
}
