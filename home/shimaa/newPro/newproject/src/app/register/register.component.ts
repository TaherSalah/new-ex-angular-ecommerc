import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl ,FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { last } from 'rxjs';

FormControl


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

regiserForm:FormGroup=new FormGroup({
first_name : new FormControl (null , [Validators.required , Validators.minLength(4), Validators.maxLength(6)]),
last_name : new FormControl (null , [Validators.required , Validators.minLength(4), Validators.maxLength(6)]),
age : new FormControl (null ,[Validators.required , Validators.min(16), Validators.max(80)]),
email: new FormControl (null , Validators.email),
password : new FormControl (null , [Validators.required , Validators.pattern(/^[A-Z][a-z]{5,6}$/)])
})


constructor() { }

  ngOnInit(): void {

  }


}
