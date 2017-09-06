qyApp.controller('roleController', function($scope, $http) {
	$http({
		method : 'post',
		url : cas + 'role/getPrivs',
		params : {
			keyParams:getKeyParams("{}",keyParams),
			jsonObject:getJsonObject("{}")
		}
	}).success(function(data, stauts, headers, config) {
		$scope.x = data.data.privList;

	})
});
