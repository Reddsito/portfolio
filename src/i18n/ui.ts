export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',

    'hero.greeting': 'Hola, soy',
    'hero.name': 'Enrique Querini',
    'hero.role': '> Software Engineer',
    'hero.intro.comment': '// El trabajo de backend es invisible pero fundamental',
    'hero.intro.p1': 'Como software engineer, trabajo en la',
    'hero.intro.p1.bold': 'oscuridad',
    'hero.intro.p1.rest': '— construyendo la infraestructura que nadie ve pero todos necesitan.',
    'hero.intro.p2': 'Es difícil mostrar visualmente lo que hago: servidores, APIs, bases de datos, colas de mensajes, autenticación... Todo sucede detrás de escena.',
    'hero.intro.p3': '→ Por eso creé proyectos',
    'hero.intro.p4': 'Cada uno documenta mi proceso de aprendizaje: desde crear mi propio servidor web, implementar autenticación, trabajar con colas, hasta el despliegue completo.',
    'hero.code.if': 'if',
    'hero.code.else': 'else if',
    'hero.code.experience': 'experiencia',
    'hero.code.passion': 'pasión',
    'hero.code.experience.link': 'salta a experiencia',
    'hero.code.projects.link': 'explora proyectos',

    'projects.title': '$ cat projects.log',
    'projects.description': 'Cada proyecto incluye documentación detallada en Notion sobre el proceso de aprendizaje, desafíos encontrados y soluciones implementadas.',
    'projects.note': '// Estos proyectos representan mi curiosidad y pasión por entender cómo funcionan las cosas a bajo nivel. No son solo código — son mi proceso de aprendizaje documentado.',

    'experience.title': '$ git log --experience',
    'experience.description': 'Si prefieres ir directo al grano, aquí está mi trayectoria profesional.',
    'experience.filter.all': 'Todas',
    'experience.achievements': '// Logros destacados:',
    'experience.contact.prompt': '$ echo "¿Quieres trabajar juntos?"',
    'experience.contact.email': '→ Email',
    'experience.contact.github': '→ GitHub',
    'experience.contact.linkedin': '→ LinkedIn',

    'theme.light': 'Claro',
    'theme.dark': 'Oscuro',
    'theme.toggle': 'Cambiar tema',
    'lang.toggle': 'Cambiar idioma',
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',

    'hero.greeting': "Hi, I'm",
    'hero.name': 'Enrique Querini',
    'hero.role': '> Software Engineer',
    'hero.intro.comment': '// Backend work is invisible but fundamental',
    'hero.intro.p1': 'As a software engineer, I work in the',
    'hero.intro.p1.bold': 'darkness',
    'hero.intro.p1.rest': '— building the infrastructure no one sees but everyone needs.',
    'hero.intro.p2': "It's hard to visually show what I do: servers, APIs, databases, message queues, authentication... Everything happens behind the scenes.",
    'hero.intro.p3': '→ That\'s why I created projects',
    'hero.intro.p4': 'Each one documents my learning process: from building my own web server, implementing authentication, working with queues, to full deployment.',
    'hero.code.if': 'if',
    'hero.code.else': 'else if',
    'hero.code.experience': 'experience',
    'hero.code.passion': 'passion',
    'hero.code.experience.link': 'jump to experience',
    'hero.code.projects.link': 'explore projects',

    'projects.title': '$ cat projects.log',
    'projects.description': 'Each project includes detailed Notion documentation about the learning process, challenges encountered, and solutions implemented.',
    'projects.note': '// These projects represent my curiosity and passion for understanding how things work at a low level. They\'re not just code — they\'re my learning process documented.',

    'experience.title': '$ git log --experience',
    'experience.description': 'If you prefer to get straight to the point, here\'s my professional background.',
    'experience.filter.all': 'All',
    'experience.achievements': '// Key achievements:',
    'experience.contact.prompt': '$ echo "Want to work together?"',
    'experience.contact.email': '→ Email',
    'experience.contact.github': '→ GitHub',
    'experience.contact.linkedin': '→ LinkedIn',

    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.toggle': 'Toggle theme',
    'lang.toggle': 'Toggle language',
  },
} as const;
