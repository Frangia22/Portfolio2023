export type Locale = "en" | "es";

export type PeriodDate = `${number}` | `${number}-${number}`;

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  target?: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface ExperienceRole {
  position: string;
  start: PeriodDate;
  end: PeriodDate | "present";
  mode: string;
  location?: string;
  summary: string;
  bullets: string[];
  skills: string[];
}

export interface ExperienceCompany {
  company: string;
  roles: ExperienceRole[];
}

export interface EducationItem {
  school: string;
  credential: string;
  period: string;
}

export interface CertificationItem {
  name: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  featured: boolean;
  url?: string;
  repo?: string;
}

export interface StackCategory {
  cat: string;
  items: string[];
}

export interface Pillar {
  glyph: string;
  title: string;
  desc: string;
  tags: string[];
}

export interface FormMessages {
  nameMin: string;
  nameMax: string;
  emailInvalid: string;
  messageMin: string;
  messageMax: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submit: string;
  submitting: string;
}

export interface SiteContent {
  locale: Locale;
  profile: {
    name: string;
    jobTitle: string;
    company: string;
    location: string;
    locationCountry: string;
    email?: string;
    cvUrl?: string;
    calUrl?: string;
    whatsapp: string;
    github: string;
    linkedin: string;
    openTo: string[];
    englishLevel: string;
    spanishLevel: string;
  };
  seo: {
    siteName: string;
    defaultTitle: string;
    defaultDescription: string;
    ogImage: string;
  };
  nav: NavLink[];
  social: SocialLink[];
  ui: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    talkCta: string;
    commandPaletteHint: string;
    opensInNewTab: string;
    viewSite: string;
    viewRepo: string;
    emailCopied: string;
    copyEmail: string;
    downloadCv: string;
    langEn: string;
    langEs: string;
    present: string;
    featuredProjects: string;
    clientWebsites: string;
    educationHeading: string;
    certificationsHeading: string;
    languagesHeading: string;
  };
  hero: {
    badge: string;
    status: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    sectionLabel: string;
    title: string;
    titleLine2: string;
    paragraphs: string[];
    metrics: Metric[];
  };
  projects: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    items: ProjectItem[];
  };
  stack: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    footer: string;
    categories: StackCategory[];
  };
  experience: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    companies: ExperienceCompany[];
    education: EducationItem[];
    certifications: CertificationItem[];
  };
  pillars: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    footerCta: string;
    items: Pillar[];
  };
  contact: {
    sectionLabel: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    hiringHeading: string;
    hiringBody: string;
    projectHeading: string;
    projectBody: string;
    form: FormMessages;
  };
  terminal: {
    heroFilename: string;
    aboutFilename: string;
    stackFilename: string;
    contactFilename: string;
  };
}
