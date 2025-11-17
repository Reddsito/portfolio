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
      id: 'tech-startup',
      company: "Tech Startup",
      position: "Senior Backend Engineer",
      period: "2022 - Presente",
      description: "Arquitectura de microservicios escalables, optimización de bases de datos y liderazgo técnico del equipo backend.",
      achievements: [
        "Reduje el tiempo de respuesta de APIs en 60% mediante caching estratégico",
        "Implementé sistema de colas que procesa 1M+ mensajes diarios",
        "Migré monolito a microservicios sin downtime"
      ],
      stack: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
      order: 1
    },
    {
      id: 'ecommerce',
      company: "E-commerce Platform",
      position: "Backend Developer",
      period: "2020 - 2022",
      description: "Desarrollo de APIs RESTful, integración de pasarelas de pago y optimización de queries de base de datos.",
      achievements: [
        "Desarrollé sistema de inventario en tiempo real",
        "Integré múltiples pasarelas de pago (Stripe, PayPal)",
        "Optimicé queries reduciendo carga de DB en 40%"
      ],
      stack: ["Python", "Django", "MySQL", "Celery", "RabbitMQ"],
      order: 2
    },
    {
      id: 'fintech',
      company: "Fintech Company",
      position: "Junior Backend Developer",
      period: "2019 - 2020",
      description: "Mantenimiento de APIs, implementación de features y trabajo con sistemas de autenticación seguros.",
      achievements: [
        "Implementé autenticación de dos factores",
        "Contribuí a sistema de auditoría de transacciones",
        "Mejoré cobertura de tests del 40% al 80%"
      ],
      stack: ["Java", "Spring Boot", "PostgreSQL", "Kafka"],
      order: 3
    }
  ],
  en: [
    {
      id: 'tech-startup',
      company: "Tech Startup",
      position: "Senior Backend Engineer",
      period: "2022 - Present",
      description: "Scalable microservices architecture, database optimization, and technical leadership of the backend team.",
      achievements: [
        "Reduced API response time by 60% through strategic caching",
        "Implemented queue system processing 1M+ daily messages",
        "Migrated monolith to microservices with zero downtime"
      ],
      stack: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
      order: 1
    },
    {
      id: 'ecommerce',
      company: "E-commerce Platform",
      position: "Backend Developer",
      period: "2020 - 2022",
      description: "RESTful API development, payment gateway integration, and database query optimization.",
      achievements: [
        "Developed real-time inventory system",
        "Integrated multiple payment gateways (Stripe, PayPal)",
        "Optimized queries reducing DB load by 40%"
      ],
      stack: ["Python", "Django", "MySQL", "Celery", "RabbitMQ"],
      order: 2
    },
    {
      id: 'fintech',
      company: "Fintech Company",
      position: "Junior Backend Developer",
      period: "2019 - 2020",
      description: "API maintenance, feature implementation, and work with secure authentication systems.",
      achievements: [
        "Implemented two-factor authentication",
        "Contributed to transaction audit system",
        "Improved test coverage from 40% to 80%"
      ],
      stack: ["Java", "Spring Boot", "PostgreSQL", "Kafka"],
      order: 3
    }
  ]
};
