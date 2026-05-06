import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from '../../../../shared/components/chip/chip.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, ChipComponent, ButtonComponent],
})
export class OSTopBarComponent {
  @Input() onBack: Function = () => {};
}
