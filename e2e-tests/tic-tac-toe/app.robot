*** Settings ***
Library         SeleniumLibrary
Resource        tic-tac-toe/settings.resource

*** Test Cases ***
App Game Available
    Given The Browser
    When Navigate To The App Game
    Then Title Should Be  Tic Tac Toe

*** Keywords ***
Given The Browser
    Open Browser  ${EMPTY}  ${BROWSER}

When Navigate To The App Game
    Go To    ${APP_URL}
