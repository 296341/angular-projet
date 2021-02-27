import  {Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test', 'this is simply a test','https://live.staticflickr.com/65535/48588252551_16d7043332_h.jpg'),
        new Recipe('B test', 'this is the second test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-puttanesca_1-1ce4e81.jpg?webp=true&quality=90&resize=440%2C400')
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}