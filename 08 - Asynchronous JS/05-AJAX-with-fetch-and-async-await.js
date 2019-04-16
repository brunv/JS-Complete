/* Making AJAX calls with Fetch and Async/Await */

function getWeather(woeid) {
    // using a proxy:
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
    .then(result => {
        // console.log(result);
        return result.json();   // returns a promise
    })
    .then(data => {
        // console.log(data);
        const today = data.consolidated_weather[0];
        console.log(`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
    })
    .catch(error => {
        console.log(error);
    });
}

getWeather(2487956);
getWeather(44418);

async function getWeatherAW(woeid) {
    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        // console.log(data);
    
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);
        
        return data;

    } catch (error) {
        console.log(error);
    }
}
getWeatherAW(2487956);
let dataLondon;
getWeatherAW(44418).then(data => {
    dataLondon = data;
    console.log(dataLondon);
});
// const dataLondon = getWeatherAW(44418);
// console.log(dataLondon);     // doesn't work because it tries to log before any data comes back