import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  constructor(private http: HttpClient) { }

  async getItems(url: string) {
    let response;
    await this.http.get(url).toPromise().then((data: any) => {
      console.log(data)
      response = data;
    }).catch((err: HttpErrorResponse) => {
      console.log(err)
    });
  }
}
