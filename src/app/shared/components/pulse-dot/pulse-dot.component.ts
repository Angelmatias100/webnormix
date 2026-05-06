import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pulse-dot',
  standalone: true,
  template: `<div class="pulse-dot" [style.width.px]="size" [style.height.px]="size"></div>`,
  styleUrls: ['./pulse-dot.component.scss']
})
export class PulseDotComponent {
  @Input() size = 8;
}
