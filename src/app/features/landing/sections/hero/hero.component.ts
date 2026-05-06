import { Component, Output, EventEmitter, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ChipComponent } from '../../../../shared/components/chip/chip.component';
import { PulseDotComponent } from '../../../../shared/components/pulse-dot/pulse-dot.component';
import { ConfidenceMeterComponent } from '../../../../shared/components/confidence-meter/confidence-meter.component';
import { LandingService } from '../../services/landing.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    ChipComponent,
    PulseDotComponent,
    ConfidenceMeterComponent
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Output() navigateAssistant = new EventEmitter<void>();

  private landingService = inject(LandingService);
  tick = signal(0);

  ngOnInit(): void {
    setInterval(() => {
      this.tick.update(t => t + 1);
    }, 3000);
  }

  onNavigate(): void {
    this.landingService.navigateToAssistant();
    this.navigateAssistant.emit();
  }

  onDemoClick(): void {
    this.landingService.trackDemoClick();
  }

  getTimerValue(): string {
    return String(940 + (this.tick() % 60)).padStart(3, '0');
  }
}
