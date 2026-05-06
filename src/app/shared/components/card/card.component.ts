import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="card"><ng-content /></div>`,
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() elevated = false;
  @HostBinding('class.card-elev') get isElevated(): boolean {
    return this.elevated;
  }
}
