const fetch = require ('node-fetch');
const {setWorldConstructor} = require ('cucumber');

class MetaWeather {
  constructor () {
    this.host = 'https://www.metaweather.com';
  }

  setDate (date) {
    this.date = date;
  }

  async setLocation (location) {
    this.location = location;
    const queryEndpoint = `${this.host}/api/location/search/?query=${location}`;

    const apiResponse = await fetch (queryEndpoint).catch (err =>
      console.log ('Unable to fetch Location woeId', err)
    ); // eslint-disable-line no-console

    const parsedResponse = await apiResponse.json ();

    this.locationWoeid = parsedResponse[0].woeid;
  }

  async getWeatherDataFromApi () {
    const locationEndpoint = `${this.host}/api/location/${this.locationWoeid}/${this.date}`;
    const apiResponse = await fetch (locationEndpoint).catch (err =>
      console.log ('Unable to fetch Location data', err)
    ); // eslint-disable-line no-console

    const parsedResponse = await apiResponse.json ();

    this.weatherData = parsedResponse[0];
    return this.weatherData;
  }

  getWeatherData () {
    return this.weatherData;
  }
}

setWorldConstructor (MetaWeather);
