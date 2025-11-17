# Portfolio Backend Developer

Portfolio personal construido con Astro y CSS puro, sin dependencias de frameworks de UI.

## Características

- ✨ **100% Astro nativo** - Sin React, Vue u otros frameworks
- 🎨 **CSS puro** - Sin Tailwind, usando variables CSS personalizadas
- 📝 **Content Collections** - Proyectos y experiencia gestionados con Markdown
- 🎭 **Efecto Matrix** - Background animado con Canvas API
- ⚡ **Performance optimizada** - Mínimas dependencias externas
- 📱 **Responsive** - Diseño adaptable a todos los dispositivos
- 🌙 **Tema oscuro** - Esquema de colores oscuro por defecto

## Estructura del Proyecto

```
portfolio/
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes pequeños reutilizables
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── Tag.astro
│   │   │   ├── Icon.astro
│   │   │   ├── ProjectCard.astro
│   │   │   └── ExperienceCard.astro
│   │   ├── sections/        # Secciones completas
│   │   │   ├── HeroSection.astro
│   │   │   ├── ProjectsSection.astro
│   │   │   └── ExperienceSection.astro
│   │   └── MatrixBackground.astro
│   ├── content/             # Content Collections
│   │   ├── projects/        # Archivos markdown de proyectos (6)
│   │   ├── experience/      # Archivos markdown de experiencia (3)
│   │   └── config.ts        # Configuración de colecciones
│   ├── layouts/
│   │   └── Layout.astro     # Layout principal
│   ├── pages/
│   │   └── index.astro      # Página principal
│   └── styles/
│       └── global.css       # Estilos globales y variables CSS
├── public/                  # Assets estáticos
├── astro.config.mjs         # Configuración de Astro
├── tsconfig.json            # Configuración de TypeScript
├── package.json             # Solo Astro como dependencia
├── README.md                # Este archivo
└── ARCHITECTURE.md          # Documentación de arquitectura
```

### Arquitectura de Componentes

Este proyecto usa una arquitectura modular de componentes por niveles:

- **UI Components** (`/ui`): Componentes pequeños y reutilizables (Button, Card, Icon, Tag)
- **Sections** (`/sections`): Secciones completas que combinan componentes UI
- **Pages** (`/pages`): Páginas que combinan secciones

Ver [ARCHITECTURE.md](./ARCHITECTURE.md) para más detalles.

## Tecnologías

- **Astro** - Framework principal
- **TypeScript** - Tipado estático
- **CSS puro** - Estilos sin frameworks
- **Content Collections** - Gestión de contenido

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

El servidor de desarrollo estará disponible en `http://localhost:4321`

## Build

```bash
npm run build
```

Los archivos se generarán en el directorio `dist/`

## Preview

```bash
npm run preview
```

## Agregar Proyectos

1. Crea un nuevo archivo `.md` en `src/content/projects/`
2. Usa el siguiente frontmatter:

```markdown
---
title: "Nombre del Proyecto"
description: "Descripción breve del proyecto"
icon: "server" # server, lock, database, layers, zap, cloud
notionUrl: "https://notion.so/..."
tags: ["Tag1", "Tag2", "Tag3"]
order: 1 # Orden de aparición
---

## Contenido del proyecto

Tu documentación aquí...
```

## Agregar Experiencia

1. Crea un nuevo archivo `.md` en `src/content/experience/`
2. Usa el siguiente frontmatter:

```markdown
---
company: "Nombre de la Empresa"
position: "Tu Posición"
period: "2020 - 2022"
description: "Descripción breve del rol"
achievements:
  - "Logro 1"
  - "Logro 2"
  - "Logro 3"
stack: ["Tech1", "Tech2", "Tech3"]
order: 1 # Orden de aparición
---

## Contenido adicional

Detalles extra sobre tu experiencia...
```

## Personalización de Colores

Los colores se pueden personalizar editando las variables CSS en `src/styles/global.css`:

```css
:root {
  --background: oklch(0.08 0 0);
  --foreground: oklch(0.98 0 0);
  --primary: oklch(0.95 0 0);
  --accent: oklch(0.9 0 0);
  /* ... más variables */
}
```

## Personalización de Información de Contacto

Edita los enlaces en `src/components/Experience.astro` en la sección de contacto:

```astro
<a href="mailto:tu@email.com" class="contact-link">→ Email</a>
<a href="https://github.com/tuusuario" class="contact-link">→ GitHub</a>
<a href="https://linkedin.com/in/tuusuario" class="contact-link">→ LinkedIn</a>
```

## Buenas Prácticas Implementadas

### CSS
- ✅ Variables CSS para temas consistentes
- ✅ Mobile-first responsive design
- ✅ Scoped styles en componentes
- ✅ Animaciones CSS nativas
- ✅ Sistema de spacing y tipografía escalable

### Astro
- ✅ Content Collections para contenido estructurado
- ✅ Zero JavaScript por defecto (solo donde es necesario)
- ✅ Componentes modulares y reutilizables
- ✅ SEO optimizado
- ✅ TypeScript para type-safety

### Performance
- ✅ Mínimas dependencias externas
- ✅ CSS optimizado y con scope
- ✅ Imágenes y assets optimizados
- ✅ Sin frameworks pesados de UI

## Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Preview del build de producción
- `npm run astro` - Ejecuta comandos de Astro CLI

## Licencia

MIT

---

Construido con ❤️ usando Astro
