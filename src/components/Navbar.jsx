import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo.jsx';
import { NAV } from '../config.js';

const linkCls = ({ isActive }) =>
  `rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
    isActive
      ? 'bg-white/[0.08] text-white font-semibold'
      : 'text-muted hover:text-ink hover:bg-white/[0.04]'
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'glass-nav shadow-md py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            aria-label="Growfolk home"
            className="flex items-center transition-opacity hover:opacity-90 active:scale-95 py-0.5"
          >
            <Logo className="h-7 sm:h-8" />
          </Link>
          <span className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Taking New Projects
          </span>
        </div>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'} className={linkCls}>
              {n.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary ml-3 !min-h-[40px] !px-4 text-xs sm:text-sm font-semibold"
          >
            <span>Get a quote</span>
          </Link>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-ink transition hover:border-white/20 hover:text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="container-x mt-3 flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#0d1411] p-4 shadow-xl md:hidden"
        >
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={(s) => `${linkCls(s)} !py-2.5 flex items-center justify-between`}
            >
              <span>{n.label}</span>
              <ArrowRight size={14} className="opacity-40" />
            </NavLink>
          ))}
          <div className="pt-2 border-t border-white/10 mt-1">
            <Link
              to="/contact"
              className="btn btn-primary w-full text-center flex items-center justify-center"
            >
              Get a quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
