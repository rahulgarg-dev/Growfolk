import { useState } from 'react';
import { ChevronDown, Info, ShieldCheck, Check, Sparkles } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import CTA from '../components/CTA.jsx';
import usePageMeta from '../usePageMeta.js';
import { BEFORE, CLARITY, FAQ } from '../data.js';

function FaqItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = `faq-${q.replace(/\W+/g, '-').toLowerCase().slice(0, 30)}`;

  return (
    <div className={`rounded-xl border transition-all duration-300 ${open ? 'border-brand/40 bg-white/[0.04]' : 'border-white/[0.08] bg-surface/40 hover:border-white/20'}`}>
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 p-5 text-left font-display font-bold text-ink transition-colors hover:text-brand"
        >
          <span className="text-sm sm:text-base">{q}</span>
          <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-brand transition-transform duration-300 ${open ? 'rotate-180 bg-brand/15' : ''}`}>
            <ChevronDown size={18} />
          </span>
        </button>
      </h3>
      <div
        id={id}
        role="region"
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-muted border-t border-white/[0.06] pt-3">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  usePageMeta(
    'Pricing',
    'No rigid packages or hidden fees. Growfolk analyzes your requirements first, then provides a tailored written quotation before work begins.'
  );

  return (
    <>
      <PageHeader
        badge="Transparent Pricing"
        title="No rigid packages. Just the exact scope you need."
      >
        Every business model and product is unique. We don't shoehorn you into cookie-cutter bundles. We understand your exact technical requirements first, then propose an honest, scoped investment.
      </PageHeader>

      <section className="relative pb-20 sm:pb-28">
        <div className="container-x">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">Honest Process</span>
            <h2 className="h2 mt-2">Before any work begins</h2>
            <p className="mt-2 text-sm text-muted">
              Here is our 4-step alignment process to ensure zero confusion and 100% accountability.
            </p>
          </Reveal>

          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BEFORE.map((b, i) => (
              <Reveal as="li" key={b.t} delay={i * 80}>
                <div className="card h-full flex flex-col justify-between group hover:border-brand/40">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand/15 border border-brand/30 px-2.5 py-1 font-display text-xs font-bold text-brand">
                      Step 0{i + 1}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-white group-hover:text-brand transition-colors">
                      {b.t}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">{b.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          {/* Project Clarity Banner */}
          <Reveal className="mt-12">
            <div className="rounded-3xl border border-white/10 bg-surface/80 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-2 text-brand">
                <ShieldCheck size={24} />
                <h3 className="font-display text-xl font-bold text-white">Project Clarity & Principles</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-muted max-w-2xl">
                We pride ourselves on clear, ethical terms. Here are the core commitments that apply to all our proposals:
              </p>

              <ul className="mt-6 grid gap-x-10 gap-y-4 text-xs sm:text-sm text-ink/90 md:grid-cols-2">
                {CLARITY.map((c) => (
                  <li key={c} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-black/20 p-3.5">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/20 text-brand mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section relative bg-[#04150e]/60 border-t border-white/[0.06]">
        <div className="container-x max-w-3xl">
          <Reveal className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">Got Questions?</span>
            <h2 className="h2 mt-2">Frequently asked questions</h2>
            <p className="mt-3 text-muted text-sm sm:text-base">
              Everything you need to know about our quotes, scope boundaries, and delivery.
            </p>
          </Reveal>

          <Reveal className="mt-10 space-y-3.5">
            {FAQ.map((f, idx) => (
              <FaqItem key={f.q} {...f} defaultOpen={idx === 0} />
            ))}
          </Reveal>
        </div>
      </section>

      <CTA
        title="Ready for a transparent project quotation?"
        text="Tell us what you need built or fixed. We'll outline the deliverables and provide a fixed quotation before any commitment."
      />
    </>
  );
}
