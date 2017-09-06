qyApp.controller("brandManageController",["$scope", "$http", "Upload", "$route", "$state","$stateParams",
function ($scope, $http, Upload, $route, $state,$stateParams) {
	
	$scope.applyCount="0";
	var nub=0;
	var size=18;
	$scope.getBrandApply=function(){
		var jsonObject="{\"nub\":\""+nub+"\",\"size\":\""+size+"\"}";
		$http(
				{
					method:'post',
					url:pos+"brandApply/getBrandApply",
					params:{
						keyParams: getKeyParams(jsonObject, keyParams),
		                jsonObject: getJsonObject(jsonObject)
					}
				}
			).success(function(data){
				if(data.code=="1"){
					$scope.applys = data.data.brandApplyList;
					if(data.data.count!=undefined){
						$scope.applyCount=data.data.count;
						if($scope.applyCount>size){
							$scope.createPagePlugin($scope.applyCount,size);
						}
					}
	            }else{
	            	alertmsg(data.msg,"error");
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
		var jsonObject="{\"nub\":\""+from+"\",\"size\":\""+pageSize+"\"}";
		$http(
			{
				method:'post',
				url:pos+"brandApply/getBrandApply",
				params:{
					keyParams: getKeyParams(jsonObject, keyParams),
	                jsonObject: getJsonObject(jsonObject)
				}
			}
		).success(function(data){
			if(data.code=="1"){
				$scope.applys = data.data.brandApplyList;
            }else{
            	alertmsg(data.msg,"error");
            }
		})
	 }

	$scope.getBrandApply();
	$scope.adopted=function(obj){
		var jsonObject="{\"brandApplyId\":\""+obj.apply.brandApplyId+
		"\",\"applyOrgId\":\""+obj.apply.applyOrgId+
		"\",\"applyOrgName\":\""+obj.apply.applyOrgName+
		"\",\"brandId\":\""+obj.apply.brandId+
		"\",\"brandName\":\""+obj.apply.brandName+"\"}";
		
		$http(
				{
					method:'post',
					url:pos+"brandApply/adopted",
					params:{
						keyParams: getKeyParams(jsonObject, keyParams),
		                jsonObject: getJsonObject(jsonObject)
					}
				}
			).success(function(data){
				if(data.code=="1"){
					alertmsg("审核成功");
					$scope.getBrandApply();
	            }else{
	            	alertmsg(data.msg,"error");
	            }
			})
	}
	
	$scope.refused=function(obj){
		var jsonObject="{\"brandApplyId\":\""+obj.apply.brandApplyId+"\"}";
		$http(
				{
					method:'post',
					url:pos+"brandApply/refused",
					params:{
						keyParams: getKeyParams(jsonObject, keyParams),
		                jsonObject: getJsonObject(jsonObject)
					}
				}
			).success(function(data){
				if(data.code=="1"){
					alertmsg("审核成功");
					$scope.getBrandApply();
	            }else{
	            	alertmsg(data.msg,"error");
	            }
			})
	}
	
	/**合并品牌管理内容**/
	//获取品牌列表
	
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
		//	打开选择加盟类型的弹窗
	$scope.addtr = function() {
			$scope.show = true;
			$(".sure-to-join").centera();
		}
		//	关闭选择加盟类型的弹窗/
	$scope.close = function() {
			$scope.show = false;
		}
		//	打开自主加盟弹窗
	$scope.ownBrandSelect = function() {
			$scope.showOwn = true;
			$scope.show = false;
			$(".ownBrandBox").centera();
		}
		//	打开授权加盟品牌弹窗
	$scope.joinBrandSelect = function() {
			$scope.showJoin = true;
			$scope.show = false;
			$(".joinBrandBox").centera();

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
						$scope.getBrand("ALL");
					} else {
						alertmsg("自有品牌添加失败", "error");
					}
				})
			} else {
				alertmsg(validateForm("addOwnBrandForm", "msg"), 'error');
			}
		}
		//	获取品牌
	$scope.brandCount="0";
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
			$scope.code = data.code;
			if($scope.code == "1") {
				$scope.brandList = data.data.brandList;
				if($scope.brandList!=undefined){
					$scope.brandCount= $scope.brandList.length;
				}
				angular.forEach($scope.brandList, function(v) {
					if(v.brandInfo!=undefined&&v.brandInfo.length > 50) {
						v.brandInfo = v.brandInfo.substring(0,50)+"...";
					}
				})
			} else {
				alertmsg("品牌列表查询失败", "error")
			}
		})
	}
	$scope.getBrand("ALL");

	//品牌logo 自主加盟的品牌图片和自有品牌的图片
	$scope.imagesPath = "http://static.qineasy.com/base/images/add_files02.png"
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
					}).progress(function(evt){
						console.log(evt)
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
						//	           $("#brandLogo1").attr("src",$scope.imagesPath1);
						$('.close-del').removeClass('fn-hide');
					}).error(function(data, status, headers, config) {
						console.log('error status:' + status);
					});
				}
			}
		}
		//品牌证书 \n
	$scope.imagesPathcer = 'http://static.qineasy.com/base/images/add_files01.png';
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
					//	           $("#brandImage").attr("src", $scope.imagesPathcer);
					$('.close-del').removeClass('fn-hide');
				}).error(function(data, status, headers, config) {
					console.log('error status: ' + status);
				});
			}
		}
	}
	$scope.userInformation = JSON.parse(localStorage.userInfo);
	$scope.keyPar = JSON.parse(localStorage.keyParams);
	$scope.addJoinBrand = function(selfJoinBrandName, selfJoinBrandDesc, selfBrandImg, brandLicense) {
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
						$scope.getBrand("ALL");
						$scope.showJoin = false;
					})
				} else {
					alertmsg(validateForm("selfJoinBrand", 'msg'), "error")
				}
			}
			//		授权加盟
			if($scope.joinType == "codeJoin") {
				if($scope.orgId != undefined && $scope.brandId != undefined && $scope.getBrandName != undefined) {
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
						$scope.getBrand("ALL");
						$scope.showJoin = false;
						$scope.clearBrandLicense();
					})
				} else {
					if($scope.getBrandName=="等待授权方审核或授权方已审核"){
						alertmsg($scope.getBrandName, "error");
					}else{
						alertmsg("请输入正确的品牌授权码", "error");
					}
				}
			}
		}
		//	鼠标离开输入框显示品牌编号以及品牌信息
	$scope.brandLicense = "";
	$scope.getBrandInfo = function() {
		if($scope.brandLicense.length!=8){
			return;
		}
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
				$scope.getBrandName = data.msg;
			}
		})
	}
	
	//路由跳转
	$scope.goRoute=function(routeName,obj){
		//公共参数部分
		var sourceArr=[{level:0,name:"brandManage"}];
		var params={
			"source":sourceArr,
			"type":"1"
		};
		//个性化参数部分
		if(routeName=="brandDet"){
			$.extend(params,{brand:obj.brand});
		}else{
			return;
		}
		//跳转
		$state.go(routeName, {
			uiParams:params
		});
	}
	
	//初始化界面数据
	$scope.getBrand('ALL');
	

}]);

//让弹出框的位置居中
jQuery.fn.centera = function() {
		var Height = this.height();
		var Width = this.width();
		var winWidth = document.documentElement.clientWidth;
		var winHeight = document.documentElement.clientHeight;
		this.css({
			"left": (winWidth - Width) / 2 + "px",
			"top": (winHeight - Height) / 2 + "px"
		})
	}
	//当屏幕大小改变时,弹出框的位置居中
window.onresize = function() {
	$(".sure-to-join").centera();
	$(".joinBrandBox").centera();
	$(".ownBrandBox").centera();
}
