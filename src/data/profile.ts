/** Shared site content. Descriptions and labels are translation keys resolved with t(). */

export const github = "https://github.com/Gianmarco-Fabbri";
export const linkedin = "https://www.linkedin.com/in/gianmarco-fabbri/";
export const email = "gianmarcofabbri2@gmail.com";

export interface Project {
  title: string;
  descKey: string;
  tags: string[];
  githubUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Kubernetes Runtime Security & Incident Response Lab",
    descKey: "projects.k8s.desc",
    tags: ["Kubernetes", "Falco", "Cilium", "Python", "Docker", "CI/CD"],
    githubUrl: `${github}/Kubernetes-Incident-Response`,
    featured: true,
  },
  {
    title: "Theater Booking System",
    descKey: "projects.theater.desc",
    tags: ["React", "Node.js", "Express", "SQLite", "RBAC", "2FA/TOTP"],
    githubUrl: `${github}/Theater-Booking-System`,
    featured: true,
  },
  {
    title: "PTL – Periodic Task Layer for FreeRTOS",
    descKey: "projects.freertos.desc",
    tags: ["C", "FreeRTOS", "ARM Cortex-M3", "QEMU", "Real-Time"],
    githubUrl: `${github}/PTL-FreeRTOS`,
    featured: true,
  },
  {
    title: "100 Days War",
    descKey: "projects.100days.desc",
    tags: ["Java 21", "Swing", "MVC", "Design Patterns", "Gradle"],
    githubUrl: `${github}/OOP23-100DaysWar`,
  },
  {
    title: "Benessere Market – Web E-commerce",
    descKey: "projects.benessere.desc",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    githubUrl: `${github}/BenessereMarket`,
  },
  {
    title: "Videogame Planet Shop",
    descKey: "projects.videogame.desc",
    tags: ["MySQL", "SQL", "Python", "Tkinter"],
    githubUrl: `${github}/VideogamePlanetShop`,
  },
  {
    title: "Portfolio Website",
    descKey: "projects.portfolio.desc",
    tags: ["Astro", "TypeScript", "CSS", "GitHub Actions"],
    githubUrl: `${github}/Gianmarco-Fabbri.github.io`,
  },
];

/** A skill is shown as-is, or translated when given as { key }. */
export type Skill = string | { key: string };

/** Skill categories (same grouping as the CV), keyed by the translation key of the category title. */
export const skills: Record<string, Skill[]> = {
  "about.skills.cat.cloud": [
    "Kubernetes",
    "Docker",
    "Linux",
    "eBPF / Falco",
    "Cilium",
    "CI/CD",
    "Microservices / REST APIs",
  ],
  "about.skills.cat.security": [
    "Threat Modeling",
    "API Security",
    "SAST",
    "OWASP Top 10",
    "TCP/IP",
    "Wireshark",
    "Burp Suite",
  ],
  "about.skills.cat.crypto": [
    "RSA / ECC",
    { key: "about.skills.signatures" },
    { key: "about.skills.hash" },
    "Lattice-Based PQC (Dilithium, Kyber)",
    "PKI",
    "Verifiable Credentials",
  ],
  "about.skills.cat.dev": [
    "Python",
    "C# / .NET Core",
    "ASP.NET",
    "Blazor WebAssembly",
    "Java",
    "C / C++",
    "SQL",
    "PHP",
    "JavaScript",
    "React",
    "Node.js / Express",
    "Bash",
  ],
  "about.skills.cat.spoken": [
    { key: "about.skills.lang.it" },
    { key: "about.skills.lang.en" },
    { key: "about.skills.lang.fr" },
  ],
};

export interface Contact {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export const contacts: Contact[] = [
  {
    label: "Email",
    value: email,
    href: `mailto:${email}`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  },
  {
    label: "GitHub",
    value: "Gianmarco-Fabbri",
    href: github,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  },
  {
    label: "LinkedIn",
    value: "Gianmarco Fabbri",
    href: linkedin,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
  },
  {
    label: "Telegram",
    value: "@gianmarco_fabbri",
    href: "https://t.me/gianmarco_fabbri",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>`,
  },
  {
    label: "Instagram",
    value: "@gianmarcofabbrii",
    href: "https://www.instagram.com/gianmarcofabbrii/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
  },
];
