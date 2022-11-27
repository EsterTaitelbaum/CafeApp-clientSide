import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


//const PRODUCTS= []


@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private productByCategory=new BehaviorSubject<any[]>([]);
  productByCategoryObs=this.productByCategory.asObservable();
  PRODUCTS:any[]=[];
  
  getProductByCategory(categoryId:number){
    this.productByCategory.next(this.filterProductsByCategory(categoryId));
  }
  getProductsFromServer(): Observable<any> {
    return this._http.get<any>("/api/Products");
  }
  getCategoriesForServer(): Observable<any>{
    return this._http.get<any>("/api/Category");

  }
  filterProductsByCategory(categoryId:number){
    if (this.PRODUCTS.length==0 ||this.PRODUCTS== undefined)
    {
      this.getProductsFromServer().subscribe(data => {
        this.PRODUCTS=data;
      })
    }
    let productsByCategory=this.PRODUCTS.filter((prod:any)=>{
      return prod.categoryId==categoryId;
    }
    )
    return productsByCategory;
  }

  constructor(private _http: HttpClient) {
    this.getProductsFromServer().subscribe(data => {
      this.PRODUCTS=data;
    })
   }
}
