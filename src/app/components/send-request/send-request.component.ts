import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Request}from '../request.model'
import {} from '../general.service'
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['send-request.component.css']
})
export class SendRequestComponent implements OnInit {

  requestForm: FormGroup = new FormGroup({
    "name":new FormControl(""),
    "phone":new FormControl(""),
    "branch":new FormControl(""),
    "complaints":new FormControl(""),
    "message":new FormControl("")
  });
  
  sendComplaint(){
    let requestToSent=this.requestForm;
    let requestObject :Request=this._generalService.makeRequestObject(requestToSent);
    this._generalService.saveNewStudentsToServer(requestObject).subscribe(data=>{
      alert("הפניה התקבלה בהצלחה");
    }, err=>{
      alert("מצטערים, משהו נתקע בשליחת הפניה. נסו שוב מאוחר יותר");
    }
    );
    
    
  }
  
  constructor(private _generalService :GeneralService) { }

  ngOnInit(): void {
    
  }

}


