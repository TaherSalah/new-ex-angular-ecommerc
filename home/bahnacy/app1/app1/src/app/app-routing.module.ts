import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContacsComponent } from './contacs/contacs.component';
import { ProjectsComponent } from './projects/projects.component';
import { GallaryComponent } from './gallary/gallary.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WebrComponent } from './webr/webr.component';
import { MobilComponent } from './mobil/mobil.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'about-me' , component:AboutMeComponent},
  {path:'contacts' , component:ContacsComponent},
  {path:'projects' , component:ProjectsComponent,
  children: [
    {path:'web' ,component:WebrComponent},
    {path:'mobile' ,component:MobilComponent}
  ]
  },
  {path:'gallary' , component:GallaryComponent},
  {path:'**' , component:NotfoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {


 }
