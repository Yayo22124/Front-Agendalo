import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class APIService {
  // URL
  private agendaloApiUrl = "http://agendalo";
  constructor(
    private http: HttpClient
  ) {}

  // get example
  getData(): Observable<any>{
    return this.http.get(`${this.agendaloApiUrl}/getData`);
  }

  // post example
  postData(data: any): Observable<any>{
    return this.http.post(`${this.agendaloApiUrl}/postData`, data);
  }
}
