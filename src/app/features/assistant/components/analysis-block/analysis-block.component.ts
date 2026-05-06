import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfidenceMeterComponent } from '../../../../shared/components/confidence-meter/confidence-meter.component';

type AnalysisKind = 'classification' | 'laws' | 'recommendation' | 'next';

@Component({
  selector: 'app-analysis-block',
  standalone: true,
  imports: [CommonModule, ConfidenceMeterComponent],
  templateUrl: './analysis-block.component.html',
  styleUrls: ['./analysis-block.component.scss']
})
export class AnalysisBlockComponent {
  @Input() kind: AnalysisKind = 'classification';
  @Input() title = '';
  @Input() protocol?: string;
  @Input() confidence?: number;

  get iconName(): string {
    const iconMap: Record<AnalysisKind, string> = {
      classification: 'category',
      laws: 'description',
      recommendation: 'lightbulb',
      next: 'arrow_forward'
    };
    return iconMap[this.kind];
  }

  get blockColor(): string {
    const colorMap: Record<AnalysisKind, string> = {
      classification: '#22d3ee',
      laws: '#06b6d4',
      recommendation: '#8b5cf6',
      next: '#f59e0b'
    };
    return colorMap[this.kind];
  }
}
