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
const IbmAnalyticsEngineApiV2 = require('../../dist/ibm-analytics-engine-api/v2');
const authHelper = require('../resources/auth-helper.js');

// testcase timeout value (200s).
const timeout = 200000;

// Location of our config file.
const configFile = 'ibm_analytics_engine_api_v2.env';

const describe = authHelper.prepareTests(configFile);

describe('IbmAnalyticsEngineApiV2_integration', () => {
  jest.setTimeout(timeout);

  // Service instance
  let ibmAnalyticsEngineV2ApiService;

  test('Initialise service', async () => {
    ibmAnalyticsEngineV2ApiService = IbmAnalyticsEngineApiV2.newInstance();

    expect(ibmAnalyticsEngineV2ApiService).not.toBeNull();

    const config = readExternalSources(IbmAnalyticsEngineApiV2.DEFAULT_SERVICE_NAME);
    expect(config).not.toBeNull();

    ibmAnalyticsEngineV2ApiService.enableRetries();
  });

  test('getAllAnalyticsEngines()', async () => {
    const res = await ibmAnalyticsEngineV2ApiService.getAllAnalyticsEngines();
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getAnalyticsEngineById()', async () => {
    const params = {
      instanceGuid: 'testString',
    };

    const res = await ibmAnalyticsEngineV2ApiService.getAnalyticsEngineById(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getAnalyticsEngineStateById()', async () => {
    const params = {
      instanceGuid: 'testString',
    };

    const res = await ibmAnalyticsEngineV2ApiService.getAnalyticsEngineStateById(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('createCustomizationRequest()', async () => {
    // Request models needed by this operation.

    // AnalyticsEngineCustomActionScript
    const analyticsEngineCustomActionScriptModel = {
      source_type: 'http',
      script_path: 'testString',
      source_props: { foo: 'bar' },
    };

    // AnalyticsEngineCustomAction
    const analyticsEngineCustomActionModel = {
      name: 'testString',
      type: 'bootstrap',
      script: analyticsEngineCustomActionScriptModel,
      script_params: ['testString'],
    };

    const params = {
      instanceGuid: 'testString',
      target: 'all',
      customActions: [analyticsEngineCustomActionModel],
    };

    const res = await ibmAnalyticsEngineV2ApiService.createCustomizationRequest(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getAllCustomizationRequests()', async () => {
    const params = {
      instanceGuid: 'testString',
    };

    const res = await ibmAnalyticsEngineV2ApiService.getAllCustomizationRequests(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('getCustomizationRequestById()', async () => {
    const params = {
      instanceGuid: 'testString',
      requestId: 'testString',
    };

    const res = await ibmAnalyticsEngineV2ApiService.getCustomizationRequestById(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('resizeCluster()', async () => {
    // Request models needed by this operation.

    // ResizeClusterRequestAnalyticsEngineResizeClusterByComputeNodesRequest
    const resizeClusterRequestModel = {
      compute_nodes_count: 38,
    };

    const params = {
      instanceGuid: 'testString',
      body: resizeClusterRequestModel,
    };

    const res = await ibmAnalyticsEngineV2ApiService.resizeCluster(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('resetClusterPassword()', async () => {
    const params = {
      instanceGuid: 'testString',
    };

    const res = await ibmAnalyticsEngineV2ApiService.resetClusterPassword(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('configureLogging()', async () => {
    // Request models needed by this operation.

    // AnalyticsEngineLoggingNodeSpec
    const analyticsEngineLoggingNodeSpecModel = {
      node_type: 'management',
      components: ['ambari-server'],
    };

    // AnalyticsEngineLoggingServer
    const analyticsEngineLoggingServerModel = {
      type: 'logdna',
      credential: 'testString',
      api_host: 'testString',
      log_host: 'testString',
      owner: 'testString',
    };

    const params = {
      instanceGuid: 'testString',
      logSpecs: [analyticsEngineLoggingNodeSpecModel],
      logServer: analyticsEngineLoggingServerModel,
    };

    const res = await ibmAnalyticsEngineV2ApiService.configureLogging(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
  });
  test('getLoggingConfig()', async () => {
    const params = {
      instanceGuid: 'testString',
    };

    const res = await ibmAnalyticsEngineV2ApiService.getLoggingConfig(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('updatePrivateEndpointWhitelist()', async () => {
    const params = {
      instanceGuid: 'testString',
      ipRanges: ['testString'],
      action: 'add',
    };

    const res = await ibmAnalyticsEngineV2ApiService.updatePrivateEndpointWhitelist(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
  test('deleteLoggingConfig()', async () => {
    const params = {
      instanceGuid: 'testString',
    };

    const res = await ibmAnalyticsEngineV2ApiService.deleteLoggingConfig(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
  });
});
