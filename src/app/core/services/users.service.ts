import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/app.api';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService {

  urlService(){
    return 'users'
  }

  getUsers(page:number, name:string, type?, limit?:number): Observable<any> {
    let filter = new HttpParams().set('limit', `${limit ? limit: 10}`)
                                 .set('page', `${page}`)
                                 .set('userType', `${type}`)
                                 .set('name', `${name}`)
    return this.http.get(`${API}/${this.urlService()}`, {params: filter})
  }

  blockDesblockBuyer(id:number, body): Observable<any>{
    return this.http.patch(`${API}/${this.urlService()}/${id}/buyer-profile`, body)
  }

  blockDesblockProducer(id:number, body): Observable<any>{
    return this.http.patch(`${API}/${this.urlService()}/${id}/producer-profile`, body)
  }

}
