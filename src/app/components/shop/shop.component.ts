import { Component, OnInit } from '@angular/core';
import {ProductsService}from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  AllItems:any = [];
  ItemsToShow:any=[];
  message:number;
  filterByCategory(categoryId:number){
    this.getItems(categoryId);
  }
  getItems(categoryId:number): void {
    this._productsService.getProductsFromServer()
      .subscribe(data => {
        this.AllItems=data;
        //this.ItemsToShow=this.AllItems;
        console.log(this.AllItems);
    this.ItemsToShow=[];
    //this.router.navigated = false;
    this.ItemsToShow=this.AllItems.filter((prod:any)=>{
      return prod.categoryId==categoryId;
    })
    console.log("ItemsToShow",this.ItemsToShow);

      });
  }

  constructor(private _productsService:ProductsService,private router:Router) { }

  ngOnInit(): void {
    
    this._productsService.productByCategoryObs.subscribe(
        
          products=>{this.ItemsToShow=products;}
      
      );}

}
