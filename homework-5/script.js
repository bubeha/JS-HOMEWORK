class Smoothie {
    constructor(ingredients) {
        this.ingredients = ingredients;

        this.ingredientsMap = {
            'Strawberries': 1.5,
            'Banana': 0.5,
            'Mango': 2.5,
            'Blueberries': 1,
            'Raspberries': 1,
            'Apple': 1.75,
            'Pineapple': 3.50,
        }
    }

    getCost() {
        const ingredientsMap = this.ingredientsMap
        const cost = this.ingredients.reduce(function (result, curr) {
            const inredientCost = ingredientsMap[curr];
            return result + inredientCost;
        }, 0)

        return `$${cost.toFixed(2)}`;
    }

    getName() {
        if (this.ingredients.length === 1) {
            return `${this.ingredients[0]} smoothie`
        } else {
            const arraySortIngredients = this.ingredients.sort()
            const reversArraySortIngredients = arraySortIngredients.reverse()

            const name = reversArraySortIngredients.reduce(function (result, curr) {
                return `${curr} ${result}`;
            }, `fusion`)
            return name;
        }
    }
}

const s1 = new Smoothie(["Banana"])
const s2 = new Smoothie(["Raspberries", "Strawberries", "Blueberries"]);

console.log(s1.ingredients);
console.log(s1.getCost());
console.log(s1.getName());
console.log(s2.ingredients);
console.log(s2.getCost());
console.log(s2.getName());










