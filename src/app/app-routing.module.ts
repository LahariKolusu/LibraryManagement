import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { NavbarComponent } from './navbar/navbar/navbar.component';
import { CuroselComponent } from './navbar/navbar/curosel/curosel.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { AdpageComponent } from './adpage/adpage.component';
import { AdminComponent } from './admin/admin.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'curosel',component:CuroselComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',component:AdminComponent},
  {path:'user',component:UserComponent},
  {path:'about',component:AboutComponent},
  {path:'adpage',component:AdpageComponent},
  {path:'addbooks',component:AddbooksComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:"**",redirectTo:"curosel"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
