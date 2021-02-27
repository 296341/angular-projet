import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }



}
