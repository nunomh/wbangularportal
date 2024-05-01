import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Test } from '../interfaces/test';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  constructor(private http: HttpClient) { }

  async getItems(url: string) {
    let response;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    });
    await this.http.get(url, {headers}).toPromise().then(async (data: any) => {
      console.log(data)
      response = data;
    }).catch((err: HttpErrorResponse) => {
      console.log(err)
      response = err;
    });
    return response;
  }

  getApiTest(): Observable<Test>{
    return this.http.get<Test>(`${environment.API_SERVER_URL}/api/test`);
  }
}
