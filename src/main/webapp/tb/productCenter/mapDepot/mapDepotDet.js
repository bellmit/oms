qyApp.controller("mapDepotDetController", ["$scope", "$http",'$compile', "Upload", "$route", "$state","$stateParams", function($scope, $http,$compile, Upload, $route, $state,$stateParams) {
	$scope.userInfo=eval('(' +localStorage.userInfo+ ')');
	//页面展现，隐藏
	var nub="0";
	var sizeFolder="23";
	
	 //获取商户素材文件夹分页
    $scope.createPagePluginFolder=function(total,pageSize){
	 	  $("#pagingFolder").empty();
	      paging = pagePlugin.createPaging({
			    renderTo : 'pagingFolder',
			    total:total,
			    pageSize:pageSize
		  });
	      paging.goPage = function(from,to){
		      $scope.pageFolder(from-1,pageSize);
		  }			    	
	};
	//获取商户素材文件夹翻页
	$scope.pageFolder=function(from,pageSize){
		var jsonObject="{\"orgId\":\""+$scope.orgId+"\",\"nub\":\""+from+"\",\"size\":\""+pageSize+"\"}";
		 $http({
			method: 'post',
	        url: pos + 'model/getProPicturesFolder',
	        params: {
	            keyParams: getKeyParams(
	            jsonObject, keyParams),
	            jsonObject: getJsonObject(jsonObject)
	        }
	     }).success(function(data,stauts,headers,config){
	    	 if(data.code=="1"){
	    		 $scope.modelList=data.data.modelList;
	    		 window.setTimeout(function(){
	    			 initPage();
		    		},"200");
	  		}else{
	  			alertmsg(data.msg,"error")
	  		}
	    })
	 }
	//获取商户的素材文件夹
	$scope.getProPicturesFolder=function(){
		var jsonObject = {
				orgId:$scope.orgId,
				nub:nub,
				size:sizeFolder
		}
		jsonObject = JSON.stringify(jsonObject);
		$http({
	        method: 'post',
	        url: pos + 'model/getProPicturesFolder',
	        params: {
	             keyParams: getKeyParams(jsonObject, keyParams),
	            jsonObject: getJsonObject(jsonObject)
	        }

	    }).success(function(data, stauts, headers,config) {
	    	if(data.code=="1"){
	    		if(data.data.modelList.length > 0){
		    		$scope.modelList=data.data.modelList;
		    		$scope.countFolder = $scope.modelList[0].count;
			    	if(Number($scope.countFolder) > Number(sizeFolder)){
			        	$scope.createPagePluginFolder($scope.countFolder,sizeFolder);
			        }else{
			        	$("#pagingFolder").empty();
			        }
	    		}else{
	    			$scope.countFolder=0;
	    			$scope.modelList="";
	    		}
	    	}else{
	    		alertmsg(data.msg,"error")
	    	}
	    })
	}
	
	//判断是否带参数
	if($stateParams.uiParams.orgId!=undefined) {
		$scope.orgId = $stateParams.uiParams.orgId;
		$scope.orgInfo = $stateParams.uiParams.orgManage;
		$scope.source = $stateParams.uiParams.source;
		$scope.getProPicturesFolder();
	} else {
		$scope.source = [{level:0,name:"mapDepotDet"}];
		$scope.orgId = JSON.parse(keyParams).orgId;
		$scope.orgInfo = "";
		$scope.getProPicturesFolder();
	}
	
	//路由统一返回方法
	$scope.gobackByRoute = function() {
		$scope.source.splice($scope.source.length-1,1);
		$state.go($scope.source[$scope.source.length-1].name, {
			uiParams: {
				"source":$scope.source,
				"type":"2"
			}
		})
	}
	
	//路由跳转
	$scope.getmateriaDetModel = function(obj) {
		$scope.proModelid = obj.model.proModelid;
		$scope.materialMod = obj.model
		var source = {level:0,name:"mapDepotDet_model"}
		$scope.source.push(source);
		var params={
				"source":$scope.source,
				"type":"1"
			};
		$.extend(
				params,
				{
					orgManage:$scope.orgInfo,
					orgId:$scope.orgId,
					proModelid:$scope.proModelid,
					materialMod:$scope.materialMod
				});
		$state.go("mapDepotDet_model", {
			uiParams: params
		})
	}
	$scope.getmateriaDetPub = function() {
		var source = {level:0,name:"mapDepotDet_pub"}
		$scope.source.push(source);
		var params={
				"source":$scope.source,
				"type":"1"
			};
		$.extend(
				params,
				{
					orgManage:$scope.orgInfo,
					orgId:$scope.orgId
				});
		$state.go("mapDepotDet_pub", {
			uiParams: params
		})
	}
}]);