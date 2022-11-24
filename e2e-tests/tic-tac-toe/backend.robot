*** Settings ***
Library     RequestsLibrary
Library     Collections
Resource    settings.resource

*** Test Cases ***
Backend Service Available
    [Tags]  smoke
    ${response}=        GET     ${BACKEND_URL}
    Status Should Be    OK
    Should Be Equal As Strings   ${response.text}   Tic Tac Toe

