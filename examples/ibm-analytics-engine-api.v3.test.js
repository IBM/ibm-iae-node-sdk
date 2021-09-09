/**
 * @jest-environment node
 */
/**
 * (C) Copyright IBM Corp. 2021.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-console */

const IbmAnalyticsEngineApiV3 = require('../dist/ibm-analytics-engine-api/v3');
// eslint-disable-next-line node/no-unpublished-require
const authHelper = require('../test/resources/auth-helper.js');
// const authHelper = require('../test/resources/auth.js');
const { IamAuthenticator } = require('../dist/auth');
const timeout = 20000;
// You can use the readExternalSources method to access additional configuration values
// const { readExternalSources } = require('ibm-cloud-sdk-core');

//
// This file provides an example of how to use the IBM Analytics Engine API service.
//
// The following configuration properties are assumed to be defined:
// IBM_ANALYTICS_ENGINE_API_URL=<service base url>
// IBM_ANALYTICS_ENGINE_API_AUTH_TYPE=iam
// IBM_ANALYTICS_ENGINE_API_APIKEY=<IAM apikey>
// IBM_ANALYTICS_ENGINE_API_AUTH_URL=<IAM token service base URL - omit this if using the production environment>
//
// These configuration properties can be exported as environment variables, or stored
// in a configuration file and then:
// export IBM_CREDENTIALS_FILE=<name of configuration file>
//
// const configFile = 'ibm_analytics_engine_api_v3.env';

// const describe = authHelper.prepareTests(configFile);

// Save original console.log
const originalLog = console.log;

// Mocks for console.log and console.warn
const consoleLogMock = jest.spyOn(console, 'log');
const consoleWarnMock = jest.spyOn(console, 'warn');
describe('IbmAnalyticsEngineApiV3', () => {
  const options = authHelper.ibm_analytics_engine_api_v3;
  options.authenticator = new IamAuthenticator({ apikey: options.apikey });
  const instanceGuid = options.instance_guid;
  let applicationId = '';
  // begin-common
  const ibmAnalyticsEngineApiService = IbmAnalyticsEngineApiV3.newInstance(options);

  // end-common

  // To access additional configuration values, uncomment this line and extract the values from config
  // const config = readExternalSources(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME);
  jest.setTimeout(timeout);
  test('getInstance request example', (done) => {
    consoleLogMock.mockImplementation((output) => {
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      done(output);
    });

   
    // begin-get_instance

    const params = {
      instanceId: instanceGuid,
    };

    ibmAnalyticsEngineApiService
      .getInstance(params)
      .then((res) => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch((err) => {
        console.warn(err);
      });

    // end-get_instance
  });
  test('createApplication request example', (done) => {
    consoleLogMock.mockImplementation((output) => {
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      done(output);
    });

   
    // begin-create_application
    const applicationRequestApplicationDetailsModel = {
      application: '/opt/ibm/spark/examples/src/main/python/wordcount.py',
      arguments: ['/opt/ibm/spark/examples/src/main/resources/people.txt'],
    };
    const params = {
      instanceId: instanceGuid,
      applicationDetails: applicationRequestApplicationDetailsModel,
    };

    ibmAnalyticsEngineApiService
      .createApplication(params)
      .then((res) => {
        console.log(JSON.stringify(res.result, null, 2));
        applicationId = res.result.id;
      })
      .catch((err) => {
        console.warn(err);
      });

    // end-create_application
  });
  test('listApplications request example', (done) => {
    consoleLogMock.mockImplementation((output) => {
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      done(output);
    });

    // begin-list_applications

    const params = {
      instanceId: instanceGuid,
    };

    ibmAnalyticsEngineApiService
      .listApplications(params)
      .then((res) => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch((err) => {
        console.warn(err);
      });

    // end-list_applications
  });
  test('getApplication request example', (done) => {
    consoleLogMock.mockImplementation((output) => {
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      done(output);
    });

    // begin-get_application

    const params = {
      instanceId: instanceGuid,
      applicationId: applicationId,
    };

    ibmAnalyticsEngineApiService
      .getApplication(params)
      .then((res) => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch((err) => {
        console.warn(err);
      });

    // end-get_application
  });
  test('getApplicationState request example', (done) => {
    consoleLogMock.mockImplementation((output) => {
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      done(output);
    });

    // begin-get_application_state

    const params = {
      instanceId: instanceGuid,
      applicationId: applicationId,
    };

    ibmAnalyticsEngineApiService
      .getApplicationState(params)
      .then((res) => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch((err) => {
        console.warn(err);
      });

    // end-get_application_state
  });
  test('deleteApplication request example', (done) => {
    consoleLogMock.mockImplementation((output) => {
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      done(output);
    });

    // begin-delete_application

    const params = {
      instanceId: instanceGuid,
      applicationId: applicationId,
    };

    ibmAnalyticsEngineApiService
      .deleteApplication(params)
      .then((res) => {
        done();
      })
      .catch((err) => {
        console.warn(err);
      });

    // end-delete_application
  });
});
