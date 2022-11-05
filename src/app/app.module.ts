import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { ClienteDetailsComponent } from './components/cliente-details/cliente-details.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';

import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

import { AddProveedorComponent } from './components/add-proveedor/add-proveedor.component';
import { ProveedorDetailsComponent } from './components/proveedor-details/proveedor-details.component';
import { ProveedsListComponent } from './components/proveeds-list/proveeds-list.component';


@NgModule({
  declarations: [
    AppComponent,

    AddTutorialComponent,
    AddClienteComponent,
    TutorialDetailsComponent,
    
    ClienteDetailsComponent,
    TutorialsListComponent,
    ClientsListComponent,
 
    AddProveedorComponent,
    ProveedorDetailsComponent,
    ProveedsListComponent,

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
