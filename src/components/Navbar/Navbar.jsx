import { useEffect, useState } from "react";
import Dialog from "../Dialog";
const links = [
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["certificates", "Certificates"],
  ["contact", "Contact"],
];
export default function Navbar({ toggleTheme, isDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const query = matchMedia("(min-width: 900px)");
    const close = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    query.addEventListener("change", close);
    return () => query.removeEventListener("change", close);
  }, []);
  return (
    <header className="site-header">
      <nav className="site-container nav" aria-label="Main navigation">
        <a className="wordmark" href="#hero" aria-label="Hero Park, home">
          HDP.
        </a>
        <div className="desktop-links">
          {links.map(([id, title]) => (
            <a key={id} href={`#${id}`}>
              {title}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
          >
            <span aria-hidden="true">{isDarkMode ? "☀" : "☾"}</span>
          </button>
          <a
            className="button nav-cv"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View CV ↗<span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
          <button
            className="button mobile-menu"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>
        </div>
      </nav>
      {menuOpen && (
        <Dialog
          onClose={() => setMenuOpen(false)}
          labelId="menu-title"
          className="menu-dialog"
        >
          <h2 id="menu-title">Explore</h2>
          <nav aria-label="Mobile navigation" className="mobile-links">
            {links.map(([id, title]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {title}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              View CV ↗
              <span className="sr-only"> (PDF, opens in a new tab)</span>
            </a>
          </nav>
        </Dialog>
      )}
    </header>
  );
}
