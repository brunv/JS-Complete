/* Asynchronous JavaScript with Callbacks */

// In this code, the 'setTimeout()' are simulating AJAX server requests.

// This code also creates a Callback Hell.

function getRecipe() {
    setTimeout(() => {
        const recipeID = [345, 563, 127, 980];
        console.log(recipeID);

        setTimeout((id) => {
            const recipe = {
                title: 'Fresh Tomato Pasta',
                publisher: 'Jonas'
            };

            setTimeout(publisher => {
                const recipe2 = {
                    title: 'Italian Pizza',
                    publisher: 'Jake'
                };

                console.log(recipe2);

            }, 1500, recipe.publisher);

            console.log(`${id}: ${recipe.title}`);

        }, 1500, recipeID[2]);
    }, 1500);
}

getRecipe();