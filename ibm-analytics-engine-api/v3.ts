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
 * IBM OpenAPI SDK Code Generator Version: 3.29.0-cd9ba74f-20210305-183535
 */


import * as extend from 'extend';
import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
import { Authenticator, BaseService, getAuthenticatorFromEnvironment, getMissingParams, UserOptions } from 'ibm-cloud-sdk-core';
import { getSdkHeaders } from '../lib/common';

/**
 * Create and manage serverless Spark instances and run applications.
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
   * Find instance by id.
   *
   * Retrieve the details of a single instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - Identifier of the instance to retrieve.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.InstanceDetails>>}
   */
  public getInstanceById(params: IbmAnalyticsEngineApiV3.GetInstanceByIdParams): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.InstanceDetails>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['instanceId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'instance_id': _params.instanceId
    };

    const sdkHeaders = getSdkHeaders(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME, 'v3', 'getInstanceById');

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Deploys a Spark application in the Analytics Engine instance.
   *
   * Deploy a Spark application on a given serverless Spark instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - The identifier of the instance where the Spark application is submitted.
   * @param {ApplicationRequestApplicationDetails} [params.applicationDetails] - Application details.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationResponse>>}
   */
  public createApplication(params: IbmAnalyticsEngineApiV3.CreateApplicationParams): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['instanceId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = {
      'application_details': _params.applicationDetails
    };

    const path = {
      'instance_id': _params.instanceId
    };

    const sdkHeaders = getSdkHeaders(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME, 'v3', 'createApplication');

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/spark/applications',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Gets all applications submitted in an instance with a specified inst_id.
   *
   * Retrieve all Spark applications run on a given instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - Identifier of the instance where the applications run.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationCollection>>}
   */
  public getApplications(params: IbmAnalyticsEngineApiV3.GetApplicationsParams): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationCollection>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['instanceId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'instance_id': _params.instanceId
    };

    const sdkHeaders = getSdkHeaders(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME, 'v3', 'getApplications');

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/spark/applications',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Gets the details of the application identified by the app_id identifier.
   *
   * Retrieve the details of a given Spark application.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - Identifier of the instance to which the application belongs.
   * @param {string} params.applicationId - Identifier of the application for which details are requested.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationGetResponse>>}
   */
  public getApplicationById(params: IbmAnalyticsEngineApiV3.GetApplicationByIdParams): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationGetResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['instanceId', 'applicationId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'instance_id': _params.instanceId,
      'application_id': _params.applicationId
    };

    const sdkHeaders = getSdkHeaders(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME, 'v3', 'getApplicationById');

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/spark/applications/{application_id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Stops the specified application.
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
  public deleteApplicationById(params: IbmAnalyticsEngineApiV3.DeleteApplicationByIdParams): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.Empty>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['instanceId', 'applicationId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'instance_id': _params.instanceId,
      'application_id': _params.applicationId
    };

    const sdkHeaders = getSdkHeaders(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME, 'v3', 'deleteApplicationById');

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/spark/applications/{application_id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Gets the status of the application identified by the app_id identifier.
   *
   * Returns the status of the application identified by the app_id identifier.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceId - Identifier of the instance to which the applications belongs.
   * @param {string} params.applicationId - Identifier of the application for which details are requested.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationGetStateResponse>>}
   */
  public getApplicationState(params: IbmAnalyticsEngineApiV3.GetApplicationStateParams): Promise<IbmAnalyticsEngineApiV3.Response<IbmAnalyticsEngineApiV3.ApplicationGetStateResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['instanceId', 'applicationId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'instance_id': _params.instanceId,
      'application_id': _params.applicationId
    };

    const sdkHeaders = getSdkHeaders(IbmAnalyticsEngineApiV3.DEFAULT_SERVICE_NAME, 'v3', 'getApplicationState');

    const parameters = {
      options: {
        url: '/v3/analytics_engines/{instance_id}/spark/applications/{application_id}/state',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

}

/*************************
 * interfaces
 ************************/

namespace IbmAnalyticsEngineApiV3 {

  /** An operation response. */
  export interface Response<T = any>  {
    result: T;
    status: number;
    statusText: string;
    headers: IncomingHttpHeaders;
  }

  /** The callback for a service request. */
  export type Callback<T> = (error: any, response?: Response<T>) => void;

  /** The body of a service request that returns no response data. */
  export interface Empty { }

  /** A standard JS object, defined to avoid the limitations of `Object` and `object` */
  export interface JsonObject {
    [key: string]: any;
  }

  /*************************
   * request interfaces
   ************************/

  /** Parameters for the `getInstanceById` operation. */
  export interface GetInstanceByIdParams {
    /** Identifier of the instance to retrieve. */
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

  /** Parameters for the `getApplications` operation. */
  export interface GetApplicationsParams {
    /** Identifier of the instance where the applications run. */
    instanceId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getApplicationById` operation. */
  export interface GetApplicationByIdParams {
    /** Identifier of the instance to which the application belongs. */
    instanceId: string;
    /** Identifier of the application for which details are requested. */
    applicationId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteApplicationById` operation. */
  export interface DeleteApplicationByIdParams {
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

  /*************************
   * model interfaces
   ************************/

  /** An array of application details. */
  export interface ApplicationCollection {
    /** List of applications. */
    applications?: ApplicationDetails[];
  }

  /** Details of an application. */
  export interface ApplicationDetails {
    /** Identifier of the application. */
    application_id?: string;
    /** Identifier of the Spark application. */
    spark_application_id?: string;
    /** Status of the application. */
    state?: string;
    /** Time when the application was started. */
    start_time?: string;
    /** Time when the application was completed. */
    finish_time?: string;
  }

  /** Response of the Application Get API. */
  export interface ApplicationGetResponse {
    /** Application request details. */
    application_details?: ApplicationRequest;
    /** Application mode. */
    mode?: string;
    /** Application ID. */
    application_id?: string;
    /** Application state. */
    state?: string;
    /** Application start time. */
    start_time?: string;
    /** Application end time. */
    finish_time?: string;
  }

  /** State of a given application. */
  export interface ApplicationGetStateResponse {
    /** Identifier of the application. */
    application_id?: string;
    /** Status of the application. */
    state?: string;
    /** Time when the application was started. */
    start_time?: string;
    /** Time when the application was completed. */
    finish_time?: string;
  }

  /** Application request details. */
  export interface ApplicationRequest {
    /** Application details. */
    application_details?: ApplicationRequestApplicationDetails;
  }

  /** Application details. */
  export interface ApplicationRequestApplicationDetails {
    /** Application name. */
    application?: string;
    /** The entry point for your application. */
    class?: string;
    /** Application arguments. */
    application_arguments?: string[];
    /** Application configurations to override. See [Spark environment variables](
     *  https://spark.apache.org/docs/latest/configuration.html#available-properties) for a list of the supported
     *  variables.
     */
    conf?: JsonObject;
    /** Application environment configurations to override. See [Spark environment
     *  variables](https://spark.apache.org/docs/latest/configuration.html#environment-variables) for a list of the
     *  supported variables.
     */
    env?: JsonObject;
  }

  /** Application response details. */
  export interface ApplicationResponse {
    /** Application ID. */
    application_id?: string;
    /** Application state. */
    state?: string;
    /** Application start time. */
    start_time?: string;
  }

  /** Instance details. */
  export interface InstanceDetails {
    /** Instance id. */
    instance_id?: string;
    /** Instance state. */
    state?: string;
    /** Timestamp when the state of the instance was changed. */
    state_change_time?: string;
    /** Specifies the default runtime to use for all workloads that run in this instance. */
    default_runtime?: InstanceDetailsDefaultRuntime;
    /** Instance home storage associated with the instance. */
    instance_home?: InstanceDetailsInstanceHome;
    /** Instance level default configuration for Spark workloads. */
    default_config?: InstanceDetailsDefaultConfig;
  }

  /** Instance level default configuration for Spark workloads. */
  export interface InstanceDetailsDefaultConfig {
    /** Value of the Spark configuration key. */
    key?: string;
  }

  /** Specifies the default runtime to use for all workloads that run in this instance. */
  export interface InstanceDetailsDefaultRuntime {
    /** Version of Spark runtime to use. Currently, only 3.0 is supported. */
    spark_version?: string;
    /** Add-on packages. */
    additional_packages?: string[];
  }

  /** Instance home storage associated with the instance. */
  export interface InstanceDetailsInstanceHome {
    /** UUID of the instance home storage instance. */
    guid?: string;
    /** Currently only ibm-cos (IBM Cloud Object Storage) is supported. */
    provider?: string;
    /** Type of the instance home storage. Currently, only objectstore (Cloud Object Storage)is supported. */
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

}

export = IbmAnalyticsEngineApiV3;
