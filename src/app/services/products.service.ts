import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


//const PRODUCTS= []


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private sourceMessage=new BehaviorSubject<number>(0);
  currentMessage=this.sourceMessage.asObservable();
  PRODUCTS:[];

  changeMessage(message:number){
    this.sourceMessage.next(message)
  }

  getProductsFromServer(): Observable<any> {
    return this._http.get<any>("/api/Products");
  }
  getCategoriesForServer(): Observable<any>{
    return this._http.get<any>("/api/Category");

  }
  getProductsByCategory(categoryId:number){
    if (this.PRODUCTS.length=0)
    {
      this.getProductsFromServer().subscribe(data => {
        this.PRODUCTS=data;
      })
    }
    let productsByCategory=this.PRODUCTS.filter((prod:any)=>{
      return prod.categoryId==categoryId;
    })
    return productsByCategory;
  }
  getProductsFromLocaly(): Observable<any>{
    if (this.PRODUCTS.length=0)
    {
      this.getProductsFromServer().subscribe(data => {
        this.PRODUCTS=data;
      })
    }
    return of(this.PRODUCTS);
    
  }
  constructor(private _http: HttpClient) {
    alert("service constructor")
    this.getProductsFromServer().subscribe(data => {
      this.PRODUCTS=data;
    })

   }
}
