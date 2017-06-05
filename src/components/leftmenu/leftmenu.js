'use strict';

import leftmenuDirective from './leftmenu.directive';
import './leftmenu.styl';

const leftmenuModule = angular.module('leftmenu-module', []);

leftmenuModule
  .directive('leftmenu', leftmenuDirective);

export default leftmenuModule;
