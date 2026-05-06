export interface RegulatoryArea {
  id: string;
  icon: string;
  title: string;
  laws: Law[];
  count: number;
  featured?: boolean;
  description?: string;
}

export interface ProcessStep {
  n: number;
  icon: string;
  title: string;
  description: string;
}

export interface Capability {
  icon: string;
  title: string;
  description: string;
}

export interface Law {
  law: string;
  description: string;
  match: string;
  primary?: boolean;
}
