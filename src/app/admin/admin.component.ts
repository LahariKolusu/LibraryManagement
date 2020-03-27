import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { NavbarService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private builder:FormBuilder, private router: Router,private nav:NavbarService ) { }
loginGroup;
error;
  ngOnInit() {
    this.loginGroup=this.builder.group({
      username:['',[Validators.required]],
      pwd: ['',[Validators.required]],
    })
  }
submit()
{
  let userstring=localStorage.getItem(this.loginGroup.value.username);
  if(userstring != null)
  {
    let userobj=JSON.parse(userstring);
    console.log(userobj.username===this.loginGroup.value.username && userobj.pwd=== this.loginGroup.value.pwd);
    if(userobj.email===this.loginGroup.value.username && userobj.pwd=== this.loginGroup.value.pwd)
    {
      sessionStorage.setItem('email',userobj.email);
      this.router.navigate(['/adpage']);
    }
    else
    {
      this.error=true;
    }
  }
  else
  {
    this.error=true;
  }
}
}
