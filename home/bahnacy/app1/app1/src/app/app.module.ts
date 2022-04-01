import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContacsComponent } from './contacs/contacs.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { WebrComponent } from './webr/webr.component';
import { MobilComponent } from './mobil/mobil.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { HttpClient } from '@angular/common/http';


export class ServiceNameService {
  constructor(private HttpClient: HttpClient) { }
}
@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomeComponent,
    GallaryComponent,
    ProjectsComponent,
    NotfoundComponent,
    ContacsComponent,
    NavComponent,
    FooterComponent,
    WebrComponent,
    MobilComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClient,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
