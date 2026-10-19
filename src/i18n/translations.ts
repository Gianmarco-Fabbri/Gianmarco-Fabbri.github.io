export const defaultLang = "it" as const;
export type Lang = "it" | "en";

export const translations: Record<Lang, Record<string, string>> = {
  it: {
    // Nav
    "nav.home": "Home",
    "nav.about": "Chi sono",
    "nav.projects": "Progetti",
    "nav.notes": "Note",
    "nav.contact": "Contatti",

    // Hero
    "hero.greeting": "Ciao, mi chiamo",
    "hero.subtitle": "Cybersecurity Engineering Student @ Politecnico di Torino",
    "hero.desc": "Qui trovi i miei progetti e le mie esperienze.",
    "hero.cta.projects": "Vedi Progetti",
    "hero.cta.contact": "Contattami",

    // Home — About preview
    "home.about.title": "Chi Sono",
    "home.about.subtitle": "Uno sguardo rapido",
    "home.about.text": "Sono uno studente di <strong>Cybersecurity Engineering</strong> al <strong>Politecnico di Torino</strong>. Mi occupo di sicurezza cloud e applicativa, rilevamento delle minacce a runtime e architetture software sicure.",
    "home.about.link": "Scopri di più",

    // Home — Projects preview
    "home.projects.title": "Progetti",
    "home.projects.subtitle": "I miei lavori più recenti",
    "home.projects.link": "Vedi tutti i progetti",

    // About page
    "about.title": "About — Gianmarco Fabbri",
    "about.heading": "Chi Sono",
    "about.heading.sub": "Qualcosa su di me",
    "about.bio.1": "Ciao! Sono <strong>Gianmarco Fabbri</strong>, studente di <strong>Cybersecurity Engineering</strong> al <strong>Politecnico di Torino</strong>.",
    "about.bio.2": "Mi occupo di sicurezza cloud e applicativa, rilevamento delle minacce a runtime e architetture software sicure. Sviluppo applicazioni web full-stack con un approccio security-first, dall'autenticazione e il controllo degli accessi fino al deploy containerizzato.",
    "about.bio.3": "Mi interessa unire l'ingegneria del software alla sicurezza offensiva e difensiva, e applicare l'intelligenza artificiale alla cybersecurity.",
    "about.skills.title": "Competenze",
    "about.skills.subtitle": "Tecnologie e strumenti che utilizzo",
    "about.skills.cat.languages": "Linguaggi",
    "about.skills.cat.cyber": "Cybersecurity",
    "about.skills.cat.frameworks": "Framework e librerie",
    "about.skills.cat.tools": "Database e strumenti",
    "about.edu.title": "Formazione",
    "about.edu.subtitle": "Il mio percorso accademico",
    "about.edu.1.period": "2024 — in corso",
    "about.edu.1.title": "Cybersecurity Engineering (LM-66R)",
    "about.edu.1.institution": "Politecnico di Torino",
    "about.edu.1.desc": "Laurea magistrale in Ingegneria della Cybersicurezza. Focus su sicurezza delle reti, crittografia applicata e sistemi embedded sicuri.",
    "about.edu.2.period": "2021 — 2024",
    "about.edu.2.title": "Ingegneria e Scienze Informatiche (L-31)",
    "about.edu.2.institution": "Università di Bologna",
    "about.edu.2.desc": "Laurea triennale in Ingegneria e Scienze Informatiche, con tesi sulla crittografia post-quantistica basata su reticoli.",

    // Projects page
    "projects.title": "Projects — Gianmarco Fabbri",
    "projects.heading": "Progetti",
    "projects.subtitle": "Raccolta dei miei progetti universitari e personali",
    "projects.k8s.desc": "Laboratorio accademico di runtime detection e incident response automatica su Kubernetes: Falco rileva le syscall sospette, un handler Python mette in quarantena il pod e le network policy di Cilium lo isolano. Include test di regressione e limiti di validazione espliciti.",
    "projects.theater.desc": "Applicazione full-stack React ed Express per prenotare posti a teatro, con autenticazione a sessione, controllo degli accessi basato sui ruoli, TOTP per le azioni admin e controlli transazionali contro le prenotazioni in conflitto.",
    "projects.freertos.desc": "Progetto di gruppo che aggiunge a FreeRTOS un layer per task periodici: scheduling periodico, controllo delle deadline e policy di overrun configurabili, con demo su QEMU ARM Cortex-M3 e test di regressione.",
    "projects.100days.desc": "Gioco strategico a turni in Java/Swing sviluppato in un team di quattro persone. Ho curato le interazioni tra soldati, il bot avversario e le statistiche in tempo reale; il gioco include mappe procedurali, salvataggio delle partite e test automatici.",
    "projects.selfcare.desc": "E-commerce per prodotti di cura personale sviluppato come progetto di Tecnologie Web. Frontend dinamico in JavaScript con backend PHP e gestione dati lato server.",
    "projects.videogame.desc": "Applicazione gestionale per un negozio di videogiochi con interfaccia grafica in Python e database relazionale. Progetto universitario di DBMS con operazioni CRUD complete.",
    "projects.portfolio.desc": "Portfolio personale con animazioni, componenti riutilizzabili e deploy automatico su GitHub Pages tramite GitHub Actions.",

    // Contact page
    "contact.title": "Contact — Gianmarco Fabbri",
    "contact.heading": "Contatti",
    "contact.subtitle": "Non esitare a scrivermi",
    "contact.intro": "Puoi trovarmi attraverso i seguenti canali.",

    // Notes page
    "notes.title": "Notes — Gianmarco Fabbri",
    "notes.heading": "Notes",
    "notes.subtitle": "Appunti e riflessioni",
    "notes.coming": "Coming Soon",
    "notes.coming.desc": "Questa sezione è in costruzione.",

    // Footer
    "footer.tagline": "Cybersecurity Engineering Student",
    "footer.copy": "© 2026 Gianmarco Fabbri. Tutti i diritti riservati.",
  },

  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.notes": "Notes",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hi, my name is",
    "hero.subtitle": "Cybersecurity Engineering Student @ Politecnico di Torino",
    "hero.desc": "Here you can find my projects and experiences.",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Contact Me",

    // Home — About preview
    "home.about.title": "About Me",
    "home.about.subtitle": "A quick glance",
    "home.about.text": "I'm a <strong>Cybersecurity Engineering</strong> student at <strong>Politecnico di Torino</strong>, focused on cloud and application security, runtime threat detection, and secure software architecture.",
    "home.about.link": "Learn more",

    // Home — Projects preview
    "home.projects.title": "Projects",
    "home.projects.subtitle": "My most recent work",
    "home.projects.link": "View all projects",

    // About page
    "about.title": "About — Gianmarco Fabbri",
    "about.heading": "About Me",
    "about.heading.sub": "Something about me",
    "about.bio.1": "Hi! I'm <strong>Gianmarco Fabbri</strong>, a <strong>Cybersecurity Engineering</strong> student at <strong>Politecnico di Torino</strong>.",
    "about.bio.2": "I focus on cloud and application security, runtime threat detection, and secure software architecture. I build full-stack web applications with a security-first approach, from authentication and access control to containerized deployment.",
    "about.bio.3": "I'm interested in bridging software engineering and offensive/defensive security, and in applying AI to cybersecurity.",
    "about.skills.title": "Skills",
    "about.skills.subtitle": "Technologies and tools I use",
    "about.skills.cat.languages": "Languages",
    "about.skills.cat.cyber": "Cybersecurity",
    "about.skills.cat.frameworks": "Frameworks & Libraries",
    "about.skills.cat.tools": "Databases & Tools",
    "about.edu.title": "Education",
    "about.edu.subtitle": "My academic path",
    "about.edu.1.period": "2024 — present",
    "about.edu.1.title": "Cybersecurity Engineering (LM-66R)",
    "about.edu.1.institution": "Politecnico di Torino",
    "about.edu.1.desc": "Master's degree in Cybersecurity Engineering. Focus on network security, applied cryptography, and secure embedded systems.",
    "about.edu.2.period": "2021 — 2024",
    "about.edu.2.title": "Computer Science & Engineering (L-31)",
    "about.edu.2.institution": "University of Bologna",
    "about.edu.2.desc": "Bachelor's degree in Computer Science & Engineering, with a thesis on lattice-based post-quantum cryptography.",

    // Projects page
    "projects.title": "Projects — Gianmarco Fabbri",
    "projects.heading": "Projects",
    "projects.subtitle": "A collection of my university and personal projects",
    "projects.k8s.desc": "Academic lab for Kubernetes runtime detection and automated incident response: Falco detects suspicious syscalls, a Python handler quarantines the pod, and Cilium network policies isolate it. Includes regression tests and explicit validation limits.",
    "projects.theater.desc": "Full-stack React and Express app for theater seat reservations, with session authentication, role-based access control, TOTP for admin actions, and transactional checks against conflicting bookings.",
    "projects.freertos.desc": "Team project adding a periodic task layer to FreeRTOS: periodic scheduling, deadline checks, and configurable overrun policies, with a QEMU ARM Cortex-M3 demo and regression tests.",
    "projects.100days.desc": "Java/Swing turn-based strategy game built by a four-person team. I developed soldier interactions, the AI opponent, and live statistics; the game includes procedural maps, save/load, and automated tests.",
    "projects.selfcare.desc": "Self-care e-commerce developed as a Web Technologies project. Dynamic JavaScript frontend with PHP backend and server-side data management.",
    "projects.videogame.desc": "Video game shop management app with a Python GUI and relational database. University DBMS project featuring full CRUD operations.",
    "projects.portfolio.desc": "Personal portfolio with animations, reusable components, and automatic deployment to GitHub Pages via GitHub Actions.",

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
    "footer.tagline": "Cybersecurity Engineering Student",
    "footer.copy": "© 2026 Gianmarco Fabbri. All rights reserved.",
  },
};
