export const projectsData = {
  es: [
    {
      id: 'web-server',
      title: "Build Your Own Web Server",
      description: "Construí un servidor HTTP desde cero para entender cómo funcionan los protocolos de red, manejo de sockets y procesamiento de requests.",
      icon: "server",
      notionUrl: "#",
      tags: ["TCP/IP", "HTTP", "Sockets"],
      order: 1
    },
    {
      id: 'authentication',
      title: "User Authentication System",
      description: "Sistema completo de autenticación con JWT, refresh tokens, hash de passwords con bcrypt y manejo seguro de sesiones.",
      icon: "lock",
      notionUrl: "#",
      tags: ["JWT", "bcrypt", "Sessions"],
      order: 2
    },
    {
      id: 'database',
      title: "Database Design & Optimization",
      description: "Diseño de esquemas relacionales, índices, queries optimizadas y estrategias de caching para mejorar performance.",
      icon: "database",
      notionUrl: "#",
      tags: ["PostgreSQL", "Indexing", "Redis"],
      order: 3
    },
    {
      id: 'message-queue',
      title: "Message Queue System",
      description: "Implementación de colas de mensajes para procesamiento asíncrono, manejo de workers y estrategias de retry.",
      icon: "layers",
      notionUrl: "#",
      tags: ["RabbitMQ", "Workers", "Async"],
      order: 4
    },
    {
      id: 'rest-api',
      title: "RESTful API Architecture",
      description: "API escalable con versionado, rate limiting, documentación con OpenAPI y manejo robusto de errores.",
      icon: "zap",
      notionUrl: "#",
      tags: ["REST", "OpenAPI", "Rate Limiting"],
      order: 5
    },
    {
      id: 'devops',
      title: "Deployment & DevOps",
      description: "CI/CD pipelines, containerización con Docker, orquestación con Kubernetes y monitoreo de aplicaciones en producción.",
      icon: "cloud",
      notionUrl: "#",
      tags: ["Docker", "K8s", "CI/CD"],
      order: 6
    }
  ],
  en: [
    {
      id: 'web-server',
      title: "Build Your Own Web Server",
      description: "Built an HTTP server from scratch to understand network protocols, socket handling, and request processing.",
      icon: "server",
      notionUrl: "#",
      tags: ["TCP/IP", "HTTP", "Sockets"],
      order: 1
    },
    {
      id: 'authentication',
      title: "User Authentication System",
      description: "Complete authentication system with JWT, refresh tokens, password hashing with bcrypt, and secure session management.",
      icon: "lock",
      notionUrl: "#",
      tags: ["JWT", "bcrypt", "Sessions"],
      order: 2
    },
    {
      id: 'database',
      title: "Database Design & Optimization",
      description: "Relational schema design, indexes, optimized queries, and caching strategies to improve performance.",
      icon: "database",
      notionUrl: "#",
      tags: ["PostgreSQL", "Indexing", "Redis"],
      order: 3
    },
    {
      id: 'message-queue',
      title: "Message Queue System",
      description: "Implementation of message queues for asynchronous processing, worker management, and retry strategies.",
      icon: "layers",
      notionUrl: "#",
      tags: ["RabbitMQ", "Workers", "Async"],
      order: 4
    },
    {
      id: 'rest-api',
      title: "RESTful API Architecture",
      description: "Scalable API with versioning, rate limiting, OpenAPI documentation, and robust error handling.",
      icon: "zap",
      notionUrl: "#",
      tags: ["REST", "OpenAPI", "Rate Limiting"],
      order: 5
    },
    {
      id: 'devops',
      title: "Deployment & DevOps",
      description: "CI/CD pipelines, containerization with Docker, Kubernetes orchestration, and production application monitoring.",
      icon: "cloud",
      notionUrl: "#",
      tags: ["Docker", "K8s", "CI/CD"],
      order: 6
    }
  ]
};

export const experienceData = {
  es: [
    {
      id: 'merkapp',
      company: "Merkapp",
      position: "Ingeniero de Software",
      period: "2023 - Presente",
      description: "Desarrollo full-stack de plataforma de e-commerce y logística. Migración completa de Ruby on Rails a NestJS, integraciones con Uber Direct y PedidosYa, sistema de pagos, panel administrativo y app mobile para pickers.",
      achievements: [
        "Migré backend completo de Ruby on Rails a NestJS con PostgreSQL, Redis y AWS",
        "Implementé integración con Uber Direct (API REST, webhooks, tracking en tiempo real con Socket.io)",
        "Desarrollé pasarelas de pago Yappy y Cybersource con tokenización, 3DS y prevención de fraude",
        "Creé panel administrativo completo con dashboards, asignación de órdenes en tiempo real y gestión de roles",
        "Desarrollé app mobile React Native para pickers con escaneo de productos, rutas y notificaciones WhatsApp",
        "Integré API de PedidosYa para sincronización de catálogo e inventario",
        "Implementé sistema de logs con Loki y monitoreo de recursos con Prometheus para observabilidad completa",
        "Configuré despliegue a producción con zero downtime usando estrategias de rolling updates en Docker, pipelines CI/CD en AWS y Digital Ocean"
      ],
      stack: ["Node.js", "NestJS", "Next.js", "PostgreSQL", "Redis", "Docker", "AWS", "Linux", "React Native", "TypeScript"],
      order: 1
    }
  ],
  en: [
    {
      id: 'merkapp',
      company: "Merkapp",
      position: "Software Engineer",
      period: "2023 - Present",
      description: "Full-stack development of e-commerce and logistics platform. Complete migration from Ruby on Rails to NestJS, integrations with Uber Direct and PedidosYa, payment systems, admin panel, and mobile app for pickers.",
      achievements: [
        "Migrated complete backend from Ruby on Rails to NestJS with PostgreSQL, Redis, and AWS",
        "Implemented Uber Direct integration (REST API, webhooks, real-time tracking with Socket.io)",
        "Developed Yappy and Cybersource payment gateways with tokenization, 3DS, and fraud prevention",
        "Built complete admin panel with dashboards, real-time order assignment, and role management",
        "Developed React Native mobile app for pickers with product scanning, routes, and WhatsApp notifications",
        "Integrated PedidosYa API for catalog and inventory synchronization",
        "Implemented logging system with Loki and resource monitoring with Prometheus for complete observability",
        "Configured zero downtime production deployment using Docker rolling update strategies, CI/CD pipelines on AWS and Digital Ocean"
      ],
      stack: ["Node.js", "NestJS", "Next.js", "PostgreSQL", "Redis", "Docker", "AWS", "Linux", "React Native", "TypeScript"],
      order: 1
    }
  ]
};
