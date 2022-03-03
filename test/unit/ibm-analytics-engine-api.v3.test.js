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

const IbmAnalyticsEngineApiV3 = require('../../dist/ibm-analytics-engine-api/v3');

const { getOptions, checkUrlAndMethod, checkMediaHeaders, expectToBePromise } = unitTestUtils;

const ibmAnalyticsEngineApiServiceOptions = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://api.us-south.ae.cloud.ibm.com',
};

const ibmAnalyticsEngineApiService = new IbmAnalyticsEngineApiV3(
  ibmAnalyticsEngineApiServiceOptions
);

// dont actually create a request
const createRequestMock = jest.spyOn(ibmAnalyticsEngineApiService, 'createRequest');
createRequestMock.mockImplementation(() => Promise.resolve());

// dont actually construct an authenticator
const getAuthenticatorMock = jest.spyOn(core, 'getAuthenticatorFromEnvironment');
getAuthenticatorMock.mockImplementation(() => new NoAuthAuthenticator());

afterEach(() => {
  createRequestMock.mockClear();
  getAuthenticatorMock.mockClear();
});

describe('IbmAnalyticsEngineApiV3', () => {
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
          instanceId: instanceId,
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
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.enableRetries();
        // !!! End of custom content to be copied !!!
        __getInstanceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.disableRetries();
        // !!! End of custom content to be copied !!!
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
          instanceId: instanceId,
        };

        const getInstanceStateResult = ibmAnalyticsEngineApiService.getInstanceState(
          getInstanceStateParams
        );

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
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.enableRetries();
        // !!! End of custom content to be copied !!!
        __getInstanceStateTest();

        // disable retries and test again
        createRequestMock.mockClear();
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.disableRetries();
        // !!! End of custom content to be copied !!!
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
  describe('createInstanceHome', () => {
    describe('positive tests', () => {
      function __createInstanceHomeTest() {
        // Construct the params object for operation createInstanceHome
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const newInstanceId = 'testString';
        const newProvider = 'ibm-cos';
        const newType = 'objectstore';
        const newRegion = 'us-south';
        const newEndpoint = 's3.direct.us-south.cloud-object-storage.appdomain.cloud';
        const newHmacAccessKey = '821**********0ae';
        const newHmacSecretKey = '03e****************4fc3';
        const createInstanceHomeParams = {
          instanceId: instanceId,
          newInstanceId: newInstanceId,
          newProvider: newProvider,
          newType: newType,
          newRegion: newRegion,
          newEndpoint: newEndpoint,
          newHmacAccessKey: newHmacAccessKey,
          newHmacSecretKey: newHmacSecretKey,
        };

        const createInstanceHomeResult = ibmAnalyticsEngineApiService.createInstanceHome(
          createInstanceHomeParams
        );

        // all methods should return a Promise
        expectToBePromise(createInstanceHomeResult);

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
        __createInstanceHomeTest();

        // enable retries and test again
        createRequestMock.mockClear();
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.enableRetries();
        // !!! End of custom content to be copied !!!
        __createInstanceHomeTest();

        // disable retries and test again
        createRequestMock.mockClear();
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.disableRetries();
        // !!! End of custom content to be copied !!!
        __createInstanceHomeTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createInstanceHomeParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.createInstanceHome(createInstanceHomeParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.createInstanceHome({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.createInstanceHome();
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
        conf: { 'key1': 'testString' },
        env: { 'key1': 'testString' },
      };

      function __createApplicationTest() {
        // Construct the params object for operation createApplication
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const applicationDetails = applicationRequestApplicationDetailsModel;
        const createApplicationParams = {
          instanceId: instanceId,
          applicationDetails: applicationDetails,
        };

        const createApplicationResult = ibmAnalyticsEngineApiService.createApplication(
          createApplicationParams
        );

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
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.enableRetries();
        // !!! End of custom content to be copied !!!
        __createApplicationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.disableRetries();
        // !!! End of custom content to be copied !!!
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
        const listApplicationsParams = {
          instanceId: instanceId,
        };

        const listApplicationsResult = ibmAnalyticsEngineApiService.listApplications(
          listApplicationsParams
        );

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
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listApplicationsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.enableRetries();
        // !!! End of custom content to be copied !!!
        __listApplicationsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.disableRetries();
        // !!! End of custom content to be copied !!!
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
  });
  describe('getApplication', () => {
    describe('positive tests', () => {
      function __getApplicationTest() {
        // Construct the params object for operation getApplication
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const applicationId = 'ff48cc19-0e7e-4627-aac6-0b4ad080397b';
        const getApplicationParams = {
          instanceId: instanceId,
          applicationId: applicationId,
        };

        const getApplicationResult = ibmAnalyticsEngineApiService.getApplication(
          getApplicationParams
        );

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
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.enableRetries();
        // !!! End of custom content to be copied !!!
        __getApplicationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.disableRetries();
        // !!! End of custom content to be copied !!!
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
          instanceId: instanceId,
          applicationId: applicationId,
        };

        const deleteApplicationResult = ibmAnalyticsEngineApiService.deleteApplication(
          deleteApplicationParams
        );

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
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.enableRetries();
        // !!! End of custom content to be copied !!!
        __deleteApplicationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.disableRetries();
        // !!! End of custom content to be copied !!!
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
          instanceId: instanceId,
          applicationId: applicationId,
        };

        const getApplicationStateResult = ibmAnalyticsEngineApiService.getApplicationState(
          getApplicationStateParams
        );

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
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.enableRetries();
        // !!! End of custom content to be copied !!!
        __getApplicationStateTest();

        // disable retries and test again
        createRequestMock.mockClear();
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.disableRetries();
        // !!! End of custom content to be copied !!!
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
  describe('configurePlatformLogging', () => {
    describe('positive tests', () => {
      function __configurePlatformLoggingTest() {
        // Construct the params object for operation configurePlatformLogging
        const instanceGuid = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const enable = true;
        const configurePlatformLoggingParams = {
          instanceGuid: instanceGuid,
          enable: enable,
        };

        const configurePlatformLoggingResult = ibmAnalyticsEngineApiService.configurePlatformLogging(
          configurePlatformLoggingParams
        );

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
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.enableRetries();
        // !!! End of custom content to be copied !!!
        __configurePlatformLoggingTest();

        // disable retries and test again
        createRequestMock.mockClear();
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.disableRetries();
        // !!! End of custom content to be copied !!!
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
          instanceGuid: instanceGuid,
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
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.enableRetries();
        // !!! End of custom content to be copied !!!
        __getLoggingConfigurationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.disableRetries();
        // !!! End of custom content to be copied !!!
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
  describe('deleteLoggingConfiguration', () => {
    describe('positive tests', () => {
      function __deleteLoggingConfigurationTest() {
        // Construct the params object for operation deleteLoggingConfiguration
        const instanceGuid = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const deleteLoggingConfigurationParams = {
          instanceGuid: instanceGuid,
        };

        const deleteLoggingConfigurationResult = ibmAnalyticsEngineApiService.deleteLoggingConfiguration(
          deleteLoggingConfigurationParams
        );

        // all methods should return a Promise
        expectToBePromise(deleteLoggingConfigurationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_guid}/logging',
          'DELETE'
        );
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.instance_guid).toEqual(instanceGuid);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteLoggingConfigurationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.enableRetries();
        // !!! End of custom content to be copied !!!
        __deleteLoggingConfigurationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.disableRetries();
        // !!! End of custom content to be copied !!!
        __deleteLoggingConfigurationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteLoggingConfigurationParams = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.deleteLoggingConfiguration(deleteLoggingConfigurationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.deleteLoggingConfiguration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.deleteLoggingConfiguration();
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
          instanceId: instanceId,
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
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.enableRetries();
        // !!! End of custom content to be copied !!!
        __startSparkHistoryServerTest();

        // disable retries and test again
        createRequestMock.mockClear();
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.disableRetries();
        // !!! End of custom content to be copied !!!
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
          instanceId: instanceId,
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
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.enableRetries();
        // !!! End of custom content to be copied !!!
        __getSparkHistoryServerTest();

        // disable retries and test again
        createRequestMock.mockClear();
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.disableRetries();
        // !!! End of custom content to be copied !!!
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
          instanceId: instanceId,
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
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.enableRetries();
        // !!! End of custom content to be copied !!!
        __stopSparkHistoryServerTest();

        // disable retries and test again
        createRequestMock.mockClear();
        // !!! Start of custom content to be copied !!!
        // ibmAnalyticsEngineApiService.disableRetries();
        // !!! End of custom content to be copied !!!
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
