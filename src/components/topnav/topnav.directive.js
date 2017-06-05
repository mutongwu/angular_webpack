'use strict';

import tpl from './topnav.html';

function topnavComponent($log) {
	'ngInject';

  var directive = {
    restrict: 'E',
    templateUrl: tpl,
    controller: TopnavComponent,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  function TopnavComponent () {
	  $log.debug('Hello from topnav controller!');
  }

}

export default topnavComponent;