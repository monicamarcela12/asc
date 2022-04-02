import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/app.api';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends BaseService {

  urlService(){
    return 'messagem'
  }

  public findById(id: any): Observable<any> {
    return this.http.get(`${API}/messagem/${id}`);
  }

  public findMessage(url:string, filter?: any): Observable<any> {
    return this.http.get(`${API}/messagem`, { params: filter });
  }
}