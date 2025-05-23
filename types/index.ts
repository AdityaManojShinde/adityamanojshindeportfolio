export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  technologies: Technology[];
  videoUrl?: string;
  demoUrl?: string;
  codeUrl?: string;
  featured: boolean;
}

export type ProjectCategory =
  | "Web Development"
  | "Mobile App"
  | "Python"
  | "AI/ML"
  | "Data Science"
  | "UI/UX Design"
  | "Data Visualization";

export interface Technology {
  name: string;
  color: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  credentialUrl: string;
  logo: string;
}
