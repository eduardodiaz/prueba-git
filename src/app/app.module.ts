import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { PresupuestosService } from './servicios/presupuestos.service';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autentificacion/registro/registro.component';
import { AutentificacionService } from './servicios/autentificacion.service';
import { InisesComponent } from './autentificacion/inises/inises.component';
import { GuardService } from './servicios/guard.service'; 

/*/modulo adicional a la aplicacion
import { FacturasModule } from './facturas/facturas.module';
import { FacturasComponent } from './facturas/facturas/facturas/facturas.component';


/* se crean las secciones del sitio */ 
const routes: Routes = [
  { path: '', component: InicioComponent }, 
  { path: 'proveedores', component: ProveedoresComponent, 
    canActivate: [GuardService] }, //´para proteger las rutas
  { path: 'addprovee', component: AddproveeComponent, 
    canActivate: [GuardService] }, 
  { path: 'addpres', component: AddpresComponent,
    canActivate: [GuardService] },
  { path: 'presupuestos', component: PresupuestosComponent,
    canActivate: [GuardService] },
  { path: 'editpres/:id', component: EditpresComponent,
    canActivate: [GuardService] },
  { path: 'registro', component:  RegistroComponent },
  { path: 'inises', component:  InisesComponent },
  //{ path: 'facturas', component: FacturasComponent },
  { path: '**', component: InicioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    //FacturasModule //se agrega el nuevo modulo en imports
  ],
  providers: [ProveedoresService, 
              PresupuestosService, 
              AutentificacionService,
              GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
