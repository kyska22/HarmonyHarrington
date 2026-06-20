import { useState, useRef } from "react";
import type { FormEvent } from "react";
import { infoPageConfig, formspreeConfig } from "@/config";
import Navbar from "@/components/Navbar";
import { useSeo } from "@/hooks/useSeo";
import { useJsonLd, localBusinessSchema } from "@/hooks/useJsonLd";

/* const servicePackages = [
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
]; */

export default function Info() {
  const cfg = infoPageConfig;

  useSeo({
    title: "Sobre la Fotógrafa - Harmony Harrington",
    description: "Conoce a Harmony Harrington, fotógrafa profesional especializada en bodas, retratos y fotografía artística. Descubre mis paquetes de boda y contacta conmigo para tu evento especial.",
    keywords: "fotografía de bodas, retratos profesionales, fotógrafa Granada, paquetes de boda",
    canonicalUrl: "https://harmony-harrington.vercel.app/",
    ogImage: "/images/Harmony.webp",
  });

  useJsonLd(localBusinessSchema);

  if (
    !cfg.title &&
    cfg.paragraphs.length === 0 &&
    cfg.contactEntries.length === 0
  ) {
    return null;
  }

  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const containsUnsafeText = (value: string) => {
    const normalized = value.trim();
    const xssPattern = /<[^>]+>|javascript:|on\w+\s*=|%3C|%3E/i;
    return xssPattern.test(normalized);
  };

  const isValidPhone = (value: string): boolean => {
    if (!value) return true; // Phone is optional
    const normalized = value.trim();
    // Allow only digits, +, -, (), spaces, and some international formats
    const phonePattern = /^[\d+\-().\s]{7,}$/;
    return phonePattern.test(normalized);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !message) {
      setFormError("Por favor completa tu nombre y tu mensaje antes de enviar.");
      setFormSuccess(false);
      return;
    }

    if (name.length < 2) {
      setFormError("El nombre debe tener al menos 2 caracteres.");
      setFormSuccess(false);
      return;
    }

    if (message.length < 10) {
      setFormError("El mensaje debe tener al menos 10 caracteres.");
      setFormSuccess(false);
      return;
    }

    if (phone && !isValidPhone(phone)) {
      setFormError("El teléfono debe contener solo números, espacios, +, -, () y tener al menos 7 dígitos.");
      setFormSuccess(false);
      return;
    }

    if (containsUnsafeText(name) || containsUnsafeText(phone) || containsUnsafeText(message)) {
      setFormError("El formulario no admite etiquetas, scripts ni contenido malicioso.");
      setFormSuccess(false);
      return;
    }

    try {
      const response = await fetch(formspreeConfig.actionUrl, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json",
        },
      });

      if (response.ok) {
        setFormSuccess(true);
        setFormError(null);
        form.reset();
        setTimeout(() => setFormSuccess(false), 4000);
      } else {
        setFormError("Error al enviar el mensaje. Por favor intenta nuevamente.");
        setFormSuccess(false);
      }
    } catch (err) {
      setFormError("Error de conexión. Por favor intenta nuevamente.");
      setFormSuccess(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #ffffff 0%, #e8f2fc 35%, #9ec5f8 70%, #4092f0 100%)",
        color: "#000000",
        overflowX: "hidden",
      }}
    >
      <Navbar variant="info" />
      <style>{`
        .info-main {
          padding-top: 140px;
          flex: 1;
        }

        .about-section,
        .contact-section {
          max-width: 1720px;
          margin: 0 auto;
          padding: 48px;
          box-sizing: border-box;
        }

        .info-footer {
          width: 100%;
          margin-top: 44px;
          padding: 0 clamp(24px, 4vw, 64px) 32px;
          box-sizing: border-box;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .info-footer__inner {
          max-width: 1624px;
          margin: 0 auto;
          padding: 30px clamp(22px, 3vw, 42px);
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 28px;
          border: 1px solid rgba(255, 255, 255, 0.52);
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(255,255,255,0.7), rgba(225,240,255,0.46));
          box-shadow: 0 22px 60px rgba(14, 69, 128, 0.12);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .info-footer__logo {
          display: block;
          width: auto;
          height: 56px;
          max-width: 240px;
          object-fit: contain;
        }

        .info-footer__copyright {
          color: rgba(16, 42, 74, 0.7);
          font-size: 13px;
          letter-spacing: 0.02em;
          text-align: center;
          white-space: nowrap;
        }

        .info-footer__socials {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 10px;
        }

        .info-footer__social-link {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #102a4a;
          background: rgba(255, 255, 255, 0.58);
          border: 1px solid rgba(16, 42, 74, 0.12);
          border-radius: 50%;
          transition: transform 180ms ease, background-color 180ms ease, box-shadow 180ms ease;
        }

        .info-footer__social-link:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 8px 20px rgba(14, 69, 128, 0.13);
        }

        .info-footer__social-link svg { width: 19px; height: 19px; }

        @media (max-width: 860px) {
          .info-main {
            padding-top: 110px;
          }

          .about-section,
          .contact-section {
            padding: 24px !important;
          }

          .about-section {
            display: block !important;
          }

          .about-section > div {
            width: 100% !important;
          }

          .about-section img {
            width: 100% !important;
            max-width: 320px !important;
            height: auto !important;
            margin: 0 auto !important;
          }

          .contact-section > div {
            display: flex !important;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 36px !important;
          }

          .contact-section {
            display: block !important;
          }

          .contact-section form {
            width: 100%;
            min-width: 0;
          }

          .contact-section form label,
          .contact-section form input,
          .contact-section form textarea {
            min-width: 0;
          }

          .info-footer {
            margin-top: 28px;
            padding: 0 16px 20px;
          }

          .info-footer__inner {
            grid-template-columns: 1fr;
            justify-items: center;
            gap: 18px;
            padding: 26px 20px;
          }

          .info-footer__logo { height: 44px; max-width: 210px; }
          .info-footer__socials { justify-content: center; }
        }
      `}</style>

      <main className="info-main" style={{ paddingTop: "140px", flex: 1 }}>
        <section
          id="about"
          className="about-section"
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
              src="/images/harmony.webp"
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
          id="contact"
          className="contact-section"
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
                Cada momento especial merece ser guardado. ¿Qué te gustaría capturar hoy? Diseñemos juntos una sesión de fotos que te haga sonreír cada vez que la mires. ¡Hablemos! 🤍
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleFormSubmit}
              style={{ display: "grid", gap: "18px" }}
            >
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
                  minLength={2}
                  maxLength={100}
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
                  pattern="[\d+\-().\s]*"
                  minLength={7}
                  maxLength={20}
                  title="El teléfono debe contener solo números, +, -, () y espacios"
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
                  minLength={10}
                  maxLength={1000}
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

              {formSuccess ? (
                <div
                  style={{
                    color: "#06a94d",
                    fontSize: "14px",
                    lineHeight: 1.5,
                    marginTop: "6px",
                    padding: "10px 12px",
                    backgroundColor: "rgba(6, 169, 77, 0.08)",
                    borderRadius: "6px",
                  }}
                >
                  ✓ Mensaje enviado con éxito. Pronto me pondré en contacto contigo.
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

      <footer className="info-footer">
        <div className="info-footer__inner">
          <a href="/" aria-label="Harmony Harrington, inicio">
            <img className="info-footer__logo" src="/assets/logo.png" alt="Harmony Harrington" />
          </a>

          <div className="info-footer__copyright">© 2026 Harmony Harrington</div>

          <div className="info-footer__socials" aria-label="Redes sociales y contacto">
          <a
            href="https://instagram.com/hash_photographer"
            target="_blank"
            rel="noopener noreferrer"
            className="info-footer__social-link"
            aria-label="Instagram de Harmony Harrington"
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://wa.me/34641155018"
            target="_blank"
            rel="noopener noreferrer"
            className="info-footer__social-link"
            aria-label="Contactar por WhatsApp al +34 641 15 5018"
            title="WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.45L3.5 20.5l1.45-4.28A8.5 8.5 0 1 1 20.5 11.6Z" />
              <path d="M8.2 7.8c.3-.35.65-.35.9-.1l1.1 1.4c.2.25.2.55 0 .8l-.7.85c.7 1.45 1.85 2.55 3.3 3.2l.8-.75c.25-.2.55-.2.8-.05l1.5 1.05c.3.2.35.55.15.85-.55.85-1.45 1.3-2.4 1.15-3.05-.5-5.8-3.15-6.4-6.2-.2-.85.15-1.65.95-2.2Z" />
            </svg>
          </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
