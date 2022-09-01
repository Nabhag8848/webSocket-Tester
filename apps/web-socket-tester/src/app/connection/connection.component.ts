import { Component } from '@angular/core';
import { PushMessage } from '@web-socket-tester/api-interfaces';

@Component({
  selector: 'web-socket-tester-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss'],
})
export class ConnectionComponent {
  allowedTypes: PushMessage[];
  selectedType!: string;
  inputUrl!: string;
  isConnecting!: boolean;

  constructor() {
    this.selectedType = 'def';
    this.allowedTypes = [
      {
        type: 'default',
        code: 'def',
      },
      {
        type: 'gzip',
        code: 'gzip',
      },
    ];
  }

  connect(): boolean {
    this.isConnecting = true;
    console.log(this.inputUrl);
    console.log(this.isConnecting);

    setTimeout(() => {
      this.isConnecting = false;
      console.log(this.isConnecting);
    }, 1000);

    return true;
  }
}
