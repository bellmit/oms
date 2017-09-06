qyApp.controller("departEditController", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {	
	$scope.departInfo = $stateParams.uiParams.info;

	//修改部门信息
	$scope.editDepartInfo = function(){
		var jsonObject = $('#editDepartInfo').serializeJson();
		jsonObject = JSON.parse(jsonObject);
		jsonObject.departId = $scope.departInfo.departId;
		jsonObject.roleId = $scope.departInfo.roleId;		
		jsonObject = JSON.stringify(jsonObject);
		if(jsonObject.departName==''){
			alertmsg("请填写部门名称", "error");
		}else{
			$http({
	            method: 'post',
	            url: cas + 'depart/updateDepart',
	            params: {
		            keyParams: getKeyParams(jsonObject, keyParams),
		            jsonObject: getJsonObject(jsonObject)
		        }
	        }).success(function(data, stauts, headers, config) {
	            if (data.code == 1) {
	                alertmsg("修改部门成功");
	                $scope.goBack();
	            } else {
	                alertmsg("修改部门失败", "error");
	            }
	        })
		}		
	}
	
	//返回
	$scope.goBack = function(){
		$state.go("departMgt", {
 			uiParams: ''
 		});
	};
	
})