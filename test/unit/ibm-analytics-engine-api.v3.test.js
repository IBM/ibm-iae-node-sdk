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

// need to import the whole package to mock getAuthenticatorFromEnvironment
const sdkCorePackage = require('ibm-cloud-sdk-core');

const { NoAuthAuthenticator, unitTestUtils } = sdkCorePackage;

const nock = require('nock');
const IbmAnalyticsEngineApiV3 = require('../../dist/ibm-analytics-engine-api/v3');

/* eslint-disable no-await-in-loop */

const { getOptions, checkUrlAndMethod, checkMediaHeaders, expectToBePromise } = unitTestUtils;

const ibmAnalyticsEngineApiServiceOptions = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://api.us-south.ae.cloud.ibm.com',
};

const ibmAnalyticsEngineApiService = new IbmAnalyticsEngineApiV3(
  ibmAnalyticsEngineApiServiceOptions
);

let createRequestMock = null;
function mock_createRequest() {
  if (!createRequestMock) {
    createRequestMock = jest.spyOn(ibmAnalyticsEngineApiService, 'createRequest');
    createRequestMock.mockImplementation(() => Promise.resolve());
  }
}
function unmock_createRequest() {
  if (createRequestMock) {
    createRequestMock.mockRestore();
    createRequestMock = null;
  }
}

// dont actually construct an authenticator
const getAuthenticatorMock = jest.spyOn(sdkCorePackage, 'getAuthenticatorFromEnvironment');
getAuthenticatorMock.mockImplementation(() => new NoAuthAuthenticator());

describe('IbmAnalyticsEngineApiV3', () => {
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
      const testInstance = IbmAnalyticsEngineApiV3.newInstance();

      expect(getAuthenticatorMock).toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceName).toBe(
        IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME
      );
      expect(testInstance.baseOptions.serviceUrl).toBe(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_URL);
      expect(testInstance).toBeInstanceOf(IbmAnalyticsEngineApiV3);
    });

    test('should set serviceName, serviceUrl, and authenticator when provided', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
        serviceName: 'my-service',
      };

      const testInstance = IbmAnalyticsEngineApiV3.newInstance(options);

      expect(getAuthenticatorMock).not.toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
      expect(testInstance.baseOptions.serviceName).toBe('my-service');
      expect(testInstance).toBeInstanceOf(IbmAnalyticsEngineApiV3);
    });
  });

  describe('the constructor', () => {
    test('use user-given service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
      };

      const testInstance = new IbmAnalyticsEngineApiV3(options);

      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
    });

    test('use default service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
      };

      const testInstance = new IbmAnalyticsEngineApiV3(options);

      expect(testInstance.baseOptions.serviceUrl).toBe(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_URL);
    });
  });

  describe('getServiceUrlForRegion', () => {
    test('should return undefined for invalid region', () => {
      expect(IbmAnalyticsEngineApiV3.getServiceUrlForRegion('INVALID_REGION')).toBeFalsy();
    });
    test('should return valid service url', () => {
      expect(IbmAnalyticsEngineApiV3.getServiceUrlForRegion('us-south')).toBe(
        'https://api.us-south.ae.cloud.ibm.com'
      );
      expect(IbmAnalyticsEngineApiV3.getServiceUrlForRegion('eu-de')).toBe(
        'https://api.eu-de.ae.cloud.ibm.com'
      );
    });
  });

  describe('getInstance', () => {
    describe('positive tests', () => {
      function __getInstanceTest() {
        // Construct the params object for operation getInstance
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const getInstanceParams = {
          instanceId,
        };

        const getInstanceResult = ibmAnalyticsEngineApiService.getInstance(getInstanceParams);

        // all methods should return a Promise
        expectToBePromise(getInstanceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/analytics_engines/{instance_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getInstanceTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __getInstanceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __getInstanceTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getInstanceParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.getInstance(getInstanceParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getInstance({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getInstance();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getInstanceState', () => {
    describe('positive tests', () => {
      function __getInstanceStateTest() {
        // Construct the params object for operation getInstanceState
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const getInstanceStateParams = {
          instanceId,
        };

        const getInstanceStateResult =
          ibmAnalyticsEngineApiService.getInstanceState(getInstanceStateParams);

        // all methods should return a Promise
        expectToBePromise(getInstanceStateResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v3/analytics_engines/{instance_id}/state', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getInstanceStateTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __getInstanceStateTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __getInstanceStateTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getInstanceStateParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.getInstanceState(getInstanceStateParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getInstanceState({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getInstanceState();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('setInstanceHome', () => {
    describe('positive tests', () => {
      function __setInstanceHomeTest() {
        // Construct the params object for operation setInstanceHome
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const newInstanceId = 'testString';
        const newProvider = 'ibm-cos';
        const newType = 'objectstore';
        const newRegion = 'us-south';
        const newEndpoint = 's3.direct.us-south.cloud-object-storage.appdomain.cloud';
        const newHmacAccessKey = 'b9****************************4b';
        const newHmacSecretKey = 'fa********************************************8a';
        const setInstanceHomeParams = {
          instanceId,
          newInstanceId,
          newProvider,
          newType,
          newRegion,
          newEndpoint,
          newHmacAccessKey,
          newHmacSecretKey,
        };

        const setInstanceHomeResult =
          ibmAnalyticsEngineApiService.setInstanceHome(setInstanceHomeParams);

        // all methods should return a Promise
        expectToBePromise(setInstanceHomeResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_id}/instance_home',
          'PUT'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.instance_id).toEqual(newInstanceId);
        expect(mockRequestOptions.body.provider).toEqual(newProvider);
        expect(mockRequestOptions.body.type).toEqual(newType);
        expect(mockRequestOptions.body.region).toEqual(newRegion);
        expect(mockRequestOptions.body.endpoint).toEqual(newEndpoint);
        expect(mockRequestOptions.body.hmac_access_key).toEqual(newHmacAccessKey);
        expect(mockRequestOptions.body.hmac_secret_key).toEqual(newHmacSecretKey);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __setInstanceHomeTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __setInstanceHomeTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __setInstanceHomeTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const setInstanceHomeParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.setInstanceHome(setInstanceHomeParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.setInstanceHome({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.setInstanceHome();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateInstanceHomeCredentials', () => {
    describe('positive tests', () => {
      function __updateInstanceHomeCredentialsTest() {
        // Construct the params object for operation updateInstanceHomeCredentials
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const hmacAccessKey = 'b9****************************4b';
        const hmacSecretKey = 'fa********************************************8a';
        const updateInstanceHomeCredentialsParams = {
          instanceId,
          hmacAccessKey,
          hmacSecretKey,
        };

        const updateInstanceHomeCredentialsResult =
          ibmAnalyticsEngineApiService.updateInstanceHomeCredentials(
            updateInstanceHomeCredentialsParams
          );

        // all methods should return a Promise
        expectToBePromise(updateInstanceHomeCredentialsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_id}/instance_home',
          'PATCH'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.hmac_access_key).toEqual(hmacAccessKey);
        expect(mockRequestOptions.body.hmac_secret_key).toEqual(hmacSecretKey);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateInstanceHomeCredentialsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __updateInstanceHomeCredentialsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __updateInstanceHomeCredentialsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const hmacAccessKey = 'b9****************************4b';
        const hmacSecretKey = 'fa********************************************8a';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateInstanceHomeCredentialsParams = {
          instanceId,
          hmacAccessKey,
          hmacSecretKey,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.updateInstanceHomeCredentials(
          updateInstanceHomeCredentialsParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.updateInstanceHomeCredentials({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.updateInstanceHomeCredentials();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getInstanceDefaultConfigs', () => {
    describe('positive tests', () => {
      function __getInstanceDefaultConfigsTest() {
        // Construct the params object for operation getInstanceDefaultConfigs
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const getInstanceDefaultConfigsParams = {
          instanceId,
        };

        const getInstanceDefaultConfigsResult =
          ibmAnalyticsEngineApiService.getInstanceDefaultConfigs(getInstanceDefaultConfigsParams);

        // all methods should return a Promise
        expectToBePromise(getInstanceDefaultConfigsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_id}/default_configs',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getInstanceDefaultConfigsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __getInstanceDefaultConfigsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __getInstanceDefaultConfigsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getInstanceDefaultConfigsParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.getInstanceDefaultConfigs(getInstanceDefaultConfigsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getInstanceDefaultConfigs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getInstanceDefaultConfigs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('replaceInstanceDefaultConfigs', () => {
    describe('positive tests', () => {
      function __replaceInstanceDefaultConfigsTest() {
        // Construct the params object for operation replaceInstanceDefaultConfigs
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const body = { 'key1': 'testString' };
        const replaceInstanceDefaultConfigsParams = {
          instanceId,
          body,
        };

        const replaceInstanceDefaultConfigsResult =
          ibmAnalyticsEngineApiService.replaceInstanceDefaultConfigs(
            replaceInstanceDefaultConfigsParams
          );

        // all methods should return a Promise
        expectToBePromise(replaceInstanceDefaultConfigsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_id}/default_configs',
          'PUT'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body).toEqual(body);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __replaceInstanceDefaultConfigsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __replaceInstanceDefaultConfigsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __replaceInstanceDefaultConfigsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const body = { 'key1': 'testString' };
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const replaceInstanceDefaultConfigsParams = {
          instanceId,
          body,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.replaceInstanceDefaultConfigs(
          replaceInstanceDefaultConfigsParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.replaceInstanceDefaultConfigs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.replaceInstanceDefaultConfigs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateInstanceDefaultConfigs', () => {
    describe('positive tests', () => {
      function __updateInstanceDefaultConfigsTest() {
        // Construct the params object for operation updateInstanceDefaultConfigs
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const body = { 'key1': 'testString' };
        const updateInstanceDefaultConfigsParams = {
          instanceId,
          body,
        };

        const updateInstanceDefaultConfigsResult =
          ibmAnalyticsEngineApiService.updateInstanceDefaultConfigs(
            updateInstanceDefaultConfigsParams
          );

        // all methods should return a Promise
        expectToBePromise(updateInstanceDefaultConfigsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_id}/default_configs',
          'PATCH'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/merge-patch+json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body).toEqual(body);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateInstanceDefaultConfigsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __updateInstanceDefaultConfigsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __updateInstanceDefaultConfigsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const body = { 'key1': 'testString' };
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateInstanceDefaultConfigsParams = {
          instanceId,
          body,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.updateInstanceDefaultConfigs(
          updateInstanceDefaultConfigsParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.updateInstanceDefaultConfigs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.updateInstanceDefaultConfigs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getInstanceDefaultRuntime', () => {
    describe('positive tests', () => {
      function __getInstanceDefaultRuntimeTest() {
        // Construct the params object for operation getInstanceDefaultRuntime
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const getInstanceDefaultRuntimeParams = {
          instanceId,
        };

        const getInstanceDefaultRuntimeResult =
          ibmAnalyticsEngineApiService.getInstanceDefaultRuntime(getInstanceDefaultRuntimeParams);

        // all methods should return a Promise
        expectToBePromise(getInstanceDefaultRuntimeResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_id}/default_runtime',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getInstanceDefaultRuntimeTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __getInstanceDefaultRuntimeTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __getInstanceDefaultRuntimeTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getInstanceDefaultRuntimeParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.getInstanceDefaultRuntime(getInstanceDefaultRuntimeParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getInstanceDefaultRuntime({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getInstanceDefaultRuntime();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('replaceInstanceDefaultRuntime', () => {
    describe('positive tests', () => {
      function __replaceInstanceDefaultRuntimeTest() {
        // Construct the params object for operation replaceInstanceDefaultRuntime
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const sparkVersion = '3.1';
        const replaceInstanceDefaultRuntimeParams = {
          instanceId,
          sparkVersion,
        };

        const replaceInstanceDefaultRuntimeResult =
          ibmAnalyticsEngineApiService.replaceInstanceDefaultRuntime(
            replaceInstanceDefaultRuntimeParams
          );

        // all methods should return a Promise
        expectToBePromise(replaceInstanceDefaultRuntimeResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_id}/default_runtime',
          'PUT'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.spark_version).toEqual(sparkVersion);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __replaceInstanceDefaultRuntimeTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __replaceInstanceDefaultRuntimeTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __replaceInstanceDefaultRuntimeTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const replaceInstanceDefaultRuntimeParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.replaceInstanceDefaultRuntime(
          replaceInstanceDefaultRuntimeParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.replaceInstanceDefaultRuntime({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.replaceInstanceDefaultRuntime();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createApplication', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // Runtime
      const runtimeModel = {
        spark_version: '3.3',
      };

      // ApplicationRequestApplicationDetails
      const applicationRequestApplicationDetailsModel = {
        application: '/opt/ibm/spark/examples/src/main/python/wordcount.py',
        runtime: runtimeModel,
        jars: 'cos://cloud-object-storage/jars/tests.jar',
        packages: 'testString',
        repositories: 'testString',
        files: 'testString',
        archives: 'testString',
        name: 'spark-app',
        class: 'com.company.path.ClassName',
        arguments: ['/opt/ibm/spark/examples/src/main/resources/people.txt'],
        conf: { foo: 'bar' },
        env: { foo: 'bar' },
      };

      function __createApplicationTest() {
        // Construct the params object for operation createApplication
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const applicationDetails = applicationRequestApplicationDetailsModel;
        const createApplicationParams = {
          instanceId,
          applicationDetails,
        };

        const createApplicationResult =
          ibmAnalyticsEngineApiService.createApplication(createApplicationParams);

        // all methods should return a Promise
        expectToBePromise(createApplicationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_id}/spark_applications',
          'POST'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.application_details).toEqual(applicationDetails);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createApplicationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __createApplicationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __createApplicationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createApplicationParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.createApplication(createApplicationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.createApplication({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.createApplication();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listApplications', () => {
    describe('positive tests', () => {
      function __listApplicationsTest() {
        // Construct the params object for operation listApplications
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const state = ['finished'];
        const limit = 1;
        const start = 'testString';
        const listApplicationsParams = {
          instanceId,
          state,
          limit,
          start,
        };

        const listApplicationsResult =
          ibmAnalyticsEngineApiService.listApplications(listApplicationsParams);

        // all methods should return a Promise
        expectToBePromise(listApplicationsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_id}/spark_applications',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.state).toEqual(state);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
        expect(mockRequestOptions.qs.start).toEqual(start);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listApplicationsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __listApplicationsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __listApplicationsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listApplicationsParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.listApplications(listApplicationsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.listApplications({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.listApplications();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });

    describe('ApplicationsPager tests', () => {
      const serviceUrl = ibmAnalyticsEngineApiServiceOptions.url;
      const path = '/v3/analytics_engines/e64c907a-e82f-46fd-addc-ccfafbd28b09/spark_applications';
      const mockPagerResponse1 =
        '{"next":{"start":"1"},"total_count":2,"limit":1,"applications":[{"id":"id","href":"href","runtime":{"spark_version":"3.1"},"spark_application_id":"spark_application_id","spark_application_name":"spark_application_name","state":"finished","spark_ui":"spark_ui","submission_time":"2021-01-30T08:30:00.000Z","start_time":"2021-01-30T08:30:00.000Z","end_time":"2021-01-30T08:30:00.000Z","finish_time":"2021-01-30T08:30:00.000Z","auto_termination_time":"2021-01-30T08:30:00.000Z"}]}';
      const mockPagerResponse2 =
        '{"total_count":2,"limit":1,"applications":[{"id":"id","href":"href","runtime":{"spark_version":"3.1"},"spark_application_id":"spark_application_id","spark_application_name":"spark_application_name","state":"finished","spark_ui":"spark_ui","submission_time":"2021-01-30T08:30:00.000Z","start_time":"2021-01-30T08:30:00.000Z","end_time":"2021-01-30T08:30:00.000Z","finish_time":"2021-01-30T08:30:00.000Z","auto_termination_time":"2021-01-30T08:30:00.000Z"}]}';

      beforeEach(() => {
        unmock_createRequest();
        const scope = nock(serviceUrl)
          .get((uri) => uri.includes(path))
          .reply(200, mockPagerResponse1)
          .get((uri) => uri.includes(path))
          .reply(200, mockPagerResponse2);
      });

      afterEach(() => {
        nock.cleanAll();
        mock_createRequest();
      });

      test('getNext()', async () => {
        const params = {
          instanceId: 'e64c907a-e82f-46fd-addc-ccfafbd28b09',
          state: ['finished'],
          limit: 10,
        };
        const allResults = [];
        const pager = new IbmAnalyticsEngineApiV3.ApplicationsPager(
          ibmAnalyticsEngineApiService,
          params
        );
        while (pager.hasNext()) {
          const nextPage = await pager.getNext();
          expect(nextPage).not.toBeNull();
          allResults.push(...nextPage);
        }
        expect(allResults).not.toBeNull();
        expect(allResults).toHaveLength(2);
      });

      test('getAll()', async () => {
        const params = {
          instanceId: 'e64c907a-e82f-46fd-addc-ccfafbd28b09',
          state: ['finished'],
          limit: 10,
        };
        const pager = new IbmAnalyticsEngineApiV3.ApplicationsPager(
          ibmAnalyticsEngineApiService,
          params
        );
        const allResults = await pager.getAll();
        expect(allResults).not.toBeNull();
        expect(allResults).toHaveLength(2);
      });
    });
  });

  describe('getApplication', () => {
    describe('positive tests', () => {
      function __getApplicationTest() {
        // Construct the params object for operation getApplication
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const applicationId = 'ff48cc19-0e7e-4627-aac6-0b4ad080397b';
        const getApplicationParams = {
          instanceId,
          applicationId,
        };

        const getApplicationResult =
          ibmAnalyticsEngineApiService.getApplication(getApplicationParams);

        // all methods should return a Promise
        expectToBePromise(getApplicationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_id}/spark_applications/{application_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
        expect(mockRequestOptions.path.application_id).toEqual(applicationId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getApplicationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __getApplicationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __getApplicationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const applicationId = 'ff48cc19-0e7e-4627-aac6-0b4ad080397b';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getApplicationParams = {
          instanceId,
          applicationId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.getApplication(getApplicationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getApplication({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getApplication();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteApplication', () => {
    describe('positive tests', () => {
      function __deleteApplicationTest() {
        // Construct the params object for operation deleteApplication
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const applicationId = 'ff48cc19-0e7e-4627-aac6-0b4ad080397b';
        const deleteApplicationParams = {
          instanceId,
          applicationId,
        };

        const deleteApplicationResult =
          ibmAnalyticsEngineApiService.deleteApplication(deleteApplicationParams);

        // all methods should return a Promise
        expectToBePromise(deleteApplicationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_id}/spark_applications/{application_id}',
          'DELETE'
        );
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
        expect(mockRequestOptions.path.application_id).toEqual(applicationId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteApplicationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __deleteApplicationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __deleteApplicationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const applicationId = 'ff48cc19-0e7e-4627-aac6-0b4ad080397b';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteApplicationParams = {
          instanceId,
          applicationId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.deleteApplication(deleteApplicationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.deleteApplication({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.deleteApplication();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getApplicationState', () => {
    describe('positive tests', () => {
      function __getApplicationStateTest() {
        // Construct the params object for operation getApplicationState
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const applicationId = 'ff48cc19-0e7e-4627-aac6-0b4ad080397b';
        const getApplicationStateParams = {
          instanceId,
          applicationId,
        };

        const getApplicationStateResult =
          ibmAnalyticsEngineApiService.getApplicationState(getApplicationStateParams);

        // all methods should return a Promise
        expectToBePromise(getApplicationStateResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_id}/spark_applications/{application_id}/state',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
        expect(mockRequestOptions.path.application_id).toEqual(applicationId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getApplicationStateTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __getApplicationStateTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __getApplicationStateTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const applicationId = 'ff48cc19-0e7e-4627-aac6-0b4ad080397b';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getApplicationStateParams = {
          instanceId,
          applicationId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.getApplicationState(getApplicationStateParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getApplicationState({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getApplicationState();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getCurrentResourceConsumption', () => {
    describe('positive tests', () => {
      function __getCurrentResourceConsumptionTest() {
        // Construct the params object for operation getCurrentResourceConsumption
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const getCurrentResourceConsumptionParams = {
          instanceId,
        };

        const getCurrentResourceConsumptionResult =
          ibmAnalyticsEngineApiService.getCurrentResourceConsumption(
            getCurrentResourceConsumptionParams
          );

        // all methods should return a Promise
        expectToBePromise(getCurrentResourceConsumptionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_id}/current_resource_consumption',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getCurrentResourceConsumptionTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __getCurrentResourceConsumptionTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __getCurrentResourceConsumptionTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getCurrentResourceConsumptionParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.getCurrentResourceConsumption(
          getCurrentResourceConsumptionParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getCurrentResourceConsumption({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getCurrentResourceConsumption();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getResourceConsumptionLimits', () => {
    describe('positive tests', () => {
      function __getResourceConsumptionLimitsTest() {
        // Construct the params object for operation getResourceConsumptionLimits
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const getResourceConsumptionLimitsParams = {
          instanceId,
        };

        const getResourceConsumptionLimitsResult =
          ibmAnalyticsEngineApiService.getResourceConsumptionLimits(
            getResourceConsumptionLimitsParams
          );

        // all methods should return a Promise
        expectToBePromise(getResourceConsumptionLimitsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_id}/resource_consumption_limits',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getResourceConsumptionLimitsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __getResourceConsumptionLimitsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __getResourceConsumptionLimitsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getResourceConsumptionLimitsParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.getResourceConsumptionLimits(
          getResourceConsumptionLimitsParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getResourceConsumptionLimits({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getResourceConsumptionLimits();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('replaceLogForwardingConfig', () => {
    describe('positive tests', () => {
      function __replaceLogForwardingConfigTest() {
        // Construct the params object for operation replaceLogForwardingConfig
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const enabled = true;
        const sources = ['spark-driver', 'spark-executor'];
        const tags = ['<tag_1>', '<tag_2>', '<tag_n'];
        const replaceLogForwardingConfigParams = {
          instanceId,
          enabled,
          sources,
          tags,
        };

        const replaceLogForwardingConfigResult =
          ibmAnalyticsEngineApiService.replaceLogForwardingConfig(replaceLogForwardingConfigParams);

        // all methods should return a Promise
        expectToBePromise(replaceLogForwardingConfigResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_id}/log_forwarding_config',
          'PUT'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.enabled).toEqual(enabled);
        expect(mockRequestOptions.body.sources).toEqual(sources);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __replaceLogForwardingConfigTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __replaceLogForwardingConfigTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __replaceLogForwardingConfigTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const replaceLogForwardingConfigParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.replaceLogForwardingConfig(replaceLogForwardingConfigParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.replaceLogForwardingConfig({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.replaceLogForwardingConfig();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getLogForwardingConfig', () => {
    describe('positive tests', () => {
      function __getLogForwardingConfigTest() {
        // Construct the params object for operation getLogForwardingConfig
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const getLogForwardingConfigParams = {
          instanceId,
        };

        const getLogForwardingConfigResult = ibmAnalyticsEngineApiService.getLogForwardingConfig(
          getLogForwardingConfigParams
        );

        // all methods should return a Promise
        expectToBePromise(getLogForwardingConfigResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_id}/log_forwarding_config',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getLogForwardingConfigTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __getLogForwardingConfigTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __getLogForwardingConfigTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getLogForwardingConfigParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.getLogForwardingConfig(getLogForwardingConfigParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getLogForwardingConfig({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getLogForwardingConfig();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('configurePlatformLogging', () => {
    describe('positive tests', () => {
      function __configurePlatformLoggingTest() {
        // Construct the params object for operation configurePlatformLogging
        const instanceGuid = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const enable = true;
        const configurePlatformLoggingParams = {
          instanceGuid,
          enable,
        };

        const configurePlatformLoggingResult =
          ibmAnalyticsEngineApiService.configurePlatformLogging(configurePlatformLoggingParams);

        // all methods should return a Promise
        expectToBePromise(configurePlatformLoggingResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_guid}/logging',
          'PUT'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.enable).toEqual(enable);
        expect(mockRequestOptions.path.instance_guid).toEqual(instanceGuid);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __configurePlatformLoggingTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __configurePlatformLoggingTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __configurePlatformLoggingTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const configurePlatformLoggingParams = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.configurePlatformLogging(configurePlatformLoggingParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.configurePlatformLogging({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.configurePlatformLogging();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getLoggingConfiguration', () => {
    describe('positive tests', () => {
      function __getLoggingConfigurationTest() {
        // Construct the params object for operation getLoggingConfiguration
        const instanceGuid = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const getLoggingConfigurationParams = {
          instanceGuid,
        };

        const getLoggingConfigurationResult = ibmAnalyticsEngineApiService.getLoggingConfiguration(
          getLoggingConfigurationParams
        );

        // all methods should return a Promise
        expectToBePromise(getLoggingConfigurationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_guid}/logging',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_guid).toEqual(instanceGuid);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getLoggingConfigurationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __getLoggingConfigurationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __getLoggingConfigurationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getLoggingConfigurationParams = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.getLoggingConfiguration(getLoggingConfigurationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getLoggingConfiguration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getLoggingConfiguration();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('startSparkHistoryServer', () => {
    describe('positive tests', () => {
      function __startSparkHistoryServerTest() {
        // Construct the params object for operation startSparkHistoryServer
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const startSparkHistoryServerParams = {
          instanceId,
        };

        const startSparkHistoryServerResult = ibmAnalyticsEngineApiService.startSparkHistoryServer(
          startSparkHistoryServerParams
        );

        // all methods should return a Promise
        expectToBePromise(startSparkHistoryServerResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_id}/spark_history_server',
          'POST'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __startSparkHistoryServerTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __startSparkHistoryServerTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __startSparkHistoryServerTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const startSparkHistoryServerParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.startSparkHistoryServer(startSparkHistoryServerParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.startSparkHistoryServer({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.startSparkHistoryServer();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getSparkHistoryServer', () => {
    describe('positive tests', () => {
      function __getSparkHistoryServerTest() {
        // Construct the params object for operation getSparkHistoryServer
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const getSparkHistoryServerParams = {
          instanceId,
        };

        const getSparkHistoryServerResult = ibmAnalyticsEngineApiService.getSparkHistoryServer(
          getSparkHistoryServerParams
        );

        // all methods should return a Promise
        expectToBePromise(getSparkHistoryServerResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_id}/spark_history_server',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSparkHistoryServerTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __getSparkHistoryServerTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __getSparkHistoryServerTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSparkHistoryServerParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.getSparkHistoryServer(getSparkHistoryServerParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getSparkHistoryServer({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getSparkHistoryServer();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('stopSparkHistoryServer', () => {
    describe('positive tests', () => {
      function __stopSparkHistoryServerTest() {
        // Construct the params object for operation stopSparkHistoryServer
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const stopSparkHistoryServerParams = {
          instanceId,
        };

        const stopSparkHistoryServerResult = ibmAnalyticsEngineApiService.stopSparkHistoryServer(
          stopSparkHistoryServerParams
        );

        // all methods should return a Promise
        expectToBePromise(stopSparkHistoryServerResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_id}/spark_history_server',
          'DELETE'
        );
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __stopSparkHistoryServerTest();

        // enable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.enableRetries();
        __stopSparkHistoryServerTest();

        // disable retries and test again
        createRequestMock.mockClear();
        ibmAnalyticsEngineApiService.disableRetries();
        __stopSparkHistoryServerTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const stopSparkHistoryServerParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.stopSparkHistoryServer(stopSparkHistoryServerParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.stopSparkHistoryServer({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.stopSparkHistoryServer();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });
});
