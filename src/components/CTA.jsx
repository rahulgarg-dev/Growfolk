import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { SITE } from '../config.js';

export default function CTA({
  title = "Ready to start your project?",
  text = 'Tell us what you need and we will outline the scope, timeline, and send a clear quotation before work begins.',
}) {
  return (
    <section className="section pt-0">
      <Reveal className="container-x">
        <div className="rounded-2xl border border-white/10 bg-surface p-8 text-center sm:p-12">
          <h2 className="h2 mx-auto max-w-xl text-white">{title}</h2>
          <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed text-muted sm:text-sm">
            {text}
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
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
        </div>
      </Reveal>
    </section>
  );
}
