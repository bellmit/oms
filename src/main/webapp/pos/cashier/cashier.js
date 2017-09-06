qyApp.controller('cashierController', ['$scope','$http',function($scope, $http) {
	$scope.toPcPos=function(){
		redirectPro("cashier");
		window.open(qineasy+"pc-pos/public/home.jsp");
	}
}]);