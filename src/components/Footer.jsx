export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-charcoal border-t border-white/5 py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg text-cream">
          Rifda<span className="text-accent">.</span>
        </span>
        <p className="font-mono text-xs text-muted">
          © {year} Rifda Folawiyo. Designed &amp; Built with care.
        </p>
        <div className="flex gap-5">
          {[
            { label: 'GitHub', href: 'https://github.com/' },
            { label: 'LinkedIn', href: 'https://linkedin.com/' },
            { label: 'Twitter', href: 'https://twitter.com/' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
