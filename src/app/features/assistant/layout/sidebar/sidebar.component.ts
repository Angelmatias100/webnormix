import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

const OS_CATEGORIES = [
  { id: 'legal',      name: 'Análisis Legal',       icon: 'gavel' },
  { id: 'financial',  name: 'Análisis Financiero',   icon: 'account_balance' },
  { id: 'risk',       name: 'Análisis de Riesgo',    icon: 'warning' },
  { id: 'compliance', name: 'Cumplimiento',           icon: 'verified' },
  { id: 'contract',   name: 'Contratos',              icon: 'description' },
  { id: 'audit',      name: 'Auditoría',              icon: 'manage_search' },
  { id: 'regulatory', name: 'Regulatorio',            icon: 'policy' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class OSSidebarComponent {
  @Input() activeCategory: string = 'legal';
  @Output() categoryChange = new EventEmitter<string>();
  @Output() navigateHome = new EventEmitter<void>();

  categories = OS_CATEGORIES;

  recentAnalyses = [
    { id: '1', title: 'Cargo no reconocido tarjeta', date: 'Hace 5 min',    active: true  },
    { id: '2', title: 'Análisis de Riesgo Fiscal',   date: 'Hace 2 horas',  active: false },
    { id: '3', title: 'Revisión Normativa Q1',        date: 'Ayer',          active: false },
  ];

  selectCategory(id: string) { this.categoryChange.emit(id); }
  goHome()                    { this.navigateHome.emit(); }
}
