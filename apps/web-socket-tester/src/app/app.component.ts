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
        label: '𝘄𝗲𝗯𝗦𝗼𝗰𝗸𝗲𝘁𝗧𝗲𝘀𝘁𝗲𝗿',
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
