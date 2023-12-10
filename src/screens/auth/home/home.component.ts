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
export class HomeComponent implements OnInit {
  prestamoForm!: FormGroup;
  miFormulario!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.prestamoForm = this.fb.group({
      cantidad: ['', Validators.required],
      computadoras: this.fb.array([]),

    });
  }

  get compArray() {
    return this.prestamoForm.controls["computadoras"] as FormArray;
  }

  onChangeOpcion() {
    const cantidad = this.miFormulario.get('cantidad')?.value || 0;
    const computadorasFormArray = this.fb.array([]);

    for (let i = 0; i < cantidad; i++) {
      computadorasFormArray.push(this.fb.control('', Validators.required));
    }
    this.miFormulario.setControl('computadoras', computadorasFormArray);
  }

  onSubmit() {
    console.log(this.prestamoForm.value);
  }
}
