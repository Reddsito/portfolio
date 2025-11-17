import { ui, defaultLang } from './ui';

export function getCurrentLang(): 'es' | 'en' {
  if (typeof window === 'undefined') return defaultLang;
  return (document.documentElement.getAttribute('lang') as 'es' | 'en') || defaultLang;
}

export function t(key: keyof typeof ui[typeof defaultLang]): string {
  const lang = getCurrentLang();
  return ui[lang][key] || ui[defaultLang][key];
}

// Helper to update text content dynamically
export function updateTranslations() {
  const lang = getCurrentLang();

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n') as keyof typeof ui[typeof defaultLang];
    if (key && ui[lang][key]) {
      element.textContent = ui[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.getAttribute('data-i18n-html') as keyof typeof ui[typeof defaultLang];
    if (key && ui[lang][key]) {
      element.innerHTML = ui[lang][key];
    }
  });
}

// Initialize on page load
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', updateTranslations);
  window.addEventListener('langchange', updateTranslations);
}
