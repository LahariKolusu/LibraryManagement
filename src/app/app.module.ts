import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { CuroselComponent } from './navbar/navbar/curosel/curosel.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { AdpageComponent } from './adpage/adpage.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { RegisterModule } from './register/register.module';
import { AboutModule } from './about/about.module';
import { NavbarModule } from './navbar/navbar.module';
import { HomeModule } from './home/home.module';
import { AddbooksModule } from './addbooks/addbooks.module';
import { AdminModule } from './admin/admin.module';
import { AdpageModule } from './adpage/adpage.module';
import { UserModule } from './user/user.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserhomeModule } from './userhome/userhome.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CuroselComponent,
    HomeComponent,
    RegisterComponent,
    AdminComponent,
    UserComponent,
    AboutComponent,
    AdpageComponent,
    LoggedInComponent,
    AddbooksComponent,
    UserhomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterModule,
    AboutModule,
    NavbarModule,
    HomeModule,
    AddbooksModule,
    AdminModule,
    AdpageModule,
    UserModule,
    UserhomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }