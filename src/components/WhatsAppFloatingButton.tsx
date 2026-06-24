export default function WhatsAppFloatingButton() {
  return (
    <>
      <style>{`
        .whatsapp-floating-button {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 110;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25d366;
          color: #ffffff;
          box-shadow: 0 10px 26px rgba(20, 122, 65, 0.3);
          transition: transform 180ms ease, opacity 180ms ease, box-shadow 180ms ease;
        }

        .whatsapp-floating-button:hover {
          opacity: 0.92;
          transform: scale(1.06);
          box-shadow: 0 13px 30px rgba(20, 122, 65, 0.36);
        }

        .whatsapp-floating-button:focus-visible {
          outline: 3px solid rgba(255, 255, 255, 0.9);
          outline-offset: 3px;
        }

        .whatsapp-floating-button svg {
          width: 28px;
          height: 28px;
        }

        @media (max-width: 860px) {
          .whatsapp-floating-button {
            width: 52px;
            height: 52px;
          }

          .whatsapp-floating-button svg {
            width: 26px;
            height: 26px;
          }
        }
      `}</style>

      <a
        className="whatsapp-floating-button"
        href="https://wa.me/34641155018"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Harmony Harrington por WhatsApp"
        title="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.45L3.5 20.5l1.45-4.28A8.5 8.5 0 1 1 20.5 11.6Z" />
          <path d="M8.2 7.8c.3-.35.65-.35.9-.1l1.1 1.4c.2.25.2.55 0 .8l-.7.85c.7 1.45 1.85 2.55 3.3 3.2l.8-.75c.25-.2.55-.2.8-.05l1.5 1.05c.3.2.35.55.15.85-.55.85-1.45 1.3-2.4 1.15-3.05-.5-5.8-3.15-6.4-6.2-.2-.85.15-1.65.95-2.2Z" />
        </svg>
      </a>
    </>
  );
}
