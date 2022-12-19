import { SlicePipe } from '@angular/common';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Pear', 4),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    {
      let i = 0;
      while (
        i < this.ingredients.length &&
        !(
          this.ingredients[i].name.toLowerCase() ===
          ingredient.name.toLowerCase()
        )
      ) {
        i++;
      }
      let exists = i < this.ingredients.length;
      if (ingredient.name !== '' && ingredient.amount > 0) {
        if (!exists) {
          this.ingredients.push(
            new Ingredient(ingredient.name, ingredient.amount)
          );
        } else {
          this.ingredients[i].amount += ingredient.amount;
        }
      }
    }
    console.log(this.ingredients);

    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    for (let ingredient of ingredients) {
      this.addIngredient(ingredient);
    }

    //this.ingredients.push(...ingredients); push elfogad több objectet pusholásra, egy tömb elemeit így tudjuk egyesével átadni, tehát nem magát a tömböt, mint object
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
