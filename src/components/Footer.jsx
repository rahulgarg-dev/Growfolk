import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import Logo from './Logo.jsx';
import { NAV, SITE } from '../config.js';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070c0a] pb-20 pt-12 sm:pb-12">
      <div className="container-x grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-block transition-opacity hover:opacity-90" aria-label="Growfolk home">
            <Logo className="h-8" />
          </Link>
          <p className="mt-3.5 max-w-sm text-xs leading-relaxed text-muted sm:text-sm">
            Websites, custom software and technical engineering built around your business goals. Get discovered, establish trust, and operate smarter.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand hover:bg-brand/20 transition-colors"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Direct</span>
            </a>
            <a
              href={`tel:+91${SITE.phone}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-muted hover:text-white transition-colors"
            >
              <Phone size={14} />
              <span>+91 {SITE.phone}</span>
            </a>
          </div>
        </div>

        <nav aria-label="Footer Navigation">
          <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-brand">
            Navigation
          </h3>
          <ul className="mt-3.5 space-y-2 text-xs sm:text-sm text-muted">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="hover:text-white transition-colors"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-brand font-medium hover:underline"
              >
                <span>Request Quotation</span>
                <ArrowUpRight size={13} />
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-brand">
            Direct Contacts
          </h3>
          <ul className="mt-3.5 space-y-2.5 text-xs sm:text-sm text-muted">
            <li>
              <span className="block text-[11px] text-muted/60">Lead Developer / Owner</span>
              <a href="mailto:rahul@growfolk.in" className="font-medium text-ink hover:text-brand transition-colors">
                rahul@growfolk.in
              </a>
            </li>
            <li>
              <span className="block text-[11px] text-muted/60">Business Development</span>
              <a href="mailto:vanita@growfolk.in" className="font-medium text-ink hover:text-brand transition-colors">
                vanita@growfolk.in
              </a>
            </li>
            <li>
              <span className="block text-[11px] text-muted/60">Location & Availability</span>
              <span className="text-ink">India • Serving global clients</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-muted sm:flex-row">
        <p>© 2025 Growfolk. All rights reserved.</p>
        <p className="text-muted/60">
          Engineered for performance &amp; precision
        </p>
      </div>
    </footer>
  );
}
