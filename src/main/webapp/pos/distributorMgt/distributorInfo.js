qyApp.controller('distributorInfoController', function($stateParams, $state, $scope, $http, $compile, Upload) {
	if($stateParams.uiParams.type == '0') { /*0是前进，1是后退到这个页面*/
		$stateParams.uiParams.routeArr.push({
			name: "distributorInfo",
			level: "1"
		})
	};
	$scope.goback = function() {
		$stateParams.uiParams.routeArr.splice($stateParams.uiParams.routeArr.length - 1, 1);
		$state.go($stateParams.uiParams.routeArr[$stateParams.uiParams.routeArr.length - 1].name, {
			uiParams: {
				routeArr: $stateParams.uiParams.routeArr,
				routeParam: 's',
				type: "1"
			}
		})
	};
	$scope.orgInfo = $stateParams.uiParams.routeParam;
	$scope.orgId = $scope.orgInfo.orgId;
	$scope.orgName = $scope.orgInfo.name;
	$scope.show = false;
	/*查询商户下面经销商的授权品牌和管理员信息*/
	$scope.getBrandAndUser = function() {
		var jsonObject = {
			orgId: $scope.orgId
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'brand/getBrandAndUser',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == '1') {
				$scope.manageInfo = data.data.user;
				$scope.brand_distro_list = data.data.brandList;
				console.log($scope.brand_distro_list)
			} else {
				alertmsg(data.msg, "error");
			}
		})
	};
	$scope.getBrandAndUser();
	/*点击授权按钮*/
	$scope.authorBrand = function(obj) {
		var jsonObject = {
			orgId: $scope.orgId,
			name: $scope.orgName,
			brandId: obj.brandId,
			brandName: obj.brandName
		};
		$scope.btn_a = true;
		$scope.btn_b = false;
		$scope.authorBrandJsonObject=jsonObject;
		$scope.text_a="是否确认为“";
		$scope.text_b="”授权品牌“";
		$scope.text_c="”？";
		$scope.show = true;
	}
	/*点击取消授权按钮*/
	$scope.notAuthorBrand=function(obj){
		var jsonObject = {
			orgId: $scope.orgId,
			name: $scope.orgName,
			brandId: obj.brandId,
			brandName: obj.brandName,
			id:obj.id
		};
		$scope.btn_a = false;
		$scope.btn_b = true;
		$scope.authorBrandJsonObject=jsonObject;
		$scope.text_a="是否确认为“";
		$scope.text_b="”终止授权品牌“";
		$scope.text_c="”？";
		$scope.show = true;
	}
	/*关闭弹窗*/
	$scope.close = function () {
		$scope.show = false ;
	}
	/*点击弹窗确认按钮*/
	$scope.sureToAuthor = function () {
		var jsonObject = angular.toJson($scope.authorBrandJsonObject);
		$http({
			method: 'post',
//			url:'http://10.0.17.224:8080/cas-api/org/addOrgBrand',
			url:cas+ 'org/addOrgBrand',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == '1') {
				$scope.show = false ;
				$scope.getBrandAndUser();
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
	/*确认取消授权品牌*/
	$scope.sureToNotAuthor=function(){
		var jsonObject = {
			id : $scope.authorBrandJsonObject.id
		}
		var jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url:cas+ 'org/delOrgBrand',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == '1') {
				$scope.show = false ;
				$scope.getBrandAndUser();
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
});