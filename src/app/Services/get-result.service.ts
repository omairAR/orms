import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetResultService {

  constructor(private http: HttpClient) { }

  //uri = 'http://localhost:3000';
  uri = 'https://orms-backend.herokuapp.com/'

  getResults() {
    return this.http.get(`${this.uri}/issues`);
  }

  getResultById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

}
