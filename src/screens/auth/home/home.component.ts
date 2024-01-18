import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Inicializamos el formulario en el método ngOnInit
    this.initializeForm();
  }

  // Método para inicializar el formulario
  initializeForm() {
    this.myForm = this.fb.group({
      numeroDocumento: ['', Validators.required],
      numeroSerie: ['', Validators.required],
      tipoTransaccion: ['', Validators.required]
    });
  }

  // Getter para acceder a los controles del formulario de manera más limpia
  get formControls() {
    return this.myForm.controls;
  }

  // Método para manejar el envío del formulario
  submitForm() {
    if (this.myForm.valid) {
      // Aquí puedes manejar la lógica de envío del formulario
      console.log('Formulario enviado con los siguientes datos:', this.myForm.value);
    } else {
      // Marcar los campos como tocados para mostrar los mensajes de error si es inválido
      this.markFormAsTouched(this.myForm);
    }
  }

  // Método para marcar todos los campos como tocados
  markFormAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.markFormAsTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }

}
