export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  field: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  email: string;
  socials: SocialLink[];
  projects: Project[];
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
}
