import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

export interface ExamplePrompt {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent {
  @Input() examples: ExamplePrompt[] = [
    { icon: 'gavel', text: 'Analizar norma regulatoria específica' },
    { icon: 'description', text: 'Clasificar caso legal complejo' },
    { icon: 'verify', text: 'Validar cumplimiento normativo' },
    { icon: 'timeline', text: 'Revisar cronograma de plazos' }
  ];

  @Output() examplePicked = new EventEmitter<string>();

  onExampleClick(text: string): void {
    this.examplePicked.emit(text);
  }
}
