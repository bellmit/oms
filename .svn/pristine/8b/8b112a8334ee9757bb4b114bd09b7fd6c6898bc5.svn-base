qyApp.controller('appController', ['$scope','$http',function($scope, $http) {
	$http({
		method:'post',
		url:cas+'app/getApp',
		params:{
				keyParams:getKeyParams("{}",keyParams),
				jsonObject:getJsonObject("{}")
				}
	}).success(function(data,stauts,headers,config){
	    $scope.items = data.data.appList;
	})
	
	$scope.reload=function(){
		$http({
			method:'post',
			url:cas+'app/getApp',
			params:{
					keyParams:getKeyParams("{}",keyParams),
					jsonObject:getJsonObject("{}")
					}
		}).success(function(data,stauts,headers,config){
		    $scope.items = data.data.appList;
		})
	}
	
	$scope.update=function(obj){
		var appId=obj.item.appId;
		$http({
			method:'post',
			url:cas+'app/getApp',
			params:{
				keyParams:getKeyParams("{\"appId\":\""+appId+"\"}",keyParams),
				jsonObject:getJsonObject("{\"appId\":\""+appId+"\"}")
					}
		}).success(function(data,stauts,headers,config){
			$("input[name='appId']").val(data.data.appList[0].appId);
			$("input[name='appName']").val(data.data.appList[0].appName);
			$("input[name='appDesc']").val(data.data.appList[0].appDesc);
			open_dialog('修改');
		})
	}
	
	$scope.save=function(obj){
		var msg=$("#msave").html();
		if (msg == '新增') {
			var url=cas+"app/addApp";
		}else if (msg == '修改') {
			var url=cas+"app/updateAppByAppId";
		};
		var jsonObject=$("#myform").serializeJson();
		$http({
			method:'post',
			url:url,
			params:{
				keyParams:getKeyParams(jsonObject,keyParams),
				jsonObject:getJsonObject(jsonObject)
					}
		}).success(function(data,stauts,headers,config){
			alertmsg(data.msg);
			$scope.reload();
		})
	}
	
	$scope.del=function(obj){
		var jsonObject = $("#myform").serializeJson();
		$http({
			method:'post',
			url:cas+"app/deleteAppByAppId",
			params:{
				keyParams:getKeyParams(jsonObject,keyParams),
				jsonObject:getJsonObject(jsonObject)
					}
		}).success(function(data,stauts,headers,config){
			alertmsg(data.msg);
			$scope.reload();
		})
	}
	
}]);