const {Given, When, Then} = require ('cucumber');
const {expect} = require ('chai');

Given ('Today is \{int}\\/{int}\\/{int}', function (year, month, date) {
  const datePath = `${year}\/${month}\/${date}`;
  this.setDate (datePath);
});

When ('the location is set to {string}', function (location) {
  return this.setLocation (location);
  // return this.setWeatherData ();
});

Then ('the weather forecast state should be {string}', function (weatherState) {
  return this.getWeatherDataFromApi ().then ((response) => {
    expect (response.weather_state_name).to.eql (weatherState);
  });
});

Then ('the wind direction should be {string}', function (windDirection) {
  const weatherData = this.getWeatherData ();
  expect (weatherData.wind_direction_compass).to.eql (windDirection);
});

Then ('the maximum temperature should be {string}', function (maxTemp) {
  const weatherData = this.getWeatherData ();
  const temperature = Math.ceil (weatherData.max_temp);
  expect (temperature.toString ()).to.eql (maxTemp);
});
