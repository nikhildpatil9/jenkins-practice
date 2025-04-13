import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: HttpClient) { }
  hitPostAPI(): Observable<any> {
    return this.http.post('http://localhost:4200/api', {"ssss": "dsdssssssssss" })
  }
}
