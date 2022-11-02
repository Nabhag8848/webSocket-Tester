import { Component } from '@angular/core';
import { Notification } from '@web-socket-tester/api-interfaces';
import { Observable, Subscription } from 'rxjs';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'web-socket-tester-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  providers: [],
})
export class MessagesComponent {
  pushMessage!: Notification;
  selectedMessage: Notification | undefined;
  lockedMessages: Notification[] | any[] = [];
  inputText: string | undefined;
  wsSubscription!: Subscription;
  unlockedMessages: Notification[] | any[] = [
    {
      event: 'message',
      message: `{
       "this is where the message will come"
      }`,
      length: 70,
      time: new Date(),
    },
  ];

  constructor(private connectionService: ConnectionService) {}

  toggleLock(data: Notification, frozen: boolean, index: number) {
    console.log('See text', this.inputText);
    if (frozen) {
      this.lockedMessages = this.lockedMessages.filter((c, i) => i !== index);
      this.unlockedMessages.push(data);
    } else {
      this.unlockedMessages = this.unlockedMessages.filter(
        (c, i) => i !== index
      );
      this.lockedMessages.push(data);
    }
  }

  onRowSelect({ data }: any) {
    for (let i = 0; i < this.lockedMessages.length; ++i) {
      if (data === this.lockedMessages[i]) {
        return;
      }
    }
    this.selectedMessage = data;
  }

  onRowUnselect({ data }: any) {
    this.selectedMessage = undefined;
  }

  /*{
  "op": "subscribe",
  "args": [
    {
      "channel": "tickers",
      "instId": "BTC-USDT"
    }
  ]
} */
  onMouseEnter(): void {
    console.log('OnMouseEnter');
  }

  subscribe() {
    try {
      //changes when  new connection handle that
      // console.log('Subscriptiion', this.wsSubscription);
      // if(this.wsSubscription == undefined){
      this.wsSubscription = this.connectionService
        .subscribeToChannels(this.inputText)
        .subscribe((response) => {
          this.unlockedMessages.push({
            event: response.type,
            message: response.data,
            length: response.data.length,
            time: new Date(),
          });
          console.log(response);
        });
      // }
    } catch (err: any) {
      throw new Error(err);
    }
  }

  unsubscribe() {
    this.connectionService.unsubscribeToChannels(this.inputText);
  }
}
