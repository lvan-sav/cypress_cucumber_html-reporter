# Testing with cypress framework, cucumber preprocessor and html reporter.

## For starting follow next steps:
    
1. Download or fork the repo
2. Run `npm install`
3. Run `npm run test`

## Available scripts:
    
run tests in headless mode:

    npm run test 

run tests in chrome headless mode:

    npm run cypress:run:chrome

run tests in firefox headless mode:

    npm run cypress:run:firefox
    npm run cypress:run:edge - run tests in edge headless mode
    npm run cypress:open - open headed cypress framework
    npm run cypress:run:viewport:wqhd - run tests in WQHD screen resolution
    npm run cypress:open:viewport:wqhd - open cypress in WQHD screen resolution
    npm run cypress:run:viewport:hd - run tests in HD screen resolution
    npm run cypress:open:viewport:hd - open cypress in HD screen resolution
    npm run report:generate - create reports folder and add html test run report to it

===

The project uses a cucumber-json-formatter, so if you're going to use Win, please 
change attribute "formatter" to "./helper/cucumber-json-formatter.exe" in the 
.cypress-cucumber-preprocessor.json file, like this:
    
    {
        "json": {
            "enabled": true,
            "output": "jsonlogs/log.json",
            "formatter": "./helper/cucumber-json-formatter.exe"
        },
        ...
    }

If you use MacOS or Linux, you need to make this file executable:
    
    chmod +x cucumber-json-formatter

For verify that you can run it:
    
    cucumber-json-formatter --help

For MacOS, you may get a security warning from MacOS. If you do, open System Preferences. 
Go to Security Settings. You should see a question asking if you want to open it anyway. Say yes.

If you want to observe the letest test run report, you may follow below link:

    https://lvan-sav.github.io/telnyx_texting_cypress-cucumber/

If you want to observe all runs, you may visit cypress dashboard by the link below:

    https://dashboard.cypress.io/projects/1hmt6v/runs