import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  uri = 'https://orms-backend.herokuapp.com/'
  
  private _eventsUrl = this.uri+"admin/events";
  private _specialEventsUrl = this.uri+"admin/special";

  private _getAdminsUrl=this.uri+"admin/";

  private _deleteAdminUrl=this.uri+"admin/delete"
  

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>(this._eventsUrl)
  }

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl)
  }

  getAdmins(){
    return this.http.get<any>(this._getAdminsUrl);
  }

  deleteAdmin(id){
    
    return this.http.get<any>(this._deleteAdminUrl+"/"+id);
  }
}
