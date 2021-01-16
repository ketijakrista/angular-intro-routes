import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { DrinksComponent } from './drinks/drinks.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  {path: 'drinks', pathMatch: 'full', component: DrinksComponent},
  {path: 'drinks/:id', component: DrinkDetailComponent},
  {path: 'other', pathMatch: 'full', component: OtherComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'drinks'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
