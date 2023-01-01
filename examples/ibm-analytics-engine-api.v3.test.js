/**
 * @jest-environment node
 */
/**
 * (C) Copyright IBM Corp. 2023.
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
const configFile = 'ibm_analytics_engine_api_v3.env';

const describe = authHelper.prepareTests(configFile);

// Save original console.log
const originalLog = console.log;
const originalWarn = console.warn;

// Mocks for console.log and console.warn
const consoleLogMock = jest.spyOn(console, 'log');
const consoleWarnMock = jest.spyOn(console, 'warn');

describe('IbmAnalyticsEngineApiV3', () => {
  // Service instance
  let ibmAnalyticsEngineApiService;

  // To access additional configuration values, uncomment this line and extract the values from config
  // const config = readExternalSources(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME);

  test('Initialize services', async () => {
    // begin-common

    ibmAnalyticsEngineApiService = IbmAnalyticsEngineApiV3.newInstance();

    // end-common
  });

  test('getInstance request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getInstance() result:');
    // begin-get_instance

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.getInstance(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_instance
  });

  test('getInstanceState request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getInstanceState() result:');
    // begin-get_instance_state

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.getInstanceState(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_instance_state
  });

  test('setInstanceHome request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('setInstanceHome() result:');
    // begin-set_instance_home

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
      newHmacAccessKey: 'b9****************************4b',
      newHmacSecretKey: 'fa********************************************8a',
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.setInstanceHome(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-set_instance_home
  });

  test('getInstanceDefaultConfigs request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getInstanceDefaultConfigs() result:');
    // begin-get_instance_default_configs

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.getInstanceDefaultConfigs(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_instance_default_configs
  });

  test('replaceInstanceDefaultConfigs request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('replaceInstanceDefaultConfigs() result:');
    // begin-replace_instance_default_configs

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
      body: {
        'spark.driver.memory': '8G',
        'spark.driver.cores': '2',
      },
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.replaceInstanceDefaultConfigs(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-replace_instance_default_configs
  });

  test('updateInstanceDefaultConfigs request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('updateInstanceDefaultConfigs() result:');
    // begin-update_instance_default_configs

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
      body: {
        'ae.spark.history-server.cores': '1',
        'ae.spark.history-server.memory': '4G',
      },
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.updateInstanceDefaultConfigs(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-update_instance_default_configs
  });

  test('getInstanceDefaultRuntime request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getInstanceDefaultRuntime() result:');
    // begin-get_instance_default_runtime

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.getInstanceDefaultRuntime(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_instance_default_runtime
  });

  test('replaceInstanceDefaultRuntime request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('replaceInstanceDefaultRuntime() result:');
    // begin-replace_instance_default_runtime

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
      sparkVersion: '3.3',
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.replaceInstanceDefaultRuntime(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-replace_instance_default_runtime
  });

  test('createApplication request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('createApplication() result:');
    // begin-create_application

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
      applicationDetails: {
        application: '/opt/ibm/spark/examples/src/main/python/wordcount.py',
        arguments: ['/opt/ibm/spark/examples/src/main/resources/people.txt'],
      },
      runtime: {
        spark_version: '3.1',
      },
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.createApplication(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-create_application
  });

  test('listApplications request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listApplications() result:');
    // begin-list_applications

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
      state: ['accepted', 'running', 'finished', 'failed'],
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.listApplications(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_applications
  });

  test('getApplication request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getApplication() result:');
    // begin-get_application

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
      applicationId: 'db933645-0b68-4dcb-80d8-7b71a6c8e542',
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.getApplication(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_application
  });

  test('getApplicationState request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getApplicationState() result:');
    // begin-get_application_state

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
      applicationId: 'db933645-0b68-4dcb-80d8-7b71a6c8e542',
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.getApplicationState(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_application_state
  });

  test('getCurrentResourceConsumption request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getCurrentResourceConsumption() result:');
    // begin-get_current_resource_consumption

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.getCurrentResourceConsumption(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_current_resource_consumption
  });

  test('getResourceConsumptionLimits request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getResourceConsumptionLimits() result:');
    // begin-get_resource_consumption_limits

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.getResourceConsumptionLimits(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_resource_consumption_limits
  });

  test('replaceLogForwardingConfig request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('replaceLogForwardingConfig() result:');
    // begin-replace_log_forwarding_config

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
      enabled: true,
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.replaceLogForwardingConfig(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-replace_log_forwarding_config
  });

  test('getLogForwardingConfig request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getLogForwardingConfig() result:');
    // begin-get_log_forwarding_config

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.getLogForwardingConfig(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_log_forwarding_config
  });

  test('configurePlatformLogging request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('configurePlatformLogging() result:');
    // begin-configure_platform_logging

    const params = {
      instanceGuid: 'dc0e9889-eab2-4t9e-9441-566209499546',
      enable: true,
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.configurePlatformLogging(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-configure_platform_logging
  });

  test('getLoggingConfiguration request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getLoggingConfiguration() result:');
    // begin-get_logging_configuration

    const params = {
      instanceGuid: 'dc0e9889-eab2-4t9e-9441-566209499546',
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.getLoggingConfiguration(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_logging_configuration
  });

  test('startSparkHistoryServer request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('startSparkHistoryServer() result:');
    // begin-start_spark_history_server

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.startSparkHistoryServer(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-start_spark_history_server
  });

  test('getSparkHistoryServer request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getSparkHistoryServer() result:');
    // begin-get_spark_history_server

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
    };

    let res;
    try {
      res = await ibmAnalyticsEngineApiService.getSparkHistoryServer(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_spark_history_server
  });

  test('stopSparkHistoryServer request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    // begin-stop_spark_history_server

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
    };

    try {
      await ibmAnalyticsEngineApiService.stopSparkHistoryServer(params);
    } catch (err) {
      console.warn(err);
    }

    // end-stop_spark_history_server
  });

  test('deleteApplication request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    // begin-delete_application

    const params = {
      instanceId: 'dc0e9889-eab2-4t9e-9441-566209499546',
      applicationId: 'db933645-0b68-4dcb-80d8-7b71a6c8e542',
    };

    try {
      await ibmAnalyticsEngineApiService.deleteApplication(params);
    } catch (err) {
      console.warn(err);
    }

    // end-delete_application
  });
});
