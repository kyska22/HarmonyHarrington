import { useEffect } from 'react';

interface PersonSchema {
  name: string;
  jobTitle: string;
  image?: string;
  url?: string;
  sameAs?: string[];
  description?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
}

export function useJsonLd(schema: Record<string, any>) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.async = true;
    
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [schema]);
}

export const harmonyPersonSchema: PersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Harmony Harrington",
  "jobTitle": "Fotógrafa Profesional",
  "image": "https://harmonyharrington.com/images/Harmony.webp",
  "url": "https://harmonyharrington.com",
  "description": "Fotógrafa profesional especializada en bodas, retratos y fotografía artística.",
  "sameAs": [
    "https://instagram.com/harmonyharrington"
  ],
  "address": {
    "streetAddress": "Calle de Fernando el Santo 18",
    "addressLocality": "Madrid",
    "addressRegion": "Madrid",
    "postalCode": "28010",
    "addressCountry": "ES"
  }
} as any;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Harmony Harrington Photography",
  "image": "https://harmonyharrington.com/images/Harmony.webp",
  "description": "Fotografía profesional de bodas, retratos y eventos en Madrid.",
  "url": "https://harmonyharrington.com",
  "telephone": "+34-701-97323",
  "email": "harmony.abish.harrington@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle de Fernando el Santo 18",
    "addressLocality": "Madrid",
    "addressRegion": "Madrid",
    "postalCode": "28010",
    "addressCountry": "ES"
  },
  "sameAs": [
    "https://instagram.com/harmonyharrington"
  ],
  "priceRange": "€€€"
};
