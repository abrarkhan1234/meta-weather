Feature: Meta Weather API
  As a member of the Development team
  I would like to know that the Weather API is stable
  So that I can provide more personalised messagess

  Scenario Outline: London weather forecast for the next few days is correct
    Given Today is <date> 
    And the location is set to "<location>"
    Then the weather forecast state should be "<weather-state-name>"
    And the wind direction should be "<wind-direction>"
    And the maximum temperature should be "<max-temp>"

  Examples:
    | date       | location | weather-state-name | wind-direction | max-temp |
    | 2019/7/20  | London   | Light Rain         | WSW            | 24       |
    | 2019/7/21  | London   | Showers            | WSW            | 25       |
    | 2019/7/22  | London   | Clear              | SW             | 26       |
    | 2019/7/23  | London   | Light Cloud        | SE             | 23       |
