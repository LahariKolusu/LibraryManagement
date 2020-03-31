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
import { RegisterModule } from './register/register.module';
import { AboutModule } from './about/about.module';
import { NavbarModule } from './navbar/navbar.module';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { AdpageModule } from './adpage/adpage.module';
import { UserModule } from './user/user.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserhomeModule } from './userhome/userhome.module';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    CuroselComponent,
    HomeComponent,
    RegisterComponent,
    AdminComponent,
    UserComponent,
    AboutComponent,
    AdpageComponent,
    UserhomeComponent,
    HeaderComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterModule,
    AboutModule,
    HomeModule,
    AdminModule,
    AdpageModule,
    UserModule,
    UserhomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }