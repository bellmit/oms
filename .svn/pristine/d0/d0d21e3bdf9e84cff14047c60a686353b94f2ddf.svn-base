qyApp.controller("memberDetController", ["$scope", "$http", "Upload", "$compile", "$route", "$state", "$stateParams",function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	
	$scope.userInfo = JSON.parse(localStorage.userInfo);
	
	$scope.memberInfo = "";
	if($stateParams.uiParams.memberInfo!=undefined) {
		$scope.memberInfo = $stateParams.uiParams.memberInfo;
	}
	
	//人员详情界面
    var nub=0;
	var size=5;
	$scope.count=0;
	$scope.shopName="";
	
	
	initMemberDet();
	
	function initMemberDet(){
		var jsonObject="{\"userId\":\""+$scope.memberInfo.userId+"\",\"shopName\":\""+$scope.shopName+"\",\"nub\":\""+nub+"\",\"size\":\""+size+"\"}";
	    $http(
	    {
	        method: 'post',
	        url: stat
	        + 'orgManage/getOrgListTB',
	        params: {
	            keyParams: getKeyParams(
	            jsonObject, keyParams),
	            jsonObject: getJsonObject(jsonObject)
	        }
	
	    }).success(function(data, stauts, headers,config) {
	    	if(data.code=="1"){
	    		if(data.data.orgManageList.length > 0){
	    			$scope.count=data.data.count;
		    		$scope.orgManageList=data.data.orgManageList;
		    		if(Number(data.data.count)> Number(size)){
		        		$scope.createPagePlugin(data.data.count,size);
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
	
	$scope.page=function(from,pageSize){
		var jsonObject="{\"userId\":\""+$scope.memberInfo.userId+"\",\"nub\":\""+from+"\",\"size\":\""+size+"\"}";
		 $http({
			method: 'post',
	        url: stat
	        + 'orgManage/getOrgListTB',
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
	
	 //查询
	$scope.search=function(){
		nub=0;
		initMemberDet();
	}
	
	$scope.source= $stateParams.uiParams.source;
	var sourceType=$stateParams.uiParams.type;
	if(sourceType=="1"){
		$scope.source.push({level:$scope.source.length,name:"memberMgt"});
	}
	
	$scope.goback=function(){
		$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
		$state.go($stateParams.uiParams.source[$stateParams.uiParams.source.length - 1].name, {
			uiParams: {
				"source": $stateParams.uiParams.source,
				"type": "2"
			}
		})
	}
}]);