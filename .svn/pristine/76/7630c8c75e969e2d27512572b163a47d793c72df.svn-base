qyApp.controller('distributorAddController', function($scope, $http, $compile, Upload, $state, $stateParams) {
	if($stateParams.uiParams.type == '0') { /*0是前进，1是后退到这个页面*/
		$stateParams.uiParams.routeArr.push({
			name: "distributorAdd",
			level: "1"
		})
	}
	$scope.goback = function() {
			$stateParams.uiParams.routeArr.splice($stateParams.uiParams.routeArr.length - 1, 1);
			$state.go($stateParams.uiParams.routeArr[$stateParams.uiParams.routeArr.length - 1].name, {
				uiParams: {
					routeArr: $stateParams.uiParams.routeArr,
					routeParam: '',
					type: "1"
				}
			})
		}
		//地区联动
	$scope.province;
	$scope.city;
	$scope.district;
	//请求省文件
	$scope.initprovinces = function() {
		for(var i = 0; i < $scope.provinces.length; i++) {
			if($scope.provinces[i].name == $scope.shopList[0].province) {
				$scope.provinceId = $scope.provinces[i].id;
			}
		}
	}
	$http.get('/oms/static/base/json/province.json').success(function(data) {
		$scope.provinces = data;
	});
	//请求市文件
	$scope.initcitys = function() {
		if("" != $scope.provinceId) {
			for(var i = 0; i < $scope.citys[$scope.provinceId].length; i++) {
				if($scope.citys[$scope.provinceId][i].name == $scope.shopList[0].city) {
					$scope.cityId = $scope.citys[$scope.provinceId][i].id;
				}
			}
		}
	}
	$http.get('/oms/static/base/json/city.json').success(function(data) {
		$scope.citys = data;
	});
	//请求区文件
	$http.get('/oms/static/base/json/district.json').success(function(data) {
		$scope.districts = data;
	});
	/*查询商户的自有品牌*/
	$scope.loadAllBrand = function() {
		var jsonObject = {
			isOwnBrand: "ALL"
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'brand/getAddedBrand',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == '1') {
				$scope.brandLists = data.data.brandList;
				angular.forEach($scope.brandLists, function(ele, index) {
					ele.choose = false
				})
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
	$scope.loadAllBrand();
	/*选择品牌*/
	$scope.indexArr = [];
	$scope.chooseBrand = function(obj, index) {
			$scope.chooseBrandArr = [];
			angular.forEach($scope.brandLists, function(ele, index) {
				ele.choose = false;
			})
			$scope.index = $scope.indexArr.indexOf(index);
			if($scope.index < 0) {
				$scope.indexArr.push(index);
			} else if($scope.index >= 0) {
				$scope.indexArr.splice($scope.index, 1);
			}
			angular.forEach($scope.indexArr, function(ele, index) {
				$scope.chooseBrandObj = {};
				$scope.brandLists[ele].choose = true;
				$scope.chooseBrandObj.brandName = $scope.brandLists[ele].brandName;
				$scope.chooseBrandObj.brandId = $scope.brandLists[ele].brandId;
				$scope.chooseBrandArr.push($scope.chooseBrandObj);
			})
				//		$scope.brandLists[index].choose=true;
		}
		/*上传图片功能*/
	$scope.imagesPath = "../static/base/images/icon_upload.png";
	$scope.uploadFilesUpdate = function(files) {
			if(files && files.length) {
				$scope.files = files;
				var imageUrl = JSON.parse(keyParams).orgId + "/shop/";
				jsonObject = "{\"imageUrl\":\"" + imageUrl + "\"}";
				for(var i = 0; i < files.length; i++) {
					Upload.upload({
						//服务端接收
						url: pos + 'imageUpload/addBrandImage',
						//上传的同时带的参数
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
		/*点击添加按钮*/
	$scope.shopName = "";
	$scope.shopInfo = "";
	$scope.contacts = "";
	$scope.shopTel = "";
	$scope.shopAddr = "";
	$scope.userName = "";
	$scope.password = "";
	$scope.email = "";
	$scope.trueName = "";
	$scope.addDealer = function(province, city, district) {
			if($scope.myForm.shopName.$valid && $scope.myForm.shopNum.$valid && $scope.myForm.contacts.$valid && $scope.myForm.shopTel.$valid && $scope.myForm.userName.$valid && $scope.myForm.trueName.$valid && $scope.myForm.password.$valid == true) {
				var jsonObject = {
					province: province,
					city: city,
					district: district,
					shopName: $scope.shopName,
					shopInfo: $scope.shopInfo,
					contacts: $scope.contacts,
					shopTel: $scope.shopTel,
					shopAddr: $scope.shopAddr,
					shopLogo: $scope.imagesPath,
					shopType: "S1",
					/*商户类型(S1： 企业， S2： 个人)*/
					userName: $scope.userName,
					/*管理员帐号（ 手机号）*/
					password: $scope.password,
					email: $scope.email,
					trueName: $scope.trueName,
					brandList: $scope.chooseBrandArr,
					shopNum: $scope.shopNum
				}
				jsonObject = angular.toJson(jsonObject);
				$http({
					method: 'post',
					url: pos + 'shop/addDealer',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == '1') {
						$scope.goback();
					} else {
						alertmsg(data.msg, "error");
					}
				})
			} else {
				alertmsg("您有必填信息未填写", "error")
			}
			//		
		}
		/*验证经销商账号*/
	$scope.inputPhonNum = function() {
		if($scope.userName == "") {
			return false;
		}
		var jsonObject = {
			userName: $scope.userName
		}
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: cas + 'user/userExistsCheck',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == '1') {
				$scope.userNameWarn = data.data.flag
			} else {
				alertmsg(data.msg, "error");
			}
		})

	}

});