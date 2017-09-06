qyApp.controller('inventoryDetailController', ['$scope','$http','$compile',function($scope,$http,$compile) {
	var data = localStorage.data.split(",");
	$scope.inventoryId=data[0];
	$scope.createDate=data[1];
	$scope.userName=data[2];
	
	$http({
         method:'post',
         url:ss+'inventory/getInventoryDetail',
	 	 params:{
             keyParams:getKeyParams("{\"inventoryId\":\""+$scope.inventoryId+"\"}",keyParams),
             jsonObject:getJsonObject("{\"inventoryId\":\""+$scope.inventoryId+"\"}")
         }
     }).success(function(data,stauts,headers,config){
         $scope.inventoryDetails = data.data.inventoryDetails;
     })

}]);

