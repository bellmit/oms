qyApp.controller("brandAddController", ["$scope", "$http", "Upload", "$compile", "$route", "$state", "$stateParams",function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	
	$scope.orgManage = "";
	if($stateParams.uiParams.orgManage!=undefined) {
		$scope.orgManage = $stateParams.uiParams.orgManage;
	}
	
	$scope.brandUserInfo=JSON.parse(localStorage.userInfo);
	$scope.brandOrgType=$scope.brandUserInfo.orgType;
	if($scope.brandOrgType=='6'){
		$scope.orgId=$scope.orgManage.orgId;
	}else if($scope.brandOrgType=='1'){
		$scope.orgId=$scope.brandUserInfo.orgId;
	}

	$scope.addBrand = function() {
		var brandName = $("#brandNamea").val();
		var addLogoImg = $("#logoimg").attr("src");
		if(brandName == "" || brandName.length < 1) {
			alertmsg("品牌名称不能为空", "error");
			return false;
		}
		var jsonObject = "{\"brandName\":\"" + brandName + "\",\"logo\":\"" + addLogoImg + "\",\"orgId\":\"" + $scope.orgId + "\"}"
		$http({
			method: 'post',
			url: pos + 'brand/addBrand',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$("#brandName").val("");
				$("#logoimg").attr("src", $scope.imagesPath);
				$http({
					method: 'post',
					url: pos + 'brand/getBrandTB',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == 1) {
						var sourceArr=[{level:0,name:"brandAdd"}];
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
						alertmsg("获取品牌列表失败", "error");
					}
				})
			} else {
				alertmsg("添加品牌失败", "error");
			}
		})
	}
	
	$scope.imagesPath = "http://static.qineasy.com/base/images/add_files02.png";
	$scope.uploadFilesLogo = function(files) {
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
					$("#logoimg").attr("src", data.data.imagesPath);
					$('.close-del').removeClass('fn-hide');
				}).error(function(data, status, headers, config) {
					console.log('error status:' + status);
				});
			}
		}
	}
	
	$scope.source= $stateParams.uiParams.source;
	var sourceType=$stateParams.uiParams.type;
	if(sourceType=="1"){
		$scope.source.push({level:$scope.source.length,name:"memberMgt"});
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
