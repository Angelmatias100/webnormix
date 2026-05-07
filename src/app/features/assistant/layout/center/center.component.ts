import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmptyStateComponent } from '../../components/empty-state/empty-state.component';
import { MessageStreamComponent } from '../../components/message-stream/message-stream.component';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, EmptyStateComponent, MessageStreamComponent],
})
export class OSCenterComponent {
  @Input() mode: 'empty' | 'analysis' = 'empty';
  @Output() messageSend = new EventEmitter<string>();

  isDragOver = false;
  inputValue = '';

  @HostListener('dragover', ['$event'])
  onDragOver(e: DragEvent) { e.preventDefault(); this.isDragOver = true; }

  @HostListener('dragleave', ['$event'])
  onDragLeave(e: DragEvent) { e.preventDefault(); this.isDragOver = false; }

  @HostListener('drop', ['$event'])
  onDrop(e: DragEvent) { e.preventDefault(); this.isDragOver = false; }

  sendMessage() {
    if (this.inputValue.trim()) {
      this.messageSend.emit(this.inputValue.trim());
      this.inputValue = '';
    }
  }

  onExamplePicked(text: string) {
    this.inputValue = text;
    this.sendMessage();
  }

  onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.sendMessage(); }
  }

  attachFile() {}
}
