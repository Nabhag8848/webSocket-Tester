import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-socket-tester-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss'],
})
export class ConnectionComponent {
  inputUrl!: string;
  isConnecting!: boolean;

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
