import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HistorialService } from './historial.service';
import { Subject, takeUntil } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../../../components/header/header.component';
import { HistorialInterface } from './history.interfaces';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HeaderComponent
  ],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css',

})
export class HistorialComponent implements OnInit, OnDestroy {
  historialPrestamos: HistorialInterface[] = [];
  destroy$: Subject<void> = new Subject();

  constructor(private historialService: HistorialService) { }

  ngOnInit(): void {
    this.historialService.obtenerPrestamosConEquipos()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: ({ prestamos }) => {
          console.log(prestamos);
          this.historialPrestamos = prestamos;
        },
        error: (e) => console.error(e)
      }
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}