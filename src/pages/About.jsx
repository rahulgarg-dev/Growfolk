import { Mail, Check } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import CTA from '../components/CTA.jsx';
import usePageMeta from '../usePageMeta.js';
import { SITE } from '../config.js';
import { AUDIENCE, PRINCIPLES, STEPS } from '../data.js';

const initials = (n) =>
  n
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);

export default function About() {
  usePageMeta(
    'About',
    'Meet Growfolk: an engineering-driven digital studio for websites, software and technical solutions built around your business goals.'
  );

  return (
    <>
      <PageHeader
        badge="About Growfolk"
        title="Websites, software and solutions built for your goals"
      >
        From establishing a credible online presence to debugging, testing, and modernizing existing digital platforms, we help businesses advance with clarity and confidence.
      </PageHeader>

      {/* TEAM SECTION */}
      <section className="pb-16 sm:pb-24">
        <div className="container-x">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Team</span>
            <h2 className="h2 mt-1">The people who build your software</h2>
          </Reveal>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {SITE.people.map((p, i) => (
              <Reveal key={p.email} delay={i * 80}>
                <div className="card flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/[0.04] border border-white/10 font-display text-sm font-bold text-brand">
                    {initials(p.name)}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-bold text-white">
                      {p.name}
                    </h3>
                    <p className="text-xs text-muted mt-0.5">{p.role}</p>
                    <a
                      href={`mailto:${p.email}`}
                      className="mt-1 inline-flex items-center gap-1.5 break-all text-xs text-brand hover:underline"
                    >
                      <Mail size={12} className="shrink-0" />
                      <span>{p.email}</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK / STEP PROCESS */}
      <section className="section bg-[#070c09] border-y border-white/[0.06]">
        <div className="container-x">
          <Reveal className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Workflow</span>
            <h2 className="h2 mt-1">How we work together</h2>
            <p className="mt-2 text-xs sm:text-sm text-muted">
              A transparent delivery roadmap that keeps decisions clear and work on schedule.
            </p>
          </Reveal>

          <ol className="mt-10 space-y-0">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.t} delay={50} className="relative flex gap-5 pb-7 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/[0.04] border border-white/10 font-display text-xs font-bold text-brand">
                    0{i + 1}
                  </span>
                  {i < STEPS.length - 1 && <span className="mt-2 w-px flex-1 bg-white/10" />}
                </div>
                <div className="pb-1 pt-0.5">
                  <h3 className="font-display text-sm font-bold text-white">{s.t}</h3>
                  <p className="mt-1 max-w-xl text-xs text-muted leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* AUDIENCE & PRINCIPLES */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr] items-start">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">Audience</span>
              <h2 className="h2 mt-1">Who we support</h2>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {AUDIENCE.map(({ icon: Icon, t, d }, i) => (
                <div key={t} className="card !p-4">
                  <Icon size={18} className="text-brand" />
                  <h3 className="mt-2.5 font-display font-bold text-white text-sm">{t}</h3>
                  <p className="mt-1 text-xs text-muted leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <Reveal delay={80}>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Values</span>
            <h2 className="h2 mt-1">Our principles</h2>
            <div className="mt-6 space-y-3">
              {PRINCIPLES.map((p, idx) => (
                <div key={p.t} className="card !p-4">
                  <h3 className="font-display font-bold text-white text-sm">{p.t}</h3>
                  <p className="mt-1 text-xs text-muted leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
