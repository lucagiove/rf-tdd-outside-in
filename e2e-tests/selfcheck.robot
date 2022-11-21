*** Test Cases ***
Robot Framework is working
    Log To Console  "Yeah!"

Requests Library is installed
    Import Library  RequestsLibrary

Requests Library works
    Import Library  RequestsLibrary
    Create Session  httpbin  https://httpbin.org/  verify=True
    GET On Session  httpbin  anything

Selenium Library is installed
    Import Library    SeleniumLibrary

Selenium Library works
    Import Library    SeleniumLibrary
    Open Browser      https://www.google.com  chrome
