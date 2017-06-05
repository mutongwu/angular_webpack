'use strict';


function DashboardController($scope,$state) {
	'ngInject';
	$scope.user = {
		username: null,
		password: null
	};
	$scope.dashboard = function(){
		$state.go('main');
	};
}

export default DashboardController;
