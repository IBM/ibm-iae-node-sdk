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

import * as extend from 'extend';
import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
import { Authenticator, BaseService, getAuthenticatorFromEnvironment, getMissingParams, UserOptions } from 'ibm-cloud-sdk-core';
import { getSdkHeaders } from '../lib/common';

/**
 * With IBM Analytics Engine you can create Apache Spark and Apache Hadoop clusters and customize these clusters by
 * using scripts. You can work with data in IBM Cloud Object Storage, as well as integrate other Watson Data Platform
 * services like IBM Watson Studio and Machine Learning.
 */

class IbmAnalyticsEngineApiV2 extends BaseService {

  static DEFAULT_SERVICE_URL: string = 'https://ibm-analytics-engine-api.cloud.ibm.com/';
  static DEFAULT_SERVICE_NAME: string = 'ibm_analytics_engine_api';

  /*************************
   * Factory method
   ************************/

  /**
   * Constructs an instance of IbmAnalyticsEngineApiV2 with passed in options and external configuration.
   *
   * @param {UserOptions} [options] - The parameters to send to the service.
   * @param {string} [options.serviceName] - The name of the service to configure
   * @param {Authenticator} [options.authenticator] - The Authenticator object used to authenticate requests to the service
   * @param {string} [options.serviceUrl] - The URL for the service
   * @returns {IbmAnalyticsEngineApiV2}
   */

  public static newInstance(options: UserOptions): IbmAnalyticsEngineApiV2 {
    options = options || {};

    if (!options.serviceName) {
      options.serviceName = this.DEFAULT_SERVICE_NAME;
    }
    if (!options.authenticator) {
      options.authenticator = getAuthenticatorFromEnvironment(options.serviceName);
    }
    const service = new IbmAnalyticsEngineApiV2(options);
    service.configureService(options.serviceName);
    if (options.serviceUrl) {
      service.setServiceUrl(options.serviceUrl);
    }
    return service;
  }


  /**
   * Construct a IbmAnalyticsEngineApiV2 object.
   *
   * @param {Object} options - Options for the service.
   * @param {string} [options.serviceUrl] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net'). The base url may differ between IBM Cloud regions.
   * @param {OutgoingHttpHeaders} [options.headers] - Default headers that shall be included with every request to the service.
   * @param {Authenticator} options.authenticator - The Authenticator object used to authenticate requests to the service
   * @constructor
   * @returns {IbmAnalyticsEngineApiV2}
   */
  constructor(options: UserOptions) {
    options = options || {};

    super(options);
    if (options.serviceUrl) {
      this.setServiceUrl(options.serviceUrl);
    } else {
      this.setServiceUrl(IbmAnalyticsEngineApiV2.DEFAULT_SERVICE_URL);
    }
  }

  /*************************
   * analyticsEngines
   ************************/

  /**
   * List all Analytics Engines.
   *
   * Currently, you cannot fetch the list of all IBM Analytics Engine service instances through this REST API. You
   * should use the IBM Cloud CLI instead.  For example, ```ibmcloud resource service-instances --service-name
   * ibmanalyticsengine```.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.Empty>>}
   */
  public getAllAnalyticsEngines(params?: IbmAnalyticsEngineApiV2.GetAllAnalyticsEnginesParams): Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.Empty>> {
    const _params = extend({}, params);

    return new Promise((resolve, reject) => {
      const sdkHeaders = getSdkHeaders(IbmAnalyticsEngineApiV2.DEFAULT_SERVICE_NAME, 'v2', 'getAllAnalyticsEngines');

      const parameters = {
        options: {
          url: '/v2/analytics_engines',
          method: 'GET',
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get details of Analytics Engine.
   *
   * Retrieves the following details of the IBM Analytics Engine service instance:
   * * Hardware size and software package
   *  * Timestamps at which the cluster was created, deleted or updated
   *  * Service endpoint URLs
   *
   *  **NOTE:** No credentials are returned. You can get the IBM Analytics Engine service instance credentials by
   * invoking the reset_password REST API.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceGuid - GUID of the service instance.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.AnalyticsEngine>>}
   */
  public getAnalyticsEngineById(params: IbmAnalyticsEngineApiV2.GetAnalyticsEngineByIdParams): Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.AnalyticsEngine>> {
    const _params = extend({}, params);
    const requiredParams = ['instanceGuid'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'instance_guid': _params.instanceGuid
      };

      const sdkHeaders = getSdkHeaders(IbmAnalyticsEngineApiV2.DEFAULT_SERVICE_NAME, 'v2', 'getAnalyticsEngineById');

      const parameters = {
        options: {
          url: '/v2/analytics_engines/{instance_guid}',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get state of Analytics Engine.
   *
   * Returns the state of the Analytics Engine cluster. The following states exist:
   * * Preparing : A cluster is being created.
   * * Active : The cluster is created and running.
   * * Deleted : The cluster was deleted.
   * * Failed : A cluster couldn't be created.
   * * Expired : The service instance has expired. The cluster has been deleted.
   * * ResizeFailed : The cluster couldn't be resized. The cluster will be reactivated based on the old settings.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceGuid - GUID of the service instance.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.AnalyticsEngineState>>}
   */
  public getAnalyticsEngineStateById(params: IbmAnalyticsEngineApiV2.GetAnalyticsEngineStateByIdParams): Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.AnalyticsEngineState>> {
    const _params = extend({}, params);
    const requiredParams = ['instanceGuid'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'instance_guid': _params.instanceGuid
      };

      const sdkHeaders = getSdkHeaders(IbmAnalyticsEngineApiV2.DEFAULT_SERVICE_NAME, 'v2', 'getAnalyticsEngineStateById');

      const parameters = {
        options: {
          url: '/v2/analytics_engines/{instance_guid}/state',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Create an adhoc customization request.
   *
   * Creates a new adhoc customization request. Adhoc customization scripts can be run only once. They are not persisted
   * with the cluster and are not run automatically when more nodes are added to the cluster.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceGuid - GUID of the service instance.
   * @param {string} params.target - Type of nodes to target for this customization.
   * @param {AnalyticsEngineCustomAction[]} params.customActions - List of custom actions.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.AnalyticsEngineCreateCustomizationResponse>>}
   */
  public createCustomizationRequest(params: IbmAnalyticsEngineApiV2.CreateCustomizationRequestParams): Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.AnalyticsEngineCreateCustomizationResponse>> {
    const _params = extend({}, params);
    const requiredParams = ['instanceGuid', 'target', 'customActions'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const body = {
        'target': _params.target,
        'custom_actions': _params.customActions
      };

      const path = {
        'instance_guid': _params.instanceGuid
      };

      const sdkHeaders = getSdkHeaders(IbmAnalyticsEngineApiV2.DEFAULT_SERVICE_NAME, 'v2', 'createCustomizationRequest');

      const parameters = {
        options: {
          url: '/v2/analytics_engines/{instance_guid}/customization_requests',
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

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get all customization requests run on an Analytics Engine cluster.
   *
   * Retrieves the request_id of all customization requests submitted to the specified Analytics Engine cluster.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceGuid - service instance GUID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.AnalyticsEngineCustomizationRequestCollectionItem[]>>}
   */
  public getAllCustomizationRequests(params: IbmAnalyticsEngineApiV2.GetAllCustomizationRequestsParams): Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.AnalyticsEngineCustomizationRequestCollectionItem[]>> {
    const _params = extend({}, params);
    const requiredParams = ['instanceGuid'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'instance_guid': _params.instanceGuid
      };

      const sdkHeaders = getSdkHeaders(IbmAnalyticsEngineApiV2.DEFAULT_SERVICE_NAME, 'v2', 'getAllCustomizationRequests');

      const parameters = {
        options: {
          url: '/v2/analytics_engines/{instance_guid}/customization_requests',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Retrieve details of specified customization request ID.
   *
   * Retrieves the status of the specified customization request, along with pointers to log files generated during the
   * run.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceGuid - Service instance GUID.
   * @param {string} params.requestId - customization request ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.AnalyticsEngineCustomizationRunDetails>>}
   */
  public getCustomizationRequestById(params: IbmAnalyticsEngineApiV2.GetCustomizationRequestByIdParams): Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.AnalyticsEngineCustomizationRunDetails>> {
    const _params = extend({}, params);
    const requiredParams = ['instanceGuid', 'requestId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'instance_guid': _params.instanceGuid,
        'request_id': _params.requestId
      };

      const sdkHeaders = getSdkHeaders(IbmAnalyticsEngineApiV2.DEFAULT_SERVICE_NAME, 'v2', 'getCustomizationRequestById');

      const parameters = {
        options: {
          url: '/v2/analytics_engines/{instance_guid}/customization_requests/{request_id}',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Add nodes to the cluster.
   *
   * Resizes the cluster by adding compute nodes.
   *
   * **Note:** You can't resize the cluster if the software package on the cluster is deprecated or if the software
   * package doesn't permit cluster resizing. See
   * [here](https://cloud.ibm.com/docs/AnalyticsEngine?topic=AnalyticsEngine-unsupported-operations).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceGuid - Service instance GUID.
   * @param {number} [params.computeNodesCount] - Expected number of nodes in the cluster after the resize operation.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.AnalyticsEngineResizeClusterResponse>>}
   */
  public resizeCluster(params: IbmAnalyticsEngineApiV2.ResizeClusterParams): Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.AnalyticsEngineResizeClusterResponse>> {
    const _params = extend({}, params);
    const requiredParams = ['instanceGuid'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const body = {
        'compute_nodes_count': _params.computeNodesCount
      };

      const path = {
        'instance_guid': _params.instanceGuid
      };

      const sdkHeaders = getSdkHeaders(IbmAnalyticsEngineApiV2.DEFAULT_SERVICE_NAME, 'v2', 'resizeCluster');

      const parameters = {
        options: {
          url: '/v2/analytics_engines/{instance_guid}/resize',
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

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Reset cluster password.
   *
   * Resets the cluster's password to a new system-generated crytographically strong value.  The new password is
   * included in the response and you should make a note of it.  This password is displayed only once here and cannot be
   * retrieved later.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceGuid - Service instance GUID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.AnalyticsEngineResetClusterPasswordResponse>>}
   */
  public resetClusterPassword(params: IbmAnalyticsEngineApiV2.ResetClusterPasswordParams): Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.AnalyticsEngineResetClusterPasswordResponse>> {
    const _params = extend({}, params);
    const requiredParams = ['instanceGuid'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'instance_guid': _params.instanceGuid
      };

      const sdkHeaders = getSdkHeaders(IbmAnalyticsEngineApiV2.DEFAULT_SERVICE_NAME, 'v2', 'resetClusterPassword');

      const parameters = {
        options: {
          url: '/v2/analytics_engines/{instance_guid}/reset_password',
          method: 'POST',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Configure log aggregation.
   *
   * Collects the logs for the following components in an IBM Analytics Engine cluster:
   * * IBM Analytics Engine daemon logs, for example those for Spark, Hive, Yarn, and Knox on the management and data
   * nodes
   * * Yarn application job logs.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceGuid - GUID of the service instance.
   * @param {AnalyticsEngineLoggingNodeSpec[]} params.logSpecs - Logging specifications on each node.
   * @param {AnalyticsEngineLoggingServer} params.logServer - Logging server configuration.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.Empty>>}
   */
  public configureLogging(params: IbmAnalyticsEngineApiV2.ConfigureLoggingParams): Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.Empty>> {
    const _params = extend({}, params);
    const requiredParams = ['instanceGuid', 'logSpecs', 'logServer'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const body = {
        'log_specs': _params.logSpecs,
        'log_server': _params.logServer
      };

      const path = {
        'instance_guid': _params.instanceGuid
      };

      const sdkHeaders = getSdkHeaders(IbmAnalyticsEngineApiV2.DEFAULT_SERVICE_NAME, 'v2', 'configureLogging');

      const parameters = {
        options: {
          url: '/v2/analytics_engines/{instance_guid}/log_config',
          method: 'PUT',
          body,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Content-Type': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Retrieve the status of log configuration.
   *
   * Retrieves the status and details of the log configuration for your cluster.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceGuid - Service instance GUID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.AnalyticsEngineLoggingConfigDetails>>}
   */
  public getLoggingConfig(params: IbmAnalyticsEngineApiV2.GetLoggingConfigParams): Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.AnalyticsEngineLoggingConfigDetails>> {
    const _params = extend({}, params);
    const requiredParams = ['instanceGuid'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'instance_guid': _params.instanceGuid
      };

      const sdkHeaders = getSdkHeaders(IbmAnalyticsEngineApiV2.DEFAULT_SERVICE_NAME, 'v2', 'getLoggingConfig');

      const parameters = {
        options: {
          url: '/v2/analytics_engines/{instance_guid}/log_config',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Delete the log configuration.
   *
   * Deletes the log configuration. This operation stops sending logs to the centralized log server.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceGuid - Service instance GUID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.Empty>>}
   */
  public deleteLoggingConfig(params: IbmAnalyticsEngineApiV2.DeleteLoggingConfigParams): Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.Empty>> {
    const _params = extend({}, params);
    const requiredParams = ['instanceGuid'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'instance_guid': _params.instanceGuid
      };

      const sdkHeaders = getSdkHeaders(IbmAnalyticsEngineApiV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteLoggingConfig');

      const parameters = {
        options: {
          url: '/v2/analytics_engines/{instance_guid}/log_config',
          method: 'DELETE',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Update private endpoint whitelist.
   *
   * Updates the list of whitelisted private endpoints. This operation either adds ip ranges to the whitelist or deletes
   * them.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.instanceGuid - GUID of the service instance.
   * @param {string[]} params.ipRanges - List of IP ranges to add to or remove from the whitelist.
   * @param {string} params.action - Update Whitelist IP ranges. Add (or) Delete.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.AnalyticsEngineWhitelistResponse>>}
   */
  public updatePrivateEndpointWhitelist(params: IbmAnalyticsEngineApiV2.UpdatePrivateEndpointWhitelistParams): Promise<IbmAnalyticsEngineApiV2.Response<IbmAnalyticsEngineApiV2.AnalyticsEngineWhitelistResponse>> {
    const _params = extend({}, params);
    const requiredParams = ['instanceGuid', 'ipRanges', 'action'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const body = {
        'ip_ranges': _params.ipRanges,
        'action': _params.action
      };

      const path = {
        'instance_guid': _params.instanceGuid
      };

      const sdkHeaders = getSdkHeaders(IbmAnalyticsEngineApiV2.DEFAULT_SERVICE_NAME, 'v2', 'updatePrivateEndpointWhitelist');

      const parameters = {
        options: {
          url: '/v2/analytics_engines/{instance_guid}/private_endpoint_whitelist',
          method: 'PATCH',
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

      return resolve(this.createRequest(parameters));
    });
  };

}

/*************************
 * interfaces
 ************************/

namespace IbmAnalyticsEngineApiV2 {

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

  /** Parameters for the `getAllAnalyticsEngines` operation. */
  export interface GetAllAnalyticsEnginesParams {
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getAnalyticsEngineById` operation. */
  export interface GetAnalyticsEngineByIdParams {
    /** GUID of the service instance. */
    instanceGuid: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getAnalyticsEngineStateById` operation. */
  export interface GetAnalyticsEngineStateByIdParams {
    /** GUID of the service instance. */
    instanceGuid: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createCustomizationRequest` operation. */
  export interface CreateCustomizationRequestParams {
    /** GUID of the service instance. */
    instanceGuid: string;
    /** Type of nodes to target for this customization. */
    target: CreateCustomizationRequestConstants.Target | string;
    /** List of custom actions. */
    customActions: AnalyticsEngineCustomAction[];
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `createCustomizationRequest` operation. */
  export namespace CreateCustomizationRequestConstants {
    /** Type of nodes to target for this customization. */
    export enum Target {
      ALL = 'all',
      MASTER_MANAGEMENT = 'master-management',
      DATA = 'data',
    }
  }

  /** Parameters for the `getAllCustomizationRequests` operation. */
  export interface GetAllCustomizationRequestsParams {
    /** service instance GUID. */
    instanceGuid: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getCustomizationRequestById` operation. */
  export interface GetCustomizationRequestByIdParams {
    /** Service instance GUID. */
    instanceGuid: string;
    /** customization request ID. */
    requestId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `resizeCluster` operation. */
  export interface ResizeClusterParams {
    /** Service instance GUID. */
    instanceGuid: string;
    /** Expected number of nodes in the cluster after the resize operation. */
    computeNodesCount?: number;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `resetClusterPassword` operation. */
  export interface ResetClusterPasswordParams {
    /** Service instance GUID. */
    instanceGuid: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `configureLogging` operation. */
  export interface ConfigureLoggingParams {
    /** GUID of the service instance. */
    instanceGuid: string;
    /** Logging specifications on each node. */
    logSpecs: AnalyticsEngineLoggingNodeSpec[];
    /** Logging server configuration. */
    logServer: AnalyticsEngineLoggingServer;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getLoggingConfig` operation. */
  export interface GetLoggingConfigParams {
    /** Service instance GUID. */
    instanceGuid: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteLoggingConfig` operation. */
  export interface DeleteLoggingConfigParams {
    /** Service instance GUID. */
    instanceGuid: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updatePrivateEndpointWhitelist` operation. */
  export interface UpdatePrivateEndpointWhitelistParams {
    /** GUID of the service instance. */
    instanceGuid: string;
    /** List of IP ranges to add to or remove from the whitelist. */
    ipRanges: string[];
    /** Update Whitelist IP ranges. Add (or) Delete. */
    action: UpdatePrivateEndpointWhitelistConstants.Action | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `updatePrivateEndpointWhitelist` operation. */
  export namespace UpdatePrivateEndpointWhitelistConstants {
    /** Update Whitelist IP ranges. Add (or) Delete. */
    export enum Action {
      ADD = 'add',
      DELETE = 'delete',
    }
  }

  /*************************
   * model interfaces
   ************************/

  /** Analytics Engine cluster details. */
  export interface AnalyticsEngine {
    /** Instance GUID. */
    id: string;
    /** Analytics Engine. */
    name: string;
    /** ID of Analytics Engine service plan. */
    service_plan: string;
    /** Hardware size. */
    hardware_size: string;
    /** Software package. */
    software_package: string;
    /** Domain. */
    domain: string;
    /** Cluster creation time. */
    creation_time: string;
    /** Cluster commision time. */
    commision_time: string;
    /** Cluster decommision time. */
    decommision_time: string;
    /** Cluster deletion time. */
    deletion_time: string;
    /** Cluster state change time. */
    state_change_time: string;
    /** Cluster state. */
    state: string;
    /** List of nodes in the cluster. */
    nodes?: AnalyticsEngineClusterNode[];
    /** User credentials. */
    user_credentials: AnalyticsEngineUserCredentials;
    /** Service endpoint URLs with host names. Endpoints will vary based on software package chosen for the cluster. */
    service_endpoints?: ServiceEndpoints;
    /** Service endpoint URLs with host IPS. Endpoints will vary based on software package chosen for the cluster. */
    service_endpoints_ip?: ServiceEndpoints;
    /** Whitelisted IP Ranges for Analytics Engine Service with private endpoints. */
    private_endpoint_whitelist?: string[];
  }

  /** Cluster node details. */
  export interface AnalyticsEngineClusterNode {
    /** Node ID. */
    id?: number;
    /** Fully qualified domain name. */
    fqdn?: string;
    /** Node type. */
    type?: string;
    /** State of node. */
    state?: string;
    /** Public IP address. */
    public_ip?: string;
    /** Private IP address. */
    private_ip?: string;
    /** State change time. */
    state_change_time?: string;
    /** Commission time. */
    commission_time?: string;
  }

  /** Create customization request response. */
  export interface AnalyticsEngineCreateCustomizationResponse {
    /** Customization request ID. */
    request_id?: number;
  }

  /** Custom action details for customization. */
  export interface AnalyticsEngineCustomAction {
    /** Custom action name. */
    name: string;
    /** Customization type. */
    type?: string;
    /** Customization script details. */
    script?: AnalyticsEngineCustomActionScript;
    /** Customization script parameters. */
    script_params?: string[];
  }

  /** Customization script details. */
  export interface AnalyticsEngineCustomActionScript {
    /** Defines where to access the customization script. */
    source_type?: string;
    /** Path to the customization script. */
    script_path?: string;
    /** Customization script properties. */
    source_props?: JsonObject;
  }

  /** AnalyticsEngineCustomizationRequestCollectionItem. */
  export interface AnalyticsEngineCustomizationRequestCollectionItem {
    /** Customization request ID. */
    id?: string;
  }

  /** Customization run details for the cluster. */
  export interface AnalyticsEngineCustomizationRunDetails {
    /** Instance GUID. */
    id?: string;
    /** Customization run status. */
    run_status?: string;
    /** Customization run details. */
    run_details?: AnalyticsEngineCustomizationRunDetailsRunDetails;
  }

  /** Customization run details. */
  export interface AnalyticsEngineCustomizationRunDetailsRunDetails {
    /** Customization run overall status. */
    overall_status?: string;
    /** Customization run details for each node. */
    details?: AnalyticsEngineNodeLevelCustomizationRunDetails[];
  }

  /** Logging configuration. */
  export interface AnalyticsEngineLoggingConfigDetails {
    /** Log specifications for nodes. */
    log_specs: AnalyticsEngineLoggingNodeSpec[];
    /** Logging server configuration. */
    log_server: AnalyticsEngineLoggingServer;
    /** Log configuration status. */
    log_config_status: AnalyticsEngineLoggingConfigStatus[];
  }

  /** Log configuration status. */
  export interface AnalyticsEngineLoggingConfigStatus {
    /** Node type. */
    node_type: string;
    /** Node ID. */
    node_id: string;
    /** Action. */
    action: string;
    /** Log configuration status. */
    status: string;
  }

  /** Log specifications for node. */
  export interface AnalyticsEngineLoggingNodeSpec {
    /** Node type. */
    node_type: string;
    /** Node components to be monitored. */
    components: string[];
  }

  /** Logging server configuration. */
  export interface AnalyticsEngineLoggingServer {
    /** Logging server type. */
    type: string;
    /** Logging server credential. */
    credential: string;
    /** Logging server API host. */
    api_host: string;
    /** Logging server host. */
    log_host: string;
    /** Logging server owner. */
    owner?: string;
  }

  /** Customization run details for the node. */
  export interface AnalyticsEngineNodeLevelCustomizationRunDetails {
    /** Node name. */
    node_name?: string;
    /** Node type. */
    node_type?: string;
    /** Customization request start time. */
    start_time?: string;
    /** Customization request end time. */
    end_time?: string;
    /** Total time taken for customization request. */
    time_taken?: string;
    /** Status of customization request. */
    status?: string;
    /** Log file to track for customization run information. */
    log_file?: string;
  }

  /** Response for resetting cluster password. */
  export interface AnalyticsEngineResetClusterPasswordResponse {
    /** Instance guid. */
    id?: string;
    /** User credentials. */
    user_credentials?: AnalyticsEngineResetClusterPasswordResponseUserCredentials;
  }

  /** User credentials. */
  export interface AnalyticsEngineResetClusterPasswordResponseUserCredentials {
    /** Username. */
    user?: string;
    /** New password. */
    password?: string;
  }

  /** Resize request response. */
  export interface AnalyticsEngineResizeClusterResponse {
    /** Request ID. */
    request_id?: string;
  }

  /** Cluster state. */
  export interface AnalyticsEngineState {
    /** Cluster state. */
    state: string;
  }

  /** User credentials. */
  export interface AnalyticsEngineUserCredentials {
    /** Username. */
    user?: string;
  }

  /** Whitelisted IP Ranges. */
  export interface AnalyticsEngineWhitelistResponse {
    /** Whitelisted IP Ranges. */
    private_endpoint_whitelist?: string[];
  }

  /** Service Endpoints. */
  export interface ServiceEndpoints {
    /** Phoenix JDBC service endpoint. */
    phoenix_jdbc?: string;
    /** Amabri console service endpoint. */
    ambari_console?: string;
    /** Livy service endpoint. */
    livy?: string;
    /** Spark history server serivce endpoint. */
    spark_history_server?: string;
    /** Oozie REST service endpi'. */
    oozie_rest?: string;
    /** Hive JDBC service endpoint. */
    hive_jdbc?: string;
    /** Notebook gateway websocket service endpoint. */
    notebook_gateway_websocket?: string;
    /** Notebook gateway service endpoint. */
    notebook_gateway?: string;
    /** WebHDFS service endpoint. */
    webhdfs?: string;
    /** SSH service endpoint. */
    ssh?: string;
    /** Spark SQL service endpoint. */
    spark_sql?: string;
  }

}

export = IbmAnalyticsEngineApiV2;
