'use strict';

import route from './main.route';

const mainPageModule = angular.module('ykzdApp', [
  'ui.router'
]);

mainPageModule
    .config(route);

export default mainPageModule;
