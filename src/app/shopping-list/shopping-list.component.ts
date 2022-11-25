import { Component, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Pear', 4),
  ];

  gotIngredient(ingr: Ingredient) {
    let i = 0;
    while (
      i < this.ingredients.length &&
      !(this.ingredients[i].name === ingr.name)
    ) {
      i++;
    }
    let exists = i < this.ingredients.length;
    if (ingr.name !== '' && ingr.amount > 0) {
      if (!exists) {
        this.ingredients.push(new Ingredient(ingr.name, ingr.amount));
      } else {
        this.ingredients[i].amount += ingr.amount;
      }
    }
  }
}
