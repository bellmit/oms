qyApp.controller("brandDetEditController",["$scope", "$http", "Upload", "$route", "$state","$stateParams",
function ($scope, $http, Upload, $route, $state,$stateParams) {
	//处理路由参数
	$scope.source= $stateParams.uiParams.source;
	var sourceType=$stateParams.uiParams.type;
	if(sourceType=="1"){
		$scope.source.push({level:$scope.source.length,name:"brandDetEdit"});
	}
	$scope.brand= $stateParams.uiParams.brand;
	$scope.brand1= JSON.stringify($stateParams.uiParams.brand);
	
	//路由统一返回方法
	$scope.goback = function() {
		$scope.source.splice($scope.source.length-1,1);
		$state.go($scope.source[$scope.source.length-1].name, {
			uiParams: {
				"brand":JSON.parse($scope.brand1),
				"source":$scope.source,
				"type":"2"
			}
		})
	}
	
	$scope.uploadFilesLogo = function (files) {  
	    if (files&&files.length) {
	     $scope.files = files;
	     var imageUrl = JSON.parse(localStorage.keyParams).orgId+"/brandId/logo/";
	    jsonObject = "{\"imageUrl\":\""+imageUrl+"\"}";
	       for (var i=0;i<files.length;i++) {		       
	         Upload.upload({
	        	 url: pos+'imageUpload/addBrandImage',
	             data:{ 
	            	 keyParams:getKeyParams(jsonObject,localStorage.keyParams),
	            	 jsonObject:getJsonObject(jsonObject)},
	        	 	file: files[i]
	       }).success(function (data,status,headers,config) {
	           $scope.brand.logo=data.data.imagesPath;
	           $("#brandLogo").attr("src",$scope.imagesPath);
	           $('.close-del').removeClass('fn-hide');
	       }).error(function (data,status,headers,config) {
	           console.log('error status:'+status);
	       });		        		        
	       }
	     }
	}
	
	$scope.uploadFilesCer = function(files) {
		if(files && files.length) {
			$scope.files = files;
			var imageUrl = JSON.parse(localStorage.keyParams).orgId + "/brandId/certificate/";
			jsonObject = "{\"imageUrl\":\"" + imageUrl + "\"}";
			for(var i = 0; i < files.length; i++) {
				Upload.upload({
					url: pos + 'imageUpload/addBrandImage',
					data: {
						keyParams: getKeyParams(jsonObject, localStorage.keyParams),
						jsonObject: getJsonObject(jsonObject)
					},
					file: files[i]
				}).success(function(data, status, headers, config) {
					$scope.brand.brandCertificate = data.data.imagesPath;
					//	           $("#brandImage").attr("src", $scope.imagesPathcer);
					$('.close-del').removeClass('fn-hide');
				}).error(function(data, status, headers, config) {
					console.log('error status: ' + status);
				});
			}
		}
	}
	
	//保存编辑结果
	$scope.saveEdit=function(){
		var jsonObject =JSON.stringify($scope.brand);
		$http({
			method: "post",
			url: pos + "brand/updateBrand",
			params: {
				keyParams: getKeyParams(jsonObject, localStorage.keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == "1") {
				$state.go($scope.source[0].name, {
					uiParams: {
						"source":[],
						"type":"2"
					}
				})
			} else {
				alertmsg(data.msg,"error");
			}
		})
	}
}]);