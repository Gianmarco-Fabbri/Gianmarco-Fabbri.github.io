export const defaultLang = "it" as const;
export type Lang = "it" | "en";

export const translations: Record<Lang, Record<string, string>> = {
  it: {
    // Meta
    "meta.description": "Portfolio di Gianmarco Fabbri, studente magistrale di Cybersecurity Engineering al Politecnico di Torino, appassionato di sicurezza delle infrastrutture cloud e dell'AI.",

    // Nav
    "nav.home": "Home",
    "nav.about": "Chi sono",
    "nav.projects": "Progetti",
    "nav.notes": "Note",
    "nav.contact": "Contatti",

    // Hero
    "hero.greeting": "Ciao, mi chiamo",
    "hero.subtitle": "Studente magistrale di Cybersecurity Engineering @ Politecnico di Torino",
    "hero.desc": "Appassionato di sicurezza delle infrastrutture cloud e dell'AI. Qui trovi i miei progetti e le mie esperienze.",
    "hero.cta.projects": "Vedi Progetti",
    "hero.cta.contact": "Contattami",

    // Home — About preview
    "home.about.title": "Chi sono",
    "home.about.subtitle": "Uno sguardo rapido",
    "home.about.text": "Sono uno studente magistrale di <strong>Cybersecurity Engineering</strong> al <strong>Politecnico di Torino</strong>, con una laurea triennale in Ingegneria e Scienze Informatiche all'Università di Bologna. Mi appassiona la <strong>sicurezza delle infrastrutture cloud e dell'AI</strong>: ho lavorato su runtime security e incident response automatizzata su Kubernetes, sistemi real-time e sviluppo web sicuro.",
    "home.about.link": "Scopri di più",

    // Home — Projects preview
    "home.projects.title": "Progetti",
    "home.projects.subtitle": "I miei lavori più recenti",
    "home.projects.link": "Vedi tutti i progetti",

    // About page
    "about.title": "Chi sono — Gianmarco Fabbri",
    "about.heading": "Chi sono",
    "about.heading.sub": "Qualcosa su di me",
    "about.bio.1": "Ciao! Sono <strong>Gianmarco Fabbri</strong>, studente magistrale di <strong>Cybersecurity Engineering</strong> al <strong>Politecnico di Torino</strong>. Ho conseguito la laurea triennale in Ingegneria e Scienze Informatiche all'Università di Bologna, con una tesi sulla crittografia post-quantistica basata su reticoli.",
    "about.bio.2": "Il percorso che mi appassiona di più è la <strong>sicurezza delle infrastrutture cloud e dell'intelligenza artificiale</strong>. Nei miei progetti ho lavorato su runtime security e incident response automatizzata su Kubernetes, sistemi real-time e sviluppo web sicuro, con autenticazione a due fattori e controllo degli accessi.",
    "about.bio.3": "Ho svolto un tirocinio come software engineer in <strong>My Dev</strong>, dove ho sviluppato backend in C#/.NET e interfacce in Blazor. Mi interessa capire come proteggere le infrastrutture cloud e i sistemi di AI, e come applicare l'intelligenza artificiale alla cybersecurity.",

    "about.exp.title": "Esperienza",
    "about.exp.subtitle": "Il mio percorso lavorativo",
    "about.exp.1.period": "Feb. 2025 — Mar. 2025",
    "about.exp.1.title": "Tirocinante Software Engineer",
    "about.exp.1.institution": "My Dev s.r.l. · Forlì",
    "about.exp.1.desc": "Sviluppo del backend in C#/.NET Core (ASP.NET) per la gestione automatizzata di configurazioni aziendali, con Repository-Service Pattern. Interfacce client in Blazor WebAssembly e MudBlazor con integrazione di API REST e workflow di sessione sicuri. Test di integrazione, analisi statica (SAST) e refactoring.",

    "about.edu.title": "Formazione",
    "about.edu.subtitle": "Il mio percorso accademico",
    "about.edu.1.period": "Ott. 2025 — in corso",
    "about.edu.1.title": "Laurea Magistrale in Cybersecurity Engineering",
    "about.edu.1.institution": "Politecnico di Torino",
    "about.edu.1.desc": "<strong>Esami sostenuti:</strong> Cryptography, Web Applications, Computer Architectures and Operating Systems, Hardware & Wireless Security, Optimization Methods and Algorithms.<br /><strong>Piano di studi:</strong> Networks & Cloud Technologies and Security, Information Systems Security, AI and Cybersecurity, Threat Intelligence and Incident Management, Security Verification and Testing, Data Protection, Privacy and Anonymity.",
    "about.edu.2.period": "Ott. 2022 — Ott. 2025",
    "about.edu.2.title": "Laurea Triennale in Ingegneria e Scienze Informatiche",
    "about.edu.2.institution": "Alma Mater Studiorum – Università di Bologna · Forlì-Cesena",
    "about.edu.2.desc": "<strong>Tesi:</strong> “L'era post-quantistica e la crittografia basata su reticoli”: analisi delle primitive a chiave pubblica (RSA, ECC), delle vulnerabilità quantistiche (Shor, Grover) e degli standard post-quantum CRYSTALS-Dilithium e CRYSTALS-Kyber. Basi in sistemi distribuiti, sistemi operativi, basi di dati e metodi formali.",

    "about.skills.title": "Competenze",
    "about.skills.subtitle": "Tecnologie e strumenti che utilizzo",
    "about.skills.cat.cloud": "Cloud & Sistemi",
    "about.skills.cat.security": "Sicurezza & Auditing",
    "about.skills.cat.crypto": "Crittografia & Trust",
    "about.skills.cat.dev": "Sviluppo Software",
    "about.skills.cat.spoken": "Lingue",
    "about.skills.signatures": "Firme digitali",
    "about.skills.hash": "Funzioni hash",
    "about.skills.lang.it": "Italiano (madrelingua)",
    "about.skills.lang.en": "Inglese (B2 – Cambridge First)",
    "about.skills.lang.fr": "Francese (A2)",

    // Projects page
    "projects.title": "Progetti — Gianmarco Fabbri",
    "projects.heading": "Progetti",
    "projects.subtitle": "Raccolta dei miei progetti universitari e personali",
    "projects.k8s.desc": "Laboratorio Kubernetes che rileva attività malevole in un pod a runtime e risponde in automatico: Falco genera l'alert, un handler Python autenticato con RBAC limitato isola il pod con le policy Cilium, lo conserva per l'analisi e lo sostituisce con una replica sana. 16 test di regressione e controlli in CI.",
    "projects.theater.desc": "Applicazione web full-stack in React e Node.js/Express per prenotare posti a teatro, con controllo degli accessi basato su ruoli (RBAC), autenticazione a due fattori (TOTP) per gli amministratori, password con hash scrypt e gestione della concorrenza sulle prenotazioni.",
    "projects.freertos.desc": "Middleware real-time in C sviluppato in team che estende FreeRTOS su ARM Cortex-M3 (QEMU) con task periodici e deadline, rilevamento delle deadline mancate, politiche di overrun (SKIP, KILL, CATCH_UP), tracciamento degli eventi e test di regressione.",
    "projects.100days.desc": "Gioco strategico a turni in Java 21 e Swing, sviluppato in un team di 4 persone per il corso di Programmazione a Oggetti: mappe procedurali, bot avversario e salvataggio delle partite. Architettura MVC con design pattern (Observer, Strategy, Command, Factory, Builder) e unit test; ho curato le interazioni tra soldati, il bot e le statistiche in tempo reale.",
    "projects.benessere.desc": "E-commerce web di prodotti per il benessere sviluppato in un team di 3 persone per il corso di Tecnologie Web: portale clienti con catalogo, filtri di prezzo, carrello, programma punti e tracciamento ordini; portale venditori per inventario, promozioni e gestione degli ordini. PHP 8 a oggetti, MySQL con trigger, Bootstrap e JavaScript.",
    "projects.videogame.desc": "Progetto di Basi di Dati: database relazionale per un e-commerce di videogiochi, console e accessori, normalizzato in BCNF con trigger e vincoli di integrità referenziale, e client desktop multi-ruolo (acquirente, venditore, admin) in Python/Tkinter.",
    "projects.portfolio.desc": "Questo sito: portfolio statico bilingue (IT/EN) sviluppato con Astro, con componenti riutilizzabili e deploy automatico su GitHub Pages tramite GitHub Actions.",

    // Contact page
    "contact.title": "Contatti — Gianmarco Fabbri",
    "contact.heading": "Contatti",
    "contact.subtitle": "Non esitare a scrivermi",
    "contact.intro": "Puoi trovarmi attraverso i seguenti canali.",

    // Notes page
    "notes.title": "Note — Gianmarco Fabbri",
    "notes.heading": "Note",
    "notes.subtitle": "Appunti e riflessioni",
    "notes.coming": "Coming Soon",
    "notes.coming.desc": "Questa sezione è in costruzione.",

    // Footer
    "footer.tagline": "Cybersecurity Engineering Student · Cloud & AI Security",
    "footer.copy": "© 2026 Gianmarco Fabbri. Tutti i diritti riservati.",
  },

  en: {
    // Meta
    "meta.description": "Portfolio of Gianmarco Fabbri, M.Sc. Cybersecurity Engineering student at Politecnico di Torino, passionate about cloud infrastructure and AI security.",

    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.notes": "Notes",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hi, my name is",
    "hero.subtitle": "M.Sc. Cybersecurity Engineering Student @ Politecnico di Torino",
    "hero.desc": "Passionate about cloud infrastructure and AI security. Here you can find my projects and experience.",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Contact Me",

    // Home — About preview
    "home.about.title": "About Me",
    "home.about.subtitle": "A quick glance",
    "home.about.text": "I'm an M.Sc. <strong>Cybersecurity Engineering</strong> student at <strong>Politecnico di Torino</strong>, with a B.Sc. in Computer Science and Engineering from the University of Bologna. I'm passionate about <strong>cloud infrastructure and AI security</strong>: I've worked on Kubernetes runtime security and automated incident response, real-time systems, and secure web development.",
    "home.about.link": "Learn more",

    // Home — Projects preview
    "home.projects.title": "Projects",
    "home.projects.subtitle": "My most recent work",
    "home.projects.link": "View all projects",

    // About page
    "about.title": "About — Gianmarco Fabbri",
    "about.heading": "About Me",
    "about.heading.sub": "Something about me",
    "about.bio.1": "Hi! I'm <strong>Gianmarco Fabbri</strong>, an M.Sc. <strong>Cybersecurity Engineering</strong> student at <strong>Politecnico di Torino</strong>. I hold a B.Sc. in Computer Science and Engineering from the University of Bologna, with a thesis on lattice-based post-quantum cryptography.",
    "about.bio.2": "The path I'm most passionate about is <strong>cloud infrastructure and AI security</strong>. In my projects I've worked on Kubernetes runtime security and automated incident response, real-time systems, and secure web development with two-factor authentication and access control.",
    "about.bio.3": "I interned as a software engineer at <strong>My Dev</strong>, building C#/.NET backends and Blazor interfaces. I'm interested in how to protect cloud infrastructure and AI systems, and in applying artificial intelligence to cybersecurity.",

    "about.exp.title": "Experience",
    "about.exp.subtitle": "Where I've worked",
    "about.exp.1.period": "Feb 2025 — Mar 2025",
    "about.exp.1.title": "Software Engineer Intern",
    "about.exp.1.institution": "My Dev s.r.l. · Forlì, Italy",
    "about.exp.1.desc": "Built the C#/.NET Core (ASP.NET) backend for automated enterprise configuration management using the Repository-Service pattern. Developed client interfaces in Blazor WebAssembly and MudBlazor with REST API integration and secure session workflows. Integration testing, static analysis (SAST), and refactoring.",

    "about.edu.title": "Education",
    "about.edu.subtitle": "My academic path",
    "about.edu.1.period": "Oct 2025 — present",
    "about.edu.1.title": "M.Sc. in Cybersecurity Engineering",
    "about.edu.1.institution": "Politecnico di Torino",
    "about.edu.1.desc": "<strong>Completed exams:</strong> Cryptography, Web Applications, Computer Architectures and Operating Systems, Hardware & Wireless Security, Optimization Methods and Algorithms.<br /><strong>Study plan:</strong> Networks & Cloud Technologies and Security, Information Systems Security, AI and Cybersecurity, Threat Intelligence and Incident Management, Security Verification and Testing, Data Protection, Privacy and Anonymity.",
    "about.edu.2.period": "Oct 2022 — Oct 2025",
    "about.edu.2.title": "B.Sc. in Computer Science and Engineering",
    "about.edu.2.institution": "Alma Mater Studiorum – University of Bologna · Forlì-Cesena",
    "about.edu.2.desc": "<strong>Thesis:</strong> “The post-quantum era and lattice-based cryptography”: analysis of public-key primitives (RSA, ECC), quantum vulnerabilities (Shor, Grover), and the post-quantum standards CRYSTALS-Dilithium and CRYSTALS-Kyber. Foundations in distributed systems, operating systems, database systems, and formal methods.",

    "about.skills.title": "Skills",
    "about.skills.subtitle": "Technologies and tools I use",
    "about.skills.cat.cloud": "Cloud & Systems",
    "about.skills.cat.security": "Security & Auditing",
    "about.skills.cat.crypto": "Cryptography & Trust",
    "about.skills.cat.dev": "Software Development",
    "about.skills.cat.spoken": "Languages",
    "about.skills.signatures": "Digital Signatures",
    "about.skills.hash": "Hash Functions",
    "about.skills.lang.it": "Italian (native)",
    "about.skills.lang.en": "English (B2 – Cambridge First)",
    "about.skills.lang.fr": "French (A2)",

    // Projects page
    "projects.title": "Projects — Gianmarco Fabbri",
    "projects.heading": "Projects",
    "projects.subtitle": "A collection of my university and personal projects",
    "projects.k8s.desc": "Kubernetes lab that detects malicious activity inside a pod at runtime and responds automatically: Falco raises the alert, an authenticated Python handler with scoped RBAC isolates the pod with Cilium policies, keeps it for investigation, and replaces it with a healthy replica. 16 regression tests and CI checks.",
    "projects.theater.desc": "Full-stack React and Node.js/Express web app for theater seat reservations, with role-based access control (RBAC), two-factor authentication (TOTP) for admins, scrypt password hashing, and concurrency control on bookings.",
    "projects.freertos.desc": "Team-built real-time middleware in C that extends FreeRTOS on ARM Cortex-M3 (QEMU) with deadline-aware periodic tasks, deadline-miss detection, overrun policies (SKIP, KILL, CATCH_UP), event tracing, and regression tests.",
    "projects.100days.desc": "Turn-based strategy game in Java 21 and Swing, built by a four-person team for the Object-Oriented Programming course: procedural maps, AI opponent, and save/load. MVC architecture with design patterns (Observer, Strategy, Command, Factory, Builder) and unit tests; I developed soldier interactions, the AI opponent, and live statistics.",
    "projects.benessere.desc": "Web e-commerce for wellness products, built by a three-person team for the Web Technologies course: customer portal with catalog, price filters, cart, loyalty points, and order tracking; vendor portal for inventory, promotions, and order management. Object-oriented PHP 8, MySQL with triggers, Bootstrap, and JavaScript.",
    "projects.videogame.desc": "Database Systems project: relational database for a video game, console, and accessory e-commerce, normalized to BCNF with triggers and referential integrity constraints, plus a multi-role (buyer, seller, admin) desktop client in Python/Tkinter.",
    "projects.portfolio.desc": "This website: a static bilingual (IT/EN) portfolio built with Astro, with reusable components and automatic deployment to GitHub Pages via GitHub Actions.",

    // Contact page
    "contact.title": "Contact — Gianmarco Fabbri",
    "contact.heading": "Contact",
    "contact.subtitle": "Don't hesitate to reach out",
    "contact.intro": "You can find me through the following channels.",

    // Notes page
    "notes.title": "Notes — Gianmarco Fabbri",
    "notes.heading": "Notes",
    "notes.subtitle": "Notes and reflections",
    "notes.coming": "Coming Soon",
    "notes.coming.desc": "This section is under construction.",

    // Footer
    "footer.tagline": "Cybersecurity Engineering Student · Cloud & AI Security",
    "footer.copy": "© 2026 Gianmarco Fabbri. All rights reserved.",
  },
};
