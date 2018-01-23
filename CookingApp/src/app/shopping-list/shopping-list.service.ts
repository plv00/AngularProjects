import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient []>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] =[
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];
    
    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
      }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        // above is will miss lots of events

        // directly add ingredient in one go then emit our event
        /*
        // ... is spread operator, ES6. Turn a arry of elemts into a list of elements 
        //      because the push method is able to handle multiple objects.
        push -> can't handle array, it can but it will push this array as a single object
            to the array.
    */
        // this will simply spread our ingredients into a list of single ingredients which are 
            // now pushed without issues to our ingredients array
        this.ingredients.push(...ingredients);
        
        this.ingredientsChanged.next(this.ingredients.slice());

    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
      }
    
      deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
    

}