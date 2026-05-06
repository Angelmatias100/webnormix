import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeroComponent } from './sections/hero/hero.component';
import { AreasComponent } from './sections/areas/areas.component';
import { ProcessComponent } from './sections/process/process.component';
import { CapabilitiesComponent } from './sections/capabilities/capabilities.component';
import { CTAComponent } from './sections/cta/cta.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AreasComponent,
    ProcessComponent,
    CapabilitiesComponent,
    CTAComponent
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  private router = inject(Router);

  onNavigateToAssistant(): void {
    this.router.navigate(['/assistant']);
  }
}
