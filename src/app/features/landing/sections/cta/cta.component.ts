import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CTAComponent {
  @Output() navigateAssistant = new EventEmitter<void>();

  onNavigate(): void {
    this.navigateAssistant.emit();
  }

  onContactTeam(): void {
    console.log('Contact team clicked');
  }
}
