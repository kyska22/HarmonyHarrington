import { FormEvent, useState } from "react";
import { infoPageConfig, formspreeConfig } from "@/config";
import Navbar from "@/components/Navbar";

const servicePackages = [
  {
    title: "Boda Bronce",
    duration: "2 horas",
    features: [
      "20 min novia",
      "20 min novio",
      "20 min con los novios",
      "30 min ambas familias",
      "30 min con los invitados",
      "35 fotos digitales",
    ],
    price: "150 €",
  },
  {
    title: "Boda Plata",
    duration: "3 horas",
    features: [
      "15 min novia",
      "15 min novio",
      "30 min los novios",
      "15 min familia novia",
      "15 min familia novio",
      "30 min ambas familias",
      "1 hora con todos los invitados",
      "45 fotos digitales",
    ],
    price: "290 €",
  },
  {
    title: "Boda Oro",
    duration: "Full day",
    features: [
      "Tiempo repartido según las indicaciones de los novios",
      "60 fotos digitales",
    ],
    price: "400 €",
  },
];

export default function Info() {
  const cfg = infoPageConfig;

  if (
    !cfg.title &&
    cfg.paragraphs.length === 0 &&
    cfg.contactEntries.length === 0
  ) {
    return null;
  }

  const [formError, setFormError] = useState<string | null>(null);
  const redirectUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${formspreeConfig.redirectPath}`
      : formspreeConfig.redirectPath;

  const containsUnsafeText = (value: string) => {
    const normalized = value.trim();
    const xssPattern = /<[^>]+>|javascript:|on\w+\s*=|%3C|%3E/i;
    return xssPattern.test(normalized);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !message) {
      e.preventDefault();
      setFormError("Por favor completa tu nombre y tu mensaje antes de enviar.");
      return;
    }

    if (containsUnsafeText(name) || containsUnsafeText(phone) || containsUnsafeText(message)) {
      e.preventDefault();
      setFormError("El formulario no admite etiquetas, scripts ni contenido malicioso.");
      return;
    }

    setFormError(null);
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100vw",
        background: "#ffffff",
        color: "#000000",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <Navbar variant="info" />

      <main style={{ paddingTop: "140px" }}>
        <section
          id="about"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.35fr) minmax(0, 1fr)",
            gap: "64px",
            maxWidth: "1720px",
            margin: "0 auto",
            padding: "48px",
            boxSizing: "border-box",
            alignItems: "start",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          <div>
            {cfg.eyebrow && (
              <p
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "#000000",
                  opacity: 0.5,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  margin: "0 0 28px 0",
                }}
              >
                {cfg.eyebrow}
              </p>
            )}

            {cfg.title && (
              <h1
                style={{
                  fontFamily: "'Times New Roman', serif",
                  fontSize: "clamp(32px, 3.6vw, 52px)",
                  fontWeight: 400,
                  lineHeight: 1.08,
                  letterSpacing: "-0.01em",
                  margin: "0 0 40px 0",
                }}
              >
                {cfg.title}
              </h1>
            )}

            {cfg.paragraphs.length > 0 && (
              <div
                style={{
                  fontFamily: "'Times New Roman', serif",
                  fontSize: "17px",
                  lineHeight: 1.65,
                  color: "#111",
                }}
              >
                {cfg.paragraphs.map((p, i) => (
                  <p key={i} style={{ margin: "0 0 18px 0" }}>
                    {p}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/images/Harmony.webp"
              alt="Harmony Harrington"
              style={{
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.12)",
              }}
            />
          </div>
        </section>

        <section
          id="services"
          style={{
            maxWidth: "1720px",
            margin: "0 auto",
            padding: "0 48px 40px",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              fontFamily: "'Times New Roman', serif",
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 400,
              margin: "0 0 32px 0",
            }}
          >
            Paquetes de boda
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {servicePackages.map((service) => (
              <article
                key={service.title}
                style={{
                  background: "rgba(0, 0, 0, 0.03)",
                  borderRadius: "24px",
                  padding: "28px",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.transform = "translateY(-6px)";
                  target.style.boxShadow = "0 28px 60px rgba(0, 0, 0, 0.12)";
                  target.style.background = "rgba(255, 255, 255, 0.98)";
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.transform = "translateY(0)";
                  target.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.05)";
                  target.style.background = "rgba(0, 0, 0, 0.03)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "16px",
                    marginBottom: "22px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Times New Roman', serif",
                        fontSize: "22px",
                        fontWeight: 400,
                        margin: 0,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        margin: "8px 0 0 0",
                        fontFamily: "system-ui, -apple-system, sans-serif",
                        fontSize: "14px",
                        color: "#555",
                      }}
                    >
                      {service.duration}
                    </p>
                  </div>
                  <div
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#000",
                    }}
                  >
                    {service.price}
                  </div>
                </div>

                <ul style={{ margin: 0, paddingLeft: "0", color: "#222", textAlign: "center", listStylePosition: "inside" }}>
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        marginBottom: "10px",
                        fontSize: "15px",
                        lineHeight: 1.6,
                      }}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          style={{
            maxWidth: "1720px",
            margin: "0 auto",
            padding: "0 48px 40px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: "48px",
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "#000",
                  opacity: 0.5,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  margin: "0 0 24px 0",
                }}
              >
                Contáctanos
              </p>
              <h2
                style={{
                  fontFamily: "'Times New Roman', serif",
                  fontSize: "clamp(28px, 3vw, 40px)",
                  fontWeight: 400,
                  margin: "0 0 20px 0",
                }}
              >
                Envíame un mensaje
              </h2>
              <p
                style={{
                  fontFamily: "'Times New Roman', serif",
                  fontSize: "17px",
                  lineHeight: 1.75,
                  color: "#111",
                  margin: "0 0 24px 0",
                }}
              >
                Cuéntame sobre tu boda y estaré encantada de ayudarte a crear recuerdos inolvidables.
              </p>
            </div>

            <form
              action={formspreeConfig.actionUrl}
              method="POST"
              onSubmit={handleFormSubmit}
              style={{ display: "grid", gap: "18px" }}
            >
              <input type="hidden" name="_next" value={redirectUrl} />
              <input
                type="hidden"
                name="_subject"
                value="Nuevo mensaje desde Harmony Harrington"
              />
              <label style={{ display: "grid", gap: "10px", fontSize: "14px" }}>
                Nombre
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Nombre"
                  style={{
                    width: "100%",
                    padding: "16px 18px",
                    borderRadius: "14px",
                    border: "1px solid rgba(0, 0, 0, 0.14)",
                    fontSize: "15px",
                    outline: "none",
                  }}
                />
              </label>

              <label style={{ display: "grid", gap: "10px", fontSize: "14px" }}>
                Teléfono
                <input
                  name="phone"
                  type="tel"
                  placeholder="Teléfono"
                  style={{
                    width: "100%",
                    padding: "16px 18px",
                    borderRadius: "14px",
                    border: "1px solid rgba(0, 0, 0, 0.14)",
                    fontSize: "15px",
                    outline: "none",
                  }}
                />
              </label>

              <label style={{ display: "grid", gap: "10px", fontSize: "14px" }}>
                Mensaje
                <textarea
                  name="message"
                  required
                  placeholder="Escribe tu mensaje..."
                  rows={6}
                  style={{
                    width: "100%",
                    padding: "16px 18px",
                    borderRadius: "14px",
                    border: "1px solid rgba(0, 0, 0, 0.14)",
                    fontSize: "15px",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </label>

              {formError ? (
                <div
                  style={{
                    color: "#a00",
                    fontSize: "14px",
                    lineHeight: 1.5,
                    marginTop: "6px",
                  }}
                >
                  {formError}
                </div>
              ) : null}

              <button
                type="submit"
                style={{
                  width: "fit-content",
                  padding: "14px 28px",
                  borderRadius: "999px",
                  border: "none",
                  background: "#000",
                  color: "#fff",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer
        style={{
          maxWidth: "1720px",
          margin: "0 auto",
          padding: "40px 48px 60px",
          boxSizing: "border-box",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "16px", fontSize: "15px", color: "#000" }}>
          <a
            href={getFooterHref(cfg.contactEntries.find((e) => e.label === "Email") ?? { label: "Email", value: "", href: "" })}
            style={{ color: "#000", textDecoration: "none" }}
          >
            email: {cfg.contactEntries.find((e) => e.label === "Email")?.value ?? ""}
          </a>
        </div>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "24px", fontSize: "15px", color: "#000" }}>
          <a
            href={getFooterHref(cfg.contactEntries.find((e) => e.label === "Instagram") ?? { label: "Instagram", value: "", href: "" })}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#000", textDecoration: "none" }}
          >
            {cfg.contactEntries.find((e) => e.label === "Instagram")?.value ?? ""}
          </a>
          <a
            href={getFooterHref(cfg.contactEntries.find((e) => e.label === "Teléfono") ?? { label: "Teléfono", value: "", href: "" })}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#000", textDecoration: "none" }}
          >
            {cfg.contactEntries.find((e) => e.label === "Teléfono")?.value ?? ""}
          </a>
        </div>
        <div
          style={{
            marginTop: "18px",
            paddingTop: "12px",
            borderTop: "1px solid rgba(0,0,0,0.08)",
            opacity: 0.55,
            color: "rgba(0, 0, 0, 0.65)",
            fontSize: "13px",
          }}
        >
          © 2026 Harmony Harrington
        </div>
      </footer>
    </div>
  );
}

function getFooterHref(entry: { label: string; value: string; href?: string }) {
  if (entry.label === "Email") {
    return `mailto:${entry.value}`;
  }

  if (entry.label === "Teléfono") {
    const phone = entry.value.replace(/[^0-9+]/g, "");
    return `https://wa.me/${phone.replace(/^\+/, "")}`;
  }

  if (entry.label === "Estudio") {
    const query = encodeURIComponent(entry.value.replace(/\n/g, " "));
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  }

  return entry.href ?? "";
}
