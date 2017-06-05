'use strict';

// import footerModule from './components/footer/footer.module';
import topnavModule from './components/topnav/topnav';
import leftmenuModule from './components/leftmenu/leftmenu';

export default angular.module('index.components', [
	topnavModule.name,
	leftmenuModule.name
]);
