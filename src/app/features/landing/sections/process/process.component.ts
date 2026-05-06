import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingDataService } from '../../services/landing-data.service';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent {
  private landingDataService = inject(LandingDataService);

  processes = this.landingDataService.processes;
}
