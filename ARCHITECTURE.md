# Arquitectura de Componentes

Este portfolio sigue una arquitectura modular de componentes por niveles, similar al patrón **Atomic Design**.

## 📐 Estructura de Componentes

```
src/components/
├── ui/                    # Componentes pequeños y reutilizables (Átomos)
│   ├── Button.astro       # Botones con variantes
│   ├── Card.astro         # Tarjetas base
│   ├── Tag.astro          # Tags/etiquetas
│   ├── Icon.astro         # Sistema de iconos
│   ├── ProjectCard.astro  # Tarjeta específica para proyectos
│   └── ExperienceCard.astro # Tarjeta específica para experiencia
├── sections/              # Secciones completas (Organismos)
│   ├── HeroSection.astro
│   ├── ProjectsSection.astro
│   └── ExperienceSection.astro
└── MatrixBackground.astro # Componente especial de fondo
```

## 🔨 Niveles de Componentes

### 1. Componentes UI (Átomos) - `/ui`

Componentes pequeños, genéricos y altamente reutilizables.

#### **Button.astro**
Botón reutilizable con múltiples variantes.

```astro
<Button variant="primary" size="md">Click me</Button>
<Button variant="link" href="/about">Link</Button>
```

**Props:**
- `variant`: 'primary' | 'ghost' | 'link'
- `size`: 'sm' | 'md' | 'lg'
- `href`: string (opcional, convierte en enlace)
- `type`: 'button' | 'submit' | 'reset'

#### **Card.astro**
Contenedor base para tarjetas.

```astro
<Card variant="hover">
  <p>Contenido de la tarjeta</p>
</Card>
```

**Props:**
- `variant`: 'default' | 'hover'

#### **Tag.astro**
Etiquetas pequeñas para tecnologías, categorías, etc.

```astro
<Tag>React</Tag>
<Tag>TypeScript</Tag>
```

#### **Icon.astro**
Sistema de iconos SVG inline.

```astro
<Icon name="arrow-down" size="md" />
<Icon name="briefcase" size="sm" />
```

**Props:**
- `name`: 'arrow-down' | 'external-link' | 'briefcase' | 'calendar' | 'server' | 'lock' | 'database' | 'layers' | 'zap' | 'cloud'
- `size`: 'sm' | 'md' | 'lg'

#### **ProjectCard.astro**
Tarjeta especializada para mostrar proyectos.

```astro
<ProjectCard
  title="Build Your Own Web Server"
  description="Construí un servidor HTTP desde cero..."
  icon="server"
  notionUrl="https://notion.so/..."
  tags={["TCP/IP", "HTTP", "Sockets"]}
/>
```

#### **ExperienceCard.astro**
Tarjeta especializada para mostrar experiencia laboral.

```astro
<ExperienceCard
  company="Tech Startup"
  position="Senior Backend Engineer"
  period="2022 - Presente"
  description="..."
  achievements={["...", "...", "..."]}
  stack={["Node.js", "PostgreSQL"]}
/>
```

### 2. Secciones (Organismos) - `/sections`

Componentes de nivel medio que combinan componentes UI para formar secciones completas.

#### **HeroSection.astro**
Sección hero con animación de typing y navegación.

**Usa:**
- Card
- Button
- Icon

#### **ProjectsSection.astro**
Grid de proyectos desde Content Collections.

**Usa:**
- ProjectCard
- Card (para nota final)

#### **ExperienceSection.astro**
Lista de experiencia laboral desde Content Collections.

**Usa:**
- ExperienceCard
- Card (para información de contacto)

### 3. Páginas - `/pages`

El nivel más alto que combina secciones para formar páginas completas.

```astro
// src/pages/index.astro
<Layout>
  <MatrixBackground />
  <HeroSection />
  <ProjectsSection />
  <ExperienceSection />
</Layout>
```

## 🎯 Principios de Diseño

### 1. **Componibilidad**
Los componentes pequeños se combinan para formar componentes más grandes.

```astro
<Card>
  <Icon name="server" />
  <h3>Título</h3>
  <Tag>React</Tag>
</Card>
```

### 2. **Reutilización**
Los componentes UI pueden usarse en cualquier contexto.

```astro
<!-- En Hero -->
<Button variant="link">Explorar</Button>

<!-- En Contact -->
<Button variant="primary" href="/contact">Contactar</Button>
```

### 3. **Separación de Responsabilidades**
- **UI**: Presentación y estilos
- **Sections**: Composición y lógica
- **Pages**: Estructura y layout

### 4. **Props Tipadas**
Todos los componentes tienen interfaces TypeScript para type-safety.

```ts
interface Props {
  variant?: 'primary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
}
```

## 📦 Cómo Agregar Nuevos Componentes

### Agregar un componente UI

1. Crea el archivo en `src/components/ui/`
2. Define la interfaz de props
3. Implementa estilos con scope
4. Exporta el componente

```astro
---
// src/components/ui/Badge.astro
interface Props {
  variant?: 'success' | 'warning' | 'error';
}

const { variant = 'success' } = Astro.props;
---

<span class:list={['badge', `badge-${variant}`]}>
  <slot />
</span>

<style>
  .badge {
    /* estilos base */
  }
  .badge-success { /* variante */ }
</style>
```

### Agregar una sección

1. Crea el archivo en `src/components/sections/`
2. Importa componentes UI necesarios
3. Obtén datos de Content Collections si es necesario
4. Compón la sección

```astro
---
// src/components/sections/AboutSection.astro
import Card from '../ui/Card.astro';
import Button from '../ui/Button.astro';
---

<section id="about">
  <Card>
    <h2>Sobre mí</h2>
    <p>...</p>
    <Button>Ver más</Button>
  </Card>
</section>
```

## 🎨 Sistema de Estilos

### Variables CSS Globales
Definidas en `src/styles/global.css`:

```css
:root {
  --primary: oklch(0.95 0 0);
  --accent: oklch(0.9 0 0);
  --font-mono: 'Courier New', monospace;
  /* ... */
}
```

### Estilos con Scope
Cada componente tiene sus estilos encapsulados:

```astro
<style>
  .button {
    /* Solo afecta a este componente */
  }
</style>
```

### Composición de Clases
Usa `class:list` para composición dinámica:

```astro
<div class:list={['base', `variant-${variant}`, className]}>
```

## 📚 Ventajas de Esta Arquitectura

✅ **Mantenibilidad**: Cambios en componentes UI se propagan automáticamente

✅ **Consistencia**: Mismo look & feel en todo el sitio

✅ **Escalabilidad**: Fácil agregar nuevos componentes y secciones

✅ **Testing**: Componentes pequeños son más fáciles de testear

✅ **Performance**: Astro compila a HTML estático, cero JS innecesario

✅ **DX (Developer Experience)**: TypeScript + props tipadas

## 🔄 Flujo de Datos

```
Content Collections (MD)
        ↓
    Sections (obtienen datos)
        ↓
    UI Components (presentación)
        ↓
    HTML estático
```

## 📖 Recursos

- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Astro Components](https://docs.astro.build/en/core-concepts/astro-components/)
- [CSS Modules](https://docs.astro.build/en/guides/styling/#scoped-styles)
