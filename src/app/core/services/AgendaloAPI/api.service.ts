import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  // URL
  private agendaloApiUrl = 'http://localhost:3000/api/agendalo';
  constructor(private http: HttpClient) {}

  // get example
  getData(): Observable<any> {
    return this.http.get(`${this.agendaloApiUrl}/getData`);
  }

  // post example
  postData(user: User): Observable<any> {
    return this.http.post(`${this.agendaloApiUrl}/user/create`, user);
  }
}
