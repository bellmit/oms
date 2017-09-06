qyApp.controller('serviceOpenController', [ '$scope', '$http','$timeout',
		function($scope, $http,$timeout) {
		$scope.getService=function(){
			var jsonObject="{}";
			$http(
			        {
			            method: 'post',
			            url: cas
			            + 'service/getServices',
			            params: {
			                keyParams: getKeyParams(
			                jsonObject, keyParams),
			                jsonObject: getJsonObject(jsonObject)
			            }

			        })
			        .success(
			        function(data, stauts, headers, 
			        config) {
			        	if(data.code=="1"){
			        		$scope.services=data.data.shopList;
			        	}else{
			        		alertmsg(data.msg,"error")
			        	}
		        })
		}
		$scope.getService();
		
		$scope.openServce=function(obj){
			var jsonObject="{\"serviceId\":\""+obj.service.serviceId+"\"}";
					$http({
			            method: 'post',
			            url: cas
			            + 'serviceorder/addServiceOder',
			            params: {
			                keyParams: getKeyParams(
			                jsonObject, keyParams),
			                jsonObject: getJsonObject(jsonObject)
			            }

			        }).success(function(data, stauts, headers, config) {
			        	alertmsg("开通成功，请重新登录!");
		            	$timeout(function(){
		            		window.location.href="/"+document.location.pathname.split('/')[1]+"/login.jsp";
		            	},'1500');
			        })
		}
		
		$scope.warn=function(){
			alertmsg("功能暂未开通");
		}
		$scope.openWarn=function(){
			alertmsg("该服务已开通");
		}
		
} ]);