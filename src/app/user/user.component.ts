import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private builder:FormBuilder, private router: Router,private nav:NavbarService ) { }
  loginGroup;
  error;
    ngOnInit() {
      this.nav.show();
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
        this.router.navigate(['/userhome']);
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
