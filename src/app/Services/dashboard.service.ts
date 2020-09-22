import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  uri = 'https://orms-backend.herokuapp.com/'

  private _resultcountUrl = this.uri+"dash/countresults";
  private _passedcountUrl = this.uri+"dash/countpassed";
  private _failedcountUrl = this.uri+"dash/countfailed";

  private _updateresultcountUrl = this.uri+"dash/updatecountresults/";
  private _updatepassedcountUrl = this.uri+"dash/updatecountpassed/";
  private _updatefailedcountUrl = this.uri+"dash/updatecountfailed/";
  private _resetResultCountUrl= this.uri+"dash/resetresults/";
  private _resetPassedCountUrl= this.uri+"dash/resetpassed/";
  private _resetFailedCountUrl= this.uri+"dash/resetfailed/";

  getresultCount() {
    return this.http.get<any>(this._resultcountUrl)
  }

  getpassedCount() {
    return this.http.get<any>(this._passedcountUrl)
  }

  getfailedCount() {
    return this.http.get<any>(this._failedcountUrl)
  }
//////////////////////////////////////  UPDATE ?????????????????????????????????????????????
  updateresultCount(id,cnt) {
    const inc = {
      count: cnt
    }
    return this.http.post<any>(this._updateresultcountUrl+id,inc);
  }

  updatepassedCount(id,cnt) {
    const inc = {
      count: cnt
    }
    return this.http.post<any>(this._updatepassedcountUrl+id,inc);
  }

  updatefailedCount(id,cnt) {
    const inc = {
      count: cnt
    }
    return this.http.post<any>(this._updatefailedcountUrl+id,inc);
  }

  //////////////////////////////////////  RESET ?????????????????????????????????????????????

  resultCreset(id){
    return this.http.get<any>(this._resetResultCountUrl+id);
  }

  passedCreset(id){
    return this.http.get<any>(this._resetPassedCountUrl+id);
  }

  failedCreset(id){
    return this.http.get<any>(this._resetFailedCountUrl+id);
  }
  
}
