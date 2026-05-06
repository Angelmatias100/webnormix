import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confidence-meter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="meter">
      <i [style.width.%]="percentage"></i>
    </div>
  `,
  styleUrls: ['./confidence-meter.component.scss']
})
export class ConfidenceMeterComponent {
  @Input() percentage = 0;
}
