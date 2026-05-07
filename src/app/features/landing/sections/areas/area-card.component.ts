import { Component, Input, HostBinding, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegulatoryArea } from '../../models/landing.model';

@Component({
  selector: 'app-area-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './area-card.component.html',
  styleUrls: ['./area-card.component.scss']
})
export class AreaCardComponent {
  @Input() area!: RegulatoryArea;
  @Input() span: number = 3;

  @HostBinding('style.grid-column') get gridColumn() { return `span ${this.span}`; }

  hover = signal(false);
}
