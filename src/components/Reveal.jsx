import { useEffect, useRef, useState } from 'react';

// Fades content in once when it scrolls into view. Falls back to visible if IntersectionObserver is missing.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setShown(true); return; }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} style={{ '--d': `${delay}ms` }} className={`reveal ${shown ? 'in' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
