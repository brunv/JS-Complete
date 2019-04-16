/* From Promises to Async/Await */

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 976]);
        // reject("The request was rejected.");
    }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {

        setTimeout((ID) => {
            const recipe = {
                title: 'Fresh Tomato Pasta',
                publisher: 'Jonas'
            };
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);

    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {
                title: 'Italian Pizza',
                publisher: 'Jake'
            };
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};

// this function runs asynchronously in the background
async function getRecipesAW() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Jonas Kirk');
    console.log(related)

    return recipe;
    // Why this doesn't work if we bind it to a variable and try to log?
    // Because it runs in background, so there will be nothing to return
    // when the console.log is called outside this function.
}

// We can use '.then' because de Async function automatically returns a promise with the resolved value;
getRecipesAW().then(result => console.log(`${result} is the best ever!`));