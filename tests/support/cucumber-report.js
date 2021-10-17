const reporter = require("cucumber-html-reporter");
fs = require("fs-extra");
// /************************ check if all results related folders are there or not********************************************/
if (fs.existsSync("reports/output")) {
  if (!fs.existsSync("reports/output/html")) {
    fs.mkdirSync("reports/output/html");
  }
  }
/************************End of check if all results related folders are there or not********************************************/
let currentTime = new Date().toJSON().replace(/:/g, "-");
let jsonReportPath = "./reports/output/json/";
let htmlReportPath = "./reports/output/html/cucumber-html-report" + "-" + currentTime + ".html";

let options = {
  theme: 'bootstrap', //'bootstrap' | 'hierarchy' | 'foundation' | 'simple',
  brandTitle:"Execution Report",
  jsonDir: jsonReportPath,
  output: htmlReportPath,
  reportSuiteAsScenarios: false,
  scenarioTimestamp: true,
  launchReport: false,
  ignoreBadJsonFile:true,
};

reporter.generate(options);