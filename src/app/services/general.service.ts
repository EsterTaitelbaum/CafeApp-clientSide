import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {Request}from '../models/request.model'
import { User } from '../models/user.model';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  public postRequest(){
    const url:string="hhh";
  }

  makeRequestObject(requestFromForm:FormGroup):Request{

    let subjectsDict2 = new Map<number, string>();
    subjectsDict2.set(84, "איכות השירות"); 
    subjectsDict2.set(83, "איכות המאכל");
    subjectsDict2.set(82, "הטבות מועדון");
    subjectsDict2.set(249, "בקשות/הצעות");
    subjectsDict2.set(85, "עידכון פרטים");
    subjectsDict2.set(0, "עידכון פרטים");

    //let requestFromForm=this.requestForm.value;
    let requestObject:Request=new Request();
    requestObject.ClientCode=requestFromForm.value.branch;
    requestObject.SubjectCode=Number(requestFromForm.value.complaints);
    requestObject.SubjectName=String(subjectsDict2.get(Number(requestFromForm.value.complaints)));
    requestObject.ComplaintDesc=requestFromForm.value.message
    requestObject.UpdateDate=String(new Date());
    requestObject.LetterDesc="";
    requestObject.Summary=requestFromForm.value.message;

    console.log(requestObject);

    return requestObject;
  }
  
  makeUserObject(UserFromForm:FormGroup):User{
    let userObject :User=new User();
    userObject.Email=UserFromForm.value.email;
    userObject.Password=UserFromForm.value.password;
    userObject.FirstName=UserFromForm.value.firstName;
    userObject.LastName=UserFromForm.value.lastName;
    userObject.UserType=2;
    return userObject;
  }

  
  saveNewStudentsToServer(requestObject :Request):Observable<boolean>
  {
    return this._http.post<boolean>("/api/ComplaintController1",requestObject);
  }

  signIn(email:string,password:string)
  {
    return this._http.get<User>("/api/User/"+email+"/"+password);
  }
  signUp(userToSend: User)
  {
    return this._http.post<boolean>("/api/User",userToSend);
  }

  constructor(private _http: HttpClient) { }
}
