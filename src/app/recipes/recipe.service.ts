import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'recipe-book-angular/src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()

export class RecipeService{
    selectedRecipe = new EventEmitter<Recipe>()

    constructor(private shoppinglistService: ShoppingListService){

    }
    
    

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 'A super-testy Schnitzel', 
        'https://previews.123rf.com/images/foodandmore/foodandmore1502/foodandmore150200151/36578074-close-up-gourmet-tasty-crumbled-schnitzel-and-crispy-fries-with-lemon-tomato-and-lettuce-.jpg', 
        [
            new Ingredient('meat' ,1),
            new Ingredient('French Fries', 20)

        ]),
        new Recipe('Big Fat Burger', 'What else do you need to say', 
        'https://images.squarespace-cdn.com/content/v1/5dc06b43e6229c77b655f005/1580236069855-JSTABHMHONPQ804LBT5L/ke17ZwdGBToddI8pDm48kKCabKVeKR_XW1u-Z7ZRqKx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USUDRyFcsPft0tso21cMMJQ3SSGCluuQbAP9I952fHRA2xBYZqvX3lv7h_sLFX56JA/DSC04369.jpg?format=2500w', 
        [
           new Ingredient('Buns', 2),
           new Ingredient('meat' ,1)

        ])
    ];

    addIngToSL(ingredient:Ingredient[]){
        this.shoppinglistService.addRecipeIngs(ingredient);

    }


    

    getRecipe(){
        return this.recipes.slice() // simply returns a copy of recipes
    }

    
}