import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { homedir } from 'os';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { SlidersComponent } from './sliders/sliders.component';
import { GallayuComponent } from './gallayu/gallayu.component';

AboutComponent
@NgModule({
  declarations: [
    AppComponent,HomeComponent,AboutComponent, FooterComponent, SlidersComponent, GallayuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
