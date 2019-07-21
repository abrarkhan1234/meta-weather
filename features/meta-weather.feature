Feature: Meta Weather API
  As a member of the Development team
  I would like to know that the Weather API is stable
  So that I can provide more personalised messagess

  Scenario Outline: London weather forecast for the next few days is correct
    Given Today is <date>
    And the location is set to "<location>"
    When I visit the location date endpoint "/api/location/woeid/date"
    Then the weather forecast state should be "<weather-state-name>"
    And the wind direction should be "<wind-direction>"
    And the maximum temperature should be "<max-temp>"

   Examples:
     | date       | location | weather-state-name | wind-direction | max-temp |
     | 2019/7/20  | London   | Heavy Cloud        | WSW            | 21       |
     | 2019/7/21  | London   | Showers            | WSW            | 25       |
     | 2019/7/22  | London   | Clear              | SW             | 26       |
     | 2019/7/23  | London   | Light Cloud        | SE             | 23       |

  Scenario: Location Endpoint returns forecast for the next 6 days
    Given I visit the location endpoint "/api/location/44418"
    Then I should see the London weather forecast for the next "6" days

  # @manual
  # Scenario Outline: Location Endpoint returns correct Location for given "woeid"
  #   Given I have the following woeid "<woeid>"
  #   When I visit the location endpoint "/api/location/<woeid>"
    # Then I should see data for "<location>"
    # And the timezone should be "<timezone>"

  # Examples:
  #   | woeid     | location  | timezone        |
  #   | 44418     | London    | "Europe/London" |         
  #   | 21125     | Glasgow   | "Europe/London" | 
  #   | 12586539  | Mumbai    | "Asia/Kolkata"  | 
  #   | 2211096   | Karachi   | "Asia/Karachi"  | 

  # @manual
  # Scenario: Location Endpoint returns the country for the given city
  #   Given I visit the location endpoint for London
  #   Then I should see the England as the country

  # @manual
  # Scenario: I see a list of all sources used to gather the weather data
  #   Given I visit the location endpoint "/api/location/44418"
  #   Then I should see a list of all sources used to gather data

  # @manual
  # Scenario: The Search endpoint returns an error when no querystring provided
  #   Given I visit the location search endpoint "/api/location/search/"
  #   And I do not provide a query string for a search
  #   Then I should see an error page

  # @manual
  # Scenario Outline: The Search endpoint returns the correct data
  #   Given I visit the location search endpoint "/api/location/search/?query=<location>"
  #   Then I should see the location title as <title>
  #   And I should see the woeid as <woeid> 
  #   And I should see the long/latt coordinates <long-latt>

  #   Examples:
  #   | woied     | location  | title    | long-latt           |
  #   | 44418     | london    | London   | 55.857800,-4.242510 |    
  #   | 21125     | glasgow   | Glasgow  | 51.506321,-0.12714  |
  #   | 12586539  | mumbai    | Mumbai   | 19.076191,72.875877 |
  #   | 2211096   | karachi   | Karachi  | 24.889780,67.028511 |
