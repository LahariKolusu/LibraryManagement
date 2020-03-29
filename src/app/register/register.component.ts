import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { customValidators } from './validators';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private builder:FormBuilder, private router:Router,private nav:NavbarService) { }
regGroup:FormGroup;
submitted = false;
  ngOnInit() {
    this.nav.show();
    this.regGroup=this.builder.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      pwd: ['',[Validators.required,Validators.minLength(6)]],
      confirmpwd: ['',[Validators.required,Validators.minLength(6)]],
      // idno:['',[Validators.required]],
      typeofuser:['',[Validators.required]]
    },{validators: customValidators })
  }
  submit()
  {
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.regGroup.invalid) 
    {
        return;
    }
    alert('SUCCESS!!');
    let userdetails=JSON.stringify(this.regGroup.value);
    localStorage.setItem(this.regGroup.value.email,userdetails);
    localStorage.setItem(this.regGroup.value.typeofuser,userdetails);
    // alert("value:"+this.regGroup.value.typeofuser);
    let type=this.regGroup.value.typeofuser;
    // alert(type);
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
