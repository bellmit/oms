qyApp.controller('userApplyController', [ '$scope', '$http',function($scope, $http) {
		
	$scope.getUserApply=function(){
		$http(
				{
					method:'post',
					url:cas+"userApply/getApply",
					params:{
						keyParams: getKeyParams('{}', keyParams),
		                jsonObject: getJsonObject('{}')
					}
				}
			).success(function(data){
				if(data.code=="1"){
					$scope.applys = data.data.applyList;
	            }else{
	            	alertmsg(data.msg,"error");
	            }
			})
	}
	
	$scope.getUserApply();
	
	
	$scope.adopted=function(obj){
		var jsonObject="{\"userId\":\""+obj.apply.userId+"\"}";
		$http(
				{
					method:'post',
					url:cas+"userApply/adopted",
					params:{
						keyParams: getKeyParams(jsonObject, keyParams),
		                jsonObject: getJsonObject(jsonObject)
					}
				}
			).success(function(data){
				if(data.code=="1"){
					alertmsg("审核成功");
					$scope.getUserApply();
	            }else{
	            	alertmsg(data.msg,"error");
	            }
			})
	}
	
	$scope.refused=function(obj){
		var jsonObject="{\"userId\":\""+obj.apply.userId+"\"}";
		$http(
				{
					method:'post',
					url:cas+"userApply/refused",
					params:{
						keyParams: getKeyParams(jsonObject, keyParams),
		                jsonObject: getJsonObject(jsonObject)
					}
				}
			).success(function(data){
				if(data.code=="1"){
					alertmsg("审核成功");
					$scope.getUserApply();
	            }else{
	            	alertmsg(data.msg,"error");
	            }
			})
	}
	
  }
]);