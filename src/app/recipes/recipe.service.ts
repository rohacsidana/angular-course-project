import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti Carbonara',
      'Make the ultimate spaghetti carbonara with a creamy hollandaise-style sauce and crisp pancetta or guanciale. You can also mix in an egg yolk at the end.',
      'https://cravinghomecooked.com/wp-content/uploads/2020/04/spaghetti-carbonara-1-20.jpg',
      [new Ingredient('Pasta', 1), new Ingredient('Egg', 6)]
    ),
    new Recipe(
      'Ham & cheese croquetas',
      'These tasty, deep-fried bites can be made ahead and frozen, perfect for no-fuss entertaining as part of a party buffet spread.',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/ham-cheese-croquetas-e314bba.jpg?quality=90&webp=true&resize=750,681',
      [
        new Ingredient('Ham', 15),
        new Ingredient('Cheese', 4),
        new Ingredient('Egg', 2),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); //returns a copy of the array, not the actual array bc of slice()
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
