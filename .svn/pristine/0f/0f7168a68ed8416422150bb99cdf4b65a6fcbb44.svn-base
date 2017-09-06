qyApp.controller('serviceOrderController', [ '$scope', '$http',
		function($scope, $http) {
		var jsonObject="{}";
		$http(
		{
			method:'post',
			url:cas+'serviceorder/getServiceOrder',
			params:{
				keyParams: getKeyParams(
                jsonObject, keyParams),
                jsonObject: getJsonObject(jsonObject)
			}
		}		
		).success(function(data,status,headers,config){
			if(data.code=="1"){
				$scope.serviceOrders=data.data.shopList;
			}else{
				alertmsg(data.msg,"error")
			}
		})
		$scope.warn=function(){
			alertmsg("功能暂未开通");
		}
		//"duration\":\"时长,单位为月\",\"serviceId\":\"服务ID\",\"price\":\"价格\",\"accountNum\":\"用户数量\"
} ]);