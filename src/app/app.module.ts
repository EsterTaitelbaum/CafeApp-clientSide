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

const ROUTES:Routes=[
{path:"request",component:SendRequestComponent},
{path:"home",component:HomeComponent},
{path:"about",component:AboutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SendRequestComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent,HomeComponent]
})
export class AppModule { }
