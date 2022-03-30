import { API } from '../../app.api';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesComponentService extends BaseService {

  urlService(){
    return 'products'
  }

  deleteImage(id_product: number, id_image:number): Observable<any>{
    return this.http.delete(`${API}/products/${id_product}/images/${id_image}`)
  }
}
