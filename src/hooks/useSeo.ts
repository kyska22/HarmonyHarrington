import { useEffect } from 'react';

interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  twitterHandle?: string;
}

export function useSeo(config: SeoConfig) {
  useEffect(() => {
    // Actualizar título
    document.title = config.title;

    // Actualizar descripción
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute('content', config.description);

    // Actualizar keywords
    if (config.keywords) {
      let keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute('content', config.keywords);
    }

    // Actualizar URL canónica
    const canonicalUrl = config.canonicalUrl || window.location.href;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Open Graph
    const ogType = config.ogType || 'website';
    updateOrCreateMeta('property', 'og:type', ogType);
    updateOrCreateMeta('property', 'og:title', config.title);
    updateOrCreateMeta('property', 'og:description', config.description);
    updateOrCreateMeta('property', 'og:url', canonicalUrl);

    if (config.ogImage) {
      updateOrCreateMeta('property', 'og:image', config.ogImage);
    }

    // Twitter
    updateOrCreateMeta('property', 'twitter:title', config.title);
    updateOrCreateMeta('property', 'twitter:description', config.description);
    if (config.ogImage) {
      updateOrCreateMeta('property', 'twitter:image', config.ogImage);
    }
    if (config.twitterHandle) {
      updateOrCreateMeta('property', 'twitter:creator', config.twitterHandle);
    }
  }, [config]);
}

function updateOrCreateMeta(type: string, name: string, content: string) {
  let meta = document.querySelector(`meta[${type}="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(type, name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}
