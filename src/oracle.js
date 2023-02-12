const Ethers = require('ethers');
const AccuweatherConsumer = require('./AccuweatherConsumer.json');

// Connect to the Ethereum network
const provider = new Ethers.getDefaultProvider();

// Deploy the Accuweather Consumer contract
const accuweatherConsumer = new Ethers.Contract(
    AccuweatherConsumer.networks['<network_id>'].address,
    AccuweatherConsumer.abi,
    provider
);

// Define the method to listen for the response from the Accuweather Consumer contract
async function listenForWeatherData(specId, lat, lon) {
    const weatherData = accuweatherConsumer.on(
        'fulfillLocation',
        (result) => {
            console.log(result);
            return result;
        },
        specId,
        lat,
        lon
    );
    return weatherData;
}

// Call the requestLocation method in the Accuweather Consumer contract
async function requestWeatherData(specId, payment, lat, lon) {
    const tx = await accuweatherConsumer.requestLocation(specId, payment, lat, lon);
    console.log(tx);
}

// Example usage
requestWeatherData('<spec_id>', '<payment_amount>', '<latitude>', '<longitude>');
listenForWeatherData('<spec_id>', '<latitude>', '<longitude>');
