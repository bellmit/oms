qyApp.controller("HugeTableProductController", function($scope, $http) {
	$scope.defaultObj = {
		"hugeTableProductNotSale": "hide",
		"unionProductManage": "show",
		"hugeTableProductList": "hide",
		"hugeTableProductListA": "hide",
		"hugeProductInfo": "hide",
		"moreFiltAdition": "hide",
		"setSelectedPriceBox": "hide",
		"joinUnionDialogMaskB": "hide"

	};
	$scope.inputDefaultStatus = true;
	$scope.selectedOrAll = false;
	$scope.from = "0";
	$scope.pageSize = "5";
	$scope.currentPage = "0";
	//	在云仓商品列表点击返回云仓联盟列表的按钮
	$scope.gobackA = function() {
			$scope.inputStatus=1;
			$scope.defaultObj.hugeTableProductList = "hide";
			$scope.defaultObj.hugeTableProductListA = "hide";
			$scope.defaultObj.unionProductManage = "show";
			$scope.loadUnionManage();
		}
		//	在云仓下架商品页面点击返回按钮
	$scope.goBackB = function() {
			$scope.gobackBshow = '$scope.defaultObj.hugeTableProductList = "show";$scope.defaultObj.hugeTableProductNotSale = "hide";'
			var jsonObject = {
				"proModelnum": "",
				"cloudId": $scope.cloudId,
				"status": $scope.status,
				"proGrandparentSortId": "",
				"proParentSortId": "",
				"proSortId": "",
				"brandId": $scope.brandId,
				"proYear": "",
				"proSeason": "",
				"nub": $scope.from,
				"size": $scope.pageSize
			};
			jsonObject = angular.toJson(jsonObject);
			$scope.loadUnionProductList(jsonObject, $scope.gobackBshow);
		}
		//	在云仓商品详情页面点击返回按钮(创建者) $scope.userType="1" 创建者 $scope.userType=2 商户/
	$scope.goBackC = function() {
			if($scope.status == "2") {
				//				解决商品详情页面点击返回后无分页效果的情况
				$scope.gobackBshowd = '$scope.defaultObj.hugeTableProductList = "show";$scope.defaultObj.hugeProductInfo = "hide";';
				$scope.loadUnionProductList($scope.loadJsonObject($scope.searchType), $scope.gobackBshowd);
			} else if($scope.status == "1") {
				$scope.gobackBshowe = '$scope.defaultObj.hugeTableProductListA = "show";$scope.defaultObj.hugeProductInfo = "hide";';
				$scope.loadUnionProductList($scope.loadJsonObject($scope.searchType), $scope.gobackBshowe);
			}
		}
		//在云仓商品列表点击精简筛选条件会出现更多筛选条件
	$scope.showFilterAdition = function() {
			if($scope.defaultObj.moreFiltAdition == "hide") {
				$scope.defaultObj.moreFiltAdition = "show";
				$scope.loadSelect();
			} else {
				$scope.defaultObj.moreFiltAdition = "hide";
			}
		}
		//	在云仓商品列表(创建者)点击云仓下架商品
	$scope.showNotSaleProduct = function() {
		var jsonObject = {
			"proModelnum": "",
			"cloudId": $scope.cloudId,
			"proGrandparentSortId": "",
			"proParentSortId": "",
			"proSortId": "",
			"brandId": $scope.brandId,
			"proYear": "",
			"proSeason": "",
			"nub": $scope.from,
			"size": $scope.pageSize
		};
		jsonObject = angular.toJson(jsonObject);
		$scope.showNotSaleList = '$scope.defaultObj.hugeTableProductList = "hide";$scope.defaultObj.hugeTableProductNotSale = "show";';
		$scope.loadNotSaleProduct(jsonObject, $scope.showNotSaleList);
	}
	$scope.loadNotSaleProduct = function(jsonObject, showNotSaleList) {
			$http({
				method: 'post',
				url: pos + 'cloudLimitProduct/getCloudLimitProduct',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.cloudLimitProductLists = data.data.cloudLimitProductList;
					angular.forEach($scope.cloudLimitProductLists, function(ele, index) {
						ele.getCheckedB = false;
					})
					if($scope.cloudLimitProductLists.length == 0) {
						$scope.count = 0;
					} else {
						$scope.count = $scope.cloudLimitProductLists[0].count;
					}
					eval(showNotSaleList);
					$scope.createPagePlugin($scope.count, $scope.pageSize, "3", "notSaleproductListPage");

				} else {
					alertmsg("获取下架商品列表失败", "error");
				}
			})
		}
		//	在云仓商品列表点击查看详情按钮
	$scope.scanUnionProductInfo = function() {
			$scope.defaultObj.hugeTableProductList = "hide";
			$scope.defaultObj.hugeTableProductListA = "hide";
			$scope.defaultObj.hugeProductInfo = "show";
		}
		//	云仓商品管理页面的数据请求
	$scope.loadUnionManage = function() {
		$http({
			method: 'post',
			url: pos + 'cloudUnion/getCloudProduct',
			params: {
				keyParams: getKeyParams('{}', keyParams),
				jsonObject: getJsonObject('{}')
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {

				$scope.userOrgId = (angular.fromJson(localStorage.keyParams)).orgId;
				angular.forEach(data.data.unionList, function(ele) {
					if(ele.orgId == $scope.userOrgId) {
						ele.createOrJoin = "已创建";
						ele.status = "2";
					} else {
						ele.createOrJoin = "已加入";
						ele.status = "1";
					}
				});
				$scope.unionList = data.data.unionList;
			} else {
				alertmsg("获取云仓商品联盟列表失败", "error");
			}
		})
	}
	$scope.loadUnionManage();

	//	在联盟列表页面点击云仓商品管理 "1":商户  "2":创建者
	$scope.manageUnionProduct = function(obj) {
			$scope.eachUnionList = obj.eachUnionList;
			$scope.cloudId = $scope.eachUnionList.cloudId;
			$scope.brandId = $scope.eachUnionList.brandId;
			$scope.status = $scope.eachUnionList.status;
			$scope.cloudName = $scope.eachUnionList.cloudName;
			$scope.brandName = $scope.eachUnionList.brandName;
			$scope.shopName = $scope.eachUnionList.shopName;
			$scope.createOrJoin = $scope.eachUnionList.createOrJoin;
			var jsonObject = {
				"proModelnum": "",
				"cloudId": $scope.cloudId,
				"status": $scope.status,
				"proGrandparentSortId": "",
				"proParentSortId": "",
				"proSortId": "",
				"brandId": $scope.brandId,
				"proYear": "",
				"proSeason": "",
				"nub": $scope.from,
				"size": $scope.pageSize
			};
			jsonObject = angular.toJson(jsonObject);
			if($scope.status == "2") {
				$scope.showLoadUnionProductList = '$scope.defaultObj.hugeTableProductList = "show";$scope.defaultObj.unionProductManage = "hide"'
				$scope.loadUnionProductList(jsonObject, $scope.showLoadUnionProductList);
			} else if($scope.status == "1") {
				$scope.showLoadUnionProductList = '$scope.defaultObj.hugeTableProductListA = "show";$scope.defaultObj.unionProductManage = "hide"'
				$scope.loadUnionProductList(jsonObject, $scope.showLoadUnionProductList);
			}
		}
		//			加载云仓联盟下的云仓商品列表
	$scope.loadUnionProductList = function(jsonObject, showLoadUnionProductList) {
			$http({
				method: 'post',
				url: pos + 'stock/getO2OProByOrgId',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.stockList = data.data.stockList;
					angular.forEach($scope.stockList, function(ele) {
						if(ele.allowPrice == "") {
							ele.allowPriceA = "未设置";
							ele.allowPrice = "未设置";
							ele.concelLimitBtn=false;
						}else{
							ele.concelLimitBtn=true;
						}
						ele.getChecked = false;
					})
					$scope.proDown = data.data.proDown;
					$scope.countd = data.data.count;
					if($scope.status == "2") {
						$scope.createPagePlugin($scope.countd, $scope.pageSize, "2", "productListPageA");
					} else if($scope.status == "1") {
						$scope.createPagePlugin($scope.countd, $scope.pageSize, "1", "productListPage");
					}
					eval(showLoadUnionProductList);
				} else {
					alertmsg("获取云仓商品联盟列表失败", "error");
				}
			})
		}
		//	在云仓商品列表页面点击精简筛选条件去展开筛选条件	
	$scope.loadSelect = function() {
			var jsonObject = {
				"brandId": $scope.brandId
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
					var jsonObject = "{" + "\"proGrandparentSortId\":\"" + $scope.proGrandparentSortId + "\",\"brandId\":\"" + $scope.brandId + "\"}";
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
				var jsonObject = "{" + "\"proGrandparentSortId\":\"" + $scope.proGrandparentSortId + "\",\"proParentSortId\":\"" + $scope.proParentSortId + "\",\"brandId\":\"" + $scope.brandId + "\"}";
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
				"cloudId": $scope.cloudId,
				"status": $scope.status,
				"proGrandparentSortId": $scope.proGrandparentSortId,
				"proParentSortId": $scope.proParentSortId,
				"proSortId": $scope.proSortId,
				"brandId": $scope.brandId,
				"proYear": $scope.proYear,
				"proSeason": $scope.proSeason,
				"nub": $scope.from,
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
				"proModelnum": $scope.proNum,
				"cloudId": $scope.cloudId,
				"status": $scope.status,
				"proGrandparentSortId": "",
				"proParentSortId": "",
				"proSortId": "",
				"brandId": $scope.brandId,
				"proYear": "",
				"proSeason": "",
				"nub": $scope.from,
				"size": $scope.pageSize
			};

		} else {
			var jsonObject = {
				"proModelnum": "",
				"cloudId": $scope.cloudId,
				//"status": 状态(1 已设置云仓库存 2 未设置云仓库存 3 已设置云仓库存未设置O2O最低价)
				"status": $scope.status,
				"proGrandparentSortId": "",
				"proParentSortId": "",
				"proSortId": "",
				"brandId": $scope.brandId,
				"proYear": "",
				"proSeason": "",
				"nub": $scope.currentPage,
				"size": $scope.pageSize
			}
		}
		jsonObject = angular.toJson(jsonObject);
		$scope.reloadJsonObject = jsonObject;
		return $scope.reloadJsonObject;
	}
	$scope.searchProduct = function(type) {
			$scope.searchType = type;
			$scope.loadUnionProductList($scope.loadJsonObject(type), "");
		}
		//	在云仓商品列表页面点击编辑最低限价

		$scope.inputStatus=1;
	$scope.editAllowPrice = function(obj) {
			if($scope.inputStatus==1){
				$scope.trueAllowPrice=obj.eachStockList.allowPrice;
				obj.inputDefaultStatus = false;
				$scope.inputStatus=0;
			}else{
				alertmsg("您有未保存的最低限价","error");
			}
		}
		//	在云仓商品列表页面点击编辑最低限价后点击取消按钮
	$scope.cancelEditAllowPrice = function(obj) {
			obj.inputDefaultStatus = true;
			$scope.inputStatus=1;
			obj.eachStockList.allowPrice=$scope.trueAllowPrice;
			if(obj.eachStockList.allowPrice=='未设置'){
//			$scope.concelLimitBtn=false;
			}else{
//				$scope.concelLimitBtn=true;
			}
		}
		//将最低结算价小于最低限价时，点击确认设置
	$scope.setLimitPrice = function(unitPriceL) {
			$scope.unitPriceL = String(unitPriceL);
			jsonObject = {
				"cloudId": $scope.cloudId,
				"proModelnum": $scope.proModelnum,
				"cloudPrice": $scope.unitPriceL,
				"brandId": $scope.brandId
			}
			jsonObject = angular.toJson(jsonObject);
			$http({
				method: 'post',
				url: pos + 'stock/updateLowPricePro',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.inputStatus=1;
					$scope.defaultObj.joinUnionDialogMaskB = 'hide';
					var jsonObject1 = {
						"allowPrice": $scope.unitPriceL,
						"proModelnum": $scope.proModelnum,
						"brandId": $scope.brandId,
						"cloudId": $scope.cloudId,
						"cloudProductId": $scope.cloudProductId
					};
					jsonObjecta = angular.toJson(jsonObject1);
					$http({
						method: 'post',
						url: pos + 'cloudProduct/editO2OProPrice',
						params: {
							keyParams: getKeyParams(jsonObjecta, keyParams),
							jsonObject: getJsonObject(jsonObjecta)
						}
					}).success(function(data, stauts, headers, config) {
						if(data.code == 1) {
							$scope.inputStatus=1;
							$scope.loadUnionProductList($scope.loadJsonObject($scope.searchType), "$scope.obj.inputDefaultStatus = true;");
//						    $scope.concelLimitBtn=true;
						} else {
							alertmsg("设置最低限价失败", "error");
						}
					})
				} else {
					alertmsg("设置最低限价失败", "error");
				}
			})

		}
		//关闭限价弹框
	$scope.cancelLimitPrice = function() {
			$scope.defaultObj.joinUnionDialogMaskB = 'hide';
		}
		//	在云仓商品列表页面点击编辑最低限价后点击确认按钮(单条)
//		 $scope.concelLimitBtn=false;
	$scope.sureEditAllowPriceOne = function(obj, allowPricea, minPricea) {
		$scope.obj = obj;
		$scope.changeVal = 0;
		//将字符串转换为数字
		allowPricea = parseFloat(allowPricea);
		minPricea = parseFloat(minPricea);
		$scope.objA = obj;
		$scope.proModelnum = obj.eachStockList.proModelnum;
		$scope.cloudProductId = obj.eachStockList.cloudProductId;
		//判断是否为数字类型
		if(!isNaN(allowPricea)) {
			if(allowPricea > minPricea) {
				$scope.defaultObj.joinUnionDialogMaskB = 'show';
				$scope.changeVal = allowPricea;
			} else {
				var jsonObject = {
					"allowPrice": allowPricea,
					"proModelnum": $scope.proModelnum,
					"brandId": $scope.brandId,
					"cloudId": $scope.cloudId,
					"cloudProductId": $scope.cloudProductId
				};
				jsonObject = angular.toJson(jsonObject);
				$http({
					method: 'post',
					url: pos + 'cloudProduct/editO2OProPrice',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == 1) {
						$scope.inputStatus=1;
						$scope.loadUnionProductList($scope.loadJsonObject($scope.searchType), "$scope.obj.inputDefaultStatus = true;");
//					    $scope.concelLimitBtn=true;
					} else {
						alertmsg("设置最低限价失败", "error");
					}
				})
			}
		}
	}
	$scope.discount = "";
	//	点击选中设置最低价后点击批量设置按钮
	$scope.editSelectedAllowPrice = function() {
			$scope.discountA = $scope.discount / 100;
			if($scope.discount != "") {
				if($scope.selectedOrAll == true) {
					$scope.discountA = $scope.discountA + "";
					var jsonObject = {
						"discount": $scope.discountA,
						"proModelnum": "",
						"brandId": $scope.brandId,
						"cloudId": $scope.cloudId,
						"proGrandparentSortId": "",
						"proParentSortId": "",
						"proSortId": "",
						"proYear": "",
						"proSeason": "",
					}
					jsonObject = angular.toJson(jsonObject);
					$http({
						method: 'post',
						url: pos + 'cloudProduct/addMeetCriterionPrice',
						params: {
							keyParams: getKeyParams(jsonObject, keyParams),
							jsonObject: getJsonObject(jsonObject)
						}
					}).success(function(data, stauts, headers, config) {
						if(data.code == 1) {
							$scope.selectedAllData = false;
							$scope.selectedPromodelNumArr = [];
							$scope.cloudProductIdArr = [];
							$scope.objaArr = [];
							$scope.loadUnionProductList($scope.loadJsonObject($scope.searchType), "$scope.defaultObj.setSelectedPriceBox='hide'");
						} else {
							alertmsg("设置最低限价失败", "error");
						}
					});
				} else if($scope.selectedOrAll == false) {
					angular.forEach($scope.proList, function(ele) {
						ele.allowPrice=((ele.allowPrice+0)*($scope.discountA+0)).toFixed(2)+""
					})
					var jsonObject = {
						"proList": $scope.proList,
						"cloudProductIds": $scope.cloudProductIds
					}
					jsonObject = angular.toJson(jsonObject);
					$http({
						method: 'post',
						url: pos + 'cloudProduct/addO2OProPrice',
						params: {
							keyParams: getKeyParams(jsonObject, keyParams),
							jsonObject: getJsonObject(jsonObject)
						}
					}).success(function(data, stauts, headers, config) {
						if(data.code == 1) {
							$scope.selectedPromodelNumArr = [];
							$scope.selectedAllowPriceArr = [];
							$scope.selectedcloudProductIdArr = [];
							$scope.loadUnionProductList($scope.loadJsonObject($scope.searchType), "$scope.defaultObj.setSelectedPriceBox='hide'");
						} else {
							alertmsg("设置最低限价失败", "error");
						}
					})
				}
			} else {
				alertmsg("折扣设置不能为空，请输入折扣", "error");
			}
		}
	
		//	在云仓商品列表页面点击编辑最低限价后点击下架按钮按钮(单条)
		//	点击单选框选择店铺"one 单条" "all 选中当前页"
	$scope.selectedPromodelNumArr = [];
	$scope.cloudProductIdArr = [];
	$scope.objaArr = [];
	$scope.proListlength = 0;
	$scope.chooseUnionProduct = function(obja, obj, type) {
		$scope.selectedAllData = false;
		if(type == "one") {
			$scope.eachStockList = obja.eachStockList;
			$scope.unJoinedgetchecked = false;
			$scope.selectedPromodelNum = obja.eachStockList.proModelnum;
			$scope.selectedcloudProductId = obja.eachStockList.cloudProductId;
			$scope.selectedPromodelNumIndex = $scope.selectedPromodelNumArr.indexOf($scope.selectedPromodelNum);
			$scope.selectedcloudProductIdIndex = $scope.cloudProductIdArr.indexOf($scope.selectedcloudProductId);
			if($scope.selectedPromodelNumIndex == -1) {
				$scope.selectedPromodelNumArr.push($scope.selectedPromodelNum);
				$scope.objaArr.push($scope.eachStockList);
			} else if($scope.selectedPromodelNumIndex >= 0) {
				$scope.selectedPromodelNumArr.splice($scope.selectedPromodelNumIndex, 1);
				$scope.objaArr.splice($scope.selectedPromodelNumIndex, 1);
			}
			if($scope.selectedcloudProductIdIndex == -1) {
				$scope.cloudProductIdArr.push($scope.selectedcloudProductId);
			} else if($scope.selectedPromodelNumIndex >= 0) {
				$scope.cloudProductIdArr.splice($scope.selectedcloudProductIdIndex, 1);
			}
		} else if(type == "thisPage") {
			//判断单选框的状态,"true 选中" "false 未选中"
			$scope.thisPagePromodelNum = [];
			$scope.keepPagePromodelNum = [];
			$scope.thisPagecloudProductId = [];
			$scope.keepPagecloudProductId = [];
			$scope.thisObjaArr = [];
			$scope.keepObjaArr = [];
			angular.forEach(obj, function(ele) {
				$scope.thisPagePromodelNum.push(ele.proModelnum);
				$scope.thisObjaArr.push(ele);
				$scope.thisPagecloudProductId.push(ele.cloudProductId)
			})
			if($scope.unJoinedgetchecked == false) {
				//		当为false的时候,把这一页的数据清空
				$scope.stockList.forEach(function(ele) {
					ele.getChecked = false;
				})
				angular.forEach($scope.selectedPromodelNumArr, function(ele, index) {
					if($scope.thisPagePromodelNum.indexOf(ele) == -1) {
						$scope.keepPagePromodelNum.push(ele);
					}
				});
				angular.forEach($scope.objaArr, function(ele, index) {
					if($scope.thisPagePromodelNum.indexOf(ele.proModelnum) == -1) {
						$scope.keepObjaArr.push(ele);
					}
				});
				angular.forEach($scope.cloudProductIdArr, function(ele, index) {
					if($scope.thisPagecloudProductId.indexOf(ele) == -1) {
						$scope.keepPagecloudProductId.push(ele);
					}
				});
				$scope.selectedPromodelNumArr = $scope.keepPagePromodelNum;
				$scope.objaArr = $scope.keepObjaArr;
				$scope.cloudProductIdArr = $scope.keepPagecloudProductId;
			} else {
				$scope.stockList.forEach(function(ele) {
					ele.getChecked = true;
				})
				angular.forEach($scope.thisPagePromodelNum, function(ele, index) {
					$scope.selectedPromodelNumArr.push(ele);
				});
				angular.forEach($scope.thisObjaArr, function(ele, index) {
					$scope.objaArr.push(ele);
				});
				angular.forEach($scope.thisPagecloudProductId, function(ele, index) {
					$scope.cloudProductIdArr.push(ele);
				});
			}
		}
		var unique = {};
		$scope.selectedPromodelNumArr.forEach(function(gpa) {
			unique[JSON.stringify(gpa)] = gpa;
		});
		$scope.selectedPromodelNumArr = Object.keys(unique).map(function(u) {
			return JSON.parse(u);
		});
		var unique = {};
		$scope.objaArr.forEach(function(gpa) {
			unique[JSON.stringify(gpa)] = gpa;
		});
		$scope.objaArr = Object.keys(unique).map(function(u) {
			return JSON.parse(u);
		});
		var unique = {};
		$scope.cloudProductIdArr.forEach(function(gpa) {
			unique[JSON.stringify(gpa)] = gpa;
		});
		$scope.cloudProductIdArr = Object.keys(unique).map(function(u) {
			return JSON.parse(u);
		});
		$scope.proList = [];
		angular.forEach($scope.objaArr, function(ele, index) {
			$scope.proListObj = {};
			$scope.proListObj.proModelnum = ele.proModelnum;
			$scope.proListObj.cloudId = $scope.cloudId;
			$scope.proListObj.brandId = $scope.brandId;
			$scope.proListObj.allowPrice = ele.proPrice;
			$scope.proList.push($scope.proListObj);
		})
		var unique = {};
		$scope.proList.forEach(function(gpa) {
			unique[JSON.stringify(gpa)] = gpa;
		});
		$scope.proList = Object.keys(unique).map(function(u) {
			return JSON.parse(u);
		});
		$scope.proListlength = $scope.proList.length
		$scope.cloudProductIds = $scope.cloudProductIdArr.join(",")
	}
	$scope.setProductNoteSell = function(obj, type) {
		if(type == "one") {
			$scope.proModelnum = obj.eachStockList.proModelnum;
			var jsonObject = {
				"proList": [{
					"cloudId": $scope.cloudId,
					"proModelnum": $scope.proModelnum
				}]
			};
			jsonObject = angular.toJson(jsonObject);
			$scope.setProductNoteSellCommit(jsonObject);
		} else {
			if($scope.proList != undefined) {
				if($scope.proList.length > 0) {
					var jsonObject = {
						"proList": $scope.proList
					};
					jsonObject = angular.toJson(jsonObject);
					$scope.setProductNoteSellCommit(jsonObject);
				} else {
					alertmsg("请选择您要下架的商品", "error")
				}
			} else {
				alertmsg("请选择您要下架的商品", "error")
			}
		}
	}
	$scope.setProductNoteSellCommit = function(jsonObject) {
			$http({
				method: 'post',
				url: pos + 'cloudLimitProduct/addCloudLimitProduct',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.selectedPromodelNumArr = [];
					$scope.cloudProductIdArr = [];
					$scope.objaArr = [];
					$scope.proList = [];
					$scope.loadUnionProductList($scope.loadJsonObject($scope.searchType), "");
				} else {
					alertmsg("下架O2O商品失败", "error");
				}
			})
		}
		//	在云仓商品列表点击单选框(单选与全选)
		//	点击单选框,多选框选中下架商品设置上架
		//	点击单选框选择店铺"one 单条" "all 选中当前页"
	$scope.selectedPromodelNumArrNotSale = [];
	$scope.chooseNotSaleProduct = function(obja, obj, type) {
			if(type == "one") {
				$scope.notSaleGetchecked = false;
				$scope.selectedPromodelNum = obja.cloudLimitProductList.cloudLimitId;
				$scope.selectedPromodelNumIndex = $scope.selectedPromodelNumArrNotSale.indexOf($scope.selectedPromodelNum);
				if($scope.selectedPromodelNumIndex == -1) {
					$scope.selectedPromodelNumArrNotSale.push($scope.selectedPromodelNum);
				} else if($scope.selectedPromodelNumIndex >= 0) {
					$scope.selectedPromodelNumArrNotSale.splice($scope.selectedPromodelNumIndex, 1);
				}
				//				orgIdArr
			} else if(type == "thisPage") {
				//判断单选框的状态,"true 选中" "false 未选中"
				$scope.thisPagePromodelNum = [];
				$scope.keepPagePromodelNum = [];
				angular.forEach(obj, function(ele) {
					$scope.thisPagePromodelNum.push(ele.cloudLimitId);
				})
				if($scope.notSaleGetchecked == false) {
					//		当为false的时候,把这一页的数据清空
					$scope.cloudLimitProductLists.forEach(function(ele) {
						ele.getCheckedB = false;
					})
					angular.forEach($scope.selectedPromodelNumArrNotSale, function(ele, index) {
						if($scope.thisPagePromodelNum.indexOf(ele) == -1) {
							$scope.keepPagePromodelNum.push(ele);
						}
					});
					$scope.selectedPromodelNumArrNotSale = $scope.keepPagePromodelNum;
				} else {
					$scope.cloudLimitProductLists.forEach(function(ele) {
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
			$scope.cloudLimitIds = $scope.selectedPromodelNumArrNotSale.join(",");
		}
		//	在下架商品页面点击上架商品（type:"one",单选  else  选中商品）
	$scope.putAwayProduct = function(obj, type) {
		if(type == 'one') {
			$scope.cloudLimitId = obj.cloudLimitProductList.cloudLimitId;
			var jsonObject = "{\"cloudLimitIds\":\"" + $scope.cloudLimitId + "\"}";
			$scope.reloadNotSaleProduct(jsonObject)
		} else {
			if($scope.cloudLimitIds != "" && $scope.cloudLimitIds != undefined) {
				var jsonObject = {
					"cloudLimitIds": $scope.cloudLimitIds
				};
				jsonObject = angular.toJson(jsonObject);
				$scope.reloadNotSaleProduct(jsonObject);
			} else {
				alertmsg("请选择您要上架的商品", "error");

			}
		}

	}
	$scope.reloadNotSaleProduct = function(jsonObject) {
			$http({
				method: 'post',
				url: pos + 'cloudLimitProduct/deleteCloudLimitProduct',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.selectedPromodelNumArrNotSale = [];
					$scope.loadNotSaleProduct($scope.loadNotSaleJsonObject($scope.searchNotSaleType), "")
				} else {
					alertmsg("设置最低限价失败", "error");
				}
			})
		}
		//	在云仓下架商品列表页面点击查询按钮
		//  点击查询按钮/
	$scope.loadNotSaleJsonObject = function(type) {
		if(type == "filter") {
			var jsonObject = {
				"proModelnum": "",
				"cloudId": $scope.cloudId,
				"status": $scope.status,
				"proGrandparentSortId": $scope.proGrandparentSortId,
				"proParentSortId": $scope.proParentSortId,
				"proSortId": $scope.proSortId,
				"brandId": $scope.brandId,
				"proYear": $scope.proYear,
				"proSeason": $scope.proSeason,
				"nub": $scope.from,
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
				"proModelnum": $scope.proNumNotSale,
				"cloudId": $scope.cloudId,
				"status": $scope.status,
				"proGrandparentSortId": "",
				"proParentSortId": "",
				"proSortId": "",
				"brandId": $scope.brandId,
				"proYear": "",
				"proSeason": "",
				"stock": "",
				"cloudStock": "",
				"nub": $scope.from,
				"size": $scope.pageSize
			};

		} else {
			var jsonObject = {
				"proModelnum": "",
				"cloudId": $scope.cloudId,
				//"status": 状态(1 已设置云仓库存 2 未设置云仓库存 3 已设置云仓库存未设置O2O最低价)
				"status": "",
				"proGrandparentSortId": "",
				"proParentSortId": "",
				"proSortId": "",
				"brandId": $scope.brandId,
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
	$scope.proNumNotSale = "";
	$scope.searchNotSaleProduct = function(type, proNumNotSale) {
		$scope.searchNotSaleType = type;
		$scope.proNumNotSale = proNumNotSale;
		$scope.loadNotSaleProduct($scope.loadNotSaleJsonObject(type), "");
	}
	$scope.viewDetilA = function(obj) {
		$scope.proModelnumD = obj.eachStockList.proModelnum;
		$scope.proPicD = obj.eachStockList.proPic;
		$scope.proNameD = obj.eachStockList.proName;
		$scope.brandNameD = obj.eachStockList.brandName;
		$scope.grandparentSortNameD = obj.eachStockList.grandparentSortName;
		$scope.parentSortNameD = obj.eachStockList.parentSortName;
		$scope.sortNameD = obj.eachStockList.sortName;
		$scope.proSeasonD = obj.eachStockList.proSeason;
		$scope.proPriceD = obj.eachStockList.proPrice;
		$scope.proYearD = obj.eachStockList.proYear;
		$scope.allowPriceD = obj.eachStockList.allowPrice;
		$scope.totalNumD = obj.eachStockList.totalNum;
		$scope.attendedShopNumD = obj.eachStockList.attendedShopNum;
		var jsonObject = {
			"proModelnum": $scope.proModelnumD,
			"shopName": "",
			"cloudId": $scope.cloudId,
			"status": $scope.status,
			"nub": $scope.from,
			"size": $scope.pageSize
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'stock/getcloudShop',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.defaultObj.hugeTableProductList = "hide";
				$scope.defaultObj.hugeTableProductListA = "hide";
				$scope.defaultObj.hugeProductInfo = "show";
				$scope.storeStockList = data.data.stockList;
				if($scope.storeStockList.length == 0) {
					$scope.countA = 0;
				} else {
					$scope.countA = $scope.storeStockList[0].count;
				}
				$scope.createPagePlugin($scope.countA, $scope.pageSize, "4", "productInfoPaging");
			} else {
				alertmsg("获取列表失败", "error");
			}
		})
	}
	$scope.viewDetil = function(obj) {
			$scope.proModelnumD = obj.unionPro.proModelnum;
			$scope.proPicD = obj.unionPro.proPic;
			$scope.proNameD = obj.unionPro.proName;
			$scope.brandNameD = obj.unionPro.brandName;
			$scope.grandparentSortNameD = obj.unionPro.grandparentSortName;
			$scope.parentSortNameD = obj.unionPro.parentSortName;
			$scope.sortNameD = obj.unionPro.sortName;
			$scope.proSeasonD = obj.unionPro.proSeason;
			$scope.proPriceD = obj.unionPro.proPrice;
			$scope.proYearD = obj.unionPro.proYear;
			$scope.allowPriceD = obj.unionPro.allowPrice;
			$scope.totalNumD = obj.unionPro.totalNum;
			$scope.attendedShopNumD = obj.unionPro.attendedShopNum;
			var jsonObject = {
				"proModelnum": $scope.proModelnumD,
				"shopName": "",
				"cloudId": $scope.cloudId,
				"status": $scope.status,
				"nub": $scope.from,
				"size": $scope.pageSize
			};
			jsonObject = angular.toJson(jsonObject);
			$http({
				method: 'post',
				url: pos + 'stock/getcloudShop',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.defaultObj.hugeTableProductList = "hide";
					$scope.defaultObj.hugeTableProductListA = "hide";
					$scope.defaultObj.hugeProductInfo = "show";
					$scope.storeStockList = data.data.stockList;
					if($scope.storeStockList.length == 0) {
						$scope.countB = 0;
					} else {
						$scope.countB = $scope.storeStockList[0].count;
					}
					$scope.createPagePlugin($scope.countB, $scope.pageSize, "5", "productInfoPaging");

				} else {
					alertmsg("获取列表失败", "error");
				}
			})
		}
		//	在云仓商品列表点击全选所有页
	$scope.selectedAllUnionProduct = function() {
			if($scope.selectedAllData == true) {
				$scope.selectedOrAll = true;
			} else {
				$scope.selectedOrAll = false;
			}
		}
		//	在云仓商品列表页面点击"选中设置最低限价"
	$scope.toSetAllowPrice = function() {
		if($scope.selectedPromodelNumArr.length > 0) {
			if($scope.defaultObj.setSelectedPriceBox == "show") {
				$scope.defaultObj.setSelectedPriceBox = "hide";
			} else {
				$scope.defaultObj.setSelectedPriceBox = "show";
			}
			$scope.discount = "";
		} else {
			alertmsg("请先选择商品再进行设置", "error")
		}
	}
	$scope.cancelToSetAllowPrice = function() {
			$scope.defaultObj.setSelectedPriceBox = "hide";
			$scope.discount = "";
		}
		//	分页代码
		//	分页
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
			} else if(type == "2") {
				$scope.pageA(from - 1, pageSize);
			} else if(type == "3") {
				$scope.pageB(from - 1, pageSize);
			} else if(type == "4") {
				$scope.pageC(from - 1, pageSize);
			} else if(type == "5") {
				$scope.pageD(from - 1, pageSize);
			}
		}
	};
	$scope.page = function(from, pageSize) {
		var jsonObject = {
			"proModelnum": "",
			"cloudId": $scope.cloudId,
			"status": $scope.status,
			"proGrandparentSortId": "",
			"proParentSortId": "",
			"proSortId": "",
			"brandId": $scope.brandId,
			"proYear": "",
			"proSeason": "",
			"nub": from,
			"size": pageSize
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'stock/getO2OProByOrgId',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.stockList = data.data.stockList;
			} else {
				alertmsg("获取店铺列表失败", "error");
			}
		})
	}
	$scope.pageA = function(from, pageSize) {
		$scope.currentPage = from;
		var jsonObject = {
			"proModelnum": "",
			"cloudId": $scope.cloudId,
			"status": $scope.status,
			"proGrandparentSortId": "",
			"proParentSortId": "",
			"proSortId": "",
			"brandId": $scope.brandId,
			"proYear": "",
			"proSeason": "",
			"nub": from,
			"size": pageSize
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'stock/getO2OProByOrgId',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				angular.forEach(data.data.stockList, function(ele, index) {
					if($scope.selectedPromodelNumArr.indexOf(ele.proModelnum) != -1) {
						ele.getChecked = true;
					} else {
						ele.getChecked = false;
					}
				});
				$scope.stockList = data.data.stockList;
			} else {
				alertmsg("获取店铺列表失败", "error");
			}
		})
	}
	$scope.pageB = function(from, pageSize) {
		$scope.currentPage = from;
		var jsonObject = {
			"proModelnum": "",
			"cloudId": $scope.cloudId,
			"proGrandparentSortId": "",
			"proParentSortId": "",
			"proSortId": "",
			"brandId": $scope.brandId,
			"proYear": "",
			"proSeason": "",
			"nub": from,
			"size": pageSize
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'cloudLimitProduct/getCloudLimitProduct',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				angular.forEach(data.data.cloudLimitProductList, function(ele, index) {
					if($scope.selectedPromodelNumArrNotSale.indexOf(ele.cloudLimitId) != -1) {
						ele.getCheckedB = true;
					} else {
						ele.getCheckedB = false;
					}
				})
				$scope.cloudLimitProductLists = data.data.cloudLimitProductList;
			} else {
				alertmsg("获取店铺列表失败", "error");
			}
		})
	}
	$scope.pageC = function(from, pageSize) {
		var jsonObject = {
			"proModelnum": $scope.proModelnum,
			"shopName": $scope.shopName,
			"cloudId": $scope.cloudId,
			"status": $scope.status,
			"nub": from,
			"size": pageSize
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'stock/getcloudShop',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.storeStockList = data.data.stockList;
				//				angular.forEach($scope.cloudLimitProductLists, function(ele, index) {
				//					ele.getCheckedB = false;
				//				})
			} else {
				alertmsg("获取店铺列表失败", "error");
			}
		})
	}
	$scope.pageD = function(from, pageSize) {
			var jsonObject = {
				"proModelnum": $scope.proModelnum,
				"shopName": $scope.shopName,
				"cloudId": $scope.cloudId,
				"status": $scope.status,
				"nub": from,
				"size": pageSize
			};
			jsonObject = angular.toJson(jsonObject);
			$http({
				method: 'post',
				url: pos + 'stock/getcloudShop',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.storeStockList = data.data.stockList;
				} else {
					alertmsg("获取店铺列表失败", "error");
				}
			})
		}
		//品牌云仓联盟查询商品
	$scope.searchPro = function(type) {
			if(type == 1) {
				var jsonObject = {
					"proModelnum": $scope.proModelNum,
					"cloudId": $scope.cloudId,
					"status": $scope.status,
					"proGrandparentSortId": "",
					"proParentSortId": "",
					"proSortId": "",
					"brandId": $scope.brandId,
					"proYear": "",
					"proSeason": "",
					"nub": $scope.from,
					"size": $scope.pageSize
				};
			} else {
				var jsonObject = {
					"proModelnum": "",
					"cloudId": $scope.cloudId,
					"status": $scope.status,
					"proGrandparentSortId": $scope.proGrandparentSortId,
					"proParentSortId": $scope.proParentSortId,
					"proSortId": $scope.proSortId,
					"brandId": $scope.brandId,
					"proYear": $scope.proYear,
					"proSeason": $scope.proSeason,
					"nub": $scope.from,
					"size": $scope.pageSize
				};
			}
			jsonObject = angular.toJson(jsonObject);
			if($scope.status == "2") {
				$scope.loadUnionProductList(jsonObject, "");
			} else if($scope.status == "1") {
				$scope.loadUnionProductList(jsonObject, "");
			}
		}
		//	在查看详情页面点击查询按钮
	$scope.memberName = "";
	$scope.searchJoinedMember = function() {
		var jsonObject = {
			"proModelnum": $scope.proModelnumD,
			"shopName": $scope.memberName,
			"cloudId": $scope.cloudId,
			"status": $scope.status,
			"nub": $scope.from,
			"size": $scope.pageSize
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'stock/getcloudShop',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.storeStockList = data.data.stockList;
				if($scope.storeStockList.length == 0) {
					$scope.countB = 0;
				} else {
					$scope.countB = $scope.storeStockList[0].count;
				}
				$scope.createPagePlugin($scope.countB, $scope.pageSize, "5", "productInfoPaging");

			} else {
				alertmsg("获取列表失败", "error");
			}
		})
	}

	//	点击取消最低限价按钮
	$scope.cancelAllowPrice = function(obj) {
		$scope.cloudProductId = obj.eachStockList.cloudProductId;
		jsonObject = {
			"cloudProductId": $scope.cloudProductId
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'cloudProduct/deleteO2OProPrice',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.loadUnionProductList($scope.loadJsonObject($scope.searchType), "");
			    $scope.concelLimitBtn=false;
			} else {
				alertmsg("取消限价失败", "error");
			}
		})

	}

	//	利用localstorage里面的productManage来判断用户云仓商品管理的入口
	$scope.showProductList = function() {
		$scope.defaultObj.hugeTableProductList = "show";
		$scope.defaultObj.unionProductManage = "hide";
		$scope.LocalStorageObject=angular.fromJson(localStorage.productManage);
		$scope.cloudName=$scope.LocalStorageObject.cloudName;
		$scope.brandName=$scope.LocalStorageObject.brandName;
		$scope.shopName=$scope.LocalStorageObject.shopName;
		$scope.createOrJoin="已创建";
		jsonObject = localStorage.productManage;
		$http({
			method: 'post',
			url: pos + 'stock/getO2OProByOrgId',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.stockList = data.data.stockList;
				angular.forEach($scope.stockList, function(ele) {
					if(ele.allowPrice == "") {
						ele.allowPriceA = "未设置";
						ele.allowPrice = "未设置";
					}
					ele.getChecked = false;
				})
				$scope.proDown = data.data.proDown;
				$scope.countd = data.data.count;
				if($scope.status == "2") {
					$scope.createPagePlugin($scope.countd, $scope.pageSize, "2", "productListPageA");
				} 
				
				localStorage.removeItem("productManage");
			} else {
				alertmsg("获取云仓商品联盟列表失败", "error");
			}
		})

	}
	if(localStorage.productManage) {
		$scope.showProductList();
	}

});