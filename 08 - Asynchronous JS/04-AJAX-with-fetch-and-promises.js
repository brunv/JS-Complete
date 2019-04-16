/* AJAX calls with Fetch and Promises */

function getWeather(woeid) {
    // using a proxy:
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
    .then(result => {
        // console.log(result);
        return result.json();   // returns a promise
    })
    .then(data => {
        console.log(data);
        const today = data.consolidated_weather[0];
        console.log(`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`)
    })
    .catch(error => {
        console.log(error);
    });
}

getWeather(2487956);
getWeather(44418);
// getWeather(4426523562626262626418);


