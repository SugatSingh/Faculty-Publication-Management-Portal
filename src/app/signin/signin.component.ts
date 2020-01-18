import { Component, OnInit } from '@angular/core';
import { userdetail } from '../shared/sigindetails';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user : userdetail={
    username:'',
    password:'',
    remember:false
  };
  constructor(public dialogref:MatDialogRef<SigninComponent>) { }

  ngOnInit() {
  }

  onSubmit(){
    this.dialogref.close();
  }

}
