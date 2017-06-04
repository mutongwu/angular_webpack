'use strict';

import footerDirective from './footer.directive';
import './footer.styl';

const footerModule = angular.module('footer-module', []);

footerModule
  .directive('footerTest', footerDirective);

export default footerModule;
