export interface SiteConfig {
  language: string;
  brandName: string;
  copyright: string;
}

export interface NavigationConfig {
  infoLinkLabel: string;
}

export interface ContactEntry {
  label: string;
  value: string;
  href?: string;
}

export interface InfoPageConfig {
  backLinkLabel: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  contactLabel: string;
  contactEntries: ContactEntry[];
}

export interface OverlayConfig {
  frameDetailLabel: string;
  fileLabel: string;
  seriesLabel: string;
  closeLabel: string;
}

export interface ImageItem {
  src: string;
  category: string;
  title: string;
  description: string;
}

export interface GalleryConfig {
  images: ImageItem[];
}

export const siteConfig: SiteConfig = {
  language: "es",
  brandName: "Harmony Harrington Photography",
  copyright: "© 2025 Harmony Harrington Photography",
};

export const navigationConfig: NavigationConfig = {
  infoLinkLabel: "Sobre la fotógrafa",
};

export const infoPageConfig: InfoPageConfig = {
  backLinkLabel: "Volver",
  eyebrow: "Fotógrafa Independiente — Madrid, España",
  title: "El arte es mi motor desde que era joven.",
  paragraphs: [
    "Hola! Soy Harmony Harrington.",
    "El arte ha sido mi motor desde que era joven, y la fotografía, la herramienta perfecta para darle vida. Mi trabajo es el resultado de años de curiosidad, aprendizaje constante y un amor profundo por los detalles. Capturo historias, creo recuerdos y comparto mi forma de ver el mundo a través del lente.",
  ],
  contactLabel: "Contacto",
  contactEntries: [
    {
      label: "Email",
      value: "harmony.abish.harrington@gmail.com",
      href: "mailto:harmony.abish.harrington@gmail.com",
    },
    {
      label: "Instagram",
      value: "@harmonyharrington",
      href: "https://instagram.com/harmonyharrington",
    },
    {
      label: "Teléfono",
      value: "+34 701 97323",
      href: "tel:+3470197323",
    },
    {
      label: "Estudio",
      value: "Calle de Fernando el Santo 18\n28010 Madrid, España",
    },
    {
      label: "Encargos",
      value: "Disponible para proyectos\ninternacionales",
    },
  ],
};

export const overlayConfig: OverlayConfig = {
  frameDetailLabel: "Detalle del encuadre",
  fileLabel: "Archivo",
  seriesLabel: "Serie",
  closeLabel: "Cerrar",
};

export const formspreeConfig = {
  actionUrl: "https://formspree.io/f/your-form-id",
  redirectPath: "/info#contact",
};

export const galleryConfig: GalleryConfig = {
  images: [
    {
      src: "/images/ballet_01.webp",
      category: "Danza",
      title: "Ballet — No. 01",
      description: "Una bailarina fluye en un estudio vacío, la postura y la luz crean una sensación de danza etérea.",
    },
    {
      src: "/images/dog_01.webp",
      category: "Animales",
      title: "Dog — No. 02",
      description: "Retrato canino lleno de ternura donde el perro se asoma con mirada curiosa.",
    },
    {
      src: "/images/paisaje_01.webp",
      category: "Paisaje",
      title: "Nieblas Alpinas — No. 03",
      description: "Un paisaje brumoso donde montañas y nubes se funden en tonos fríos al amanecer.",
    },
    {
      src: "/images/templo_01.webp",
      category: "Arquitectura",
      title: "Forma Pura — No. 04",
      description: "Arquitectura serena con líneas geométricas que elevan la calma del espacio.",
    },
    {
      src: "/images/modelo_01.webp",
      category: "Bodegón",
      title: "Tropicales — No. 05",
      description: "Retrato editorial con una atmósfera de frutas y texturas naturales.",
    },
    {
      src: "/images/modelo_02.webp",
      category: "Retrato",
      title: "El Relojero — No. 06",
      description: "Primer plano de un retrato masculino con luz suave y un gesto íntimo.",
    },
    {
      src: "/images/modelo_03.webp",
      category: "Moda",
      title: "Seda en Movimiento — No. 07",
      description: "Sesión de moda con movimiento y colores saturados en contraste.",
    },
    {
      src: "/images/familia2_01.webp",
      category: "Paisaje",
      title: "Acantilados — No. 08",
      description: "Escena familiar al aire libre con una naturaleza que abraza a los protagonistas.",
    },
    {
      src: "/images/familia2_02.webp",
      category: "Calle",
      title: "Neón Tokio — No. 09",
      description: "Foto urbana de noche donde los neones y la lluvia resaltan la ciudad.",
    },
    {
      src: "/images/modelos_01.webp",
      category: "Naturaleza",
      title: "Loto al Alba — No. 10",
      description: "Detalle floral en primer plano dentro de un ambiente natural y delicado.",
    },
    {
      src: "/images/templo_02.webp",
      category: "Arquitectura",
      title: "Vidrieras — No. 11",
      description: "Una catedral con vidrieras que filtra luz colorida en su interior.",
    },
    {
      src: "/images/ballet_02.webp",
      category: "Danza",
      title: "Arabesque — No. 12",
      description: "La elegancia del arabesco capturada entre sombras y materiales claros.",
    },
    {
      src: "/images/familia2_03.webp",
      category: "Paisaje",
      title: "Dunas Infinitas — No. 13",
      description: "Dunas infinitas recortadas por la luz dorada del atardecer.",
    },
    {
      src: "/images/modelo_04.webp",
      category: "Retrato",
      title: "Risas de Verano — No. 14",
      description: "Retrato natural de una sonrisa cálida en un jardín luminoso.",
    },
    {
      src: "/images/familia2_04.webp",
      category: "Calle",
      title: "Especias — No. 15",
      description: "Mercado callejero lleno de texturas, aromas y colores vivos.",
    },
    {
      src: "/images/familia2_05.webp",
      category: "Paisaje",
      title: "Puente de Otoño — No. 16",
      description: "Un paisaje otoñal donde la niebla y el puente crean una atmósfera tranquila.",
    },
    {
      src: "/images/familia2_06.webp",
      category: "Bodegón",
      title: "Wabi-Sabi — No. 17",
      description: "Composición minimalista de objetos y sombras que respira calma.",
    },
    {
      src: "/images/templo_03.webp",
      category: "Arquitectura",
      title: "Espiral — No. 18",
      description: "Escalera en espiral que guía la mirada hacia un punto de luz cenital.",
    },
    {
      src: "/images/familia1_01.webp",
      category: "Retrato",
      title: "Tinta y Piel — No. 19",
      description: "Retrato intenso de un hombre con tatuajes y mirada profunda.",
    },
    {
      src: "/images/familia2_07.webp",
      category: "Paisaje",
      title: "Aurora — No. 20",
      description: "La aurora boreal se refleja en un lago helado, creando una noche mágica.",
    },
    {
      src: "/images/familia2_08.webp",
      category: "Bodegón",
      title: "Mesa Italiana — No. 21",
      description: "Mesa italiana con alimentos frescos y una sensación de hogar compartido.",
    },
    {
      src: "/images/templo_04.webp",
      category: "Arquitectura",
      title: "Ruina Industrial — No. 22",
      description: "Ruina industrial donde la luz dibuja texturas del tiempo detenido.",
    },
    {
      src: "/images/familia2_09.webp",
      category: "Calle",
      title: "Habana — No. 23",
      description: "Calle de La Habana con fachadas desgastadas y una paleta cálida.",
    },
    {
      src: "/images/familia2_10.webp",
      category: "Naturaleza",
      title: "Libertad — No. 24",
      description: "Corcel blanco galopando en una playa al amanecer, movimiento y libertad.",
    },
    {
      src: "/images/familia1_02.webp",
      category: "Moda",
      title: "Dorado — No. 25",
      description: "Tono dorado y glamour en un retrato beauty con detalles sofisticados.",
    },
    {
      src: "/images/familia2_11.webp",
      category: "Paisaje",
      title: "Horizonte — No. 26",
      description: "Horizonte oceánico donde el sol se funde con el mar en un brillo suave.",
    },
    {
      src: "/images/familia2_12.webp",
      category: "Bodegón",
      title: "Alfarero — No. 27",
      description: "Un artesano modela la arcilla con manos grabadas de experiencia.",
    },
    {
      src: "/images/Harmony.webp",
      category: "Retrato",
      title: "Harmony — No. 28",
      description: "Retrato de Harmony Harrington, la fotógrafa detrás del lente, lleno de presencia y calma.",
    },
    {
      src: "/images/familia1_03.webp",
      category: "Naturaleza",
      title: "Lavanda — No. 29",
      description: "Campo de lavanda con un perro observador dentro de un paisaje púrpura.",
    },
    {
      src: "/images/familia1_04.webp",
      category: "Paisaje",
      title: "Alpes Suizos — No. 30",
      description: "Un tren rojo cruza el paisaje alpino nevado, creando un contraste perfecto.",
    },
  ],
};
