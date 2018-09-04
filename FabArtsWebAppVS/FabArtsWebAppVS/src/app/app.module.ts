import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { CarouselModule } from 'angular4-carousel';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { ActivitiesComponent } from './activities/activities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BodyContentComponent } from './body-content/body-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SummaryComponent } from './body-content/summary/summary.component';
import { SummaryRightComponent } from './body-content/summary-right/summary-right.component';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './admin/admin.service';

const appRoutes: Routes = [
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'activities',      component: ActivitiesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: 'gallery',
    component: GalleryComponent,
    // data: { title: 'Heroes List' }
  },
  {
    path: 'blog',
    component: BlogComponent,
    // data: { title: 'Heroes List' }
  },
  {
    path: 'home',
    component: HomeComponent,
    // data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageSliderComponent,
    TopNavbarComponent,
    HeaderComponent,
    FooterComponent,
    UpcomingComponent,
    ActivitiesComponent,
    GalleryComponent,
    BlogComponent,
    ContactComponent,
    AboutComponent,
    BodyContentComponent,
    PageNotFoundComponent,
    SummaryComponent,
    SummaryRightComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    CarouselModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
