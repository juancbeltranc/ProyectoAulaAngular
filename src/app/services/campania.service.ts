import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Campania } from '../models/campania';
const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class CampaniaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Campania[]> {
    return this.http.get<Campania[]>(`${baseUrl}/Campania`);
  }

  get(id: any): Observable<Campania> {
    return this.http.get(`${baseUrl}/Campanias/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/Campanias`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/Campanias/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/Campanias/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${baseUrl}/CampaniasList`);
  }
}
