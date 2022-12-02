import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: true }) ingredientName;
  @ViewChild('amountInput', { static: true }) ingredientAmount;

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredient() {
    this.shoppingListService.addIngredient(
      new Ingredient(
        this.ingredientName.nativeElement.value,
        parseInt(this.ingredientAmount.nativeElement.value)
      )
    );
  }
}
