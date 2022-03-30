import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends BaseService {

  urlService(){
    return 'news'
  }

}
