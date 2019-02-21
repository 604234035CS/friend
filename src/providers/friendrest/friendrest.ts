import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Friend } from '../../models/friendmodel';


@Injectable()
export class FriendrestProvider {

  private url:string="https://raw.githubusercontent.com/604234035CS/myfriend/master/resume.json"

  constructor(public http: HttpClient) {
    console.log('Hello FriendrestProvider Provider');
  }
  getfriendlist():Observable<any>{
    return this.http.get<Friend>(this.url);
  }
  getFriend(studentid:string):Observable<any>{
    return this.http.get<Friend>(this.url);

  }

}
