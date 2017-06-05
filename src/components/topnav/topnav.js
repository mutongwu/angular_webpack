'use strict';

import topnavDirective from './topnav.directive';
import './topnav.styl';
const topnavModule = angular.module('topnav-module', []);

topnavModule
  .directive('topnav', topnavDirective);

export default topnavModule;
