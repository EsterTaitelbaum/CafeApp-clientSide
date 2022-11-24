import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any=[];

  @Output()
  onChooseCategory:EventEmitter<number>=new EventEmitter<number>();

getCategories(){
  this._productsService.getCategoriesForServer().subscribe(data=>{
    this.categories=data;
    console.log(data)
  })
}
clickOnCategory(categoryId:number){
  alert(categoryId);
  this.onChooseCategory.emit();
}
  constructor(private _productsService:ProductsService) { }

  ngOnInit(): void {
    this.getCategories()
  }

}
