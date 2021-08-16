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

'use strict';
const IbmAnalyticsEngineApiV3 = require('../../dist/ibm-analytics-engine-api/v3');
const { readExternalSources } = require('ibm-cloud-sdk-core');
const authHelper = require('../resources/auth-helper.js');
// const authHelper = require('../resources/auth.js');
const describe = authHelper.describe; // this runs describe.skip if there is no auth.js file :)
// testcase timeout value (200s).
const timeout = 200000;
const { IamAuthenticator } = require('../../dist/auth');
// Location of our config file.
// const configFile = 'ibm_analytics_engine_api_v3.env';

// describe = authHelper.prepareTests(configFile);

describe('IbmAnalyticsEngineApiV3_integration', () => {
  const options = authHelper.ibm_analytics_engine_api_v3;
  options.authenticator = new IamAuthenticator({ apikey: options.apikey });
  const instanceGuid = options.instance_guid;
  let applicationId = '';
  const ibmAnalyticsEngineApiService = IbmAnalyticsEngineApiV3.newInstance(options);

  expect(ibmAnalyticsEngineApiService).not.toBeNull();

  const config = readExternalSources(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME);
  expect(config).not.toBeNull();

  jest.setTimeout(timeout);
  test('getInstanceById()', async () => {
    const params = {
      instanceId: instanceGuid,
    };
    const res = await ibmAnalyticsEngineApiService.getInstanceById(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('createApplication()', async () => {
    // Request models needed by this operation.

    // ApplicationRequestApplicationDetails
    const applicationRequestApplicationDetailsModel = {
      application: '/opt/ibm/spark/examples/src/main/python/wordcount.py',
      application_arguments: ['/opt/ibm/spark/examples/src/main/resources/people.txt'],
    };

    const params = {
      instanceId: instanceGuid,
      applicationDetails: applicationRequestApplicationDetailsModel,
    };

    const res = await ibmAnalyticsEngineApiService.createApplication(params);
    applicationId = res.result.application_id;
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('getApplications()', async () => {
    const params = {
      instanceId: instanceGuid,
    };

    const res = await ibmAnalyticsEngineApiService.getApplications(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('getApplicationById()', async () => {
    const params = {
      instanceId: instanceGuid,
      applicationId: applicationId,
    };

    const res = await ibmAnalyticsEngineApiService.getApplicationById(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('getApplicationState()', async () => {
    const params = {
      instanceId: instanceGuid,
      applicationId: applicationId,
    };

    const res = await ibmAnalyticsEngineApiService.getApplicationState(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('deleteApplicationById()', async () => {
    const params = {
      instanceId: instanceGuid,
      applicationId: applicationId,
    };

    const res = await ibmAnalyticsEngineApiService.deleteApplicationById(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
});
