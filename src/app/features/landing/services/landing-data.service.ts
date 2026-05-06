import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { RegulatoryArea, ProcessStep, Capability } from '../models/landing.model';

@Injectable({
  providedIn: 'root'
})
export class LandingDataService {
  private areasSignal = signal<RegulatoryArea[]>([
    {
      id: 'fraudes-financieros',
      icon: 'fraud_icon',
      title: 'Fraudes Financieros',
      laws: [
        { law: 'Ley de Prevención de Fraudes', description: 'Marco legal para prevención de fraudes', match: 'fraud_prevention', primary: true }
      ],
      count: 1,
      featured: true,
      description: 'Prevención y detección de fraudes financieros'
    },
    {
      id: 'lavado-activos',
      icon: 'aml_icon',
      title: 'Lavado de Activos',
      laws: [
        { law: 'Ley AML', description: 'Anti-Money Laundering regulations', match: 'aml', primary: true }
      ],
      count: 1
    },
    {
      id: 'proteccion-datos',
      icon: 'data_protection_icon',
      title: 'Protección de Datos',
      laws: [
        { law: 'GDPR', description: 'General Data Protection Regulation', match: 'gdpr', primary: true }
      ],
      count: 1
    },
    {
      id: 'cumplimiento-financiero',
      icon: 'compliance_icon',
      title: 'Cumplimiento Financiero',
      laws: [
        { law: 'Regulaciones Financieras', description: 'Marco regulatorio financiero', match: 'financial_compliance', primary: true }
      ],
      count: 1
    },
    {
      id: 'conocimiento-cliente',
      icon: 'kyc_icon',
      title: 'Conocimiento del Cliente',
      laws: [
        { law: 'KYC Regulations', description: 'Know Your Customer requirements', match: 'kyc', primary: true }
      ],
      count: 1
    },
    {
      id: 'transparencia-financiera',
      icon: 'transparency_icon',
      title: 'Transparencia Financiera',
      laws: [
        { law: 'Leyes de Transparencia', description: 'Requisitos de transparencia financiera', match: 'transparency', primary: true }
      ],
      count: 1
    },
    {
      id: 'ciberseguridad',
      icon: 'cybersecurity_icon',
      title: 'Ciberseguridad',
      laws: [
        { law: 'Normas de Ciberseguridad', description: 'Estándares de seguridad informática', match: 'cybersecurity', primary: true }
      ],
      count: 1
    },
    {
      id: 'fintech',
      icon: 'fintech_icon',
      title: 'Fintech',
      laws: [
        { law: 'Regulaciones Fintech', description: 'Marco regulatorio para tecnología financiera', match: 'fintech', primary: true }
      ],
      count: 1
    }
  ]);

  private processesSignal = signal<ProcessStep[]>([
    {
      n: 1,
      icon: 'upload_icon',
      title: 'Carga Documentos',
      description: 'Sube documentos normativos para análisis'
    },
    {
      n: 2,
      icon: 'analyze_icon',
      title: 'Análisis IA',
      description: 'IA analiza y categoriza contenido'
    },
    {
      n: 3,
      icon: 'match_icon',
      title: 'Mapeo Normativo',
      description: 'Identifica requisitos y regulaciones'
    },
    {
      n: 4,
      icon: 'report_icon',
      title: 'Reporte',
      description: 'Genera reporte de cumplimiento'
    }
  ]);

  private capabilitiesSignal = signal<Capability[]>([
    {
      icon: 'ai_icon',
      title: 'Análisis Inteligente',
      description: 'IA avanzada para interpretación normativa'
    },
    {
      icon: 'compliance_icon',
      title: 'Cumplimiento',
      description: 'Asegura conformidad con regulaciones'
    },
    {
      icon: 'reporting_icon',
      title: 'Reportes',
      description: 'Genera reportes detallados y accionables'
    }
  ]);

  areas = this.areasSignal.asReadonly();
  processes = this.processesSignal.asReadonly();
  capabilities = this.capabilitiesSignal.asReadonly();
}
