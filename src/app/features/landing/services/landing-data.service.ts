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
      icon: 'shield',
      title: 'Fraudes Financieros',
      laws: [
        { law: 'Ley de Prevención de Fraudes', description: 'Marco legal para prevención de fraudes', match: 'fraud_prevention', primary: true }
      ],
      count: 1,
      featured: true,
      description: 'Análisis de cargos no reconocidos, estafas y operaciones fraudulentas bajo la Ley 21.234.'
    },
    {
      id: 'lavado-activos',
      icon: 'account_balance',
      title: 'Lavado de Activos',
      laws: [{ law: 'Ley AML', description: 'Anti-Money Laundering regulations', match: 'aml', primary: true }],
      count: 0,
      description: 'Detección y reporte de operaciones sospechosas según normativa UAF y FATF.'
    },
    {
      id: 'proteccion-datos',
      icon: 'lock',
      title: 'Protección de Datos',
      laws: [{ law: 'GDPR', description: 'General Data Protection Regulation', match: 'gdpr', primary: true }],
      count: 0,
      description: 'Cumplimiento de la Ley 19.628 y estándares internacionales de privacidad.'
    },
    {
      id: 'cumplimiento-financiero',
      icon: 'verified',
      title: 'Cumplimiento Financiero',
      laws: [{ law: 'Regulaciones Financieras', description: 'Marco regulatorio financiero', match: 'financial_compliance', primary: true }],
      count: 0,
      description: 'Validación de procesos internos frente a normativas CMF y SBIF vigentes.'
    },
    {
      id: 'conocimiento-cliente',
      icon: 'person_search',
      title: 'Conocimiento del Cliente',
      laws: [{ law: 'KYC Regulations', description: 'Know Your Customer requirements', match: 'kyc', primary: true }],
      count: 0,
      description: 'Procesos KYC/KYB para verificación de identidad y debida diligencia.'
    },
    {
      id: 'transparencia-financiera',
      icon: 'visibility',
      title: 'Transparencia Financiera',
      laws: [{ law: 'Leyes de Transparencia', description: 'Requisitos de transparencia financiera', match: 'transparency', primary: true }],
      count: 0,
      description: 'Obligaciones de divulgación de información a reguladores y público.'
    },
    {
      id: 'ciberseguridad',
      icon: 'security',
      title: 'Ciberseguridad',
      laws: [{ law: 'Normas de Ciberseguridad', description: 'Estándares de seguridad informática', match: 'cybersecurity', primary: true }],
      count: 0,
      description: 'Marcos de seguridad informática exigidos por CMF y Ley Marco de Ciberseguridad.'
    },
    {
      id: 'fintech',
      icon: 'payments',
      title: 'Fintech',
      laws: [{ law: 'Regulaciones Fintech', description: 'Marco regulatorio para tecnología financiera', match: 'fintech', primary: true }],
      count: 0,
      description: 'Ley 21.521 Fintech: registro, operación y obligaciones de plataformas digitales.'
    }
  ]);

  private processesSignal = signal<ProcessStep[]>([
    {
      n: 1,
      icon: 'upload_file',
      title: 'Carga Documentos',
      description: 'Sube documentos normativos para análisis'
    },
    {
      n: 2,
      icon: 'manage_search',
      title: 'Análisis IA',
      description: 'IA analiza y categoriza contenido'
    },
    {
      n: 3,
      icon: 'account_tree',
      title: 'Mapeo Normativo',
      description: 'Identifica requisitos y regulaciones'
    },
    {
      n: 4,
      icon: 'description',
      title: 'Reporte',
      description: 'Genera reporte de cumplimiento'
    }
  ]);

  private capabilitiesSignal = signal<Capability[]>([
    {
      icon: 'psychology',
      title: 'Análisis Inteligente',
      description: 'IA avanzada para interpretación normativa'
    },
    {
      icon: 'fact_check',
      title: 'Cumplimiento',
      description: 'Asegura conformidad con regulaciones'
    },
    {
      icon: 'summarize',
      title: 'Reportes',
      description: 'Genera reportes detallados y accionables'
    }
  ]);

  areas = this.areasSignal.asReadonly();
  processes = this.processesSignal.asReadonly();
  capabilities = this.capabilitiesSignal.asReadonly();
}
