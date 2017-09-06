registerApp.controller("register_addBrandController", ["$scope", "$http", "Upload", function($scope, $http, Upload) {

	$scope.btnClass = "active";
	$scope.isOwnBrand = true;
	$scope.showJoin = false;
	$scope.showOwn = false;
	$scope.showStep = false;
	$scope.isOwnjoin = true;
	$scope.isCodejoin = false;
	$scope.typeFlag = "personalBrand"
	$scope.joinType = "joinSelf";
	$scope.selfJoinBrandDesc = "";
	$scope.ownBranda = function() {
		$scope.typeFlag = "personalBrand"
		$scope.btnClass = "active";
		$scope.isOwnBrand = true;
		$scope.isJoinBrand = false;

	}
	$scope.joinBranda = function() {
		$scope.typeFlag = "joinBrand";

		$scope.btnClass = "notactive";
		$scope.isOwnBrand = false;
		$scope.isJoinBrand = true;
	}
	$scope.addBrand = function() {
		if($scope.isJoinBrand) {
			$scope.showJoin = true;
			$scope.showOwn = false;
		} else {
			$scope.showOwn = true;
			$scope.showJoin = false;
		}
	}
	$scope.showOwnJoin = function() {
		$scope.isOwnjoin = true;
		$scope.isCodejoin = false;
		$scope.joinType = "joinSelf";
		$scope.clearBrandLicense();
	}
	$scope.showCodeJoin = function() {
		$scope.isOwnjoin = false;
		$scope.isCodejoin = true;
		$scope.joinType = "codeJoin";
		$scope.clearSelfJoin();
	}
	$scope.clearBrandLicense = function() {
			$("#permitJoin")[0].reset();

		}
		//	清处数据
	$scope.clearOwnBrandData = function() {
		$("#addOwnBrandForm")[0].reset();
		$scope.imagesPath = "http://static.qineasy.com/base/images/add_files02.png"
		$scope.imagesPathcer = 'http://static.qineasy.com/base/images/add_files01.png';
	}
	$scope.clearSelfJoin = function() {
			$("#selfJoinBrand")[0].reset();
			$scope.imagesPath1 = "http://static.qineasy.com/base/images/add_files02.png"
		}
		//	关闭两个弹窗
	$scope.closeForm = function() {
		$scope.showOwn = false;
		$scope.showJoin = false;
		$scope.showConfir = false;
		$scope.clearOwnBrandData();
		$scope.clearSelfJoin();
		$scope.clearBrandLicense();
	}

	//	添加自有品牌
	$scope.logo;
	$scope.brandCertificate;
	$scope.orgName = "";
	$scope.addOwnBrand = function(brandName, brandInfo, brandCode, logo, brandBelong, brandCertificate) {
			if(validateForm("addOwnBrandForm") == true) {
				$scope.param = JSON.parse(localStorage.userInfo);
				$scope.orgName = $scope.param.orgName;
				var jsonObject = "{\"brandName\":" + "\"" + brandName + "\"" +
					",\"brandInfo\":" + "\"" + brandInfo + "\"" + ",\"brandCode\":" + "\"" + brandCode + "\"" +
					",\"logo\":" + "\"" + $scope.imagesPath + "\"" + ",\"brandBelong\":" + "\"" + brandBelong + "\"" +
					",\"brandCertificate\":" + "\"" + $scope.imagesPathcer + "\"" +
					",\"orgName\":" + "\"" + $scope.orgName + "\"" + "}";
				$http({
					method: "post",
					url: pos + "brand/addIndependentBrand",
					params: {
						keyParams: getKeyParams(jsonObject, localStorage.keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data) {
					if(data.code == "1") {
						$scope.clearOwnBrandData();
						$scope.showOwn = false;
						alertmsg("自有品牌添加成功");
						$scope.getBrand("Y");
					} else {
						alertmsg("自有品牌添加失败", "error");
					}
				})

			} else {
				alertmsg(validateForm("addOwnBrandForm", "msg"), 'error');
			}

		}
		//获取自有品牌列表
	$scope.getBrand = function(type) {
			$scope.jsonObject = "{\"isOwnBrand\":" + "\"" + type + "\"" + "}";
			$http({
				method: "post",
				url: pos + "brand/getAddedBrand",
				params: {
					keyParams: getKeyParams($scope.jsonObject, localStorage.keyParams),
					jsonObject: getJsonObject($scope.jsonObject)
				}
			}).success(function(data) {
				$scope.getBrandCode = data.code;
				if($scope.getBrandCode == "1") {
					if(data.data.brandList[0].brandJoinType == "1") {
						$scope.ownBrand = data.data.brandList;
					} else {
						for(var i in data.data.brandList) {
							if(data.data.brandList[i].brandJoinType == "3") {
								data.data.brandList[i].brandJoinType = "授权加盟";
							} else {
								data.data.brandList[i].brandJoinType = "自主加盟";
							}
							switch(data.data.brandList[i].brandReviewStatus) {
								case "1":
									data.data.brandList[i].brandReviewStatus = "待审核";
									break;
								case "2":
									data.data.brandList[i].brandReviewStatus = "已通过";
									break;
								case "3":
									data.data.brandList[i].brandReviewStatus = "已拒绝";
									break;
							}
						}
						$scope.joinBrand = data.data.brandList;
					}
				} else {
					$scope.ownBrand = [];
					$scope.joinBrand = [];

				}
			})
		}
		//	页面加载自动获取自有品牌列表
//	$(function() {
			$scope.getBrand("Y");
			$scope.getBrand("N");
//		})
		//	加载图片
		//品牌logo 自主加盟的品牌图片和自有品牌的图片
	$scope.imagesPath = "http://static.qineasy.com/base/images/add_files02.png"
	$scope.imagesPathcer = 'http://static.qineasy.com/base/images/add_files01.png';
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
						$scope.imagesPath = data.data.imagesPath;
						//	           $("#brandLogo").attr("src",$scope.imagesPath);
						$('.close-del').removeClass('fn-hide');
					}).error(function(data, status, headers, config) {
						console.log('error status:' + status);
					});
				}
			}
		}
		//品牌logo2 自主加盟的品牌图片和自有品牌的图片
	$scope.imagesPath1 = "http://static.qineasy.com/base/images/add_files02.png"

	$scope.uploadFilesLogo1 = function(files) {
			if(files && files.length) {
				$scope.files = files;
				var imageUrl = JSON.parse(localStorage.keyParams).orgId + "/brandId/logo/";
				jsonObject = "{\"imageUrl\":\"" + imageUrl + "\"}";
				for(var i = 0; i < files.length; i++) {
					Upload.upload({
						url: pos + "imageUpload/addBrandImage",
						data: {
							keyParams: getKeyParams(jsonObject, localStorage.keyParams),
							jsonObject: getJsonObject(jsonObject)
						},
						file: files[i]
					}).success(function(data, status, headers, config) {
						$scope.imagesPath1 = data.data.imagesPath;
						$('.close-del').removeClass('fn-hide');
					}).error(function(data, status, headers, config) {
						console.log('error status:' + status);
					});
				}
			}
		}
		//品牌证书
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
					$scope.imagesPathcer = data.data.imagesPath;
					$("#brandImage").attr("src", $scope.imagesPathcer);
					$('.close-del').removeClass('fn-hide');
				}).error(function(data, status, headers, config) {
					console.log('error status: ' + status);
				});
			}
		}
	}
	
//	$scope.keyPar = JSON.parse(localStorage.keyParams);
	$scope.addJoinBrand = function(selfJoinBrandName, selfJoinBrandDesc, selfBrandImg, brandLicense) {
			$scope.userInformation = JSON.parse(localStorage.userInfo);
			//	添加加盟品牌的自主加盟
			//			if(validateForm("addOwnBrandForm") == true) {
			//				
			//			}else{
			//				alertmsg(validateForm("selfJoinBrand",'msg'),"error")
			//			}
			if($scope.joinType == "joinSelf") {
				if(validateForm("selfJoinBrand") == true) {
					var jsonObject = "{\"brandName\":" + "\"" + selfJoinBrandName + "\"" +
						",\"brandInfo\":" + "\"" + selfJoinBrandDesc + "\"" +
						",\"logo\":" + "\"" + $scope.imagesPath1 + "\"" +
						",\"orgName\":" + "\"" + $scope.userInformation.orgName + "\"" + "}";
					$http({
						method: "post",
						url: pos + "brand/addAutonomyJoinBrand",
						params: {
							keyParams: getKeyParams(jsonObject, localStorage.keyParams),
							jsonObject: getJsonObject(jsonObject)
						}
					}).success(function(data) {
						$scope.clearSelfJoin();
						$scope.getBrand("N");
						$scope.showJoin = false;
					})
				} else {
					alertmsg(validateForm("selfJoinBrand", 'msg'), "error")
				}

			}
			//		授权加盟
			if($scope.joinType == "codeJoin") {
				if($scope.orgId != undefined &&  $scope.brandId != undefined && $scope.getBrandName != undefined) {
					var jsonObject = "{\"orgId\":" + "\"" + $scope.orgId +
						"\"" + ",\"brandId\":" + "\"" + $scope.brandId + "\"" +
						",\"orgName\":" + "\"" + $scope.userInformation.orgName +
						"\"" + ",\"brandName\":" + "\"" + $scope.getBrandName + "\"" + "}";
					$http({
						method: "post",
						url: pos + "brand/addLicenseBrand",
						params: {
							keyParams: getKeyParams(jsonObject, localStorage.keyParams),
							jsonObject: getJsonObject(jsonObject)
						}
					}).success(function(data) {
						$scope.getBrand("N");
						$scope.showJoin = false;
						$scope.clearBrandLicense();
					})
				} else {
					alertmsg("请输入正确的品牌授权码", "error")
				}

			}
		}
		//	鼠标离开输入框显示品牌编号以及品牌信息
	$scope.brandLicense = "";
	$scope.getBrandInfo = function() {
			var jsonObject = "{\"brandLicense\":" + "\"" + $scope.brandLicense + "\"" + "}"
			$http({
				method: "post",
				url: pos + "brand/getOrgByBrandLicense",
				params: {
					keyParams: getKeyParams(jsonObject, localStorage.keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data) {
				if(data.code == "1") {
					$(".getBrandName").css({
						"color": "black"
					})
					$scope.orgId = data.data.brand.orgId;
					$scope.brandId = data.data.brand.brandId;
					$scope.getBrandName = data.data.brand.brandName;
				} else {
					$(".getBrandName").css({
						"color": "red"
					})
					$scope.getBrandName = "您输入品牌授权码有误"
				}
			})
		}
		//	下一步
	$scope.showConfir = false;
	$scope.nextStep = function() {
		if($scope.getBrandCode !== "1") {
			$scope.showConfir = true;
		} else {
			window.location.href = "register_index.jsp#/register_commercial_success";
		}
	}
	$scope.nexthtml = function() {
		window.location.href = "register_index.jsp#/register_commercial_success";
		$scope.showConfir = false;
	}
}])