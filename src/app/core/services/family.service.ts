import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/app.api';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class FamilyService extends BaseService {

  urlService(){
    return 'familia'
  }

  public findById(id: any): Observable<any> {
    return this.http.get(`${API}/familia/${id}`);
  }

  public findFamilia(url:string, filter?: any): Observable<any> {
    return this.http.get(`${API}/familia`, { params: filter });
  }

  public findASC(): Observable<any> {
    return this.http.get(`${API}/usuario`);
  }
}