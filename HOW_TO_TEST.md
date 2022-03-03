# How to run tests

## Pre-requisites
1. Change to this packages root directory.
1. Install jest.
    ```
    npm install jest
    ```
1. Build the package.
    ```
    npm run build
    ```

## Integration Tests

1. Create a `auth.js` file in the `ibm-iae-node-sdk/test/resources` directory using `ibm-iae-node-sdk/test/resources/auth.example.js` as an example.
1. Update `auth.js` file with your own **Service URL**, **APIKEY**, **INSTANCE GUID** and other details.
1. Go to `/test/integartion/` directory.
1. Run `jest ibm-analytics-engine-api.v2.test.js`.

## Unit Tests

1. Go to `/test/unit/` directory.
1. Run `jest ibm-analytics-engine-api.v2.test.js`.