import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { DevolucionesComponent } from './devoluciones/devoluciones.component';
import { HistorialComponent } from './historial/historial.component';
import { HttpClientModule } from '@angular/common/http';
import { EquiposComponent } from './equipos/equipos.component';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild([
      { path: 'home', component: HomeComponent, canActivate: [authGuard] },
      { path: 'devoluciones', component: DevolucionesComponent, canActivate: [authGuard] },
      { path: 'historial', component: HistorialComponent, canActivate: [authGuard] },
      { path: 'equipos', component:EquiposComponent, canActivate:[authGuard] }
    ]),
  ],
})
export class AuthModule { }
