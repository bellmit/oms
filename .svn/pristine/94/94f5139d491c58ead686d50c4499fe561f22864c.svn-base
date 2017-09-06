qyApp.controller('returnController', ['$scope','$http','$compile','Upload',function($scope,$http,$compile,Upload) {
	var orgId = JSON.parse(keyParams).orgId;
	
     $scope.getOrder=function(){
    	 var orderId = $("#orderId").val();
    	 if(orderId !='null' && orderId != ''){
    		 var jsonObject = "{\"orgId\":\""+orgId+"\",\"orderId\":\""+orderId+"\"}";
            		 $http({
                         method:'post',
                         url:pos+'order/getOrder',
                         params:{
                             keyParams:getKeyParams(jsonObject,keyParams),
                             jsonObject:getJsonObject(jsonObject)
                         }
                     }).success(function(data,stauts,headers,config){
                    	 if (data.code == 1) {
        	            	 if(data.data.orderList.length > 0){
        	            		 $scope.order = data.data.orderList[0].order;
        	                     $scope.orderDetails = data.data.orderList[0].orderDetails;
        	                     //原价
        	                     $scope.originalPrice = parseFloat(Number($scope.order.totalPrice) + Number($scope.order.discount)).toFixed(2);
        	                     //整单折扣
        	                     $scope.discount = parseFloat(Number($scope.order.totalPrice)/Number($scope.originalPrice)).toFixed(2)
        	                     var salesId = $scope.order.salesId;
        	                     var memberNo = $scope.order.memberId;
        	                     jsonObject = "{\"orgId\":\""+orgId+"\",\"memberNo\":\""+memberNo+"\",\"nub\":\""+0+"\",\"size\":\""+1+"\"}";
        	                     $http({
        	                         method:'post',
        	                         url:pos+'member/getMembers',
        	                         params:{
        	                             keyParams:getKeyParams(jsonObject,keyParams),
        	                             jsonObject:getJsonObject(jsonObject)
        	                         }
        	                     }).success(function(data,stauts,headers,config){
        	                    	 $scope.member = data.data.memberList[0];
        	                     })
        	                     
        	                     jsonObject = "{\"orgId\":\""+orgId+"\",\"salesId\":\""+salesId+"\"}";
        	                     $http({
        	                         method:'post',
        	                         url:cas+'user/findGuideByOrgId',
        	                         params:{
        	                             keyParams:getKeyParams(jsonObject,keyParams),
        	                             jsonObject:getJsonObject(jsonObject)
        	                         }
        	                     }).success(function(data,stauts,headers,config){
        	                    	 $scope.guide = data.data.guideList[0];
        	                     })
        	            	 }else{
        	            		 alertmsg("没有该订单!","error");
        	            	 }
            	    	 } else {
            	    		 alertmsg("获取订单数据失败","error");
            	         }
                     })
    	 }else{
    		 alertmsg("订单号不能为空!");
    	 }
	}
     
     
     $scope.returns=function(){
    	 $scope.order.oldOrderId = $scope.order.orderId;
    	 $scope.order=JSON.stringify($scope.order);
    	 $scope.orderDetails=JSON.stringify($scope.orderDetails);
    	 var jsonObject = "{\"order\":"+$scope.order+",\"orderDetails\":"+$scope.orderDetails+"}";
    	 $http({
             method:'post',
             url:pos+'order/addOrder',
             params:{
                 keyParams:getKeyParams(jsonObject,keyParams),
                 jsonObject:getJsonObject(jsonObject)
             }
         }).success(function(data,stauts,headers,config){
        	 if (data.code == 1) {
	        	 alertmsg(data.msg);
	        	 $scope.order = "";
	             $scope.orderDetails = "";
	             $scope.member = "";
	             $scope.guide = "";
	             $scope.originalPrice = "";
	             $scope.discount = "";
	             $('#orderId').val("");
	    	 }else if(data.code == "20017"){
	    		 alertmsg("该订单已退过，不允许再退!","error");
	    	 } else {
	    		 alertmsg("退款失败","error");
	         }
         })
	}
     
}]);

