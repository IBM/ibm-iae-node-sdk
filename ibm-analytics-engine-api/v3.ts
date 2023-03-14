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

/**
 * IBM OpenAPI SDK Code Generator Version: 3.66.0-d6c2d7e0-20230215-221247
 */

import * as extend from 'extend';
import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
import {
  Authenticator,
  BaseService,
  getAuthenticatorFromEnvironment,
  validateParams,
  UserOptions,
} from 'ibm-cloud-sdk-core';
import { getSdkHeaders } from '../lib/common';
// import { getNewLogger, SDKLogger } from 'ibm-cloud-sdk-core';

/**
 * Manage serverless Spark instances and run applications.
 *
 * API Version: 3.0.0
 */

class IbmAnalyticsEngineApiV3 extends BaseService {
  // static _logger: SDKLogger = getNewLogger('IbmAnalyticsEngineApiV3');

  static DEFAULT_SERVICE_URL: string = 'https://api.us-south.ae.cloud.ibm.com';

  static DEFAULT_SERVICE_NAME: string = 'ibm_analytics_engine_api';

  private static _regionalEndpoints = new Map([
    ['us-south', 'https://api.us-south.ae.cloud.ibm.com'],
    ['eu-de', 'https://api.eu-de.ae.cloud.ibm.com'],
  ]);

  /**
   * Returns the service URL associated with the specified region.
   * @param region a string representing the region
   * @returns the service URL associated with the specified region or undefined
   * if no mapping for the region exists
   */
  public static getServiceUrlForRegion(region: string): string {
    return this._regionalEndpoints.get(region)
  }

  /*************************
   * Factory method
   ************************/

  /**
   * Constructs an instance of IbmAnalyticsEngineApiV3 with passed in options and external configuration.
   *
   * @param {UserOptions} [options] - The parameters to send to the service.
   * @param {string} [options.serviceName] - The name of the service to configure
   * @param {Authenticator} [options.authenticator] - The Authenticator object used to authenticate requests to the service
   * @param {string} [options.serviceUrl] - The URL for the service
   * @returns {IbmAnalyticsEngineApiV3}
   */

  public static newInstance(options: UserOptions): IbmAnalyticsEngineApiV3 {
    options = options || {};

    if (!options.serviceName) {
      options.serviceName = this.DEFAULT_SERVICE_NAME;
    }
    if (!options.authenticator) {
      options.authenticator = getAuthenticatorFromEnvironment(options.serviceName);
    }
    const service = new IbmAnalyticsEngineApiV3(options);
    service.configureService(options.serviceName);
    if (options.serviceUrl) {
      service.setServiceUrl(options.serviceUrl);
    }
    return service;
  }

  /**
   * Construct a IbmAnalyticsEngineApiV3 object.
   *
   * @param {Object} options - Options for the service.
   * @param {string} [options.serviceUrl] - The base url to use when contacting the service. The base url may differ between IBM Cloud regions.
   * @param {OutgoingHttpHeaders} [options.headers] - Default headers that shall be included with every request to the service.
   * @param {Authenticator} options.authenticator - The Authenticator object used to authenticate requests to the service
   * @constructor
   * @returns {IbmAnalyticsEngineApiV3}
   */
  constructor(options: UserOptions) {
    options = options || {};

    super(options);
    if (options.serviceUrl) {
      this.setServiceUrl(options.serviceUrl);
    } else {
      this.setServiceUrl(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_URL);
    }
  }

  /*************************
   * analyticsEnginesV3
   ************************/

  /**
   * Find Analytics Engine by id.
   *
   * Retrieve the details of a single Analytics Engine instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - GUID of the Analytics Engine service instance to retrieve.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.Instance>>}
   */
  public getInstance(
    params: IbmAnalyticsEngineApiV3.GetInstanceParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.Instance>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId'];
    const _validParams = ['instanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'instance_id': _params.instanceId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'getInstance'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Find Analytics Engine state by id.
   *
   * Retrieve the state of a single Analytics Engine instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - GUID of the Analytics Engine service instance to retrieve state.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.InstanceGetStateResponse>>}
   */
  public getInstanceState(
    params: IbmAnalyticsEngineApiV3.GetInstanceStateParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.InstanceGetStateResponse>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId'];
    const _validParams = ['instanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'instance_id': _params.instanceId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'getInstanceState'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/state',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Set instance home.
   *
   * Provide the details of the Cloud Object Storage instance to associate with the Analytics Engine instance and use as
   * 'instance home' if 'instance home' has not already been set.
   *
   * **Note**: You can set 'instance home' again if the instance is in 'instance_home_creation_failure' state.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - The ID of the Analytics Engine instance.
   * @param {string} [params.newInstanceId] - UUID of the instance home storage instance.
   * @param {string} [params.newProvider] - Currently only ibm-cos (IBM Cloud Object Storage) is supported.
   * @param {string} [params.newType] - Type of the instance home storage. Currently, only objectstore (Cloud Object
   * Storage) is supported.
   * @param {string} [params.newRegion] - Region of the Cloud Object Storage instance.
   * @param {string} [params.newEndpoint] - Endpoint to access the Cloud Object Storage instance.
   * @param {string} [params.newHmacAccessKey] - Cloud Object Storage access key.
   * @param {string} [params.newHmacSecretKey] - Cloud Object Storage secret key.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.InstanceHomeResponse>>}
   */
  public setInstanceHome(
    params: IbmAnalyticsEngineApiV3.SetInstanceHomeParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.InstanceHomeResponse>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId'];
    const _validParams = ['instanceId', 'newInstanceId', 'newProvider', 'newType', 'newRegion', 'newEndpoint', 'newHmacAccessKey', 'newHmacSecretKey', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'instance_id': _params.newInstanceId,
      'provider': _params.newProvider,
      'type': _params.newType,
      'region': _params.newRegion,
      'endpoint': _params.newEndpoint,
      'hmac_access_key': _params.newHmacAccessKey,
      'hmac_secret_key': _params.newHmacSecretKey,
    };

    const path = {
      'instance_id': _params.instanceId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'setInstanceHome'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/instance_home',
        method: 'PUT',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update instance home credentials.
   *
   * Update the HMAC credentials used to access the instance home, if the instance home was set earlier. Credentials
   * must have write access to the object storage used as instance home.
   *
   * **Note**: Your running applications and the Spark history server would continue to use the old credentials after
   * updating the HMAC credentials. Before revoking the old credentials, you must either wait for them to finish running
   * or stop them.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - The ID of the Analytics Engine instance.
   * @param {string} params.hmacAccessKey - Cloud Object Storage access key.
   * @param {string} params.hmacSecretKey - Cloud Object Storage secret key.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.InstanceHomeResponse>>}
   */
  public updateInstanceHomeCredentials(
    params: IbmAnalyticsEngineApiV3.UpdateInstanceHomeCredentialsParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.InstanceHomeResponse>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId', 'hmacAccessKey', 'hmacSecretKey'];
    const _validParams = ['instanceId', 'hmacAccessKey', 'hmacSecretKey', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'hmac_access_key': _params.hmacAccessKey,
      'hmac_secret_key': _params.hmacSecretKey,
    };

    const path = {
      'instance_id': _params.instanceId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'updateInstanceHomeCredentials'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/instance_home',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get instance default Spark configurations.
   *
   * Get the default Spark configuration properties that will be applied to all applications of the instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - The ID of the Analytics Engine instance.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.JsonObject>>}
   */
  public getInstanceDefaultConfigs(
    params: IbmAnalyticsEngineApiV3.GetInstanceDefaultConfigsParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.JsonObject>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId'];
    const _validParams = ['instanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'instance_id': _params.instanceId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'getInstanceDefaultConfigs'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/default_configs',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Replace instance default Spark configurations.
   *
   * Replace the default Spark configuration properties that will be applied to all applications of the instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - The ID of the Analytics Engine instance.
   * @param {JsonObject} params.body - Spark configuration properties to replace existing instance default Spark
   * configurations.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.JsonObject>>}
   */
  public replaceInstanceDefaultConfigs(
    params: IbmAnalyticsEngineApiV3.ReplaceInstanceDefaultConfigsParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.JsonObject>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId', 'body'];
    const _validParams = ['instanceId', 'body', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = _params.body;
    const path = {
      'instance_id': _params.instanceId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'replaceInstanceDefaultConfigs'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/default_configs',
        method: 'PUT',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update instance default Spark configurations.
   *
   * Update the default Spark configuration properties that will be applied to all applications of the instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - The ID of the Analytics Engine instance.
   * @param {JsonObject} params.body - Spark configuration properties to be updated. Properties will be merged with
   * existing configuration properties. Set a property value to `null` in order to unset it.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.JsonObject>>}
   */
  public updateInstanceDefaultConfigs(
    params: IbmAnalyticsEngineApiV3.UpdateInstanceDefaultConfigsParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.JsonObject>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId', 'body'];
    const _validParams = ['instanceId', 'body', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = _params.body;
    const path = {
      'instance_id': _params.instanceId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'updateInstanceDefaultConfigs'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/default_configs',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/merge-patch+json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get instance default runtime.
   *
   * Get the default runtime environment on which all workloads of the instance will run.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - The ID of the Analytics Engine instance.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.Runtime>>}
   */
  public getInstanceDefaultRuntime(
    params: IbmAnalyticsEngineApiV3.GetInstanceDefaultRuntimeParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.Runtime>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId'];
    const _validParams = ['instanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'instance_id': _params.instanceId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'getInstanceDefaultRuntime'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/default_runtime',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Replace instance default runtime.
   *
   * Replace the default runtime environment on which all workloads of the instance will run.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - The ID of the Analytics Engine instance.
   * @param {string} [params.sparkVersion] - Spark version of the runtime environment.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.Runtime>>}
   */
  public replaceInstanceDefaultRuntime(
    params: IbmAnalyticsEngineApiV3.ReplaceInstanceDefaultRuntimeParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.Runtime>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId'];
    const _validParams = ['instanceId', 'sparkVersion', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'spark_version': _params.sparkVersion,
    };

    const path = {
      'instance_id': _params.instanceId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'replaceInstanceDefaultRuntime'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/default_runtime',
        method: 'PUT',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Deploy a Spark application.
   *
   * Deploys a Spark application on a given serverless Spark instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - The identifier of the Analytics Engine instance associated with the Spark
   * application(s).
   * @param {ApplicationRequestApplicationDetails} [params.applicationDetails] - Application details.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationResponse>>}
   */
  public createApplication(
    params: IbmAnalyticsEngineApiV3.CreateApplicationParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationResponse>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId'];
    const _validParams = ['instanceId', 'applicationDetails', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'application_details': _params.applicationDetails,
    };

    const path = {
      'instance_id': _params.instanceId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'createApplication'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/spark_applications',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List all Spark applications.
   *
   * Returns a list of all Spark applications submitted to the specified Analytics Engine instance. The result can be
   * filtered by specifying query parameters.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - The identifier of the Analytics Engine instance associated with the Spark
   * application(s).
   * @param {string[]} [params.state] - List of Spark application states that will be used to filter the response.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationCollection>>}
   */
  public listApplications(
    params: IbmAnalyticsEngineApiV3.ListApplicationsParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationCollection>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId'];
    const _validParams = ['instanceId', 'state', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'state': _params.state,
    };

    const path = {
      'instance_id': _params.instanceId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'listApplications'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/spark_applications',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Retrieve the details of a given Spark application.
   *
   * Gets the details of a given Spark application.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - Identifier of the instance to which the application belongs.
   * @param {string} params.applicationId - Identifier of the application for which details are requested.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationGetResponse>>}
   */
  public getApplication(
    params: IbmAnalyticsEngineApiV3.GetApplicationParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationGetResponse>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId', 'applicationId'];
    const _validParams = ['instanceId', 'applicationId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'instance_id': _params.instanceId,
      'application_id': _params.applicationId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'getApplication'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/spark_applications/{application_id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Stop application.
   *
   * Stops a running application identified by the app_id identifier. This is an idempotent operation. Performs no
   * action if the requested application is already stopped or completed.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - Identifier of the instance to which the application belongs.
   * @param {string} params.applicationId - Identifier of the application that needs to be stopped.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.EmptyObject>>}
   */
  public deleteApplication(
    params: IbmAnalyticsEngineApiV3.DeleteApplicationParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId', 'applicationId'];
    const _validParams = ['instanceId', 'applicationId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'instance_id': _params.instanceId,
      'application_id': _params.applicationId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'deleteApplication'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/spark_applications/{application_id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get the status of the application.
   *
   * Returns the status of the given Spark application.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - Identifier of the instance to which the applications belongs.
   * @param {string} params.applicationId - Identifier of the application for which details are requested.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationGetStateResponse>>}
   */
  public getApplicationState(
    params: IbmAnalyticsEngineApiV3.GetApplicationStateParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationGetStateResponse>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId', 'applicationId'];
    const _validParams = ['instanceId', 'applicationId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'instance_id': _params.instanceId,
      'application_id': _params.applicationId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'getApplicationState'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/spark_applications/{application_id}/state',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get current resource consumption.
   *
   * Gives the total memory and virtual processor cores allotted to all the applications running in the service instance
   * at this point in time. When auto-scaled applications are running, the resources allotted will change over time,
   * based on the applications's demands. Note: The consumption is not an indication of actual resource consumption by
   * Spark processes. It is the sum of resources allocated to the currently running applications at the time of
   * application submission.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - ID of the Analytics Engine instance.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.CurrentResourceConsumptionResponse>>}
   */
  public getCurrentResourceConsumption(
    params: IbmAnalyticsEngineApiV3.GetCurrentResourceConsumptionParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.CurrentResourceConsumptionResponse>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId'];
    const _validParams = ['instanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'instance_id': _params.instanceId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'getCurrentResourceConsumption'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/current_resource_consumption',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get resource consumption limits.
   *
   * Returns the maximum total memory and virtual processor cores that can be allotted across all the applications
   * running in the service instance at any point in time.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - ID of the Analytics Engine instance.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ResourceConsumptionLimitsResponse>>}
   */
  public getResourceConsumptionLimits(
    params: IbmAnalyticsEngineApiV3.GetResourceConsumptionLimitsParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ResourceConsumptionLimitsResponse>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId'];
    const _validParams = ['instanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'instance_id': _params.instanceId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'getResourceConsumptionLimits'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/resource_consumption_limits',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Replace log forwarding configuration.
   *
   * Modify the configuration for forwarding logs from the Analytics Engine instance to IBM Log Analysis server. Use
   * this endpoint to enable or disable log forwarding.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - ID of the Analytics Engine instance.
   * @param {boolean} [params.enabled] - Enable or disable log forwarding.
   * @param {string[]} [params.sources] - List of sources of logs that will be forwarded. By default, only
   * 'spark-driver' logs are forwarded.
   * @param {string[]} [params.tags] - List of tags to be applied to the logs being forwarded. They can be used to
   * filter the logs in the IBM Log Analysis server.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.LogForwardingConfigResponse>>}
   */
  public replaceLogForwardingConfig(
    params: IbmAnalyticsEngineApiV3.ReplaceLogForwardingConfigParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.LogForwardingConfigResponse>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId'];
    const _validParams = ['instanceId', 'enabled', 'sources', 'tags', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'enabled': _params.enabled,
      'sources': _params.sources,
      'tags': _params.tags,
    };

    const path = {
      'instance_id': _params.instanceId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'replaceLogForwardingConfig'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/log_forwarding_config',
        method: 'PUT',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get log forwarding configuration.
   *
   * Retrieve the log forwarding configuration of the Analytics Engine instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - ID of the Analytics Engine instance.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.LogForwardingConfigResponse>>}
   */
  public getLogForwardingConfig(
    params: IbmAnalyticsEngineApiV3.GetLogForwardingConfigParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.LogForwardingConfigResponse>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId'];
    const _validParams = ['instanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'instance_id': _params.instanceId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'getLogForwardingConfig'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/log_forwarding_config',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Enable or disable log forwarding.
   *
   * Enable or disable log forwarding from IBM Analytics Engine to IBM Log Analysis server.
   * *Note:* Deprecated. Use the log forwarding config api instead.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceGuid - GUID of the instance details for which log forwarding is to be configured.
   * @param {boolean} [params.enable] - Enable or disable log forwarding.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.LoggingConfigurationResponse>>}
   * @deprecated this method is deprecated and may be removed in a future release
   */
  public configurePlatformLogging(
    params: IbmAnalyticsEngineApiV3.ConfigurePlatformLoggingParams
  ): Promise<
    IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.LoggingConfigurationResponse>
  > {
    // IbmAnalyticsEngineApiV3._logger.warn('A deprecated operation has been invoked: configurePlatformLogging');
    const _params = { ...params };
    const _requiredParams = ['instanceGuid'];
    const _validParams = ['instanceGuid', 'enable', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'enable': _params.enable,
    };

    const path = {
      'instance_guid': _params.instanceGuid,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'configurePlatformLogging'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_guid}/logging',
        method: 'PUT',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Retrieve the logging configuration for a given instance id.
   *
   * Retrieve the logging configuration of a given Analytics Engine instance.
   * *Note:* Deprecated. Use the log forwarding config api instead.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceGuid - GUID of the Analytics Engine service instance to retrieve log configuration.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.LoggingConfigurationResponse>>}
   * @deprecated this method is deprecated and may be removed in a future release
   */
  public getLoggingConfiguration(
    params: IbmAnalyticsEngineApiV3.GetLoggingConfigurationParams
  ): Promise<
    IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.LoggingConfigurationResponse>
  > {
    // IbmAnalyticsEngineApiV3._logger.warn('A deprecated operation has been invoked: getLoggingConfiguration');
    const _params = { ...params };
    const _requiredParams = ['instanceGuid'];
    const _validParams = ['instanceGuid', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'instance_guid': _params.instanceGuid,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'getLoggingConfiguration'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_guid}/logging',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Start Spark history server.
   *
   * Start the Spark history server for the given Analytics Engine instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - The ID of the Analytics Engine instance to which the Spark history server
   * belongs.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.SparkHistoryServerResponse>>}
   */
  public startSparkHistoryServer(
    params: IbmAnalyticsEngineApiV3.StartSparkHistoryServerParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.SparkHistoryServerResponse>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId'];
    const _validParams = ['instanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'instance_id': _params.instanceId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'startSparkHistoryServer'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/spark_history_server',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get Spark history server details.
   *
   * Get the details of the Spark history server of the given Analytics Engine instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - The ID of the Analytics Engine instance to which the Spark history server
   * belongs.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.SparkHistoryServerResponse>>}
   */
  public getSparkHistoryServer(
    params: IbmAnalyticsEngineApiV3.GetSparkHistoryServerParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.SparkHistoryServerResponse>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId'];
    const _validParams = ['instanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'instance_id': _params.instanceId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'getSparkHistoryServer'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/spark_history_server',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Stop Spark history server.
   *
   * Stop the Spark history server of the given Analytics Engine instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - The ID of the Analytics Engine instance to which the Spark history server
   * belongs.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.EmptyObject>>}
   */
  public stopSparkHistoryServer(
    params: IbmAnalyticsEngineApiV3.StopSparkHistoryServerParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['instanceId'];
    const _validParams = ['instanceId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'instance_id': _params.instanceId,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'stopSparkHistoryServer'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/spark_history_server',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
}

/*************************
 * interfaces
 ************************/

namespace IbmAnalyticsEngineApiV3 {
  /** An operation response. */
  export interface Response<T = any> {
    result: T;
    status: number;
    statusText: string;
    headers: IncomingHttpHeaders;
  }

  /** The callback for a service request. */
  export type Callback<T> = (error: any, response?: Response<T>) => void;

  /** The body of a service request that returns no response data. */
  export interface EmptyObject {}

  /** A standard JS object, defined to avoid the limitations of `Object` and `object` */
  export interface JsonObject {
    [key: string]: any;
  }

  /*************************
   * request interfaces
   ************************/

  /** Parameters for the `getInstance` operation. */
  export interface GetInstanceParams {
    /** GUID of the Analytics Engine service instance to retrieve. */
    instanceId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getInstanceState` operation. */
  export interface GetInstanceStateParams {
    /** GUID of the Analytics Engine service instance to retrieve state. */
    instanceId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `setInstanceHome` operation. */
  export interface SetInstanceHomeParams {
    /** The ID of the Analytics Engine instance. */
    instanceId: string;
    /** UUID of the instance home storage instance. */
    newInstanceId?: string;
    /** Currently only ibm-cos (IBM Cloud Object Storage) is supported. */
    newProvider?: string;
    /** Type of the instance home storage. Currently, only objectstore (Cloud Object Storage) is supported. */
    newType?: string;
    /** Region of the Cloud Object Storage instance. */
    newRegion?: string;
    /** Endpoint to access the Cloud Object Storage instance. */
    newEndpoint?: string;
    /** Cloud Object Storage access key. */
    newHmacAccessKey?: string;
    /** Cloud Object Storage secret key. */
    newHmacSecretKey?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateInstanceHomeCredentials` operation. */
  export interface UpdateInstanceHomeCredentialsParams {
    /** The ID of the Analytics Engine instance. */
    instanceId: string;
    /** Cloud Object Storage access key. */
    hmacAccessKey: string;
    /** Cloud Object Storage secret key. */
    hmacSecretKey: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getInstanceDefaultConfigs` operation. */
  export interface GetInstanceDefaultConfigsParams {
    /** The ID of the Analytics Engine instance. */
    instanceId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `replaceInstanceDefaultConfigs` operation. */
  export interface ReplaceInstanceDefaultConfigsParams {
    /** The ID of the Analytics Engine instance. */
    instanceId: string;
    /** Spark configuration properties to replace existing instance default Spark configurations. */
    body: JsonObject;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateInstanceDefaultConfigs` operation. */
  export interface UpdateInstanceDefaultConfigsParams {
    /** The ID of the Analytics Engine instance. */
    instanceId: string;
    /** Spark configuration properties to be updated. Properties will be merged with existing configuration
     *  properties. Set a property value to `null` in order to unset it.
     */
    body: JsonObject;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getInstanceDefaultRuntime` operation. */
  export interface GetInstanceDefaultRuntimeParams {
    /** The ID of the Analytics Engine instance. */
    instanceId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `replaceInstanceDefaultRuntime` operation. */
  export interface ReplaceInstanceDefaultRuntimeParams {
    /** The ID of the Analytics Engine instance. */
    instanceId: string;
    /** Spark version of the runtime environment. */
    sparkVersion?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createApplication` operation. */
  export interface CreateApplicationParams {
    /** The identifier of the Analytics Engine instance associated with the Spark application(s). */
    instanceId: string;
    /** Application details. */
    applicationDetails?: ApplicationRequestApplicationDetails;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listApplications` operation. */
  export interface ListApplicationsParams {
    /** The identifier of the Analytics Engine instance associated with the Spark application(s). */
    instanceId: string;
    /** List of Spark application states that will be used to filter the response. */
    state?: ListApplicationsConstants.State[] | string[];
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `listApplications` operation. */
  export namespace ListApplicationsConstants {
    /** List of Spark application states that will be used to filter the response. */
    export enum State {
      FINISHED = 'finished',
      RUNNING = 'running',
      FAILED = 'failed',
      ACCEPTED = 'accepted',
      STOPPED = 'stopped',
      AUTO_TERMINATED = 'auto_terminated',
      OPS_TERMINATED = 'ops_terminated',
    }
  }

  /** Parameters for the `getApplication` operation. */
  export interface GetApplicationParams {
    /** Identifier of the instance to which the application belongs. */
    instanceId: string;
    /** Identifier of the application for which details are requested. */
    applicationId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteApplication` operation. */
  export interface DeleteApplicationParams {
    /** Identifier of the instance to which the application belongs. */
    instanceId: string;
    /** Identifier of the application that needs to be stopped. */
    applicationId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getApplicationState` operation. */
  export interface GetApplicationStateParams {
    /** Identifier of the instance to which the applications belongs. */
    instanceId: string;
    /** Identifier of the application for which details are requested. */
    applicationId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getCurrentResourceConsumption` operation. */
  export interface GetCurrentResourceConsumptionParams {
    /** ID of the Analytics Engine instance. */
    instanceId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getResourceConsumptionLimits` operation. */
  export interface GetResourceConsumptionLimitsParams {
    /** ID of the Analytics Engine instance. */
    instanceId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `replaceLogForwardingConfig` operation. */
  export interface ReplaceLogForwardingConfigParams {
    /** ID of the Analytics Engine instance. */
    instanceId: string;
    /** Enable or disable log forwarding. */
    enabled?: boolean;
    /** List of sources of logs that will be forwarded. By default, only 'spark-driver' logs are forwarded. */
    sources?: string[];
    /** List of tags to be applied to the logs being forwarded. They can be used to filter the logs in the IBM Log
     *  Analysis server.
     */
    tags?: string[];
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getLogForwardingConfig` operation. */
  export interface GetLogForwardingConfigParams {
    /** ID of the Analytics Engine instance. */
    instanceId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `configurePlatformLogging` operation. */
  export interface ConfigurePlatformLoggingParams {
    /** GUID of the instance details for which log forwarding is to be configured. */
    instanceGuid: string;
    /** Enable or disable log forwarding. */
    enable?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getLoggingConfiguration` operation. */
  export interface GetLoggingConfigurationParams {
    /** GUID of the Analytics Engine service instance to retrieve log configuration. */
    instanceGuid: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `startSparkHistoryServer` operation. */
  export interface StartSparkHistoryServerParams {
    /** The ID of the Analytics Engine instance to which the Spark history server belongs. */
    instanceId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getSparkHistoryServer` operation. */
  export interface GetSparkHistoryServerParams {
    /** The ID of the Analytics Engine instance to which the Spark history server belongs. */
    instanceId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `stopSparkHistoryServer` operation. */
  export interface StopSparkHistoryServerParams {
    /** The ID of the Analytics Engine instance to which the Spark history server belongs. */
    instanceId: string;
    headers?: OutgoingHttpHeaders;
  }

  /*************************
   * model interfaces
   ************************/

  /** Details of a Spark application. */
  export interface Application {
    /** Identifier provided by Analytics Engine service for the Spark application. */
    id?: string;
    /** Full URL of the resource. */
    href?: string;
    /** Runtime enviroment for applications and other workloads. */
    runtime?: Runtime;
    /** Identifier provided by Apache Spark for the application. */
    spark_application_id?: string;
    /** Name of the Spark application. */
    spark_application_name?: string;
    /** State of the Spark application. */
    state?: string;
    /** URL of the Apache Spark web UI that is available when the application is running. */
    spark_ui?: string;
    /** Time when the application was submitted. */
    submission_time?: string;
    /** Time when the application was started. */
    start_time?: string;
    /** Time when the application run ended in success, failure or was stopped. */
    end_time?: string;
    /** Deprecated: (deprecated) Time when the application was completed. */
    finish_time?: string;
    /** Time when the application will be automatically stopped by the service. */
    auto_termination_time?: string;
  }

  /** An array of application details. */
  export interface ApplicationCollection {
    /** List of applications. */
    applications?: Application[];
  }

  /** Application details. */
  export interface ApplicationDetails {
    /** Path of the application to run. */
    application?: string;
    /** Runtime enviroment for applications and other workloads. */
    runtime?: Runtime;
    /** Path of the jar files containing the application. */
    jars?: string;
    /** Package names. */
    packages?: string;
    /** Repositories names. */
    repositories?: string;
    /** File names. */
    files?: string;
    /** Archive Names. */
    archives?: string;
    /** Name of the application. */
    name?: string;
    /** Entry point for a Spark application bundled as a '.jar' file. This is applicable only for Java or Scala
     *  applications.
     */
    class?: string;
    /** An array of arguments to be passed to the application. */
    arguments?: string[];
    /** Application configurations to override the value specified at instance level. See [Spark environment
     *  variables]( https://spark.apache.org/docs/latest/configuration.html#available-properties) for a list of the
     *  supported variables.
     */
    conf?: JsonObject;
    /** Application environment configurations to use. See [Spark environment
     *  variables](https://spark.apache.org/docs/latest/configuration.html#environment-variables) for a list of the
     *  supported variables.
     */
    env?: JsonObject;
  }

  /** Response of the Application Get API. */
  export interface ApplicationGetResponse {
    /** Application details. */
    application_details?: ApplicationDetails;
    /** Application ID. */
    id?: string;
    /** Identifier provided by Apache Spark for the application. */
    spark_application_id?: string;
    /** Name of the Spark application. */
    spark_application_name?: string;
    /** State of the Spark application. */
    state?: string;
    /** URL of the Apache Spark web UI that is available when the application is running. */
    spark_ui?: string;
    /** List of additional information messages on the current state of the application. */
    state_details?: ApplicationGetResponseStateDetailsItem[];
    /** Time when the application was submitted. */
    submission_time?: string;
    /** Time when the application started, in the format YYYY-MM-DDTHH:mm:ssZ. */
    start_time?: string;
    /** Time when the application ended either in success or failure, in the format YYYY-MM-DDTHH:mm:ssZ. */
    end_time?: string;
    /** Deprecated: (deprecated) Time when the application completed successfully, in the format
     *  YYYY-MM-DDTHH:mm:ssZ.
     */
    finish_time?: string;
    /** Time when the application will be automatically stopped by the service. */
    auto_termination_time?: string;
  }

  /** Additional information message on the current state of the application. */
  export interface ApplicationGetResponseStateDetailsItem {
    /** Type of the message. */
    type?: string;
    /** Fixed code for the message. */
    code?: string;
    /** A descriptive message providing additional information on the current application state. */
    message?: string;
  }

  /** State of a given application. */
  export interface ApplicationGetStateResponse {
    /** Identifier of the application. */
    id?: string;
    /** State of the Spark application. */
    state?: string;
    /** Time when the application was started. */
    start_time?: string;
    /** Time when the application run ended in success, failure or was stopped. */
    end_time?: string;
    /** Deprecated: (deprecated) Time when the application was completed. */
    finish_time?: string;
    /** Time when the application will be automatically stopped by the service. */
    auto_termination_time?: string;
  }

  /** Application details. */
  export interface ApplicationRequestApplicationDetails {
    /** Path of the application to run. */
    application?: string;
    /** Runtime enviroment for applications and other workloads. */
    runtime?: Runtime;
    /** Path of the jar files containing the application. */
    jars?: string;
    /** Package names. */
    packages?: string;
    /** Repositories names. */
    repositories?: string;
    /** File names. */
    files?: string;
    /** Archive Names. */
    archives?: string;
    /** Name of the application. */
    name?: string;
    /** Entry point for a Spark application bundled as a '.jar' file. This is applicable only for Java or Scala
     *  applications.
     */
    class?: string;
    /** An array of arguments to be passed to the application. */
    arguments?: string[];
    /** Application configurations to override the value specified at instance level. See [Spark environment
     *  variables]( https://spark.apache.org/docs/latest/configuration.html#available-properties) for a list of the
     *  supported variables.
     */
    conf?: JsonObject;
    /** Application environment configurations to use. See [Spark environment
     *  variables](https://spark.apache.org/docs/latest/configuration.html#environment-variables) for a list of the
     *  supported variables.
     */
    env?: JsonObject;
  }

  /** Application response details. */
  export interface ApplicationResponse {
    /** Identifier of the application that was submitted. */
    id?: string;
    /** State of the Spark application. */
    state?: string;
  }

  /** Current resource consumption of the instance. */
  export interface CurrentResourceConsumptionResponse {
    /** Number of virtual processor cores used. */
    cores?: string;
    /** Amount of memory used. */
    memory?: string;
  }

  /** Details of Analytics Engine instance. */
  export interface Instance {
    /** GUID of the Analytics Engine instance. */
    id?: string;
    /** Full URL of the resource. */
    href?: string;
    /** State of the Analytics Engine instance. */
    state?: string;
    /** Timestamp when the state of the instance was changed, in the format YYYY-MM-DDTHH:mm:ssZ. */
    state_change_time?: string;
    /** Runtime enviroment for applications and other workloads. */
    default_runtime?: Runtime;
    /** Object storage instance that acts as the home for custom libraries and Spark events. */
    instance_home?: InstanceHome;
    /** Instance level default configuration for Spark workloads. */
    default_config?: InstanceDefaultConfig;
  }

  /** Instance level default configuration for Spark workloads. */
  export interface InstanceDefaultConfig {
    /** Value of the Spark configuration key. */
    key?: string;
  }

  /** State details of Analytics Engine instance. */
  export interface InstanceGetStateResponse {
    /** GUID of the Analytics Engine instance. */
    id?: string;
    /** State of the Analytics Engine instance. */
    state?: string;
  }

  /** Object storage instance that acts as the home for custom libraries and Spark events. */
  export interface InstanceHome {
    /** UUID of the instance home storage instance. */
    id?: string;
    /** Currently only ibm-cos (IBM Cloud Object Storage) is supported. */
    provider?: string;
    /** Type of the instance home storage. Currently, only objectstore (Cloud Object Storage) is supported. */
    type?: string;
    /** Region of the Cloud Object Storage instance. */
    region?: string;
    /** Endpoint to access the Cloud Object Storage instance. */
    endpoint?: string;
    /** Cloud Object Storage bucket used as instance home. */
    bucket?: string;
    /** Cloud Object Storage access key. Masked for security reasons. */
    hmac_access_key?: string;
    /** Cloud Object Storage secret key. Masked for security reasons. */
    hmac_secret_key?: string;
  }

  /** Response of Instance home API. */
  export interface InstanceHomeResponse {
    /** UUID of the instance home storage instance. */
    instance_id?: string;
    /** Currently only ibm-cos (IBM Cloud Object Storage) is supported. */
    provider?: string;
    /** Type of the instance home storage. Currently, only objectstore (Cloud Object Storage) is supported. */
    type?: string;
    /** Region of the Cloud Object Storage instance. */
    region?: string;
    /** Endpoint to access the Cloud Object Storage instance. */
    endpoint?: string;
    /** Cloud Object Storage access key. */
    hmac_access_key?: string;
    /** Cloud Object Storage secret key. */
    hmac_secret_key?: string;
  }

  /** Log forwarding configuration details. */
  export interface LogForwardingConfigResponse {
    /** List of sources of logs that are being forwarded. */
    sources?: string[];
    /** List of tags that are applied to the logs being forwarded. */
    tags?: string[];
    /** Log server properties. */
    log_server?: LogForwardingConfigResponseLogServer;
    /** Indicates whether log forwarding is enabled or not. */
    enabled?: boolean;
  }

  /** Log server properties. */
  export interface LogForwardingConfigResponseLogServer {
    /** Type of the log server. */
    type?: string;
  }

  /** (deprecated) Response of logging API. */
  export interface LoggingConfigurationResponse {
    /** component array. */
    components?: string[];
    /** log server properties. */
    log_server?: LoggingConfigurationResponseLogServer;
    /** enable. */
    enable?: boolean;
  }

  /** log server properties. */
  export interface LoggingConfigurationResponseLogServer {
    /** type of log server. */
    type?: string;
  }

  /** Resource consumption limits for the instance. */
  export interface ResourceConsumptionLimitsResponse {
    /** Maximum number of virtual processor cores that be used in the instance. */
    max_cores?: string;
    /** Maximum memory that can be used in the instance. */
    max_memory?: string;
  }

  /** Runtime enviroment for applications and other workloads. */
  export interface Runtime {
    /** Spark version of the runtime environment. */
    spark_version?: string;
  }

  /** Status of the Spark history server. */
  export interface SparkHistoryServerResponse {
    /** State of the Spark history server. */
    state?: string;
    /** Number of cpu cores used by the Spark history server. */
    cores?: string;
    /** Amount of memory used by the Spark history server. */
    memory?: string;
    /** Time when the Spark history server was started. */
    start_time?: string;
    /** Time when the Spark history server was stopped. */
    stop_time?: string;
    /** Time when the Spark history server will be stopped automatically. */
    auto_termination_time?: string;
  }
}

export = IbmAnalyticsEngineApiV3;
