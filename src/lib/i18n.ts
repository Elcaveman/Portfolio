// Define available languages
export type Language = 'en' | 'fr';

// Define the translations structure
export interface Translations {
  [key: string]: {
    [key in Language]?: string;
  };
}

// Simple translations dictionary
export const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    fr: 'Accueil'
  },
  'nav.education': {
    en: 'Education',
    fr: 'Formation'
  },
  'nav.experience': {
    en: 'Experience',
    fr: 'Expérience'
  },
  'nav.projects': {
    en: 'Projects',
    fr: 'Projets'
  },
  'nav.skills': {
    en: 'Skills',
    fr: 'Compétences'
  },
  'nav.services': {
    en: 'Services',
    fr: 'Services'
  },
  'nav.contact': {
    en: 'Contact',
    fr: 'Contact'
  },
  'nav.blog': {
    en: 'Blog',
    fr: 'Blog'
  },
  

  // Hero Section
  'hero.greeting': {
    en: 'Hey !',
    fr: 'Salut !'
  },
  'hero.iam': {
    en: 'I\'m',
    fr: 'Je suis'
  },
  'hero.title': {
    en: 'SOFTWARE ENGINEER',
    fr: 'SOFTWARE ENGINEER'
  },
  'hero.description': {
    en: `Welcome to my portfolio! I specialize in Full-stack development and DevOps. 
    I’ve led projects across architecture developement, and operations, delivering high-performing solutions
    that adhere to best practices to drive business growth. 
    With hands-on experience, I’ve led impactful projects for industry leaders, transforming data into strategic insights
    and scalable solutions. I thrive on solving complex challenges that make a real impact. Innovation is at the core of what I do. 🚀`,
    fr: `Bienvenue sur mon portfolio ! Je me spécialise dans le développement Full-stack et le DevOps.
    J’ai dirigé des projets couvrant l’architecture, le développement et les opérations, en livrant des solutions performantes respectant les meilleures pratiques pour stimuler la croissance des entreprises.
    Fort d’une expérience pratique, j’ai mené des projets à fort impact pour des leaders du secteur, transformant les données en insights stratégiques et solutions évolutives.
    Je m’épanouis en résolvant des défis complexes qui ont un réel impact. L’innovation est au cœur de mon travail. 🚀`
  },
  'hero.download': {
    en: 'Download Resume',
    fr: 'Télécharger CV'
  },
  'hero.scrollDown': {
    en: 'Scroll Down',
    fr: 'Défiler vers le bas'
  },
  'hero.getInTouch': {
    en: 'Get in Touch',
    fr: 'Me Contacter'
  },

  // Section Titles
  'education.title': {
    en: 'Education Journey',
    fr: 'Parcours Académique'
  },
  'education.subtitle': {
    en: 'An interactive timeline of my academic background and continuous learning',
    fr: 'Une chronologie interactive de mon parcours académique et apprentissage continu'
  },
  'education.clickPrompt': {
    en: 'Click on any milestone to see more details about my educational journey and achievements.',
    fr: 'Cliquez sur une étape pour découvrir mon parcours éducatif et les accomplissements qui l\'ont marqué.'
  },
  'experience.title': {
    en: 'Professional Journey',
    fr: 'Parcours Professionnel'
  },
  'experience.clickPrompt': {
    en: 'Click on any milestone to view details about my role, achievements, and key projects.',
    fr: 'Cliquez sur une étape pour voir les détails de mon rôle, mes réalisations et les projets clés.'
  },  
  'experience.subtitle': {
    en: 'An interactive timeline showcasing my career progression and key projects',
    fr: 'Une chronologie interactive présentant ma progression de carrière et mes projets clés'
  },
  'projects.title': {
    en: 'My Projects',
    fr: 'Mes Projets'
  },
  'projects.subtitle': {
    en: 'Here are some of the projects I\'ve worked on.',
    fr: 'Voici quelques projets que j\'ai réalisés.'
  },
  'skills.title': {
    en: 'Skills & Tools',
    fr: 'Compétences & Technologies'
  },
  'skills.subtitle': {
    en: 'Tools and technologies I use to build reliable, scalable, and user-friendly applications',
    fr: 'Outils et technologies que j\'utilise pour créer des applications modernes, réactives et conviviales'
  },
  'contact.title': {
    en: 'Let\'s Connect',
    fr: 'Entrons en Contact'
  },
  'contact.subtitle': {
    en: 'Have a question or want to work together? Get in touch and let\'s create something amazing.',
    fr: 'Vous avez une question ou souhaitez collaborer ? Contactez-moi et créons quelque chose d\'incroyable.'
  },
  'contact.email': {
    en: 'Email',
    fr: 'Email'
  },
  'contact.phone': {
    en: 'Phone',
    fr: 'Téléphone'
  },
  'contact.location': {
    en: 'Location',
    fr: 'Localisation'
  },
  'contact.form.firstName': {
    en: 'First Name',
    fr: 'Prénom'
  },
  'contact.form.lastName': {
    en: 'Last Name',
    fr: 'Nom'
  },
  'contact.form.email': {
    en: 'Email',
    fr: 'Email'
  },
  'contact.form.message': {
    en: 'Message',
    fr: 'Message'
  },
  'contact.form.send': {
    en: 'Send Message',
    fr: 'Envoyer Message'
  },
  'contact.form.sending': {
    en: 'Sending...',
    fr: 'Envoi...'
  },
  'contact.form.successMessage': {
    en: 'Thank you for your message! I\'ll get back to you soon.',
    fr: 'Merci pour votre message ! Je vous répondrai bientôt.'
  },
  'contact.form.errorMessage': {
    en: 'Sorry, there was an error sending your message. Please try again.',
    fr: 'Désolé, une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer.'
  },
  'blog.title': {
    en: 'Blog & Insights',
    fr: 'Blog & Insights'
  },
  'blog.subtitle': {
    en: 'Thoughts, tutorials, and insights on Data Engineering, Cloud Computing, and Generative AI.',
    fr: 'Idées, tutoriels et réflexions sur le Data Engineering, le Cloud Computing et l’IA Générative'
  },

  // Services Section
  'services.title': {
    en: 'My Services',
    fr: 'Mes Services'
  },
  'services.subtitle': {
    en: 'Specialized expertise in fullstack Java development, crafting end-to-end web applications from modern front-end interfaces to high-performance back-end systems, enabling organizations to automate processes, enhance user experience, and drive operational efficiency.',
    fr: 'Expertise en développement Java fullstack pour créer des applications web complètes qui automatisent les processus et améliorent l\'efficacité opérationnelle..'
  },
  'services.softwareEngineering.title': {
    en: 'Software Engineering',
    fr: 'Software Engineering'
  },
  'services.softwareEngineering.description': {
    en: 'Expert design and development of scalable, high-performance distributed apps across web, mobile, and backend systems. Expertise in Java, Go, React, and other modern frameworks to deliver robust, maintainable solutions aligned with business goals.',
    fr: 'Conception et développement expert d\'applications distribuées évolutives et hautes performances pour le web, le mobile et les systèmes backend. Expertise en Java, Go, React et autres frameworks modernes pour fournir des solutions robustes et maintenables alignées sur les objectifs métier.'
  },
  'services.security.title': {
    en: 'Security & Compliance',
    fr: 'Sécurité & Conformité'
  },
  'services.security.description': {
    en: 'Integration of security best practices into every stage of the development lifecycle. From identity management to Stress Testing strategies to ensure applications meet reliability and scalability requirements under real-world conditions.',
    fr: 'Intégration des meilleures pratiques de sécurité à chaque étape du cycle de vie de développement. De la gestion des identités aux stratégies de test de résistance (Stress Testing) pour garantir que les applications répondent aux exigences de fiabilité et d\'évolutivité dans des conditions réelles.'
  },
  'services.monitoring.title': {
    en: 'Monitoring & Visualization',
    fr: 'Surveillance & Visualisation'
  },
  'services.monitoring.description': {
    en: 'Design and integration of observability solutions for proactive system monitoring and troubleshooting. Expertise in Grafana, Prometheus, and ELK for logs, metrics, and visualization',
    fr: 'Conception et intégration de solutions d\'observabilité pour une surveillance proactive et un dépannage du système. Expertise en Grafana, Prometheus et ELK pour les logs, les métriques et la visualisation.'
  },
  'services.devopsAutomation.title': {
    en: 'DevOps & Cloud Infrastructure',
    fr: 'DevOps et Infrastructures Cloud'
  },
  'services.devopsAutomation.description': {
    en: 'Implementation of CI/CD pipelines, automated deployments, and infrastructure-as-code solutions using AWS, Azure, and other providers. Streamlining deployments and ensuring reliability, scalability, and cost-optimized operations across diverse environments.',
    fr: 'Mise en œuvre de pipelines CI/CD, de déploiements automatisés et de solutions d\'infrastructure-as-code avec AWS, Azure et d\'autres fournisseurs. Rationalisation des déploiements et garantie de la fiabilité, de l\'évolutivité et d\'opérations optimisées en coût dans divers environnements.'
  },
  'services.APIs.title': {
    en: 'Microservices & APIs',
    fr: 'Microservices & APIs'
  },
  'services.APIs.description': {
    en: 'Designing and architecting cloud-native microservices with a focus on scalable, event-driven communication. Experienced in building robust synchronous and asynchronous API ecosystems that ensure resilience, high availability, and seamless service interaction across distributed systems.',
    fr: 'Conception et architecture de microservices cloud-native axés sur une communication évolutive et orientée événements. Expérience dans la création d’écosystèmes d’API synchrones et asynchrones, garantissant résilience, haute disponibilité et interaction fluide entre services distribués.'
  },
  'services.consulting.title': {
    en: 'Software Strategy Consulting',
    fr: 'Conseil en Stratégie Logicielle'
  },
  'services.consulting.description': {
    en: 'Providing strategic guidance on software architecture, DevOps adoption, and cloud migration. Enabling organizations to modernize their systems and accelerate innovation while reducing operational overhead.',
    fr: 'Fourniture de conseils stratégiques sur l\'architecture logicielle, l\'adoption du DevOps et la migration vers le cloud. Permettre aux organisations de moderniser leurs systèmes et d\'accélérer l\'innovation tout en réduisant la charge opérationnelle.'},
  // Common Labels
  'common.keyAchievements': {
    en: 'Key Achievements',
    fr: 'Réalisations Clés'
  },
  'common.keyCourses': {
    en: 'Key Courses',
    fr: 'Cours Principaux'
  },
  'common.keyProjects': {
    en: 'Key Projects',
    fr: 'Projets Clés'
  },
  'common.certificates': {
    en: 'Certificates',
    fr: 'Certificats'
  },
  'common.certifications': {
    en: 'Certifications',
    fr: 'Certifications'
  },
  'common.showMore': {
    en: 'Show',
    fr: 'Afficher'
  },
  'common.moreProject': {
    en: 'more project',
    fr: 'projet supplémentaire'
  },
  'common.moreProjects': {
    en: 'more projects',
    fr: 'projets supplémentaires'
  },

  // Education Content
  'education.ensias.institution': {
  en: 'National School of Computer Science and Systems Analysis (ENSIAS)',
  fr: 'École Nationale Supérieure d\'Informatique et d\'Analyse des Systèmes (ENSIAS)'
},
'education.ensias.degree': {
  en: 'State Engineer Degree in Software Engineering',
  fr: 'Diplôme d\'Ingénieur d\'État en Génie Logiciel'
},
'education.ensias.description': {
  en: 'Earned a State Engineer Degree specializing in Software Engineering, focusing on software design, architecture, and large-scale system development.',
  fr: 'Obtention d\'un diplôme d\'ingénieur d\'État spécialisé en Génie Logiciel, axé sur la conception, l’architecture logicielle et le développement de systèmes à grande échelle.'
},
'education.ensias.achievement1': {
  en: 'Specialized in software architecture, design patterns, and system analysis',
  fr: 'Spécialisé en architecture logicielle, patrons de conception et analyse des systèmes'
},
'education.ensias.achievement2': {
  en: 'Developed expertise in Java, Python, JavaScript, and enterprise frameworks',
  fr: 'Développé une expertise en Java, Python, JavaScript et frameworks d’entreprise'
},
'education.ensias.achievement3': {
  en: 'Worked on academic and industrial projects in software development and agile methodologies',
  fr: 'Participation à des projets académiques et industriels en développement logiciel et méthodologies agiles'
},
'education.ensias.achievement4': {
  en: 'Member of student clubs and associations contributing to tech and innovation initiatives',
  fr: 'Membre de clubs et associations étudiantes contribuant à des initiatives technologiques et innovantes'
},
'education.ensias.achievement5': {
  en: 'Completed internships in software engineering, system design, and enterprise applications',
  fr: 'Stages effectués en ingénierie logicielle, conception de systèmes et applications d’entreprise'
},
'education.ensias.course1': {
  en: 'Software Architecture',
  fr: 'Architecture Logicielle'
},
'education.ensias.course2': {
  en: 'Java EE/ Spring boot',
  fr: 'Java EE/ Spring boot'
},
'education.ensias.course3': {
  en: 'Databases and Information Systems',
  fr: 'Bases de Données et Systèmes d’Information'
},
'education.ensias.course4': {
  en: 'Web and Mobile Application Development',
  fr: 'Développement d’Applications Web et Mobiles'
},
'education.ensias.course5': {
  en: 'Agile Methods',
  fr: 'Méthodes Agiles'
},
'education.ensias.course6': {
  en: 'Systems Analysis and Design',
  fr: 'Analyse et Conception des Systèmes'
},
'education.ensias.course7': {
  en: 'Graph Theory',
  fr: 'Théorie des Graphes'
},
'education.ensias.course8': {
  en: 'Compilers',
  fr: 'Compilation'
},
'education.ensias.course9': {
  en: 'Computer Architecture and Assembly Language',
  fr: 'Architecture des Ordinateurs et Langage Assembleur'
},
'education.ensias.course10': {
  en: 'Operating Systems',
  fr: 'Systèmes d’Exploitation'
},
'education.ensias.course11': {
  en: 'Automata Theory',
  fr: 'Théorie des Automates'
},
  'education.cpge.institution': {
    en: 'Preparatory Classes for Engineering Schools (CPGE)',
    fr: 'Classes Préparatoires aux Grandes Écoles (CPGE)'
  },
  'education.cpge.degree': {
    en: 'Mathematics - Physics (MP)',
    fr: 'Mathématiques - Physique (MP)'
  },
  'education.cpge.description': {
    en: 'Completed intensive two-year preparatory program focusing on advanced mathematics and physics, providing strong analytical foundations for engineering studies.',
    fr: 'Programme préparatoire intensif de deux ans axé sur les mathématiques et la physique avancées, fournissant de solides bases analytiques pour les études d\'ingénierie.'
  },
  'education.cpge.achievement1': {
    en: 'Mastered advanced mathematical concepts and physical theories',
    fr: 'Maîtrise des concepts mathématiques avancés et théories physiques'
  },
  'education.cpge.achievement2': {
    en: 'Developed strong problem-solving and analytical skills',
    fr: 'Développement de solides compétences en résolution de problèmes et analyse'
  },
  'education.cpge.achievement3': {
    en: 'Prepared for and passed competitive entrance exams for engineering schools',
    fr: 'Préparation et réussite aux concours d\'entrée des écoles d\'ingénieurs'
  },
  'education.cpge.achievement4': {
    en: 'Ranked among top students in national competitive exams',
    fr: 'Classé parmi les meilleurs étudiants aux concours nationaux'
  },
  'education.cpge.achievement5': {
    en: 'Built strong foundations in scientific and engineering principles',
    fr: 'Construction de bases solides en principes scientifiques et d\'ingénierie'
  },
  'education.cpge.course1': {
    en: 'Advanced Mathematics',
    fr: 'Mathématiques Avancées'
  },
  'education.cpge.course2': {
    en: 'Theoretical Physics',
    fr: 'Physique Théorique'
  },
  'education.cpge.course3': {
    en: 'Linear Algebra',
    fr: 'Algèbre Linéaire'
  },
  'education.cpge.course4': {
    en: 'Differential Equations',
    fr: 'Équations Différentielles'
  },
  'education.cpge.course5': {
    en: 'Mechanics',
    fr: 'Mécanique'
  },
  'education.cpge.course6': {
    en: 'Scientific Computing',
    fr: 'Calcul Scientifique'
  },

  'education.certifications.institution': {
    en: 'Professional Certifications',
    fr: 'Certifications Professionnelles'
  },
  'education.certifications.degree': {
    en: 'Cloud & Data Engineering Certifications',
    fr: 'Certifications Cloud et Ingénierie des Données'
  },
  'education.certifications.description': {
    en: 'Attained multiple professional certifications in cloud technologies, data engineering, and project management.',
    fr: 'Obtention de multiples certifications professionnelles en technologies cloud, ingénierie des données et gestion de projet.'
  },
  'education.certifications.cert1': {
    en: 'AWS so',
    fr: 'Google Cloud Associate Data Practitioner'
  },
  'education.certifications.cert2': {
    en: 'Astronomer Certification for Apache Airflow Fundamentals',
    fr: 'Certification Astronomer pour les Fondamentaux d\'Apache Airflow'
  },
  'education.certifications.cert3': {
    en: 'Databricks Lakehouse Fundamentals',
    fr: 'Fondamentaux Databricks Lakehouse'
  },
  'education.certifications.cert4': {
    en: 'Scrum Foundation Professional Certification (SFPC™)',
    fr: 'Certification Professionnelle Scrum Foundation (SFPC™)'
  },
  "experience.transactis.title": {
    "en": "Backend Java/DevOps Developer",
    "fr": "Développeur Backend Java/ DevOps"
  },
  "experience.transactis.description": {
    "en": "Backend Java Developer and DevOps engineer working on large-scale banking data flows and secure data lake integrations for major clients (SG, Crédit Agricole, Banque Postale).",
    "fr": "Développeur Backend Java et ingénieur DevOps travaillant sur des flux bancaires à grande échelle et des intégrations sécurisées de data lakes pour des clients majeurs (SG, Crédit Agricole, Banque Postale)."
  },
  "experience.transactis.achievement1": {
    "en": "Designed and developed banking flow mapping system handling millions of events per day",
    "fr": "Conception et développement d’un système de mapping des flux bancaires gérant plusieurs millions d’événements par jour"
  },
  "experience.transactis.achievement2": {
    "en": "Built microservices with Java Spring Boot for secure and scalable data pipelines",
    "fr": "Développement de microservices avec Java Spring Boot pour des pipelines de données sécurisés et scalables"
  },
  "experience.transactis.achievement3": {
    "en": "Implemented messaging services with IBM MQ and RabbitMQ",
    "fr": "Implémentation de services de messagerie avec IBM MQ et RabbitMQ"
  },
  "experience.transactis.achievement4": {
    "en": "Deployed CI/CD pipelines on Kubernetes with performance testing automation",
    "fr": "Déploiement de pipelines CI/CD sur Kubernetes avec automatisation des tests de performance"
  },
  "experience.transactis.achievement5": {
    "en": "Set up centralized logging with Kafka pipelines and ELK dashboards",
    "fr": "Mise en place de la gestion centralisée des logs avec des pipelines Kafka et des dashboards ELK"
  },
  "experience.transactis.project1.name": {
    "en": "MARS Sentinel",
    "fr": "MARS Sentinel"
  },
  "experience.transactis.project1.description": {
    "en": "Developed a banking flow monitoring system converting IBM MQ streams to JSON format",
    "fr": "Développement d’un système de monitoring des flux bancaires convertissant les flux IBM MQ en format JSON"
  },
  "experience.transactis.project2.name": {
    "en": "MARS Datalake",
    "fr": "MARS Datalake"
  },
  "experience.transactis.project2.description": {
    "en": "Built secure file encryption and streaming system for sending terabytes of data to client data lakes (S3)",
    "fr": "Conception d’un système de chiffrement et d’envoi en streaming de fichiers pour plusieurs To de données vers les data lakes clients (S3)"
  },
  "experience.transactis.team": {
    "en": "Backend & DevOps Team",
    "fr": "Équipe Backend & DevOps"
  },

  "experience.colas.title": {
    "en": "Fullstack Java/Angular Developer",
    "fr": "Développeur Fullstack Java/Angular"
  },
  "experience.colas.description": {
    "en": "Developed a global CRM for Colas commercial teams across 55 countries, managing workflows, permissions, and data migration.",
    "fr": "Développement d’un CRM global pour les équipes commerciales de Colas dans 55 pays, gestion des workflows, des permissions et migration de données."
  },
  "experience.colas.achievement1": {
    "en": "Designed and implemented hierarchical access permissions",
    "fr": "Conception et implémentation des permissions d’accès hiérarchiques"
  },
  "experience.colas.achievement2": {
    "en": "Developed RESTful APIs with Spring Boot",
    "fr": "Développement d’APIs REST avec Spring Boot"
  },
  "experience.colas.achievement3": {
    "en": "Migrated data from legacy applications into the new CRM",
    "fr": "Migration de données depuis les anciennes applications vers le nouveau CRM"
  },
  "experience.colas.project1.name": {
    "en": "Global CRM",
    "fr": "CRM Global"
  },
  "experience.colas.project1.description": {
    "en": "CRM platform for managing global commercial activities across 55 countries",
    "fr": "Plateforme CRM pour gérer l’activité commerciale mondiale sur 55 pays"
  },
  "experience.colas.team": {
    "en": "CRM Development Team",
    "fr": "Équipe Développement CRM"
  },

  "experience.datama.title": {
    "en": "Fullstack Data Developer",
    "fr": "Développeur Data Fullstack"
  },
  "experience.datama.description": {
    "en": "Developed a web platform providing analysts with tools for data preparation and metric-driven insights.",
    "fr": "Développement d’une plateforme web fournissant aux analystes des outils de préparation de données et d’insights orientés métriques."
  },
  "experience.datama.project1.name": {
    "en": "Data Analytics Platform",
    "fr": "Plateforme d’Analyse de Données"
  },
  "experience.datama.project1.description": {
    "en": "Web platform enabling analysts to process data and generate insights",
    "fr": "Plateforme web permettant aux analystes de traiter les données et générer des insights"
  },
  "experience.datama.team": {
    "en": "Data Development Team",
    "fr": "Équipe Développement Data"
  },

  "experience.wings.title": {
    "en": "Fullstack Java/Angular Developer",
    "fr": "Développeur Fullstack Java/Angular"
  },
  "experience.wings.description": {
    "en": "Developed a compliance auditing web application with advanced authentication, dynamic permissions, and API security.",
    "fr": "Développement d’une application web d’audit de conformité avec authentification avancée, permissions dynamiques et sécurité API."
  },
  "experience.wings.team": {
    "en": "Compliance Development Team",
    "fr": "Équipe Développement Conformité"
  },

  "experience.advisoris.title": {
    "en": "Fullstack Java/Angular Developer",
    "fr": "Développeur Fullstack Java/Angular"
  },
  "experience.advisoris.description": {
    "en": "Developed secure file-sharing applications and an e-commerce site for used car sales.",
    "fr": "Développement d’applications sécurisées de partage de fichiers et d’un site e-commerce pour la vente de voitures d’occasion."
  },
  "experience.advisoris.project1.name": {
    "en": "Secure File Sharing Platform",
    "fr": "Plateforme de Partage de Fichiers Sécurisée"
  },
  "experience.advisoris.project1.description": {
    "en": "Web app enabling secure client file sharing",
    "fr": "Application web facilitant le partage de fichiers sécurisés avec les clients"
  },
  "experience.advisoris.project2.name": {
    "en": "Used Cars E-commerce",
    "fr": "E-commerce Voitures d’Occasion"
  },
  "experience.advisoris.project2.description": {
    "en": "E-commerce website for buying and selling used cars",
    "fr": "Site e-commerce pour l’achat et la vente de voitures d’occasion"
  },
  "experience.advisoris.team": {
    "en": "Fullstack Development Team",
    "fr": "Équipe Développement Fullstack"
  },
  // Common elements
  'common.filter': {
    en: 'Filter',
    fr: 'Filtrer'
  },
  'common.clearAll': {
    en: 'Clear all',
    fr: 'Tout effacer'
  },
  'common.search': {
    en: 'Search',
    fr: 'Rechercher'
  },
  'common.send': {
    en: 'Send Message',
    fr: 'Envoyer Message'
  },
  'common.sending': {
    en: 'Sending...',
    fr: 'Envoi...'
  },

  // File uploader
  'fileUploader.dragDrop': {
    en: 'Drag and drop files here or click to browse',
    fr: 'Glissez et déposez des fichiers ici ou cliquez pour parcourir'
  },
  'fileUploader.maxSize': {
    en: 'Maximum file size',
    fr: 'Taille maximale de fichier'
  },
  'fileUploader.maxFiles': {
    en: 'Maximum files',
    fr: 'Nombre maximum de fichiers'
  },
  'fileUploader.fileTooLarge': {
    en: 'File exceeds size limit',
    fr: 'Le fichier dépasse la limite de taille'
  },
  'fileUploader.fileDuplicate': {
    en: 'File already added',
    fr: 'Fichier déjà ajouté'
  },
  'fileUploader.tooManyFiles': {
    en: 'Maximum files limit reached',
    fr: 'Limite maximale de fichiers atteinte'
  },
  'fileUploader.selectedFiles': {
    en: 'Selected Files',
    fr: 'Fichiers Sélectionnés'
  },
  'fileUploader.addMore': {
    en: 'Add More',
    fr: 'Ajouter Plus'
  },
  'fileUploader.clearAll': {
    en: 'Clear All',
    fr: 'Tout Effacer'
  }
};
