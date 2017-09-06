qyApp.controller("workBenchController", ["$scope", "$http", "Upload", function($scope, $http, Upload) {
	
	$scope.userInfo = eval('(' + localStorage.userInfo + ')');
	$scope.today = true;
	var jsonObject = "{\"userId\":\"" + $scope.userInfo.userId + "\",\"queryFlag\":\"today\",\"roleId\":\""+$scope.userInfo.roleId+"\",\"orgId\":\""+$scope.userInfo.orgId+"\"}";
	
	$http({
    	 method:'post',
	     url:pos+'product/getWorkBenchInfo',
	     params:{
	    	 keyParams: getKeyParams(jsonObject, keyParams),
			 jsonObject: getJsonObject(jsonObject)
     	}
     }).success(function(data, stauts, headers, config) {
			if(data.code=="1"){
				$scope.newShopList = data.data.newShopList;
				$scope.changeFormalInfoList = data.data.changeFormalInfoList;
				$scope.changeUnformalInfoList = data.data.changeUnformalInfoList;
				$scope.changeProductCount = data.data.changeProductCount;
				$scope.changeFormalPicCount = data.data.changeFormalPicCount;
				$scope.changeUnformalPicCount = data.data.changeUnformalPicCount;
			}else{
				alertmsg(data.msg,"error")
			}
		})
		
	$scope.chooseDate = function(queryFlag){
		if(queryFlag == 'today'){
			$scope.today = true;
			$scope.yesterday = false;
		}else{
			$scope.yesterday = true;
			$scope.today = false;
		}
		var jsonObject1 = "{\"userId\":\"" + $scope.userInfo.userId + "\",\"queryFlag\":\""+queryFlag+"\",\"roleId\":\""+$scope.userInfo.roleId+"\",\"orgId\":\""+$scope.userInfo.orgId+"\"}";
		$http({
	    	 method:'post',
		     url:pos+'product/getWorkBenchInfo',
		     params:{
		    	 keyParams: getKeyParams(jsonObject1, keyParams),
				 jsonObject: getJsonObject(jsonObject1)
	     	}
	     }).success(function(data, stauts, headers, config) {
				if(data.code=="1"){
					$scope.newShopList = data.data.newShopList;
					$scope.changeFormalInfoList = data.data.changeFormalInfoList;
					$scope.changeUnformalInfoList = data.data.changeUnformalInfoList;
					$scope.changeProductCount = data.data.changeProductCount;
					$scope.changeFormalPicCount = data.data.changeFormalPicCount;
					$scope.changeUnformalPicCount = data.data.changeUnformalPicCount;
				}else{
					alertmsg(data.msg,"error")
				}
		})
	}
	
}]);