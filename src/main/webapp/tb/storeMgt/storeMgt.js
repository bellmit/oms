qyApp.controller("storesMgtController", ["$scope", "$http", "Upload", "$route", "$state", "$stateParams", "$window", function($scope, $http, Upload, $route, $state, $stateParams, $window) {
	var userInfo = JSON.parse(localStorage.userInfo);
	$scope.orgId = JSON.parse(keyParams).orgId;
	$scope.roleType = '1';
	$scope.orgType = userInfo.orgType;
	$scope.pattern = /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;
	//如果是代运营直接跳转
	if($scope.orgType == 6) {
		$state.go("forwardStoreList", {
			uiParams: ""
		});
	}
	//门店类别  0阿里巴巴 1速卖通 2亚马逊3淘宝4天猫5京东
	$scope.shopType = '3';
	//选择加盟网店类型
	$scope.selectType = function(type) {
			if(type == '3') {
				$scope.shopType = '3';
			}
			if(type == '4') {
				$scope.shopType = '4';
			}
			if(type == '5') {
				$scope.shopType = '5';
			}
			return $scope.shopType;
		}
		//获取商户下面的店铺
	$scope.getMerchantShop = function() {
		var jsonObject = {
			"shopName": '',
			"orgId": $scope.orgId,
			"nub": '',
			"size": '',
			"shopProp": "3"
		};
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'shop/getMerchantShop',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				data.data.shopList.forEach(function(ele,index){
					if($scope.pattern.test(ele.shopUrl)==false){
						ele.shopUrl="http://"+ele.shopUrl;
					}
				});
				$scope.shopList = data.data.shopList;
				if($scope.shopList.length == 0) {
					$scope.count = 0;
				} else {
					$scope.count = $scope.shopList[0].count;
				}
			} else {
				alertmsg("获取店铺失败", "error");
			}
		})
	}
	$scope.getMerchantShop();
	//删除店铺资料
	$scope.deleteShop = function(obj) {
			$('#logOutDialog').center();
			$('#logOutDialog,.maskBg').show();
			$scope.shopOrgIdD = obj.shop.orgId;
		}
		//确认删除店铺
	$scope.sureDelete = function() {
			var jsonObject = {
				"orgId": $scope.shopOrgIdD
			};
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'shop/deleteOrgAndShop',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$('#logOutDialog,.maskBg').hide();
					$scope.getMerchantShop();
				} else {
					alertmsg("获取店铺失败", "error");
				}
			})
		}
		//取消删除店铺
	$scope.concelDelete = function() {
			$('#logOutDialog,.maskBg').hide();
		}
		//申请授权弹窗
	$scope.authorize = function() {
			$('#authorizeDialog').center();
			$('#authorizeDialog,.maskBg').show();
		}
		//跳转路由
	$scope.goRoute = function(routeName, obj) {		
		//公共参数部分
		var params = "";
		if($stateParams.uiParams == "") {
			var sourceArr = [{
				level: 0,
				name: "storesMgt"
			}];
			params = {
				"source": sourceArr,
				"type": "1"
			};
		} else {
			$stateParams.uiParams.type = "1";
			params = $stateParams.uiParams;
		}
		//个性化参数部分
		if(routeName == "storeAdd") {			
			//添加路由
			$.extend(params, {
				"type": "1",
				"orgType": $scope.orgType
			});
		} else if(routeName == "storeEdit") {
			$.extend(params, {
				"shop": obj.shop,
				"type": "1",
				"orgType": $scope.orgType
			});
		}
		//跳转
		$state.go(routeName, {
			uiParams: params
		});
	}

	//	授权部分
	$scope.showAuthorizeDialog = "hide";
	$scope.closeauthorizeDialog=function(){
		$scope.showAuthorizeDialog = "hide";
	}
	$("#authorizeDialog").center();
	$scope.goAuth = function(obj) {
		var pathName = window.location.pathname.substring(1);
		var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
		var url = window.location.protocol + '//' + window.location.host + '/' + webName + '/';
		if(obj.shop.shopType == "1") {
			$scope.showAuthorizeDialog = "show";
			/*
			$scope.AuthShopName = obj.shop.shopName;
			var jsonObject = {
				"state": obj.shop.orgId+","+obj.shop.shopType,
				"redirectUrl": url + "tb/storeMgt/authSuccess.jsp"
			};
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'aliexpress/getAliExpressAuthUrl',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$window.open(data.data.requestUrl, "New Window");
					$('#authConfirm1').show();
					$('#authConfirm').center();
					$scope.getMerchantShop();
				} else {
					alertmsg("获取授权路径失败", "error");
				}
			})
			*/
		} else if(obj.shop.shopType == "2") {
			//var callback = "http://2505eff7.nat123.net/oms/tb/storeMgt/authSuccess.jsp";
			var callback = url + "tb/storeMgt/authSuccess.jsp";
			var redirectUrl = "https://oauth.taobao.com/authorize?response_type=code&client_id=23605710&redirect_uri="+callback+"&state="+obj.shop.orgId+","+obj.shop.shopType+"&view=web";
			$window.open(redirectUrl, "New Window");
			$('#authConfirm1').show();
			$('#authConfirm').center();
			$scope.getMerchantShop();
		} else if(obj.shop.shopType == "0") {
			$scope.AuthShopName = obj.shop.shopName;
			var jsonObject = {
				"state": obj.shop.orgId+","+obj.shop.shopType,
				"redirectUrl": url + "tb/storeMgt/authSuccess.jsp"
			};
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'alibaba/getClientAuthUrl',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
					if(data.code == 1) {
						$window.open(data.data.requestUrl, "New Window");
						$('#authConfirm1').show();
						$('#authConfirm').center();
						$scope.getMerchantShop();
					} else {
						alertmsg("获取授权路径失败", "error");
					}
					})
//			}
		}else{
			$scope.showAuthorizeDialog = "show";
		}

	}

	$scope.finishAuth = function() {
		$('#authConfirm1').hide();
		$scope.getMerchantShop();
	}

}]);