const {Given, When, Then} = require('cucumber');
const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const expect = chai.expect;

Given('Today is {int}\\/{int}\\/{int}', function(year, month, date) {
  const datePath = `${year}\/${month}\/${date}`;
  this.setDate(datePath);
});

When('the location is set to {string}', function(location) {
  return this.setLocationDetails(location);
});

When('I visit the location date endpoint {string}', function(endpoint) {
  return this.getWeatherDataForLocationAndDateFromApi();
});

Then('the weather forecast state should be {string}', function(weatherState) {
  const weatherData = this.getWeatherDataForLocationAndDate();
  expect(weatherData.weather_state_name).to.eql(weatherState);
});

Then('the wind direction should be {string}', function(windDirection) {
  const weatherData = this.getWeatherDataForLocationAndDate();
  expect(weatherData.wind_direction_compass).to.eql(windDirection);
});

Then('the maximum temperature should be {string}', function(maxTemp) {
  const weatherData = this.getWeatherDataForLocationAndDate();
  const temperature = Math.ceil(weatherData.max_temp);
  expect(temperature.toString()).to.eql(maxTemp);
});

Given('I visit the location endpoint {string}', function(locationEndpoint) {
  return this.getWeatherDataForLocationFromApi(locationEndpoint);
});

Then('I should see the London weather forecast for the next {string} days', function (noOfDays) {
  const weatherData = this.getWeatherDataForLocation();
  expect(weatherData.consolidated_weather).to.be.array();

  expect(weatherData.consolidated_weather).to.be.ofSize(parseInt(noOfDays));
});