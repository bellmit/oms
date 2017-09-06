qyApp.controller('storeUnionProductController', ['$scope', '$http', '$compile', 'Upload', function($scope, $http, $compile, Upload) {
	$scope.defaultObj = {
		"storeUnionProductList": "show",
		"storeBrandUnionProductList": "hide",
		"moreFiltAdition": "hide",
		"setBatchFrame": "hide",
		"showSetPrice": "hide",
		"showSetStock": "hide",
		"showSetpriceTogether": "hide",
		"showSetStockTogether": "hide",
		"joinUnionDialogMaskA": "hide",

	};
	//在云仓商品列表点击返回云仓联盟列表的按钮
	$scope.gobackA = function() {
			$scope.defaultObj.storeBrandUnionProductList = "hide";
			$scope.defaultObj.storeUnionProductList = "show";
			$scope.getStoreJoinUnion();
		}
		//点击精简筛选条件
	$scope.showFilterAdition = function() {
			if($scope.defaultObj.moreFiltAdition == "show") {
				$scope.defaultObj.moreFiltAdition = "hide";
			} else {
				$scope.defaultObj.moreFiltAdition = "show";
				$scope.loadSelect();
			}
		}
		//批量设置云仓库存弹框
	$scope.selectedAllPage = false;
	$scope.setBatch = function(type) {
			if($scope.selectedAllPage == false) {
				if($scope.selectedPromodelNumArrNotSale.length > 0) {
					if($scope.defaultObj.setBatchFrame == "hide") {
						$scope.defaultObj.setBatchFrame = "show";
					} else {
						$scope.defaultObj.setBatchFrame = "hide";
					}
					if(type == '1') {
						$scope.showStock = true;
						$scope.setTpye = "stock"
					} else {
						$scope.showStock = false;
						$scope.setTpye = "price"
					}
				} else {
					alertmsg("请选择商品再进行设置", "error");
				}
			} else {
				if($scope.defaultObj.setBatchFrame == "hide") {
					$scope.defaultObj.setBatchFrame = "show";
				} else {
					$scope.defaultObj.setBatchFrame = "hide";
				}
				if(type == '1') {
					$scope.showStock = true;
					$scope.setTpye = "stock"
				} else {
					$scope.showStock = false;
					$scope.setTpye = "price"
				}
			}
		}

//取消批量弹框
$scope.cancelBatch = function() {
	$scope.defaultObj.setBatchFrame = "hide";
}
//显示编辑结算价弹框和库存弹框
$scope.getEditeFrame = function(type, obj) {
	$scope.allowPrice = obj.storeStockList.allowPrice;
	$scope.proPicw = obj.storeStockList.proPic;
	$scope.proNamew = obj.storeStockList.proName;
	$scope.sortNamew = obj.storeStockList.sortName;
	$scope.brandNamew = obj.storeStockList.brandName;
	$scope.proYearw = obj.storeStockList.proYear;
	$scope.proSeasonw = obj.storeStockList.proSeason;
	$scope.proPricew = obj.storeStockList.proPrice;
	$scope.thisProModelNum = obj.storeStockList.proModelnum;
	$scope.usedKeyParams = angular.fromJson(localStorage.keyParams);
	$scope.orgId = $scope.usedKeyParams.orgId;
	$scope.cloudStock = obj.storeStockList.cloudStock;
	$scope.stockw = obj.storeStockList.stock;
	if(type == '1') {
		var jsonObject = {
			"proModelnum": $scope.thisProModelNum,
			"brandId": $scope.brandIdD
		};
		jsonObject = angular.toJson(jsonObject);
		$scope.showDialog = '$scope.defaultObj.showSetPrice = "show";'
		$scope.editUnionPrice(jsonObject, $scope.showDialog)
	} else {
		var jsonObject = {
			"proModelnum": $scope.thisProModelNum,
			"brandId": $scope.brandIdD
		};
		jsonObject = angular.toJson(jsonObject);
		$scope.showDialog = '$scope.defaultObj.showSetStock = "show";';
		$scope.editUnionStock(jsonObject, $scope.showDialog)
	}
}
//关闭弹框
$scope.closeForm = function(type) {
	if(type == '1') {
		$scope.defaultObj.showSetPrice = "hide";
	} else if(type == '2') {
		$scope.defaultObj.showSetStock = "hide";
	} else if(type == '3') {
		$scope.defaultObj.joinUnionDialogMaskA = "hide";
	} else if(type == '4') {
		$scope.defaultObj.joinUnionDialogMaskB = "hide";
	}
}
//显示 统一设置结算价和库存的弹框
$scope.setTogether = function() {
	if($scope.isShowBtn == true) {
		$scope.isShowBtn = false;
	} else {
		$scope.isShowBtn = true;
	}
}
//取消统一设置云仓库存弹框
$scope.cancelUnify = function() {
	$scope.isShowBtn = false;
}
//
//统一设置云仓库存弹框
$scope.setUnifystock = function(target) {
	if(target>100){
		alertmsg("输入值不能大于100","error");
	}else{
	$scope.setCloudStock = [];
	angular.forEach($scope.skuListA, function(ele) {
		$scope.stockA = ele.stock;
		ele.cloudStock = parseInt(target * $scope.stockA / 100);
		$scope.setCloudStock.push(ele);
	});
	$scope.setCloudStock.forEach(function(ele) {
		$("input[name=" + ele.proNum + "]").val(ele.cloudStock);
	});
	$scope.isShowBtn = false;
 }
}
$("#setPrice").centera();
$("#setPricea").centera();
$scope.sureSetpriceTogether = function(target) {
	$scope.setCloudPrice = [];
	angular.forEach($scope.skuList, function(ele) {
		ele.cloudPrice = target;
		$scope.setCloudPrice.push(ele);
	});
	$scope.setCloudPrice.forEach(function(ele) {
		$("input[name=" + ele.proNum + "]").val(ele.cloudPrice);
	});
	$scope.isShowBtn = false;
}
$scope.loadStoreUnionProductList = function(jsonObject, showStoreUnionProduct) {
	$http({
		method: 'post',
		url: pos + 'stock/getShopO2OProByOrgId',
		params: {
			keyParams: getKeyParams(jsonObject, keyParams),
			jsonObject: getJsonObject(jsonObject)
		}
	}).success(function(data, stauts, headers, config) {
		if(data.code == 1) {
			data.data.stockList.forEach(function(ele) {
				ele.getCheckedB = false;
			})
			$scope.storeStockLists = data.data.stockList;
			$scope.storeStockCount = data.data.count;
			$scope.createPagePlugin($scope.storeStockCount, $scope.pageSize, "1", "productListPageA")
			eval(showStoreUnionProduct);
		} else {
			alertmsg("获取下架商品列表失败", "error");
		}
	})
}
$scope.currentPage = "0";
$scope.pageSize = "5";
//若云仓商品均没有设置库存,点击我知道了
//	$scope.skipSetStock = function() {
//		var jsonObject = {
//			"proModelnum": "",
//			"cloudId": $scope.cloudIdD,
//			//			"status": 状态(1 已设置云仓库存 2 未设置云仓库存 3 已设置云仓库存未设置O2O最低价)
//			"status": "",
//			"proGrandparentSortId": "",
//			"proParentSortId": "",
//			"proSortId": "",
//			"brandId": $scope.brandIdD,
//			"proYear": "",
//			"proSeason": "",
//			"stock": "",
//			"cloudStock": "",
//			"nub": $scope.currentPage,
//			"size": $scope.pageSize
//		}
//		jsonObject = angular.toJson(jsonObject);
//		$scope.showStoreUnionProduct = '$scope.defaultObj.storeUnionProductList="hide";$scope.defaultObj.joinUnionDialogMaskA="hide";$scope.defaultObj.storeBrandUnionProductList="show";';
//		$scope.loadStoreUnionProductList(jsonObject, $scope.showStoreUnionProduct);
//	}
//点击编辑结算价的弹窗
$scope.editUnionPrice = function(jsonObject, showDialog) {
	$http({
		method: 'post',
		url: pos + 'stock/getStockPrice',
		params: {
			keyParams: getKeyParams(jsonObject, keyParams),
			jsonObject: getJsonObject(jsonObject)
		}
	}).success(function(data, stauts, headers, config) {
		if(data.code == 1) {
			$scope.skuList = data.data.stockList;
			eval(showDialog);
			$scope.defaultPrice = "";
			//对取过来的数组进行组合成方便使用的数组
			var productList = data.data.stockList;
			$scope.sumInvtNum = 0;
			//去除数组中相同的元素生成的尺码数组
			var size = [],
				hash = {};
			for(var i = 0; i < productList.length; i++) {
				if(!hash[productList[i].sizeName]) {
					size.push(productList[i].sizeName);
					hash[productList[i].sizeName] = true;
				}
			}
			$scope.sizes = size;
			//去除数组中相同的元素生成颜色数组
			var color = [],
				hash = {};
			for(var i = 0; i < productList.length; i++) {
				if(!hash[productList[i].colorName]) {
					color.push(productList[i].colorName);
					hash[productList[i].colorName] = true;
				}
			}
			$scope.colors = color;
			var phash = {};
			map = {};
			for(var i = 0; i < productList.length; i++) {
				phash[productList[i].colorName + "," + productList[i].sizeName] = true;
				map[productList[i].colorName + "," + productList[i].sizeName] = {
					"proNum": productList[i].proNum,
					"stkOnHand": productList[i].stkOnHand
				};
			}
			$(".productStkNum").remove();
			var html = [];
			$scope.sumStkNum = 0;
			for(var i = 0; i < color.length; i++) {
				html.push("<tr class='productStkNum'>");
				html.push("<th scope='row'>" + color[i] + "</th>");
				for(var j = 0; j < size.length; j++) {
					if(phash[color[i] + "," + size[j]]) {
						var proNum = map[color[i] + "," + size[j]].proNum;
						$scope.proNum = proNum;
						var stkOnHand = map[color[i] + "," + size[j]].stkOnHand;
						html.push("<td><input ng-disabled='obj.scan' ng-value='defaultPrice' class='invtNum' type='text' name='" + proNum + "' ng-blur='editStkNum($event)' validatetype='require:!盘点数不能为空;regex:0|(^[1-9]([0-9]+$)?)!盘点数不能输入负数' />");
						$scope.sumStkNum = $scope.sumStkNum + parseInt(stkOnHand);
					} else {
						html.push("<td><input type='text' value='-' readonly='readonly' disabled='disabled'/></td>");
					}
				}
				html.push("</tr>");
			}
			var template = angular.element(html.join(""));
			var newHtml = $compile(template)($scope);
			angular.element($("#addInputRowA").before(newHtml));
			angular.forEach($scope.skuList, function(ele, index) {
				$("input[name=" + ele.proNum + "]").val(ele.cloudPrice);
			})
			
		}
	})
}
//	点击编辑云仓库存的按钮
$scope.editUnionStock = function(jsonObject, showDialog) {
	$http({
		method: 'post',
		url: pos + 'warehstk/getCloudStock',
		params: {
			keyParams: getKeyParams(jsonObject, keyParams),
			jsonObject: getJsonObject(jsonObject)
		}
	}).success(function(data, stauts, headers, config) {
		if(data.code == 1) {
			$scope.skuListA = data.data.warehStkList;
			eval(showDialog);
			$scope.defaultPrice = "";
         //	对取过来的数组进行组合成方便使用的数组
			var productList = data.data.warehStkList;
			$scope.totolRealStock = 0;
			angular.forEach(productList, function(ele) {
				if(ele.stock == '') {
					ele.stock = "0";
				}
				$scope.totolRealStock += parseInt(ele.stock);
			})
			$scope.sumInvtNum = 0;
			var size = [],
				hash = {};
			for(var i = 0; i < productList.length; i++) {
				if(!hash[productList[i].sizeName]) {
					size.push(productList[i].sizeName);
					hash[productList[i].sizeName] = true;
				}
			}
			$scope.sizes = size;
			//去除数组中相同的元素生成颜色数组
			var color = [],
				hash = {};
			for(var i = 0; i < productList.length; i++) {
				if(!hash[productList[i].colorName]) {
					color.push(productList[i].colorName);
					hash[productList[i].colorName] = true;
				}
			}
			$scope.colors = color;
			var phash = {};
			map = {};
			for(var i = 0; i < productList.length; i++) {
				phash[productList[i].colorName + "," + productList[i].sizeName] = true;
				map[productList[i].colorName + "," + productList[i].sizeName] = {
					"proNum": productList[i].proNum,
					"stkOnHand": productList[i].stock
				};
			}
			$(".productStkNum").remove();
			$("#totolStock").remove();
			var html = [];
			$scope.sumStkNum = 0;
			for(var i = 0; i < color.length; i++) {
				html.push("<tr class='productStkNum'>");
				html.push("<th scope='row'>" + color[i] + "</th>");
				for(var j = 0; j < size.length; j++) {
					if(phash[color[i] + "," + size[j]]) {
						var proNum = map[color[i] + "," + size[j]].proNum;
						var stkOnHand = map[color[i] + "," + size[j]].stkOnHand;
						$scope.proNum = proNum;
						var stkOnHand = map[color[i] + "," + size[j]].stkOnHand;
						html.push("<td><input ng-disabled='obj.scan' ng-value='defaultPrice' ng-blur='countCloudStock()'  class='invtNum' type='text' name='" + proNum + "' validatetype='require:!盘点数不能为空;regex:0|(^[1-9]([0-9]+$)?)!盘点数不能输入负数'/>/" + stkOnHand + "</td>");
						$scope.sumStkNum = $scope.sumStkNum + parseInt(stkOnHand);
					} else {
						html.push("<td><input type='text' value='-' readonly='readonly' disabled='disabled'/></td>");
					}
				}
			}
			angular.element($(".addInputRowA").append("<tr id='totolStock'><td>共计</td><td colspan=" + size.length + ">" + "<span id='cloudStocka'>" + $scope.cloudStock + "</span>/" + $scope.stockw + "<span style='margin-left:10px'>(云仓库存/实际库存)</span></td></tr>"));
			var template = angular.element(html.join(""));
			var newHtml = $compile(template)($scope);
			angular.element($("#addInputRowB").before(newHtml));
			angular.forEach($scope.skuListA, function(ele, index) {
				$("input[name=" + ele.proNum + "]").val(ele.cloudStock);
			})
		} 
	})
}
//计算云仓库存总和
$scope.countCloudStock = function() {
	$scope.data = $("#setPriceForm").serializeJson();
	$scope.countStock = JSON.parse($scope.data);
	$scope.totalStockC = 0;
	angular.forEach($scope.countStock, function(ele) {
		$scope.totalStockC += Number(ele);
		$scope.cloudStock = $scope.totalStockC;
	})
	$("#cloudStocka").html($scope.cloudStock);
}
//	 在设置商品O2O结算价的弹窗处点击确认按钮
$scope.sureSetPrice = function() {
	$scope.stockListArr = [];
	$scope.editPriceObj = $("#setPriceFormA").serializeJson();
	$scope.editPriceObj = angular.fromJson($scope.editPriceObj);
	$scope.usedKeyParams = angular.fromJson(localStorage.keyParams);
	$scope.orgId = $scope.usedKeyParams.orgId;
	$scope.stockListArr = $scope.skuList;
	for(var i in $scope.editPriceObj) {
		for(j in $scope.stockListArr) {
			if(i == $scope.stockListArr[j].proNum) {
				$scope.stockListArr[j].cloudPrice = $scope.editPriceObj[i];
			}
		}
	}
	var type;
	angular.forEach($scope.stockListArr, function(ele) {
		if(ele.cloudPrice == "") {
			ele.cloudPrice = $scope.proPricew;
		}
		ele.shopId = $scope.orgId;
		ele.proModelnum = $scope.thisProModelNum;
		ele.brandId = $scope.brandIdD;
		ele.proSize = ele.sizeId;
		delete ele.sizeId;
		ele.proColorId = ele.colorId;
		delete ele.colorId;
		delete ele.colorName;
		delete ele.sizeName;
		
		if(Number(ele.cloudPrice) < Number($scope.allowPrice)){
			type = 1;
		}
	})
	if(type == 1){
		alertmsg("价格不能低于最低限价", "error");
	}else{
		var jsonObject = {
			"stockList": $scope.stockListArr
		}
		jsonObject = angular.toJson(jsonObject);
		$scope.commitO2Oprice(jsonObject, "");
	}
	
}
//	 在设置商品O2O结算价的弹窗处点击确认按钮后的AjAX数据请求
$scope.commitO2Oprice = function(jsonObject, showDislog) {
	$http({
		method: "post",
		url: pos + "stock/updateStockPrice",
		params: {
			keyParams: getKeyParams(jsonObject, keyParams),
			jsonObject: getJsonObject(jsonObject)
		}
	}).success(function(data) {
		if(data.code == '1') {
			$scope.loadStoreUnionProductList($scope.loadJsonObject($scope.searchType), "$scope.defaultObj.showSetPrice='hide';");
		} else {
			alertmsg("设置O2O商品价格失败", "error");
		}
	})
}
$scope.selectedPromodelNumArrNotSale = [];
$scope.selectedPromodelNumArrlength = 0;
$scope.chooseProduct = function(obja, obj, type) {
	$scope.selectedAllPage =false;
	if(type == "one") {
		$scope.notSaleGetchecked = false;
		$scope.selectedPromodelNum = obja.storeStockList.proModelnum;
		$scope.selectedPromodelNumIndex = $scope.selectedPromodelNumArrNotSale.indexOf($scope.selectedPromodelNum);
		if($scope.selectedPromodelNumIndex == -1) {
			$scope.selectedPromodelNumArrNotSale.push($scope.selectedPromodelNum);
		} else if($scope.selectedPromodelNumIndex >= 0) {
			$scope.selectedPromodelNumArrNotSale.splice($scope.selectedPromodelNumIndex, 1);
		}
	} else if(type == "thisPage") {
		//判断单选框的状态,"true 选中" "false 未选中"
		$scope.thisPagePromodelNum = [];
		$scope.keepPagePromodelNum = [];
		angular.forEach(obj, function(ele) {
			$scope.thisPagePromodelNum.push(ele.proModelnum);
		})
		if($scope.notSaleGetchecked == false) {
			//当为false的时候,把这一页的数据清空
			$scope.storeStockLists.forEach(function(ele) {
				ele.getCheckedB = false;
			})
			angular.forEach($scope.selectedPromodelNumArrNotSale, function(ele, index) {
				if($scope.thisPagePromodelNum.indexOf(ele) == -1) {
					$scope.keepPagePromodelNum.push(ele);
				}
			});
			$scope.selectedPromodelNumArrNotSale = $scope.keepPagePromodelNum;
		} else {
			$scope.storeStockLists.forEach(function(ele) {
				ele.getCheckedB = true;
			})
			angular.forEach($scope.thisPagePromodelNum, function(ele, index) {
				$scope.selectedPromodelNumArrNotSale.push(ele);
			});
		}
	}
	var unique = {};
	$scope.selectedPromodelNumArrNotSale.forEach(function(gpa) {
		unique[JSON.stringify(gpa)] = gpa;
	});
	$scope.selectedPromodelNumArrNotSale = Object.keys(unique).map(function(u) {
		return JSON.parse(u);
	});
	$scope.selectedPromodelNumArr = $scope.selectedPromodelNumArrNotSale;
	$scope.selectedPromodelNumArrlength = $scope.selectedPromodelNumArr.length;
	$scope.selectedPromodelNumStr = $scope.selectedPromodelNumArrNotSale.join(",");
}
//	$scope.setNum="";
 $scope.setPriceOrStock = function() {
 	        if($scope.setNum>100){
 	        	alertmsg("输入值不能大于100","error");
 	        }else{
			$scope.setNumB = $scope.setNum / 100;
			$scope.setNumB = angular.toJson($scope.setNumB);
			if($scope.setTpye == "stock") {
				if($scope.selectedAllPage == false) {
					var jsonObject = {
						"proModelnum": $scope.selectedPromodelNumStr,
						"brandId": $scope.brandIdD,
						"multiple": $scope.setNumB
					}
					jsonObject = angular.toJson(jsonObject);
					$http({
						method: "post",
						url: pos + "stock/addCloudStock",
						params: {
							keyParams: getKeyParams(jsonObject, keyParams),
							jsonObject: getJsonObject(jsonObject)
						}
					}).success(function(data) {
						if(data.code == '1') {
							$scope.selectedPromodelNumArrNotSale = [];
							$scope.stockListArrw = [];
							$scope.selectedPromodelNumStr = "";
							$scope.selectedPromodelNumArr = [];
							$scope.loadStoreUnionProductList($scope.loadJsonObject($scope.searchType), "$scope.defaultObj.setBatchFrame='hide';$scope.notSaleGetchecked = false;$scope.setNum=''");
						} else {
							alertmsg("获取列表失败", "error");
						}
					})
				} else if($scope.selectedAllPage == true) {
					//					全选所有页设置云仓库存
					var jsonObject1 = JSON.parse($scope.loadJsonObject($scope.searchType));
					var jsonObject2 = {
						"cloudId": $scope.cloudIdD,
						"multiple": $scope.setNumB
					}
					jsonObject = $.extend(jsonObject1, jsonObject2);
					delete jsonObject.size;
					delete jsonObject.nub;
					jsonObject = JSON.stringify(jsonObject);
					$http({
						method: "post",
						url: pos + "stock/addCloudAllStock",
						params: {
							keyParams: getKeyParams(jsonObject, keyParams),
							jsonObject: getJsonObject(jsonObject)
						}
					}).success(function(data) {
						if(data.code == '1') {
							$scope.selectedAllPage = false;
							$scope.selectedPromodelNumArrNotSale = [];
							$scope.stockListArrw = [];
							$scope.selectedPromodelNumStr = "";
							$scope.selectedPromodelNumArr = [];
							$scope.loadStoreUnionProductList($scope.loadJsonObject($scope.searchType), "$scope.defaultObj.setBatchFrame='hide';$scope.notSaleGetchecked = false;$scope.setNum=''");
						} else {
							alertmsg("设置全部商品云仓库存失败", "error");
						}

					})
				}
			} else if($scope.setTpye == "price") {
//				选择商品设置020结算价
					$scope.setNumA = $scope.setNum / 100;
					$scope.setNumA = angular.toJson($scope.setNumA);
				if($scope.selectedAllPage == false) {
					$scope.stockListArrw = [];
					angular.forEach($scope.selectedPromodelNumArr, function(ele) {
						$scope.stockListObjw = {};
						$scope.stockListObjw.proModelnum = ele;
						$scope.stockListObjw.brandId = $scope.brandIdD;
						$scope.stockListObjw.cloudId = $scope.cloudIdD;
						$scope.stockListObjw.discount = $scope.setNumA;
						$scope.stockListArrw.push($scope.stockListObjw);
					})
					var jsonObject = {
						"stockList": $scope.stockListArrw
					}
					jsonObject = angular.toJson(jsonObject);
					$http({
						method: "post",
						url: pos + "stock/updateO2Oprice",
						params: {
							keyParams: getKeyParams(jsonObject, keyParams),
							jsonObject: getJsonObject(jsonObject)
						}
					}).success(function(data) {
						if(data.code == '1') {
							$scope.setNum="";
							$scope.stockListArrw = [];
							$scope.selectedPromodelNumStr = "";
							$scope.selectedPromodelNumArr = [];
							$scope.selectedPromodelNumArrNotSale = [];
							$scope.loadStoreUnionProductList($scope.loadJsonObject($scope.searchType), "$scope.defaultObj.setBatchFrame='hide';$scope.notSaleGetchecked = false;");
						} else {
							alertmsg("获取列表失败", "error");
						}
					})
				}else{
//					点击全选所有页批量设置020结算价
					var jsonObject1 = JSON.parse($scope.loadJsonObject($scope.searchType));
					var jsonObject2 = {
						"cloudId": $scope.cloudIdD,
						"discount": $scope.setNumB
					}
					jsonObject = $.extend(jsonObject1, jsonObject2);
					delete jsonObject.size;
					delete jsonObject.nub;
					jsonObject = JSON.stringify(jsonObject);
					$http({
						method: "post",
						url: pos + "stock/updateAllO2Oprice",
						params: {
							keyParams: getKeyParams(jsonObject, keyParams),
							jsonObject: getJsonObject(jsonObject)
						}
					}).success(function(data) {
						if(data.code == '1') {
							$scope.selectedAllPage = false;
							$scope.setNum="";
							$scope.stockListArrw = [];
							$scope.selectedPromodelNumStr = "";
							$scope.selectedPromodelNumArr = [];
							$scope.selectedPromodelNumArrNotSale = [];
							$scope.loadStoreUnionProductList($scope.loadJsonObject($scope.searchType), "$scope.defaultObj.setBatchFrame='hide';$scope.notSaleGetchecked = false;");
						} else {
							alertmsg("设置全部商品O2O结算价失败", "error");
						}
					})
				}
			}
		}
    }
//点击云仓商品管理
$scope.getUnionPro = function(obj) {
	$scope.cloudProD = obj.union.cloudPro;
	$scope.cloudIdD = obj.union.cloudId;
	$scope.cloudNameD = obj.union.cloudName;
	$scope.brandNameD = obj.union.brandName;
	$scope.brandIdD = obj.union.brandId;
	$scope.shopNameD = obj.union.shopName;
	var jsonObject = {
		"proModelnum": "",
		"cloudId": $scope.cloudIdD,
		//"status": 状态(1 已设置云仓库存 2 未设置云仓库存 3 已设置云仓库存未设置O2O最低价)
		"status": "",
		"proGrandparentSortId": "",
		"proParentSortId": "",
		"proSortId": "",
		"brandId": $scope.brandIdD,
		"proYear": "",
		"proSeason": "",
		"stock": "",
		"cloudStock": "",
		"nub": $scope.currentPage,
		"size": $scope.pageSize
	}
	jsonObject = angular.toJson(jsonObject);
	$scope.showStoreUnionProduct = '$scope.defaultObj.storeBrandUnionProductList="show";$scope.defaultObj.storeUnionProductList="hide";';
	$scope.loadStoreUnionProductList(jsonObject, $scope.showStoreUnionProduct);
}
$scope.getStoreJoinUnion = function() {
	$http({
		method: "post",
		url: pos + "cloudUnion/getShopCloudProduct",
		params: {
			keyParams: getKeyParams('{}', keyParams),
			jsonObject: getJsonObject('{}')
		}
	}).success(function(data) {
		if(data.code == '1') {
			$scope.unionList = data.data.unionList;
		} else {
			alertmsg("获取列表失败", "error");
		}
	})
}
$scope.getStoreJoinUnion();
//保存  遍历编辑的库存 
$scope.saveEditStock = function() {
	$scope.stockObj = $("#setPriceForm").serializeJson();
	$scope.stockObj = angular.fromJson($scope.stockObj);
	angular.forEach($scope.skuListA, function(ele, index) {
		for(var i in $scope.stockObj) {
			if(ele.proNum == i) {
				ele.stkOnHand = $scope.stockObj[i];
			}
		}
	});
	$scope.stocks = [];
	$scope.usedKeyParams = angular.fromJson(localStorage.keyParams);
	$scope.orgId = $scope.usedKeyParams.orgId;
	angular.forEach($scope.skuListA, function(ele) {
		$scope.proNum = ele.proNum;
		$scope.proColorId = ele.colorId;
		$scope.proSize = ele.proSize;
		$scope.cloudPrice = "";
		if(ele.stkOnHand == "") {
			ele.stkOnHand = "0";
		}
		$scope.stockNum = ele.stkOnHand;
		$scope.shopId = $scope.shopIdD;
		$scope.proModelnum = $scope.thisProModelNum;
		$scope.brandId = $scope.brandIdD;
		jsonObject = {
			proNum: $scope.proNum,
			proColorId: $scope.proColorId,
			proSize: $scope.proSize,
			cloudPrice: $scope.cloudPrice,
			stockNum: $scope.stockNum,
			shopId: $scope.shopId,
			proModelnum: $scope.proModelnum,
			brandId: $scope.brandId,
			shopId: $scope.orgId
		}
		$scope.stocks.push(jsonObject);
	});
	jsonObject = {
		"stocks": $scope.stocks
	}
	//$scope.skuListA
	var type;
	for (var i = 0; i < $scope.skuListA.length; i++) {
		for (var j = 0; j < $scope.stocks.length; j++) {
			if($scope.skuListA[i].proNum == $scope.stocks[j].proNum){
				if(Number($scope.skuListA[i].stock) < Number($scope.stocks[j].stockNum)){
					type = 1;
				}
			}
		}
	}
	if(type == 1){
		alertmsg("云仓库存不能大于实际库存", "error");
	}else{
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: "post",
			url: pos + "stock/addOrUpdateStock",
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == '1') {
				$scope.loadStoreUnionProductList($scope.loadJsonObject($scope.searchType), "$scope.defaultObj.showSetStock='hide';");
			} else {
				alertmsg("获取列表失败", "error");
			}
		})
	}
	
}
//	分页代码
$scope.createPagePlugin = function(total, pageSize, type, pageId) {
	$("#" + pageId + "").empty();
	paging = pagePlugin.createPaging({
		renderTo: pageId,
		total: total,
		pageSize: pageSize
	});
	paging.goPage = function(from, to) {
		if(type == "1") {
			$scope.page(from - 1, pageSize);
		}
	}
};
$scope.page = function(from, pageSize) {
	$scope.currentPage = from;
	var jsonObject = {
		"proModelnum": "",
		"cloudId": $scope.cloudIdD,
		"status": "",
		"proGrandparentSortId": "",
		"proParentSortId": "",
		"proSortId": "",
		"brandId": $scope.brandIdD,
		"proYear": "",
		"proSeason": "",
		"stock": "",
		"cloudStock": "",
		"nub": from,
		"size": pageSize
	}
	jsonObject = angular.toJson(jsonObject);

	$http({
		method: 'post',
		url: pos + 'stock/getShopO2OProByOrgId',
		params: {
			keyParams: getKeyParams(jsonObject, keyParams),
			jsonObject: getJsonObject(jsonObject)
		}
	}).success(function(data, stauts, headers, config) {
		if(data.code == 1) {
			angular.forEach(data.data.stockList, function(ele, index) {
				if($scope.selectedPromodelNumArrNotSale.indexOf(ele.proModelnum) != -1) {
					ele.getCheckedB = true;
				} else {
					ele.getCheckedB = false;
				}
			});
			$scope.storeStockLists = data.data.stockList;
		} else {
			alertmsg("获取店铺列表失败", "error");
		}
	})
}
//加载筛选条件中的下拉框
//	在云仓商品列表页面点击精简筛选条件去展开筛选条件	
$scope.loadSelect = function() {
	var jsonObject = {
		"brandId": $scope.brandIdD
	}
	jsonObject = JSON.stringify(jsonObject);
	//查询年份
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
		//查询季节
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
		//查询大品类
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
		//查询中品类
	$scope.getParentSort = function() {
			var jsonObject = "{" + "\"proGrandparentSortId\":\"" + $scope.proGrandparentSortId + "\",\"brandId\":\"" + $scope.brandIdD + "\"}";
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
	$scope.getSort = function() {
		var jsonObject = "{" + "\"proGrandparentSortId\":\"" + $scope.proGrandparentSortId + "\",\"proParentSortId\":\"" + $scope.proParentSortId + "\",\"brandId\":\"" + $scope.brandIdD + "\"}";
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
}

//  点击查询按钮
$scope.loadJsonObject = function(type) {
	if(type == "filter") {
		var jsonObject = {
			"proModelnum": "",
			"cloudId": $scope.cloudIdD,
			"status": $scope.status,
			"proGrandparentSortId": $scope.proGrandparentSortId,
			"proParentSortId": $scope.proParentSortId,
			"proSortId": $scope.proSortId,
			"brandId": $scope.brandIdD,
			"proYear": $scope.proYear,
			"proSeason": $scope.proSeason,
			"stock": $scope.stock,
			"cloudStock": $scope.cloudStock,
			"nub": $scope.currentPage,
			"size": $scope.pageSize
		};
		if(jsonObject.proYear == undefined) {
			jsonObject.proYear = "";
		}
		if(jsonObject.proSeason == undefined) {
			jsonObject.proSeason = "";
		}
		if(jsonObject.proGrandparentSortId == undefined) {
			jsonObject.proGrandparentSortId = "";
		}
		if(jsonObject.proParentSortId == undefined) {
			jsonObject.proParentSortId = "";
		}
		if(jsonObject.proSortId == undefined) {
			jsonObject.proSortId = "";
		}
	} else if(type == "proNum") {
		if($scope.proNum == undefined) {
			$scope.proNum = "";
		}
		var jsonObject = {
			"proModelnum": $scope.proNumA,
			"cloudId": $scope.cloudIdD,
			"status": $scope.status,
			"proGrandparentSortId": "",
			"proParentSortId": "",
			"proSortId": "",
			"brandId": $scope.brandIdD,
			"proYear": "",
			"proSeason": "",
			"stock": "",
			"cloudStock": "",
			"nub": $scope.currentPage,
			"size": $scope.pageSize
		};

	} else {
		var jsonObject = {
			"proModelnum": "",
			"cloudId": $scope.cloudIdD,
			//"status": 状态(1 已设置云仓库存 2 未设置云仓库存 3 已设置云仓库存未设置O2O最低价)
			"status": "",
			"proGrandparentSortId": "",
			"proParentSortId": "",
			"proSortId": "",
			"brandId": $scope.brandIdD,
			"proYear": "",
			"proSeason": "",
			"stock": "",
			"cloudStock": "",
			"nub": $scope.currentPage,
			"size": $scope.pageSize
		}
	}
	jsonObject = angular.toJson(jsonObject);
	$scope.reloadJsonObject = jsonObject;
	return $scope.reloadJsonObject;
}
$scope.stock = "";
$scope.cloudStock = "";
$scope.searchProduct = function(type) {
	$scope.searchType = type;
	$scope.loadStoreUnionProductList($scope.loadJsonObject(type), "");
}



$scope.showProductList=function(){
	$scope.defaultObj.storeBrandUnionProductList="show";
	$scope.defaultObj.storeUnionProductList="hide";
	$scope.productInfo=JSON.parse(localStorage.shopProductManage);
	$scope.cloudNameD=$scope.productInfo.cloudName;
	$scope.brandNameD=$scope.productInfo.brandName;
	$scope.shopNameD=$scope.productInfo.shopName;
	$scope.shopNameD=$scope.productInfo.shopName;
	var jsonObject = {
			"proModelnum": "",
			"cloudId": $scope.productInfo.cloudId,
			//"status": 状态(1 已设置云仓库存 2 未设置云仓库存 3 已设置云仓库存未设置O2O最低价)
			"status": "",
			"proGrandparentSortId": "",
			"proParentSortId": "",
			"proSortId": "",
			"brandId": $scope.productInfo.brandId,
			"proYear": "",
			"proSeason": "",
			"stock": "",
			"cloudStock": "",
			"nub": "0",
			"size": $scope.pageSize
		}
	jsonObject=angular.toJson(jsonObject);
	$http({
		method: 'post',
		url: pos + 'stock/getShopO2OProByOrgId',
		params: {
			keyParams: getKeyParams(jsonObject, keyParams),
			jsonObject: getJsonObject(jsonObject)
		}
	}).success(function(data, stauts, headers, config) {
		if(data.code == 1) {
			data.data.stockList.forEach(function(ele) {
				ele.getCheckedB = false;
			})
			$scope.storeStockLists = data.data.stockList;
			$scope.storeStockCount = data.data.count;
			$scope.createPagePlugin($scope.storeStockCount, $scope.pageSize, "1", "productListPageA")
			localStorage.removeItem("shopProductManage");
		} else {
			alertmsg("获取下架商品列表失败", "error");
		}
	})
}
if(localStorage.shopProductManage){
	$scope.showProductList();
}




}]);