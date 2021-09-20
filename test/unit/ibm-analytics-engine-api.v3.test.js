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
  describe('getInstance', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getInstance
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const params = {
          instanceId: instanceId,
        };

        const getInstanceResult = ibmAnalyticsEngineApiService.getInstance(params);

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
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.getInstance(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getInstance({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getInstancePromise = ibmAnalyticsEngineApiService.getInstance();
        expectToBePromise(getInstancePromise);

        getInstancePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('createApplication', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // ApplicationRequestApplicationDetails
      const applicationRequestApplicationDetailsModel = {
        application: 'cos://bucket_name.my_cos/my_spark_app.py',
        class: 'com.company.path.ClassName',
        arguments: ['[arg1, arg2, arg3]'],
        conf: { 'key1': 'testString' },
        env: { 'key1': 'testString' },
      };

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation createApplication
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const applicationDetails = applicationRequestApplicationDetailsModel;
        const params = {
          instanceId: instanceId,
          applicationDetails: applicationDetails,
        };

        const createApplicationResult = ibmAnalyticsEngineApiService.createApplication(params);

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
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.createApplication(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.createApplication({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const createApplicationPromise = ibmAnalyticsEngineApiService.createApplication();
        expectToBePromise(createApplicationPromise);

        createApplicationPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('listApplications', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation listApplications
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const params = {
          instanceId: instanceId,
        };

        const listApplicationsResult = ibmAnalyticsEngineApiService.listApplications(params);

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
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.listApplications(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.listApplications({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const listApplicationsPromise = ibmAnalyticsEngineApiService.listApplications();
        expectToBePromise(listApplicationsPromise);

        listApplicationsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getApplication', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getApplication
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const applicationId = 'ff48cc19-0e7e-4627-aac6-0b4ad080397b';
        const params = {
          instanceId: instanceId,
          applicationId: applicationId,
        };

        const getApplicationResult = ibmAnalyticsEngineApiService.getApplication(params);

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
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const applicationId = 'ff48cc19-0e7e-4627-aac6-0b4ad080397b';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceId,
          applicationId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.getApplication(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getApplication({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getApplicationPromise = ibmAnalyticsEngineApiService.getApplication();
        expectToBePromise(getApplicationPromise);

        getApplicationPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deleteApplication', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation deleteApplication
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const applicationId = 'ff48cc19-0e7e-4627-aac6-0b4ad080397b';
        const params = {
          instanceId: instanceId,
          applicationId: applicationId,
        };

        const deleteApplicationResult = ibmAnalyticsEngineApiService.deleteApplication(params);

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
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const applicationId = 'ff48cc19-0e7e-4627-aac6-0b4ad080397b';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceId,
          applicationId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.deleteApplication(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.deleteApplication({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const deleteApplicationPromise = ibmAnalyticsEngineApiService.deleteApplication();
        expectToBePromise(deleteApplicationPromise);

        deleteApplicationPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getApplicationState', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getApplicationState
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const applicationId = 'ff48cc19-0e7e-4627-aac6-0b4ad080397b';
        const params = {
          instanceId: instanceId,
          applicationId: applicationId,
        };

        const getApplicationStateResult = ibmAnalyticsEngineApiService.getApplicationState(params);

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
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const applicationId = 'ff48cc19-0e7e-4627-aac6-0b4ad080397b';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceId,
          applicationId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.getApplicationState(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getApplicationState({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getApplicationStatePromise = ibmAnalyticsEngineApiService.getApplicationState();
        expectToBePromise(getApplicationStatePromise);

        getApplicationStatePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('createInstanceHome', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation createInstanceHome
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const newInstanceId = 'testString';
        const newProvider = 'ibm-cos';
        const newType = 'objectstore';
        const newRegion = 'us-south';
        const newEndpoint = 's3.direct.us-south.cloud-object-storage.appdomain.cloud';
        const newHmacAccessKey = '821**********0ae';
        const newHmacSecretKey = '03e****************4fc3';
        const params = {
          instanceId: instanceId,
          newInstanceId: newInstanceId,
          newProvider: newProvider,
          newType: newType,
          newRegion: newRegion,
          newEndpoint: newEndpoint,
          newHmacAccessKey: newHmacAccessKey,
          newHmacSecretKey: newHmacSecretKey,
        };

        const createInstanceHomeResult = ibmAnalyticsEngineApiService.createInstanceHome(params);

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
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.createInstanceHome(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.createInstanceHome({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const createInstanceHomePromise = ibmAnalyticsEngineApiService.createInstanceHome();
        expectToBePromise(createInstanceHomePromise);

        createInstanceHomePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('enablePlatformLogging', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation enablePlatformLogging
        const instanceGuid = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const enable = true;
        const params = {
          instanceGuid: instanceGuid,
          enable: enable,
        };

        const enablePlatformLoggingResult = ibmAnalyticsEngineApiService.enablePlatformLogging(
          params
        );

        // all methods should return a Promise
        expectToBePromise(enablePlatformLoggingResult);

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
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.enablePlatformLogging(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.enablePlatformLogging({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const enablePlatformLoggingPromise = ibmAnalyticsEngineApiService.enablePlatformLogging();
        expectToBePromise(enablePlatformLoggingPromise);

        enablePlatformLoggingPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('disablePlatformLogging', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation disablePlatformLogging
        const instanceGuid = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const enable = false;
        const params = {
          instanceGuid: instanceGuid,
          enable: enable,
        };

        const disablePlatformLoggingResult = ibmAnalyticsEngineApiService.disablePlatformLogging(
          params
        );

        // all methods should return a Promise
        expectToBePromise(disablePlatformLoggingResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/v3/analytics_engines/{instance_guid}/logging',
          'PATCH'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.enable).toEqual(enable);
        expect(mockRequestOptions.path.instance_guid).toEqual(instanceGuid);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.disablePlatformLogging(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.disablePlatformLogging({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const disablePlatformLoggingPromise = ibmAnalyticsEngineApiService.disablePlatformLogging();
        expectToBePromise(disablePlatformLoggingPromise);

        disablePlatformLoggingPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getLoggingConfiguration', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getLoggingConfiguration
        const instanceGuid = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const params = {
          instanceGuid: instanceGuid,
        };

        const getLoggingConfigurationResult = ibmAnalyticsEngineApiService.getLoggingConfiguration(
          params
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
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.getLoggingConfiguration(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getLoggingConfiguration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getLoggingConfigurationPromise = ibmAnalyticsEngineApiService.getLoggingConfiguration();
        expectToBePromise(getLoggingConfigurationPromise);

        getLoggingConfigurationPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deleteLoggingConfiguration', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation deleteLoggingConfiguration
        const instanceGuid = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const params = {
          instanceGuid: instanceGuid,
        };

        const deleteLoggingConfigurationResult = ibmAnalyticsEngineApiService.deleteLoggingConfiguration(
          params
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
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceGuid = 'e64c907a-e82f-46fd-addc-ccfafbd28b09';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceGuid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.deleteLoggingConfiguration(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.deleteLoggingConfiguration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const deleteLoggingConfigurationPromise = ibmAnalyticsEngineApiService.deleteLoggingConfiguration();
        expectToBePromise(deleteLoggingConfigurationPromise);

        deleteLoggingConfigurationPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
});
