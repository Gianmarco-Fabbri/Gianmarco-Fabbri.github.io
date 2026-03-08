export const defaultLang = "it" as const;
export type Lang = "it" | "en";

export const translations: Record<Lang, Record<string, string>> = {
  it: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.notes": "Notes",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Ciao, mi chiamo",
    "hero.subtitle": "Cybersecurity Engineering Student @ Politecnico di Torino",
    "hero.desc": "Qui trovi i miei progetti e le mie esperienze.",
    "hero.cta.projects": "Vedi Progetti",
    "hero.cta.contact": "Contattami",

    // Home — About preview
    "home.about.title": "Chi Sono",
    "home.about.subtitle": "Uno sguardo rapido",
    "home.about.text": "Sono uno studente di <strong>Cybersecurity Engineering</strong> al <strong>Politecnico di Torino</strong>. Mi appassiona tutto ciò che riguarda la sicurezza informatica, i sistemi operativi real-time e lo sviluppo di software robusto e performante.",
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
    "about.bio.2": "Sono appassionato di sicurezza nel cloud, crime analysis e intelligenza artificiale. Affrontare problemi complessi mi stimola a dare il meglio e aspiro a trovare soluzioni eleganti ed efficienti.",
    "about.bio.3": "Nel tempo libero esploro nuovi tool e mi tengo aggiornato sulle novità nel mio campo della cybersecurity.",
    "about.skills.title": "Competenze",
    "about.skills.subtitle": "Tecnologie e strumenti che utilizzo",
    "about.skills.cat.languages": "Linguaggi",
    "about.skills.cat.cyber": "Cybersecurity",
    "about.skills.cat.tools": "Tools & Frameworks",
    "about.edu.title": "Formazione",
    "about.edu.subtitle": "Il mio percorso accademico",
    "about.edu.1.period": "2024 — in corso",
    "about.edu.1.title": "Cybersecurity Engineering (LM-66R)",
    "about.edu.1.institution": "Politecnico di Torino",
    "about.edu.1.desc": "Laurea magistrale in Ingegneria della Cybersicurezza. Focus su sicurezza delle reti, crittografia applicata e sistemi embedded sicuri.",
    "about.edu.2.period": "2021 — 2024",
    "about.edu.2.title": "Ingegneria e Scienze Informatiche (L-31)",
    "about.edu.2.institution": "Università di Bologna",
    "about.edu.2.desc": "Laurea triennale in Ingegneria e Scienze informatiche. Basi di programmazione, sistemi operativi, reti e database.",

    // Projects page
    "projects.title": "Projects — Gianmarco Fabbri",
    "projects.heading": "Progetti",
    "projects.subtitle": "Raccolta dei miei progetti universitari e personali",
    "projects.freertos.desc": "Sistema di scheduling timeline per FreeRTOS con supporto per task hard real-time, trace logging circolare e policy di overrun configurabili. Testato su QEMU ARM Cortex-M3.",
    "projects.100days.desc": "Videogioco strategico a turni in Java con architettura MVC. Include mappa interattiva, gestione soldati, torri difensive, Bot avversario e sistema di salvataggio partita.",
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
    "home.about.text": "I'm a <strong>Cybersecurity Engineering</strong> student at <strong>Politecnico di Torino</strong>. I'm passionate about cybersecurity, real-time operating systems, and building robust, high-performance software.",
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
    "about.bio.2": "I'm passionate about cloud security, crime analysis, and artificial intelligence. Tackling complex problems pushes me to do my best, and I strive to find elegant and efficient solutions.",
    "about.bio.3": "In my free time I explore new tools and keep up with the latest news in the cybersecurity field.",
    "about.skills.title": "Skills",
    "about.skills.subtitle": "Technologies and tools I use",
    "about.skills.cat.languages": "Languages",
    "about.skills.cat.cyber": "Cybersecurity",
    "about.skills.cat.tools": "Tools & Frameworks",
    "about.edu.title": "Education",
    "about.edu.subtitle": "My academic path",
    "about.edu.1.period": "2024 — present",
    "about.edu.1.title": "Cybersecurity Engineering (LM-66R)",
    "about.edu.1.institution": "Politecnico di Torino",
    "about.edu.1.desc": "Master's degree in Cybersecurity Engineering. Focus on network security, applied cryptography, and secure embedded systems.",
    "about.edu.2.period": "2021 — 2024",
    "about.edu.2.title": "Computer Science & Engineering (L-31)",
    "about.edu.2.institution": "University of Bologna",
    "about.edu.2.desc": "Bachelor's degree in Computer Science & Engineering. Fundamentals of programming, operating systems, networks, and databases.",

    // Projects page
    "projects.title": "Projects — Gianmarco Fabbri",
    "projects.heading": "Projects",
    "projects.subtitle": "A collection of my university and personal projects",
    "projects.freertos.desc": "Timeline scheduling system for FreeRTOS with hard real-time task support, circular trace logging, and configurable overrun policies. Tested on QEMU ARM Cortex-M3.",
    "projects.100days.desc": "Turn-based strategy game in Java with MVC architecture. Includes interactive map, soldier management, defensive towers, AI opponent, and game-save system.",
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
