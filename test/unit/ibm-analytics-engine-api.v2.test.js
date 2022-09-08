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

const ibmAnalyticsEngineV2ApiServiceOptions = {
  authenticator: new NoAuthAuthenticator(),
  url: 'ibm.com/123456',
};

const ibmAnalyticsEngineV2ApiService = new IbmAnalyticsEngineApiV2(
  ibmAnalyticsEngineV2ApiServiceOptions
);

let createRequestMock = null;
function mock_createRequest() {
  if (!createRequestMock) {
    createRequestMock = jest.spyOn(ibmAnalyticsEngineV2ApiService, 'createRequest');
    createRequestMock.mockImplementation(() => Promise.resolve());
  }
}

// dont actually construct an authenticator
const getAuthenticatorMock = jest.spyOn(core, 'getAuthenticatorFromEnvironment');
getAuthenticatorMock.mockImplementation(() => new NoAuthAuthenticator());

describe('IbmAnalyticsEngineApiV2', () => {
  beforeEach(() => {
    mock_createRequest();
  });

  afterEach(() => {
    if (createRequestMock) {
      createRequestMock.mockClear();
    }
    getAuthenticatorMock.mockClear();
  });

  describe('the newInstance method', () => {
    test('should use defaults when options not provided', () => {
      const testInstance = IbmAnalyticsEngineApiV2.newInstance();

      expect(getAuthenticatorMock).toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceName).toBe(
        IbmAnalyticsEngineApiV2.DEFAULT_SERVICE_NAME
      );
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

  describe('getAllAnalyticsEngines', () => {
    describe('positive tests', () => {
      function __getAllAnalyticsEnginesTest() {
        // Construct the params object for operation getAllAnalyticsEngines
        const getAllAnalyticsEnginesParams = {};

        const getAllAnalyticsEnginesResult = ibmAnalyticsEngineV2ApiService.getAllAnalyticsEngines(
          getAllAnalyticsEnginesParams
        );

        // all methods should return a Promise
        expectToBePromise(getAllAnalyticsEnginesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/analytics_engines', 'GET');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getAllAnalyticsEnginesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.enableRetries();
        __getAllAnalyticsEnginesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.disableRetries();
        __getAllAnalyticsEnginesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getAllAnalyticsEnginesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineV2ApiService.getAllAnalyticsEngines(getAllAnalyticsEnginesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        ibmAnalyticsEngineV2ApiService.getAllAnalyticsEngines({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getAnalyticsEngineById', () => {
    describe('positive tests', () => {
      function __getAnalyticsEngineByIdTest() {
        // Construct the params object for operation getAnalyticsEngineById
        const instanceGuid = 'testString';
        const getAnalyticsEngineByIdParams = {
          instanceGuid,
        };

        const getAnalyticsEngineByIdResult = ibmAnalyticsEngineV2ApiService.getAnalyticsEngineById(
          getAnalyticsEngineByIdParams
        );

        // all methods should return a Promise
        expectToBePromise(getAnalyticsEngineByIdResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/analytics_engines/{instance_guid}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_guid).toEqual(instanceGuid);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getAnalyticsEngineByIdTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.enableRetries();
        __getAnalyticsEngineByIdTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.disableRetries();
        __getAnalyticsEngineByIdTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getAnalyticsEngineByIdParams = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineV2ApiService.getAnalyticsEngineById(getAnalyticsEngineByIdParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.getAnalyticsEngineById({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.getAnalyticsEngineById();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getAnalyticsEngineStateById', () => {
    describe('positive tests', () => {
      function __getAnalyticsEngineStateByIdTest() {
        // Construct the params object for operation getAnalyticsEngineStateById
        const instanceGuid = 'testString';
        const getAnalyticsEngineStateByIdParams = {
          instanceGuid,
        };

        const getAnalyticsEngineStateByIdResult =
          ibmAnalyticsEngineV2ApiService.getAnalyticsEngineStateById(
            getAnalyticsEngineStateByIdParams
          );

        // all methods should return a Promise
        expectToBePromise(getAnalyticsEngineStateByIdResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/analytics_engines/{instance_guid}/state', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_guid).toEqual(instanceGuid);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getAnalyticsEngineStateByIdTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.enableRetries();
        __getAnalyticsEngineStateByIdTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.disableRetries();
        __getAnalyticsEngineStateByIdTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getAnalyticsEngineStateByIdParams = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineV2ApiService.getAnalyticsEngineStateById(
          getAnalyticsEngineStateByIdParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.getAnalyticsEngineStateById({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.getAnalyticsEngineStateById();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
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

      function __createCustomizationRequestTest() {
        // Construct the params object for operation createCustomizationRequest
        const instanceGuid = 'testString';
        const target = 'all';
        const customActions = [analyticsEngineCustomActionModel];
        const createCustomizationRequestParams = {
          instanceGuid,
          target,
          customActions,
        };

        const createCustomizationRequestResult =
          ibmAnalyticsEngineV2ApiService.createCustomizationRequest(
            createCustomizationRequestParams
          );

        // all methods should return a Promise
        expectToBePromise(createCustomizationRequestResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v2/analytics_engines/{instance_guid}/customization_requests',
          'POST'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.target).toEqual(target);
        expect(mockRequestOptions.body.custom_actions).toEqual(customActions);
        expect(mockRequestOptions.path.instance_guid).toEqual(instanceGuid);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createCustomizationRequestTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.enableRetries();
        __createCustomizationRequestTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.disableRetries();
        __createCustomizationRequestTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const target = 'all';
        const customActions = [analyticsEngineCustomActionModel];
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createCustomizationRequestParams = {
          instanceGuid,
          target,
          customActions,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineV2ApiService.createCustomizationRequest(createCustomizationRequestParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.createCustomizationRequest({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.createCustomizationRequest();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getAllCustomizationRequests', () => {
    describe('positive tests', () => {
      function __getAllCustomizationRequestsTest() {
        // Construct the params object for operation getAllCustomizationRequests
        const instanceGuid = 'testString';
        const getAllCustomizationRequestsParams = {
          instanceGuid,
        };

        const getAllCustomizationRequestsResult =
          ibmAnalyticsEngineV2ApiService.getAllCustomizationRequests(
            getAllCustomizationRequestsParams
          );

        // all methods should return a Promise
        expectToBePromise(getAllCustomizationRequestsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v2/analytics_engines/{instance_guid}/customization_requests',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_guid).toEqual(instanceGuid);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getAllCustomizationRequestsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.enableRetries();
        __getAllCustomizationRequestsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.disableRetries();
        __getAllCustomizationRequestsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getAllCustomizationRequestsParams = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineV2ApiService.getAllCustomizationRequests(
          getAllCustomizationRequestsParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.getAllCustomizationRequests({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.getAllCustomizationRequests();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getCustomizationRequestById', () => {
    describe('positive tests', () => {
      function __getCustomizationRequestByIdTest() {
        // Construct the params object for operation getCustomizationRequestById
        const instanceGuid = 'testString';
        const requestId = 'testString';
        const getCustomizationRequestByIdParams = {
          instanceGuid,
          requestId,
        };

        const getCustomizationRequestByIdResult =
          ibmAnalyticsEngineV2ApiService.getCustomizationRequestById(
            getCustomizationRequestByIdParams
          );

        // all methods should return a Promise
        expectToBePromise(getCustomizationRequestByIdResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v2/analytics_engines/{instance_guid}/customization_requests/{request_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_guid).toEqual(instanceGuid);
        expect(mockRequestOptions.path.request_id).toEqual(requestId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getCustomizationRequestByIdTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.enableRetries();
        __getCustomizationRequestByIdTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.disableRetries();
        __getCustomizationRequestByIdTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const requestId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getCustomizationRequestByIdParams = {
          instanceGuid,
          requestId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineV2ApiService.getCustomizationRequestById(
          getCustomizationRequestByIdParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.getCustomizationRequestById({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.getCustomizationRequestById();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('resizeCluster', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // ResizeClusterRequestAnalyticsEngineResizeClusterByComputeNodesRequest
      const resizeClusterRequestModel = {
        compute_nodes_count: 38,
      };

      function __resizeClusterTest() {
        // Construct the params object for operation resizeCluster
        const instanceGuid = 'testString';
        const body = resizeClusterRequestModel;
        const resizeClusterParams = {
          instanceGuid,
          body,
        };

        const resizeClusterResult =
          ibmAnalyticsEngineV2ApiService.resizeCluster(resizeClusterParams);

        // all methods should return a Promise
        expectToBePromise(resizeClusterResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v2/analytics_engines/{instance_guid}/resize',
          'POST'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body).toEqual(body);
        expect(mockRequestOptions.path.instance_guid).toEqual(instanceGuid);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __resizeClusterTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.enableRetries();
        __resizeClusterTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.disableRetries();
        __resizeClusterTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const body = resizeClusterRequestModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const resizeClusterParams = {
          instanceGuid,
          body,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineV2ApiService.resizeCluster(resizeClusterParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.resizeCluster({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.resizeCluster();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('resetClusterPassword', () => {
    describe('positive tests', () => {
      function __resetClusterPasswordTest() {
        // Construct the params object for operation resetClusterPassword
        const instanceGuid = 'testString';
        const resetClusterPasswordParams = {
          instanceGuid,
        };

        const resetClusterPasswordResult = ibmAnalyticsEngineV2ApiService.resetClusterPassword(
          resetClusterPasswordParams
        );

        // all methods should return a Promise
        expectToBePromise(resetClusterPasswordResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v2/analytics_engines/{instance_guid}/reset_password',
          'POST'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_guid).toEqual(instanceGuid);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __resetClusterPasswordTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.enableRetries();
        __resetClusterPasswordTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.disableRetries();
        __resetClusterPasswordTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const resetClusterPasswordParams = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineV2ApiService.resetClusterPassword(resetClusterPasswordParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.resetClusterPassword({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.resetClusterPassword();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
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

      function __configureLoggingTest() {
        // Construct the params object for operation configureLogging
        const instanceGuid = 'testString';
        const logSpecs = [analyticsEngineLoggingNodeSpecModel];
        const logServer = analyticsEngineLoggingServerModel;
        const configureLoggingParams = {
          instanceGuid,
          logSpecs,
          logServer,
        };

        const configureLoggingResult =
          ibmAnalyticsEngineV2ApiService.configureLogging(configureLoggingParams);

        // all methods should return a Promise
        expectToBePromise(configureLoggingResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v2/analytics_engines/{instance_guid}/log_config',
          'PUT'
        );
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.log_specs).toEqual(logSpecs);
        expect(mockRequestOptions.body.log_server).toEqual(logServer);
        expect(mockRequestOptions.path.instance_guid).toEqual(instanceGuid);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __configureLoggingTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.enableRetries();
        __configureLoggingTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.disableRetries();
        __configureLoggingTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const logSpecs = [analyticsEngineLoggingNodeSpecModel];
        const logServer = analyticsEngineLoggingServerModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const configureLoggingParams = {
          instanceGuid,
          logSpecs,
          logServer,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineV2ApiService.configureLogging(configureLoggingParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.configureLogging({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.configureLogging();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getLoggingConfig', () => {
    describe('positive tests', () => {
      function __getLoggingConfigTest() {
        // Construct the params object for operation getLoggingConfig
        const instanceGuid = 'testString';
        const getLoggingConfigParams = {
          instanceGuid,
        };

        const getLoggingConfigResult =
          ibmAnalyticsEngineV2ApiService.getLoggingConfig(getLoggingConfigParams);

        // all methods should return a Promise
        expectToBePromise(getLoggingConfigResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v2/analytics_engines/{instance_guid}/log_config',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_guid).toEqual(instanceGuid);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getLoggingConfigTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.enableRetries();
        __getLoggingConfigTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.disableRetries();
        __getLoggingConfigTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getLoggingConfigParams = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineV2ApiService.getLoggingConfig(getLoggingConfigParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.getLoggingConfig({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.getLoggingConfig();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteLoggingConfig', () => {
    describe('positive tests', () => {
      function __deleteLoggingConfigTest() {
        // Construct the params object for operation deleteLoggingConfig
        const instanceGuid = 'testString';
        const deleteLoggingConfigParams = {
          instanceGuid,
        };

        const deleteLoggingConfigResult =
          ibmAnalyticsEngineV2ApiService.deleteLoggingConfig(deleteLoggingConfigParams);

        // all methods should return a Promise
        expectToBePromise(deleteLoggingConfigResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v2/analytics_engines/{instance_guid}/log_config',
          'DELETE'
        );
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_guid).toEqual(instanceGuid);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteLoggingConfigTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.enableRetries();
        __deleteLoggingConfigTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.disableRetries();
        __deleteLoggingConfigTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteLoggingConfigParams = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineV2ApiService.deleteLoggingConfig(deleteLoggingConfigParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.deleteLoggingConfig({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.deleteLoggingConfig();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updatePrivateEndpointWhitelist', () => {
    describe('positive tests', () => {
      function __updatePrivateEndpointWhitelistTest() {
        // Construct the params object for operation updatePrivateEndpointWhitelist
        const instanceGuid = 'testString';
        const ipRanges = ['testString'];
        const action = 'add';
        const updatePrivateEndpointWhitelistParams = {
          instanceGuid,
          ipRanges,
          action,
        };

        const updatePrivateEndpointWhitelistResult =
          ibmAnalyticsEngineV2ApiService.updatePrivateEndpointWhitelist(
            updatePrivateEndpointWhitelistParams
          );

        // all methods should return a Promise
        expectToBePromise(updatePrivateEndpointWhitelistResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v2/analytics_engines/{instance_guid}/private_endpoint_whitelist',
          'PATCH'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.ip_ranges).toEqual(ipRanges);
        expect(mockRequestOptions.body.action).toEqual(action);
        expect(mockRequestOptions.path.instance_guid).toEqual(instanceGuid);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updatePrivateEndpointWhitelistTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.enableRetries();
        __updatePrivateEndpointWhitelistTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineV2ApiService.disableRetries();
        __updatePrivateEndpointWhitelistTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'testString';
        const ipRanges = ['testString'];
        const action = 'add';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updatePrivateEndpointWhitelistParams = {
          instanceGuid,
          ipRanges,
          action,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineV2ApiService.updatePrivateEndpointWhitelist(
          updatePrivateEndpointWhitelistParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.updatePrivateEndpointWhitelist({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineV2ApiService.updatePrivateEndpointWhitelist();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });
});
