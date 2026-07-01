import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/Caleb_Pickens_Resume.pdf", label: "Resume", external: true },
];

const linkClass = "font-medium text-text hover:text-primary transition-colors";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 bg-white border-b border-accent">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-primary tracking-tight">
          Caleb Pickens
        </Link>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.href}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
