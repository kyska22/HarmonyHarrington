import { useState } from "react";
import { Link } from "react-router";
import { siteConfig, navigationConfig } from "@/config";

interface NavbarProps {
  variant?: "home" | "info";
}

export default function Navbar({ variant = "home" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const brandNameShort = siteConfig.brandName
    ?.split(" ")
    .slice(0, 2)
    .join(" ");

  const handleCloseMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((current) => !current);

  if (variant === "info") {
    return (
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(10px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "32px",
          paddingRight: "32px",
          boxSizing: "border-box",
          zIndex: 50,
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          minHeight: "60px",
        }}
      >
        <style>{`
          .navbar-links {
            display: flex;
            gap: 32px;
            align-items: center;
          }

          .navbar-link {
            font-family: system-ui, -apple-system, sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #000000;
            text-decoration: none;
            transition: opacity 0.3s ease;
            cursor: pointer;
          }

          .navbar-link:hover {
            opacity: 0.6;
          }

          .navbar-toggle {
            display: none;
            background: none;
            border: none;
            padding: 8px;
            cursor: pointer;
            color: #000;
          }

          .navbar-toggle svg {
            width: 24px;
            height: 24px;
          }

          @media (max-width: 860px) {
            .navbar-links {
              position: absolute;
              top: 60px;
              left: 0;
              right: 0;
              margin: 0;
              padding: 16px 0;
              flex-direction: column;
              align-items: stretch;
              gap: 0;
              background: rgba(255, 255, 255, 0.98);
              border-bottom: 1px solid rgba(0, 0, 0, 0.08);
              max-height: 0;
              overflow: hidden;
              transition: max-height 0.25s ease;
            }

            .navbar-links.open {
              max-height: 260px;
            }

            .navbar-link {
              display: block;
              width: 100%;
              padding: 14px 32px;
              border-bottom: 1px solid rgba(0, 0, 0, 0.06);
              text-align: center;
            }

            .navbar-toggle {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        `}</style>

        {/* Logo / Brand Name */}
        {brandNameShort && (
          <Link
            to="/"
            onClick={handleCloseMenu}
            style={{
              fontFamily: "'Times New Roman', serif",
              fontSize: "16px",
              fontWeight: 400,
              color: "#000000",
              letterSpacing: "0.05em",
              cursor: "pointer",
              textDecoration: "none",
              transition: "opacity 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {brandNameShort}
          </Link>
        )}

        <button
          type="button"
          className="navbar-toggle"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {/* Center Navigation Links */}
        <div className={`navbar-links${isMenuOpen ? " open" : ""}`}>
          <a
            href="#about"
            className="navbar-link"
            onClick={handleCloseMenu}
          >
            Sobre mí
          </a>

          {/** Servicios removido mientras no haya sección disponible */}
          {false && (
            <a
              href="#services"
              className="navbar-link"
              onClick={handleCloseMenu}
            >
              Servicios
            </a>
          )}

          <a
            href="#contact"
            className="navbar-link"
            onClick={handleCloseMenu}
          >
            Contáctanos
          </a>
        </div>

        {/* Back Link */}
        <Link
          to="/"
          onClick={handleCloseMenu}
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            color: "#000000",
            textDecoration: "none",
            transition: "opacity 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Volver
        </Link>
      </nav>
    );
  }

  // Home variant (default)
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "60px",
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "32px",
        paddingRight: "32px",
        boxSizing: "border-box",
        zIndex: 50,
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Logo / Brand Name */}
      {brandNameShort && (
        <div
          style={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "16px",
            fontWeight: 400,
            color: "#000000",
            letterSpacing: "0.05em",
            cursor: "default",
            transition: "opacity 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {brandNameShort}
        </div>
      )}

      {/* Navigation Link */}
      {navigationConfig.infoLinkLabel && (
        <Link
          to="/info"
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            color: "#000000",
            textDecoration: "none",
            transition: "opacity 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {navigationConfig.infoLinkLabel}
        </Link>
      )}
    </nav>
  );
}
