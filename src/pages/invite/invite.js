'use strict';

import inviteTpl from './invite.html';
import inviteController from './invite.controller';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('ykzd.invite', {
      url: '/invite',
      templateUrl: inviteTpl,
      controller: inviteController
    });

}
export default angular.module('ykzdApp').config(routeConfig);
