import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
// import { NavbarService } from '../admin/admin.service';

@Component({
  selector: 'app-adpage',
  templateUrl: './adpage.component.html',
  styleUrls: ['./adpage.component.css']
})
export class AdpageComponent implements OnInit {

  constructor(private nav:NavbarService ) {}
  
  ngOnInit() {
    this.nav.hide();
  }

}
