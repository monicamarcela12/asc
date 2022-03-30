import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/app.api';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class TextsService extends BaseService {

  urlService(){
    return 'texts'
  }

  getTermsOfUse(): Observable<any>{
    return this.http.get(`${API}/${this.urlService()}/use-terms`)
  }

  putTermsOfUse(body): Observable<any>{
    return this.http.put(`${API}/${this.urlService()}/use-terms`, body)
  }

  getPrivacyPolicy(): Observable<any>{
    return this.http.get(`${API}/${this.urlService()}/privacy-policies`)
  }

  putPrivacyPolicy(body): Observable<any>{
    return this.http.put(`${API}/${this.urlService()}/privacy-policies`, body)
  }
}
