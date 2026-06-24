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
  brandName: "Harmony Harrington",
  copyright: "© 2026 Harmony Harrington. Todos los derechos reservados.",
};

export const navigationConfig: NavigationConfig = {
  infoLinkLabel: "Sobre la fotógrafa",
};

export const infoPageConfig: InfoPageConfig = {
  backLinkLabel: "Volver",
  eyebrow: "Fotógrafa independiente — Granada, España",
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
      value: "@hash_photographer",
      href: "https://instagram.com/hash_photographer",
    },
    {
      label: "Teléfono",
      value: "+34 641 15 5018",
      href: "tel:+34641155018",
    },
    {
      label: "Estudio",
      value: "Granada, España",
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
  actionUrl: "https://formspree.io/f/xreweapv",
  redirectPath: "/info#contact",
};

const legacyGalleryConfig: GalleryConfig = {
  images: [
    {
      src: "/images/ballet_01.webp",
      category: "Danza",
      title: "Ballet — No. 01",
      description: "Academia de ballet Ana Vargas, fotografía navideña en evento.",
    },
    {
      src: "/images/dog_01.webp",
      category: "Animales",
      title: "Dog — No. 02",
      description: "Retrato canino lleno de ternura donde el perro se asoma con mirada curiosa.",
    },
    {
      src: "/images/ballet_03.webp",
      category: "Danza",
      title: "Ballet — No. 03",
      description: "Academia de ballet Ana Vargas, fotografía navideña en evento.",
    },
    {
      src: "/images/familia1_01.webp",
      category: "Familia",
      title: "Familia España — No. 04",
      description: "El amor de la familia capturado en un retrato cálido y lleno de vida en Costa Rica.",
    },
    {
      src: "/images/familia1_02.webp",
      category: "Familia",
      title: "Familia España — No. 05",
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
      description: "Academia de ballet Ana Vargas, fotografía navideña en evento.",
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
      src: "/images/familia1_02.webp",
      category: "Moda",
      title: "Dorado — No. 25",
      description: "Tono dorado y glamour en un retrato beauty con detalles sofisticados.",
    },
    {
      src: "/images/familia2_12.webp",
      category: "Bodegón",
      title: "Alfarero — No. 27",
      description: "Un artesano modela la arcilla con manos grabadas de experiencia.",
    },
    {
      src: "/images/harmony.webp",
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
    
    {
      src: "/images/fotografa_02.webp",
      category: "Autorretrato",
      title: "Harmony — No. 31",
      description: "Autorretrato Harmony Harrington, fotografía modo estudio.",
    },
  ],
};

void legacyGalleryConfig;

export const galleryConfig: GalleryConfig = {
  images: [
    {
      src: "/images/ballet_01.webp",
      category: "Danza",
      title: "Navidad en la Academia Ana Vargas",
      description: "Fotografía navideña durante un evento de la Academia de Ballet Ana Vargas.",
    },
    {
      src: "/images/ballet_02.webp",
      category: "Danza",
      title: "Celebración navideña en ballet",
      description: "Fotografía navideña durante un evento de la Academia de Ballet Ana Vargas.",
    },
    {
      src: "/images/ballet_03.webp",
      category: "Danza",
      title: "Ballet en Navidad",
      description: "Fotografía navideña durante un evento de la Academia de Ballet Ana Vargas.",
    },
    {
      src: "/images/fotografa_02.webp",
      category: "Retratos",
      title: "Harmony frente al lente",
      description: "Autorretrato de Harmony Harrington realizado en estudio.",
    },
    {
      src: "/images/familia1_02.webp",
      category: "Fotografía familiar",
      title: "Retrato familiar en casa",
      description: "Fotografía familiar en casa, realizada en modo estudio.",
    },
    {
      src: "/images/familia1_04.webp",
      category: "Fotografía familiar",
      title: "Familia en modo estudio",
      description: "Fotografía familiar en casa, realizada en modo estudio.",
    },
    {
      src: "/images/familia2_12.webp",
      category: "Fotografía familiar",
      title: "El lugar seguro de Mathias",
      description: "Fotografía familiar en casa: un lugar seguro para el bebé Mathias en compañía de su mamá.",
    },
    {
      src: "/images/familia2_13.webp",
      category: "Fotografía familiar",
      title: "Mathias junto a mamá",
      description: "Fotografía familiar en casa: un lugar seguro para el bebé Mathias en compañía de su mamá.",
    },
    {
      src: "/images/familia2_14.webp",
      category: "Fotografía familiar",
      title: "Bebé en camino",
      description: "Fotografía familiar al aire libre: «Bebé en camino».",
    },
    {
      src: "/images/familia2_17.webp",
      category: "Fotografía familiar",
      title: "La espera de un nuevo amor",
      description: "Fotografía familiar al aire libre: «Bebé en camino».",
    },
    {
      src: "/images/modelo_01.webp",
      category: "Retratos",
      title: "Retrato bajo la noche",
      description: "Retrato al aire libre durante la noche.",
    },
    {
      src: "/images/modelo_03.webp",
      category: "Retratos",
      title: "Retrato nocturno en un restaurante",
      description: "Retrato nocturno realizado en un restaurante.",
    },
    {
      src: "/images/modelo_04.webp",
      category: "Retratos",
      title: "Retrato al aire libre de noche",
      description: "Retrato al aire libre durante la noche.",
    },
    {
      src: "/images/templo_03.webp",
      category: "Retratos",
      title: "Un llamamiento de fe",
      description: "Retrato con motivo de un llamamiento religioso de La Iglesia de Jesucristo de los Santos de los Últimos Días.",
    },
    {
      src: "/images/templo_04.webp",
      category: "Retratos",
      title: "Fe y servicio",
      description: "Retrato con motivo de un llamamiento religioso de La Iglesia de Jesucristo de los Santos de los Últimos Días.",
    },
    {
      src: "/images/templo_02.webp",
      category: "Lugares mágicos",
      title: "Templo de Costa Rica",
      description: "Fotografía de regalo de la estructura del templo de La Iglesia de Jesucristo de los Santos de los Últimos Días en Costa Rica.",
    },
    {
      src: "/images/paisaje_01.webp",
      category: "Lugares mágicos",
      title: "Templo católico de Costa Rica",
      description: "Fotografía de regalo de un templo católico en Costa Rica.",
    },
    {
      src: "/images/dog_01.webp",
      category: "Fotografía comercial",
      title: "Un regalo para el Centro de Atención y Psicología",
      description: "Fotografía de regalo para el Centro de Atención y Psicología.",
    },
    {
      src: "/images/modelo_02.webp",
      category: "Fotografía comercial",
      title: "Espacio profesional",
      description: "Fotografía de oficina para el Centro de Atención y Psicología.",
    },
    {
      src: "/images/modelos_01.webp",
      category: "Fotografía comercial",
      title: "Equipo en su espacio de trabajo",
      description: "Fotografía de oficina para el Centro de Atención y Psicología.",
    },
    {
      src: "/images/fotografa_01.webp",
      category: "Retratos",
      title: "Mirada entre luces y sombras",
      description: "Retrato en estudio con fondo oscuro y una composición de carácter íntimo.",
    },
    {
      src: "/images/familia1_01.webp",
      category: "Fotografía familiar",
      title: "Alegría en familia",
      description: "Fotografía familiar en blanco y negro durante una celebración en casa.",
    },
    {
      src: "/images/familia1_03.webp",
      category: "Fotografía familiar",
      title: "Un hogar lleno de sonrisas",
      description: "Retrato familiar en casa, reunidos en un ambiente cálido y cercano.",
    },
    {
      src: "/images/familia2_04.webp",
      category: "Fotografía familiar",
      title: "La dulce espera en familia",
      description: "Fotografía familiar al aire libre durante la espera de un nuevo integrante.",
    },
    {
      src: "/images/familia2_06.webp",
      category: "Fotografía familiar",
      title: "La primera imagen de un nuevo amor",
      description: "Fotografía familiar al aire libre contemplando las primeras imágenes del bebé en camino.",
    },
    {
      src: "/images/familia2_09.webp",
      category: "Fotografía familiar",
      title: "Una espera compartida",
      description: "Fotografía familiar al aire libre que celebra con alegría la llegada de un nuevo bebé.",
    },
    {
      src: "/images/familia2_15.webp",
      category: "Fotografía familiar",
      title: "Manos que forman un hogar",
      description: "Fotografía familiar en blanco y negro que reúne las manos de toda la familia.",
    },
    {
      src: "/images/familia2_16.webp",
      category: "Fotografía familiar",
      title: "La sonrisa de Mathias",
      description: "Fotografía familiar al aire libre del pequeño Mathias en compañía de su mamá.",
    },
  ],
};

export const seoConfig = {
  siteName: "Harmony Harrington Photography",
  siteUrl: "https://harmony-harrington.vercel.app/",
  author: "Harmony Harrington",
  description: "Fotógrafa profesional especializada en fotografía de bodas, retratos y arte en Granada, España.",
  keywords: "fotografía, bodas, retratos, fotógrafa profesional, Granada, España",
  locale: "es_ES",
  twitter: "@photographer_hash",
};
