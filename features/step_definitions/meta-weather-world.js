const fetch = require('node-fetch');
const { setWorldConstructor } = require('cucumber');

class MetaWeather {
    constructor() {
        this.host = 'https://www.metaweather.com';
        this.location = null;
        this.locationWoeid = null;
        this.date = null;
        this.weatherData = null;
    }

    setDate(date) {
        this.date = date;
    }

    async setLocationDetails(location) {
        this.location = location;
        this.locationWoeid = await this.getLocationWoeid(location);
    }

    async getLocationWoeid(location) {
        const queryEndpoint = `${this.host}/api/location/search/?query=${location}`;

        const apiResponse = await fetch(queryEndpoint).catch(err =>
            console.log('Unable to fetch Location woeId', err)
        ); // eslint-disable-line no-console

        const parsedResponse = await apiResponse.json();
        return parsedResponse[0].woeid;
    }

    getWoeid() {
        return this.locationWoeid;
    }

    async getWeatherDataForLocationAndDate() {
        const locationEndpoint = `${this.host}/api/location/${this.locationWoeid}/${this.date}`;
        const apiResponse = await fetch(locationEndpoint).catch(err =>
            console.log('Unable to fetch Location data', err)
        ); // eslint-disable-line no-console

        const parsedResponse = await apiResponse.json();

        this.setWeatherData(parsedResponse[0]);
        return parsedResponse[0];
    }

    setWeatherData(weatherData) {
        this.weatherData = weatherData;
    }

    getWeatherData() {
        return this.weatherData;
    }
}

setWorldConstructor(MetaWeather);
