// historial.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseHistorialInterface } from './history.interfaces';

@Injectable({
  providedIn: 'root',
})

export class HistorialService {
  
  private baseUrl = 'http://localhost:3000/prestamos';

  constructor(private http: HttpClient) {}
  obtenerPrestamosConEquipos(): Observable<ResponseHistorialInterface> {
    interface Cliente {
      nombre: String;
      cif: String;
      direccion: String;
      creado: Date;
    }
    const url = `${this.baseUrl}/historial`;
    return this.http.get<ResponseHistorialInterface>(url);
  }
}