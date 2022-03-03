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

//!!! Start of custom content to be copied !!!
// const authHelper = require('../resources/auth-helper.js');
const authHelper = require('../test/resources/auth.js');
const { IamAuthenticator } = require('../dist/auth');
const timeout = 200000;
// !!! End of custom content to be copied !!!

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
//!!! Start of custom content to be copied !!!
// const configFile = 'ibm_analytics_engine_api_v3.env';

// const describe = authHelper.prepareTests(configFile);
// !!! End of custom content to be copied !!!

// Save original console.log
const originalLog = console.log;
const originalWarn = console.warn;    

// Mocks for console.log and console.warn
const consoleLogMock = jest.spyOn(console, 'log');
const consoleWarnMock = jest.spyOn(console, 'warn');

describe('IbmAnalyticsEngineApiV3', () => {
  // To access additional configuration values, uncomment this line and extract the values from config
  // const config = readExternalSources(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME);

  //!!! Start of custom content to be copied !!!
  const options = authHelper.ibm_analytics_engine_api_v3;
  options.authenticator = new IamAuthenticator({ apikey: options.apikey, url: options.apiAuthUrl });
  const instanceGuid = options.instance_guid_example;
  const instanceIdInstanceHome = options.instance_guid_example_instance_home;
  const hmacAccessKey = options.newHmacAccessKey;
  const hmacSecretKey = options.newHmacSecretKey;
  let applicationId = '';
  jest.setTimeout(timeout);
  // !!! End of custom content to be copied !!!
  let ibmAnalyticsEngineApiService;

  test('Initialize services', async () => {
  // begin-common
  //!!! Start of custom content to be copied !!!
  ibmAnalyticsEngineApiService = IbmAnalyticsEngineApiV3.newInstance(options);
  expect(ibmAnalyticsEngineApiService).not.toBeNull();
  // !!! End of custom content to be copied !!!
  // end-common
  });
  
  //!!! Start of custom content to be copied !!!
  test('getInstance request example', (done) => {
  // !!! End of custom content to be copied !!!
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });

    originalLog('getInstance() result:');
    // begin-get_instance

    const params = {
      instanceId: instanceGuid,
    };
    //!!! Start of custom content to be copied !!!
    ibmAnalyticsEngineApiService
      .getInstance(params)
      .then((res)=>{
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch((err) => {
        console.warn(err);
      }); 
    // let res;
    // try {
    //   res = await ibmAnalyticsEngineApiService.getInstance(params);
    //   console.log(JSON.stringify(res.result, null, 2));
    // } catch (err) {
    //   console.warn(err);
    // }
    // !!! End of custom content to be copied !!!
    // end-get_instance
  });

  //!!! Start of custom content to be copied !!!
    test('getInstanceState request example', (done) => {
  // !!! End of custom content to be copied !!!
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });

    originalLog('getInstanceState() result:');
    // begin-get_instance_state

    const params = {
      instanceId: instanceGuid,
    };

    //!!! Start of custom content to be copied !!!
    ibmAnalyticsEngineApiService
     .getInstanceState(params)
     .then((res)=>{
        console.log(JSON.stringify(res.result, null, 2));
      })
     .catch((err)=>{
        console.warn(err);
      });
    // let res;
    // try {
    //   res = await ibmAnalyticsEngineApiService.getInstanceState(params);
    //   console.log(JSON.stringify(res.result, null, 2));
    // } catch (err) {
    //   console.warn(err);
    // }
    // !!! End of custom content to be copied !!!
    // end-get_instance_state
  });

  //!!! Start of custom content to be copied !!!
  test('createInstanceHome request example', (done) => {
  // !!! End of custom content to be copied !!!  
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });

    originalLog('createInstanceHome() result:');
    // begin-create_instance_home
    //!!! Start of custom content to be copied !!!
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
    // !!! End of custom content to be copied !!!
    //!!! Start of custom content to be copied !!!
    ibmAnalyticsEngineApiService
    .createInstanceHome(params)
    .then((res)=>{
      console.log(JSON.stringify(res.result, null, 2));
    })
    .catch((err)=>{
      console.warn(err);
    })
    // let res;
    // try {
    //   res = await ibmAnalyticsEngineApiService.createInstanceHome(params);
    //   console.log(JSON.stringify(res.result, null, 2));
    // } catch (err) {
    //   console.warn(err);
    // }
    // !!! End of custom content to be copied !!!
    // end-create_instance_home
  });

  //!!! Start of custom content to be copied !!!
  test('createApplication request example', (done) => {
  // !!! End of custom content to be copied !!!
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });

    originalLog('createApplication() result:');
    // begin-create_application
     //!!! Start of custom content to be copied !!!
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
    // let res;
    // try {
    //   res = await ibmAnalyticsEngineApiService.createApplication(params);
    //   console.log(JSON.stringify(res.result, null, 2));
    // } catch (err) {
    //   console.warn(err);
    // }
    // !!! End of custom content to be copied !!!
    

    // end-create_application
  });

  //!!! Start of custom content to be copied !!!
  test('listApplications request example', (done) => {
  // !!! End of custom content to be copied !!!  
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });

    originalLog('listApplications() result:');
    // begin-list_applications

    const params = {
      instanceId: instanceGuid,
    };

    //!!! Start of custom content to be copied !!!
    ibmAnalyticsEngineApiService.
      listApplications(params)
      .then((res) => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch((err) => {
        console.warn(err);
      });
    // let res;
    // try {
    //   res = await ibmAnalyticsEngineApiService.listApplications(params);
    //   console.log(JSON.stringify(res.result, null, 2));
    // } catch (err) {
    //   console.warn(err);
    // }
    // !!! End of custom content to be copied !!!
    // end-list_applications
  });

  //!!! Start of custom content to be copied !!!
  test('getApplication request example', (done) => {
  // !!! End of custom content to be copied !!!  
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });

    originalLog('getApplication() result:');
    // begin-get_application

    const params = {
      instanceId: instanceGuid,
      applicationId: applicationId,
    };
    //!!! Start of custom content to be copied !!!
    ibmAnalyticsEngineApiService
    .getApplication(params)
    .then((res) => {
      console.log(JSON.stringify(res.result, null, 2));
    })
    .catch((err) => {
      console.warn(err);
    });

    // let res;
    // try {
    //   res = await ibmAnalyticsEngineApiService.getApplication(params);
    //   console.log(JSON.stringify(res.result, null, 2));
    // } catch (err) {
    //   console.warn(err);
    // }
    // !!! End of custom content to be copied !!!
    // end-get_application
  });

  //!!! Start of custom content to be copied !!!
  test('getApplicationState request example', (done) => {
  // !!! End of custom content to be copied !!!
  consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });

    originalLog('getApplicationState() result:');
    // begin-get_application_state

    const params = {
      instanceId: instanceGuid,
      applicationId: applicationId,
    };
    //!!! Start of custom content to be copied !!!
    ibmAnalyticsEngineApiService
    .getApplicationState(params)
    .then((res) => {
      console.log(JSON.stringify(res.result, null, 2));
    })
    .catch((err) => {
      console.warn(err);
    });
    // let res;
    // try {
    //   res = await ibmAnalyticsEngineApiService.getApplicationState(params);
    //   console.log(JSON.stringify(res.result, null, 2));
    // } catch (err) {
    //   console.warn(err);
    // }
    // !!! End of custom content to be copied !!!
    // end-get_application_state
  });

  //!!! Start of custom content to be copied !!!
  test('configurePlatformLogging request example', (done) => {
  // !!! End of custom content to be copied !!!  
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });

    originalLog('configurePlatformLogging() result:');
    // begin-configure_platform_logging

    const params = {
      instanceGuid: instanceGuid,
      enable: true,
    };
    //!!! Start of custom content to be copied !!!
    ibmAnalyticsEngineApiService
    .configurePlatformLogging(params)
    .then((res) => {
      console.log(res);
      console.log(JSON.stringify(res.result, null, 2));
    })
    .catch((err) => {
      console.warn(err);
    });
    // let res;
    // try {
    //   res = await ibmAnalyticsEngineApiService.configurePlatformLogging(params);
    //   console.log(JSON.stringify(res.result, null, 2));
    // } catch (err) {
    //   console.warn(err);
    // }
    // !!! End of custom content to be copied !!!
    // end-configure_platform_logging
  });

  //!!! Start of custom content to be copied !!!
  test('getLoggingConfiguration request example', (done) => {
  // !!! End of custom content to be copied !!! 
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });

    originalLog('getLoggingConfiguration() result:');
    // begin-get_logging_configuration

    const params = {
      instanceGuid: instanceGuid,
    };
    //!!! Start of custom content to be copied !!!
    ibmAnalyticsEngineApiService
    .getLoggingConfiguration(params)
    .then((res) => {
      console.log(JSON.stringify(res.result, null, 2));
    })
    .catch((err) => {
      console.warn(err);
    });
    // let res;
    // try {
    //   res = await ibmAnalyticsEngineApiService.getLoggingConfiguration(params);
    //   console.log(JSON.stringify(res.result, null, 2));
    // } catch (err) {
    //   console.warn(err);
    // }
    // end-configure_platform_logging
    // end-get_logging_configuration
  });

  // //!!! Start of custom content to be copied !!!
  // test('startSparkHistoryServer request example', (done) => {
  // // !!! End of custom content to be copied !!!  
  //   consoleLogMock.mockImplementation((output) => {
  //     originalLog(output);
  //     //!!! Start of custom content to be copied !!!
  //     done();
  //     // !!! End of custom content to be copied !!!

  //   });
  //   consoleWarnMock.mockImplementation((output) => {
  //     // if an error occurs, display the message and then fail the test
  //     originalWarn(output);
  //     expect(true).toBeFalsy();
  //     //!!! Start of custom content to be copied !!!
  //     done();
  //     // !!! End of custom content to be copied !!!
  //   });

  //   originalLog('startSparkHistoryServer() result:');
  //   // begin-start_spark_history_server

  //   const params = {
  //     instanceId: instanceGuid,
  //   };
  //   //!!! Start of custom content to be copied !!!
  //   ibmAnalyticsEngineApiService
  //   .startSparkHistoryServer(params)
  //   .then((res) => {
  //     console.log(JSON.stringify(res.result, null, 2));
  //   })
  //   .catch((err) => {
  //     console.warn(err);
  //   });
  //   // let res;
  //   // try {
  //   //   res = await ibmAnalyticsEngineApiService.startSparkHistoryServer(params);
  //   //   console.log(JSON.stringify(res.result, null, 2));
  //   // } catch (err) {
  //   //   console.warn(err);
  //   // }
  //   // !!! End of custom content to be copied !!!
  //   // end-start_spark_history_server
  // });

  // //!!! Start of custom content to be copied !!!
  // test('getSparkHistoryServer request example', (done) => {
  // // !!! End of custom content to be copied !!!  
  //   consoleLogMock.mockImplementation((output) => {
  //     originalLog(output);
  //     //!!! Start of custom content to be copied !!!
  //     done();
  //     // !!! End of custom content to be copied !!!
  //   });
  //   consoleWarnMock.mockImplementation((output) => {
  //     // if an error occurs, display the message and then fail the test
  //     originalWarn(output);
  //     expect(true).toBeFalsy();
  //     //!!! Start of custom content to be copied !!!
  //     done();
  //     // !!! End of custom content to be copied !!!
  //   });

  //   originalLog('getSparkHistoryServer() result:');
  //   // begin-get_spark_history_server

  //   const params = {
  //     instanceId: instanceGuid,
  //   };
  //   //!!! Start of custom content to be copied !!!
  //   ibmAnalyticsEngineApiService
  //   .getSparkHistoryServer(params)
  //   .then((res) => {
  //     console.log(JSON.stringify(res.result, null, 2));
  //   })
  //   .catch((err) => {
  //     console.warn(err);
  //   });
  //   // let res;
  //   // try {
  //   //   res = await ibmAnalyticsEngineApiService.getSparkHistoryServer(params);
  //   //   console.log(JSON.stringify(res.result, null, 2));
  //   // } catch (err) {
  //   //   console.warn(err);
  //   // }
  //   // !!! End of custom content to be copied !!!
  //   // end-get_spark_history_server
  // });

  // //!!! Start of custom content to be copied !!!
  // test('stopSparkHistoryServer request example', (done) => {
  // // !!! End of custom content to be copied !!!  
  //   consoleLogMock.mockImplementation((output) => {
  //     originalLog(output);
  //     //!!! Start of custom content to be copied !!!
  //     done();
  //     // !!! End of custom content to be copied !!!
  //   });
  //   consoleWarnMock.mockImplementation((output) => {
  //     // if an error occurs, display the message and then fail the test
  //     originalWarn(output);
  //     expect(true).toBeFalsy();
  //     //!!! Start of custom content to be copied !!!
  //     done();
  //     // !!! End of custom content to be copied !!!
  //   });

  //   // begin-stop_spark_history_server

  //   const params = {
  //     instanceId: instanceGuid,
  //   };
  //    //!!! Start of custom content to be copied !!!
  //   ibmAnalyticsEngineApiService
  //   .stopSparkHistoryServer(params)
  //   .then((res) => {
  //     console.log(JSON.stringify(res.result, null, 2));
  //   })
  //   .catch((err) => {
  //     console.warn(err);
  //   });
  //   // try {
  //   //   await ibmAnalyticsEngineApiService.stopSparkHistoryServer(params);
  //   // } catch (err) {
  //   //   console.warn(err);
  //   // }
  //   // !!! End of custom content to be copied !!!
  //   // end-stop_spark_history_server
  // });

  //!!! Start of custom content to be copied !!!
  test('deleteLoggingConfiguration request example', (done) => {
  // !!! End of custom content to be copied !!!  
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });

    // begin-delete_logging_configuration

    const params = {
      instanceGuid: instanceGuid,
    };
    //!!! Start of custom content to be copied !!!
    ibmAnalyticsEngineApiService
    .deleteLoggingConfiguration(params)
    .then((res) => {
      console.log(JSON.stringify(res.result, null, 2));
    })
    .catch((err) => {
      console.warn(err);
    });
    // try {
    //   await ibmAnalyticsEngineApiService.deleteLoggingConfiguration(params);
    // } catch (err) {
    //   console.warn(err);
    // }
     // !!! End of custom content to be copied !!!
    // end-delete_logging_configuration
  });

  //!!! Start of custom content to be copied !!!
  test('deleteApplication request example', (done) => {
  // !!! End of custom content to be copied !!!  
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
      //!!! Start of custom content to be copied !!!
      done();
      // !!! End of custom content to be copied !!!
    });

    // begin-delete_application

    const params = {
      instanceId: instanceGuid,
      applicationId: applicationId,
    };
    //!!! Start of custom content to be copied !!!
    ibmAnalyticsEngineApiService
    .deleteApplication(params)
    .then((res) => {
      console.log(JSON.stringify(res.result, null, 2));
    })
    .catch((err) => {
      console.warn(err);
    });
    // try {
    //   await ibmAnalyticsEngineApiService.deleteApplication(params);
    // } catch (err) {
    //   console.warn(err);
    // }
    // !!! End of custom content to be copied !!!
    // end-delete_application
  });
});
