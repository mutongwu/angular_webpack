'use strict';


function LoginController($scope,$state) {
	'ngInject';
	$scope.user = {
		username: null,
		password: null
	};
	$scope.login = function(){
		console.log('login')
		$state.go('ykzd.dashboard');
	};
}

export default LoginController;
