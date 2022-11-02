import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  wsUrl!: string;
  socket: WebSocket | undefined;
  type!: string;

  connect(data: any) {
    try {
      this.wsUrl = data.inputUrl;
      if (this.socket != undefined) {
        console.log('closed');
        this.socket.close();
      }

      this.socket = new WebSocket(this.wsUrl);
      console.log(this.socket);
    } catch (err: any) {
      throw new Error(err);
    }

    return this.socket;
  }

  subscribeToChannels(inputText: string | undefined): Observable<any> {
    try {
      console.log(inputText);
      console.log(this.socket);
      if (this.socket == undefined) {
        throw new Error(
          'You must connect to websocket api to subscribe to channels'
        );
      }

      if (inputText == undefined) {
        throw new Error('You must provide the subscription object');
      }

      this.socket?.send(inputText);

      console.log('Running');

      return new Observable((observer) => {
        if (this.socket == undefined) {
          throw new Error(
            'You must connect to websocket api to subscribe to channels'
          );
        }

        this.socket.onmessage = (updates) => {
          console.log('Updates: ', updates);
          observer.next(updates);
        };

        this.socket.onerror = (event) => observer.error(event);

        this.socket.onclose = () => {
          observer.complete();
        };
      });
    } catch (err: any) {
      throw new Error(err);
    }
  }

  unsubscribeToChannels(inputText: string | undefined) {
    try {
      if (this.socket == undefined) {
        throw new Error(
          'You must connect to websocket api to unsubscribe to channels'
        );
      }

      if (inputText == undefined) {
        throw new Error('You must provide the unsubscription object');
      }

      this.socket?.send(inputText);
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
