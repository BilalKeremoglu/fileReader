import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from 'src/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl='/api/config';
  
  constructor(private _http:HttpClient) { }

  getData(){
    return this._http.get<Data[]>(this.apiUrl);
  }
}
