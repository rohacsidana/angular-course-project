import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test...',
      'https://tse2.mm.bing.net/th/id/OIP.VI-C_vMINnXuFQE5jcPsAQHaHa?pid=ImgDet&rs=1'
    ),
    new Recipe(
      'Test Recipe',
      'This is a test...',
      'https://tse2.mm.bing.net/th/id/OIP.VI-C_vMINnXuFQE5jcPsAQHaHa?pid=ImgDet&rs=1'
    )
  ];
}
