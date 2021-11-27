import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
const baseUrl = 'http://localhost:8080/api/tutorials';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}/User`);
  }

  get(id: any): Observable<User> {
    return this.http.get(`${baseUrl}/Users/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/User`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/Users/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/Users/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${baseUrl}/UsersList`);
  }

  // findByTitle(title: any): Observable<User[]> {
  //   return this.http.get<User[]>(`${baseUrl}?title=${title}`);
  // }
}
