qyApp.controller("pageTemplateController", function($scope, $http, Upload, $route, $state, $stateParams) {
	/*//跳转添加模板页面*/
	$scope.gotempRoute = function(obj,type) {
		var infoObj=obj;
		var sourceArr = [{
			level: 0,
			name: "pageTemplate"
		}];
		$stateParams.uiParams = {
			"source": sourceArr,
			"pageInfo": infoObj,
			"type": "go",
			"useType":type
		};
		$state.go("pageTempAdd", {
			uiParams: $stateParams.uiParams
		});
	}
		/*//跳转添加模板页面*/
		/*查询模板列表*/
		/*加载模板函数*/
	$scope.loadTemplate = function(obj) {
		var jsonObject = JSON.stringify(obj);
		$http({
			method: 'post',
			url: pos + 'template/getTemplate',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.templateLists=data.data.templateList;
				$scope.templateCount=data.data.count;
				if($scope.templateCount>10){
					$scope.createPagePlugin($scope.templateCount,$scope.pageSize);
				}else{
					 $("#pagingMem").empty();
				}
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
		/*加载模板函数*/
	$scope.pageSize = "10";
	$scope.from = "0";
	$scope.keyP = JSON.parse(keyParams);
	$scope.loadTemList = function() {
		if($scope.templateName == undefined) {
			$scope.templateName = "";
		}
		var jsonObject = {
			orgId: $scope.keyP.orgId,
			userId: $scope.keyP.userId,
			templateId: "",
			title: $scope.templateName,
			templateType: "2",
			/*(0 详情页模板, 1 首页, 2 首页模板)*/
			merchantId: "",
			nub: $scope.from,
			size: $scope.pageSize
		};
		$scope.loadTemplate(jsonObject);
	};
	$scope.loadTemList();
	/*查询模板列表*/
	/*点击删除模板按钮*/	
	$scope.delTemplate=function(obj){
		var jsonObject={templateId:obj.templateId};
		jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'template/deleteTemplate',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.loadTemList();
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
	/*点击删除模板按钮*/	
	/*分页代码*/
	 $scope.createPagePlugin=function(total,pageSize){
	 	  $("#pagingMem").empty();
	      paging = pagePlugin.createPaging({
			    renderTo : 'pagingMem',
			    total:total,
			    pageSize:pageSize
		  });
	      paging.goPage = function(from,to){
		      $scope.page(from-1,pageSize);
		  }			    	
	};
	
	$scope.page=function(from,pageSize){
		if($scope.templateName == undefined) {
			$scope.templateName = "";
		}
		var jsonObject = {
			orgId: $scope.keyP.orgId,
			userId: $scope.keyP.userId,
			templateId: "",
			title: $scope.templateName,
			templateType: "2",
			/*(0 详情页模板, 1 首页, 2 首页模板)*/
			merchantId: "",
			nub: from,
			size:pageSize
		};
		jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'template/getTemplate',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.templateLists=data.data.templateList;
				$scope.templateCount=data.data.count;
			} else {
				alertmsg(data.msg, "error");
			}
		})
		
		
	 }
	/*分页代码*/
});