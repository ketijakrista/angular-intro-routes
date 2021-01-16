import { DrinksService } from './drinks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  drinks = [];

  constructor(private drinksService: DrinksService) { }

  ngOnInit() {
    this.drinks = this.drinksService.getDrinks();
  }

}
