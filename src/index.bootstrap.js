'use strict';

// index.html page to dist folder
import '!!file-loader?name=[name].[ext]!./favicon.ico';

// vendor files
import "./index.vendor";

// main App module
import "./index.module";

import "./assets/styles/index.styl";

angular.element(document).ready(() => {
  angular.bootstrap(document, ['myNgApp'], {
    strictDi: true
  });
});
