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

// !!! Start of custom content to be copied !!!
// Replace auth-helper.js with auth.js
const authHelper = require('../resources/auth-helper.js');
const { IamAuthenticator } = require('../../dist/auth');
// !!! End of custom content to be copied !!!

// testcase timeout value (200s).
const timeout = 200000;

// !!! Start of custom content to be copied !!!
// Location of our config file.
// const configFile = 'ibm_analytics_engine_api_v3.env';

// const describe = authHelper.prepareTests(configFile);
// !!! End of custom content to be copied !!!

describe('IbmAnalyticsEngineApiV3_integration', () => {
  // !!! Start of custom content to be copied !!!
  const options = authHelper.ibm_analytics_engine_api_v3;
  options.authenticator = new IamAuthenticator({ apikey: options.apikey, url: options.apiAuthUrl });
  const instanceGuid = options.instance_guid;
  const instanceIdInstanceHome = options.instance_guid_instance_home;
  let applicationId = '';
  const hmacAccessKey = options.newHmacAccessKey;
  const hmacSecretKey = options.newHmacSecretKey;
  // !!! End of custom content to be copied !!!

  jest.setTimeout(timeout);

  let ibmAnalyticsEngineApiService;

  test('Initialise service', async () => {
    // !!! Start of custom content to be copied !!!
    ibmAnalyticsEngineApiService = IbmAnalyticsEngineApiV3.newInstance(options);
    // !!! End of custom content to be copied !!!
    expect(ibmAnalyticsEngineApiService).not.toBeNull();

    const config = readExternalSources(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME);
    expect(config).not.toBeNull();

    // ibmAnalyticsEngineApiService.enableRetries();
  });

  test('getInstance()', async () => {
    const params = {
      instanceId: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.getInstance(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();

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
    const params = {
      instanceId: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.getInstanceState(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();

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
    // Request models needed by this operation.

    // ApplicationRequestApplicationDetails
    const applicationRequestApplicationDetailsModel = {
      application: '/opt/ibm/spark/examples/src/main/python/wordcount.py',
      // jars: 'cos://cloud-object-storage/jars/tests.jar',
      // packages: 'testString',
      // repositories: 'testString',
      // files: 'testString',
      // archives: 'testString',
      // name: 'spark-app',
      // class: 'com.company.path.ClassName',
      arguments: ['/opt/ibm/spark/examples/src/main/resources/people.txt'],
      // conf: { 'spark.driver.cores': '1', 'spark.driver.memory': '4G' },
      // env: { SPARK_ENV_LOADED: '2' },
    };

    const params = {
      instanceId: instanceGuid,
      applicationDetails: applicationRequestApplicationDetailsModel,
    };

    const res = await ibmAnalyticsEngineApiService.createApplication(params);
    // !!! Start of custom content to be copied !!!
    applicationId = res.result.id;
    // !!! End of custom content to be copied !!!
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();

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
    const params = {
      instanceId: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.listApplications(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();

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
    const params = {
      instanceId: instanceGuid,
      applicationId: applicationId,
    };

    const res = await ibmAnalyticsEngineApiService.getApplication(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();

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
    const params = {
      instanceId: instanceGuid,
      applicationId: applicationId,
    };

    const res = await ibmAnalyticsEngineApiService.getApplicationState(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();

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
  test('configurePlatformLogging()', async () => {
    const params = {
      instanceGuid: instanceGuid,
      enable: true,
    };

    const res = await ibmAnalyticsEngineApiService.configurePlatformLogging(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();

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
    const params = {
      instanceGuid: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.getLoggingConfiguration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();

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
  test('startSparkHistoryServer()', async () => {
    const params = {
      instanceId: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.startSparkHistoryServer(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
    console.log('startSparkHistoryServer');
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
  test('getSparkHistoryServer()', async () => {
    const params = {
      instanceId: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.getSparkHistoryServer(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
    console.log('getSparkHistoryServer');
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
  test('stopSparkHistoryServer()', async () => {
    const params = {
      instanceId: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.stopSparkHistoryServer(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
    console.log('stopSparkHistoryServer');
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
    const params = {
      instanceGuid: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.deleteLoggingConfiguration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();

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
    const params = {
      instanceId: instanceGuid,
      applicationId: applicationId,
    };

    const res = await ibmAnalyticsEngineApiService.deleteApplication(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();

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
