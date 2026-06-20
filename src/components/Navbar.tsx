import { useState } from "react";
import { Link } from "react-router";
import { navigationConfig, siteConfig } from "@/config";

interface NavbarProps {
  variant?: "home" | "info";
}

export default function Navbar({ variant = "home" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isInfo = variant === "info";
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`site-navbar${isInfo ? " site-navbar--info" : ""}`} aria-label="Navegación principal">
      <style>{`
        .site-navbar {
          position: fixed;
          inset: 0 0 auto;
          z-index: 50;
          min-height: 72px;
          padding: 7px clamp(20px, 3vw, 48px);
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          background: rgba(255, 255, 255, 0.84);
          border-bottom: 1px solid rgba(16, 42, 74, 0.1);
          box-shadow: 0 8px 30px rgba(18, 69, 120, 0.05);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .site-navbar--info {
          grid-template-columns: 1fr auto 1fr;
        }

        .site-brand {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          transition: opacity 180ms ease, transform 180ms ease;
        }

        .site-brand:hover {
          opacity: 0.78;
          transform: translateY(-1px);
        }

        .site-brand__logo {
          display: block;
          width: auto;
          height: 56px;
          max-width: min(260px, 48vw);
          object-fit: contain;
        }

        .site-navbar__links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(22px, 3vw, 38px);
        }

        .site-navbar__link {
          color: #102a4a;
          font: 500 13px/1 system-ui, -apple-system, sans-serif;
          letter-spacing: 0.035em;
          text-decoration: none;
          transition: opacity 180ms ease;
        }

        .site-navbar__link:hover { opacity: 0.58; }
        .site-navbar__back { justify-self: end; }

        .site-navbar__toggle {
          display: none;
          width: 40px;
          height: 40px;
          padding: 8px;
          border: 0;
          background: transparent;
          color: #102a4a;
          cursor: pointer;
        }

        .site-navbar__toggle svg { width: 24px; height: 24px; }

        @media (max-width: 860px) {
          .site-navbar,
          .site-navbar--info {
            min-height: 60px;
            padding: 8px 18px;
            grid-template-columns: 1fr auto auto;
            gap: 8px;
          }

          .site-brand__logo {
            height: 44px;
            max-width: min(210px, 52vw);
          }

          .site-navbar__toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          .site-navbar__links {
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            display: grid;
            gap: 0;
            max-height: 0;
            overflow: hidden;
            background: rgba(248, 252, 255, 0.98);
            border-bottom: 1px solid rgba(16, 42, 74, 0.1);
            transition: max-height 220ms ease;
          }

          .site-navbar__links.open { max-height: 180px; }

          .site-navbar__links .site-navbar__link {
            padding: 16px 24px;
            text-align: center;
            border-top: 1px solid rgba(16, 42, 74, 0.07);
          }

          .site-navbar__back { font-size: 12px; }
        }
      `}</style>

      <Link to="/" className="site-brand" onClick={closeMenu} aria-label={`${siteConfig.brandName}, inicio`}>
        <img className="site-brand__logo" src="/assets/logo.png" alt={siteConfig.brandName} />
      </Link>

      {isInfo ? (
        <>
          <button
            type="button"
            className="site-navbar__toggle"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>

          <div className={`site-navbar__links${isMenuOpen ? " open" : ""}`}>
            <a href="#about" className="site-navbar__link" onClick={closeMenu}>Sobre mí</a>
            <a href="#contact" className="site-navbar__link" onClick={closeMenu}>Contacto</a>
          </div>

          <Link to="/" className="site-navbar__link site-navbar__back" onClick={closeMenu}>Volver</Link>
        </>
      ) : (
        navigationConfig.infoLinkLabel && (
          <Link to="/info" className="site-navbar__link">{navigationConfig.infoLinkLabel}</Link>
        )
      )}
    </nav>
  );
}
