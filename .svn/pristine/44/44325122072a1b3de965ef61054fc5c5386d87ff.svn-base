qyApp.controller("updateStoreController", function($state, $stateParams, $scope, $http) {
	$stateParams.uiParams.sourceArr.push({
		leval: "1",
		name: "updateStore"
	});
	$scope.returnback = function() {
		$stateParams.uiParams.sourceArr.splice($stateParams.uiParams.sourceArr.length - 1, 1);
		$stateParams.uiParams.type = '2';
		$state.go("store", {
			uiParams: $stateParams.uiParams
		});
	}
	$scope.storeDetail = $stateParams.uiParams.params;
	//地区联动
	$scope.province;
	$scope.city;
	$scope.district;
	//请求省文件
	$scope.initprovinces = function() {
		for(var i = 0; i < $scope.provinces.length; i++) {
			if($scope.provinces[i].name == $scope.storeDetail.province) {
				$scope.provinceId = $scope.provinces[i].id;
			}
		}
	}
	$http.get('/oms/static/base/json/province.json').success(function(data) {
		$scope.provinces = data;
		if($scope.storeDetail != undefined) {
			$scope.initprovinces();
		};
		$http.get('/oms/static/base/json/city.json').success(function(data) {
			$scope.citys = data;
			if($scope.storeDetail != undefined) {
				$scope.initcitys();
			}
		});
	});
	//请求市文件
	$scope.initcitys = function() {
			if("" != $scope.provinceId) {
				for(var i = 0; i < $scope.citys[$scope.provinceId].length; i++) {
					if($scope.citys[$scope.provinceId][i].name == $scope.storeDetail.city) {
						$scope.cityId = $scope.citys[$scope.provinceId][i].id;
					}
				}
			}
	}

	//请求区文件
	$http.get('/oms/static/base/json/district.json').success(function(data) {
		$scope.districts = data;
	});

	//修改门店
	$scope.update = function(obj) {
		if(validateForm("storeupdateForm", "msg") == true) {
			var jsonObject = JSON.stringify(obj.storeDetail);
			$http({
				method: 'post',
				url: pos + 'shop/updateShop',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					alertmsg(data.msg);
					$scope.numA = 0;
					$scope.numB = 0;					
					$scope.returnback();
				} else {
					alertmsg("修改门店失败", "error");
				}
			})
		} else {
			alertmsg(validateForm("storeupdateForm", "msg"), 'error')
		}
	};

});