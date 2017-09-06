qyApp.controller("materialMgtController", ["$scope", "$http",'$compile', "Upload", "$route", "$state","$stateParams", function($scope, $http,$compile, Upload, $route, $state,$stateParams) {
	$scope.userInfo=eval('(' +localStorage.userInfo+ ')');
	
	//页面展现，隐藏
	var nub="0";
	var size="24";
	//商户总数
	$scope.count=0;
	$scope.shopName="";
	
	$scope.sourceArr=[{level:0,name:"materialMgt"}];
	
    //获取商户列表分页
    $scope.createPagePlugin=function(total,pageSize){
	 	  $("#paging").empty();
	      paging = pagePlugin.createPaging({
			    renderTo : 'paging',
			    total:total,
			    pageSize:pageSize
		  });
	      paging.goPage = function(from,to){
		      $scope.page(from-1,pageSize);
		  }			    	
	};
	//获取商户列表翻页
	$scope.page=function(from,pageSize){
		var jsonObject="{\"userId\":\""+$scope.userInfo.userId+"\",\"nub\":\""+from+"\",\"size\":\""+pageSize+"\"}";
		 $http({
			method: 'post',
	        url: stat + 'orgManage/getOrgListTB',
	        params: {
	            keyParams: getKeyParams(
	            jsonObject, keyParams),
	            jsonObject: getJsonObject(jsonObject)
	        }
	     }).success(function(data,stauts,headers,config){
	    	 if(data.code=="1"){
	    		 $scope.orgManageList=data.data.orgManageList;
	  		}else{
	  			alertmsg(data.msg,"error")
	  		}
	    })
	 }
	//获取商户列表
	$scope.initCommercialManager = function(){
		var jsonObject = {
				userId:$scope.userInfo.userId,
				shopName:$scope.shopName,
				nub:nub,
				size:size
		}
		jsonObject = JSON.stringify(jsonObject);
		$http({
	        method: 'post',
	        url: stat + 'orgManage/getOrgListTB',
	        params: {
	             keyParams: getKeyParams(jsonObject, keyParams),
	            jsonObject: getJsonObject(jsonObject)
	        }

	    }).success(function(data, stauts, headers,config) {
	    	if(data.code=="1"){
	    		if(data.data.orgManageList.length > 0){
	    			$scope.count=data.data.count;
		    		$scope.orgManageList=data.data.orgManageList;
			    	if(Number(data.data.count) > Number(size)){
			        	$scope.createPagePlugin(data.data.count,size);
			        }else{
			        	$("#paging").empty();
			        }
	    		}else{
	    			$scope.count=0;
	    			$scope.orgManageList="";
	    		}
	    	}else{
	    		alertmsg(data.msg,"error")
	    	}
	    })
	}
	
	//路由跳转
	$scope.getmateriaDet = function(obj) {
		var source = {level:0,name:"materiaDet"}
		$scope.sourceArr.push(source);
		var params={
				"source":$scope.sourceArr,
				"type":"1"
			};
		$.extend(params,{orgManage:obj.orgManage,orgId:obj.orgManage.orgId});
		$state.go("materiaDet", {
			uiParams: params
		})
	}
	
	//判断登陆进来的是代运营还是商户
	if($scope.userInfo.orgType == '1'){
		$state.go("materiaDet", {
			uiParams: {}
		});
	}else if($scope.userInfo.orgType == '6'){
		$scope.initCommercialManager();
	}
}]);