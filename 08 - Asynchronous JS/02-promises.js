/* From Callback Hell to PROMISES */

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

// getIDs.then(IDs => {
//     console.log(IDs);
// });

// getIDs.catch(error => {
//     console.log(error);
// })

getIDs
.then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);
})
.then(recipe => {   // this '.then' is resolving the 'getRecipe()'
    console.log(recipe);
    return getRelated('Jake Galahad');
})
.then(recipe => {   // this '.then' is resolving the 'getRelated()'
    console.log(recipe)
})
.catch(error => {   // this '.catch' is resolving the 'getIDs'
    console.log(error);
});