*** Settings ***
Library         SeleniumLibrary
Resource        settings.resource

*** Variables ***
${Square0}   data:testid:square-0

*** Test Cases ***
Clickable Square
    Given Tic Tac Toe App
    When Click Button            ${Square0}
    Then Element Should Contain  ${Square0}   X

*** Keywords ***
Given Tic Tac Toe App
    Open Browser  ${APP_URL}  ${BROWSER}


