import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IType } from '../app/type/IType';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private _url : string = 'http://localhost:8080/types/'; 
  constructor( private http: HttpClient ) { }

  getTypes() : Observable<IType[]>{
    return this.http.get<IType[]>(this._url);
  }
}
