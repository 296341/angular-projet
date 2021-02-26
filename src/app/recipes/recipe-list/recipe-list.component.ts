import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test', 'this is simply a test','https://live.staticflickr.com/65535/48588252551_16d7043332_h.jpg'),
    new Recipe('B test', 'this is the second test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-puttanesca_1-1ce4e81.jpg?webp=true&quality=90&resize=440%2C400')
  ];

  public selectedRecipe!: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

  detail(recipe: Recipe){
    this.selectedRecipe = recipe;
  }

}
