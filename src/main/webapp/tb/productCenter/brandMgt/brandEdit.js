qyApp.controller("brandEditController", ["$scope", "$http", "Upload", "$compile", "$route", "$state", "$stateParams",function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	
	$scope.orgManage = "";
	if($stateParams.uiParams.orgManage!=undefined) {
		$scope.orgManage = $stateParams.uiParams.orgManage;
	}
	$("#editBrandId").val($stateParams.uiParams.editBrandId);
	$("#editLogoImg").attr("src", $stateParams.uiParams.editLogoImg);
	$("#editBrandName").val($stateParams.uiParams.editBrandName);
	
	$scope.brandUserInfo=JSON.parse(localStorage.userInfo);
	$scope.brandOrgType=$scope.brandUserInfo.orgType;
	if($scope.brandOrgType=='6'){
		$scope.orgId=$scope.orgManage.orgId;
	}else if($scope.brandOrgType=='1'){
		$scope.orgId=$scope.brandUserInfo.orgId;
	}
	
	$scope.editFilesLogo = function(files) {
		if(files && files.length) {
			$scope.files = files;
			var imageUrl = JSON.parse(localStorage.keyParams).orgId + "/brandId/logo/";
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
					$("#editLogoImg").attr("src", data.data.imagesPath);
					$('.close-del').removeClass('fn-hide');
				}).error(function(data, status, headers, config) {
					console.log('error status:' + status);
				});
			}
		}
	}
		
	$scope.editBrand = function() {
		var brandId = $("#editBrandId").val();
		var editLogoImg = $("#editLogoImg").attr("src");
		var brandName = $("#editBrandName").val();
		if(brandName == "" || brandName.length < 1) {
			alertmsg("品牌名称不能为空", "error");
			return false;
		}
		var jsonObject = "{\"brandId\":\"" + brandId + "\",\"brandName\":\"" + brandName + "\",\"orgId\":\"" + $scope.orgId + "\",\"logo\":\"" + editLogoImg + "\"}"
		$http({
			method: 'post',
			url: pos + 'brand/updateBrand',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				var sourceArr=[{level:0,name:"brandDetail"}];
				var params={
					"source":sourceArr,
					"type":"1",
					"orgId":$scope.orgManage.orgId,
					"orgManage":$scope.orgManage
				};
				$state.go("brandDetail", {
					uiParams:params
				});
			} else {
				alertmsg("编辑品牌失败", "error");
			}
		})
	}
	
	$scope.source= $stateParams.uiParams.source;
	var sourceType=$stateParams.uiParams.type;
	if(sourceType=="1"){
		$scope.source.push({level:$scope.source.length,name:"brandDetail"});
	}
	//路由统一返回方法
	$scope.goback = function() {
		$scope.source.splice($scope.source.length-1,1);
		$state.go($scope.source[$scope.source.length-1].name, {
			uiParams: {
				"source":$scope.source,
				"type":"2",
				"orgId":$scope.orgId,
				"orgManage":$scope.orgManage
			}
		})
	}
	
}]);