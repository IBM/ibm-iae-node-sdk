'use strict';

const IbmAnalyticsEngineApiV2 = require('../../dist/ibm-analytics-engine-api/v2');
const { IamAuthenticator } = require('../../dist/auth');
const authHelper = require('../resources/auth-helper.js');
const describe = authHelper.describe; // this runs describe.skip if there is no auth.js file :)
const timeout= 20000; // jest timeout in ms

describe('IBM Analytics Engine ApiV2 integration', () => {
  const options = authHelper.auth.ibm_analytics_engine_api_v2;
  options.authenticator = new IamAuthenticator({apikey: options.apikey});
  const instanceGuid = options.instanceGuid;

  const IbmAnalyticsEngineServiceClient = new IbmAnalyticsEngineApiV2(options);
  jest. setTimeout(timeout);

  // nested describe statements are helpful when organizing multiple categories of an api
  describe('analyticsEngines', () => {
    let resourceId;

    it('getAnalyticsEngineById', async done => {
      const params = {
        instanceGuid: instanceGuid
      };

      let response;
      try {
        response = await IbmAnalyticsEngineServiceClient.getAnalyticsEngineById(params);
      } catch (err) {
        done(err);
      }

      expect(response.status).toEqual(200);
      done();
    });

    it('getAnalyticsEngineStateById', async done => {
      const params = {
        instanceGuid: instanceGuid
      };

      let response;
      try {
        response = await IbmAnalyticsEngineServiceClient.getAnalyticsEngineStateById(params);
      } catch (err) {
        done(err);
      }

      expect(response.status).toEqual(200);
      done();
    });

    it('createCustomizationRequest', async done => {

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

      const target = 'all';
      const customActions = [analyticsEngineCustomActionModel];
      const params = {
        instanceGuid: instanceGuid,
        target: target,
        customActions: customActions,
      };

      let response;
      try {
        response = await IbmAnalyticsEngineServiceClient.createCustomizationRequest(params);
      } catch (err) {
        done(err);
      }

      expect(response.status).toEqual(200);
      done();
    });

    it('getAllCustomizationRequests', async done => {
      const params = {
        instanceGuid: instanceGuid
      };

      let response;
      try {
        response = await IbmAnalyticsEngineServiceClient.getAllCustomizationRequests(params);
      } catch (err) {
        done(err);
      }

      expect(response.status).toEqual(200);
      done();
    });

    it('getCustomizationRequestById', async done => {
      var params = {
        instanceGuid: instanceGuid,
      };

      let response;
      try {
        response = await IbmAnalyticsEngineServiceClient.getAllCustomizationRequests(params);
      } catch (err) {
        done(err);
      }

      params['requestId'] = response.result[0].id;
      try {
        response = await IbmAnalyticsEngineServiceClient.getCustomizationRequestById(params);
      } catch (err) {
        done(err);
      }

      expect(response.status).toEqual(200);
      done();
    });

    it('resizeCluster', async done => {
      const computeNodesCount = 1;
      const params = {
        instanceGuid: instanceGuid,
        computeNodesCount: computeNodesCount,
      };

      let response;
      try {
        response = await IbmAnalyticsEngineServiceClient.resizeCluster(params);
      } catch (err) {
        done(err);
      }

      expect(response.status).toEqual(200);
      done();
    });

    it('resetClusterPassword', async done => {
      const params = {
        instanceGuid: instanceGuid
      };

      let response;
      try {
        response = await IbmAnalyticsEngineServiceClient.resetClusterPassword(params);
      } catch (err) {
        done(err);
      }

      expect(response.status).toEqual(200);
      done();
    });

    it('configureLogging', async done => {
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

      const logSpecs = [analyticsEngineLoggingNodeSpecModel];
      const logServer = analyticsEngineLoggingServerModel;
      const params = {
        instanceGuid: instanceGuid,
        logSpecs: logSpecs,
        logServer: logServer,
      };

      let response;
      try {
        response = await IbmAnalyticsEngineServiceClient.configureLogging(params);
      } catch (err) {
        done(err);
      }

      expect(response.status).toEqual(202);
      done();
    });

    it('getLoggingConfig', async done => {
      const params = {
        instanceGuid: instanceGuid
      };

      let response;
      try {
        response = await IbmAnalyticsEngineServiceClient.getLoggingConfig(params);
      } catch (err) {
        done(err);
      }

      expect(response.status).toEqual(200);
      done();
    });

    it('deleteLoggingConfig', async done => {
      const params = {
        instanceGuid: instanceGuid
      };

      let response;
      try {
        response = await IbmAnalyticsEngineServiceClient.deleteLoggingConfig(params);
      } catch (err) {
        done(err);
      }

      expect(response.status).toEqual(202);
      done();
    });


    it('updatePrivateEndpointWhitelist', async done => {
      const ipRanges = ['testString'];
      const action = 'add';
      const params = {
        instanceGuid: instanceGuid,
        ipRanges: ipRanges,
        action: action,
      };

      let response;
      try {
        response = await IbmAnalyticsEngineServiceClient.updatePrivateEndpointWhitelist(params);
      } catch (err) {
        done(err);
      }

      expect(response.status).toEqual(200);
      done();
    });
  });
});
