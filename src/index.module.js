'use strict';

import components from './index.components';
import config from './index.config';
import run from './index.run';

import uiRouter from '@uirouter/angularjs';

import coreModule from './core/core.module';
import indexComponents from './index.components';
import indexRoutes from './index.routes';
import mainModule from './pages/main/main.module';
import './pages/login/login';
import './pages/dashboard/dashboard';
import './pages/invite/invite';



const App = angular.module(
  "myNgApp", [
    // plugins
    uiRouter,
    "ngAnimate", 
    "ngCookies", 
    "ngTouch", 
    "ngSanitize", 
    "ngMessages", 
    "ngResource", 
    "oc.lazyLoad",
    "ui.bootstrap",
    // core
    coreModule.name,

    // components
    indexComponents.name,

    // routes
    indexRoutes.name,

    // pages
    mainModule.name,

  ]
);

App
  .config(config)
  .run(run);



export default App;
