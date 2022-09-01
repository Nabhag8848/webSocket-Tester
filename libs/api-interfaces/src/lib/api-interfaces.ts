export interface Message {
  message: string;
}

export interface Notification {
  message: string;
  length: number;
  time: Date;
}

export interface PushMessage {
  type: string;
  code: string; // Unique identifier
}
