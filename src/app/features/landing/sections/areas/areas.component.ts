import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AreaCardComponent } from './area-card.component';
import { LandingDataService } from '../../services/landing-data.service';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [CommonModule, ButtonComponent, AreaCardComponent],
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent {
  private landingDataService = inject(LandingDataService);

  areas = this.landingDataService.areas;

  onCategoryClick(categoryId: string): void {
    console.log('Category clicked:', categoryId);
  }

  onViewAll(): void {
    console.log('View all categories');
  }
}
