# How to run tests

## Pre-requisites
1. You must create 2 instances of Analytics Engine service - Serverless plan.
1. Provide instance home details in the 1st instance.
1. Don't provide instance home details in the 2nd instance.
1. You must have two set of HMAC Access Key and HMAC secret key - Credentials must have write access to the object storage used as instance home.
1. Change to this package's root directory.
1. Run `npm install`.

## Integration Tests

1. Create a `ibm_analytics_engine_api_v3.env` file in the root directory `ibm-iae-node-sdk` using `ibmanalyticsengine-service.env.hide` as an example.
1. Update `ibm_analytics_engine_api_v3.env` file with your own **APIKEY**.
1. In addition to the above, add the following properties to the file - 
    1. `IBM_ANALYTICS_ENGINE_API_INSTANCE_GUID`=`<Id of your Analytics Engine Serverless plan instance>`
    1. `IBM_ANALYTICS_ENGINE_API_INSTANCE_GUID_WO_INSTANCE_HOME`=`<Id of your Analytics Engine Service plan instance created without instance home>`
    1. `IBM_ANALYTICS_ENGINE_API_HMAC_ACCESS_KEY`=`<HMAC access key of the cos instance to be used as instance home>`
    1. `IBM_ANALYTICS_ENGINE_API_HMAC_SECRET_KEY`=`<HMAC secret key of the cos instance to be used as instance home>`
    1. `IBM_ANALYTICS_ENGINE_API_ALTERNATE_HMAC_ACCESS_KEY`=`<HMAC access key of the cos instance to be used as instance home>`
    1. `IBM_ANALYTICS_ENGINE_API_ALTERNATE_HMAC_SECRET_KEY`=`<HMAC secret key of the cos instance to be used as instance home>`
1. From root directory, run the following:
    ```
    npm run test-integration
    ```

## Unit Tests

1. From the root directory, run the following:
    ```
    npm run test-unit
    ```