/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};


  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594135922246_9339';

  // add your middleware config here
  config.middleware = [];

  exports.mongo = {
    client: {
      host: '127.0.0.1',
      port: '27017',
      name: 'MANHUADAO',
      user: '',
      password: '',
      options: {}
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};