import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OSTopBarComponent } from './layout/top-bar/top-bar.component';
import { OSSidebarComponent } from './layout/sidebar/sidebar.component';
import { OSCenterComponent } from './layout/center/center.component';
import { OSRightPanelComponent } from './layout/right-panel/right-panel.component';
import { ConversationService } from './services/conversation.service';

@Component({
  selector: 'app-assistant',
  standalone: true,
  imports: [
    CommonModule,
    OSTopBarComponent,
    OSSidebarComponent,
    OSCenterComponent,
    OSRightPanelComponent
  ],
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.scss']
})
export class AssistantComponent {
  activeCategory = signal<string>('legal');
  mode = signal<'empty' | 'analysis'>('empty');

  constructor(
    private router: Router,
    private conversationService: ConversationService
  ) {}

  onMessage(message: string) {
    console.log('Message received:', message);
    // Delegate to ConversationService for handling the message
    this.conversationService.sendMessage(message).subscribe({
      next: (response) => {
        this.mode.set('analysis');
      },
      error: (error) => {
        console.error('Error sending message:', error);
        this.mode.set('empty');
      }
    });
  }

  onCategoryChange(category: string) {
    console.log('Category changed to:', category);
    this.activeCategory.set(category);
  }

  onBack() {
    console.log('Back button clicked');
    this.router.navigate(['/']);
  }
}
