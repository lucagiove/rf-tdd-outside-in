*** Settings ***
Library         SeleniumLibrary

*** Variables ***
${APP_URL}      https://rf-tdd-outside-in-frontend.loca.lt
${BROWSER}      Chrome

*** Test Cases ***
Game Board Available
    Given The Browser
    When Navigate To The App Game
    Then Title Should Be  Tic Tac Toe

*** Keywords ***
Given The Browser
    Open Browser  ${EMPTY}  ${BROWSER}

When Navigate To The App Game
    Go To    ${APP_URL}

