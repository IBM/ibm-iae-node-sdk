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

// need to import the whole package to mock getAuthenticatorFromEnvironment
const core = require('ibm-cloud-sdk-core');
const { NoAuthAuthenticator, unitTestUtils } = core;

const IbmAnalyticsEngineApiV3 = require('../../dist/ibm-analytics-engine-api/v3');

const {
  getOptions,
  checkUrlAndMethod,
  checkMediaHeaders,
  expectToBePromise,
} = unitTestUtils;

const service = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://api.us-south.ae.cloud.ibm.com',
};

const ibmAnalyticsEngineApiService = new IbmAnalyticsEngineApiV3(service);

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
      expect(testInstance.baseOptions.serviceName).toBe(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME);
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
  describe('getInstanceById', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getInstanceById
        const instanceId = 'testString';
        const params = {
          instanceId: instanceId,
        };

        const getInstanceByIdResult = ibmAnalyticsEngineApiService.getInstanceById(params);

        // all methods should return a Promise
        expectToBePromise(getInstanceByIdResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v3/analytics_engines/{instance_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['instance_id']).toEqual(instanceId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.getInstanceById(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getInstanceById({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getInstanceByIdPromise = ibmAnalyticsEngineApiService.getInstanceById();
        expectToBePromise(getInstanceByIdPromise);

        getInstanceByIdPromise.catch(err => {
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
        application: 'testString',
        class: 'testString',
        application_arguments: ['testString'],
        conf: { 'key1': 'testString' },
        env: { 'key1': 'testString' },
      };

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation createApplication
        const instanceId = 'testString';
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

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v3/analytics_engines/{instance_id}/spark/applications', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['application_details']).toEqual(applicationDetails);
        expect(options.path['instance_id']).toEqual(instanceId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'testString';
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
  describe('getApplications', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getApplications
        const instanceId = 'testString';
        const params = {
          instanceId: instanceId,
        };

        const getApplicationsResult = ibmAnalyticsEngineApiService.getApplications(params);

        // all methods should return a Promise
        expectToBePromise(getApplicationsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v3/analytics_engines/{instance_id}/spark/applications', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['instance_id']).toEqual(instanceId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        ibmAnalyticsEngineApiService.getApplications(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getApplications({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getApplicationsPromise = ibmAnalyticsEngineApiService.getApplications();
        expectToBePromise(getApplicationsPromise);

        getApplicationsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getApplicationById', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getApplicationById
        const instanceId = 'testString';
        const applicationId = 'testString';
        const params = {
          instanceId: instanceId,
          applicationId: applicationId,
        };

        const getApplicationByIdResult = ibmAnalyticsEngineApiService.getApplicationById(params);

        // all methods should return a Promise
        expectToBePromise(getApplicationByIdResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v3/analytics_engines/{instance_id}/spark/applications/{application_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['instance_id']).toEqual(instanceId);
        expect(options.path['application_id']).toEqual(applicationId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'testString';
        const applicationId = 'testString';
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

        ibmAnalyticsEngineApiService.getApplicationById(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.getApplicationById({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getApplicationByIdPromise = ibmAnalyticsEngineApiService.getApplicationById();
        expectToBePromise(getApplicationByIdPromise);

        getApplicationByIdPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deleteApplicationById', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation deleteApplicationById
        const instanceId = 'testString';
        const applicationId = 'testString';
        const params = {
          instanceId: instanceId,
          applicationId: applicationId,
        };

        const deleteApplicationByIdResult = ibmAnalyticsEngineApiService.deleteApplicationById(params);

        // all methods should return a Promise
        expectToBePromise(deleteApplicationByIdResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v3/analytics_engines/{instance_id}/spark/applications/{application_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['instance_id']).toEqual(instanceId);
        expect(options.path['application_id']).toEqual(applicationId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'testString';
        const applicationId = 'testString';
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

        ibmAnalyticsEngineApiService.deleteApplicationById(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await ibmAnalyticsEngineApiService.deleteApplicationById({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const deleteApplicationByIdPromise = ibmAnalyticsEngineApiService.deleteApplicationById();
        expectToBePromise(deleteApplicationByIdPromise);

        deleteApplicationByIdPromise.catch(err => {
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
        const instanceId = 'testString';
        const applicationId = 'testString';
        const params = {
          instanceId: instanceId,
          applicationId: applicationId,
        };

        const getApplicationStateResult = ibmAnalyticsEngineApiService.getApplicationState(params);

        // all methods should return a Promise
        expectToBePromise(getApplicationStateResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v3/analytics_engines/{instance_id}/spark/applications/{application_id}/state', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['instance_id']).toEqual(instanceId);
        expect(options.path['application_id']).toEqual(applicationId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = 'testString';
        const applicationId = 'testString';
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
});
