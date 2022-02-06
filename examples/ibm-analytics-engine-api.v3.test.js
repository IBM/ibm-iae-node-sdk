/**
 * @jest-environment node
 */
/**
 * (C) Copyright IBM Corp. 2022.
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
// const authHelper = require('../test/resources/auth-helper.js');
const authHelper = require('../test/resources/auth.js');
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
const originalWarn = console.warn;    

// Mocks for console.log and console.warn
const consoleLogMock = jest.spyOn(console, 'log');
const consoleWarnMock = jest.spyOn(console, 'warn');

describe('IbmAnalyticsEngineApiV3', () => {
  // To access additional configuration values, uncomment this line and extract the values from config
  // const config = readExternalSources(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME);
  const options = authHelper.ibm_analytics_engine_api_v3;
  options.authenticator = new IamAuthenticator({ apikey: options.apikey });
  const instanceGuid = options.instance_guid_example;
  const instanceIdInstanceHome = options.instance_guid_example_instance_home;
  const hmacAccessKey = options.newHmacAccessKey;
  const hmacSecretKey = options.newHmacSecretKey;
  let applicationId = '';

  let ibmAnalyticsEngineApiService;
  jest.setTimeout(timeout);
  test('Initialize services', async () => {
  // begin-common

    ibmAnalyticsEngineApiService = IbmAnalyticsEngineApiV3.newInstance(options);
    expect(ibmAnalyticsEngineApiService).not.toBeNull();

  // end-common
  });
  

  test('getInstance request example', (done) => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      done();
    });

    originalLog('getInstance() result:');
    // begin-get_instance

    const params = {
      instanceId: instanceGuid,
    };

    ibmAnalyticsEngineApiService
      .getInstance(params)
      .then((res)=>{
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch((err) => {
        console.warn(err);
      });  

    // end-get_instance
  });

  test('getInstanceState request example', (done) => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      done();   
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      done();
    });

    originalLog('getInstanceState() result:');
    // begin-get_instance_state

    const params = {
      instanceId: instanceGuid,
    };

    ibmAnalyticsEngineApiService
     .getInstanceState(params)
     .then((res)=>{
        console.log(JSON.stringify(res.result, null, 2));
      })
     .catch((err)=>{
        console.warn(err);
      });

    // end-get_instance_state
  });

  test('createInstanceHome request example', (done) => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      done();
    });

    originalLog('createInstanceHome() result:');
    // begin-create_instance_home

    const params = {
      instanceId: instanceIdInstanceHome,
      newInstanceId: 'testString',
      newProvider: 'ibm-cos',
      newType: 'objectstore',
      newRegion: 'us-south',
      newEndpoint: 's3.direct.us-south.cloud-object-storage.appdomain.cloud',
      newHmacAccessKey: hmacAccessKey,
      newHmacSecretKey: hmacSecretKey,
    };

    ibmAnalyticsEngineApiService
  .createInstanceHome(params)
  .then((res)=>{
    console.log(JSON.stringify(res.result, null, 2));
  })
  .catch((err)=>{
    console.warn(err);
  })

    // end-create_instance_home
  });

  test('getDefaultConfigs request example', (done) => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      done();
    });

    // begin-get_default_configs

    const params = {
      instanceId: instanceGuid,
    };

    ibmAnalyticsEngineApiService
    .getDefaultConfigs(params)
    .then((res)=>{
      console.log(JSON.stringify(res.result, null, 2));
    })
    .catch((err)=>{
      console.warn(err);
    })

    // end-get_default_configs
  });

  test('updateDefaultConfigs request example', (done) => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      done();
    });

    // begin-update_default_configs

    const params = {
      instanceId: instanceGuid,
      body: { 'key1': 'value1' },
    };

    ibmAnalyticsEngineApiService
    .updateDefaultConfigs(params)
    .then((res)=>{
      console.log(JSON.stringify(res.result, null, 2));
    })
    .catch((err)=>{
      console.warn(err);
    })

    // end-update_default_configs
  });

  test('editDefaultConfigs request example', (done) => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      done();
    });

    // begin-edit_default_configs

    const params = {
      instanceId: instanceGuid,
      body: { 'key2': 'value2' },
    };

    ibmAnalyticsEngineApiService
    .editDefaultConfigs(params)
    .then((res)=>{
      console.log(JSON.stringify(res.result, null, 2));
    })
    .catch((err)=>{
      console.warn(err);
    })

    // end-edit_default_configs
  });

  test('createApplication request example', (done) => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      done();
    });

    originalLog('createApplication() result:');
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
      applicationId=res.result.id
      console.log(JSON.stringify(res.result, null, 2));
    })
    .catch ((err) => {
      console.warn(err);
    })

    // end-create_application
  });

  test('listApplications request example', (done) => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      done();
    });

    originalLog('listApplications() result:');
    // begin-list_applications

    const params = {
      instanceId: instanceGuid,
    };

    ibmAnalyticsEngineApiService.
      listApplications(params)
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
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      done();
    });

    originalLog('getApplication() result:');
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
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      done();
    });

    originalLog('getApplicationState() result:');
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

  test('enablePlatformLogging request example', (done) => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      done();
    });

    originalLog('enablePlatformLogging() result:');
    // begin-enable_platform_logging

    const params = {
      instanceGuid: instanceGuid,
      enable: true,
    };
    ibmAnalyticsEngineApiService
    .enablePlatformLogging(params)
    .then((res) => {
      console.log(res);
      console.log(JSON.stringify(res.result, null, 2));
    })
    .catch((err) => {
      console.warn(err);
    });

    // end-enable_platform_logging
  });

  test('disablePlatformLogging request example', (done) => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      done();
    });

    originalLog('disablePlatformLogging() result:');
    // begin-disable_platform_logging

    const params = {
      instanceGuid: instanceGuid,
      enable: false,
    };

    ibmAnalyticsEngineApiService
    .disablePlatformLogging(params)
    .then((res) => {
      console.log(JSON.stringify(res.result, null, 2));
    })
    .catch((err) => {
      console.warn(err);
    });

    // end-disable_platform_logging
  });

  test('getLoggingConfiguration request example', (done) => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      done();
    });

    originalLog('getLoggingConfiguration() result:');
    // begin-get_logging_configuration

    const params = {
      instanceGuid: instanceGuid,
    };

    ibmAnalyticsEngineApiService
    .getLoggingConfiguration(params)
    .then((res) => {
      console.log(JSON.stringify(res.result, null, 2));
    })
    .catch((err) => {
      console.warn(err);
    });

    // end-get_logging_configuration
  });

  test('deleteLoggingConfiguration request example', (done) => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      done();
    });

    // begin-delete_logging_configuration

    const params = {
      instanceGuid: instanceGuid,
    };

    ibmAnalyticsEngineApiService
    .deleteLoggingConfiguration(params)
    .then((res) => {
      console.log(JSON.stringify(res.result, null, 2));
    })
    .catch((err) => {
      console.warn(err);
    });

    // end-delete_logging_configuration
  });

  test('deleteApplication request example', (done) => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      done();
    });

    // begin-delete_application

    const params = {
      instanceId: instanceGuid,
      applicationId: applicationId,
    };

    ibmAnalyticsEngineApiService
    .deleteApplication(params)
    .then((res) => {
      console.log(JSON.stringify(res.result, null, 2));
    })
    .catch((err) => {
      console.warn(err);
    });

    // end-delete_application
  });
});
