# How to run tests

## Pre-requisites
1. Download [SDK generation code](https://github.ibm.com/CloudEngineering/openapi-sdkgen/releases)
2. Clone [`Node SDK`] https://github.com/IBM/ibm-iae-node-sdk/ 
3. Generate the sdk code with: 
    `openapi-sdkgen/openapi-sdkgen.sh generate -g ibm-node -i ibmanalyticsengine-v3.json -o /Users/git/ibm-iae-node-sdk --genITs --genExamples`
4. Change to this packages root directory.
5. Exceute 
    ```
    npm install
    ```

## Integration Tests
1.  To merge with remote version pick the code marked between
    `// !!! Start of custom content to be copied !!!`
    `// !!! End of custom content to be copied !!!`
 Files to be updated:
 a. ibm-analytics-engine-api/v3.ts
 b. test/unit/ibm-analytics-engine-api.v3.test.js
 c. test/integration/ibm-analytics-engine-api.v3.test.js
 d. examples/ibm-analytics-engine-api.v3.test.js

2. Create a `auth.js` file in the `ibm-iae-node-sdk/test/resources` directory using `ibm-iae-node-sdk/test/resources/auth.example.js` as an example.
3. Update `auth.js` file with your own **APIKEY** and other details.
4. Execute the following command:
    `npm install`
    `npm run build`
    `npm run lint-fix`
5. Go to Project's root directory `ibm-iae-node-sdk/` directory. 
    Run `yarn jest ibm-analytics-engine-api.v3.test.js`

6. To execute individual tests
    Run `yarn jest test/integration/ibm-analytics-engine-api.v3.test.js`.
    Run `yarn jest examples/ibm-analytics-engine-api.v3.test.js`.

## Unit Tests

1. Run `jest test/unit/ibm-analytics-engine-api.v3.test.js`.