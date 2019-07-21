const fetch = require('node-fetch');
const {setWorldConstructor} = require('cucumber');

class MetaWeather {
  constructor() {
    this.host = 'https://www.metaweather.com';
    this.location = null;
    this.locationWoeid = null;
    this.date = null;
    this.weatherDataForLocationAndDate = null;
    this.weatherDataForLocation = null;
  }

  setDate(date) {
    this.date = date;
  }

  async setLocationDetails(location) {
    this.location = location;
    this.locationWoeid = await this.getLocationWoeid(location);
  }

  async fetchFromApi(endpoint) {
    const apiResponse = await fetch(endpoint).catch(err =>
      console.log('Unable to fetch Location woeId', err)
    ); // eslint-disable-line no-console

    return await apiResponse.json();
  }

  async getLocationWoeid(location) {
    const queryEndpoint = `${this.host}/api/location/search/?query=${location}`;
    const res = await this.fetchFromApi(queryEndpoint);
    return res[0].woeid;
  }

  getWoeid() {
    return this.locationWoeid;
  }

  async getWeatherDataForLocationAndDateFromApi() {
    const locationEndpoint = `${this.host}/api/location/${this.locationWoeid}/${
      this.date
    }`;

    const res = await this.fetchFromApi(locationEndpoint);

    this.setWeatherDataForLocationAndDate(res[0]);
    return res[0];
  }

  setWeatherDataForLocationAndDate(weatherData) {
    this.weatherDataForLocationAndDate = weatherData;
  }

  getWeatherDataForLocationAndDate() {
    return this.weatherDataForLocationAndDate;
  }

  async getWeatherDataForLocationFromApi(path) {
    const locationEndpoint = `${this.host}${path}`;

    const res = await this.fetchFromApi(locationEndpoint);

    this.setWeatherDataForLocation(res);
    return res;
  }

  setWeatherDataForLocation(weatherData) {
    this.weatherDataForLocation = weatherData;
  }

  getWeatherDataForLocation() {
    return this.weatherDataForLocation;
  }
}

setWorldConstructor(MetaWeather);
