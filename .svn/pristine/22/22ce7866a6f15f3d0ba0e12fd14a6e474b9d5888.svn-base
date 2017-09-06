qyApp.controller("forwardStoreListController", ["$scope", "$http", "Upload","$route", "$state", "$stateParams", "$window", function($scope, $http, Upload,$route, $state, $stateParams,$window) {
	var nub1 = 0;
	var size1 = 10;
	var total1 = 0;
	var userInfo = JSON.parse(localStorage.userInfo);
	$scope.count = 0;
	$scope.orgType = userInfo.orgType;
	$scope.createPagePlugin1 = function(total, pageSize) {
		$scope.startIndex=0;
		$("#paging1").empty();
		paging = pagePlugin.createPaging({
			renderTo: 'paging1',
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			$scope.page1(from - 1, pageSize);
		}
	};
	$scope.startIndex=0;
	$scope.page1 = function(nub, size) {
		$scope.startIndex=nub;
		$scope.jsonPage = {
			"nub": "" + nub + "",
			"size": "" + size + ""
		};
		$.extend($scope.jsonPage, $scope.param);
		$scope.jsonObject = JSON.stringify($scope.jsonPage);
		$http({
			method: 'post',
			url: pos + 'shop/getShopTB',
			params: {
				keyParams: getKeyParams($scope.jsonObject, keyParams),
				jsonObject: getJsonObject($scope.jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.shopList1 = data.data.shopList;
			} else {
				alertmsg("获取商户失败", "error");
			}
		})
	}
	var nub = 0;
		var size = 10;
		$scope.orgId = JSON.parse(keyParams).orgId;
		$scope.roleType = '1';
	$scope.loadList = function() {
		$scope.orgId = JSON.parse(keyParams).orgId;
		//区分登陆的账户是商户还是代运
		var jsonObject1 = "{\"orgId\":\"" + $scope.orgId + "\",\"nub\":\"" + nub + "\",\"size\":\"" + size1 + "\"}";
		if(userInfo.orgType == "6") {
			$http({
				method: 'post',
				url: pos + 'shop/getShopTB',
				params: {
					keyParams: getKeyParams(jsonObject1, keyParams),
					jsonObject: getJsonObject(jsonObject1)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.shopList1 = data.data.shopList;
					if($scope.shopList1.length > 0) {
						$scope.count1 = $scope.shopList1[0].count;
						$scope.param = {
							"orgId": "" + $scope.orgId + ""
						}
						if($scope.shopList1.length == 0) {
							total1 = 0;
						} else {
							total1 = parseInt($scope.shopList1[0].count);
							if(Number(total1) > Number(size1)) {
								$scope.createPagePlugin1(total1, size1);
							}
						}
					} else {
						$scope.count1 = 0;
					}
				} else {
					alertmsg("获取商户失败", "error");
				}
			});
		}
	}
	$scope.loadList();
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
					$scope.loadList();
				} else {
					alertmsg("获取店铺失败", "error");
				}
			})
		}
		//取消删除店铺
	$scope.concelDelete = function() {
			$('#logOutDialog,.maskBg').hide();
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
		} else if(obj.shop.shopType == "2") {
			$scope.AuthShopName = obj.shop.orgName;
			var callback = url + "tb/storeMgt/authSuccess.jsp";
			var redirectUrl = "https://oauth.taobao.com/authorize?response_type=code&client_id=23605710&redirect_uri="+callback+"&state="+obj.shop.orgId+","+obj.shop.shopType+"&view=web";
			$window.open(redirectUrl, "New Window");
			$('#authConfirm2').show();
			$('#authConfirm').center();
			$scope.loadList();
		} else if(obj.shop.shopType == "0") {
			$scope.AuthShopName = obj.shop.orgName;
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
						$('#authConfirm2').show();
						$('#authConfirm').center();
						$scope.loadList();
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
		$('#authConfirm2').hide();
		$scope.loadList();
	}
	//跳转路由
	$scope.goRoute = function(routeName,obj) {
		//公共参数部分
		var params="";
		if($stateParams.uiParams==""){
			var sourceArr = [{
				level: 0,
				name: "forwardStoreList"
			}];
			params = {
				"source": sourceArr,
				"type": "1"
			};
		}else{
			$stateParams.uiParams.type="1";
			params=$stateParams.uiParams;
		}
		//个性化参数部分
		if(routeName == "storeAdd") {
			//添加路由
			$.extend(params, {
				"type":"1",
				"orgType":$scope.orgType
			});
		} else if(routeName == "storeEdit") {
			$.extend(params, {
				"shop": obj.shop,
				"type":"1",
				"orgType":$scope.orgType
			});
		} 
		//跳转
		$state.go(routeName, {
			uiParams: params
		});
	}
}]);