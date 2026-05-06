import { Component, Input, Output, EventEmitter, HostListener, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OSCenterComponent {
  @Input() mode: 'empty' | 'analysis' = 'empty';
  @Output() messageSend = new EventEmitter<string>();

  isDragOver = false;
  inputValue = '';

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;

    const files = event.dataTransfer?.files;
    if (files) {
      console.log('Files dropped:', files);
      // Handle file drop logic here
    }
  }

  sendMessage() {
    if (this.inputValue.trim()) {
      this.messageSend.emit(this.inputValue);
      this.inputValue = '';
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  attachFile() {
    console.log('Attach file');
  }

  recordVoice() {
    console.log('Record voice');
  }
}
