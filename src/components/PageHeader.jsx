export default function PageHeader({ title, children, badge = 'Growfolk' }) {
  return (
    <section className="relative overflow-hidden pb-12 pt-28 sm:pb-16 sm:pt-36">
      <div className="container-x relative max-w-3xl">
        {badge && (
          <div className="hero-in inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-0.5 text-xs font-medium text-brand mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            <span>{badge}</span>
          </div>
        )}
        <h1 className="hero-in font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {children && (
          <p className="hero-in mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {children}
          </p>
        )}
      </div>
    </section>
  );
}
