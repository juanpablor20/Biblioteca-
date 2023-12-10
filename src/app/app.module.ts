import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '../screens/auth/auth.module';
import { UnauthModule } from '../screens/un-auth/un-auth.module';
import { HeaderComponent } from '../components/header/header.component';
import { HistorialComponent } from '../screens/auth/historial/historial.component';
import { HomeComponent } from '../screens/auth/home/home.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule, UnauthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }




