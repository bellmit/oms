qyApp.controller("departMgtController", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {	
 	
 	var nubMem = "0";
    var sizeMem = "10";
    $scope.totalSum=0;
    
 	//查询部门列表
 	$scope.getDepartList = function(){
 		var jsonObject = "{\"pDepartId\":\""+0+"\"}";
 		$http({
            method: 'post',
            url: cas + 'depart/getDepartList',
            params: {
	            keyParams: getKeyParams(jsonObject, keyParams),
	            jsonObject: getJsonObject(jsonObject)
	        }
       }).success(function(data, stauts, headers, config) {
            if (data.code == 1) {
                $scope.departList = data.data.departList;  
                $scope.totalSum = data.data.count;
                if(Number($scope.totalSum) > Number(sizeMem)){
                	$scope.createPagePluginMem($scope.totalSum,sizeMem);
                }
//                console.log($scope.departList);
            } else {
                alertmsg("获取部门列表信息失败", "error");
            }
       })
 	};
  	$scope.getDepartList();
  	
  	//分页
  	$scope.createPagePluginMem=function(total,pageSize){
	 	  $("#pagingDepart").empty();
	      paging = pagePlugin.createPaging({
			    renderTo : 'pagingDepart',
			    total:total,
			    pageSize:pageSize
		  });
	      paging.goPage = function(from,to){
		      $scope.pageMem(from-1,pageSize);
		  }			    	
	};
	
	$scope.pagingDepart=function(from,pageSize){
		var jsonObject="{\"orgId\":\""+$scope.orgid+"\",\"nub\":\""+from+"\",\"size\":\""+pageSize+"\"}";
		 $http({
			method: 'post',
	        url: stat + 'depart/getDepartList',
	        params: {
	            keyParams: getKeyParams(
	            jsonObject, keyParams),
	            jsonObject: getJsonObject(jsonObject)
	        }
	     }).success(function(data,stauts,headers,config){
	    	 if(data.code=="1"){
	    		 $scope.departList = data.data.departList; 
		}else{
			alertmsg(data.msg,"error")
		}
	     })
	 }
  	
  	
  	
 	//添加部门
	$scope.goToAddDepart = function(obj){ 		
 		$state.go("departAdd", {
 			uiParams:''
 		});      
   };
   	
	//编辑部门信息
	$scope.goToEditDepart = function(obj){
		var sourceArr=[{level:0,name:"departMgt"}];
   		var params = {
   			"source": sourceArr,
   			"type": "1",
   			"info": obj.dp
   		};
 		$state.go("departEdit", {
 			uiParams:params
 		});      
   };  
   
   //查询下级部门列表
   $scope.getNextDepart = function(obj){
   		if(obj.childDepartCount>0){
	   		var jsonObject = "{\"pDepartId\":\""+obj.departId+"\"}";
	   		//console.info(obj);
	 		$http({
	            method: 'post',
	            url: cas + 'depart/getDepartList',
	            params: {
		            keyParams: getKeyParams(jsonObject, keyParams),
		            jsonObject: getJsonObject(jsonObject)
		        }
	       }).success(function(data, stauts, headers, config) {
	            if (data.code == 1) {
	                $scope.departList = data.data.departList; 
	                var html = '&nbsp;>&nbsp;<a href="javascript:;" ng-click="getNextDepart2('+obj.departId+')" onclick="removNext(this)">'+obj.departName+'</a>';
	                var template=angular.element(html);
			        var newHtml=$compile(template)($scope);		        
			        angular.element($('.bread_path').append(newHtml));               
	            } else {
	                alertmsg("获取部门列表信息失败", "error");
	            }
	       })
       }
   }
   $scope.getNextDepart2 = function(id){
   		var jsonObject = "{\"pDepartId\":\""+id+"\"}";
 		$http({
            method: 'post',
            url: cas + 'depart/getDepartList',
            params: {
	            keyParams: getKeyParams(jsonObject, keyParams),
	            jsonObject: getJsonObject(jsonObject)
	        }
       }).success(function(data, stauts, headers, config) {
            if (data.code == 1) {
                $scope.departList = data.data.departList; 
            } else {
                alertmsg("获取部门列表信息失败", "error");
            }
       })
   }
   
	//跳转人员列表
	$scope.goToMemberList = function(obj){
		var sourceArr = [{level:0,name:"departMgt"}];
 		var params = {
 			"source":sourceArr,
	        "departId": obj.departId,
	        "fromPage": "depart"
 		};

 		$state.go("memberMgt", {
 			uiParams: params
 		}); 
	};
	
	//更换主管页面
	$scope.gotoChooseMg = function(obj){
		var sourceArr = [{level:0,name:"departMgt"}];
 		var params = {
 			"source":sourceArr,
 			"type":"1",
	        "departName": obj.departName,
	        "departId": obj.departId,
	        "roleId": obj.roleId,
	        "oldManagerUserId": obj.managerUserId
 		};
		$state.go("chooseMg", {
 			uiParams:params
 		});
	};

})