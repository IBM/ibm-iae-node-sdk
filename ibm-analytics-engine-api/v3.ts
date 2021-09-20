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

/**
 * IBM OpenAPI SDK Code Generator Version: 3.38.0-07189efd-20210827-205025
 */

import * as extend from 'extend';
import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
import {
  Authenticator,
  BaseService,
  getAuthenticatorFromEnvironment,
  getMissingParams,
  UserOptions,
} from 'ibm-cloud-sdk-core';
import { getSdkHeaders } from '../lib/common';

/**
 * Manage serverless Spark instances and run applications.
 *
 * API Version: 3.0.0
 */

class IbmAnalyticsEngineApiV3 extends BaseService {
  static DEFAULT_SERVICE_URL: string = 'https://api.us-south.ae.cloud.ibm.com';

  static DEFAULT_SERVICE_NAME: string = 'ibm_analytics_engine_api';

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
    const requiredParams = ['instanceId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
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
   * Deploy a Spark application.
   *
   * Deploys a Spark application on a given serverless Spark instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - The identifier of the instance where the Spark application is submitted.
   * @param {ApplicationRequestApplicationDetails} [params.applicationDetails] - Application details.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationResponse>>}
   */
  public createApplication(
    params: IbmAnalyticsEngineApiV3.CreateApplicationParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationResponse>> {
    const _params = { ...params };
    const requiredParams = ['instanceId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
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
   * Retrieve all Spark applications.
   *
   * Gets all applications submitted in an instance with a specified instance-id.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - Identifier of the instance where the applications run.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationCollection>>}
   */
  public listApplications(
    params: IbmAnalyticsEngineApiV3.ListApplicationsParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationCollection>> {
    const _params = { ...params };
    const requiredParams = ['instanceId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

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
   * Gets the details of the given Spark application.
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
    const requiredParams = ['instanceId', 'applicationId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
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
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.Empty>>}
   */
  public deleteApplication(
    params: IbmAnalyticsEngineApiV3.DeleteApplicationParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.Empty>> {
    const _params = { ...params };
    const requiredParams = ['instanceId', 'applicationId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
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
    const requiredParams = ['instanceId', 'applicationId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
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
   * Edit Instance Home details.
   *
   * Instance details of the Object Storage instance that will be used as instance home.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - The identifier of the instance details to be added.
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
  public createInstanceHome(
    params: IbmAnalyticsEngineApiV3.CreateInstanceHomeParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.InstanceHomeResponse>> {
    const _params = { ...params };
    const requiredParams = ['instanceId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
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
      'createInstanceHome'
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
   * Enable platform logging.
   *
   * Enable platform logging from IBM Analytics Engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceGuid - The identifier of the instance details to be added.
   * @param {boolean} [params.enable] - enable platform logging.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.LoggingConfigurationResponse>>}
   */
  public enablePlatformLogging(
    params: IbmAnalyticsEngineApiV3.EnablePlatformLoggingParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.LoggingConfigurationResponse>> {
    const _params = { ...params };
    const requiredParams = ['instanceGuid'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
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
      'enablePlatformLogging'
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
   * Disable platform logging.
   *
   * Disable platform logging from IBM Analytics Engine.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceGuid - The identifier of the instance details to be added.
   * @param {boolean} [params.enable] - disable platform logging.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.LoggingDisableResponse>>}
   */
  public disablePlatformLogging(
    params: IbmAnalyticsEngineApiV3.DisablePlatformLoggingParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.LoggingDisableResponse>> {
    const _params = { ...params };
    const requiredParams = ['instanceGuid'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
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
      'disablePlatformLogging'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_guid}/logging',
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
   * Find logging configuration by instance id.
   *
   * Retrieve the logging configuration of a single Analytics Engine instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceGuid - GUID of the Analytics Engine service instance to retrieve.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.LoggingConfigurationResponse>>}
   */
  public getLoggingConfiguration(
    params: IbmAnalyticsEngineApiV3.GetLoggingConfigurationParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.LoggingConfigurationResponse>> {
    const _params = { ...params };
    const requiredParams = ['instanceGuid'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
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
   * Delete logging configuration by instance id.
   *
   * Delete the logging configuration of a single Analytics Engine instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceGuid - Identifier of the instance to which the application belongs.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.Empty>>}
   */
  public deleteLoggingConfiguration(
    params: IbmAnalyticsEngineApiV3.DeleteLoggingConfigurationParams
  ): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.Empty>> {
    const _params = { ...params };
    const requiredParams = ['instanceGuid'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'instance_guid': _params.instanceGuid,
    };

    const sdkHeaders = getSdkHeaders(
      IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME,
      'v3',
      'deleteLoggingConfiguration'
    );

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_guid}/logging',
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
  export interface Empty {}

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

  /** Parameters for the `createApplication` operation. */
  export interface CreateApplicationParams {
    /** The identifier of the instance where the Spark application is submitted. */
    instanceId: string;
    /** Application details. */
    applicationDetails?: ApplicationRequestApplicationDetails;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listApplications` operation. */
  export interface ListApplicationsParams {
    /** Identifier of the instance where the applications run. */
    instanceId: string;
    headers?: OutgoingHttpHeaders;
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

  /** Parameters for the `createInstanceHome` operation. */
  export interface CreateInstanceHomeParams {
    /** The identifier of the instance details to be added. */
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

  /** Parameters for the `enablePlatformLogging` operation. */
  export interface EnablePlatformLoggingParams {
    /** The identifier of the instance details to be added. */
    instanceGuid: string;
    /** enable platform logging. */
    enable?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `disablePlatformLogging` operation. */
  export interface DisablePlatformLoggingParams {
    /** The identifier of the instance details to be added. */
    instanceGuid: string;
    /** disable platform logging. */
    enable?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getLoggingConfiguration` operation. */
  export interface GetLoggingConfigurationParams {
    /** GUID of the Analytics Engine service instance to retrieve. */
    instanceGuid: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteLoggingConfiguration` operation. */
  export interface DeleteLoggingConfigurationParams {
    /** Identifier of the instance to which the application belongs. */
    instanceGuid: string;
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
    /** Identifier provided by Apache Spark for the application. */
    spark_application_id?: string;
    /** Status of the application. */
    state?: string;
    /** Time when the application was started. */
    start_time?: string;
    /** Time when the application was completed. */
    finish_time?: string;
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
    /** Application state. */
    state?: string;
    /** Application start time in the format YYYY-MM-DDTHH:mm:ssZ. */
    start_time?: string;
    /** Application end time in the format YYYY-MM-DDTHH:mm:ssZ. */
    finish_time?: string;
  }

  /** State of a given application. */
  export interface ApplicationGetStateResponse {
    /** Identifier of the application. */
    id?: string;
    /** Status of the application. */
    state?: string;
    /** Time when the application was started. */
    start_time?: string;
    /** Time when the application was completed. */
    finish_time?: string;
  }

  /** Application details. */
  export interface ApplicationRequestApplicationDetails {
    /** Path of the application to run. */
    application?: string;
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
    /** State of the submitted application. */
    state?: string;
  }

  /** Details of Analytics Engine instance. */
  export interface Instance {
    /** GUID of the Analytics Engine instance. */
    id?: string;
    /** Full URL of the resource. */
    href?: string;
    /** Instance state. */
    state?: string;
    /** Timestamp when the state of the instance was changed, in the format YYYY-MM-DDTHH:mm:ssZ. */
    state_change_time?: string;
    /** Specifies the default runtime to use for all workloads that run in this instance. */
    default_runtime?: InstanceDefaultRuntime;
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

  /** Specifies the default runtime to use for all workloads that run in this instance. */
  export interface InstanceDefaultRuntime {
    /** Version of Spark runtime to use. Currently, only 3.1 is supported. */
    spark_version?: string;
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

  /** Response of logging API. */
  export interface LoggingConfigurationResponse {
    /** component array. */
    components?: string[];
    log_server?: LoggingConfigurationResponseLogServer;
    /** enable. */
    enable?: boolean;
  }

  /** LoggingConfigurationResponseLogServer. */
  export interface LoggingConfigurationResponseLogServer {
    /** type of log server. */
    type?: string;
  }

  /** Response of logging API. */
  export interface LoggingDisableResponse {
    /** component array. */
    components?: string[];
    log_server?: LoggingDisableResponseLogServer;
    /** enable. */
    enable?: boolean;
  }

  /** LoggingDisableResponseLogServer. */
  export interface LoggingDisableResponseLogServer {
    /** type of log server. */
    type?: string;
  }
}

export = IbmAnalyticsEngineApiV3;
