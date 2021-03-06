qyApp.controller('productController', function($scope, $timeout, $http, $compile, Upload, $sce) {
	$scope.season = "";
	$scope.queryYear = "";
	$scope.queryBrand = "";
	$scope.gps = "";
	$scope.ps = "";
	$scope.sort = "";
	var from = 0;
	var pageSize = 5;
	var total = 0;
	$scope.createPagePlugin = function(total, pageSize) {
		$("#paging").empty();
		paging = pagePlugin.createPaging({
			renderTo: 'paging',
			total: total,
			pageSize: pageSize
		});
		//		  $scope.from=form;
		paging.goPage = function(from, to) {
			$scope.page(from - 1, pageSize);
		}
	};
	$scope.froma = 0;
	$scope.page = function(from, pageSize) {
			$scope.jsonPage = {
				"nub": "" + from + "",
				"size": "" + pageSize + ""
			};
			$.extend($scope.jsonPage, $scope.param);
			$scope.jsonObject = JSON.stringify($scope.jsonPage);
			$scope.froma = from;
			$http({
				method: 'post',
				url: pos + 'product/getAllProduct',
				params: {
					keyParams: getKeyParams($scope.jsonObject, keyParams),
					jsonObject: getJsonObject($scope.jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.products = data.data.productList;
				} else {
					alertmsg("获取商品信息失败", "error");
				}
			})
		}
		//查询品牌
	$http({
		method: 'post',
		url: pos + 'brand/getBrand',
		params: {
			keyParams: getKeyParams('{}', keyParams),
			jsonObject: getJsonObject('{}')
		}
	}).success(function(data, stauts, headers, config) {
		if(data.code == 1) {
			$scope.queryBrands = data.data.brandList;
		} else {
			alertmsg("获取品牌失败", "error");
		}
	})

	$scope.getConditions = function() {
		if($scope.queryBrand != null) {
			$scope.getYears();
			$scope.getSeasons();
			$scope.getSorts();
		} else {
			$scope.queryYears = "";
			$scope.seasons = "";
			$scope.grandparentSorts = "";
			$scope.parentSorts = "";
			$scope.sorts = "";
		}
	}

	//查询年份
	$scope.getYears = function() {
		var jsonObject = {
			brandId: $scope.queryBrand
		};
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'model/getDisProYear',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.queryYears = data.data.productList;
			} else {
				alertmsg("获取年份失败", "error");
			}
		})
	}

	//查询季节
	$scope.getSeasons = function() {
		var jsonObject = {
			brandId: $scope.queryBrand
		};
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'model/getDisProSeason',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.seasons = data.data.productList;
			} else {
				alertmsg("获取季节失败", "error");
			}
		})
	}

	//查询大品类
	$scope.getSorts = function() {
		var jsonObject = {
			brandId: $scope.queryBrand
		};
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'model/getGrandparentSort',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.grandparentSorts = data.data.productList;
			} else {
				alertmsg("获取大品类失败", "error");
			}
		})
	}

	//查询中品类
	$scope.getParentSort = function(obj) {
		var proGrandparentSortId = $scope.gps;
		var jsonObject = "{" + "\"proGrandparentSortId\":\"" + proGrandparentSortId + "\",\"brandId\":\"" + $scope.queryBrand + "\"}";
		$http({
			method: 'post',
			url: pos + 'model/getParentSort',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.parentSorts = data.data.productList;
			} else {
				alertmsg("获取中品类失败", "error");
			}
		})
	}

	//查询小品类
	$scope.getSort = function(obj) {
		var proGrandparentSortId = $scope.gps;
		var proParentSortId = $scope.ps;
		var jsonObject = "{" + "\"proGrandparentSortId\":\"" + proGrandparentSortId + "\",\"proParentSortId\":\"" + proParentSortId + "\",\"brandId\":\"" + $scope.queryBrand + "\"}";
		$http({
			method: 'post',
			url: pos + 'model/getSort',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.sorts = data.data.productList;
			} else {
				alertmsg("获取小品类失败", "error");
			}
		})
	}

	$scope.type = "";
	$scope.getStock = function(type) {
			$scope.type = type;
			if(type == 1) {
				var proModelid = $("#proModelid").val();
				var jsonObject = "{" + "\"proModelid\":\"" + proModelid + "\",\"nub\":\"" + $scope.froma + "\",\"size\":\"" + pageSize + "\"}";
				if(proModelid == '') {
					alertmsg("请输入款号", "error")
					return false;
				}
			} else if(type == 2) {
				var proGrandparentSortId = $scope.gps;
				if(proGrandparentSortId == null) {
					proGrandparentSortId = "";
				}
				var proParentSortId = $scope.ps;
				if(proParentSortId == null) {
					proParentSortId = "";
				}
				var proSortId = $scope.sort;
				if(proSortId == null) {
					proSortId = "";
				}
				var brandId = $scope.queryBrand;
				if(brandId == null) {
					brandId = "";
				}
				var proSeason = "";
				var queryProYear = "";
				if($scope.season1 != undefined && $scope.season1 != '') {
					proSeason = $scope.season1.proSeason;
				}
				if($scope.year1 != undefined && $scope.year1 != '') {
					queryProYear = $scope.year1.proYear;
				}
				var proModelid = "";
				var jsonObject = "{" + "\"brandId\":\"" + brandId + "\",\"proGrandparentSortId\":\"" + proGrandparentSortId + "\",\"proParentSortId\":\"" + proParentSortId + "\",\"proSortId\":\"" + proSortId + "\",\"proSeason\":\"" + proSeason + "\",\"proYear\":\"" + queryProYear + "\",\"nub\":\"" + $scope.froma + "\",\"size\":\"" + pageSize + "\"}";
			}
			$http({
				method: 'post',
				url: pos + 'product/getAllProduct',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					if(data.data.productList.length > 0) {
						$scope.products = data.data.productList;
						$scope.count = data.data.count;
						$scope.createPagePlugin($scope.count, pageSize);
						$scope.param = {
							"brandId": "" + brandId + "",
							"proGrandparentSortId": "" + proGrandparentSortId + "",
							"proParentSortId": "" + proParentSortId + "",
							"proSortId": "" + proSortId + "",
							"proSeason": "" + proSeason + "",
							"proYear": "" + queryProYear + "",
							"proModelid": "" + proModelid + ""
						};
					}
				} else {
					alertmsg("获取商品信息失败", "error");
				}
			})
		}
		//    加载商品列表
	$scope.loadGetStock = function(type) {
		var jsonObject = {
			"orgId": "",
			"proGrandparentSortId": "",
			"proParentSortId": "",
			"proSortId": "",
			"proModelid": "",
			"brandId": "",
			"proYear": "",
			"proSeason": "",
			"startStock": "",
			"endStock": "",
			"nub": from,
			"size": pageSize
		};
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'product/getAllProduct',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				if(data.data.productList.length > 0) {
					$scope.products = data.data.productList;
					$scope.count = data.data.count;
					$scope.createPagePlugin($scope.count, pageSize);
				}
			} else {
				alertmsg("获取商品信息失败", "error");
			}
		})
	}
	$scope.toAddProduct = function() {
			$scope.clearImage("main1");
			$scope.clearImage("main2");
			$scope.clearImage("main3");
			$scope.clearImage("main4");
			$scope.clearImage("main5");
			$('[name="designer"]').val("");
			$('[name="proName"]').val("");
			$('[name="proSeason"]').val("春");
			$('[name="proStage"]').val("");
			$('[name="proUom"]').val("");
			$('[name="proSeries"]').val("");
			$('[name="proStyle"]').val("");
			$('[name="proStage"]').val("");
			$scope.proYear = year;
			$scope.selectedc = "";
			$scope.selectedg = "";
			$('[name="proSex"]').val("F");
			$('[name="proModelnum"]').val("");
			$('[name="proModelid"]').val("");
			$('[name="proPrice"]').val("");
			$scope.selectedGroup = "";
			$scope.selected = "";
			$scope.numA = '1';
			//$scope.newProModelid();
			$scope.ColorNumAndName = [];
			$scope.SizeNumAndName = [];
			$scope.imagesList = [];

			//Uedit插件的配置代码
			//	图片上传路径的选择
			UE.Editor.prototype._bkGetActionUrl = UE.Editor.prototype.getActionUrl;
			UE.Editor.prototype.getActionUrl = function(action) {
				if(action == 'config') {
					return qineasy + "oms/static/base/ueditor1_4_3_3-utf8-jsp/utf8-jsp/jsp/controller.jsp?action=config";
				} else if(action == 'uploadimage' || action == 'uploadscrawl' || action == 'uploadimage') {
					return pos + 'imageUpload/addProDetailImage';
				} else if(action == 'listimage') {
					return pos + 'product/getProDtailInServerTB';
				} else {
					return this._bkGetActionUrl.call(this, action);
				}
			}
			$scope.ue = UE.getEditor('editor', {
				autoHeightEnabled: true,
				autoFloatEnabled: true,
				initialFrameHeight: 300
			});
			//	点击事件获取Uedit里面的代码
			$scope.ue.ready(function() {
				var imageUrl = JSON.parse(keyParams).orgId + "/product/";
				jsonObject = JSON.stringify({
					'imageUrl': imageUrl,
					"proAttrName": "b"
				});
				$scope.ue.execCommand('serverparam', function(editor) {
					return {
						jsonObject: getJsonObject(jsonObject),
						keyParams: getKeyParams(jsonObject, keyParams)
					};
				});
			});
			$scope.$on('$destroy', function() {
				$scope.ue.destroy();
			});
		}
		//添加product的js      
	var brandId = "";
	//um编辑器

	//年份数组
	var dt = new Date();
	year = dt.getFullYear();
	$scope.years = [];
	for(var i = 0; i < 10; i++) {
		if(i == 0) {
			$scope.years.push(year);
		} else {
			$scope.years.push(year - i);
			$scope.years.push(year + i);
		}
	}
	$scope.years.sort();
	//清除图片
	$scope.clearImage = function(position) {
			$("#" + position).attr("src", "http://static.qineasy.com/base/images/photobg.jpg");
		}
		//移动图片
	$scope.moveImage = function(position1, position2, positionType) {
		var url1 = $("#" + position1)[0].src;
		var url2 = $("#" + position2)[0].src;
		$("#" + position1).attr("src", url2);
		$("#" + position2).attr("src", url1);
		var f = 0;
		var k = 0;
		for(var h = 0; h < $scope.imagesList.length; h++) {
			if(position1 == $scope.imagesList[h].proAttrValue + positionType + $scope.imagesList[h].index) {
				$scope.imagesList[h].url = url2;
				f++;
			}
			if(position2 == $scope.imagesList[h].proAttrValue + positionType + $scope.imagesList[h].index) {
				$scope.imagesList[h].url = url1;
				k++;
			}
		}
		if(f == 0) {
			if(positionType == "Edit") {
				var object = new Object();
				//				object.proModelid = $scope.proModelid;
				object.proAttrValue = position1.substring(0, position1.length - 5);
				object.url = url2;
				object.index = position1.substring(position1.length - 1, position1.length);
				$scope.imagesList.push(object);
			} else {
				var object = new Object();
				//				object.proModelid = $scope.proModelid;
				object.proAttrValue = position1.substring(0, position1.length - 1);
				object.url = url2;
				object.index = position1.substring(position1.length - 1, position1.length);
				$scope.imagesList.push(object);
			}
		}
		if(k == 0) {
			if(positionType == "Edit") {
				var object = new Object();
				//				object.proModelid = $scope.proModelid;
				object.proAttrValue = position2.substring(0, position2.length - 5);
				object.url = url1;
				object.index = position2.substring(position2.length - 1, position2.length);
				$scope.imagesList.push(object);
			} else {
				var object = new Object();
				//				object.proModelid = $scope.proModelid;
				object.proAttrValue = position2.substring(0, position2.length - 1);
				object.url = url1;
				object.index = position2.substring(position2.length - 1, position2.length);
				$scope.imagesList.push(object);
			}
		}
	}
//	$http({
//			method: 'post',
//			url: pos + 'sort/selectSort',
//			params: {
//				keyParams: getKeyParams("{\"sortPid\":\"0\",\"brandId\":\"" + brandId + "\"}", keyParams),
//				jsonObject: getJsonObject("{\"sortPid\":\"0\",,\"brandId\":\"" + brandId + "\"}")
//			}
//		}).success(function(data, stauts, headers, config) {
//			if(data.code == "1") {
//				$scope.items = data.data.sortList;
//				$scope.brand();
//			} else {
//				alertmsg('获取大品类失败', "error");
//			}
//		})
		//	$scope.newProModelid = function() {
		//		$http({
		//			method: 'post',
		//			url: pos + 'product/getProModelid',
		//			params: {
		//				keyParams: getKeyParams('{}', keyParams),
		//				jsonObject: getJsonObject('{}')
		//			}
		//		}).success(function(data, stauts, headers, config) {
		//			if(data.code == "1") {
		//				$scope.proModelid = data.data.proModelid;
		//			} else {
		//				alertmsg('获取商品编号失败', "error");
		//			}
		//		})
		//	}

	//添加修改品牌下拉框
	$scope.brand = function() {
		$http({
			method: 'post',
			url: pos + 'brand/getAddedBrand',
			params: {
				keyParams: getKeyParams('{"isOwnBrand":"ALL"}', keyParams),
				jsonObject: getJsonObject('{"isOwnBrand":"ALL"}')
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.itemsb = data.data.brandList;
				for(var i = 0; i < $scope.itemsb.length; i++) {
					if($scope.itemsb[i].brandJoinType == "3") {
						$scope.itemsb.splice(i, 1);
					}
				}
				$scope.brandIds = $scope.itemsb[0];
				$scope.sizeGroup();
			} else {
				alertmsg('获取品牌失败', "error");
			}
		})
	}
	$scope.brand();
	$scope.colorSystem = function() {
		$http({
			method: 'post',
			url: pos + 'color/getColorSystem',
			params: {
				keyParams: getKeyParams("{\"brandId\":\"" + brandId + "\"}", keyParams),
				jsonObject: getJsonObject("{\"brandId\":\"" + brandId + "\"}")
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
	$scope.sizeGroup = function() {
		$http({
			method: 'post',
			url: pos + 'sizeGroup/getSizeGroup',
			params: {
				keyParams: getKeyParams('{}', keyParams),
				jsonObject: getJsonObject('{}')
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.itemsGroup = data.data.groupList;
				$scope.colorSystem();
			} else {
				alertmsg('获取尺码组失败', "error");
			}
		})
	}

//	$scope.sortIdchange = function() {
//		var sortId = $scope.selected;
//		$http({
//			method: 'post',
//			url: pos + 'sort/selectSort',
//			params: {
//				keyParams: getKeyParams("{\"sortPid\":\"" + sortId + "\"}", keyParams),
//				jsonObject: getJsonObject("{\"sortPid\":\"" + sortId + "\"}")
//			}
//		}).success(function(data, stauts, headers, config) {
//			if(data.code == "1") {
//				$scope.itemsc = data.data.sortList;
//			} else {
//				alertmsg('获取中品类失败', "error");
//			}
//		})
//	}
//	$scope.sortIdCchange = function() {
//		var sortIdC = $scope.selectedc;
//		$http({
//			method: 'post',
//			url: pos + 'sort/selectSort',
//			params: {
//				keyParams: getKeyParams("{\"sortPid\":\"" + sortIdC + "\"}", keyParams),
//				jsonObject: getJsonObject("{\"sortPid\":\"" + sortIdC + "\"}")
//			}
//		}).success(function(data, stauts, headers, config) {
//			if(data.code == "1") {
//				$scope.itemsg = data.data.sortList;
//			} else {
//				alertmsg('获取小品类失败', "error");
//			}
//		})
//	}
	$scope.SizeNumAndName = [];
	$scope.groupIdChange = function() {
		var groupId = $scope.selectedGroup;
		$http({
			method: 'post',
			url: pos + 'size/getAllSize',
			params: {
				keyParams: getKeyParams("{\"groupId\":\"" + groupId + "\"}", keyParams),
				jsonObject: getJsonObject("{\"groupId\":\"" + groupId + "\"}")
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				var sizeGroup = data.data.sizeGroup[0].sizes;
				$scope.sizes = sizeGroup;
				$scope.SizeNumAndName = [];
				for(var i = 0; i < sizeGroup.length; i++) {
					var object = new Object();
					object.sizeId = sizeGroup[i].sizeId;
					object.sizeName = sizeGroup[i].sizeName;
					object.sizeNum = sizeGroup[i].sizeNum;
					$scope.SizeNumAndName.push(object);
				}
			} else {
				alertmsg('获取尺码失败', "error");
			}
		})
	}
	$scope.getSystem = function(obj) {
		$http({
			method: 'post',
			url: pos + 'color/getColorSystem',
			params: {
				keyParams: getKeyParams("{\"brandId\":\"" + brandId + "\"}", keyParams),
				jsonObject: getJsonObject("{\"brandId\":\"" + brandId + "\"}")
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.itemsColorList = data.data.colorList;
//				var colorSystem = $scope.itemsColorList[0].colorSystem;
				jsonObject = "{\"colorSystem\":\"" + colorSystem + "\",\"brandId\":\"" + brandId + "\"}";

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

	$scope.getColBySys = function(obj) {
		var colorSystem = obj.system.colorSystem;

		var jsonObject = new Object();

		jsonObject.colorSystem = colorSystem;

		jsonObject.brandId = brandId;
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

	$scope.saveProduct = function(obj) {
		if(validateForm("addproductForm", "msg") == true) {
			var jsonObjecta = $("#addproductForm").serializeJson();
			var jsonObj = eval('(' + jsonObjecta + ')');
			var products = [];
			jsonObj.proDescription = $scope.ue.getContent();
			for(var i = 0; i < $scope.ColorNumAndName.length; i++) {
				for(var j = 0; j < $scope.SizeNumAndName.length; j++) {
					var prods = new Object();
					prods.proSizeName = $scope.SizeNumAndName[j].sizeName;
					prods.proSize = $scope.SizeNumAndName[j].sizeId;
					prods.proColorId = $scope.ColorNumAndName[i].colorId;
					//					var proSkuPrice = $scope.ColorNumAndName[i].colorId + $scope.SizeNumAndName[j].sizeId + "2";
					//					prods.proSkuPrice = $('#' + proSkuPrice).val();
					var proInnerbc = $scope.ColorNumAndName[i].colorId + $scope.SizeNumAndName[j].sizeId + "1";
					prods.proInnerbc = $('#' + proInnerbc).val();
					var proInterbc = $scope.ColorNumAndName[i].colorId + $scope.SizeNumAndName[j].sizeId;
					prods.proInterbc = $('#' + proInterbc).val();
					products.push(prods);
				}
			}
			jsonObj.products = products;
			jsonObj.imagesList = $scope.imagesList;
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
			jsonObj = JSON.stringify(jsonObj);
			$http({
				method: 'post',
				url: pos + 'product/addProduct',
				params: {
					keyParams: getKeyParams(jsonObj, keyParams),
					jsonObject: getJsonObject(jsonObj)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					alertmsg(data.msg);
					$scope.numA = 0;
					$scope.loadGetStock();
					$("#addproductForm")[0].Reset();
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
	$scope.imagesList = [];
	$scope.uploadMain = function(files, imgId, type) {
		//		var proModelid = $('[name="proModelid"]').val();
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
						if(type == "1") {
							$scope.imagesPath = data.data.imagesPath;
							$("#" + imgId).attr("src", $scope.imagesPath);
							var object = new Object();
							//							object.proModelid = proModelid;
							object.proAttrValue = imgId.substring(0, imgId.length - 1);
							object.url = $scope.imagesPath;
							object.index = imgId.substring(imgId.length - 1, imgId.length);
							for(var i = 0; i < $scope.imagesList.length; i++) {
								if(
									$scope.imagesList[i].proAttrValue == object.proAttrValue &&
									$scope.imagesList[i].index == object.index
								) {
									$scope.imagesList.splice(i, 1);
								}
							}
							$scope.imagesList.push(object);
						} else {
							$scope.imagesPath = data.data.imagesPath;
							$("#" + imgId).attr("src", $scope.imagesPath);
							var object = new Object();
							//							object.proModelid = proModelid;
							object.proAttrValue = imgId.substring(0, imgId.length - 5);
							object.url = $scope.imagesPath;
							object.index = imgId.substring(imgId.length - 1, imgId.length);
							for(var i = 0; i < $scope.imagesList.length; i++) {
								if(
									$scope.imagesList[i].proAttrValue == object.proAttrValue &&
									$scope.imagesList[i].index == object.index
								) {
									$scope.imagesList.splice(i, 1);
								}
							}
							$scope.imagesList.push(object);
						}
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

	$scope.updateProduct = function(obj) {
		if(validateForm("productForm", "msg") == true) {
			var jsonObjecta = $("#productForm").serializeJson();
			var jsonObj = eval('(' + jsonObjecta + ')');
			var products = [];
			jsonObj.oldProModelnum = $scope.oldProModelnum;
			jsonObj.proDescription = $scope.ue.getContent();
			for(var i = 0; i < $scope.ColorNumAndName.length; i++) {
				for(var j = 0; j < $scope.SizeNumAndName.length; j++) {
					var prods = new Object();
					prods.proSizeName = $scope.SizeNumAndName[j].sizeName;
					prods.proSize = $scope.SizeNumAndName[j].sizeId;
					prods.proColorId = $scope.ColorNumAndName[i].colorId;
					var proSkuPrice = $scope.ColorNumAndName[i].colorId + $scope.SizeNumAndName[j].sizeId + "Edit2";
					prods.proSkuPrice = $('#' + proSkuPrice).val();
					var proInnerbc = $scope.ColorNumAndName[i].colorId + $scope.SizeNumAndName[j].sizeId + "Edit1";
					prods.proInnerbc = $('#' + proInnerbc).val();
					var proInterbc = $scope.ColorNumAndName[i].colorId + $scope.SizeNumAndName[j].sizeId + "Edit";
					prods.proInterbc = $('#' + proInterbc).val();
					products.push(prods);
				}
			}
			jsonObj.products = products;
			jsonObj.imagesList = $scope.imagesList;
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
			jsonObj = JSON.stringify(jsonObj);
			$http({
				method: 'post',
				url: pos + 'product/updateProduct',
				params: {
					keyParams: getKeyParams(jsonObj, keyParams),
					jsonObject: getJsonObject(jsonObj)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.numB = 0;
					$scope.ColorNumAndName = [];
					$scope.SizeNumAndName = [];
					$scope.imagesList = [];
					$scope.loadGetStock();
//					$scope.getStock($scope.type);
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
			alertmsg(validateForm("productForm", "msg"), 'error')
		}
	}

	//返回上一页
	$scope.goback = function() {
		$scope.numA = 0;
		$scope.numB = 0;
		$scope.numC = 0;
		$scope.getStock("2");
	};

	//款号
	$scope.toEditProduct = function(proModelnum,obj) {
		$scope.proSortId=obj.proSortId;
		//回显品类
	$scope.getSelSort = function(){
		var jsonObject = {
				orgId:JSON.parse(keyParams).orgId,
				sortId:$scope.proSortId
		}
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'sort/getSortTree',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				for(var i=0;i<data.data.sortTree.length;i++){
					if(data.data.sortTree[i].index == "0"){
						$scope.selectSortId0 = data.data.sortTree[i].selectSortId;
						$scope.item0 = data.data.sortTree[i].sortList;
					}else if(data.data.sortTree[i].index == "1"){
						$scope.selectSortId1 = data.data.sortTree[i].selectSortId;
						$scope.item1 = data.data.sortTree[i].sortList;
					}else if(data.data.sortTree[i].index == "2"){
						$scope.selectSortId2 = data.data.sortTree[i].selectSortId;
						$scope.item2 = data.data.sortTree[i].sortList;
					}else if(data.data.sortTree[i].index == "3"){
						$scope.selectSortId3 = data.data.sortTree[i].selectSortId;
						$scope.item3 = data.data.sortTree[i].sortList;
					}
				}
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
		//Uedit插件的配置代码
		//	图片上传路径的选择
		UE.Editor.prototype._bkGetActionUrl = UE.Editor.prototype.getActionUrl;
		UE.Editor.prototype.getActionUrl = function(action) {
			if(action == 'config') {
				return qineasy + "oms/static/base/ueditor1_4_3_3-utf8-jsp/utf8-jsp/jsp/controller.jsp?action=config";
			} else if(action == 'uploadimage' || action == 'uploadscrawl' || action == 'uploadimage') {
				return pos + 'imageUpload/addProDetailImage';
			} else if(action == 'listimage') {
				return pos + 'product/getProDtailInServerTB';
			} else {
				return this._bkGetActionUrl.call(this, action);
			}
		}
		$scope.ue = UE.getEditor('myEditor', {
			autoHeightEnabled: true,
			autoFloatEnabled: true,
			initialFrameHeight: 200
		});
		//	点击事件获取Uedit里面的代码
		$scope.ue.ready(function() {
			var imageUrl = JSON.parse(keyParams).orgId + "/product/";
			jsonObject = JSON.stringify({
				'imageUrl': imageUrl,
				"proModelid": '',
				"proAttrName": "b"
			});
			$scope.ue.execCommand('serverparam', function(editor) {
				return {
					jsonObject: getJsonObject(jsonObject),
					keyParams: getKeyParams(jsonObject, keyParams)
				};
			});
		});
		$scope.$on('$stateChangeStart', function() {
			$scope.ue.destroy();
		});

		$scope.numB = '1';
		$scope.ColorNumAndName = [];
		$scope.SizeNumAndName = [];
		$scope.imagesList = [];
		$http({
			method: 'post',
			url: pos + 'product/getProductInfo',
			params: {
				keyParams: getKeyParams("{\"proModelnum\":\"" + proModelnum + "\"}", keyParams),
				jsonObject: getJsonObject("{\"proModelnum\":\"" + proModelnum + "\"}")
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.productInfo = data.data;
				$timeout(function() {
					$scope.ue.setContent($scope.productInfo.proDescription);
				}, 500)
					$scope.getSelSort();
				$('[name="designer"]').val($scope.productInfo.designer);
				$('[name="proName"]').val($scope.productInfo.proName);
				$('[name="proSeason"]').val($scope.productInfo.proSeason);
				$('[name="proStage"]').val($scope.productInfo.proStage);
				$('[name="proSeries"]').val($scope.productInfo.proSeries);
				$('[name="proStyle"]').val($scope.productInfo.proStyle);
				$('[name="proUom"]').val($scope.productInfo.proUom);
				$scope.proYear = $scope.productInfo.proYear;
				$('[name="proSex"]').val($scope.productInfo.proSex);
				$('[name="proModelnum"]').val($scope.productInfo.proModelnum);
				$('[name="proModelid"]').val($scope.productInfo.proModelid);
				$('[name="proPrice"]').val($scope.productInfo.proPrice);
				$scope.selectedGroup = $scope.productInfo.groupId;
				$scope.selected = $scope.productInfo.proGrandparentSortId;
				var proGrandparentSortId = $scope.selected;
//				$http({
//					method: 'post',
//					url: pos + 'sort/selectSort',
//					params: {
//						keyParams: getKeyParams("{\"sortPid\":\"" + proGrandparentSortId + "\"}", keyParams),
//						jsonObject: getJsonObject("{\"sortPid\":\"" + proGrandparentSortId + "\"}")
//					}
//				}).success(function(data, stauts, headers, config) {
//					if(data.code == "1") {
//						$scope.itemsc = data.data.sortList;
//					} else {
//						alertmsg('获取小品类失败', "error");
//					}
//				})
//				$scope.selectedc = $scope.productInfo.proParentSortId;
//				var proParentSortId = $scope.selectedc;
//				$http({
//					method: 'post',
//					url: pos + 'sort/selectSort',
//					params: {
//						keyParams: getKeyParams("{\"sortPid\":\"" + proParentSortId + "\"}", keyParams),
//						jsonObject: getJsonObject("{\"sortPid\":\"" + proParentSortId + "\"}")
//					}
//				}).success(function(data, stauts, headers, config) {
//					if(data.code == "1") {
//						$scope.itemsg = data.data.sortList;
//					} else {
//						alertmsg('获取中品类失败', "error");
//					}
//				})
				$scope.selectedg = $scope.productInfo.proSortId;
				$scope.brandId = $scope.productInfo.brandId;
				var productInfos = $scope.productInfo.products;
				$scope.strColor = "";
				$scope.strSize = "";
				for(var i = 0; i < productInfos.length; i++) {
					if($scope.strSize.indexOf(productInfos[i].proSize) < 0) {
						$scope.strSize = $scope.strSize + productInfos[i].proSize + ",";
						var object = new Object();
						object.sizeNum = productInfos[i].sizeNum;
						object.sizeId = productInfos[i].proSize;
						object.sizeName = productInfos[i].proSizeName;
						$scope.SizeNumAndName.push(object);
					}
					if($scope.strColor.indexOf(productInfos[i].proColorId) < 0) {
						$scope.strColor = $scope.strColor + productInfos[i].proColorId + ",";
						var object = new Object();
						object.colorNum = productInfos[i].colorNum;
						object.colorId = productInfos[i].proColorId;
						object.colorName = productInfos[i].colorName;
						$scope.ColorNumAndName.push(object);
					}
				}
				$scope.styleNumber = $scope.productInfo.proModelnum;

				for(var a = 0; a < $scope.productInfo.imagesList.length; a++) {
					var objects = new Object();
					//					objects.proModelid = $scope.productInfo.proModelid;
					objects.proAttrValue = $scope.productInfo.imagesList[a].proAttrValue;
					objects.url = $scope.productInfo.imagesList[a].url;
					objects.index = $scope.productInfo.imagesList[a].index;
					$scope.imagesList.push(objects);
				}
				$scope.oldProModelnum = $scope.productInfo.proModelnum;
				var groupId = $scope.productInfo.groupId;
				$http({
					method: 'post',
					url: pos + 'size/getAllSize',
					params: {
						keyParams: getKeyParams("{\"groupId\":\"" + groupId + "\"}", keyParams),
						jsonObject: getJsonObject("{\"groupId\":\"" + groupId + "\"}")
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == "1") {
						var groupId = $scope.productInfo.groupId;
						var sizeGroup = data.data.sizeGroup[0].sizes;
						$scope.sizes = sizeGroup;
						for(var i = 0; i < $scope.productInfo.imagesList.length; i++) {
							var id = $scope.productInfo.imagesList[i].proAttrValue + "Edit" + $scope.productInfo.imagesList[i].index;
							$("#" + id).attr("src", $scope.productInfo.imagesList[i].url);
						}
						for(var i = 0; i < productInfos.length; i++) {
							var proInterbc = productInfos[i].proColorId + productInfos[i].proSize;
							$('#' + proInterbc + 'Edit').val(productInfos[i].proInterbc);
							//							$('#' + proInterbc + 'Edit2').val(productInfos[i].proSkuPrice);
						}
					} else {
						alertmsg('获取商品尺码组和尺码失败', "error");
					}
				})
			} else {
				alertmsg('获取商品详情失败', "error");
			}
		})
	}

	$scope.cleaned = function(obj) {
		$("#proModelid").val('');
		$scope.queryBrand = "";
		$scope.queryYears = "";
		$scope.seasons = "";
		$scope.grandparentSorts = "";
		$scope.parentSorts = "";
		$scope.sorts = "";
	}

	$scope.choice = function($event) {
		if($($event.target).prop('checked') && $($event.target).attr('num') == 1) {
			$('.productSearch-type1').show();
			$('.productSearch-type2').hide();
		} else if($($event.target).prop('checked') && $($event.target).attr('num') == 2) {
			$('.productSearch-type2').show();
			$('.productSearch-type1').hide();
		}
		$("#proModelid").val('');
		$scope.queryBrand = "";
		$scope.year1 = "";
		$scope.season1 = "";
		$scope.gps = "";
		$scope.ps = "";
		$scope.sort = "";
		$scope.products = "";
		$scope.count = "";
	}

	//查看详情
	$scope.toProductDetail = function(proModelnum,obj) {
			$scope.proSortId=obj.proSortId;
		//回显品类
	$scope.getSelSort = function(){
		var jsonObject = {
				orgId:JSON.parse(keyParams).orgId,
				sortId:$scope.proSortId
		}
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'sort/getSortTree',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				for(var i=0;i<data.data.sortTree.length;i++){
					if(data.data.sortTree[i].index == "0"){
						$scope.selectSortId0 = data.data.sortTree[i].selectSortId;
						$scope.item0 = data.data.sortTree[i].sortList;
					}else if(data.data.sortTree[i].index == "1"){
						$scope.selectSortId1 = data.data.sortTree[i].selectSortId;
						$scope.item1 = data.data.sortTree[i].sortList;
					}else if(data.data.sortTree[i].index == "2"){
						$scope.selectSortId2 = data.data.sortTree[i].selectSortId;
						$scope.item2 = data.data.sortTree[i].sortList;
					}else if(data.data.sortTree[i].index == "3"){
						$scope.selectSortId3 = data.data.sortTree[i].selectSortId;
						$scope.item3 = data.data.sortTree[i].sortList;
					}
				}
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
			$scope.numC = '1';
			$scope.ColorNumAndName = [];
			$scope.SizeNumAndName = [];
			$scope.imagesList = [];
			$http({
				method: 'post',
				url: pos + 'product/getProductInfo',
				params: {
					keyParams: getKeyParams("{\"proModelnum\":\"" + proModelnum + "\"}", keyParams),
					jsonObject: getJsonObject("{\"proModelnum\":\"" + proModelnum + "\"}")
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.productInfo = data.data;
					$scope.grandparentSortNameDetail = $scope.productInfo.grandparentSortName;
					$scope.parentSortNameDetail = $scope.productInfo.parentSortName;
					$scope.sortNameDetail = $scope.productInfo.sortName;
					$scope.brandNameDetail = $scope.productInfo.brandName;
					$scope.designerDetail = $scope.productInfo.designer;
					$scope.proNameDetail = $scope.productInfo.proName;
					$scope.proModelnumDetail = $scope.productInfo.proModelnum;
					$scope.proUomDetail = $scope.productInfo.proUom;
					$scope.proYearDetail = $scope.productInfo.proYear;
					$scope.proSeasonDetail = $scope.productInfo.proSeason;
					$scope.proSexDetail = $scope.productInfo.proSex;
					$scope.proStageDetail = $scope.productInfo.proStage;
					$scope.proSeriesDetail = $scope.productInfo.proSeries;
					$scope.proStyleDetail = $scope.productInfo.proStyle;
					$scope.groupNameDetail = $scope.productInfo.groupName;
					$scope.proPriceDetail = $scope.productInfo.proPrice;

					$scope.proDescriptionDetail = $sce.trustAsHtml($scope.productInfo.proDescription);

					$scope.productDetail = $scope.productInfo.products;

					var productInfos = $scope.productInfo.products;
					$scope.getSelSort();
					$scope.strColor = "";
					for(var i = 0; i < productInfos.length; i++) {
						if($scope.strColor.indexOf(productInfos[i].proColorId) < 0) {
							$scope.strColor = $scope.strColor + productInfos[i].proColorId + ",";
							var object = new Object();
							object.colorNum = productInfos[i].colorNum;
							object.colorId = productInfos[i].proColorId;
							object.colorName = productInfos[i].colorName;
							$scope.ColorNumAndName.push(object);
						}
					}

					for(var a = 0; a < $scope.productInfo.imagesList.length; a++) {
						var objects = new Object();
						//						objects.proModelid = $scope.productInfo.proModelid;
						objects.proAttrValue = $scope.productInfo.imagesList[a].proAttrValue;
						objects.url = $scope.productInfo.imagesList[a].url;
						objects.index = $scope.productInfo.imagesList[a].index;
						$scope.imagesList.push(objects);
					}

					$http({
						method: 'post',
						url: pos + 'brand/getBrand',
						params: {
							keyParams: getKeyParams('{}', keyParams),
							jsonObject: getJsonObject('{}')
						}
					}).success(function(data, stauts, headers, config) {
						for(var i = 0; i < $scope.productInfo.imagesList.length; i++) {
							var id = $scope.productInfo.imagesList[i].proAttrValue + "Detail" + $scope.productInfo.imagesList[i].index;
							$("#" + id).attr("src", $scope.productInfo.imagesList[i].url);
						}
					})

				} else {
					alertmsg('获取商品详情失败', "error");
				}
			})
		}
		//判断该单位是否已经绑定公众号
	var appid = "";
	var componentAppid = "";
	$scope.showQrFlag = false;
	$http({
		method: 'post',
		url: vm + 'publicauthorised/getPublicAuthorisedByOrgId',
		params: {
			jsonObject: getJsonObject('{\"orgId\":\"' + JSON.parse(keyParams).orgId + '\"}')
		}
	}).success(function(data, stauts, headers, config) {
		if(data.code == 1) {
			appid = data.data.appid;
			componentAppid = data.data.componentAppid;
			if(appid != undefined && appid != "" && appid != "null") {
				$scope.showQrFlag = true;
			}
		}
	})
	var selectedIndex = new Array();
	//单选
	$scope.check = function() {
			selectedIndex.length = 0;
			var checkElements = $(".code_checkbox");
			for(var i = 0; i < checkElements.length; i++) {
				if(checkElements[i].checked == true) {
					selectedIndex.push(i);
				}
			}
		}
		//全选
	$scope.selectAll = function() {
			var checkElements = $(".code_checkbox");
			var checkedFlag = $("#selectAll")[0].checked;
			for(var i = 0; i < checkElements.length; i++) {
				checkElements[i].checked = checkedFlag;
			}
			$scope.check();
		}
		//反选
	$scope.reverseSelect = function() {
		var checkElements = $(".code_checkbox");
		$("#selectAll")[0].checked = false;
		for(var i = 0; i < checkElements.length; i++) {
			checkElements[i].checked = !checkElements[i].checked;
		}
		$scope.check();
	}

	$scope.codeSize = 100;
	//尺寸调整器
	function codesize(my, unit, def, max) {
		$(my).noUiSlider({
			range: [50, max],
			start: [def],
			handles: 1,
			orientation: "vertical",
			connect: 'upper',
			slide: function() {
				var val = Math.floor($(this).val());
				$scope.codeSize = val;
				$(".codeSize-titl").text(val + unit);
				$('.code-size').text(val + unit);
			},
			set: function() {
				var val = Math.floor($(this).val());
				$scope.codeSize = val;
				$(".codeSize-titl").text(val + unit);
				$('.code-size').text(val + unit);
				$('.codeSize-dialog').toggle();
			}
		});
		$(my).val(def, true);
	}
	codesize('.slider-minmax1', "px", $scope.codeSize, 1000);
	//下载单二维码图片
	$scope.download = function(obj) {
		downloadCode(obj.pro);
	}

	function downloadCode(pro) {
		var brower = myBrowser();
		var orgId = JSON.parse(keyParams).orgId;
		if(brower == "IE") {
			var str = "appid=" + appid + "&component_appid=" + componentAppid + "&proModelnum=" + pro.proModelid + "&orgId=" + orgId +
				"&brandId=" + pro.brandId + "&brandName=" + pro.brandName;
			var imgURL = "";
			//如果隐藏IFRAME不存在，则添加  
			if(!document.getElementById("IframeReportImg" + pro.proModelid))
				$('<iframe style="display:none;" id="IframeReportImg' + pro.proModelid + '" name="IframeReportImg' + pro.proModelid + '" onload="DoSaveAsIMG(' + pro.proModelid + ');" width="0" height="0" src="about:blank"></iframe>').appendTo("body");
			//加载图片
			$http({
				method: 'post',
				url: pos + 'product/getQrCode',
				params: {
					jsonObject: getJsonObject("{\"qrMsg\":\"" + vip + "easyBuy/productInfo.jsp?" + str + "\",\"size\":\"" + $scope.codeSize + "\",\"rtType\":\"1\"}")
				}
			}).success(function(data, stauts, headers, config) {
				imgURL = pos + data.data.url;
				document.getElementById("IframeReportImg" + pro.proModelid).src = imgURL;
			})
		} else if(brower == "DOWNLOAD") {
			var str = "appid=" + appid + "&component_appid=" + componentAppid + "&proModelnum=" + pro.proModelid + "&orgId=" + orgId +
				"&brandId=" + pro.brandId + "&brandName=" + pro.brandName;
			str = getJsonObject(str);
			var imgURL = pos + "product/getQrCode?jsonObject={\"qrMsg\":\"" +
				vip + "easyBuy/productInfo.jsp?" + str + "\",\"size\":\"" + $scope.codeSize + "\",\"rtType\":\"2\"}";
			var fileName = pro.brandName + "-" + pro.proModelid + ".png";
			var aLink = document.createElement('a');
			var evt = document.createEvent("HTMLEvents");
			evt.initEvent("click", false, false);
			aLink.download = fileName;
			aLink.href = imgURL;
			aLink.dispatchEvent(evt);
		}
	}
	//批量下载图片
	$scope.batchDownload = function() {
			if(selectedIndex.length < 1) {
				alertmsg('请选择至少一件商品', "error");
			}
			for(var i = 0; i < selectedIndex.length; i++)
				downloadCode($scope.products[selectedIndex[i]]);
		}
		//打印二维码
	$scope.doPrint = function(obj) {
		$('#qrCodeImgs')[0].innerHTML = "";
		$scope.obj = obj;
		doPrintCode(obj.pro);
		setTimeout(function() {
			$('#qr' + $scope.obj.pro.proModelid).jqprint();
		}, 500)
	}

	function doPrintCode(pro) {
		var orgId = JSON.parse(keyParams).orgId;
		var str = "appid=" + appid + "&component_appid=" + componentAppid + "&proModelnum=" + pro.proModelid + "&orgId=" + orgId +
			"&brandId=" + pro.brandId + "&brandName=" + pro.brandName;
		//加载图片
		$http({
			method: 'post',
			url: pos + 'product/getQrCode',
			params: {
				jsonObject: getJsonObject("{\"qrMsg\":\"" + vip + "easyBuy/productInfo.jsp?" + str + "\",\"size\":\"" + $scope.codeSize + "\",\"rtType\":\"1\"}")
			}
		}).success(function(data, stauts, headers, config) {
			$('#qrCodeImgs')[0].innerHTML = $('#qrCodeImgs')[0].innerHTML + '<img id="qr' + pro.proModelid + '" src="' + pos + data.data.url + '" width="' + $scope.codeSize + '" height="' + $scope.codeSize + '">'
		})
	}
	$scope.doBatchPrint = function() {
			if(selectedIndex.length < 1) {
				alertmsg('请选择至少一件商品', "error");
			}
			$('#qrCodeImgs')[0].innerHTML = "";
			for(var i = 0; i < selectedIndex.length; i++)
				doPrintCode($scope.products[i]);
			setTimeout(function() {
				for(var i = 0; i < selectedIndex.length; i++)
					$('#qr' + $scope.products[selectedIndex[i]].proModelid).jqprint();
			}, 100 * selectedIndex.length)
		}
		//判断浏览器类型
	function myBrowser() {
		if(!!window.ActiveXObject || "ActiveXObject" in window) {
			return "IE";
		}
		if('download' in document.createElement('a')) {
			return "DOWNLOAD";
		}
		return "OTHER";
	}
	$scope.getStock("2");

	/*获取大品类*/
	$scope.item0 = [];
	$scope.item1 = [];
	$scope.item2 = [];
	$scope.item3 = [];
	$scope.selectSortId0 = "";
	$scope.selectSortId1 = "";
	$scope.selectSortId2 = "";
	$scope.selectSortId3 = "";
	var jsonSortPid = JSON.stringify({
		"orgId": JSON.parse(keyParams).orgId,
		"sortPid": 0
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
	});
	//tyep 1为获取第2级品类 、2为获取第3级品类、 3为获取第4级品类
	$scope.sortIdChange = function(sortId, type) {
		if(sortId != null) {
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
						$scope.selectSortId2 = "";
						$scope.selectSortId3 = "";
					} else if(type == "2") {
						$scope.item2 = data.data.sortList;
						if($scope.item2.length == 0) {
//							$scope.changeProName($scope.item1, $scope.selectSortId1);
						}
						$scope.item3 = [];
						$scope.selectSortId3 = "";
					} else if(type == "3") {
						$scope.item3 = data.data.sortList;
						if($scope.item3.length == 0) {
//							$scope.changeProName($scope.item2, $scope.selectSortId2);
						}
					}
				} else {
					alertmsg('获取品类失败', "error");
				}
			})
		}
	}
//	$scope.changeProName = function(items,selectSortId) {
//			$scope.itemsSort=items;
//			$scope.itemsSelectSortId=selectSortId;
//			if(items != '' && items != undefined) {
//				for(var i = 0; i < items.length; i++) {
//					if(items[i].sortId == selectSortId) {
//						$('[name="proName"]').val(($scope.proYear == undefined ? "" : $scope.proYear) +
//							($scope.proSeason == undefined ? "" : $scope.proSeason) +
//							((($scope.proSex == undefined ? "" : $scope.proSex) == "F") ? "男款" : "女款") +
//							items[i].sortName +
//							($scope.styleNumber == undefined ? "" : $scope.styleNumber));
//					}
//				}
//			}
//		}
});