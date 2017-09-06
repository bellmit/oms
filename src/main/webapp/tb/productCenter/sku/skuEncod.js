qyApp.controller("skuEncodController", function($scope, $http, Upload, $compile,$route, $state, $stateParams) {
	//	初始化数据
	$scope.pageSize = "10";
	$scope.from = "0";
	$scope.userInfo = localStorage.userInfo;
	$scope.userInfo = JSON.parse($scope.userInfo);
	$scope.orgName = $scope.userInfo.orgName;
	$scope.userId = $scope.userInfo.userId;
	$scope.orgId = $scope.userInfo.orgId;	
	var from = 0;
	var pageSize = 5;
	var total = 0;
	//查询商户列表
	$scope.getMerchant = function(jsonObject) {
		$http({
			method: 'post',
			url: stat + "orgManage/getOrgListTB",
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				if(data.data.orgManageList.length > 0){
					$scope.count = data.data.count;
					$scope.orgManageLists = data.data.orgManageList;
					if(Number($scope.count) > Number($scope.pageSize)){
						$scope.createPagePlugin($scope.count, $scope.pageSize);
					}
				}
			} else {
				alertmsg("获取商户列表失败", "error");
			}
		})
	};	
	//点击查询按钮
	$scope.search = function(shopName) {
		$scope.shopName=shopName;
		var jsonObjecta = {
			"userId": $scope.userId,
			"shopName": shopName,
			"nub": $scope.from,
			"size": $scope.pageSize
		};
		jsonObjecta = JSON.stringify(jsonObjecta);
		$scope.getMerchant(jsonObjecta);
	}	
	$scope.loadMerchatList = function() {
		var jsonObject = {
			"userId": $scope.userId,
			"nub": $scope.from,
			"size": $scope.pageSize
		};
		jsonObject = JSON.stringify(jsonObject);
		$scope.getMerchant(jsonObject);
	};	
	//	菜单点击进来加载商户列表数据
	$scope.loadMerchatList();	
	//分页的代码
	$scope.createPagePlugin = function(total, pageSize) {
		$("#pagingMain").empty();
		paging = pagePlugin.createPaging({
			renderTo: 'pagingMain',
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			$scope.page(from - 1, pageSize);
		}
	};	
	$scope.page = function(from, pageSize) {
		var jsonObject = {
			"userId": $scope.userId,
			"shopName":$scope.shopName,
			"nub":from+"",
			"size":pageSize
		};
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: stat + "orgManage/getOrgListTB",
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.count = data.data.count;
				$scope.orgManageLists = data.data.orgManageList;
			} else {
				alertmsg("获取成员列表失败", "error");
			}
		})
	}
	//跳转路由
	$scope.goRoute = function(routeName,obj) {
		//公共参数部分
	var params="";
	if($stateParams.uiParams==""){
		var sourceArr = [{
			level: 0,
			name: "skuEncod"
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
		if(routeName == "skuSize") {
			//添加路由
			$.extend(params, {
				"orgManage":obj,
				"type":"1"
			});
		} else if(routeName == "skuColor") {
			$.extend(params, {
				"orgManage": obj,
				"type":"1"
			});
		} 
		//跳转
		$state.go(routeName, {
			uiParams: params
		});
	}
});