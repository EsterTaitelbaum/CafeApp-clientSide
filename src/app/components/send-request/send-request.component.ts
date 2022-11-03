import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    "subject":new FormControl(""),
    "message":new FormControl("")
  });
  
  sendComplaint(){
    //console.log("888888");
    let requestToSent=this.requestForm.value;
    console.log(requestToSent);
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
