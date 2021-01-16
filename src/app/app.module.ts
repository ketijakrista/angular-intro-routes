import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinksComponent } from './drinks/drinks.component';
import { OtherComponent } from './other/other.component';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinksComponent,
    OtherComponent,
    DrinkDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
