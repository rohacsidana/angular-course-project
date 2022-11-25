import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Spaghetti Carbonara',
      'Make the ultimate spaghetti carbonara with a creamy hollandaise-style sauce and crisp pancetta or guanciale. You can also mix in an egg yolk at the end.',
      'https://cravinghomecooked.com/wp-content/uploads/2020/04/spaghetti-carbonara-1-20.jpg'
    ),
    new Recipe(
      'Ham & cheese croquetas',
      'These tasty, deep-fried bites can be made ahead and frozen, perfect for no-fuss entertaining as part of a party buffet spread.',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/ham-cheese-croquetas-e314bba.jpg?quality=90&webp=true&resize=750,681'
    ),
  ];

  @Output() showRecipe = new EventEmitter<Recipe>();
  gotRecipe(recipe: Recipe) {
    //console.log(recipe);
    this.showRecipe.emit(recipe);
  }
}
