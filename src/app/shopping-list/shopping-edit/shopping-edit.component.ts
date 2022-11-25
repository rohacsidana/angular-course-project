import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: true }) ingredientName;
  @ViewChild('amountInput', { static: true }) ingredientAmount;

  @Output() giveIngredient = new EventEmitter<Ingredient>();

  emitGiveIngredient() {
    this.giveIngredient.emit(
      new Ingredient(
        this.ingredientName.nativeElement.value,
        parseInt(this.ingredientAmount.nativeElement.value)
      )
    );
  }
}
