import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'web-socket-tester-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  // https://onlinetexttools.com/extract-regex-matches-from-text
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];
  logo: MenuItem[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'ππ²π―π¦πΌπ°πΈπ²ππ§π²πππ²πΏ',
        items: [],
      },
      {
        label: 'File',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [{ label: 'Project' }, { label: 'Other' }],
          },
          { label: 'Open' },
          { label: 'Quit' },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
        ],
      },
    ];
  }
}
