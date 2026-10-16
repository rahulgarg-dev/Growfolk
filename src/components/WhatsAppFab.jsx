import { useState } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { SITE } from '../config.js';

export default function WhatsAppFab() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed right-5 z-40 flex items-center gap-2"
      style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`hidden sm:flex items-center gap-1.5 rounded-full border border-white/15 bg-[#061810]/95 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-all duration-300 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Chat with Rahul on WhatsApp</span>
      </div>

      <a
        href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hi Growfolk! I would like to discuss a project with you.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Growfolk on WhatsApp"
        className="fab-pulse relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-tr from-[#1ea952] to-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
