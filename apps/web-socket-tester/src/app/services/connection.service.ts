import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  wsUrl!: string;
  socket: WebSocket | undefined;

  connect(data: any) {
    try {
      this.wsUrl = data.inputUrl;
      if (this.socket != undefined) {
        this.socket.close();
      }

      this.socket = new WebSocket(this.wsUrl);
    } catch (err: any) {
      throw new Error(err);
    }

    return this.socket;
  }
}
