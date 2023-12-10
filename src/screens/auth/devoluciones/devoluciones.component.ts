import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-devoluciones',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent
  ],
  templateUrl: './devoluciones.component.html',
  styleUrl: './devoluciones.component.css'
})
export class DevolucionesComponent {

}
