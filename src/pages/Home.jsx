import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Check,
  CheckCircle2,
} from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import CTA from '../components/CTA.jsx';
import usePageMeta from '../usePageMeta.js';
import { SITE } from '../config.js';
import { AUDIENCE, PRINCIPLES, SERVICES, STEPS } from '../data.js';

function HeroShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none" aria-hidden="true">
      {/* Subtle ambient back glow */}
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-brand/10 blur-2xl opacity-60" />

      {/* Clean image showcase frame */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1411] shadow-2xl">
        {/* Subtle browser top bar */}
        <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#070b09] px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <span className="text-[11px] font-mono text-muted/60">growfolk.in/showcase</span>
          <span className="text-[10px] font-medium text-brand">Live Studio</span>
        </div>

        {/* High-res generated showcase visual */}
        <img
          src="/hero-showcase.jpg"
          alt="Growfolk Modern Software and Web Platform Showcase"
          width="800"
          height="600"
          className="w-full object-cover select-none transition-transform duration-500 hover:scale-[1.01]"
          loading="eager"
        />

        {/* Clean floating status chip */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-[#090e0c]/90 px-3.5 py-2.5 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-white">Custom Web & Software Systems</span>
          </div>
          <span className="text-[11px] text-muted">Fixed Scope</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  usePageMeta(
    '',
    'Growfolk builds modern websites, custom software and digital solutions that help businesses grow, operate better and reach more people.'
  );

  return (
    <>
      {/* CLEAN HERO SECTION */}
      <section className="relative overflow-hidden pb-16 pt-28 sm:pt-36 lg:pb-24">
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="hero-in inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3.5 py-1 text-xs font-medium text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span>Digital Solutions for Modern Businesses</span>
            </div>

            <h1 className="hero-in mt-4 font-display text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl text-white">
              Websites &amp; software built for <span className="text-brand">real results</span>
            </h1>

            <p className="hero-in mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              We design and engineer modern websites, custom software, and digital solutions that help businesses establish credibility and operate smoothly.
            </p>

            <div className="hero-in mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn btn-primary flex items-center justify-center gap-2">
                <span>Start your project</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} className="text-brand" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Clean Metrics Bar */}
            <div className="hero-in mt-10 grid grid-cols-3 gap-4 border-t border-white/[0.08] pt-6">
              <div>
                <p className="font-display text-xl font-bold text-white">100%</p>
                <p className="text-xs text-muted mt-0.5">Fixed Scope</p>
              </div>
              <div>
                <p className="font-display text-xl font-bold text-white">&lt; 4 Hours</p>
                <p className="text-xs text-muted mt-0.5">Response Time</p>
              </div>
              <div>
                <p className="font-display text-xl font-bold text-brand">Direct</p>
                <p className="text-xs text-muted mt-0.5">Founder Support</p>
              </div>
            </div>
          </div>

          <HeroShowcase />
        </div>
      </section>

      {/* CLEAN SERVICES SECTION */}
      <section className="section border-t border-white/[0.06]">
        <div className="container-x">
          <Reveal className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">Services</span>
              <h2 className="h2 mt-1">What we build &amp; solve</h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
            >
              <span>View all services</span>
              <ArrowRight size={14} />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ icon: Icon, title, lead, points }, i) => (
              <Reveal key={title} delay={(i % 3) * 70}>
                <Link
                  to="/services"
                  className="card block h-full group"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.04] text-brand border border-white/10 group-hover:bg-brand group-hover:text-[#05140e] transition-all duration-200">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-white group-hover:text-brand transition-colors">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">{lead}</p>
                  <div className="mt-4 pt-3 border-t border-white/[0.06] text-xs text-brand font-medium">
                    {points.length} capabilities included
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLEAN PROCESS / STEPS */}
      <section className="section bg-[#070c09] border-y border-white/[0.06]">
        <div className="container-x">
          <Reveal className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Delivery</span>
            <h2 className="h2 mt-1">A transparent, predictable process</h2>
            <p className="mt-2 text-xs sm:text-sm text-muted">
              Every project follows an agreed scope and straightforward checkpoints.
            </p>
          </Reveal>

          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.t} delay={(i % 3) * 70} className="card !p-5">
                <span className="text-xs font-mono font-bold text-brand">Step 0{i + 1}</span>
                <h3 className="mt-2 font-display font-bold text-white">{s.t}</h3>
                <p className="mt-1 text-xs text-muted leading-relaxed">{s.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CLEAN AUDIENCE & PRINCIPLES */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-start">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Clients</span>
            <h2 className="h2 mt-1">Who we work with</h2>
            <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
              {AUDIENCE.map(({ icon: Icon, t, d }) => (
                <div key={t} className="card !p-4">
                  <Icon size={18} className="text-brand" />
                  <p className="mt-2.5 font-display text-sm font-bold text-white">{t}</p>
                  <p className="mt-1 text-xs text-muted leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={90}>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Principles</span>
            <h2 className="h2 mt-1">Our commitments</h2>
            <div className="mt-6 space-y-3">
              {PRINCIPLES.map((p, idx) => (
                <div key={p.t} className="card !p-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/15 text-[11px] font-bold text-brand">
                      {idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-white text-sm">{p.t}</h3>
                  </div>
                  <p className="mt-1.5 text-xs text-muted pl-7 leading-relaxed">{p.d}</p>
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
