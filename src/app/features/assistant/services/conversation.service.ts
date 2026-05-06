import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message, Conversation } from '../models/conversation.model';
import { ApiService } from '../../../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  private apiService = inject(ApiService);

  private _messages = signal<Message[]>([]);
  private _loading = signal<boolean>(false);
  private _error = signal<string | null>(null);

  readonly hasMessages = computed(() => this._messages().length > 0);
  readonly messageCount = computed(() => this._messages().length);
  readonly isProcessing = computed(() => this._loading());

  readonly messages$ = new Subject<Message[]>();
  readonly loading$ = new Subject<boolean>();
  readonly error$ = new Subject<string | null>();

  constructor() {}

  addMessage(msg: Message): void {
    this._messages.update(messages => [...messages, msg]);
    this.messages$.next(this._messages());
  }

  clearHistory(): void {
    this._messages.set([]);
    this._error.set(null);
    this.messages$.next([]);
  }
}
