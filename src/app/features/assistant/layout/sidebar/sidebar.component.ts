import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

const OS_CATEGORIES = [
  { id: 'legal', name: 'Análisis Legal', icon: '⚖️' },
  { id: 'financial', name: 'Análisis Financiero', icon: '💰' },
  { id: 'risk', name: 'Análisis de Riesgo', icon: '⚠️' },
  { id: 'compliance', name: 'Cumplimiento', icon: '✓' },
  { id: 'contract', name: 'Contratos', icon: '📋' },
  { id: 'audit', name: 'Auditoría', icon: '🔍' },
  { id: 'regulatory', name: 'Regulatorio', icon: '📜' },
  { id: 'investigation', name: 'Investigación', icon: '🔎' },
];

interface RecentAnalysis {
  id: string;
  title: string;
  date: string;
  active: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class OSSidebarComponent {
  @Input() activeCategory: string = 'legal';
  @Input() onNew: Function = () => {};
  @Output() categoryChange = new EventEmitter<string>();

  categories = OS_CATEGORIES;

  recentAnalyses: RecentAnalysis[] = [
    { id: '1', title: 'Contrato de Servicios', date: '5 min ago', active: true },
    { id: '2', title: 'Análisis de Riesgo Fiscal', date: '2 hours ago', active: false },
    { id: '3', title: 'Revisión Normativa Q1', date: 'Yesterday', active: false },
  ];

  selectCategory(categoryId: string) {
    this.categoryChange.emit(categoryId);
  }

  newAnalysis() {
    this.onNew();
  }
}
