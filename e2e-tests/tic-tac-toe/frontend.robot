*** Settings ***
Library         SeleniumLibrary
Resource        settings.resource

*** Test Cases ***
App Game Available
    [Tags]  smoke
    Given The Browser
    When Navigate To The App Game
    Then Title Should Be  Tic Tac Toe

*** Keywords ***
Given The Browser
    Open Browser  ${EMPTY}  ${BROWSER}

When Navigate To The App Game
    Go To    ${APP_URL}
