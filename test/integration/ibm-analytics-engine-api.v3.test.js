/* eslint-disable no-console */
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

const IbmAnalyticsEngineApiV3 = require('../../dist/ibm-analytics-engine-api/v3');
const { readExternalSources } = require('ibm-cloud-sdk-core');
// const authHelper = require('../resources/auth-helper.js');
const authHelper = require('../resources/auth.js');

// testcase timeout value (200s).
const timeout = 200000;
const { IamAuthenticator } = require('../../dist/auth');
// Location of our config file.
// const configFile = 'ibm_analytics_engine_api_v3.env';

// const describe = authHelper.prepareTests(configFile);

describe('IbmAnalyticsEngineApiV3_integration', () => {
  let options = authHelper.ibm_analytics_engine_api_v3;
  options.authenticator = new IamAuthenticator({apikey: options.apikey});
  
  const instanceGuid = options.instance_guid;
  let applicationId = '';
  const ibmAnalyticsEngineApiService = IbmAnalyticsEngineApiV3.newInstance(options);

  expect(ibmAnalyticsEngineApiService).not.toBeNull();

  const config = readExternalSources(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME);
  expect(config).not.toBeNull();

  jest.setTimeout(timeout);

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
  test('createApplication()', async () => {
    // Request models needed by this operation.

    // ApplicationRequestApplicationDetails
    const applicationRequestApplicationDetailsModel = {
      // application: 'cos://bucket_name.my_cos/my_spark_app.py',
      // class: 'com.company.path.ClassName',
      // arguments: ['[arg1, arg2, arg3]'],
      // conf: { spark.driver.cores: '1', spark.driver.memory: '4G' },
      // env: { SPARK_ENV_LOADED: '2' },
      application: '/opt/ibm/spark/examples/src/main/python/wordcount.py',
      arguments: ['/opt/ibm/spark/examples/src/main/resources/people.txt'],
    };

    const params = {
      instanceId: instanceGuid,
      applicationDetails: applicationRequestApplicationDetailsModel,
    };

    const res = await ibmAnalyticsEngineApiService.createApplication(params);
    applicationId= res.result.id;
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
