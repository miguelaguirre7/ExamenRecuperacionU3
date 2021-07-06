// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// Modulos
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ListContactsComponent } from './components/schedule/lista-de-contactos/list-contacts.component';
import { AddContactComponent } from './components/schedule/añadir-contacto/add-contact.component';

// Pipes
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    ListContactsComponent,
    AddContactComponent,
    CapitalizePipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
