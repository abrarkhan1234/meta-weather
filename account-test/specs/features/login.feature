@feature-test
Feature: Sign in
@feature-test
Scenario: Happy path : Successful sign in journey
  Given I am on sign in page
  When I provide my username as demouser.kkbfuapf@mailosaur.io
  And I provide my password as test@1234
  And I click on sign in button
  Then I should see expected cookies on browser
      | cookieName   | domain | 
      | ckns_atkn    |.bbc.co.uk|
      | ckns_idtkn   |.bbc.co.uk|
  
Scenario: Failed scenarios: Unsuccessful  sign in journey
  Given I am on sign in page
  When I provide my username as demouser.kkbfuapf@mailosaur.io
  And I provide my password as abcd1234
  And I click on sign in button
  Then I should see expected cookies on browser
      | cookieName   | domain | 
      | ckns_atkn    |.bbc.co.uk|
      | ckns_idtkn   |.bbc.co.uk|