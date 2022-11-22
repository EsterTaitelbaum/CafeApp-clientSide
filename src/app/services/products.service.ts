import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import {}from '../models/'



const mock_items = [
  {id: 1, name: 'Adidas Stan Smith', price: 90.0, category: 'Shoes', description: ''},
  {id: 2, name: 'Nike Air Max', price: 110.0, category: 'Shoes', description: ''},
  {id: 3, name: 'Reebok Sweat Shirt', price: 45.0, category: 'Clothes', description: ''},
  {id: 4, name: 'Puma T-Shirt', price: 30.0, category: 'Clothes', description: ''},
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getItems(): Observable<any> {
    return this._http.get<any>("/api/Products");
  }
  getCategoriesForServer(): Observable<any>{
    return this._http.get<any>("/api/Category");

  }
  getItem(id:number): Observable<any>{
    return of(mock_items[id+1]);
  }
  constructor(private _http: HttpClient) { }
}
