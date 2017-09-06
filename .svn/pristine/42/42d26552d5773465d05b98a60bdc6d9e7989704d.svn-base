qyApp.controller("commercialStoreController", ["$scope", "$http", "Upload", "$route", "$state","$stateParams",
    function ($scope, $http, Upload, $route, $state,$stateParams) {
	
	//处理路由参数
	$scope.source= $stateParams.uiParams.source;
	var sourceType=$stateParams.uiParams.type;
	if(sourceType=="1"){
		$scope.source.push({level:$scope.source.length,name:"commercialAdd"});
	}
	
	$scope.storeData=$stateParams.uiParams.storeData;
	//路由统一返回方法
	$scope.goback = function() {
		$scope.source.splice($scope.source.length-1,1);
		$state.go($scope.source[$scope.source.length-1].name, {
			uiParams: {
				"source":$scope.source,
				"type":"2"
			}
		})
	}
	//获取商户下面的店铺
    $scope.getMerchantShop = function () {
        var jsonObject = {
            "orgId": $scope.storeData.orgId,
            "nub": '',
            "size": ''
        };
        jsonObject = JSON.stringify(jsonObject);
        $http({
            method: 'post',
            url: pos + 'shop/getMerchantShop',
            params: {
                keyParams: getKeyParams(jsonObject, keyParams),
                jsonObject: getJsonObject(jsonObject)
            }
        }).success(function (data, stauts, headers, config) {
            if (data.code == 1) {
                $scope.shopLists = data.data.shopList;
                $scope.storeCount = $scope.shopLists[0].count;
            } else {
                alertmsg("获取店铺失败", "error");
            }
        })
    }
    $scope.getMerchantShop();
	
}]);