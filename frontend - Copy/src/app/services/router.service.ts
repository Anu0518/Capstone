import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private httpClient : HttpClient) { }
  Userlogin(user:User):Observable<boolean>{
    console.log("from router Service",user);
    return this.httpClient.post<boolean>(`http://localhost:8080/user/login`,user);
  }
}
