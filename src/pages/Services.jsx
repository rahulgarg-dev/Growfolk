import { Link } from 'react-router-dom';
import { Check, ArrowRight, MessageCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import CTA from '../components/CTA.jsx';
import usePageMeta from '../usePageMeta.js';
import { SERVICES } from '../data.js';
import { SITE } from '../config.js';

export default function Services() {
  usePageMeta(
    'Services',
    'Website development, software and web apps, bug fixing, testing and QA, SEO and performance, maintenance and support.'
  );

  return (
    <>
      <PageHeader
        badge="Services"
        title="Technical capabilities built around your goals"
      >
        We combine modern web development with practical engineering. Whether you are launching a new product from scratch or upgrading an existing platform, we build for long-term reliability.
      </PageHeader>

      <section className="pb-20 sm:pb-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, lead, points }, i) => (
            <Reveal key={title} delay={(i % 2) * 60}>
              <article className="card h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center gap-3.5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.04] text-brand border border-white/10 group-hover:bg-brand group-hover:text-[#05140e] transition-all duration-200">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h2 className="font-display text-lg font-bold text-white group-hover:text-brand transition-colors">
                        {title}
                      </h2>
                      <p className="text-xs text-muted mt-0.5">{lead}</p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5 text-xs sm:text-sm">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-ink/90">
                        <Check size={14} className="mt-1 text-brand shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-muted">Fixed-scope quote</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                  >
                    <span>Request quotation</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Clean custom requirements callout banner */}
        <Reveal className="container-x mt-8">
          <div className="rounded-2xl border border-white/10 bg-surface/60 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-base font-bold text-white">
                Have a unique requirement or custom integration?
              </h3>
              <p className="mt-1 text-xs text-muted max-w-xl">
                We handle custom APIs, database optimizations, third-party syncs, and specialized web tools. Let's discuss your scope.
              </p>
            </div>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost shrink-0 flex items-center gap-2 !min-h-[40px] text-xs font-semibold"
            >
              <MessageCircle size={15} className="text-brand" />
              <span>Discuss requirement</span>
            </a>
          </div>
        </Reveal>
      </section>

      <CTA />
    </>
  );
}
