import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from '../general.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup = new FormGroup({
    "password":new FormControl(""),
    "email":new FormControl(""),
  });
  signUpForm: FormGroup = new FormGroup({
    "password":new FormControl(""),
    "email":new FormControl(""),
    "firstName":new FormControl(""),
    "lastName":new FormControl(""),
  });

  signIn(logAfterSign:boolean){
    let email;
    let pass;
    if (logAfterSign == true) {
      email = this.signUpForm.value.email;
      pass = this.signUpForm.value.password;
      }
    else {
      email = this.signInForm.value.email;
      pass = this.signInForm.value.password;
      }
      this._generalService.signIn(email,pass).subscribe(data=>{
        sessionStorage.setItem('olduser', JSON.stringify(data));
        if (data.UserType == 1) {
          this.router.navigate(['/manage']);
        }
        else{
          this.router.navigate(['/shop']);
        }
      }, err=>{
        alert("אופס הייתה בעיה בהזדהות, נסה שנית");
      }
      );
  }
  signUp(){
    let userObject:User=this._generalService.makeUserObject(this.signUpForm);
    this._generalService.signUp(userObject).subscribe(data=>{
            alert("המשתמש הוכנס בהצלחה");
            this.signIn(true);
          }, err=>{
             alert("אופס הייתה בעיה בכניסה, נסה שנית");
          }
          );
    
  }
  constructor(private _generalService :GeneralService,private router:Router) { }

  ngOnInit(): void {
  }

}
