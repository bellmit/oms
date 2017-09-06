qyApp.controller('wxShopEditController', function($scope, $state, $stateParams, $http, $compile, Upload) {
	$scope.shopProp="2";
	if($stateParams.uiParams.type == "1") {
		$stateParams.uiParams.routeState.push({
			name: "wxShopEdit",
			level: "2"
		})
	};
	$scope.shopInfo = $stateParams.uiParams.routeParams;
	$scope.shopName = $scope.shopInfo.shopName;
	$scope.type = $scope.shopInfo.shopIndustry;
	$scope.province = $scope.shopInfo.province;
	$scope.city = $scope.shopInfo.city;
	$scope.contacts = $scope.shopInfo.contacts;
	$scope.shopTel = $scope.shopInfo.shopTel;
	$scope.orgId = $scope.shopInfo.orgId;
	/*上传微店商户logo*/
	//新增颜色(上传图片并回显)
	$scope.imagesPath = $scope.shopInfo.shopLogo;
	$scope.uploadFiles = function(files) {
			if(files && files.length) {
				$scope.files = files;
				var imageUrl = $scope.orgId + "/color/";
				jsonObject = "{\"imageUrl\":\"" + imageUrl + "\"}";
				for(var i = 0; i < files.length; i++) {
					Upload.upload({
						url: pos + '/imageUpload/addShopImage',
						data: {
							keyParams: getKeyParams(jsonObject, keyParams),
							jsonObject: getJsonObject(jsonObject)
						},
						file: files[i]
					}).success(function(data, status, headers, config) {
						//上传成功
						$scope.imagesPath = data.data.imagesPath;
					}).error(function(data, status, headers, config) {
						//上传失败
						console.log('error status: ' + status);
					});
				}
			}
		}
		//地区联动
		//请求省文件
	$http.get('/oms/static/base/json/province.json').success(function(data) {
		$scope.provinces = data;
		$scope.initprovinces();
		$http.get('/oms/static/base/json/city.json').success(function(data) {
			$scope.citys = data;
			$scope.initcitys();
		});
	});

	$scope.initprovinces = function() {
			for(var i = 0; i < $scope.provinces.length; i++) {
				if($scope.provinces[i].name == $scope.province) {
					$scope.provinceId = $scope.provinces[i].id;
				}
			}
		}
		//请求市文件
	$scope.initcitys = function() {
		if("" != $scope.provinceId) {
			for(var i = 0; i < $scope.citys[$scope.provinceId].length; i++) {
				if($scope.citys[$scope.provinceId][i].name == $scope.city) {
					$scope.cityId = $scope.citys[$scope.provinceId][i].id;
					$scope.city= $scope.citys[$scope.provinceId][i].name;
				}
			}
		}
	}
	//请求区文件
	$http.get('/oms/static/base/json/district.json').success(function(data) {
		$scope.districts = data;
	});
	/*//	查询行业类型	*/
	$scope.searchTypeBase = function() {
		var jsonObject = {
			appId: "4",
			type: "shopIndustry",
			typeSecond: ""
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'typeBase/getTypeBase',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == 1) {
				$scope.types = [{
					name: "请选择",
					value: ""
				}].concat(data.data.types);
			} else {
				alertmsg(data.msg, "error");
			}
		});
	}
	$scope.searchTypeBase();
		/*点击确认修改的按钮*/
		$scope.editWxShop = function() {
		var jsonObject = {
			orgId: $scope.orgId,
			province: $scope.province,
			city: $scope.city,
			district: "",
			shopName: $scope.shopName,
			shopInfo: "",
			contacts: $scope.contacts,
			shopTel: $scope.shopTel,
			shopAddr: "",
			shopNum: "",
			acreage: "",
			shopType: "",
//			shopUrl:"http:"+ qineasy+"vip/payForPro/index.jsp?orgId=",
			shopProp: $scope.shopProp,
			shopLogo: $scope.imagesPath,
			shopIndustry: $scope.type
		};
		$scope.jsonObject = jsonObject
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'shop/updateShop',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == 1) {
				$scope.goback();
			} else {
				alertmsg(data.msg, "error");
			}
		});
	};
	$scope.goback = function() {
		$stateParams.uiParams.routeState.splice($stateParams.uiParams.routeState.length - 1, 1);
		$state.go($stateParams.uiParams.routeState[$stateParams.uiParams.routeState.length - 1].name, {
			uiParams: {
				routeState: $stateParams.uiParams.routeState,
				routeParams: $scope.jsonObject,
				type: "2"
			}
		})
	}
})