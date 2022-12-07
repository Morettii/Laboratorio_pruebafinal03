import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EgresosComponent } from './egresos/egresos.component';
import { VerUsuariosComponent } from './ver-usuarios/ver-usuarios.component';
import { VerEgresosComponent } from './ver-egresos/ver-egresos.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    EgresosComponent,
    VerUsuariosComponent,
    VerEgresosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
