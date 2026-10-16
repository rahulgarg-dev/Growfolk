// Wordmark by default; pass mark to show only the G icon.
export default function Logo({ mark = false, className = 'h-8 sm:h-9' }) {
  return mark ? (
    <img src="/logo-mark.png" alt="Growfolk" className={`w-auto ${className}`} />
  ) : (
    <img
      src="/logo.png"
      alt="Growfolk"
      width="640"
      height="132"
      className={`w-auto object-contain ${className}`}
    />
  );
}
