export const projectDetailsData = {
	es: {
		"web-server": {
			overview: {
				title: "Descripción General",
				content: "Este proyecto surgió de la curiosidad de entender cómo funciona un servidor web a nivel fundamental. En lugar de usar frameworks populares como Express o FastAPI, decidí construir un servidor HTTP desde cero utilizando sockets TCP/IP nativos. El objetivo era comprender cada aspecto del protocolo HTTP, desde el handshake TCP hasta el parseo de requests y la generación de responses."
			},
			challenge: {
				title: "El Desafío",
				content: "El mayor reto fue implementar el manejo concurrente de múltiples conexiones sin usar librerías de terceros. Tuve que lidiar con sockets bloqueantes vs no-bloqueantes, gestión de buffers, y el ciclo de vida completo de una conexión HTTP. También aprendí sobre los límites del sistema operativo en cuanto a file descriptors y cómo afectan la escalabilidad."
			},
			solution: {
				title: "La Solución",
				content: "Implementé un servidor multi-threaded que acepta conexiones en el thread principal y las delega a workers para su procesamiento. Cada worker parsea el request HTTP manualmente, identifica el método y path, y genera una response apropiada. El servidor soporta GET y POST requests, servir archivos estáticos, y enviar diferentes status codes según sea necesario."
			},
			technical: {
				title: "Detalles Técnicos",
				items: [
					"Implementación de sockets TCP/IP usando la librería estándar",
					"Parseo manual del protocolo HTTP/1.1 (request line, headers, body)",
					"Pool de threads para manejo concurrente de conexiones",
					"Gestión de buffers para lectura y escritura de datos",
					"Implementación de Content-Type detection para archivos estáticos",
					"Manejo de keep-alive y connection close",
					"Testing con herramientas como curl y Apache Bench"
				]
			},
			learnings: {
				title: "Aprendizajes Clave",
				items: [
					"Comprendí a profundidad el modelo cliente-servidor y el protocolo HTTP",
					"Aprendí sobre programación de sistemas y operaciones de I/O a bajo nivel",
					"Entendí las ventajas y limitaciones de diferentes modelos de concurrencia",
					"Gané apreciación por la complejidad que abstraen los frameworks modernos",
					"Desarrollé habilidades de debugging a nivel de sistema operativo",
					"Aprendí sobre performance tuning y profiling de aplicaciones de red"
				]
			},
			images: {
				title: "Capturas del Proyecto",
				items: [
					{
						placeholder: "🖥️",
						caption: "Terminal mostrando el servidor aceptando conexiones"
					},
					{
						placeholder: "📊",
						caption: "Benchmarks de performance con Apache Bench"
					},
					{
						placeholder: "🔍",
						caption: "Request/Response HTTP capturados con Wireshark"
					}
				]
			}
		},
		"authentication": {
			overview: {
				title: "Descripción General",
				content: "Un sistema de autenticación completo que implementa las mejores prácticas de seguridad modernas. El proyecto incluye registro de usuarios, login, gestión de tokens JWT, refresh tokens, y todas las características necesarias para un sistema de autenticación robusto en producción."
			},
			challenge: {
				title: "El Desafío",
				content: "La autenticación es un área crítica donde los errores tienen consecuencias graves. El desafío fue implementar un sistema seguro que proteja contra vulnerabilidades comunes como: almacenamiento inseguro de passwords, ataques de timing, session hijacking, CSRF, y XSS. También fue necesario balancear seguridad con experiencia de usuario."
			},
			solution: {
				title: "La Solución",
				content: "Implementé un sistema dual-token: access tokens de corta duración para autenticación y refresh tokens de larga duración almacenados de forma segura. Los passwords se hashean con bcrypt usando salt aleatorio. Los tokens JWT incluyen claims personalizados y están firmados con algoritmos seguros. El sistema también implementa rate limiting y protección contra ataques de fuerza bruta."
			},
			technical: {
				title: "Detalles Técnicos",
				items: [
					"Hashing de passwords con bcrypt (cost factor: 12)",
					"JWT con algoritmo RS256 para firmado asimétrico",
					"Access tokens (15 min) y Refresh tokens (7 días)",
					"Refresh token rotation para mayor seguridad",
					"Whitelist de tokens en Redis para revocación instantánea",
					"Rate limiting por IP y por usuario",
					"Protección contra timing attacks en validación de passwords",
					"HTTP-only cookies para almacenamiento seguro de tokens",
					"CORS configurado correctamente para prevenir CSRF"
				]
			},
			learnings: {
				title: "Aprendizajes Clave",
				items: [
					"Comprendí las diferencias entre authentication y authorization",
					"Aprendí sobre criptografía aplicada: hashing, salting, y algoritmos de firmado",
					"Entendí el flujo completo de tokens JWT y sus trade-offs",
					"Aprendí sobre vectores de ataque comunes y cómo mitigarlos",
					"Desarrollé criterio para evaluar security trade-offs",
					"Gané experiencia con Redis para gestión de sesiones distribuidas"
				]
			},
			images: {
				title: "Capturas del Proyecto",
				items: [
					{
						placeholder: "🔐",
						caption: "Diagrama de flujo del sistema de autenticación"
					},
					{
						placeholder: "🎫",
						caption: "Estructura del payload JWT con claims personalizados"
					},
					{
						placeholder: "⚠️",
						caption: "Rate limiting en acción bloqueando ataques de fuerza bruta"
					}
				]
			}
		},
		"database": {
			overview: {
				title: "Descripción General",
				content: "Este proyecto explora el diseño y optimización de bases de datos relacionales. Incluye desde el modelado de esquemas normalizados hasta técnicas avanzadas de optimización como indexing, query optimization, y estrategias de caching. El foco está en entender cómo las decisiones de diseño afectan el performance en aplicaciones reales."
			},
			challenge: {
				title: "El Desafío",
				content: "Diseñar un esquema que sea fácil de mantener pero que también escale con millones de registros. El reto fue identificar bottlenecks de performance, entender query plans, y aplicar optimizaciones sin sobre-optimizar prematuramente. También aprendí que el caching puede ser una espada de doble filo si no se implementa correctamente."
			},
			solution: {
				title: "La Solución",
				content: "Implementé un esquema normalizado en 3NF con índices estratégicamente ubicados en columnas que se usan frecuentemente en WHEREs y JOINs. Para queries complejas, uso EXPLAIN ANALYZE para entender el query plan y optimizar en consecuencia. Implementé caching en múltiples niveles: query results en Redis y materialized views para agregaciones pesadas."
			},
			technical: {
				title: "Detalles Técnicos",
				items: [
					"Diseño de esquema normalizado (1NF, 2NF, 3NF) con desnormalización selectiva",
					"Índices B-tree en columnas de búsqueda frecuente",
					"Índices compuestos para queries multi-columna",
					"Partial indexes para subsets específicos de datos",
					"Materialized views para agregaciones complejas",
					"Query optimization usando EXPLAIN ANALYZE",
					"Redis como cache layer con estrategia de invalidación",
					"Connection pooling con configuración optimizada",
					"Partitioning de tablas grandes por fecha"
				]
			},
			learnings: {
				title: "Aprendizajes Clave",
				items: [
					"Comprendí la teoría de normalización y cuándo romper las reglas",
					"Aprendí a leer query plans y identificar operaciones costosas",
					"Entendí diferentes tipos de índices y cuándo usar cada uno",
					"Desarrollé intuición para el trade-off entre lectura y escritura",
					"Aprendí sobre cache invalidation strategies y sus desafíos",
					"Gané experiencia con monitoring y profiling de queries en producción"
				]
			},
			images: {
				title: "Capturas del Proyecto",
				items: [
					{
						placeholder: "📐",
						caption: "Diagrama ER del esquema de base de datos"
					},
					{
						placeholder: "📈",
						caption: "Query performance antes y después de indexing"
					},
					{
						placeholder: "🔄",
						caption: "Arquitectura de caching multi-nivel"
					}
				]
			}
		},
		"message-queue": {
			overview: {
				title: "Descripción General",
				content: "Implementación de un sistema de colas de mensajes para desacoplar componentes y procesar tareas de forma asíncrona. El proyecto demuestra cómo usar message queues para mejorar la escalabilidad y resiliencia de aplicaciones, manejando tareas pesadas como procesamiento de imágenes, envío de emails, y generación de reportes en background."
			},
			challenge: {
				title: "El Desafío",
				content: "El mayor desafío fue garantizar la entrega de mensajes sin pérdidas ni duplicados. Tuve que lidiar con workers que fallan a mitad de procesamiento, mensajes que causan errores repetidamente (poison messages), y mantener el orden de procesamiento cuando es importante. También fue necesario implementar monitoring para visibilidad del estado de las colas."
			},
			solution: {
				title: "La Solución",
				content: "Implementé el sistema usando RabbitMQ con múltiples workers que consumen mensajes de diferentes colas. Cada worker procesa mensajes de forma idempotente para manejar redeliveries. Para mensajes que fallan repetidamente, implementé una estrategia de retry con exponential backoff y una dead letter queue para análisis posterior."
			},
			technical: {
				title: "Detalles Técnicos",
				items: [
					"RabbitMQ como message broker con durabilidad habilitada",
					"Múltiples workers con procesamiento concurrente",
					"Acknowledgment manual para garantizar procesamiento",
					"Retry logic con exponential backoff (1s, 2s, 4s, 8s...)",
					"Dead Letter Queue para mensajes que fallan persistentemente",
					"Priority queues para mensajes urgentes",
					"Message persistence en disco para durabilidad",
					"Monitoring con Prometheus y Grafana",
					"Procesamiento idempotente para manejar duplicados"
				]
			},
			learnings: {
				title: "Aprendizajes Clave",
				items: [
					"Comprendí los patrones de messaging: pub/sub, work queues, routing",
					"Aprendí sobre garantías de entrega: at-most-once, at-least-once, exactly-once",
					"Entendí la importancia de la idempotencia en sistemas distribuidos",
					"Desarrollé estrategias para manejar failures y poison messages",
					"Aprendí a balancear throughput vs latencia en workers",
					"Gané experiencia con observability en sistemas asíncronos"
				]
			},
			images: {
				title: "Capturas del Proyecto",
				items: [
					{
						placeholder: "📮",
						caption: "Arquitectura del sistema de message queues"
					},
					{
						placeholder: "📊",
						caption: "Dashboard de monitoring con métricas de las colas"
					},
					{
						placeholder: "🔁",
						caption: "Flujo de retry con exponential backoff"
					}
				]
			}
		},
		"rest-api": {
			overview: {
				title: "Descripción General",
				content: "Una API RESTful completa siguiendo las mejores prácticas de diseño de APIs. El proyecto incluye versionado, rate limiting, autenticación, documentación interactiva con OpenAPI/Swagger, y un sistema robusto de manejo de errores. El objetivo es crear una API que sea fácil de usar, mantener y escalar."
			},
			challenge: {
				title: "El Desafío",
				content: "Diseñar una API que sea intuitiva pero también extensible. El reto fue tomar decisiones sobre la estructura de endpoints, versionado, y contratos de datos que no rompan la compatibilidad con clientes existentes. También fue necesario implementar rate limiting efectivo sin afectar usuarios legítimos y crear documentación que se mantenga sincronizada con el código."
			},
			solution: {
				title: "La Solución",
				content: "Implementé una API siguiendo los principios REST con recursos claramente definidos y métodos HTTP semánticamente correctos. El versionado se hace via URL (/v1/, /v2/). Rate limiting está implementado con Redis usando sliding window algorithm. La documentación se genera automáticamente del código usando decorators/annotations, garantizando que siempre esté actualizada."
			},
			technical: {
				title: "Detalles Técnicos",
				items: [
					"Endpoints RESTful con recursos y sub-recursos anidados",
					"Versionado de API via URL path (/api/v1/, /api/v2/)",
					"Rate limiting con sliding window algorithm en Redis",
					"Autenticación con Bearer tokens (JWT)",
					"Documentación OpenAPI 3.0 generada automáticamente",
					"Swagger UI para testing interactivo",
					"Manejo de errores consistente con Problem Details (RFC 7807)",
					"Paginación con cursor-based pagination",
					"HATEOAS para discoverability",
					"Content negotiation (JSON, XML)"
				]
			},
			learnings: {
				title: "Aprendizajes Clave",
				items: [
					"Comprendí los principios de diseño REST y sus ventajas",
					"Aprendí sobre API versioning strategies y sus trade-offs",
					"Entendí diferentes algoritmos de rate limiting y sus características",
					"Desarrollé criterio para diseñar contratos de API estables",
					"Aprendí la importancia de buena documentación y developer experience",
					"Gané experiencia con OpenAPI/Swagger para especificaciones de API"
				]
			},
			images: {
				title: "Capturas del Proyecto",
				items: [
					{
						placeholder: "📝",
						caption: "Swagger UI con documentación interactiva"
					},
					{
						placeholder: "🚦",
						caption: "Rate limiting en acción protegiendo la API"
					},
					{
						placeholder: "📋",
						caption: "Ejemplo de respuesta con formato Problem Details"
					}
				]
			}
		},
		"devops": {
			overview: {
				title: "Descripción General",
				content: "Este proyecto cubre el ciclo completo de deployment y DevOps para aplicaciones modernas. Incluye containerización con Docker, orquestación con Kubernetes, CI/CD pipelines automatizados, y monitoring en producción. El objetivo es entender cómo llevar código desde desarrollo hasta producción de forma automatizada, segura y confiable."
			},
			challenge: {
				title: "El Desafío",
				content: "El mayor desafío fue configurar un pipeline completo que sea robusto pero no demasiado complejo. Tuve que aprender sobre múltiples herramientas (Docker, Kubernetes, CI/CD, monitoring) y cómo integrarlas coherentemente. También fue necesario implementar zero-downtime deployments y rollback automático cuando algo falla."
			},
			solution: {
				title: "La Solución",
				content: "Containerizé la aplicación con Docker usando multi-stage builds para optimizar tamaño. Implementé CI/CD con GitHub Actions que corre tests, build, y deployment automático. El deployment a Kubernetes usa rolling updates para zero downtime. Para monitoring, configuré Prometheus para métricas y Grafana para visualización, con alerts automáticos cuando algo sale mal."
			},
			technical: {
				title: "Detalles Técnicos",
				items: [
					"Dockerfiles con multi-stage builds para optimización",
					"Docker Compose para desarrollo local con múltiples servicios",
					"Kubernetes deployment con rolling updates y rollback automático",
					"Health checks (liveness, readiness probes) para K8s",
					"CI/CD pipeline con GitHub Actions (test → build → deploy)",
					"GitOps workflow con automated deployments",
					"Prometheus para recolección de métricas de aplicación",
					"Grafana dashboards para visualización de métricas",
					"Alertmanager para notifications de incidentes",
					"Horizontal Pod Autoscaling basado en métricas"
				]
			},
			learnings: {
				title: "Aprendizajes Clave",
				items: [
					"Comprendí el ciclo completo de desarrollo a producción",
					"Aprendí sobre containerización y sus ventajas para deployment",
					"Entendí los conceptos de Kubernetes: pods, services, deployments",
					"Desarrollé pipelines de CI/CD automatizados y confiables",
					"Aprendí sobre observability: metrics, logs, traces",
					"Gané experiencia con incident response y postmortems"
				]
			},
			images: {
				title: "Capturas del Proyecto",
				items: [
					{
						placeholder: "🐳",
						caption: "Arquitectura de containers con Docker Compose"
					},
					{
						placeholder: "☸️",
						caption: "Kubernetes cluster con múltiples pods"
					},
					{
						placeholder: "📊",
						caption: "Grafana dashboard con métricas en tiempo real"
					}
				]
			}
		}
	},
	en: {
		"web-server": {
			overview: {
				title: "Overview",
				content: "This project emerged from the curiosity to understand how a web server works at a fundamental level. Instead of using popular frameworks like Express or FastAPI, I decided to build an HTTP server from scratch using native TCP/IP sockets. The goal was to understand every aspect of the HTTP protocol, from TCP handshake to request parsing and response generation."
			},
			challenge: {
				title: "The Challenge",
				content: "The biggest challenge was implementing concurrent handling of multiple connections without using third-party libraries. I had to deal with blocking vs non-blocking sockets, buffer management, and the complete lifecycle of an HTTP connection. I also learned about operating system limits regarding file descriptors and how they affect scalability."
			},
			solution: {
				title: "The Solution",
				content: "I implemented a multi-threaded server that accepts connections on the main thread and delegates them to workers for processing. Each worker manually parses the HTTP request, identifies the method and path, and generates an appropriate response. The server supports GET and POST requests, serving static files, and sending different status codes as needed."
			},
			technical: {
				title: "Technical Details",
				items: [
					"TCP/IP socket implementation using standard library",
					"Manual parsing of HTTP/1.1 protocol (request line, headers, body)",
					"Thread pool for concurrent connection handling",
					"Buffer management for data reading and writing",
					"Content-Type detection implementation for static files",
					"Keep-alive and connection close handling",
					"Testing with tools like curl and Apache Bench"
				]
			},
			learnings: {
				title: "Key Learnings",
				items: [
					"Gained deep understanding of client-server model and HTTP protocol",
					"Learned about systems programming and low-level I/O operations",
					"Understood advantages and limitations of different concurrency models",
					"Gained appreciation for complexity abstracted by modern frameworks",
					"Developed operating system-level debugging skills",
					"Learned about performance tuning and profiling network applications"
				]
			},
			images: {
				title: "Project Screenshots",
				items: [
					{
						placeholder: "🖥️",
						caption: "Terminal showing server accepting connections"
					},
					{
						placeholder: "📊",
						caption: "Performance benchmarks with Apache Bench"
					},
					{
						placeholder: "🔍",
						caption: "HTTP Request/Response captured with Wireshark"
					}
				]
			}
		},
		"authentication": {
			overview: {
				title: "Overview",
				content: "A complete authentication system implementing modern security best practices. The project includes user registration, login, JWT token management, refresh tokens, and all necessary features for a robust production authentication system."
			},
			challenge: {
				title: "The Challenge",
				content: "Authentication is a critical area where mistakes have serious consequences. The challenge was to implement a secure system that protects against common vulnerabilities like: insecure password storage, timing attacks, session hijacking, CSRF, and XSS. It was also necessary to balance security with user experience."
			},
			solution: {
				title: "The Solution",
				content: "I implemented a dual-token system: short-lived access tokens for authentication and long-lived refresh tokens stored securely. Passwords are hashed with bcrypt using random salt. JWT tokens include custom claims and are signed with secure algorithms. The system also implements rate limiting and protection against brute force attacks."
			},
			technical: {
				title: "Technical Details",
				items: [
					"Password hashing with bcrypt (cost factor: 12)",
					"JWT with RS256 algorithm for asymmetric signing",
					"Access tokens (15 min) and Refresh tokens (7 days)",
					"Refresh token rotation for enhanced security",
					"Token whitelist in Redis for instant revocation",
					"Rate limiting per IP and per user",
					"Protection against timing attacks in password validation",
					"HTTP-only cookies for secure token storage",
					"CORS properly configured to prevent CSRF"
				]
			},
			learnings: {
				title: "Key Learnings",
				items: [
					"Understood differences between authentication and authorization",
					"Learned about applied cryptography: hashing, salting, and signing algorithms",
					"Understood complete JWT token flow and its trade-offs",
					"Learned about common attack vectors and how to mitigate them",
					"Developed judgment for evaluating security trade-offs",
					"Gained experience with Redis for distributed session management"
				]
			},
			images: {
				title: "Project Screenshots",
				items: [
					{
						placeholder: "🔐",
						caption: "Authentication system flow diagram"
					},
					{
						placeholder: "🎫",
						caption: "JWT payload structure with custom claims"
					},
					{
						placeholder: "⚠️",
						caption: "Rate limiting in action blocking brute force attacks"
					}
				]
			}
		},
		"database": {
			overview: {
				title: "Overview",
				content: "This project explores relational database design and optimization. It includes everything from modeling normalized schemas to advanced optimization techniques like indexing, query optimization, and caching strategies. The focus is on understanding how design decisions affect performance in real applications."
			},
			challenge: {
				title: "The Challenge",
				content: "Designing a schema that is easy to maintain but also scales with millions of records. The challenge was identifying performance bottlenecks, understanding query plans, and applying optimizations without premature over-optimization. I also learned that caching can be a double-edged sword if not implemented correctly."
			},
			solution: {
				title: "The Solution",
				content: "I implemented a normalized schema in 3NF with strategically placed indexes on columns frequently used in WHEREs and JOINs. For complex queries, I use EXPLAIN ANALYZE to understand the query plan and optimize accordingly. I implemented caching at multiple levels: query results in Redis and materialized views for heavy aggregations."
			},
			technical: {
				title: "Technical Details",
				items: [
					"Normalized schema design (1NF, 2NF, 3NF) with selective denormalization",
					"B-tree indexes on frequently searched columns",
					"Composite indexes for multi-column queries",
					"Partial indexes for specific data subsets",
					"Materialized views for complex aggregations",
					"Query optimization using EXPLAIN ANALYZE",
					"Redis as cache layer with invalidation strategy",
					"Connection pooling with optimized configuration",
					"Large table partitioning by date"
				]
			},
			learnings: {
				title: "Key Learnings",
				items: [
					"Understood normalization theory and when to break the rules",
					"Learned to read query plans and identify costly operations",
					"Understood different index types and when to use each",
					"Developed intuition for read vs write trade-offs",
					"Learned about cache invalidation strategies and their challenges",
					"Gained experience with monitoring and profiling queries in production"
				]
			},
			images: {
				title: "Project Screenshots",
				items: [
					{
						placeholder: "📐",
						caption: "ER diagram of database schema"
					},
					{
						placeholder: "📈",
						caption: "Query performance before and after indexing"
					},
					{
						placeholder: "🔄",
						caption: "Multi-level caching architecture"
					}
				]
			}
		},
		"message-queue": {
			overview: {
				title: "Overview",
				content: "Implementation of a message queue system to decouple components and process tasks asynchronously. The project demonstrates how to use message queues to improve application scalability and resilience, handling heavy tasks like image processing, email sending, and background report generation."
			},
			challenge: {
				title: "The Challenge",
				content: "The biggest challenge was guaranteeing message delivery without losses or duplicates. I had to deal with workers that fail mid-processing, messages that repeatedly cause errors (poison messages), and maintaining processing order when important. It was also necessary to implement monitoring for queue state visibility."
			},
			solution: {
				title: "The Solution",
				content: "I implemented the system using RabbitMQ with multiple workers consuming messages from different queues. Each worker processes messages idempotently to handle redeliveries. For messages that fail repeatedly, I implemented a retry strategy with exponential backoff and a dead letter queue for later analysis."
			},
			technical: {
				title: "Technical Details",
				items: [
					"RabbitMQ as message broker with durability enabled",
					"Multiple workers with concurrent processing",
					"Manual acknowledgment to guarantee processing",
					"Retry logic with exponential backoff (1s, 2s, 4s, 8s...)",
					"Dead Letter Queue for persistently failing messages",
					"Priority queues for urgent messages",
					"Message persistence to disk for durability",
					"Monitoring with Prometheus and Grafana",
					"Idempotent processing to handle duplicates"
				]
			},
			learnings: {
				title: "Key Learnings",
				items: [
					"Understood messaging patterns: pub/sub, work queues, routing",
					"Learned about delivery guarantees: at-most-once, at-least-once, exactly-once",
					"Understood importance of idempotence in distributed systems",
					"Developed strategies for handling failures and poison messages",
					"Learned to balance throughput vs latency in workers",
					"Gained experience with observability in asynchronous systems"
				]
			},
			images: {
				title: "Project Screenshots",
				items: [
					{
						placeholder: "📮",
						caption: "Message queue system architecture"
					},
					{
						placeholder: "📊",
						caption: "Monitoring dashboard with queue metrics"
					},
					{
						placeholder: "🔁",
						caption: "Retry flow with exponential backoff"
					}
				]
			}
		},
		"rest-api": {
			overview: {
				title: "Overview",
				content: "A complete RESTful API following API design best practices. The project includes versioning, rate limiting, authentication, interactive documentation with OpenAPI/Swagger, and a robust error handling system. The goal is to create an API that is easy to use, maintain, and scale."
			},
			challenge: {
				title: "The Challenge",
				content: "Designing an API that is intuitive but also extensible. The challenge was making decisions about endpoint structure, versioning, and data contracts that don't break compatibility with existing clients. It was also necessary to implement effective rate limiting without affecting legitimate users and create documentation that stays synchronized with code."
			},
			solution: {
				title: "The Solution",
				content: "I implemented an API following REST principles with clearly defined resources and semantically correct HTTP methods. Versioning is done via URL (/v1/, /v2/). Rate limiting is implemented with Redis using sliding window algorithm. Documentation is automatically generated from code using decorators/annotations, ensuring it's always up to date."
			},
			technical: {
				title: "Technical Details",
				items: [
					"RESTful endpoints with resources and nested sub-resources",
					"API versioning via URL path (/api/v1/, /api/v2/)",
					"Rate limiting with sliding window algorithm in Redis",
					"Authentication with Bearer tokens (JWT)",
					"Automatically generated OpenAPI 3.0 documentation",
					"Swagger UI for interactive testing",
					"Consistent error handling with Problem Details (RFC 7807)",
					"Pagination with cursor-based pagination",
					"HATEOAS for discoverability",
					"Content negotiation (JSON, XML)"
				]
			},
			learnings: {
				title: "Key Learnings",
				items: [
					"Understood REST design principles and their advantages",
					"Learned about API versioning strategies and their trade-offs",
					"Understood different rate limiting algorithms and their characteristics",
					"Developed judgment for designing stable API contracts",
					"Learned importance of good documentation and developer experience",
					"Gained experience with OpenAPI/Swagger for API specifications"
				]
			},
			images: {
				title: "Project Screenshots",
				items: [
					{
						placeholder: "📝",
						caption: "Swagger UI with interactive documentation"
					},
					{
						placeholder: "🚦",
						caption: "Rate limiting in action protecting the API"
					},
					{
						placeholder: "📋",
						caption: "Example response with Problem Details format"
					}
				]
			}
		},
		"devops": {
			overview: {
				title: "Overview",
				content: "This project covers the complete deployment and DevOps cycle for modern applications. It includes containerization with Docker, orchestration with Kubernetes, automated CI/CD pipelines, and production monitoring. The goal is to understand how to take code from development to production in an automated, secure, and reliable way."
			},
			challenge: {
				title: "The Challenge",
				content: "The biggest challenge was setting up a complete pipeline that is robust but not overly complex. I had to learn about multiple tools (Docker, Kubernetes, CI/CD, monitoring) and how to integrate them coherently. It was also necessary to implement zero-downtime deployments and automatic rollback when something fails."
			},
			solution: {
				title: "The Solution",
				content: "I containerized the application with Docker using multi-stage builds for size optimization. I implemented CI/CD with GitHub Actions that runs tests, build, and automatic deployment. Deployment to Kubernetes uses rolling updates for zero downtime. For monitoring, I configured Prometheus for metrics and Grafana for visualization, with automatic alerts when something goes wrong."
			},
			technical: {
				title: "Technical Details",
				items: [
					"Dockerfiles with multi-stage builds for optimization",
					"Docker Compose for local development with multiple services",
					"Kubernetes deployment with rolling updates and automatic rollback",
					"Health checks (liveness, readiness probes) for K8s",
					"CI/CD pipeline with GitHub Actions (test → build → deploy)",
					"GitOps workflow with automated deployments",
					"Prometheus for application metrics collection",
					"Grafana dashboards for metrics visualization",
					"Alertmanager for incident notifications",
					"Horizontal Pod Autoscaling based on metrics"
				]
			},
			learnings: {
				title: "Key Learnings",
				items: [
					"Understood complete cycle from development to production",
					"Learned about containerization and its advantages for deployment",
					"Understood Kubernetes concepts: pods, services, deployments",
					"Developed automated and reliable CI/CD pipelines",
					"Learned about observability: metrics, logs, traces",
					"Gained experience with incident response and postmortems"
				]
			},
			images: {
				title: "Project Screenshots",
				items: [
					{
						placeholder: "🐳",
						caption: "Container architecture with Docker Compose"
					},
					{
						placeholder: "☸️",
						caption: "Kubernetes cluster with multiple pods"
					},
					{
						placeholder: "📊",
						caption: "Grafana dashboard with real-time metrics"
					}
				]
			}
		}
	}
};
