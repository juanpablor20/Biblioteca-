import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../screens/auth/home/home.component';
import { DevolucionesComponent } from '../screens/auth/devoluciones/devoluciones.component';





const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'devoluciones', component: DevolucionesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
