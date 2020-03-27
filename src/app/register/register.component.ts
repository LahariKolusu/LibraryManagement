import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { customValidators } from './validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private builder:FormBuilder, private router:Router) { }
regGroup;
  ngOnInit() {
    this.regGroup=this.builder.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      email:['',[Validators.required]],
      pwd: ['',[Validators.required,Validators.minLength(5)]],
      confirmpwd: ['',[Validators.required,Validators.minLength(5)]],
      idno:['',[Validators.required]],
      typeofuser:['',[Validators.required]]
    },{validators: customValidators })
  }
  
  submit()
  {
    let userdetails=JSON.stringify(this.regGroup.value);
    localStorage.setItem(this.regGroup.value.email,userdetails);
    // localStorage.setItem(this.regGroup.value.typeofuser,userdetails);
    let typeofuser=sessionStorage.getItem("typeofuser");
    // console.log(typeofuser);
    // let admin="admin";


    if(typeofuser=="admin")
    {
    this.router.navigate(['/admin']);
    }
    else{
      this.router.navigate(['/user']);
    }
  }

}
