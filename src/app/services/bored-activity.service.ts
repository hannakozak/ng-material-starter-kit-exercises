import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BoredActivityModel } from '../models/bored-activity.model';

@Injectable()
export class BoredActivityService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(): Observable<BoredActivityModel> {
    return this._httpClient.get<BoredActivityModel>('https://www.boredapi.com/api/activity/');
  }
}
