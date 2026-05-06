export interface AnalysisResult {
  caseId: string;
  classification: CaseClassification;
  applicableLaws: Law[];
  recommendation: string;
  nextSteps: string[];
  confidence: number;
  processingTime: number;
}

export interface CaseClassification {
  type: string;
  severity: 'low' | 'medium' | 'high';
  competentEntity: Institution;
  legalDeadline: string;
}

export interface Law {
  code: string;
  name: string;
  articles: string[];
  matchScore: number;
}

export interface Institution {
  code: string;
  name: string;
  fullName: string;
}
