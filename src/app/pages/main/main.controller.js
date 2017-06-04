'use strict';





import angularLogo from '_images/angular.png';

function MainController($log) {
  'ngInject';

  $log.debug('Hello from main controller!');





    this.angularLogo = angularLogo;

}

export default MainController;
