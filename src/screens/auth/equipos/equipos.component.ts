import { EquiposService } from './equipos.service';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquiposInterface } from './equipos.interfaces';
import { Subject, takeUntil } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    HeaderComponent
  ],
  templateUrl: './equipos.component.html',
  styleUrl: './equipos.component.css'
})
export class EquiposComponent implements OnInit, OnDestroy {
  
equiposEquipos: EquiposInterface[] = [];
destroy$: Subject<void> = new Subject();

constructor(private equiposService: EquiposService) { }

ngOnInit(): void {
  this.equiposService.getAllEquipo()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (equipos) => {
        console.log(equipos);
        
        this.equiposEquipos = equipos;
      },
      error: (e) => console.error(e)
    }
    );
}

ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}
getEstadoClass(estado?: string): string {
  const clase = estado ? estado.toLowerCase() : '';
  switch (clase) {
    case 'disponible':
      return 'bg-green-100 text-green-800';
    case 'reparacion':
      return 'bg-red-100 text-red-800';
    case 'prestamo':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-blue-100 text-blue-800';
  }
}


}