import type { ReactNode } from "react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  icon: ReactNode;
}

export interface SkillCategory {
  label: string;
  items: string[];
}

export interface Interest {
  name: string;
  icon: string;
}
