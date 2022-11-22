import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any=[];
getCategories(){
  this._productsService.getCategoriesForServer().subscribe(data=>{
    this.categories=data;
    console.log(data)
  })
}
  constructor(private _productsService:ProductsService) { }

  ngOnInit(): void {
    this.getCategories()
  }

}
