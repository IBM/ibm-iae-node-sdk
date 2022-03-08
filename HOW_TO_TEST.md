# How to run tests

## Pre-requisites
1. Download [SDK generation code](https://github.ibm.com/CloudEngineering/openapi-sdkgen/releases)
2. Clone [`Node SDK`] https://github.com/IBM/ibm-iae-node-sdk/ 
3. Clone [`Cloud API Doc`] https://github.ibm.com/cloud-api-docs/analytics-engine
4. Generate the sdk code with: 
    `openapi-sdkgen/openapi-sdkgen.sh generate -g ibm-node -i ibmanalyticsengine-v3.json -o /Users/git/ibm-iae-node-sdk --genITs --genExamples`
5. Change to this packages root directory.
6. Exceute 
    ```
    npm install
    ```

## Integration Tests

1. The SDK has been generated from the latest ibmanalyticsengine-v3.json which contains modifications and newly added api methods.
The Integration test have to run on the generated SDK not on the sdk from git. 
2.  To merge with remote version pick the code marked between
    `// !!! Start of custom content to be copied !!!`
    `// !!! End of custom content to be copied !!!`
 Files to be updated:
 a. ibm-analytics-engine-api/v3.ts
 b. test/unit/ibm-analytics-engine-api.v3.test.js
 c. test/integration/ibm-analytics-engine-api.v3.test.js
 d. examples/ibm-analytics-engine-api.v3.test.js

3. Create a `auth.js` file in the `ibm-iae-node-sdk/test/resources` directory using `ibm-iae-node-sdk/test/resources/auth.example.js` as an example.
4. Update `auth.js` file with your own **APIKEY** and other details.
5. Execute the following command:
    `npm install`
    `npm run build`
    `npm run lint-fix`
6. Go to Project's root directory `ibm-iae-node-sdk/` directory. 
    Run `yarn jest ibm-analytics-engine-api.v3.test.js`

7. To execute individual tests
    Run `yarn jest test/integration/ibm-analytics-engine-api.v3.test.js`.
    Run `yarn jest examples/ibm-analytics-engine-api.v3.test.js`.

## Unit Tests

1. Run `jest test/unit/ibm-analytics-engine-api.v3.test.js`.