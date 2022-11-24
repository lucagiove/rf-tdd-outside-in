*** Settings ***
Library     RequestsLibrary
Library     Collections
Resource    settings.resource

*** Variables ***
${turn}=        X
@{squares}=     X  X  X  O  O  null  null  null  null


*** Test Cases ***
As User I Want To Store My Game Data
    Given Game Data
    When Post Game Data
    Then Status Should Be    OK
    Then Length Should Be    ${response.json()}.sessionId    24

As User I Want To Retrieve My Game Data
    Given A Session Id
    When Get Game Data
    Should Be Equal As Strings    ${response.json().turn}    ${turn}
    Lists Should Be Equal     ${response.json().squares}    ${squares}


*** Keywords ***
Given Game Data
    ${data}=       Create Dictionary
        ...             turn=turn
        ...             squares=squares
    Set Test Variable   ${game_data}  ${data}

When Post Game Data
    ${resp}=    POST     ${BACKEND_URL}/sessions    json=${game_data}
    Set Test Variable    ${session_id}  ${response.json()}.sessionId
    Set Test Variable    response  ${resp}

Given A Session Id
    Given Game Data
    When Post Game Data

When Get Game Data
    GET     ${BACKEND_URL}/sessions/${session_id}
    Set Test Variable    ${response}
