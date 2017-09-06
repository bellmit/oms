qyApp.controller('freightMgtController', function($state, $stateParams, $scope, $http, $compile, Upload) {
	/*查询运费模板*/
	$stateParams.uiParams = new Object();
	$scope.orgId = angular.fromJson(keyParams).orgId;
	$scope.loadLogiticTemplate = function() {
		var jsonObject = {};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'logiticTemplate/getLogiticTemplate',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == '1') {
				$scope.logiticTemplateLists = data.data.logiticTemplateList;
				angular.forEach($scope.logiticTemplateLists, function(ele, index) {})
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
	$scope.loadLogiticTemplate();
	/*点击添加运费模板*/
	$scope.addFreightTemplate = function() {
			$stateParams.uiParams.routeState = [{
				name: "freightMgt",
				level: "1"
			}];
			$state.go("freightAdd", {
				uiParams: {
					routeState: $stateParams.uiParams.routeState,
					routeParams: "",
					type: "1"
				}
			})
		}
		/*点击删除模板按钮*/
	$scope.deleteFreight = function(obj) {
		$scope.logiticTemplateId = obj.logiticTemplateId;
		var jsonObject = {
			logiticTemplateId: $scope.logiticTemplateId,
			logiticTemplateDetailId: ""
		}
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'logiticTemplate/deleteLogiticTemplate',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == '1') {
				$scope.loadLogiticTemplate();
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
	/*点击编辑按钮*/
	$scope.editFreight = function(obj){
		$stateParams.uiParams.routeState = [{
				name: "freightMgt",
				level: "1"
			}];
			$state.go("freightEdit", {
				uiParams: {
					routeState: $stateParams.uiParams.routeState,
					routeParams:obj,
					type: "1"
				}
			})
	}
})