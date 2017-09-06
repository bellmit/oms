
qyApp.controller('privController', ['$scope','$http',function($scope, $http) {
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
            }]);
