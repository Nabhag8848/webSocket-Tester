import { Component } from '@angular/core';
import { Notification } from '@web-socket-tester/api-interfaces';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'web-socket-tester-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  providers: [MessageService],
})
export class MessagesComponent {
  pushMessage!: Notification;
  selectedMessage: Notification | undefined;
  lockedMessages: Notification[] = [];
  unlockedMessages: Notification[] = [
    {
      message: `{
        "fee": 78.05799225,
        "feeRate": 0.0014,
        "future": "BTC-PERP",
        "id": 7828307,
        "liquidity": "taker",
        "market": "BTC-PERP",
        "orderId": 38065410,
        "tradeId": 19129310,
        "price": 3723.75,
        "side": "buy",
        "size": 14.973,
        "time": "2019-05-07T16:40:58.358438+00:00",
        "type": "order"
      }`,
      length: 70,
      time: new Date(),
    },
    {
      message: `{
        "fee": 78.05799225,
        "feeRate": 0.0014,
        "future": "BTC-PERP",
        "id": 7828307,
        "liquidity": "taker",
        "market": "BTC-PERP",
        "orderId": 38065410,
        "tradeId": 19129310,
        "price": 3723.75,
        "side": "buy",
        "size": 14.973,
        "time": "2019-05-07T16:40:58.358438+00:00",
        "type": "order"
      }`,
      length: 70,
      time: new Date(),
    },
    {
      message: `{
        "fee": 78.05799225,
        "feeRate": 0.0014,
        "future": "BTC-PERP",
        "id": 7828307,
        "liquidity": "taker",
        "market": "BTC-PERP",
        "orderId": 38065410,
        "tradeId": 19129310,
        "price": 3723.75,
        "side": "buy",
        "size": 14.973,
        "time": "2019-05-07T16:40:58.358438+00:00",
        "type": "order"
      }`,
      length: 70,
      time: new Date(),
    },
    {
      message: `{
        "fee": 78.05799225,
        "feeRate": 0.0014,
        "future": "BTC-PERP",
        "id": 7828307,
        "liquidity": "taker",
        "market": "BTC-PERP",
        "orderId": 38065410,
        "tradeId": 19129310,
        "price": 3723.75,
        "side": "buy",
        "size": 14.973,
        "time": "2019-05-07T16:40:58.358438+00:00",
        "type": "order"
      }`,
      length: 70,
      time: new Date(),
    },
    {
      message: `{
        "fee": 78.05799225,
        "feeRate": 0.0014,
        "future": "BTC-PERP",
        "id": 7828307,
        "liquidity": "taker",
        "market": "BTC-PERP",
        "orderId": 38065410,
        "tradeId": 19129310,
        "price": 3723.75,
        "side": "buy",
        "size": 14.973,
        "time": "2019-05-07T16:40:58.358438+00:00",
        "type": "order"
      }`,
      length: 70,
      time: new Date(),
    },
    {
      message: `{
        "fee": 78.05799225,
        "feeRate": 0.0014,
        "future": "BTC-PERP",
        "id": 7828307,
        "liquidity": "taker",
        "market": "BTC-PERP",
        "orderId": 38065410,
        "tradeId": 19129310,
        "price": 3723.75,
        "side": "buy",
        "size": 14.973,
        "time": "2019-05-07T16:40:58.358438+00:00",
        "type": "order"
      }`,
      length: 70,
      time: new Date(),
    },
    {
      message: `{
        "fee": 78.05799225,
        "feeRate": 0.0014,
        "future": "BTC-PERP",
        "id": 7828307,
        "liquidity": "taker",
        "market": "BTC-PERP",
        "orderId": 38065410,
        "tradeId": 19129310,
        "price": 3723.75,
        "side": "buy",
        "size": 14.973,
        "time": "2019-05-07T16:40:58.358438+00:00",
        "type": "order"
      }`,
      length: 70,
      time: new Date(),
    },
    {
      message: `{
        "fee": 78.05799225,
        "feeRate": 0.0014,
        "future": "BTC-PERP",
        "id": 7828307,
        "liquidity": "taker",
        "market": "BTC-PERP",
        "orderId": 38065410,
        "tradeId": 19129310,
        "price": 3723.75,
        "side": "buy",
        "size": 14.973,
        "time": "2019-05-07T16:40:58.358438+00:00",
        "type": "order"
      }`,
      length: 70,
      time: new Date(),
    },
    {
      message: `{
        "fee": 78.05799225,
        "feeRate": 0.0014,
        "future": "BTC-PERP",
        "id": 7828307,
        "liquidity": "taker",
        "market": "BTC-PERP",
        "orderId": 38065410,
        "tradeId": 19129310,
        "price": 3723.75,
        "side": "buy",
        "size": 14.973,
        "time": "2019-05-07T16:40:58.358438+00:00",
        "type": "order"
      }`,
      length: 70,
      time: new Date(),
    },
    {
      message: `{
        "fee": 78.05799225,
        "feeRate": 0.0014,
        "future": "BTC-PERP",
        "id": 7828307,
        "liquidity": "taker",
        "market": "BTC-PERP",
        "orderId": 38065410,
        "tradeId": 19129310,
        "price": 3723.75,
        "side": "buy",
        "size": 14.973,
        "time": "2019-05-07T16:40:58.358438+00:00",
        "type": "order"
      }`,
      length: 70,
      time: new Date(),
    },
  ];

  constructor(private messageService: MessageService) {}

  toggleLock(data: Notification, frozen: boolean, index: number) {
    if (frozen) {
      this.lockedMessages = this.lockedMessages.filter((c, i) => i !== index);
      this.unlockedMessages.push(data);
    } else {
      this.unlockedMessages = this.unlockedMessages.filter(
        (c, i) => i !== index
      );
      this.lockedMessages.push(data);
    }

    console.log(this.selectedMessage);
  }
}
