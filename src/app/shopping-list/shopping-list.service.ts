import { EventEmitter } from "@angular/core";
import { Ingredient } from "recipe-book-angular/src/app/shared/ingredient.model";

export class ShoppingListService{
    addedIng = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    addIng(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.addedIng.emit(this.ingredients.slice());

    }
    addRecipeIngs(ing:Ingredient[]){
        this.ingredients.push(...ing);
        this.addedIng.emit(this.ingredients.slice());


    }

    getIngredients(){
        return this.ingredients.slice();
    }


}