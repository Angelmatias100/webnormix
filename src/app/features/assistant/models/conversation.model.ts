export interface Message {
  role: 'user' | 'ai';
  text?: string;
  content?: any;
  timestamp?: Date;
}

export interface Conversation {
  id: string;
  messages: Message[];
  category?: string;
  createdAt: Date;
  updatedAt: Date;
}
