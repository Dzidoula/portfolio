export type Lang = 'en' | 'fr'

export const links = {
  email: 'mkedaniel04@gmail.com',
  linkedin: 'https://www.linkedin.com/in/daniel-makie-1968',
  github: 'https://github.com/Dzidoula',
  cv: `${import.meta.env.BASE_URL}CV_MAKIE_Daniel_Developpeur_FR.pdf`,
}

type Project = {
  title: string
  desc: Record<Lang, string>
  tags: string[]
  repo?: string
}

export const projects: Project[] = [
  {
    title: 'RightCom Sentiment API',
    desc: {
      en: 'Python sentiment-analysis API and an AI model that generates surveys automatically.',
      fr: "API Python d'analyse de sentiments et modèle d'IA de génération automatique de sondages.",
    },
    tags: ['Python', 'API', 'AI'],
  },
  {
    title: 'Tracking Drone',
    desc: {
      en: 'TELLO drone with automatic target tracking and face recognition, trained with YOLOv8 on Roboflow data.',
      fr: 'Drone TELLO avec suivi automatique de cible et reconnaissance faciale, entraîné avec YOLOv8 et Roboflow.',
    },
    tags: ['YOLOv8', 'Roboflow', 'Computer vision'],
  },
  {
    title: 'AquaTwin',
    desc: {
      en: 'Hybrid digital twin for precision drip irrigation: from empirical decisions to data-driven control.',
      fr: "Jumeau numérique hybride pour l'irrigation goutte-à-goutte de précision : de l'empirisme au pilotage par les données.",
    },
    tags: ['Digital twin', 'Python', 'API'],
    repo: 'https://github.com/Dzidoula/AquaTwin-Drip-Hybrid-Digital-Twin-for-Controlling-Drip-Irrigation',
  },
  {
    title: 'Hybrid Thermostatic Chamber',
    desc: {
      en: 'PID regulation loop and an autonomous hybrid supply: grid + photovoltaic solar.',
      fr: 'Boucle de régulation PID et alimentation hybride autonome : réseau + solaire photovoltaïque.',
    },
    tags: ['PID', 'Solar PV', 'Control'],
  },
  {
    title: 'EduNova',
    desc: {
      en: 'Education platform with a separate frontend and backend.',
      fr: 'Plateforme éducative avec frontend et backend séparés.',
    },
    tags: ['Full-stack', 'JavaScript'],
    repo: 'https://github.com/Dzidoula/edunova-frontend',
  },
  {
    title: 'Royal Bank CI',
    desc: {
      en: 'Banking suite for Côte d’Ivoire: admin dashboard (React, TypeScript, Tailwind) and NestJS API.',
      fr: "Suite bancaire pour la Côte d'Ivoire : tableau de bord admin (React, TypeScript, Tailwind) et API NestJS.",
    },
    tags: ['React', 'TypeScript', 'NestJS'],
  },
]

export const experience = [
  {
    period: '2025',
    role: { en: 'Python Backend Intern', fr: 'Stagiaire Développeur Backend Python' },
    org: 'RightCom, Bénin',
    points: {
      en: ['Built sentiment-analysis APIs in Python.', 'Integrated an AI model for automatic survey generation.'],
      fr: ["Développement d'API d'analyse de sentiments en Python.", "Intégration d'un modèle d'IA pour la génération automatique de sondages."],
    },
  },
  {
    period: 'Jul–Sep 2025',
    role: { en: 'Intern', fr: 'Stagiaire' },
    org: 'Yesunana Laboratory, Bénin',
    points: {
      en: ['Python/Tkinter desktop app for building sizing.', 'Designed a quadcopter in FreeCAD and simulated its flight dynamics.'],
      fr: ["Application de bureau Python/Tkinter pour le dimensionnement de bâtiments.", "Conception d'un drone quadricoptère sous FreeCAD et simulation de sa dynamique de vol."],
    },
  },
  {
    period: '2024',
    role: { en: 'Tracking Drone Project (team)', fr: 'Projet Drone de suivi (équipe)' },
    org: 'EEIA',
    points: {
      en: ['Programmed a TELLO drone for target tracking and face recognition.', 'Prepared data with Roboflow and trained a YOLOv8 model.'],
      fr: ["Programmation d'un drone TELLO pour le suivi de cible et la reconnaissance faciale.", "Préparation des données avec Roboflow et entraînement d'un modèle YOLOv8."],
    },
  },
  {
    period: '2023–2024',
    role: { en: 'Organizer & Trainer', fr: 'Organisateur et Formateur' },
    org: { en: 'Electronics Club, University of Abomey', fr: "Club d'Électronique, Université d'Abomey" },
    points: {
      en: ['Trained students in Arduino, ESP32 and circuit design.', 'Supervised student projects and hardware purchasing.'],
      fr: ["Formation des étudiants à Arduino, ESP32 et à la conception de circuits.", "Encadrement de projets étudiants et suivi des achats de matériel."],
    },
  },
]

export const skills: Record<Lang, { title: string; items: string[] }[]> = {
  en: [
    { title: 'Languages & frameworks', items: ['Python', 'JavaScript', 'Node.js', 'React', 'Flutter', 'HTML/CSS', 'C', 'MATLAB'] },
    { title: 'Backend & AI', items: ['API development', 'AI model integration', 'YOLOv8', 'Roboflow', 'Computer vision', 'Tkinter'] },
    { title: 'Embedded systems', items: ['Arduino', 'ESP32', 'Proteus'] },
    { title: 'Modeling & simulation', items: ['COMSOL Multiphysics', 'TRNSYS', 'MATLAB', 'SolidWorks', 'FreeCAD'] },
  ],
  fr: [
    { title: 'Langages & frameworks', items: ['Python', 'JavaScript', 'Node.js', 'React', 'Flutter', 'HTML/CSS', 'C', 'MATLAB'] },
    { title: 'Backend & IA', items: ['Développement d’API', 'Intégration de modèles d’IA', 'YOLOv8', 'Roboflow', 'Vision par ordinateur', 'Tkinter'] },
    { title: 'Systèmes embarqués', items: ['Arduino', 'ESP32', 'Proteus'] },
    { title: 'Modélisation & simulation', items: ['COMSOL Multiphysics', 'TRNSYS', 'MATLAB', 'SolidWorks', 'FreeCAD'] },
  ],
}

export const education = [
  { year: '2023–2026', en: 'Engineering degree, Energy & Process Engineering — ENSGEP, UNSTIM (Abomey)', fr: "Diplôme d'ingénieur en Génie Énergétique et Procédés — ENSGEP, UNSTIM (Abomey)" },
  { year: '2024', en: 'AI Summer School — Bénin Excellence', fr: "École d'été sur l'Intelligence Artificielle — Bénin Excellence" },
  { year: '2021–2023', en: 'CPGE — INSPEI, Abomey', fr: 'CPGE — INSPEI, Abomey' },
  { year: '2021', en: 'Baccalauréat, série C — Djougou', fr: 'Baccalauréat série C — Djougou' },
]

export const t = {
  en: {
    nav: { about: 'About', projects: 'Projects', experience: 'Experience', skills: 'Skills', contact: 'Contact' },
    cv: 'Download CV',
    badge: 'Available for PhD opportunities',
    h1a: 'Engineering energy.',
    h1b: 'Building intelligence.',
    sub: 'Energy & Process Engineer (ENSGEP, UNSTIM 2026) and Python & AI developer, based in Bohicon, Bénin.',
    viewProjects: 'View projects',
    stats: ['Roles & internships', 'Projects', 'Python award', 'Languages'],
    aboutT: 'About',
    about:
      'A freshly graduated energy engineer with hands-on experience in backend development and artificial intelligence. I combine thermal and energy modeling with software, APIs and computer vision, and I want to continue toward a doctorate in renewable energy systems.',
    featuredT: 'Featured research',
    oven: 'Ecological Fish-Smoking Oven',
    ovenD:
      'Final-year project (2026). A smoking oven that reduces harmful fumes (PAH) with baffles and an activated-charcoal bed, with thermal sizing and COMSOL Multiphysics modeling.',
    projectsT: 'Projects',
    private: 'Private repository',
    code: 'View code',
    expT: 'Experience',
    skillsT: 'Skills',
    awardT: 'Award',
    award: 'Winner — Python programming challenge, Bénin Excellence AI Summer School (2024)',
    contactT: 'Get in touch',
    contactD: 'Open to PhD scholarships, research and software opportunities.',
    langs: 'French (fluent) · English (intermediate) · Lokpa (native)',
    rights: 'All rights reserved.',
  },
  fr: {
    nav: { about: 'À propos', projects: 'Projets', experience: 'Expérience', skills: 'Compétences', contact: 'Contact' },
    cv: 'Télécharger le CV',
    badge: 'Disponible pour des opportunités de thèse',
    h1a: "Concevoir l'énergie.",
    h1b: "Construire l'intelligence.",
    sub: 'Ingénieur en Génie Énergétique et Procédés (ENSGEP, UNSTIM 2026) et développeur Python & IA, basé à Bohicon, Bénin.',
    viewProjects: 'Voir les projets',
    stats: ['Rôles & stages', 'Projets', 'Prix Python', 'Langues'],
    aboutT: 'À propos',
    about:
      "Ingénieur énergéticien fraîchement diplômé, avec une expérience pratique en développement backend et en intelligence artificielle. J'associe modélisation thermique et énergétique, logiciels, API et vision par ordinateur, et je souhaite poursuivre vers un doctorat en systèmes d'énergies renouvelables.",
    featuredT: 'Projet de recherche phare',
    oven: 'Four de fumage de poisson écologique',
    ovenD:
      "Projet de fin d'études (2026). Un four de fumage qui réduit les fumées nocives (HAP) grâce à des chicanes et un lit de charbon actif, avec dimensionnement thermique et modélisation sous COMSOL Multiphysics.",
    projectsT: 'Projets',
    private: 'Dépôt privé',
    code: 'Voir le code',
    expT: 'Expérience',
    skillsT: 'Compétences',
    awardT: 'Distinction',
    award: "Lauréat du challenge de programmation Python, École d'été sur l'IA de Bénin Excellence (2024)",
    contactT: 'Me contacter',
    contactD: 'Ouvert aux bourses de thèse, à la recherche et aux opportunités en développement.',
    langs: 'Français (courant) · Anglais (intermédiaire) · Lokpa (langue maternelle)',
    rights: 'Tous droits réservés.',
  },
}
