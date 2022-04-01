import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProduatsDetailsComponent } from './produats-details/produats-details.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'' ,redirectTo:'home' , pathMatch:'full'},
  {path:'home' ,component:HomeComponent},
  {path:'products' ,component:ProductsComponent},
  {path:'about' ,component:AboutComponent},
  {path:'contact' ,component:ContactComponent},
  {path:'register' ,component:RegisterComponent},
  {path:'login' ,component:LoginComponent},
  {path:'details' ,component:ProduatsDetailsComponent},
  {path:'**' ,component:NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
