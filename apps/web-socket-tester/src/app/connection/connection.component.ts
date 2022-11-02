import { Component, OnDestroy } from '@angular/core';
import { PushMessage } from '@web-socket-tester/api-interfaces';
import { ConnectionService } from '../services/connection.service';
import { unzip } from 'fflate';
@Component({
  selector: 'web-socket-tester-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss'],
})
export class ConnectionComponent implements OnDestroy {
  allowedTypes: PushMessage[];
  selectedType!: string;
  inputUrl!: string;
  isConnecting!: boolean;
  isConnected!: boolean;
  socket: WebSocket | undefined;

  constructor(private connectionService: ConnectionService) {
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

  async connect(): Promise<boolean> {
    this.isConnecting = true;
    console.log('TYpeOf', this.selectedType);
    this.socket = await this.connectionService.connect({
      inputUrl: this.inputUrl,
      type: this.selectedType,
    });

    setTimeout(() => {
      this.isConnecting = false;

      if (this.socket == undefined) {
        return;
      }
      if (this.socket.readyState === 1) {
        // make user aware its connected
      } else if (this.socket.readyState === 2) {
        // make user aware its closing state
      } else if (this.socket.readyState === 3) {
        // make user aware its closed
      }
    }, 2000);

    return true;
  }

  ngOnDestroy(): void {
    this.socket?.close();
  }
}
