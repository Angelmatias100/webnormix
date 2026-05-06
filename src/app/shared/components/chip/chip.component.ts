import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="'chip chip-' + variant">
      <ng-content />
    </span>
  `,
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  @Input() variant: 'default' | 'cyan' | 'indigo' | 'amber' = 'default';
}
