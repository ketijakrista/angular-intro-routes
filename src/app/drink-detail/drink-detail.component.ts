import { Drink, DrinksService } from './../drinks/drinks.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.scss']
})
export class DrinkDetailComponent implements OnInit {
  id: string;
  drink: Drink;
  constructor(
    private route: ActivatedRoute,
    private drinksService: DrinksService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>
      this.drink = this.drinksService.getDrink(Number(params.id))
    );
    /*
    this.params = this.route.paramMap.pipe(
      tap((params: ParamMap) => console.log(params.get('id')))
    )
    */
  }
}
