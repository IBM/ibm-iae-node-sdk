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

const { readExternalSources } = require('ibm-cloud-sdk-core');
const IbmAnalyticsEngineApiV3 = require('../../dist/ibm-analytics-engine-api/v3');
const authHelper = require('../resources/auth-helper.js');

// testcase timeout value (200s).
const timeout = 200000;

// Location of our config file.
const configFile = 'ibm_analytics_engine_api_v3.env';

const describe = authHelper.prepareTests(configFile);

describe('IbmAnalyticsEngineApiV3_integration', () => {
  jest.setTimeout(timeout);

  // Service instance
  let ibmAnalyticsEngineApiService;

  test('Initialise service', async () => {
    ibmAnalyticsEngineApiService = IbmAnalyticsEngineApiV3.newInstance();

    expect(ibmAnalyticsEngineApiService).not.toBeNull();

    const config = readExternalSources(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME);
    expect(config).not.toBeNull();

    ibmAnalyticsEngineApiService.enableRetries();
  });

  test('getInstance()', async () => {
    const params = {
      instanceId: 'e64c907a-e82f-46fd-addc-ccfafbd28b09',
    };

    const res = await ibmAnalyticsEngineApiService.getInstance(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getInstanceState()', async () => {
    const params = {
      instanceId: 'e64c907a-e82f-46fd-addc-ccfafbd28b09',
    };

    const res = await ibmAnalyticsEngineApiService.getInstanceState(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('setInstanceHome()', async () => {
    const params = {
      instanceId: 'e64c907a-e82f-46fd-addc-ccfafbd28b09',
      newInstanceId: 'testString',
      newProvider: 'ibm-cos',
      newType: 'objectstore',
      newRegion: 'us-south',
      newEndpoint: 's3.direct.us-south.cloud-object-storage.appdomain.cloud',
      newHmacAccessKey: '821**********0ae',
      newHmacSecretKey: '03e****************4fc3',
    };

    const res = await ibmAnalyticsEngineApiService.setInstanceHome(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getInstanceDefaultConfigs()', async () => {
    const params = {
      instanceId: 'e64c907a-e82f-46fd-addc-ccfafbd28b09',
    };

    const res = await ibmAnalyticsEngineApiService.getInstanceDefaultConfigs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('replaceInstanceDefaultConfigs()', async () => {
    const params = {
      instanceId: 'e64c907a-e82f-46fd-addc-ccfafbd28b09',
      body: { 'key1': 'testString' },
    };

    const res = await ibmAnalyticsEngineApiService.replaceInstanceDefaultConfigs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('updateInstanceDefaultConfigs()', async () => {
    const params = {
      instanceId: 'e64c907a-e82f-46fd-addc-ccfafbd28b09',
      body: { 'key1': 'testString' },
    };

    const res = await ibmAnalyticsEngineApiService.updateInstanceDefaultConfigs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('createApplication()', async () => {
    // Request models needed by this operation.

    // ApplicationRequestApplicationDetails
    const applicationRequestApplicationDetailsModel = {
      application: 'cos://bucket_name.my_cos/my_spark_app.py',
      jars: 'cos://cloud-object-storage/jars/tests.jar',
      packages: 'testString',
      repositories: 'testString',
      files: 'testString',
      archives: 'testString',
      name: 'spark-app',
      class: 'com.company.path.ClassName',
      arguments: ['[arg1, arg2, arg3]'],
      conf: { 'spark.driver.cores': '1', 'spark.driver.memory': '4G' },
      env: { SPARK_ENV_LOADED: '2' },
    };

    const params = {
      instanceId: 'e64c907a-e82f-46fd-addc-ccfafbd28b09',
      applicationDetails: applicationRequestApplicationDetailsModel,
    };

    const res = await ibmAnalyticsEngineApiService.createApplication(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
  });
  test('listApplications()', async () => {
    const params = {
      instanceId: 'e64c907a-e82f-46fd-addc-ccfafbd28b09',
    };

    const res = await ibmAnalyticsEngineApiService.listApplications(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getApplication()', async () => {
    const params = {
      instanceId: 'e64c907a-e82f-46fd-addc-ccfafbd28b09',
      applicationId: 'ff48cc19-0e7e-4627-aac6-0b4ad080397b',
    };

    const res = await ibmAnalyticsEngineApiService.getApplication(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getApplicationState()', async () => {
    const params = {
      instanceId: 'e64c907a-e82f-46fd-addc-ccfafbd28b09',
      applicationId: 'ff48cc19-0e7e-4627-aac6-0b4ad080397b',
    };

    const res = await ibmAnalyticsEngineApiService.getApplicationState(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getCurrentResourceConsumption()', async () => {
    const params = {
      instanceId: 'e64c907a-e82f-46fd-addc-ccfafbd28b09',
    };

    const res = await ibmAnalyticsEngineApiService.getCurrentResourceConsumption(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('replaceLogForwardingConfig()', async () => {
    const params = {
      instanceId: 'e64c907a-e82f-46fd-addc-ccfafbd28b09',
      enabled: true,
      sources: ['spark-driver', 'spark-executor'],
      tags: ['<tag_1>', '<tag_2>', '<tag_n'],
    };

    const res = await ibmAnalyticsEngineApiService.replaceLogForwardingConfig(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getLogForwardingConfig()', async () => {
    const params = {
      instanceId: 'e64c907a-e82f-46fd-addc-ccfafbd28b09',
    };

    const res = await ibmAnalyticsEngineApiService.getLogForwardingConfig(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('configurePlatformLogging()', async () => {
    const params = {
      instanceGuid: 'e64c907a-e82f-46fd-addc-ccfafbd28b09',
      enable: true,
    };

    const res = await ibmAnalyticsEngineApiService.configurePlatformLogging(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });
  test('getLoggingConfiguration()', async () => {
    const params = {
      instanceGuid: 'e64c907a-e82f-46fd-addc-ccfafbd28b09',
    };

    const res = await ibmAnalyticsEngineApiService.getLoggingConfiguration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('deleteApplication()', async () => {
    const params = {
      instanceId: 'e64c907a-e82f-46fd-addc-ccfafbd28b09',
      applicationId: 'ff48cc19-0e7e-4627-aac6-0b4ad080397b',
    };

    const res = await ibmAnalyticsEngineApiService.deleteApplication(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });
});
