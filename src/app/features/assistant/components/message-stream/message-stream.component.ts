import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../../models/conversation.model';

@Component({
  selector: 'app-message-stream',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-stream.component.html',
  styleUrls: ['./message-stream.component.scss']
})
export class MessageStreamComponent {
  @Input() messages: Message[] = [];

  formatTime(date?: Date): string {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  }

  trackByIndex(index: number): number {
    return index;
  }
}
