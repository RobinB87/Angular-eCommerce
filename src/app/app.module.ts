import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp } from "firebase/app";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    initializeApp(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
