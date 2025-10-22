export interface Project {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}

export interface Comp {
  name: string;
  number: string; 
  description: string;
  projects: string[];
  order: number;
  color: string;
}

