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
const { IamAuthenticator } = require('../../dist/auth');

// testcase timeout value (200s).
const timeout = 200000;

// Location of our config file.
const configFile = 'ibm_analytics_engine_api_v3.env';

const describe = authHelper.prepareTests(configFile);

describe('IbmAnalyticsEngineApiV3_integration', () => {

  const sdkOptions = {};

  let instanceGuid;
  let instanceGuidWithoutInstanceHome;
  let hmacAccessKey;
  let hmacSecretKey;

  // After creating an application via sdk, store the application id in this variable.
  // Use the application id for other application sdk tests.
  let applicationId = '';

  beforeAll(() => {
    const config = readExternalSources(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME);

    expect(config).not.toBeNull();
    let iamUrl = config.authUrl || "https://iam.cloud.ibm.com"
    sdkOptions.authenticator = new IamAuthenticator({ apikey: config.apikey, url: iamUrl });

    instanceGuid = config.instanceGuid;
    instanceGuidWithoutInstanceHome = config.instanceGuidWoInstanceHome;
    hmacAccessKey = config.hmacAccessKey;
    hmacSecretKey = config.hmacSecretKey;
  })

  jest.setTimeout(timeout);

  // Service instance
  let ibmAnalyticsEngineApiService;

  test('Initialise service', async () => {
    //Note: config is loaded in beforeAll

    //Create sdk object based on parameters provided in configuration file / env.
    ibmAnalyticsEngineApiService = IbmAnalyticsEngineApiV3.newInstance(sdkOptions);

    expect(ibmAnalyticsEngineApiService).not.toBeNull(); 

    ibmAnalyticsEngineApiService.enableRetries();
  });

  test('getInstance()', async () => {
    const params = {
      instanceId: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.getInstance(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getInstanceState()', async () => {
    const params = {
      instanceId: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.getInstanceState(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('setInstanceHome()', async () => {
    const params = {
      instanceId: instanceGuidWithoutInstanceHome,
      newInstanceId: 'testString',
      newProvider: 'ibm-cos',
      newType: 'objectstore',
      newRegion: 'us-south',
      newEndpoint: 's3.direct.us-south.cloud-object-storage.appdomain.cloud',
      newHmacAccessKey: hmacAccessKey,
      newHmacSecretKey: hmacSecretKey,
    };

    const res = await ibmAnalyticsEngineApiService.setInstanceHome(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getInstanceDefaultConfigs()', async () => {
    const params = {
      instanceId: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.getInstanceDefaultConfigs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('replaceInstanceDefaultConfigs()', async () => {
    const params = {
      instanceId: instanceGuid,
      body: { 'key1': 'testString' },
    };

    const res = await ibmAnalyticsEngineApiService.replaceInstanceDefaultConfigs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('updateInstanceDefaultConfigs()', async () => {
    const params = {
      instanceId: instanceGuid,
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
      application: '/opt/ibm/spark/examples/src/main/python/wordcount.py',
      arguments: ['/opt/ibm/spark/examples/src/main/resources/people.txt'],
    };

    const params = {
      instanceId: instanceGuid,
      applicationDetails: applicationRequestApplicationDetailsModel,
    };

    const res = await ibmAnalyticsEngineApiService.createApplication(params);
    //Store applicationId for other application based tests below.
    applicationId = res.result.id; 
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
  });
  test('listApplications()', async () => {
    const params = {
      instanceId: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.listApplications(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getApplication()', async () => {
    const params = {
      instanceId: instanceGuid,
      applicationId: applicationId,
    };

    const res = await ibmAnalyticsEngineApiService.getApplication(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getApplicationState()', async () => {
    const params = {
      instanceId: instanceGuid,
      applicationId: applicationId,
    };

    const res = await ibmAnalyticsEngineApiService.getApplicationState(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getCurrentResourceConsumption()', async () => {
    const params = {
      instanceId: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.getCurrentResourceConsumption(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('replaceLogForwardingConfig()', async () => {
    const params = {
      instanceId: instanceGuid,
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
      instanceId: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.getLogForwardingConfig(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('configurePlatformLogging()', async () => {
    const params = {
      instanceGuid: instanceGuid,
      enable: true,
    };

    const res = await ibmAnalyticsEngineApiService.configurePlatformLogging(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });
  test('getLoggingConfiguration()', async () => {
    const params = {
      instanceGuid: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.getLoggingConfiguration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('deleteApplication()', async () => {
    const params = {
      instanceId: instanceGuid,
      applicationId: applicationId,
    };

    const res = await ibmAnalyticsEngineApiService.deleteApplication(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });
});
