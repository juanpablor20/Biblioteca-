// historial.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EquiposInterface, ResponseEquiposInterface } from './equipos.interfaces';

@Injectable({
  providedIn: 'root',
})

export class EquiposService {
  
  private baseUrl = 'http://localhost:3000/equipos';

  constructor(private http: HttpClient) {}
  getAllEquipo(): Observable<EquiposInterface[]> {
    const url = `${this.baseUrl}/equipos`;
    return this.http.get<EquiposInterface[]>(url);
  }
}