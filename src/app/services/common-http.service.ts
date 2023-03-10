import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  constructor(private http:HttpClient) { }

  getHttp(url:string):Observable<any>{
    return this.http.get(url);
  }
  postHttp(url:string, payload:any):Observable<any>{
    return this.http.post(url,payload);
  }
  deleteHttp(url:string):Observable<any>{
    return this.http.delete(url);
  }
  putHttp(url:string, payload:any):Observable<any>{
    return this.http.put(url,payload);
  }
}
