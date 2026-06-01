import { useEffect, useRef, useState } from "react";
import VortexGallery from "@/lib/VortexGallery";
import Lenis from "lenis";
import {
  galleryConfig,
  siteConfig,
} from "@/config";
import ImageDetailOverlay from "@/components/ImageDetailOverlay";
import Navbar from "@/components/Navbar";
import { useSeo } from "@/hooks/useSeo";
import { useJsonLd, harmonyPersonSchema } from "@/hooks/useJsonLd";

export default function Home() {
  useSeo({
    title: `${siteConfig.brandName} - Galería de Fotografía Artística`,
    description: "Explora la galería de Harmony Harrington. Fotografía artística, bodas, retratos y más. Cada imagen cuenta una historia única.",
    keywords: "fotografía, galería, arte, bodas, retratos, Madrid",
    canonicalUrl: "https://harmonyharrington.com",
    ogImage: "/images/Harmony.webp",
  });

  useJsonLd(harmonyPersonSchema);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const vortexRef = useRef<VortexGallery | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const images = galleryConfig.images;
  const hasImages = images.length > 0;

  useEffect(() => {
    if (!canvasRef.current || !hasImages) return;

    const vortex = new VortexGallery(
      canvasRef.current,
      images.map((i) => i.src)
    );
    vortexRef.current = vortex;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", () => {
      // Lenis drives smooth scroll — the wheel handler in VortexGallery
      // already receives normalized wheel events. We feed additional
      // scroll velocity into the vortex for momentum.
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      vortex.destroy();
      lenis.destroy();
    };
  }, [hasImages, images]);

  useEffect(() => {
    vortexRef.current?.setPaused(selectedIdx !== null);
  }, [selectedIdx]);

  if (!hasImages) return null;

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const vortex = vortexRef.current;
    const canvas = canvasRef.current;
    if (!vortex || !canvas) return;
    const idx = vortex.pickAtScreen(
      e.clientX,
      e.clientY,
      canvas.getBoundingClientRect()
    );
    if (idx !== null) {
      setSelectedIdx(idx);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#ffffff",
      }}
    >
      <Navbar />

      {/* WebGL Canvas — the entire page is the vortex */}
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          cursor: "pointer",
        }}
      />

      {/* UI Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        {/* Footer */}
        {siteConfig.copyright && (
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              color: "#000000",
              opacity: 0.5,
              letterSpacing: "0.02em",
            }}
          >
            {siteConfig.copyright}
          </div>
        )}
      </div>

      <ImageDetailOverlay
        image={selectedIdx !== null ? images[selectedIdx] : null}
        onClose={() => setSelectedIdx(null)}
      />
    </div>
  );
}
