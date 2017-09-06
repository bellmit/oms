qyApp.controller("brandApplyController",function($scope,$http,Upload){
	$scope.getBrandApply=function(){
		$http(
				{
					method:'post',
					url:pos+"brandApply/getBrandApply",
					params:{
						keyParams: getKeyParams('{}', keyParams),
		                jsonObject: getJsonObject('{}')
					}
				}
			).success(function(data){
				if(data.code=="1"){
					$scope.applys = data.data.brandApplyList;
	            }else{
	            	alertmsg(data.msg,"error");
	            }
			})
	}

	$scope.getBrandApply();
	$scope.adopted=function(obj){
		var jsonObject="{\"brandApplyId\":\""+obj.apply.brandApplyId+
		"\",\"applyOrgId\":\""+obj.apply.applyOrgId+
		"\",\"applyOrgName\":\""+obj.apply.applyOrgName+
		"\",\"brandId\":\""+obj.apply.brandId+
		"\",\"brandName\":\""+obj.apply.brandName+"\"}";
		
		$http(
				{
					method:'post',
					url:pos+"brandApply/adopted",
					params:{
						keyParams: getKeyParams(jsonObject, keyParams),
		                jsonObject: getJsonObject(jsonObject)
					}
				}
			).success(function(data){
				if(data.code=="1"){
					alertmsg("审核成功");
					$scope.getBrandApply();
	            }else{
	            	alertmsg(data.msg,"error");
	            }
			})
	}
	
	$scope.refused=function(obj){
		var jsonObject="{\"brandApplyId\":\""+obj.apply.brandApplyId+"\"}";
		$http(
				{
					method:'post',
					url:pos+"brandApply/refused",
					params:{
						keyParams: getKeyParams(jsonObject, keyParams),
		                jsonObject: getJsonObject(jsonObject)
					}
				}
			).success(function(data){
				if(data.code=="1"){
					alertmsg("审核成功");
					$scope.getBrandApply();
	            }else{
	            	alertmsg(data.msg,"error");
	            }
			})
	}
	

});
