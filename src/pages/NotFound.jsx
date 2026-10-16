import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import usePageMeta from '../usePageMeta.js';

export default function NotFound() {
  usePageMeta('Page not found');
  return (
    <section className="container-x relative grid min-h-[75vh] place-items-center py-28 text-center">
      <div className="drift pointer-events-none absolute h-80 w-80 rounded-full bg-brand/15 blur-[120px]" />
      <div className="relative rounded-3xl border border-white/10 bg-[#061810]/80 p-8 sm:p-14 backdrop-blur-xl shadow-2xl max-w-lg">
        <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-bold text-brand uppercase tracking-wider mb-2">
          Error 404
        </span>
        <p className="font-display text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-brand via-teal-300 to-white/40">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">Page not found</h1>
        <p className="mt-3 text-sm text-muted">
          The link you followed may be broken or the page may have been moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/" className="btn btn-primary flex items-center gap-2">
            <Home size={16} />
            <span>Back to home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
