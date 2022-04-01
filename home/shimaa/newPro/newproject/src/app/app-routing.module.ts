import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';


const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'gallary' , component:GallaryComponent},
  {path:'Movies' , component:MoviedetailsComponent},
  {path:'tv' , component:TvComponent},
  {path:'contacts' , component:ContactusComponent},
  {path:'register' , component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {path:'logout' , component:LogoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
