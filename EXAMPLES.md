# Ejemplos de Uso de Componentes

Guía práctica con ejemplos de cómo usar cada componente del sistema.

## 🎨 Componentes UI

### Button

```astro
<!-- Botón primario -->
<Button variant="primary" size="md">
  Enviar
</Button>

<!-- Botón como enlace -->
<Button variant="link" href="/about">
  Sobre mí
</Button>

<!-- Botón ghost -->
<Button variant="ghost" size="sm">
  Cancelar
</Button>

<!-- Con clases personalizadas -->
<Button variant="primary" class="custom-class">
  Custom
</Button>

<!-- Con evento click -->
<Button variant="primary" data-action="submit">
  Submit
</Button>

<script>
  document.querySelector('[data-action="submit"]')?.addEventListener('click', () => {
    console.log('Clicked!');
  });
</script>
```

### Card

```astro
<!-- Card simple -->
<Card>
  <h3>Título</h3>
  <p>Contenido de la tarjeta</p>
</Card>

<!-- Card con hover effect -->
<Card variant="hover">
  <p>Pasa el mouse por encima</p>
</Card>

<!-- Card con clase personalizada -->
<Card class="my-custom-card">
  <slot />
</Card>
```

### Tag

```astro
<!-- Tags simples -->
<Tag>React</Tag>
<Tag>TypeScript</Tag>
<Tag>Astro</Tag>

<!-- Grupo de tags -->
<div class="tags-container">
  {['JavaScript', 'Node.js', 'Docker'].map(tech => (
    <Tag>{tech}</Tag>
  ))}
</div>

<style>
  .tags-container {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
</style>
```

### Icon

```astro
<!-- Iconos de diferentes tamaños -->
<Icon name="arrow-down" size="sm" />
<Icon name="briefcase" size="md" />
<Icon name="database" size="lg" />

<!-- Con color personalizado -->
<Icon name="lock" size="md" class="text-primary" />

<!-- En un enlace -->
<a href="#">
  Ver más <Icon name="external-link" size="sm" />
</a>

<!-- Iconos disponibles -->
<Icon name="arrow-down" />
<Icon name="external-link" />
<Icon name="briefcase" />
<Icon name="calendar" />
<Icon name="server" />
<Icon name="lock" />
<Icon name="database" />
<Icon name="layers" />
<Icon name="zap" />
<Icon name="cloud" />
```

### ProjectCard

```astro
---
import ProjectCard from '../components/ui/ProjectCard.astro';
---

<ProjectCard
  title="Mi Proyecto Increíble"
  description="Una descripción breve pero detallada de lo que hace el proyecto."
  icon="server"
  notionUrl="https://notion.so/mi-proyecto"
  tags={['Node.js', 'Express', 'PostgreSQL']}
/>

<!-- Sin URL de Notion -->
<ProjectCard
  title="Proyecto Local"
  description="Este proyecto no tiene documentación externa"
  icon="database"
  tags={['MySQL', 'Redis']}
/>
```

### ExperienceCard

```astro
---
import ExperienceCard from '../components/ui/ExperienceCard.astro';
---

<ExperienceCard
  company="Mi Empresa"
  position="Senior Developer"
  period="2022 - Presente"
  description="Desarrollo de aplicaciones backend escalables usando Node.js y PostgreSQL."
  achievements={[
    'Reduje el tiempo de respuesta en 50%',
    'Lideré la migración a microservicios',
    'Implementé CI/CD pipeline'
  ]}
  stack={['Node.js', 'TypeScript', 'Docker', 'AWS']}
/>
```

## 📦 Componiendo Componentes

### Crear una Card Custom

```astro
---
import Card from '../ui/Card.astro';
import Icon from '../ui/Icon.astro';
import Tag from '../ui/Tag.astro';
import Button from '../ui/Button.astro';

interface Props {
  title: string;
  description: string;
  category: string;
}

const { title, description, category } = Astro.props;
---

<Card variant="hover">
  <article class="custom-card">
    <header>
      <Icon name="zap" size="md" />
      <h3>{title}</h3>
    </header>

    <p>{description}</p>

    <footer>
      <Tag>{category}</Tag>
      <Button variant="link" href={`/posts/${title}`}>
        Leer más
      </Button>
    </footer>
  </article>
</Card>

<style>
  .custom-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

### Grid de Cards

```astro
---
import Card from '../ui/Card.astro';
---

<section class="cards-grid">
  {items.map(item => (
    <Card variant="hover">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </Card>
  ))}
</section>

<style>
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
</style>
```

### Lista de Items con Iconos

```astro
---
import Icon from '../ui/Icon.astro';

const features = [
  { icon: 'server', text: 'Servidor escalable' },
  { icon: 'lock', text: 'Autenticación segura' },
  { icon: 'database', text: 'Base de datos optimizada' }
];
---

<ul class="features-list">
  {features.map(feature => (
    <li>
      <Icon name={feature.icon} size="sm" />
      <span>{feature.text}</span>
    </li>
  ))}
</ul>

<style>
  .features-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
</style>
```

## 🎯 Secciones

### Crear una Nueva Sección

```astro
---
// src/components/sections/AboutSection.astro
import Card from '../ui/Card.astro';
import Button from '../ui/Button.astro';
import Icon from '../ui/Icon.astro';
---

<section id="about" class="about-section">
  <div class="container">
    <header class="section-header">
      <h2>
        <Icon name="briefcase" size="lg" />
        Sobre Mí
      </h2>
      <p class="description">
        Conoce más sobre mi experiencia y habilidades
      </p>
    </header>

    <Card>
      <div class="content">
        <p>
          Soy un desarrollador backend apasionado por crear
          sistemas escalables y eficientes.
        </p>

        <Button variant="primary" href="/contact">
          Contáctame
        </Button>
      </div>
    </Card>
  </div>
</section>

<style>
  .about-section {
    padding: 5rem 1rem;
  }

  .container {
    max-width: 64rem;
    margin: 0 auto;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .section-header h2 {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
</style>
```

### Sección con Datos Dinámicos

```astro
---
// src/components/sections/SkillsSection.astro
import Card from '../ui/Card.astro';
import Tag from '../ui/Tag.astro';

const skills = {
  languages: ['JavaScript', 'TypeScript', 'Python'],
  frameworks: ['Node.js', 'Express', 'FastAPI'],
  databases: ['PostgreSQL', 'MongoDB', 'Redis']
};
---

<section id="skills" class="skills-section">
  <div class="container">
    <h2>Habilidades</h2>

    {Object.entries(skills).map(([category, items]) => (
      <Card>
        <h3>{category}</h3>
        <div class="tags">
          {items.map(skill => <Tag>{skill}</Tag>)}
        </div>
      </Card>
    ))}
  </div>
</section>

<style>
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }
</style>
```

## 🔄 Patrones Comunes

### Card con Imagen

```astro
<Card variant="hover">
  <img src="/project-thumb.jpg" alt="Project" />
  <h3>Proyecto</h3>
  <p>Descripción</p>
  <Tag>Featured</Tag>
</Card>
```

### Botón con Loading State

```astro
<Button variant="primary" id="submit-btn">
  <span class="text">Enviar</span>
  <span class="loader" style="display: none;">Loading...</span>
</Button>

<script>
  const btn = document.getElementById('submit-btn');
  btn?.addEventListener('click', async () => {
    const text = btn.querySelector('.text');
    const loader = btn.querySelector('.loader');

    text.style.display = 'none';
    loader.style.display = 'inline';

    // Simular async operation
    await new Promise(r => setTimeout(r, 2000));

    text.style.display = 'inline';
    loader.style.display = 'none';
  });
</script>
```

### Tabs con Cards

```astro
---
const tabs = ['Proyectos', 'Experiencia', 'Skills'];
---

<div class="tabs-container">
  <div class="tabs">
    {tabs.map(tab => (
      <Button variant="ghost">{tab}</Button>
    ))}
  </div>

  <Card>
    <div class="tab-content">
      <!-- Contenido dinámico -->
    </div>
  </Card>
</div>

<style>
  .tabs {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
</style>
```

## 💡 Tips

### Personalizar Colores

```astro
<Button variant="primary" class="custom-button">
  Click
</Button>

<style>
  .custom-button {
    --primary: #ff6b6b;
    --accent: #ee5a6f;
  }
</style>
```

### Responsive Grid

```astro
<div class="responsive-grid">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</div>

<style>
  .responsive-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .responsive-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .responsive-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
```

### Animaciones

```astro
<Card class="animated-card">
  <p>Hover me!</p>
</Card>

<style>
  .animated-card {
    transition: transform 0.3s ease;
  }

  .animated-card:hover {
    transform: translateY(-5px);
  }
</style>
```
