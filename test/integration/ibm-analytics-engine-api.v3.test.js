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

const IbmAnalyticsEngineApiV3 = require('../../dist/ibm-analytics-engine-api/v3');
const { readExternalSources } = require('ibm-cloud-sdk-core');
const authHelper = require('../resources/auth-helper.js');
// const authHelper = require('../resources/auth.js');
const { IamAuthenticator } = require('../../dist/auth');
// testcase timeout value (200s).
const timeout = 200000;

// Location of our config file.
// const configFile = 'ibm_analytics_engine_api_v3.env';

// const describe = authHelper.prepareTests(configFile);

describe('IbmAnalyticsEngineApiV3_integration', () => {
  const options = authHelper.ibm_analytics_engine_api_v3;
  options.authenticator = new IamAuthenticator({ apikey: options.apikey });
  const instanceGuid = options.instance_guid;
  const instanceIdInstanceHome = options.instance_guid_instance_home;
  const hmacAccessKey = options.newHmacAccessKey;
  const hmacSecretKey = options.newHmacSecretKey;
  let applicationId = '';
  jest.setTimeout(timeout);

  let ibmAnalyticsEngineApiService;

  test('Initialise service', async () => {
    console.log('Initialise service');
    ibmAnalyticsEngineApiService = IbmAnalyticsEngineApiV3.newInstance(options);

    expect(ibmAnalyticsEngineApiService).not.toBeNull();

    const config = readExternalSources(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME);
    expect(config).not.toBeNull();

    // ibmAnalyticsEngineApiService.enableRetries();
  });

  test('getInstance()', async () => {
    console.log('getInstance()');
    const params = {
      instanceId: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.getInstance(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
    console.log(res);
    //
    // The following status codes aren't covered by tests.
    // Please provide integration tests for these too.
    //
    // 400
    // 401
    // 403
    // 404
    // 500
    //
  });
  test('getInstanceState()', async () => {
    console.log('getInstanceState()');
    const params = {
      instanceId: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.getInstanceState(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
    console.log(res);
    //
    // The following status codes aren't covered by tests.
    // Please provide integration tests for these too.
    //
    // 400
    // 401
    // 403
    // 404
    // 500
    //
  });
  test('createInstanceHome()', async () => {
    console.log('createInstanceHome()');
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

    const res = await ibmAnalyticsEngineApiService.createInstanceHome(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
    console.log(res);
    //
    // The following status codes aren't covered by tests.
    // Please provide integration tests for these too.
    //
    // 400
    // 401
    // 403
    // 404
    // 500
    //
  });
  test('getDefaultConfigs()', async () => {
    console.log('getDefaultConfigs()');
    const params = {
      instanceId: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.getDefaultConfigs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
    console.log(res);
    //
    // The following status codes aren't covered by tests.
    // Please provide integration tests for these too.
    //
    // 400
    // 401
    // 403
    // 404
    // 500
    //
  });
  test('updateDefaultConfigs()', async () => {
    console.log('updateDefaultConfigs()');
    const params = {
      instanceId: instanceGuid,
      body: { 'key1': 'value1' },
    };

    const res = await ibmAnalyticsEngineApiService.updateDefaultConfigs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
    console.log(res);
    //
    // The following status codes aren't covered by tests.
    // Please provide integration tests for these too.
    //
    // 400
    // 401
    // 403
    // 404
    // 500
    //
  });
  test('editDefaultConfigs()', async () => {
    console.log('editDefaultConfigs()');
    const params = {
      instanceId: instanceGuid,
      body: { 'key2': 'value2' },
    };

    const res = await ibmAnalyticsEngineApiService.editDefaultConfigs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
    console.log(res);
    //
    // The following status codes aren't covered by tests.
    // Please provide integration tests for these too.
    //
    // 400
    // 401
    // 403
    // 404
    // 500
    //
  });
  test('createApplication()', async () => {
    console.log('createApplication()');
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
    applicationId = res.result.id;
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
    console.log(res);
    //
    // The following status codes aren't covered by tests.
    // Please provide integration tests for these too.
    //
    // 400
    // 401
    // 403
    // 404
    // 500
    //
  });
  test('listApplications()', async () => {
    console.log('listApplications()');
    const params = {
      instanceId: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.listApplications(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
    console.log(res);
    //
    // The following status codes aren't covered by tests.
    // Please provide integration tests for these too.
    //
    // 400
    // 401
    // 403
    // 404
    // 500
    //
  });
  test('getApplication()', async () => {
    console.log('getApplication()');
    const params = {
      instanceId: instanceGuid,
      applicationId: applicationId,
    };

    const res = await ibmAnalyticsEngineApiService.getApplication(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
    console.log(res);
    //
    // The following status codes aren't covered by tests.
    // Please provide integration tests for these too.
    //
    // 400
    // 401
    // 403
    // 404
    // 500
    //
  });
  test('getApplicationState()', async () => {
    console.log('getApplicationState()');
    const params = {
      instanceId: instanceGuid,
      applicationId: applicationId,
    };

    const res = await ibmAnalyticsEngineApiService.getApplicationState(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
    console.log(res);
    //
    // The following status codes aren't covered by tests.
    // Please provide integration tests for these too.
    //
    // 400
    // 401
    // 403
    // 404
    // 500
    //
  });
  test('enablePlatformLogging()', async () => {
    console.log('enablePlatformLogging()');
    const params = {
      instanceGuid: instanceGuid,
      enable: true,
    };

    const res = await ibmAnalyticsEngineApiService.enablePlatformLogging(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
    console.log(res);
    //
    // The following status codes aren't covered by tests.
    // Please provide integration tests for these too.
    //
    // 400
    // 401
    // 403
    // 404
    // 500
    //
  });
  test('disablePlatformLogging()', async () => {
    console.log('disablePlatformLogging()');
    const params = {
      instanceGuid: instanceGuid,
      enable: false,
    };

    const res = await ibmAnalyticsEngineApiService.disablePlatformLogging(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
    console.log(res);
    //
    // The following status codes aren't covered by tests.
    // Please provide integration tests for these too.
    //
    // 400
    // 401
    // 403
    // 404
    // 500
    //
  });
  test('getLoggingConfiguration()', async () => {
    console.log('getLoggingConfiguration()');
    const params = {
      instanceGuid: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.getLoggingConfiguration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
    console.log(res);
    //
    // The following status codes aren't covered by tests.
    // Please provide integration tests for these too.
    //
    // 400
    // 401
    // 403
    // 404
    // 500
    //
  });
  test('deleteLoggingConfiguration()', async () => {
    console.log('deleteLoggingConfiguration()');
    const params = {
      instanceGuid: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.deleteLoggingConfiguration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
    console.log(res);
    //
    // The following status codes aren't covered by tests.
    // Please provide integration tests for these too.
    //
    // 400
    // 401
    // 403
    // 404
    // 500
    //
  });
  test('deleteApplication()', async () => {
    console.log('deleteApplication()');
    const params = {
      instanceId: instanceGuid,
      applicationId: applicationId,
    };

    const res = await ibmAnalyticsEngineApiService.deleteApplication(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
    console.log(res);
    //
    // The following status codes aren't covered by tests.
    // Please provide integration tests for these too.
    //
    // 400
    // 401
    // 403
    // 404
    // 500
    //
  });
});
