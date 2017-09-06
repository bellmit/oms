qyApp.controller("brandMgtController", ["$scope", "$http", "Upload", "$compile", "$route", "$state", "$stateParams",function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	var userInfo = JSON.parse(localStorage.userInfo);
	$scope.numA = 1;
	$scope.userInfo = JSON.parse(localStorage.userInfo);
	$scope.judgeOrgType = function() {
		if($scope.userInfo.orgType == "6") {
			$scope.numA = 4;
		}
	}
	$scope.judgeOrgType();
	/*初始化首页数据*/
	$scope.shopName = "";
	var nub = 0;
	var size = 10;
	$scope.count = 0;
	//分页
	$scope.createPagePluginMain = function(total, pageSize) {
		$("#pagingMain").empty();
		paging = pagePlugin.createPaging({
			renderTo: 'pagingMain',
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			$scope.pageMain(from - 1, pageSize);
		}
	};
	//翻页
	$scope.pageMain = function(from, pageSize) {
			nub = from;
			var jsonObject = "{\"userId\":\"" + $scope.userInfo.userId + "\",\"nub\":\"" + from + "\",\"size\":\"" + size + "\"}";
			$http({
				method: 'post',
				url: stat +
					'orgManage/getOrgListTB',
				params: {
					keyParams: getKeyParams(
						jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.orgManageList = data.data.orgManageList;
				} else {
					alertmsg(data.msg, "error")
				}
			})
		}
		//获取数据
	$scope.search=function(shopName){
		$scope.shopName=shopName;
		$scope.getOrgManager();
	}
	$scope.getOrgManager = function() {
		//获取商户信息
		var jsonObject = "{\"userId\":\"" + $scope.userInfo.userId + "\",\"shopName\":\"" + $scope.shopName + "\",\"nub\":\"" + nub + "\",\"size\":\"" + size + "\"}";
		$http({
			method: 'post',
			url: stat +
				'orgManage/getOrgListTB',
			params: {
				keyParams: getKeyParams(
					jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}

		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.count = data.data.count;
				$scope.orgManageList = data.data.orgManageList;
				if(nub == 0) {
					if(Number(data.data.count) > Number(size)) {
						$scope.createPagePluginMain(data.data.count, size);
					}
				}
			} else {
				alertmsg(data.msg, "error")
			}
		})
	}

	$scope.getOrgManager();

	$scope.getBrandTB = function() {
		var jsonObject = "{\"orgId\":\"" + userInfo.orgId + "\"}";
		$http({
			method: 'post',
			url: pos + 'brand/getBrandTB',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.brandList = data.data.brandList;
			} else {
				alertmsg("获取品牌列表失败", "error");
			}
		})
	}
	$scope.getBrandTB();

	$scope.getbrand = function(obj) {
		$scope.orgManage = obj.orgManage;
		$scope.numA = 1;
		$scope.orgId = $scope.orgManage.orgId;
		var jsonObject = "{\"orgId\":\"" + $scope.orgManage.orgId + "\"}";
		$http({
			method: 'post',
			url: pos + 'brand/getBrandTB',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.brandList = data.data.brandList;
			} else {
				alertmsg("获取品牌列表失败", "error");
			}
		})
	}
	
	$scope.editBrandShow = function(brandId, brandName, logo) {
		var sourceArr=[{level:0,name:"brandMgt"}];
		var params={
			"source":sourceArr,
			"type":"1",
			"editBrandId":brandId,
			"editLogoImg":logo,
			"editBrandName":brandName
		};
		
		$state.go("brandEdit", {
			uiParams:params
		});
	}
	//路由跳转
	$scope.goBrandAdd=function(){
		//公共参数部分
		var sourceArr=[{level:0,name:"brandMgt"}];
		var params={
			"source":sourceArr,
			"type":"1",
		};
		//跳转
		$state.go("brandAdd", {
			uiParams:params
		});
	}
	
	//路由跳转
	$scope.goBrandDetail=function(obj){
		//公共参数部分
		var sourceArr=[{level:0,name:"brandMgt"}];
		var params={
			"source":sourceArr,
			"type":"1",
			"orgId":obj.orgManage.orgId,
			"orgManage":obj.orgManage
		};
		//跳转
		$state.go("brandDetail", {
			uiParams:params
		});
	}
	
}]);