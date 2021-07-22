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
'use strict';

const IbmAnalyticsEngineApiV3 = require('../dist/ibm-analytics-engine-api/v3');
const { readExternalSources } = require('ibm-cloud-sdk-core');
const authHelper = require('../test/resources/auth-helper.js');

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
const configFile = 'ibm_analytics_engine_api_v3.env';

const describe = authHelper.prepareTests(configFile);

// Save original console.log and console.warn
const originalLog = console.log;
const originalWarn = console.warn;

// Mocks for console.log and console.warn
const consoleLogMock = jest.spyOn(console, 'log');
const consoleWarnMock = jest.spyOn(console, 'warn');

describe('IbmAnalyticsEngineApiV3', () => {

  // begin-common

  const ibmAnalyticsEngineApiService = IbmAnalyticsEngineApiV3.newInstance({});

  // end-common

  const config = readExternalSources(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME);

  test('getInstanceById request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-get_instance_by_id

    const params = {
      instanceId: 'testString',
    };

    ibmAnalyticsEngineApiService.getInstanceById(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-get_instance_by_id
  });
  test('createApplication request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-create_application

    const params = {
      instanceId: 'testString',
    };

    ibmAnalyticsEngineApiService.createApplication(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-create_application
  });
  test('getApplications request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-get_applications

    const params = {
      instanceId: 'testString',
    };

    ibmAnalyticsEngineApiService.getApplications(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-get_applications
  });
  test('getApplicationById request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-get_application_by_id

    const params = {
      instanceId: 'testString',
      applicationId: 'testString',
    };

    ibmAnalyticsEngineApiService.getApplicationById(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-get_application_by_id
  });
  test('getApplicationState request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-get_application_state

    const params = {
      instanceId: 'testString',
      applicationId: 'testString',
    };

    ibmAnalyticsEngineApiService.getApplicationState(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-get_application_state
  });
  test('deleteApplicationById request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-delete_application_by_id

    const params = {
      instanceId: 'testString',
      applicationId: 'testString',
    };

    ibmAnalyticsEngineApiService.deleteApplicationById(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-delete_application_by_id
  });
});
