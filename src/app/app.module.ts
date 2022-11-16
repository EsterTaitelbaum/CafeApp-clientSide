import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { SendRequestComponent } from './components/send-request/send-request.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpeningPageComponent } from './components/opening-page/opening-page.component';
import { LoginComponent } from './components/login/login.component';
import { ShopComponent } from './components/shop/shop.component';
import { ManageComponent } from './components/manage/manage.component';
//import { MatSliderModule } from '@angular/material/slider';

const ROUTES:Routes=[
{path:"request",component:SendRequestComponent},
{path:"home",component:OpeningPageComponent},
{path:"about",component:AboutComponent},
{path:"login",component:LoginComponent},
{path:"shop",component:ShopComponent},
{path:"manage",component:ManageComponent},
{path:"",component:OpeningPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SendRequestComponent,
    AboutComponent,
    OpeningPageComponent,
    LoginComponent,
    ShopComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    // MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent,HomeComponent]
})
export class AppModule { }
