import { Link } from "react-router";
import { siteConfig, navigationConfig } from "@/config";

interface NavbarProps {
  variant?: "home" | "info";
}

export default function Navbar({ variant = "home" }: NavbarProps) {
  const brandNameShort = siteConfig.brandName
    ?.split(" ")
    .slice(0, 2)
    .join(" ");

  if (variant === "info") {
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
          <Link
            to="/"
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

        {/* Center Navigation Links */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <a
            href="#about"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "#000000",
              textDecoration: "none",
              transition: "opacity 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Sobre mí
          </a>

          <a
            href="#services"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "#000000",
              textDecoration: "none",
              transition: "opacity 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Servicios
          </a>

          <a
            href="#contact"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "#000000",
              textDecoration: "none",
              transition: "opacity 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Contáctanos
          </a>
        </div>

        {/* Back Link */}
        <Link
          to="/"
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
