import { Injectable } from '@angular/core';

export interface Drink {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  drinks = [
    {
      id: 1,
      title: 'Margarita'
    },
    {
      id: 2,
      title: 'Pina Colada'
    },
  ];

  getDrinks(): Drink[] {
    return [...this.drinks];
  }

  getDrink(id: number): Drink {
    return this.drinks.find(it => it.id === id);
  }
}

