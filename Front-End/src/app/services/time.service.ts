import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';

const baseUrl = 'http://localhost:8080/api/times';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getAllByProject(teamName:any): Observable<any> {
    return this.http.get(`${baseUrl}/${teamName}`);
  }

  getAllByDate(date: any): Observable<any> {
    return this.http.get(`${baseUrl}/date/${date}`)
  }

  get(id:any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id:any, data:any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id:any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByUID(userID:any): Observable<any> {
    return this.http.get(`${baseUrl}?userID=${userID}`);
  }
}