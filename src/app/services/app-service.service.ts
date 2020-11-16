import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  // private url = '../../mock/transactions.json';
  testData: any;

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get('../../../mock/transactions.json');
  }

  // postData(data): Observable<any>{
  //   this.testData = data;
  //   return data;
  // }

  // test(): Observable<any>{
  //   return this.testData;
  // }

}
