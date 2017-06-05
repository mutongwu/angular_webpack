'use strict';

import loginTpl from './login.html';
import LoginController from './login.controller';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: loginTpl,
      controller: LoginController
    });

}

export default angular.module('ykzdApp').config(routeConfig);
