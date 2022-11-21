import { Component, OnInit } from '@angular/core';
import {ProductsService}from '../../services/products.service'
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  items:any = [];

  getItems(): void {
    this._ProductsService.getItems()
      .subscribe(data => {
        this.items=data;
        console.log(data);
      });
  }

  constructor(private _ProductsService:ProductsService) { }

  ngOnInit(): void {
    this.getItems();

  }

}
