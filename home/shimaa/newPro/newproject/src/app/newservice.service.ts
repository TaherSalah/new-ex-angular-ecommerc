import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor(private _HttpClient: HttpClient) { }

getNews():Observable <any>{
  return this._HttpClient.get(`https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=abc5eac0e6f54b518bc67229305a5cdc`)
}
};


