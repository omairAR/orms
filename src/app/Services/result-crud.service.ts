import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ResultCrudService {

  //uri = 'http://localhost:3856';
  uri = 'https://orms-backend.herokuapp.com'

  constructor( private http: HttpClient) { }

  getResult() {
    return this.http.get(`${this.uri}/test`);
  }

  /*getResultById(id) {
    return this.http.get(`${this.uri}/test/${id}`);
  }*/

  getResultByRoll(rollno, courseSem){
    return this.http.get(`${this.uri}/${courseSem}/${rollno}`)
  }

  addResult(semester,rollno, name,e1,e2,e3,e4,e5,e6,e7,s1,s2,s3,s4,s5,s6,s7,g1,g2,g3,g4,g5,g6,g7,gp1,gp2,gp3,gp4,gp5,gp6,gp7,ce1,ce2,ce3,ce4,ce5,ce6,ce7,pe1,pe2,pe3,pe4,pe5,pe6,pe7,cgpa,result) {
    const results = {
      rollno: rollno,
      name: name,
      e1: e1,
      e2: e2,
      e3: e3,
      e4: e4,
      e5: e5,
      e6: e6,
      e7: e7,
      s1: s1,
      s2: s2,
      s3: s3,
      s4: s4,
      s5: s5,
      s6: s6,
      s7: s7,
      
      g1: g1,
      g2: g2,
      g3: g3,
      g4: g4,
      g5: g5,
      g6: g6,
      g7: g7,
      gp1: gp1,
      gp2: gp2,
      gp3: gp3,
      gp4: gp4,
      gp5: gp5,
      gp6: gp6,
      gp7: gp7,

      ce1: ce1,
      ce2: ce2,
      ce3: ce3,
      ce4: ce4,
      ce5: ce5,
      ce6: ce6,
      ce7: ce7,
      pe1: pe1,
      pe2: pe2,
      pe3: pe3,
      pe4: pe4,
      pe5: pe5,
      pe6: pe6,
      pe7: pe7,

      cgpa: cgpa,
      result: result
      
    };
    return this.http.post(`${this.uri}/${semester}/create`, results);
  }




  updateResult(id, rollno, name) {
    const sample = {
      rollno: rollno,
      name: name
    };
    return this.http.post(`${this.uri}/test/update/${id}`, sample);
  }

  deleteResult(id) {
    return this.http.get(`${this.uri}/test/delete/${id}`);
  }
}
