import { Component, Input, Output, EventEmitter, signal, viewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ChipComponent } from '../../../../shared/components/chip/chip.component';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, ChipComponent],
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent {
  @Input() mode: 'empty' | 'active' = 'active';
  @Output() messageSent = new EventEmitter<string>();

  draft = signal<string>('');
  files = signal<File[]>([]);
  isDragging = signal<boolean>(false);

  textInputRef = viewChild<ElementRef>('textInput');

  handleSend(): void {
    const message = this.draft().trim();
    if (message) {
      this.messageSent.emit(message);
      this.draft.set('');
      this.files.set([]);
    }
  }

  handleDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging.set(false);

    const droppedFiles = event.dataTransfer?.files;
    if (droppedFiles) {
      this.handleFileSelect(droppedFiles);
    }
  }

  handleDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging.set(true);
  }

  handleDragLeave(event: DragEvent): void {
    const dropZone = (event.currentTarget as HTMLElement).querySelector('.drop-zone');
    if (dropZone && !dropZone.contains(event.relatedTarget as Node)) {
      this.isDragging.set(false);
    }
  }

  handleFileSelect(fileList: FileList | null): void {
    if (!fileList) return;
    const newFiles = Array.from(fileList);
    this.files.update(current => [...current, ...newFiles]);
  }

  removeFile(index: number): void {
    this.files.update(current => current.filter((_, i) => i !== index));
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      this.handleSend();
    }
  }
}
