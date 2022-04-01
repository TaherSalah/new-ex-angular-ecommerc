import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PopularComponent } from './popular/popular.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ReactiveFormsModule } from '@angular/forms';
import { observable } from 'rxjs';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MoviesComponent,
    TvComponent,
    PopularComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    ContactusComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    MoviedetailsComponent,
    GallaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
