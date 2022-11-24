import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }
  goToAbout(){
    this.router.navigate(['/about']);
    window.scrollTo(0, 0);

  }
  goToSendRequest(){
    this.router.navigate(['/request']);
    window.scrollTo(0, 0);
  }
  goToShop(){
    this.router.navigate(['/shop']);
  }
  goToSendHome(){
    this.router.navigate(['/home']);
    window.scrollTo(0, 0);
  }
  goToSendLogin(){
    this.router.navigate(['/login']);

  }
  goToCategories(){
    this.router.navigate(['/categories']);

  }
  ngOnInit(): void {
  }

}
