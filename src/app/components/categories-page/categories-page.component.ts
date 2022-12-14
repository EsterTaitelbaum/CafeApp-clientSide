import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {
  categories:any=[];
  message:number;
  @Output()
  onChooseCategory:EventEmitter<string>=new EventEmitter<string>();

  getCategories(){
    this._productsService.getCategoriesForServer().subscribe(data=>{
      this.categories=data;
      //console.log(data)
    })
  }
  goToProducts(categoryId:number){
    this._productsService.getProductByCategory(categoryId);
    this.router.navigate(['/shop']);
  }


  constructor(private _productsService:ProductsService,private router:Router) { }

  ngOnInit(): void {
    this.getCategories()
  }

}
