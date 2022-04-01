import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './matrials/matrials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProduatsDetailsComponent } from './produats-details/produats-details.component';



@NgModule({
  declarations: [AppComponent, HomeComponent, AccountComponent, RegisterComponent, LoginComponent, LogoutComponent, NavbarComponent, FooterComponent, HeaderComponent, NotfoundComponent, ProduatsDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, BrowserAnimationsModule , CarouselModule ,MatSelectModule,FormsModule ,MatSlideToggleModule,MatSliderModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
