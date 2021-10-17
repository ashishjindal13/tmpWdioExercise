const argv = require("yargs").argv

//************Endpoints************************
const endpoint = require("../endpoints/endpoints.js");

process.env.app = (argv.app) ? argv.app : process.env.app;
let app = process.env.app === "undefined" ? "local" : process.env.app;

//**************************************************feature file settings****************************************************
//select ffs
process.env.ff = (argv.ff) ? argv.ff : process.env.ff;
let featureFilePath = process.env.ff === "undefined" ? `./features/featureFiles/*.feature` : `./features/featureFiles/${argv.ff}.feature`;

//***************************************************Browser Settings *******************************************************
//browser run in headless mode incase running api scripts or any other platform beside windows+mac

var maxBrowserInstance = process.env.threads || 1
runTimeServices = ['chromedriver']
runTimeCapabilities = [{
  maxInstances: maxBrowserInstance,
  browserName: 'chrome',
  acceptInsecureCerts: true,
  'goog:chromeOptions': {
    args: ["--start-maximized", "--disable-infobars", "--disable-gpu"],
    useAutomationExtension: false

  }
}]
//************************************************Config file *******************************************************/
// exports.config = {
let localConfig = {
  runner: "local",
  services: runTimeServices,
  specs: [
    featureFilePath
  ],
  exclude: [
    // 'path/to/excluded/files'
  ],

  // =======================================================================================================
  // Browser Capabilities
  // =======================================================================================================
  capabilities: runTimeCapabilities,
  plugins: {
    'wdio-screenshot': {}
  },


  // =======================================================================================================
  // Test Configurations
  // =======================================================================================================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "error",
  sync: true,
  waitforTimeout: 10000,
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120000,
  // Default request retries count
  connectionRetryCount: 3,
  // Test runner services
  framework: "cucumber",
  reporters: ["spec",
    ["cucumberjs-json", {
      jsonFolder: "./reports/output/json/",
      language: "en"
    }
    ]
  ],
  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    // require: ["../step_definitions/*.steps.js"],
    require: ['./step_definitions/*.steps.js'],
    backtrace: false,   // <boolean> show full backtrace for errors
    requireModule: [],  // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    dryRun: false,      // <boolean> invoke formatters without executing steps
    failFast: false,    // <boolean> abort the run on first failure
    format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true,       // <boolean> disable colors in formatter output
    snippets: true,     // <boolean> hide step definition snippets for pending steps
    source: true,       // <boolean> hide source uris
    profile: [],        // <string[]> (name) specify the profile to use
    strict: false,      // <boolean> fail if there are any undefined or pending steps
    tagExpression: '',  // <string> (expression) only execute the features or scenarios with tags matching the expression
    timeout: 60000,     // <number> timeout for step definitions
    ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    scenarioLevelReporter: false // Enable this to make webdriver.io behave as if scenarios and not steps were the tests.
  },
  //************API Config Starts**************************
  endpoint: endpoint.getEndpoint(app),
  onPrepare: function (config, capabilities) {
  },
};
module.exports = { config: localConfig }