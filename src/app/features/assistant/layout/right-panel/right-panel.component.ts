import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from '../../../../shared/components/chip/chip.component';

interface RightSection {
  title: string;
  count: number;
  items: string[];
  collapsed: boolean;
}

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss'],
  standalone: true,
  imports: [CommonModule, ChipComponent],
})
export class OSRightPanelComponent {
  sections: RightSection[] = [
    {
      title: 'Leyes detectadas',
      count: 12,
      items: [
        'Código Civil',
        'Ley de Sociedades Comerciales',
        'Código Penal',
        'Ley Fiscal',
        'Ley de Protección de Datos',
      ],
      collapsed: false,
    },
    {
      title: 'Instituciones competentes',
      count: 8,
      items: [
        'Ministerio de Justicia',
        'Corte Suprema de Justicia',
        'Servicio de Impuestos',
        'Tribunal de Comercio',
        'Defensoría del Pueblo',
      ],
      collapsed: false,
    },
    {
      title: 'Plazos legales',
      count: 15,
      items: [
        'Prescripción: 5 años',
        'Apelación: 30 días',
        'Recurso: 10 días',
        'Notificación: 48 horas',
        'Depósito: 20 días hábiles',
      ],
      collapsed: false,
    },
    {
      title: 'Checklist documental',
      count: 9,
      items: [
        '✓ Contrato original',
        '✗ Estados financieros',
        '✓ Registro mercantil',
        '✗ Declaración fiscal',
        '✓ Cédulas de identidad',
      ],
      collapsed: false,
    },
  ];

  toggleSection(index: number) {
    this.sections[index].collapsed = !this.sections[index].collapsed;
  }

  openSettings() {
    console.log('Open settings');
  }
}
