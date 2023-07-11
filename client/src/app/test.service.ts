// define functions for components
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Test {
  constructor(private http: HttpClient) { }
  executeTestService() {
    return this.http.get(
        'http://localhost:3000/test');
}
}
