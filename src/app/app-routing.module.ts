import { ListContactsComponent } from './components/schedule/lista-de-contactos/list-contacts.component';
import { AddContactComponent } from './components/schedule/añadir-contacto/add-contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'add-contact', component: AddContactComponent},
  {path: 'list-contacts', component: ListContactsComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'list-contacts'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
