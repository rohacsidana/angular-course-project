import { Component, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;
  constructor(private slService: ShoppingListService) {}
  onAddToShoppingList() {
    console.log(this.recipe.ingredients);
    this.slService.addIngredients(this.recipe.ingredients);
  }
}
