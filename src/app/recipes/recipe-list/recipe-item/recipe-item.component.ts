import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() recipeItem = new EventEmitter<{ recipe: Recipe }>();

  onRecipeItemClick() {
    this.recipeItem.emit({ recipe: this.recipe });
    console.log(this.recipe);
  }
}
