qyApp.controller('distributorMgtController', function($scope, $state, $http, $compile, $stateParams, Upload) {
	$stateParams.uiParams = new Object();
	$scope.pageSize="10";
	$scope.from="0";
	$scope.shopName="";
	$scope.addDistribute = function() {
		$stateParams.uiParams.routeArr = [{
			name: "distributorMgt",
			level: "0"
		}]
		$state.go("distributorAdd", {
			uiParams: {
				routeArr: $stateParams.uiParams.routeArr,
				routeParam: '',
				type: "0"
			}
		})
	}
	$scope.lookInfo = function(obj) {
		$stateParams.uiParams.routeArr = [{
			name: "distributorMgt",
			level: "0"
		}]
		$state.go("distributorInfo", {
			uiParams: {
				routeArr: $stateParams.uiParams.routeArr,
				routeParam: obj,
				type: "0"
			}
		})
	};
	/*查询经销商列表*/
	$scope.loadDistributors = function(jsonObject) {
		jsonObject=angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'shop/getDealerBrands',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code=='1'){
				$scope.orgLists=data.data.orgList;
				if($scope.orgLists.length==0){
					$scope.count=0;
				}else if($scope.orgLists.length>0){
					$scope.count=$scope.orgLists[0].count;
				}
				if($scope.count>10){
					$scope.createPagePlugin($scope.count, $scope.pageSize, "page")
				}else{
					$("#page").empty();
				}
			}else{
				alertmsg(data.msg,"error");
			}
		})
	}
	$scope.loadDistributors({shopName:$scope.shopName,nub: $scope.from,size: $scope.pageSize});
	/*点击查询按钮*/
	$scope.searchDistributor=function(){
//		console.log($scope.distributeName);
//		$scope.shopName=$scope.distributeName;
		var jsonObject={shopName:$scope.shopName,nub: $scope.from,size: $scope.pageSize};
		$scope.loadDistributors(jsonObject);
	}
	/*分页代码*/
	$scope.createPagePlugin = function(total, pageSize, pageId) {
		$("#" + pageId + "").empty();
		paging = pagePlugin.createPaging({
			renderTo: pageId,
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
				$scope.page(from - 1, pageSize);
		}
	};
	$scope.page = function(from, pageSize) {
		var jsonObject = {
			shopName:$scope.shopName,
			nub: from,
			size: pageSize
		};
		jsonObject=angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'shop/getDealerBrands',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code=='1'){
				console.log(data);
				$scope.orgLists=data.data.orgList;
				if($scope.orgLists.length==0){
					$scope.count=0;
				}else if($scope.orgLists.length>0){
					$scope.count=$scope.orgLists[0].count;
				}
//				$scope.createPagePlugin = function($scope.count, $scope.pageSize, "page")
			}else{
				alertmsg(data.msg,"error");
			}
		})
	}
});