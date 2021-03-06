qyApp.controller("productAddController", ["$scope", "$http", "Upload", "$compile", "$route", "$state", "$stateParams", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	/*添加商品代码*/
	if($stateParams.uiParams != "") {
		$scope.orgId = $stateParams.uiParams.orgId;
		$scope.jsonObject = JSON.stringify({
			"orgId": $scope.orgId
		});
	} else {
		$scope.orgId = "";
		$scope.jsonObject = JSON.stringify({
			"orgId": $scope.orgId
		});
	}
	$scope.item0=[];
	$scope.item1=[];
	$scope.item2=[];
	$scope.item3=[];
	$scope.selectSortId0="";
	$scope.selectSortId1="";
	$scope.selectSortId2="";
	$scope.selectSortId3="";
	//查询品牌
	$http({
			method: 'post',
			url: pos + 'brand/getBrandTB',
			params: {
				keyParams: getKeyParams($scope.jsonObject, keyParams),
				jsonObject: getJsonObject($scope.jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.queryBrands = data.data.brandList;
			} else {
				alertmsg("获取品牌失败", "error");
			}
		})
		//年份数组
	var dt = new Date();
	year = dt.getFullYear();
	$scope.years = [];
	for(var i = 0; i < 7; i++) {
		$scope.years.push(year - 5 + i);
	}
	$scope.proYear = year + "";
	//获取色系
	$scope.colorSystem = function() {
			$http({
				method: 'post',
				url: pos + 'color/getColorSystem',
				params: {
					keyParams: getKeyParams($scope.jsonObject, keyParams),
					jsonObject: getJsonObject($scope.jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.itemsColorList = data.data.colorList;
					$scope.getSystem();
				} else {
					alertmsg('获取色系失败', "error");
				}
			})
		}
		//获取色系颜色
	$scope.getSystem = function(obj) {
		$http({
			method: 'post',
			url: pos + 'color/getColorSystem',
			params: {
				keyParams: getKeyParams($scope.jsonObject, keyParams),
				jsonObject: getJsonObject($scope.jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.itemsColorList = data.data.colorList;
				var colorSystem = $scope.itemsColorList[0].colorSystem;
				var jsonColorSystem = JSON.stringify({
					"orgId": $scope.orgId,
					"colorSystem": colorSystem
				});
				$http({
					method: 'post',
					url: pos + 'color/getColor',
					params: {
						keyParams: getKeyParams(jsonColorSystem, keyParams),
						jsonObject: getJsonObject(jsonColorSystem)
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == "1") {
						$scope.colors = data.data.colorList;
						$('[name=' + colorSystem + ']').attr("data-tab", "selected");
					} else {
						alertmsg('获取初始化色系颜色失败', "error");
					}
				})
			} else {
				alertmsg('获取初始化色系颜色失败', "error");
			}
		})
	}
	$scope.colorSystem();
	//获取大品类
	var jsonSortPid = JSON.stringify({
		"orgId": $scope.orgId,
		"sortPid": "0"
	});
	$http({
		method: 'post',
		url: pos + 'sort/getBaseAndCustomSort',
		params: {
			keyParams: getKeyParams(jsonSortPid, keyParams),
			jsonObject: getJsonObject(jsonSortPid)
		}
	}).success(function(data, stauts, headers, config) {
		if(data.code == "1") {
			$scope.item0 = data.data.sortList;
		} else {
			alertmsg('获取大品类失败', "error");
		}
	})
	$scope.proSeason = "春";
	$scope.proSex = "M";
	//修改商品名称	
	$scope.itemsSort="";
	$scope.itemsSelectSortId="";
	$scope.changeProName = function(items,selectSortId) {
			$scope.itemsSort=items;
			$scope.itemsSelectSortId=selectSortId;
			if(items != '' && items != undefined) {
				for(var i = 0; i < items.length; i++) {
					if(items[i].sortId == selectSortId) {
						$('[name="proName"]').val(($scope.proYear == undefined ? "" : $scope.proYear) +
							($scope.proSeason == undefined ? "" : $scope.proSeason) +
							((($scope.proSex == undefined ? "" : $scope.proSex) == "F") ? "男款" : "女款") +
							items[i].sortName +
							($scope.styleNumber == undefined ? "" : $scope.styleNumber));
					}
				}
			}
		}
	//tyep 1为获取第2级品类 、2为获取第3级品类、 3为获取第4级品类
	$scope.sortIdChange = function(sortId, type) {
		if(sortId != null){
			var jsonObject = {
					"orgId": $scope.orgId,
					"sortPid": sortId
				};
				jsonObject = JSON.stringify(jsonObject);
				$http({
					method: 'post',
					url: pos + 'sort/getBaseAndCustomSort',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == "1") {
						if(type == "1") {
							$scope.item1 = data.data.sortList;
							$scope.item2 = [];
							$scope.item3 = [];
							$scope.selectSortId2="";
							$scope.selectSortId3="";
						} else if(type == "2") {
							$scope.item2 = data.data.sortList;
							if($scope.item2.length == 0){
								$scope.changeProName($scope.item1,$scope.selectSortId1);
							}
							$scope.item3 = [];
							$scope.selectSortId3="";
						} else if(type == "3"){
							$scope.item3 = data.data.sortList;
							if($scope.item3.length == 0){
								$scope.changeProName($scope.item2,$scope.selectSortId2);
							}
						}
					} else {
						alertmsg('获取品类失败', "error");
					}
				})
		}
	}
	//获取色系颜色
	$scope.getColBySys = function(obj) {
			var colorSystem = obj.system.colorSystem;
			var jsonObject = new Object();
			jsonObject.colorSystem = colorSystem;
			jsonObject.orgId = $scope.orgId;
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'color/getColor',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.colors = data.data.colorList;
					$('[name=' + colorSystem + ']').siblings().removeAttr("data-tab");
					$('[name=' + colorSystem + ']').attr("data-tab", "selected");
				} else {
					alertmsg('获取色系颜色失败', "error");
				}
			})
		}
		//储存选中颜色的数据
	$scope.ColorNumAndName = [];
	$scope.chkColor = function(colorId, chks, colorName, colorNum) {
		if(chks == true) { //选中
			var object = new Object();
			object.colorNum = colorNum;
			object.colorId = colorId;
			object.colorName = colorName;
			$scope.ColorNumAndName.push(object);
		} else {
			for(var x = 0; x < $scope.ColorNumAndName.length; x++) {
				if($scope.ColorNumAndName[x].colorId == colorId) {
					$scope.ColorNumAndName.splice(x, 1);
				}
			}
		}
	}
	$scope.isSelected = function(id) {
			for(var u = 0; u < $scope.ColorNumAndName.length; u++) {
				if($scope.ColorNumAndName[u].colorId == id) {
					return true;
				}
			}
			return false;
		}
		//获取尺码组
	$scope.sizeGroup = function() {
		$http({
			method: 'post',
			url: pos + 'sizeGroup/getSizeGroup',
			params: {
				keyParams: getKeyParams($scope.jsonObject, keyParams),
				jsonObject: getJsonObject($scope.jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.itemsGroup = data.data.groupList;
			} else {
				alertmsg('获取尺码组失败', "error");
			}
		})
	}
	$scope.sizeGroup();
	//选择尺码组
	$scope.groupIdChange = function() {
		var groupId = $scope.selectedGroup;
		var jsonGroupId = JSON.stringify({
			"orgId": $scope.orgId,
			"groupId": groupId
		});
		$http({
			method: 'post',
			url: pos + 'size/getAllSize',
			params: {
				keyParams: getKeyParams(jsonGroupId, keyParams),
				jsonObject: getJsonObject(jsonGroupId)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				var sizeGroup = data.data.sizeGroup[0].sizes;
				$scope.sizes = sizeGroup;
				$scope.SizeNumAndName = [];
				var groupName;
				for(var i = 0; i < $scope.itemsGroup.length; i++) {
					if($scope.itemsGroup[i].groupId == groupId) {
						groupName = $scope.itemsGroup[i].groupName;
					}
				}
				for(var i = 0; i < sizeGroup.length; i++) {
					var selectSize = "S,M,L,XL,XXL,27,28,29,30,31,36,37,38,39,均码";
					if(groupName == "裤子") {
						selectSize = "27,28,29,30,31";
					}
					if(selectSize.indexOf(sizeGroup[i].sizeName) > -1) {
						var object = new Object();
						object.sizeId = sizeGroup[i].sizeId;
						object.sizeName = sizeGroup[i].sizeName;
						object.sizeNum = sizeGroup[i].sizeNum;
						$scope.SizeNumAndName.push(object);
					}
				}
			} else {
				alertmsg('获取尺码失败', "error");
			}
		})
	}

	//储存选中尺码的数据
	$scope.chkSize = function(sizeId, chks, sizeName, sizeNum) {
		if(chks == true) { //选中
			var object = new Object();
			object.sizeNum = sizeNum;
			object.sizeId = sizeId;
			object.sizeName = sizeName;
			$scope.SizeNumAndName.push(object);
		} else {
			for(var x = 0; x < $scope.SizeNumAndName.length; x++) {
				if($scope.SizeNumAndName[x].sizeId == sizeId) {
					$scope.SizeNumAndName.splice(x, 1);
				}
			}
		}
	}
	$scope.isSelectedSize = function(id) {
		for(var u = 0; u < $scope.SizeNumAndName.length; u++) {
			if($scope.SizeNumAndName[u].sizeId == id) {
				return true;
			}
		}
		return false;
	}
	$scope.uploadMain = function(files, imgId, type) {
			var imageUrl = JSON.parse(keyParams).orgId + "/product/"
			jsonObject = "{\"imageUrl\":\"" + imageUrl + "\"}";
			if(files && files.length) {
				$scope.files = files;
				for(var i = 0; i < files.length; i++) {
					Upload.upload({
						//服务端接收
						url: pos + 'imageUpload/addProductImage',
						//上传的同时带的参数
						data: {
							keyParams: getKeyParams(jsonObject, keyParams),
							jsonObject: getJsonObject(jsonObject)
						},
						file: files[i]
					}).success(function(data, status, headers, config) {
						//上传成功
						if(data.code == "1") {
							$scope.mainUrl = data.data.imagesPath;
							$("#mainUrl").attr("src", $scope.mainUrl);
						} else {
							alertmsg("上传图片失败", "error");
						}
					}).error(function(data, status, headers, config) {
						//上传失败
						console.log('error status: ' + status);
					});
				}
			}
		}
		//重置参数
	$scope.resetProduct = function() {
			$("#addproductForm")[0].reset();
			$scope.ColorNumAndName = [];
			$scope.SizeNumAndName = [];
			$scope.selectedGroup = "";
			$scope.pGrandparentSort = "";
			$scope.pParentSortId = "";
			$scope.pSortId = "";
			$scope.brandIds = "";
			$("#mainUrl").attr("src", "../static/base/images/icon_upload.png");
		}
		//保存商品
	$scope.addSuccessDialog = false;
	$(".addProductSuccess").center();
	$scope.saveProduct = function(obj) {
			if(validateForm("addproductForm", "msg") == true) {
				var jsonObjecta = $("#addproductForm").serializeJson();
				var jsonObj = eval('(' + jsonObjecta + ')');
				var products = [];
				for(var i = 0; i < $scope.ColorNumAndName.length; i++) {
					for(var j = 0; j < $scope.SizeNumAndName.length; j++) {
						var prods = new Object();
						prods.proSizeName = $scope.SizeNumAndName[j].sizeName;
						prods.proSize = $scope.SizeNumAndName[j].sizeId;
						prods.proColorId = $scope.ColorNumAndName[i].colorId;
//						var proSkuPrice = $scope.ColorNumAndName[i].colorId + $scope.SizeNumAndName[j].sizeId + "2";
//						prods.proSkuPrice = $('#' + proSkuPrice).val();
						var proInnerbc = $scope.ColorNumAndName[i].colorId + $scope.SizeNumAndName[j].sizeId + "1";
						prods.proInnerbc = $('#' + proInnerbc).val();
						var proInterbc = $scope.ColorNumAndName[i].colorId + $scope.SizeNumAndName[j].sizeId;
						prods.proInterbc = $('#' + proInterbc).val();
						products.push(prods);
					}
				}
				jsonObj.products = products;
				jsonObj.mainUrl = $scope.mainUrl;
				//add by xsy 2016-12-09
				jsonObj.orgId=$scope.orgId;
				if($scope.selectSortId3 != "" && $scope.selectSortId3 != null){
					jsonObj.proSortId = $scope.selectSortId3;
					jsonObj.sortId = $scope.selectSortId3;
					for(var i=0;i<$scope.item3.length;i++){
						if($scope.selectSortId3 == $scope.item3[i].sortId){
							jsonObj.sortName = $scope.item3[i].sortName;
						}
					}
				}else{
					if($scope.selectSortId2 != "" && $scope.selectSortId2 != null){
						jsonObj.proSortId = $scope.selectSortId2;
						jsonObj.sortId = $scope.selectSortId2;
						for(var i=0;i<$scope.item2.length;i++){
							if($scope.selectSortId2 == $scope.item2[i].sortId){
								jsonObj.sortName = $scope.item2[i].sortName;
							}
						}
					}else{
						if($scope.selectSortId1 != "" && $scope.selectSortId1 != null){
							jsonObj.proSortId = $scope.selectSortId1;
							jsonObj.sortId = $scope.selectSortId1;
							for(var i=0;i<$scope.item1.length;i++){
								if($scope.selectSortId1 == $scope.item1[i].sortId){
									jsonObj.sortName = $scope.item1[i].sortName;
								}
							}
						}else{
							jsonObj.proSortId = $scope.selectSortId0;
							jsonObj.sortId = $scope.selectSortId0;
							for(var i=0;i<$scope.item0.length;i++){
								if($scope.selectSortId0 == $scope.item0[i].sortId){
									jsonObj.sortName = $scope.item0[i].sortName;
								}
							}
						}
					}
				}
				$scope.productInfoObj = jsonObj;
				jsonObj = JSON.stringify(jsonObj);
				$http({
					method: 'post',
					url: pos + 'product/addProductTB',
					params: {
						keyParams: getKeyParams(jsonObj, keyParams),
						jsonObject: getJsonObject(jsonObj)
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == "1") {
						$scope.backPromodelId = data.data.proModelid
						$scope.addSuccessDialog = true;
						$scope.goback();
					} else if(data.code == "20010") {
						alertmsg('款号不允许重复', "error");
					} else {
						alertmsg('添加款号失败', "error");
					}
				})
			} else {
				alertmsg(validateForm("addproductForm", "msg"), 'error')
			}
		}
		/*添加商品成功之后点击弹窗上的按钮进行操作*/
	$scope.gobackToProList = function() {
		
			$state.go("productList",{uiParams:""})
			$scope.addSuccessDialog = false;
		}
		/*点击继续添加商品*/
	$scope.continueToAdd = function() {
		$scope.resetProduct();
		$scope.addSuccessDialog = false;
	}
	$scope.lookThisDetail = function() {
		$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
		$stateParams.uiParams.model=$.extend($stateParams.uiParams.model,$scope.productInfoObj);
		$stateParams.uiParams.model.mainPic=$stateParams.uiParams.model.mainUrl;
			$state.go("productBaseInfo", {
				uiParams: {
					"source": $stateParams.uiParams.source,
					"type": "1",
					"model": $.extend($stateParams.uiParams.model, {
						"proModelid": $scope.backPromodelId,
						"tabIndex":"1"
					}),
					"orgManage":$stateParams.uiParams.orgManage,
					"orgId": $stateParams.uiParams.orgId
				}
			})
			
		$scope.addSuccessDialog = false;
	};
	$scope.uploadMateria=function(){
		$scope.resetProduct();
		$stateParams.uiParams.model=$.extend($stateParams.uiParams.model,$scope.productInfoObj);
		$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
		$stateParams.uiParams.model.mainPic=$stateParams.uiParams.model.mainUrl;
		
			$state.go("productBaseInfo", {
				uiParams: {
					"source": $stateParams.uiParams.source,
					"type": "1",
					"model": $.extend($stateParams.uiParams.model, {
						"proModelid": $scope.backPromodelId,
						"tabIndex":"2"
					}),
					"orgManage":$stateParams.uiParams.orgManage,
					"orgId": $stateParams.uiParams.orgId
				}
			})
			//		$scope.model.mainPic = $scope.model.mainUrl;
			//		$scope.productDetailInfo(model);
		$scope.addSuccessDialog = false;
		//		$scope.obj.productAdd = "hide";
	}
	$stateParams.uiParams.source.push({
		level: "0",
		name: "productAdd"
	})
	$scope.goback = function() {
			$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
			$state.go($stateParams.uiParams.source[$stateParams.uiParams.source.length - 1].name, {
				uiParams: {
					"source": $stateParams.uiParams.source,
					"type": "2",
					"model": $.extend($stateParams.uiParams.model, {
						tabIndex: ""
					}),
					"orgManage":$stateParams.uiParams.orgManage,
					"orgId": $stateParams.uiParams.orgId
				}
			})
		}
		/*商品信息回显的代码*/
	$scope.queryProduct = function(proModelid, orgId) {
			$('[name="proSeason"]').removeAttr("ng-change");
			$('[name="proYear"]').removeAttr("ng-change");
			$('[name="proSex"]').removeAttr("ng-change");
			$('[name="pSortId"]').removeAttr("ng-change");
			$('[name="proModelnum"]').removeAttr("ng-blur");
			$('[name="proSeason"]').unbind("change");
			$('[name="proYear"]').unbind("change");
			$('[name="proSex"]').unbind("change");
			$('[name="pSortId"]').unbind("change");
			$('[name="proModelnum"]').unbind("blur");
			$scope.proModelid = proModelid;
			$scope.ColorNumAndName = [];
			$scope.SizeNumAndName = [];
			$http({
				method: 'post',
				url: pos + 'product/getProductInfoTB',
				params: {
					keyParams: getKeyParams("{\"proModelid\":\"" + proModelid + "\"}", keyParams),
					jsonObject: getJsonObject("{\"proModelid\":\"" + proModelid + "\"}")
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.productInfo = data.data.propertyList[0];
					$scope.proColorList = data.data.proColorList;
					$scope.attrList = data.data.attrList;
					$('[name="proName"]').val($scope.productInfo.proName);
					$('[name="proSeason"]').val($scope.productInfo.proSeason);
					$('[name="proStage"]').val($scope.productInfo.proStage);
					$('[name="proSeries"]').val($scope.productInfo.proSeries);
					$('[name="proStyle"]').val($scope.productInfo.proStyle);
					$('[name="proUom"]').val($scope.productInfo.proUom);
					//					$scope.proYear = $scope.productInfo.proYear;
					//					$scope.proSex=$scope.productInfo.proSex;
					$('[name="proYear"]').val($scope.productInfo.proYear);
					$('[name="proSex"]').val($scope.productInfo.proSex);
					$('[name="proModelnum"]').val($scope.productInfo.proModelnum);
					$('[name="proModelid"]').val($scope.productInfo.proModelid);
					$('[name="proPrice"]').val($scope.productInfo.proPrice);
					$scope.selectedGroup = $scope.productInfo.groupId;
					$scope.pGrandparentSort = $scope.productInfo.proGrandparentSortId;
					//回显中品类
					$scope.sortIdChange($scope.pGrandparentSort, 1);
					$scope.pParentSortId = $scope.productInfo.proParentSortId;
					//回显小品类
					$scope.sortIdChange($scope.pParentSortId, 2);
					$scope.pSortId = $scope.productInfo.proSortId;
					$scope.brandIds = $scope.productInfo.brandId;
					$scope.strColor = "";
					$scope.strSize = "";
					for(var i = 0; i < $scope.proColorList.length; i++) {
						if($scope.strSize.indexOf($scope.proColorList[i].proSize) < 0) {
							$scope.strSize = $scope.strSize + $scope.proColorList[i].proSize + ",";
							var object = new Object();
							object.sizeNum = $scope.proColorList[i].sizeNum;
							object.sizeId = $scope.proColorList[i].proSize;
							object.sizeName = $scope.proColorList[i].proSizeName;
							$scope.SizeNumAndName.push(object);
						}
						if($scope.strColor.indexOf($scope.proColorList[i].proColorId) < 0) {
							$scope.strColor = $scope.strColor + $scope.proColorList[i].proColorId + ",";
							var object = new Object();
							object.colorNum = $scope.proColorList[i].colorNum;
							object.colorId = $scope.proColorList[i].proColorId;
							object.colorName = $scope.proColorList[i].proColorName;
							$scope.ColorNumAndName.push(object);
						}
					}
					$scope.styleNumber = $scope.productInfo.proModelnum;
					if($scope.attrList.length > 0) {
						$scope.mainUrl = $scope.attrList[0].proAttrValue;
					} else {
						$scope.mainUrl = "";
					}
					$("#mainUrl").attr("src", $scope.mainUrl);
					$('[name="proSeason"]').attr("ng-change", "changeProName()");
					$('[name="proYear"]').attr("ng-change", "changeProName()");
					$('[name="proSex"]').attr("ng-change", "changeProName()");
					$('[name="pSortId"]').attr("ng-change", "sortIdChange(pParentSortId,'p')");
					$('[name="proModelnum"]').attr("ng-blur", "changeProName()");
					$('[name="proSeason"]').bind("change");
					$('[name="proYear"]').bind("change");
					$('[name="proSex"]').bind("change");
					$('[name="pSortId"]').bind("change");
					$('[name="proModelnum"]').bind("blur");
					var groupId = $scope.productInfo.groupId;
					var jsonGroupId = JSON.stringify({
						"orgId": $scope.orgId,
						"groupId": groupId
					});
					$http({
						method: 'post',
						url: pos + 'size/getAllSize',
						params: {
							keyParams: getKeyParams(jsonGroupId, keyParams),
							jsonObject: getJsonObject(jsonGroupId)
						}
					}).success(function(data, stauts, headers, config) {
						if(data.code == "1") {
							var groupId = $scope.productInfo.groupId;
							var sizeGroup = data.data.sizeGroup[0].sizes;
							$scope.sizes = sizeGroup;
						} else {
							alertmsg('获取商品尺码组和尺码失败', "error");
						}
					})
				} else {
					alertmsg('获取商品详情失败', "error");
				}
			})
		}
		//修改商品信息
	$scope.updateProduct = function(obj) {
		if(validateForm("addproductForm", "msg") == true) {
			var jsonObjecta = $("#addproductForm").serializeJson();
			var jsonObj = eval('(' + jsonObjecta + ')');
			var products = [];
			for(var i = 0; i < $scope.ColorNumAndName.length; i++) {
				for(var j = 0; j < $scope.SizeNumAndName.length; j++) {
					var prods = new Object();
					prods.proSizeName = $scope.SizeNumAndName[j].sizeName;
					prods.proSize = $scope.SizeNumAndName[j].sizeId;
					prods.proColorId = $scope.ColorNumAndName[i].colorId;
					var proInnerbc = $scope.ColorNumAndName[i].colorId + $scope.SizeNumAndName[j].sizeId + "1";
					prods.proInnerbc = $('#' + proInnerbc).val();
					var proInterbc = $scope.ColorNumAndName[i].colorId + $scope.SizeNumAndName[j].sizeId;
					prods.proInterbc = $('#' + proInterbc).val();
					products.push(prods);
				}
			}
			jsonObj.products = products;
			jsonObj.mainUrl = $scope.mainUrl;
			jsonObj.proModelid = $scope.proModelid;
			jsonObj = JSON.stringify(jsonObj);
			$http({
				method: 'post',
				url: pos + 'product/updateProductTB',
				params: {
					keyParams: getKeyParams(jsonObj, keyParams),
					jsonObject: getJsonObject(jsonObj)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.resetProduct();
					$scope.goback('productCenter');
				} else if(data.code == "20013") {
					alertmsg('此款有库存不允许修改款号!', "error");
				} else if(data.code == "20014") {
					alertmsg(data.msg, "error");
				} else if(data.code == "20015") {
					alertmsg(data.msg, "error");
				} else if(data.code == "20016") {
					alertmsg(data.msg, "error");
				} else {
					alertmsg('更新商品资料失败', "error");
				}
			})
		} else {
			alertmsg(validateForm("addproductForm", "msg"), 'error')
		}
	}
	if($stateParams.uiParams.hasPromodelId != true) {
		$scope.queryProduct($stateParams.uiParams.proModelid, $stateParams.uiParams.orgId);
	}
	//跳转页面
	$scope.addBrand=function(){
		$state.go('brandAdd', {
			uiParams: ''
		});
	}
	$scope.addColor=function(){
		$state.go('skuEncod', {
			uiParams: ''
		});
	}

}]);