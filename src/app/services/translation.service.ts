import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

export type Language = 'en' | 'fr';

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    downloadCv: string;
    contactMe: string;
  };
  about: {
    sectionTitle: string;
    sectionSubtitle: string;
    bio1: string;
    bio2: string;
    bio3: string;
    education: string;
    degree1Title: string;
    degree1School: string;
    degree1Period: string;
    degree2Title: string;
    degree2School: string;
    degree2Period: string;
    languages: string;
    certifications: string;
  };
  experience: {
    sectionTitle: string;
    sectionSubtitle: string;
    present: string;
    items: Array<{
      role: string;
      company: string;
      period: string;
      location: string;
      description: string;
      tech: string[];
    }>;
  };
  projects: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewCode: string;
    items: Array<{
      title: string;
      description: string;
      tech: string[];
      date?: string;
    }>;
  };
  skills: {
    sectionTitle: string;
    sectionSubtitle: string;
    devops: string;
    cloud: string;
    languages: string;
    web: string;
  };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    successMessage: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    infoTitle: string;
    location: string;
  };
  footer: {
    rights: string;
    madeWith: string;
  };
}

const EN: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    title: 'Data Science Engineer',
    subtitle:
      'Data Science Engineer with experience in machine learning and AI systems. Based in Mannheim, Germany.',
    downloadCv: 'Download CV',
    contactMe: 'Contact Me',
  },
  about: {
    sectionTitle: 'About Me',
    sectionSubtitle: 'Get to know me better',
    bio1:
      "I'm Sarra Safer, a Data Science Engineer with experience in machine learning and AI systems. Skilled in building end-to-end data-driven solutions and working with modern tools and frameworks.",
    bio2:
      'With hands-on experience in AI engineering, machine learning, and full-stack development, I have worked with KSB SE & Co. KGaA in Germany and Tunisie Telecom. I thrive in collaborative environments and embrace modern AI practices.',
    bio3:
      'Currently working as an Artificial Intelligence Engineer at KSB SE & Co. KGaA and as a freelance AI & Full-Stack Developer, I continue to grow my expertise in LLMs, time-series forecasting, and scalable AI solutions.',
    education: 'Education',
    degree1Title: 'Master of Engineering in Computer Science',
    degree1School: 'ESPRIT School of Engineering',
    degree1Period: 'Sept 2022 – May 2025',
    degree2Title: 'Master of Science in Data Science',
    degree2School: 'Schmalkalden University of Applied Sciences',
    degree2Period: 'Oct 2024 – Mar 2025',
    languages: 'Languages',
    certifications: 'Certifications',
  },
  experience: {
    sectionTitle: 'Experience',
    sectionSubtitle: 'My professional journey',
    present: 'Present',
    items: [
      {
        role: 'AI & Full-Stack Developer',
        company: 'Freelance',
        period: 'Feb 2026 – Present',
        location: 'Remote',
        description:
          'Built and deployed an AI analytics platform using LLMs and asynchronous services to process and evaluate outputs from multiple AI providers with automated metrics and sentiment analysis.',
        tech: ['Next.js', 'BullMQ', 'Redis', 'PostgreSQL', 'LLMs'],
      },
      {
        role: 'Artificial Intelligence Engineer',
        company: 'KSB SE & Co. KGaA',
        period: 'Jan 2026 – Present',
        location: 'Frankenthal, Germany',
        description:
          'Conducting time-series forecasting experiments using the TiReX model on sensor data and contributing to research on TiReX integration, with a focus on time-series classification performance.',
        tech: ['TiReX', 'xLSTM', 'Time-Series', 'Python'],
      },
      {
        role: 'Artificial Intelligence Engineer Intern',
        company: 'KSB SE & Co. KGaA',
        period: 'May 2025 – Oct 2025',
        location: 'Frankenthal, Germany',
        description:
          'Built LLM-based applications on Databricks to construct RAG pipelines and AI assistants, and assessed the TiReX model utilizing xLSTM architecture for time-series forecasting on sensor data.',
        tech: ['Databricks', 'LLMs', 'RAG', 'xLSTM', 'TiReX', 'Python'],
      },
      {
        role: 'Machine Learning Engineer Intern',
        company: 'Tunisie Telecom',
        period: 'June 2024 – Sept 2024',
        location: 'Tunis, Tunisia',
        description:
          'Developed a predictive model utilizing XGBoost and Gradient Boosting to enhance radio site placements, increasing network efficiency by 25% through geospatial mapping and Power BI visualizations.',
        tech: ['XGBoost', 'Gradient Boosting', 'Power BI', 'Python', 'GIS'],
      },
      {
        role: 'Fullstack Developer Intern',
        company: 'Tunisie Telecom',
        period: 'June 2023 – July 2023',
        location: 'Monastir, Tunisia',
        description:
          'Implemented a user-friendly web platform with Django and PostgreSQL, resulting in 30% increased installation scheduling efficiency for over 200 home network requests.',
        tech: ['Django', 'PostgreSQL', 'Python'],
      },
    ],
  },
  projects: {
    sectionTitle: 'Projects',
    sectionSubtitle: 'Things I have built',
    viewCode: 'View Code',
    items: [
      {
        title: 'Healthcare Question-Answering System',
        description:
          'Implemented a healthcare Q&A system with FLAN-T5 Large and LLAMA-2-7B, fine-tuned with LoRA and Prompt Tuning for effective domain adaptation on medical datasets (MedQuAD).',
        tech: ['FLAN-T5', 'LLAMA-2-7B', 'LoRA', 'Prompt Tuning', 'HuggingFace'],
      },
      {
        title: 'AI-Powered Project Management Assistant',
        description:
          'Developed an AI-powered project management assistant compliant with PMBOK requirements by integrating LLMs and a Neo4j-based knowledge graph to improve resource allocation by 20%.',
        tech: ['LLMs', 'Neo4j', 'Knowledge Graph', 'Python', 'LangChain'],
      },
      {
        title: 'Carthago Credit Risk BFI',
        description:
          'Enhanced strategic lending decisions and decreased loan defaults by 15% through development of a credit risk monitoring platform utilizing Django, NLP techniques, regression analysis, and time series forecasting.',
        tech: ['Django', 'NLP', 'Regression', 'Time Series', 'Python'],
      },
      {
        title: 'Interactive BI Dashboard – Airline Sentiment',
        description:
          'Created an interactive Streamlit–Plotly dashboard to analyze airline sentiment from Twitter data, utilizing NLP and geospatial mapping with real-time filtering for actionable insights.',
        tech: ['Streamlit', 'Plotly', 'NLP', 'Python', 'GeoPandas'],
      },
    ],
  },
  skills: {
    sectionTitle: 'Skills',
    sectionSubtitle: 'My technical expertise',
    devops: 'Cloud & MLOps',
    cloud: 'ML/DL Frameworks',
    languages: 'Programming Languages',
    web: 'Web & Databases',
  },
  contact: {
    sectionTitle: 'Contact',
    sectionSubtitle: "Let's work together",
    name: 'Full Name',
    email: 'Email Address',
    message: 'Message',
    send: 'Send Message',
    sending: 'Sending…',
    successMessage: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
    namePlaceholder: 'John Doe',
    emailPlaceholder: 'john@example.com',
    messagePlaceholder: 'Tell me about your project…',
    infoTitle: 'Get in touch',
    location: 'Mannheim, Germany',
  },
  footer: {
    rights: 'All rights reserved.',
    madeWith: 'Made with ❤️ by Sarra Safer',
  },
};

const FR: Translations = {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    experience: 'Expérience',
    projects: 'Projets',
    skills: 'Compétences',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Bonjour, je suis',
    title: 'Ingénieure en Science des Données',
    subtitle:
      'Ingénieure en Science des Données avec une expérience en apprentissage automatique et systèmes d\'IA. Basée à Mannheim, Allemagne.',
    downloadCv: 'Télécharger CV',
    contactMe: 'Me Contacter',
  },
  about: {
    sectionTitle: 'À Propos',
    sectionSubtitle: 'Apprenez à me connaître',
    bio1:
      'Je suis Sarra Safer, Ingénieure en Science des Données avec une expérience en apprentissage automatique et systèmes d\'IA. Spécialisée dans la construction de solutions orientées données de bout en bout et dans l\'utilisation d\'outils et frameworks modernes.',
    bio2:
      'Forte d\'une expérience pratique en ingénierie de l\'IA, apprentissage automatique et développement full-stack, j\'ai travaillé avec KSB SE & Co. KGaA en Allemagne et Tunisie Telecom. J\'excelle dans les environnements collaboratifs et adopte les pratiques modernes de l\'IA.',
    bio3:
      'Actuellement en poste en tant qu\'Ingénieure en Intelligence Artificielle chez KSB SE & Co. KGaA et développeuse freelance AI & Full-Stack, je continue d\'approfondir mon expertise en LLMs, prévision de séries temporelles et solutions IA scalables.',
    education: 'Formation',
    degree1Title: 'Master en Génie Informatique',
    degree1School: 'ESPRIT School of Engineering',
    degree1Period: 'Sept 2022 – Mai 2025',
    degree2Title: 'Master of Science en Science des Données',
    degree2School: 'Université des Sciences Appliquées de Schmalkalden',
    degree2Period: 'Oct 2024 – Mar 2025',
    languages: 'Langues',
    certifications: 'Certifications',
  },
  experience: {
    sectionTitle: 'Expérience',
    sectionSubtitle: 'Mon parcours professionnel',
    present: 'Présent',
    items: [
      {
        role: 'Développeuse AI & Full-Stack',
        company: 'Freelance',
        period: 'Fév. 2026 – Présent',
        location: 'Télétravail',
        description:
          'Conception et déploiement d\'une plateforme d\'analyse IA utilisant des LLMs et des services asynchrones pour traiter et évaluer les sorties de plusieurs fournisseurs d\'IA avec métriques automatisées et analyse de sentiment.',
        tech: ['Next.js', 'BullMQ', 'Redis', 'PostgreSQL', 'LLMs'],
      },
      {
        role: 'Ingénieure en Intelligence Artificielle',
        company: 'KSB SE & Co. KGaA',
        period: 'Jan. 2026 – Présent',
        location: 'Frankenthal, Allemagne',
        description:
          'Réalisation d\'expériences de prévision de séries temporelles avec le modèle TiReX sur des données capteurs et contribution à la recherche sur l\'intégration de TiReX, avec un focus sur la performance en classification de séries temporelles.',
        tech: ['TiReX', 'xLSTM', 'Time-Series', 'Python'],
      },
      {
        role: 'Stagiaire Ingénieure en Intelligence Artificielle',
        company: 'KSB SE & Co. KGaA',
        period: 'Mai 2025 – Oct. 2025',
        location: 'Frankenthal, Allemagne',
        description:
          'Développement d\'applications basées sur des LLMs sur Databricks pour construire des pipelines RAG et des assistants IA, et évaluation du modèle TiReX utilisant l\'architecture xLSTM pour la prévision de séries temporelles sur données capteurs.',
        tech: ['Databricks', 'LLMs', 'RAG', 'xLSTM', 'TiReX', 'Python'],
      },
      {
        role: 'Stagiaire Ingénieure en Machine Learning',
        company: 'Tunisie Telecom',
        period: 'Juin 2024 – Sept. 2024',
        location: 'Tunis, Tunisie',
        description:
          'Développement d\'un modèle prédictif utilisant XGBoost et Gradient Boosting pour optimiser l\'implantation des sites radio, augmentant l\'efficacité réseau de 25% grâce à la cartographie géospatiale et des visualisations Power BI.',
        tech: ['XGBoost', 'Gradient Boosting', 'Power BI', 'Python', 'GIS'],
      },
      {
        role: 'Stagiaire Développeuse Fullstack',
        company: 'Tunisie Telecom',
        period: 'Juin 2023 – Juil. 2023',
        location: 'Monastir, Tunisie',
        description:
          'Mise en place d\'une plateforme web conviviale avec Django et PostgreSQL, entraînant une augmentation de 30% de l\'efficacité de planification des installations pour plus de 200 demandes de réseaux domestiques.',
        tech: ['Django', 'PostgreSQL', 'Python'],
      },
    ],
  },
  projects: {
    sectionTitle: 'Projets',
    sectionSubtitle: 'Ce que j\'ai réalisé',
    viewCode: 'Voir le Code',
    items: [
      {
        title: 'Système de Questions-Réponses en Santé',
        description:
          'Implémentation d\'un système de Q&R médical avec FLAN-T5 Large et LLAMA-2-7B, affiné avec LoRA et Prompt Tuning pour une adaptation efficace au domaine sur des jeux de données médicaux (MedQuAD).',
        tech: ['FLAN-T5', 'LLAMA-2-7B', 'LoRA', 'Prompt Tuning', 'HuggingFace'],
      },
      {
        title: 'Assistant IA de Gestion de Projets',
        description:
          'Développement d\'un assistant de gestion de projets alimenté par l\'IA, conforme aux exigences PMBOK, en intégrant des LLMs et un graphe de connaissances Neo4j pour améliorer l\'allocation des ressources de 20%.',
        tech: ['LLMs', 'Neo4j', 'Knowledge Graph', 'Python', 'LangChain'],
      },
      {
        title: 'Carthago Credit Risk BFI',
        description:
          'Amélioration des décisions de prêt stratégiques et réduction des défauts de remboursement de 15% grâce au développement d\'une plateforme de suivi du risque de crédit utilisant Django, des techniques NLP, l\'analyse de régression et la prévision de séries temporelles.',
        tech: ['Django', 'NLP', 'Regression', 'Time Series', 'Python'],
      },
      {
        title: 'Tableau de Bord BI Interactif – Sentiment Aérien',
        description:
          'Création d\'un tableau de bord interactif Streamlit–Plotly pour analyser le sentiment des compagnies aériennes à partir de données Twitter, utilisant NLP et cartographie géospatiale avec filtrage en temps réel pour des insights actionnables.',
        tech: ['Streamlit', 'Plotly', 'NLP', 'Python', 'GeoPandas'],
      },
    ],
  },
  skills: {
    sectionTitle: 'Compétences',
    sectionSubtitle: 'Mon expertise technique',
    devops: 'Cloud & MLOps',
    cloud: 'Frameworks ML/DL',
    languages: 'Langages de Programmation',
    web: 'Web & Bases de Données',
  },
  contact: {
    sectionTitle: 'Contact',
    sectionSubtitle: 'Travaillons ensemble',
    name: 'Nom Complet',
    email: 'Adresse Email',
    message: 'Message',
    send: 'Envoyer',
    sending: 'Envoi…',
    successMessage: 'Merci ! Votre message a été envoyé avec succès. Je vous répondrai bientôt.',
    namePlaceholder: 'Jean Dupont',
    emailPlaceholder: 'jean@exemple.com',
    messagePlaceholder: 'Parlez-moi de votre projet…',
    infoTitle: 'Entrer en contact',
    location: 'Mannheim, Allemagne',
  },
  footer: {
    rights: 'Tous droits réservés.',
    madeWith: 'Fait avec ❤️ par Sarra Safer',
  },
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private langSubject = new BehaviorSubject<Language>('en');
  currentLang$ = this.langSubject.asObservable();

  translations$ = this.currentLang$.pipe(
    map((lang) => (lang === 'en' ? EN : FR))
  );

  get currentLang(): Language {
    return this.langSubject.value;
  }

  toggleLanguage(): void {
    this.langSubject.next(this.langSubject.value === 'en' ? 'fr' : 'en');
  }

  setLanguage(lang: Language): void {
    this.langSubject.next(lang);
  }
}
