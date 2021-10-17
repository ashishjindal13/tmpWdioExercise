# tmpWdioExercise

## Steps to setup
###### 1. Please install Node v12
###### 2. Close the repository and Go to tmpWdioExercise/tests (cd tmpWdioExercise/tests) directory
###### 3. Run npm install on terminal to install the packages from package.json (npm install)
###### 4. Enure you are using chrome version 94. If you are using higher version then change the version in package.json to get the appropriate version

## Steps to execute
###### 1. run command on terminal :npm run clean-reports && npx wdio conf/local.conf.js && npm run generate-html-report
###### 1.1 npm run clean-reports: will delete any existing reports
###### 1.2 npx wdio conf/local.conf.js: this will run the feature file 
###### 1.3 npm run generate-html-report: this will generate the html report in reports/output/html folder.
###### 2. Check the test results in reports/output/html.
