'use strict';

import mainTpl from './main.html';
import mainController from './main.controller';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('ykzd', {
      url: '',
      abstract: true,
      templateUrl: mainTpl,
      controller: mainController
    });

}

export default routeConfig;
