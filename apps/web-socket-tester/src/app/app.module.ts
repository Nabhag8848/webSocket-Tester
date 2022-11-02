import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';

// Components
import { MessagesComponent } from './messages/messages.component';
import { ConnectionComponent } from './connection/connection.component';

// Directives
import { ValidationDirective } from './shared/validation.directive';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    MessagesComponent,
    ConnectionComponent,
    ValidationDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    MenubarModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    BrowserAnimationsModule,
    InputTextareaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
