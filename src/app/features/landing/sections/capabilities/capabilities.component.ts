import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from '../../../../shared/components/chip/chip.component';
import { LandingDataService } from '../../services/landing-data.service';

@Component({
  selector: 'app-capabilities',
  standalone: true,
  imports: [CommonModule, ChipComponent],
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.scss']
})
export class CapabilitiesComponent {
  private landingDataService = inject(LandingDataService);

  capabilities = this.landingDataService.capabilities;

  // Classification rows mock data
  classificationRows = [
    {
      law: 'Ley 21.234',
      description: 'Protección del consumidor en transacciones electrónicas',
      match: 95,
      meter: 'high' as const
    },
    {
      law: 'Ley CMF 18.045',
      description: 'Mercado de valores y operaciones bursátiles',
      match: 87,
      meter: 'high' as const
    },
    {
      law: 'Ley 19.496',
      description: 'Código de protección y defensa del consumidor',
      match: 72,
      meter: 'medium' as const
    }
  ];

  // Timeline mock data
  timelineItems = [
    { day: 'D+0', title: 'Carga Documentos', state: 'done' as const },
    { day: 'D+1', title: 'Análisis IA', state: 'done' as const },
    { day: 'D+2', title: 'Mapeo Normativo', state: 'active' as const },
    { day: 'D+3', title: 'Validación', state: 'pending' as const },
    { day: 'D+4', title: 'Refinamiento', state: 'pending' as const },
    { day: 'D+5', title: 'Reporte Final', state: 'pending' as const }
  ];
}
