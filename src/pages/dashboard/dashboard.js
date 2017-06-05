'use strict';

import dashboardTpl from './dashboard.html';
import DashboardController from './dashboard.controller';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('ykzd.dashboard', {
      url: '/dashboard',
      templateUrl: dashboardTpl,
      controller: DashboardController
    });

}

export default angular.module('ykzdApp').config(routeConfig);
