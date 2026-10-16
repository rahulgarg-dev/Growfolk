import { Mail, MessageCircle, Phone, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import ContactForm from '../components/ContactForm.jsx';
import usePageMeta from '../usePageMeta.js';
import { SITE } from '../config.js';

const Item = ({ icon: Icon, label, value, href, ext }) => (
  <a
    href={href}
    {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className="card flex items-center gap-3.5 !p-3.5 hover:border-brand/40 transition-colors"
  >
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.04] text-brand border border-white/10">
      <Icon size={18} />
    </span>
    <span className="min-w-0">
      <span className="block text-[11px] text-muted">{label}</span>
      <span className="break-all font-semibold text-xs sm:text-sm text-ink">{value}</span>
    </span>
  </a>
);

export default function Contact() {
  usePageMeta(
    'Contact',
    'Tell Growfolk about your project. We define the scope and provide a tailored written quotation before work begins.'
  );

  return (
    <>
      <PageHeader
        badge="Contact Us"
        title="Let's talk about your project"
      >
        Tell us what you're looking to build, debug, or improve. We will review your requirements, define the scope, and provide a clear quotation before work begins.
      </PageHeader>

      <section className="pb-20 sm:pb-28">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.6fr] items-start">
          {/* Left Column: Direct channels */}
          <Reveal className="space-y-4">
            <div className="space-y-2.5">
              <Item
                icon={Phone}
                label="Direct Phone / WhatsApp"
                value={`+91 ${SITE.phone}`}
                href={`tel:+91${SITE.phone}`}
              />
              <Item
                icon={MessageCircle}
                label="Direct WhatsApp Chat"
                value="Message Rahul directly"
                href={`https://wa.me/${SITE.whatsapp}`}
                ext
              />
              {SITE.people.map((p) => (
                <Item
                  key={p.email}
                  icon={Mail}
                  label={`${p.name} • ${p.role}`}
                  value={p.email}
                  href={`mailto:${p.email}`}
                />
              ))}
            </div>

            {/* Clean timeline card */}
            <div className="card !p-5">
              <h3 className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-brand">
                <Clock size={15} />
                <span>What to expect</span>
              </h3>
              <ol className="mt-3.5 space-y-2.5 text-xs text-muted">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-brand font-bold">1.</span>
                  <span><strong className="text-ink">Prompt Review:</strong> We respond within 4 business hours.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-brand font-bold">2.</span>
                  <span><strong className="text-ink">Written Scope:</strong> Clear itemized quotation with milestones.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-brand font-bold">3.</span>
                  <span><strong className="text-ink">Kickoff:</strong> Work begins immediately upon agreement.</span>
                </li>
              </ol>
            </div>
          </Reveal>

          {/* Right Column: Clean Form Container */}
          <Reveal delay={80}>
            <div className="rounded-2xl border border-white/10 bg-surface/80 p-6 sm:p-8 backdrop-blur-md">
              <div className="mb-5 border-b border-white/[0.08] pb-4">
                <h2 className="font-display text-xl font-bold text-white">
                  Send Project Enquiry
                </h2>
                <p className="mt-1 text-xs text-muted">
                  Fill in your details below and we will get back to you with custom recommendations.
                </p>
              </div>

              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
