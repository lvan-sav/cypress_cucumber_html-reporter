const report = require('multiple-cucumber-html-reporter')

report.generate({
    jsonDir: "jsonlogs",
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name: 'chrome',
            version: 'XX'
        },
        device: 'GitHub Action',
        platform: {
            name:'ubuntu',
            version: 'latest'
        }
    },
    customData: {
        title: "Run info",
        data: [
            { label: 'Project', value: 'Tenyx website testing' },
            { label: 'Execution date', value: new Date().toISOString().slice(0, 10) }
        ]
    }
})