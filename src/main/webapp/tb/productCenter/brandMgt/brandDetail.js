qyApp.controller("brandDetailController", ["$scope", "$http", "Upload", "$compile", "$route", "$state", "$stateParams",function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	
	$scope.userInfo = JSON.parse(localStorage.userInfo);
	
	if($stateParams.uiParams.orgId!=undefined) {
		$scope.orgId = $stateParams.uiParams.orgId;
		$scope.orgManage = $stateParams.uiParams.orgManage;
	} else {
		$scope.orgId = JSON.parse(keyParams).orgId;
	}
			
	$scope.getbrand = function() {
			var jsonObject = "{\"orgId\":\"" + $scope.orgId + "\"}";
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
	
	$scope.getbrand();
	
	$scope.addBrandShow = function(){
		var sourceArr=[{level:0,name:"brandDetail"}];
		var params={
			"source":sourceArr,
			"type":"1",
			"orgManage":$scope.orgManage
		};
		$state.go("brandAdd", {
			uiParams:params
		});
	}
	
	$scope.editBrandShow = function(brandId, brandName, logo) {
		var sourceArr=[{level:0,name:"brandDetail"}];
		var params={
			"source":sourceArr,
			"type":"1",
			"orgManage":$scope.orgManage,
			"editBrandId":brandId,
			"editLogoImg":logo,
			"editBrandName":brandName
		};
		
		$state.go("brandEdit", {
			uiParams:params
		});
	}
	
		$scope.source= $stateParams.uiParams.source;
		var sourceType=$stateParams.uiParams.type;
		if(sourceType=="1"){
			$scope.source.push({level:$scope.source.length,name:"brandMgt"});
		}
		
		$scope.goback=function(){
			$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
			if(sourceType=="1"){
				$state.go($scope.source[$scope.source.length-1].name, {
					uiParams: {
						"source": $stateParams.uiParams.source,
						"type": "2"
					}
				})
			}else{
				$state.go("brandMgt", {
					uiParams: {
						"source": $stateParams.uiParams.source,
						"type": "2"
					}
				})
			}
			
		}
}]);