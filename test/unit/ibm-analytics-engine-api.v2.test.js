/**
 * (C) Copyright IBM Corp. 2020.
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

// need to import the whole package to mock getAuthenticatorFromEnvironment
const core = require('ibm-cloud-sdk-core');
const { NoAuthAuthenticator, unitTestUtils } = core;

const IbmAnalyticsEngineApiV2 = require('../../dist/ibm-analytics-engine-api/v2');

const {
  getOptions,
  checkUrlAndMethod,
  checkMediaHeaders,
  expectToBePromise,
  checkForSuccessfulExecution,
} = unitTestUtils;

const service = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://gateway.watsonplatform.net/',
};

const ibmAnalyticsEngineApiDocs = new IbmAnalyticsEngineApiV2(service);

// dont actually create a request
const createRequestMock = jest.spyOn(ibmAnalyticsEngineApiDocs, 'createRequest');
createRequestMock.mockImplementation(() => Promise.resolve());

// dont actually construct an authenticator
const getAuthenticatorMock = jest.spyOn(core, 'getAuthenticatorFromEnvironment');
getAuthenticatorMock.mockImplementation(() => new NoAuthAuthenticator());

afterEach(() => {
  createRequestMock.mockClear();
  getAuthenticatorMock.mockClear();
});

describe('IbmAnalyticsEngineApiV2', () => {
  describe('the newInstance method', () => {
    test('should use defaults when options not provided', () => {
      const testInstance = IbmAnalyticsEngineApiV2.newInstance();

      expect(getAuthenticatorMock).toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceName).toBe(IbmAnalyticsEngineApiV2.DEFAULT_SERVICE_NAME);
      expect(testInstance.baseOptions.serviceUrl).toBe(IbmAnalyticsEngineApiV2.DEFAULT_SERVICE_URL);
      expect(testInstance).toBeInstanceOf(IbmAnalyticsEngineApiV2);
    });

    test('should set serviceName, serviceUrl, and authenticator when provided', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
        serviceName: 'my-service',
      };

      const testInstance = IbmAnalyticsEngineApiV2.newInstance(options);

      expect(getAuthenticatorMock).not.toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
      expect(testInstance.baseOptions.serviceName).toBe('my-service');
      expect(testInstance).toBeInstanceOf(IbmAnalyticsEngineApiV2);
    });
  });
  describe('the constructor', () => {
    test('use user-given service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
      };

      const testInstance = new IbmAnalyticsEngineApiV2(options);

      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
    });

    test('use default service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
      };

      const testInstance = new IbmAnalyticsEngineApiV2(options);

      expect(testInstance.baseOptions.serviceUrl).toBe(IbmAnalyticsEngineApiV2.DEFAULT_SERVICE_URL);
    });
  });
  describe('analyticsEnginesGet', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation analyticsEnginesGet
        const params = {};

        const analyticsEnginesGetResult = ibmAnalyticsEngineApiDocs.analyticsEnginesGet(params);

        // all methods should return a Promise
        expectToBePromise(analyticsEnginesGetResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/analytics_engines', 'GET');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiDocs.analyticsEnginesGet(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        ibmAnalyticsEngineApiDocs.analyticsEnginesGet({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });
  describe('getAnalyticsEngineById', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getAnalyticsEngineById
        const instanceGuid = 'testString';
        const params = {
          instanceGuid: instanceGuid,
        };

        const getAnalyticsEngineByIdResult = ibmAnalyticsEngineApiDocs.getAnalyticsEngineById(params);

        // all methods should return a Promise
        expectToBePromise(getAnalyticsEngineByIdResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/analytics_engines/{instance_guid}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['instance_guid']).toEqual(instanceGuid);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiDocs.getAnalyticsEngineById(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiDocs.getAnalyticsEngineById({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getAnalyticsEngineByIdPromise = ibmAnalyticsEngineApiDocs.getAnalyticsEngineById();
        expectToBePromise(getAnalyticsEngineByIdPromise);

        getAnalyticsEngineByIdPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getAnalyticsEngineStateById', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getAnalyticsEngineStateById
        const instanceGuid = 'testString';
        const params = {
          instanceGuid: instanceGuid,
        };

        const getAnalyticsEngineStateByIdResult = ibmAnalyticsEngineApiDocs.getAnalyticsEngineStateById(params);

        // all methods should return a Promise
        expectToBePromise(getAnalyticsEngineStateByIdResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/analytics_engines/{instance_guid}/state', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['instance_guid']).toEqual(instanceGuid);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiDocs.getAnalyticsEngineStateById(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiDocs.getAnalyticsEngineStateById({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getAnalyticsEngineStateByIdPromise = ibmAnalyticsEngineApiDocs.getAnalyticsEngineStateById();
        expectToBePromise(getAnalyticsEngineStateByIdPromise);

        getAnalyticsEngineStateByIdPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('createCustomizationRequest', () => {
    describe('positive tests', () => {
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

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation createCustomizationRequest
        const instanceGuid = 'testString';
        const target = 'all';
        const customActions = [analyticsEngineCustomActionModel];
        const params = {
          instanceGuid: instanceGuid,
          target: target,
          customActions: customActions,
        };

        const createCustomizationRequestResult = ibmAnalyticsEngineApiDocs.createCustomizationRequest(params);

        // all methods should return a Promise
        expectToBePromise(createCustomizationRequestResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/analytics_engines/{instance_guid}/customization_requests', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['target']).toEqual(target);
        expect(options.body['custom_actions']).toEqual(customActions);
        expect(options.path['instance_guid']).toEqual(instanceGuid);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const target = 'all';
        const customActions = [analyticsEngineCustomActionModel];
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceGuid,
          target,
          customActions,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiDocs.createCustomizationRequest(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiDocs.createCustomizationRequest({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const createCustomizationRequestPromise = ibmAnalyticsEngineApiDocs.createCustomizationRequest();
        expectToBePromise(createCustomizationRequestPromise);

        createCustomizationRequestPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getAllCustomizationRequests', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getAllCustomizationRequests
        const instanceGuid = 'testString';
        const params = {
          instanceGuid: instanceGuid,
        };

        const getAllCustomizationRequestsResult = ibmAnalyticsEngineApiDocs.getAllCustomizationRequests(params);

        // all methods should return a Promise
        expectToBePromise(getAllCustomizationRequestsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/analytics_engines/{instance_guid}/customization_requests', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['instance_guid']).toEqual(instanceGuid);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiDocs.getAllCustomizationRequests(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiDocs.getAllCustomizationRequests({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getAllCustomizationRequestsPromise = ibmAnalyticsEngineApiDocs.getAllCustomizationRequests();
        expectToBePromise(getAllCustomizationRequestsPromise);

        getAllCustomizationRequestsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getCustomizationRequestById', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getCustomizationRequestById
        const instanceGuid = 'testString';
        const requestId = 'testString';
        const params = {
          instanceGuid: instanceGuid,
          requestId: requestId,
        };

        const getCustomizationRequestByIdResult = ibmAnalyticsEngineApiDocs.getCustomizationRequestById(params);

        // all methods should return a Promise
        expectToBePromise(getCustomizationRequestByIdResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/analytics_engines/{instance_guid}/customization_requests/{request_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['instance_guid']).toEqual(instanceGuid);
        expect(options.path['request_id']).toEqual(requestId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const requestId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceGuid,
          requestId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiDocs.getCustomizationRequestById(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiDocs.getCustomizationRequestById({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getCustomizationRequestByIdPromise = ibmAnalyticsEngineApiDocs.getCustomizationRequestById();
        expectToBePromise(getCustomizationRequestByIdPromise);

        getCustomizationRequestByIdPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('resizeCluster', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation resizeCluster
        const instanceGuid = 'testString';
        const computeNodesCount = 38;
        const params = {
          instanceGuid: instanceGuid,
          computeNodesCount: computeNodesCount,
        };

        const resizeClusterResult = ibmAnalyticsEngineApiDocs.resizeCluster(params);

        // all methods should return a Promise
        expectToBePromise(resizeClusterResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/analytics_engines/{instance_guid}/resize', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['compute_nodes_count']).toEqual(computeNodesCount);
        expect(options.path['instance_guid']).toEqual(instanceGuid);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiDocs.resizeCluster(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiDocs.resizeCluster({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const resizeClusterPromise = ibmAnalyticsEngineApiDocs.resizeCluster();
        expectToBePromise(resizeClusterPromise);

        resizeClusterPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('resetClusterPassword', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation resetClusterPassword
        const instanceGuid = 'testString';
        const params = {
          instanceGuid: instanceGuid,
        };

        const resetClusterPasswordResult = ibmAnalyticsEngineApiDocs.resetClusterPassword(params);

        // all methods should return a Promise
        expectToBePromise(resetClusterPasswordResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/analytics_engines/{instance_guid}/reset_password', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['instance_guid']).toEqual(instanceGuid);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiDocs.resetClusterPassword(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiDocs.resetClusterPassword({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const resetClusterPasswordPromise = ibmAnalyticsEngineApiDocs.resetClusterPassword();
        expectToBePromise(resetClusterPasswordPromise);

        resetClusterPasswordPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('configureLogging', () => {
    describe('positive tests', () => {
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

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation configureLogging
        const instanceGuid = 'testString';
        const logSpecs = [analyticsEngineLoggingNodeSpecModel];
        const logServer = analyticsEngineLoggingServerModel;
        const params = {
          instanceGuid: instanceGuid,
          logSpecs: logSpecs,
          logServer: logServer,
        };

        const configureLoggingResult = ibmAnalyticsEngineApiDocs.configureLogging(params);

        // all methods should return a Promise
        expectToBePromise(configureLoggingResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/analytics_engines/{instance_guid}/log_config', 'PUT');
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['log_specs']).toEqual(logSpecs);
        expect(options.body['log_server']).toEqual(logServer);
        expect(options.path['instance_guid']).toEqual(instanceGuid);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const logSpecs = [analyticsEngineLoggingNodeSpecModel];
        const logServer = analyticsEngineLoggingServerModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceGuid,
          logSpecs,
          logServer,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiDocs.configureLogging(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiDocs.configureLogging({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const configureLoggingPromise = ibmAnalyticsEngineApiDocs.configureLogging();
        expectToBePromise(configureLoggingPromise);

        configureLoggingPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getLoggingConfig', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getLoggingConfig
        const instanceGuid = 'testString';
        const params = {
          instanceGuid: instanceGuid,
        };

        const getLoggingConfigResult = ibmAnalyticsEngineApiDocs.getLoggingConfig(params);

        // all methods should return a Promise
        expectToBePromise(getLoggingConfigResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/analytics_engines/{instance_guid}/log_config', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['instance_guid']).toEqual(instanceGuid);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiDocs.getLoggingConfig(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiDocs.getLoggingConfig({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getLoggingConfigPromise = ibmAnalyticsEngineApiDocs.getLoggingConfig();
        expectToBePromise(getLoggingConfigPromise);

        getLoggingConfigPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deleteLoggingConfig', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation deleteLoggingConfig
        const instanceGuid = 'testString';
        const params = {
          instanceGuid: instanceGuid,
        };

        const deleteLoggingConfigResult = ibmAnalyticsEngineApiDocs.deleteLoggingConfig(params);

        // all methods should return a Promise
        expectToBePromise(deleteLoggingConfigResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/analytics_engines/{instance_guid}/log_config', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['instance_guid']).toEqual(instanceGuid);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiDocs.deleteLoggingConfig(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiDocs.deleteLoggingConfig({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const deleteLoggingConfigPromise = ibmAnalyticsEngineApiDocs.deleteLoggingConfig();
        expectToBePromise(deleteLoggingConfigPromise);

        deleteLoggingConfigPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
});
