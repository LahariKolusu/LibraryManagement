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
// submit()
// {
//   let typeofuser=localStorage.getItem(this.regGroup.value.typeofuser);
//   let userdetails=JSON.stringify(this.regGroup.value);
//   localStorage.setItem(this.regGroup.value.email,userdetails);

// }












  
  submit()
  {
    let userdetails=JSON.stringify(this.regGroup.value);
    localStorage.setItem(this.regGroup.value.email,userdetails);
    localStorage.setItem(this.regGroup.value.typeofuser,userdetails);
    // alert("value:"+this.regGroup.value.typeofuser);
    let type=this.regGroup.value.typeofuser;
    alert(type);
    if(type=="admin")
    {
      // alert("control in if");
    this.router.navigate(['/admin']);
    }
    else
    {
      // alert("control in else");
      this.router.navigate(['/user']);
    }
  }

 }
