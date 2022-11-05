import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClienteDetailsComponent } from './components/cliente-details/cliente-details.component';

import { AddProveedorComponent } from './components/add-proveedor/add-proveedor.component';
import { ProveedsListComponent } from './components/proveeds-list/proveeds-list.component';
import { ProveedorDetailsComponent } from './components/proveedor-details/proveedor-details.component';


import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';


const routes: Routes = [

  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'clientes', component: ClientsListComponent },
  { path: 'empleados', component: TutorialsListComponent },
  { path: 'proveedores', component: ProveedsListComponent },
  { path: 'clients/:id', component: ClienteDetailsComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'proveeds/:id', component: ProveedorDetailsComponent },
  { path: 'addempleado', component: AddTutorialComponent },
  { path: 'addcliente', component: AddClienteComponent },
  { path: 'addproveedor', component: AddProveedorComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }