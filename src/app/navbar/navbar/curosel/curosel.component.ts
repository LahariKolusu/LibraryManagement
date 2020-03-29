import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-curosel',
  templateUrl: './curosel.component.html',
  styleUrls: ['./curosel.component.css']
})
export class CuroselComponent implements OnInit {

  constructor(private nav:NavbarService ) {}
  
  ngOnInit() {
    this.nav.show();
  }

}
