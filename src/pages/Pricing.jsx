import { useState } from 'react';
import {
  ChevronDown,
  ShieldCheck,
  Check,
  Layers,
  Palette,
  Plug,
  FileText,
  RefreshCw,
  Clock,
} from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import CTA from '../components/CTA.jsx';
import usePageMeta from '../usePageMeta.js';
import { BEFORE, CLARITY, FAQ } from '../data.js';

// What drives the price of a project. Edit the wording to match how you actually quote.
const PRICE_FACTORS = [
  {
    icon: Layers,
    t: 'Scope and size',
    d: 'A 5-page business website and a multi-role web app are very different projects. More pages, screens and features mean more design, build and testing time.',
  },
  {
    icon: Palette,
    t: 'Design approach',
    d: 'A clean, template-based layout costs less than a fully custom design with its own brand look and feel.',
  },
  {
    icon: Plug,
    t: 'Integrations',
    d: 'Payment gateways, WhatsApp, booking tools, CRMs and third-party APIs each need setup and testing, so they are listed as separate line items.',
  },
  {
    icon: FileText,
    t: 'Content readiness',
    d: 'Ready logo, photos and text keep a project fast. If we need to help structure or write content, it is scoped and quoted on its own.',
  },
  {
    icon: RefreshCw,
    t: 'Revisions and timeline',
    d: 'Agreed feedback rounds keep costs predictable. If you need a very tight deadline, we will say so in the quote.',
  },
  {
    icon: Clock,
    t: 'Support after launch',
    d: 'Maintenance, updates and monitoring are quoted separately, so you only pay for the support you actually need.',
  },
];

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
    'Pricing: Fixed-Scope Quotes for Websites & Software',
    'Growfolk uses fixed-scope written quotes for websites, custom software and web apps. See what affects your price and how our quotation process works.'
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

          {/* What affects your quote */}
          <Reveal className="mt-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">How we quote</span>
            <h2 className="h2 mt-2">What affects the price of your project</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted leading-relaxed">
              Whether you need a business website, a custom web application or a fix for an existing product, your written quotation is built from the factors below. You see every line item before you commit.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRICE_FACTORS.map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 60}>
                <div className="card h-full group hover:border-brand/40">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-brand">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-white group-hover:text-brand transition-colors">
                    {t}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-6">
            <p className="text-sm text-muted">
              Not sure what you need yet? Browse our{' '}
              <a href="/services" className="font-semibold text-brand hover:underline">
                website and software services
              </a>{' '}
              or{' '}
              <a href="/contact" className="font-semibold text-brand hover:underline">
                tell us about your project
              </a>{' '}
              and we will help you define the scope.
            </p>
          </Reveal>

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