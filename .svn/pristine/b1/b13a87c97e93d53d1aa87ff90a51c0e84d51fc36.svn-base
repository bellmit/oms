qyApp.controller('editDiscountCardController', ['$scope', '$http', '$compile', 'Upload', '$sce', '$state', '$stateParams', function($scope, $http, $compile, Upload, $sce, $state, $stateParams, $routeParams) {
	$scope.userInfo=eval('(' +localStorage.userInfo+ ')');
	$scope.$on('$viewContentLoaded', function() {
		var model = $stateParams.uiParams;
		//优惠券类型 1金额 0折扣
		$scope.discount1=model.discount;
		if($scope.couponModality == '1') {
			$scope.showDiscountType = '1';
		} else {
			$scope.showDiscountType = '0';
		}
		//判断优惠金额类型 1 固定 0 随机
		if($stateParams.uiParams.amountList.length == '1') {
			$scope.amount1 = '1';
			$scope.isLimitshow = '1';
			$scope.fixedLimit1 = $stateParams.uiParams.amountList[0];
		} else {
			$scope.amount1 = '0';
			$scope.randomMIn1 = $stateParams.uiParams.amountList[0];
			$scope.randomMax1 = $stateParams.uiParams.amountList[1];
			$scope.isLimitshow = '0';
		}
		//满额条件
		if($scope.fullAmount == "0.00") {
			$scope.notFullAmount = true;
		} else {
			$scope.fullAmounta = $scope.fullAmount;
		}
		//发放数量
		if($scope.couponCount != '-1') {
			$scope.couponCounta = $scope.couponCount;
		} else {
			$scope.notCouponCount = true;
		}
		//适用对象
		if($stateParams.uiParams.memberScope == 'allPeople' || $stateParams.uiParams.memberScope == 'allMember') {
			$scope.memberScope1 = $scope.memberScope;
		} else {
			$scope.memberScope1 = '1';
			var jsonObject = "{\"orgId\":\"" + $scope.orgId + "\"}";
			$http({
				method: 'post',
				url: pos + 'membergrade/getMemberGrades',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.memberGradeList = data.data.memberGradeList;
					$scope.showMemberScope = true;
				} else {
					alertmsg(data.msg, "error");
				}
			});

		}
		//适用商品
		$scope.selectSaveProArr = [];
		$scope.productScopeArr1 = "";
		if($scope.productScope != 'AllProduct') {
			$scope.productScope1 = '1';
			$scope.productScopeArr1 = $scope.productScope;

			//显示限定商品
			if($scope.productScopeList.length != '') {

				//				for (var i = 0; i < $scope.productScopeList.length - 1; i++) {
				//					var obj = $scope.productScopeList[i];
				//					$scope.selectSaveProArr.push(obj);
				//				}
				var reg = /,$/gi;
				$scope.productScope = $scope.productScope.replace(reg, "");
				var jsonObject = {
					"proModelids": $scope.productScope,
					"orgId": $scope.orgId,
					"proGrandparentSortId": '',
					"proParentSortId": '',
					"proSortId": '',
					"proModelid": '',
					"brandId": '',
					"proYear": '',
					"proSeason": '',
					"startStock": '',
					"endStock": '',
					"nub": '0',
					"size": '0'
				}
				jsonObject = JSON.stringify(jsonObject);
				$http({
					method: 'post',
					url: pos + 'product/getAllProduct',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == "1") {
						$scope.countPro = data.data.productList.length;
						if($scope.countPro > 0) {
							var productList = data.data.productList;
							$scope.selectSaveProArr = $scope.selectSaveProArr.concat(productList);
							$scope.showSelectSaveProArr = [];
							for(var i = 0; i < $scope.selectSaveProArr.length; i++) {
								var obj = $scope.selectSaveProArr[i];
								$scope.showSelectSaveProArr.push(obj);
							}
						}
					} else {
						alertmsg(data.msg, "error");
					}
				});
				$scope.showProductScope = '2';
			} else {
				$scope.showProductScope = '1';
			}
		} else {
			$scope.productScope1 = '0';
			$scope.showProductScope = '0';
		}
		//适用门店
		$scope.selectSaveShopArr = [];
		if($scope.orgScope != 'AllShop') {
			$scope.orgScope1 = '1';
			$scope.selectSaveShopArr = $scope.orgScope;
			if($scope.selectSaveShopArr.length != '') {
				var reg = /,$/gi;
				$scope.orgScope = $scope.orgScope.replace(reg, "");
				var jsonObject = {
				orgIds: $scope.orgScope,
				shopId: '',
				shopName: ''
			};
				jsonObject = JSON.stringify(jsonObject);
				$http({
					method: 'post',
					url: pos + 'shop/getShopByOrgId',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == "1") {
						$scope.countShop = data.data.orgList.length;
						if($scope.countShop > 0) {
							var orgList = data.data.orgList;
							$scope.selectSaveShopArr = $scope.selectSaveShopArr.concat(orgList);
							$scope.showSelectSaveShopArr = [];
							for(var i = 0; i < $scope.selectSaveShopArr.length; i++) {
								var obj = $scope.selectSaveShopArr[i];
								$scope.showSelectSaveShopArr.push(obj);
							}
						}
					} else {
						alertmsg(data.msg, "error");
					}
				});
				$scope.showChangeOrgScope = '2';
			} else {
				$scope.showChangeOrgScope = '1';
			}
		} else {
			$scope.orgScope1 = '0';
			$scope.showChangeOrgScope = '0';
		}
		
	
	});
	$scope.orgId = JSON.parse(localStorage.keyParams).orgId;
	$scope.editOrNew = $stateParams.uiParams.editOrNew;
	$scope.couponMsgId = $stateParams.uiParams.couponMsgId;
	$scope.couponName = $stateParams.uiParams.couponName;
	$scope.activeTime = $stateParams.uiParams.activeTime;
	$scope.lapsedTime = $stateParams.uiParams.lapsedTime;
	$scope.discount = $stateParams.uiParams.discount;
	$scope.couponModality = $stateParams.uiParams.couponModality;
	$scope.superposition = $stateParams.uiParams.superposition;
	$scope.fullAmount = $stateParams.uiParams.fullAmount;
	$scope.disCountName = $stateParams.uiParams.disCountName;
	$scope.couponType = $stateParams.uiParams.couponType;
	$scope.autoProviding = $stateParams.uiParams.autoProviding;
	$scope.limitCollar = $stateParams.uiParams.limitCollar;
	$scope.countPro = $stateParams.uiParams.countPro;
	$scope.countShop = $stateParams.uiParams.countShop;
	$scope.couponCount = $stateParams.uiParams.couponCount;
	$scope.memberScope = $stateParams.uiParams.memberScope;
	$scope.memberUnionName = $stateParams.uiParams.memberUnionName;
	$scope.gradeName = $stateParams.uiParams.gradeName;
	$scope.productScope = $stateParams.uiParams.productScope;
	$scope.orgScope = $stateParams.uiParams.orgScope;
	$scope.productScopeList = $stateParams.uiParams.productScopeList;
	$scope.colorValue = $stateParams.uiParams.colorValue;
	if($scope.productScopeList == undefined) {
		$scope.productScopeList = '';
	}
	//取消编辑
	$scope.goback = function() {
		$state.go("disCountCard", {
			uiParams: ""
		});
	}

	//选择卡券形式
	$scope.changeType = function() {
			if($scope.couponModality == '1') {
				$scope.showDiscountType = '1';
			} else {
				$scope.showDiscountType = '0';
			}
		}
		//选择卡券额度
	$scope.setLimit = function(type) {
			if(type == '1') {
				$scope.isLimitshow = '1';

			} else {
				$scope.isLimitshow = '0';
			}
			return $scope.isLimitshow;
		}
		//监听输入格式
	$scope.showmess1 = '0';
	$scope.showmess2 = '0';
	$scope.showmess3 = '0';
	$scope.showmess4 = '0';
	$scope.showmess5 = '0';
	$scope.isNum = function(type) {
		var reg = /^(0|[1-9][0-9]*)$/;
		if(type == '1') {
			if(!reg.test($scope.fullAmounta) && $scope.fullAmounta != '') {
				$scope.showmess1 = '1';
			} else {
				$scope.showmess1 = '0';
			}
		}
		if(type == '2') {
			if(!reg.test($scope.fixedLimit1) && $scope.fixedLimit1 != '') {
				$scope.showmess2 = '1';
			} else {
				$scope.showmess2 = '0';
			}
		}
		if(type == '3') {
			if($scope.randomMIn == undefined) {
				$scope.randomMIn = '';
			}
			if($scope.randomMax == undefined) {
				$scope.randomMax = '';
			}
			if((!reg.test($scope.randomMIn) && $scope.randomMIn != '') || (!reg.test($scope.randomMax) && $scope.randomMax != '')) {
				$scope.showmess3 = '1';
			} else if(Number($scope.randomMIn) > Number($scope.randomMax)) {
				$scope.showmess3 = '2';
			} else {
				$scope.showmess3 = '0';
			}
		}
		if(type=='5'){
			if(isNaN($scope.discount)){
				$scope.showmess5 = '1';
				$scope.discount1=0;
			}else{
				if(($scope.discount<=0)||($scope.discount>10)){
					$scope.showmess5 = '1';
					$scope.discount1=0;
				}else{
					$scope.showmess5 = '0';
					$scope.discount1=$scope.discount;
				}
			}
		}

	}

	//适用对象
	$scope.showMemberScope = false;
	$scope.changeMemberScope = function() {
			if($scope.memberScope1 == '1') {
				//获取会员卡类型
				var jsonObject = "{\"orgId\":\"" + $scope.orgId + "\"}";
				$http({
					method: 'post',
					url: pos + 'membergrade/getMemberGrades',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data, stauts, headers, config) {
					if(data.code == "1") {
						$scope.memberGradeList = data.data.memberGradeList;
						$scope.showMemberScope = true;
					} else {
						alertmsg(data.msg, "error");
					}
				});
			} else {
				$scope.showMemberScope = false;
			}
			return $scope.showMemberScope;
		}
		var from = 0;
		var pageSize = 6;
		$scope.createPagePlugin = function(total, pageSize) {
			$("#paging").empty();
			paging = pagePlugin.createPaging({
				renderTo: 'paging',
				total: total,
				pageSize: pageSize
			});
			paging.goPage = function(from, to) {
				$scope.page(from - 1, pageSize);
			}
		};
		$scope.page = function(from, pageSize) {
			$scope.jsonPage = {
				"nub": "" + from + "",
				"size": "" + pageSize + ""
			};
			$.extend($scope.jsonPage, $scope.param);
			$scope.jsonObject = JSON.stringify($scope.jsonPage);
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
					angular.forEach(data.data.productList,function(ele){
							ele.getChecked=false;
						})
					$scope.joinSaveProArr.forEach(function(e){
						$scope.products.forEach(function(ele){
						if(e.proModelid==ele.proModelid){
							ele.getChecked=true;
						}
						});
					})
					
					var saveFlag=[];//当前页全部勾选时，全选按钮选中
					$scope.products.forEach(function(e){
						if(e.getChecked==true)
							saveFlag.push(e);
					})
					if($scope.products.length==saveFlag.length){
						$scope.currentPage = true;
					}else{
						$scope.currentPage = false;
					}
				} else {
					alertmsg("获取商品信息失败", "error");
				}
			})
		}
	//关闭弹框
	$scope.closeDia = function() {
			$scope.showtype = '0';
			$scope.joinedShopsArr = [];
			$scope.joinSaveProArr = [];
		}
		//弹框居中
	$(".AddGoodsAndStoreItem").center();

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
		} else {
			$scope.queryYears = "";
			$scope.seasons = "";
			$scope.grandparentSorts = "";
			$scope.parentSorts = "";
			$scope.sorts = "";
		}
	}

	//查询大品类
	$scope.getSorts = function() {
		var jsonObject = {
			sortPid: '0',
			orgId: $scope.orgId
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'sort/selectSort',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.largeSorts = data.data.sortList;

			} else {
				alertmsg("获取品类失败", "error");
			}
		})
	}
	$scope.getSorts();
	//查询中品类
	$scope.getParentSort = function(obj) {
			var pSortId = obj.large;
			var jsonObject = {
				sortPid: pSortId,
				orgId: $scope.orgId
			};
			jsonObject = angular.toJson(jsonObject);
			$http({
				method: 'post',
				url: pos + 'sort/selectSort',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.parentSorts = data.data.sortList;
					$scope.middle = '';
					$scope.little = "";
				} else {
					$scope.middle = '';
					$scope.little = '';
					$scope.parentSorts = [];
					$scope.sorts = [];
					alertmsg("获取品类失败", "error");
				}
			})
		}
		//查询小品类
	$scope.getSort = function(obj) {
		var pSortId = obj.middle;
		var jsonObject = {
			sortPid: pSortId,
			orgId: $scope.orgId
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'sort/selectSort',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.sorts = data.data.sortList;
			} else {
				alertmsg("获取品类失败", "error");
			}
		})
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

	//查询商品
	$scope.getStock = function() {
			var proGrandparentSortId = $scope.large;
			if(proGrandparentSortId == null) {
				proGrandparentSortId = "";
			}
			var proParentSortId = $scope.middle;
			if(proParentSortId == null) {
				proParentSortId = "";
			}
			var proSortId = $scope.little;
			if(proSortId == null) {
				proSortId = "";
			}
			var brandId = $scope.queryBrand;
			if(brandId == null) {
				brandId = "";
			}
			var proSeason = "";
			var queryProYear = "";
			if($scope.season != undefined && $scope.season != '') {
				proSeason = $scope.season.proSeason;
			}
			if($scope.year != undefined && $scope.year != '') {
				queryProYear = $scope.year.proYear;
			}
			var proModelid = $scope.proModelid;
			if($scope.proModelid == undefined && $scope.proModelid == '') {
				proModelid = "";
			}
			var jsonObject = {
				"orgId": $scope.orgId,
				"proGrandparentSortId": proGrandparentSortId,
				"proParentSortId": proParentSortId,
				"proSortId": proSortId,
				"proModelid": proModelid,
				"brandId": brandId,
				"proYear": queryProYear,
				"proSeason": proSeason,
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
				if(data.code == "1") {
					if(data.data.productList.length > 0) {
						$scope.count = data.data.count;
						angular.forEach(data.data.productList,function(ele){
							ele.getChecked=false;
						})
						for(var i=0;i<data.data.productList.length;i++){
							for(var j=0;j<$scope.selectSaveProArr.length;j++){
								if(data.data.productList[i].proModelid==$scope.selectSaveProArr[j].proModelid){
									data.data.productList[i].getChecked=true;
								}
							}
						}
						$("#paging").hide();
						if($scope.count>pageSize){
							$("#paging").show();
							$scope.createPagePlugin($scope.count, pageSize);
						}
						$scope.products = data.data.productList;
					} else {
					$scope.products = [];
					alertmsg("没有此商品", "error");
					}
				} else {
					alertmsg("获取商品信息失败", "error");
				}
			})
		}
	//全选或者单选 将商品款号存起来
	$scope.selectSaveProArr = [];//存放已选的商品
	$scope.showSelectSaveProArr = [];
	$scope.joinSaveProArr = [];/*存放勾选商品*/
	$scope.saveSelectArr=[];/*存放取消勾选商品*/
	$scope.selectProduct = function(obj, type) {
		/*单选*/
		if(type == '1') {
			if (obj.pro.getChecked == false){
				$scope.joinSaveProArr.push(obj.pro);	
			} else {
				for (var i = 0; i <  $scope.joinSaveProArr.length; i++) {
				 	var model = $scope.joinSaveProArr[i];
				 	if (model.proModelid == obj.pro.proModelid) {
				 		$scope.joinSaveProArr.splice(i, 1);
				 	}
				}
				$scope.saveSelectArr.push(obj.pro);
			}
			obj.pro.getChecked = !obj.pro.getChecked;	
			var saveFlag=[];//当前页全部勾选时，全选按钮选中
			$scope.products.forEach(function(e){
				if(e.getChecked==true)
					saveFlag.push(e);
			})
			if($scope.products.length==saveFlag.length){
				$scope.currentPage = true;
			}else{
				$scope.currentPage = false;
			}
			//加判断
		} else { /*全选*/
			if($scope.currentPage == false) {
				$scope.products.forEach(function(ele) {
						ele.getChecked = false;
					})
					//					//当为false的时候,把这一页的数据清空
				for(var i = 0; i < $scope.products.length; i++) {
					for(var j = 0; j < $scope.joinSaveProArr.length; j++) {
						if($scope.products[i].proModelid == $scope.joinSaveProArr[j].proModelid) {
							$scope.joinSaveProArr.splice(j, 1);
						}
					}
				}
			} else {
				//当为true的时候,把这一页的数据加进去
				angular.forEach(obj, function(ele) {
					if (ele.getChecked != true) {
						$scope.joinSaveProArr.push(ele);
						ele.getChecked = true;
					}
				});
			}
		}

	}

	//查询已选商品
	$scope.query = function(queryBrand, text) {
		$scope.showSelectSaveProArr = [];
		if(queryBrand == undefined || queryBrand == null) {
			queryBrand = '';
		}
		if((text == '' || text == undefined || text == null) && queryBrand.length <= 0) {

			for(var i = 0; i < $scope.selectSaveProArr.length; i++) {
				var obj = $scope.selectSaveProArr[i];
				$scope.showSelectSaveProArr.push(obj);
			}
		} else {
			if((text == '' || text == undefined || text == null) && queryBrand.length > 0) {
				for(var i = 0; i < $scope.selectSaveProArr.length; i++) {
					var brandId = $scope.selectSaveProArr[i].brandId;
					if(queryBrand == brandId) {
						$scope.showSelectSaveProArr.push($scope.selectSaveProArr[i]);
					}
				}
			} else if(text.length > 0 && queryBrand.length > 0) {
				for(var i = 0; i < $scope.selectSaveProArr.length; i++) {
					if(queryBrand == $scope.selectSaveProArr[i].brandId && text == $scope.selectSaveProArr[i].proModelnum) {
						$scope.showSelectSaveProArr.push($scope.selectSaveProArr[i]);
					}
				}
			} else {
				for(var i = 0; i < $scope.selectSaveProArr.length; i++) {
					var proModelnum = $scope.selectSaveProArr[i].proModelnum;
					if(text == proModelnum) {
						$scope.showSelectSaveProArr.push($scope.selectSaveProArr[i]);
					}
				}
			}
		}
	};
	//查询店铺
	$scope.queryShop = function(queryBrand, text) {
		$scope.showSelectSaveShopArr = [];
		if(queryBrand == undefined || queryBrand == null) {
			queryBrand = '';
		}
		if((text == '' || text == undefined || text == null) && queryBrand.length <= 0) {

			for(var i = 0; i < $scope.selectSaveShopArr.length; i++) {
				var obj = $scope.selectSaveShopArr[i];
				$scope.showSelectSaveShopArr.push(obj);
			}
		} else {
			if((text == '' || text == undefined || text == null) && queryBrand.length > 0) {
				for(var i = 0; i < $scope.selectSaveShopArr.length; i++) {
					var orgId = $scope.selectSaveShopArr[i].orgId;
					if(queryBrand == orgId) {
						$scope.showSelectSaveShopArr.push($scope.selectSaveShopArr[i]);
					}
				}
			} else if(text.length > 0 && queryBrand.length > 0) {
				for(var i = 0; i < $scope.selectSaveShopArr.length; i++) {

					if(queryBrand == $scope.selectSaveShopArr[i].orgId && text == $scope.selectSaveShopArr[i].shopName) {
						$scope.showSelectSaveShopArr.push($scope.selectSaveShopArr[i]);
					}
				}
			} else {
				for(var i = 0; i < $scope.selectSaveShopArr.length; i++) {
					var shopName = $scope.selectSaveShopArr[i].shopName;
					if(text == shopName) {
						$scope.showSelectSaveShopArr.push($scope.selectSaveShopArr[i]);
					}
				}
			}
		}
	}

	//添加已选商品  joinSaveProArr 存放已选商品数组  
	$scope.addPro = function() {
			$scope.selectSaveProArr = [];
			for(var i = 0; i < $scope.joinSaveProArr.length; i++) {
				$scope.selectSaveProArr.push($scope.joinSaveProArr[i]);
			}
			$scope.showtype = '0';
			$scope.countPro = $scope.selectSaveProArr.length;
			if($scope.countPro != "" && $scope.countPro != undefined && $scope.countPro != 0) {
				$scope.showProductScope = '2';
			} else {
				$scope.showProductScope = '1';
			}
			$scope.joinSaveProArr = [];
			$scope.showSelectSaveProArr = [];
			$scope.saveSelectArr = [];
			for(var i = 0; i < $scope.selectSaveProArr.length; i++) {
				var obj = $scope.selectSaveProArr[i];
				$scope.showSelectSaveProArr.push(obj);
			}
		}
	//保存已选商品
	$scope.saveProNum = function() {
			$scope.showtype = '0';
			$scope.proModelnumArr = []; //存放添加商品的款号
			angular.forEach($scope.selectSaveProArr, function(ele) {
				$scope.proModelnumArr.push(ele.proModelid);
			});
		}
		//适用商品
	$scope.showProductScope = '0';
	$scope.changeProductScope = function() {
			if($scope.productScope1 == '1') {
				//显示限定商品
				$scope.showProductScope = '1';
			} else {
				$scope.showProductScope = '0';
			}
			return $scope.showProductScope;
		}
		//适用门店
	$scope.showChangeOrgScope = '0';
	$scope.changeOrgScope = function() {
			if($scope.orgScope1 == '1') {
				//显示限定门店
				if($scope.countShop != "" && $scope.countShop != undefined && $scope.countShop != 0) {
					$scope.showChangeOrgScope = '2';
				} else {
					$scope.showChangeOrgScope = '1';
				}
			} else {
				$scope.showChangeOrgScope = '0';
			}
			return $scope.showChangeOrgScope;
		}
		//显示限定门店弹框
	$scope.showtype = '0';
	$scope.showFrame = function(type) {
		$('.addGoodsAndStoreCover').show();
		if(type == '1') {
			//添加限定商品
			$scope.getStock();
			$scope.showtype = '1';
			$scope.selectSaveProArr.forEach(function(e){
				$scope.joinSaveProArr.push(e);
			});
		}
		if(type == '2') {
			//已选限定商品
			$scope.showtype = '2';
		}
		if(type == '3') {
			//添加限定门店
			$scope.getShop();
			$scope.showtype = '3';
		}
		if(type == '4') {
			//已选限定商品
			$scope.showtype = '4';
		}

	}


	//查询商户下的门店
	$scope.getShop = function() {
		if($scope.shopNum == "" || $scope.shopNum == undefined) {
				$scope.shopNum = '';
			}
			if($scope.shopName == "" || $scope.shopName == undefined) {
				$scope.shopName = '';
			}
			//orgType == '4' 判断是不是店铺
		if($scope.userInfo.orgType == '4'){
			var jsonObject = {
				shopNum: $scope.shopNum,
				shopName: $scope.shopName,
				orgId: $scope.orgId,
				nub: '',
				size:''
			};
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'shop/getShopByOrgId',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					if(data.data.orgList.length > 0) {
						for(var i=0; i < data.data.orgList.length;i++) {
							var orgId = data.data.orgList[i].orgId;
							for(var j = 0; j < $scope.selectSaveShopArr.length; j++) {
								var selectOrgId = $scope.selectSaveShopArr[j].orgId;
								if(selectOrgId == orgId) {
									data.data.orgList.splice(i, 1);
									break;
								}
							}
						}
						$scope.orgList = data.data.orgList;
					} else {
						$scope.orgList = [];
						alertmsg("没有此门店", "error");
					}
				} else {
					alertmsg("获取门店信息失败", "error");
				}
			})
			
		}else{
			var jsonObject = {
				shopNum: $scope.shopNum,
				shopName: $scope.shopName,
				orgId: $scope.orgId,
				nub: '',
				size:''
			};
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'shop/getMerchantShop',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					if(data.data.shopList.length > 0) {
						for(var i=0; i < data.data.shopList.length ; i++) {
							var orgId = data.data.shopList[i].orgId;
							for(var j = 0; j < $scope.selectSaveShopArr.length; j++) {
								var selectOrgId = $scope.selectSaveShopArr[j].orgId;
								if(selectOrgId == orgId) {
									data.data.shopList.splice(i, 1);
									break;
								}
							}
						}
						$scope.orgList = data.data.shopList;

					} else {
						$scope.orgList = [];
						alertmsg("没有此门店", "error");
					}
				} else {
					alertmsg("获取门店信息失败", "error");
				}
			})
			
		}
			
			
		}
		//全选和单选门店
	$scope.joinedShopsArr = [];
	$scope.selectShop = function(obj, type) {

		/*单选*/
		if(type == '1') {
			$scope.allShop = false;
			$scope.shopIndex = $scope.joinedShopsArr.indexOf(obj.shop);
			if($scope.shopIndex == -1) {
				$scope.joinedShopsArr.push(obj.shop);
			} else if($scope.shopIndex >= 0) {
				$scope.joinedShopsArr.splice($scope.shopIndex, 1);
			}
			//			if (obj.shop.getChecked == false) {
			//				$scope.joinedShopsArr.push(obj.shop);
			//			} else{
			//				for(var i = 0; i < $scope.selectSaveShopArr.length; i++) {
			//					var orgId = $scope.selectSaveShopArr[i].orgId;
			//					if(orgId == obj.shop.orgId) {
			//						$scope.selectSaveShopArr.splice(i, 1);
			//						break;
			//					}
			//				}
			//			}

			//			$scope.selectedAddShop();
		} else { /*全选*/
			$scope.thisShopObj = []; /*已选门店*/
			$scope.keepShopObj = []; /*去除当前页面门店*/
			angular.forEach(obj, function(ele) {
				$scope.thisShopObj.push(ele);
			});
			if($scope.allShop == false) {
				//当为false的时候,把这一页的数据清空
				$scope.orgList.forEach(function(ele) {
					ele.getChecked = false;
				})
				angular.forEach($scope.selectSaveShopArr, function(ele, index) {
					if($scope.thisShopObj.indexOf(ele) == -1) {
						$scope.keepShopObj.push(ele);
					}
				});
				$scope.selectSaveShopArr = $scope.keepShopObj;
			} else {
				$scope.orgList.forEach(function(ele) {
					ele.getChecked = true;
				})
				angular.forEach($scope.thisShopObj, function(ele, index) {
					if($scope.selectSaveShopArr.indexOf(ele) == -1) {
						$scope.selectSaveShopArr.push(ele);
					}
				});
			}
		}
	}

	//添加门店
	$scope.addShop = function() {
		$scope.showtype = '0';
		$scope.selectedAddShop();
		$scope.showSelectSaveShopArr = [];
		for(var i = 0; i < $scope.selectSaveShopArr.length; i++) {
			var obj = $scope.selectSaveShopArr[i];
			$scope.showSelectSaveShopArr.push(obj);
		}
		$scope.joinedShopsArr = [];
	}

	//添加门店
	$scope.selectedAddShop = function() {

		for(var i = 0; i < $scope.joinedShopsArr.length; i++) {
			$scope.selectSaveShopArr.push($scope.joinedShopsArr[i]);
		}
		$scope.countShop = $scope.selectSaveShopArr.length;
		if($scope.countShop != "" && $scope.countShop != undefined && $scope.countShop != 0) {
			$scope.showChangeOrgScope = '2';
		} else {
			$scope.showChangeOrgScope = '1';
		}
		$scope.shopOrgIdArr = []; //存放添加商品的款号
		angular.forEach($scope.selectSaveShopArr, function(ele) {
			$scope.shopOrgIdArr.push(ele.orgId);
		});
	}

	//移除商品和门店
	$scope.showDelDialog = '0'; /*1 显示移除商品弹框 2 移除门店*/
	$scope.deleteObj = function(obj, type) { //type==1 移除商品 2移除门店
			if(type == '1') {
				$scope.proObj = obj;
				$scope.showDelDialog = '1';
			} else {
				$scope.shopObj = obj;
				$scope.showDelDialog = '2';
			}
		}
		//移除商品
	$scope.deletePro = function() {
			$scope.deleteproModelNum = $scope.proObj.pro.proModelid;
			for(var i = 0; i < $scope.selectSaveProArr.length; i++) {
				if($scope.deleteproModelNum == $scope.selectSaveProArr[i].proModelid) {
					$scope.selectSaveProArr.splice(i, 1);
				}
			}
			for(var i = 0; i < $scope.showSelectSaveProArr.length; i++) {
				if($scope.deleteproModelNum == $scope.showSelectSaveProArr[i].proModelid) {
					$scope.showSelectSaveProArr.splice(i, 1);
				}
			}
			$scope.countPro = $scope.selectSaveProArr.length;
			$scope.showDelDialog = '0';
		}
		//移除门店
	$scope.deleteShop = function() {
			var orgId = $scope.shopObj.shop.orgId;
			for(var i = 0; i < $scope.selectSaveShopArr.length; i++) {
				if(orgId == $scope.selectSaveShopArr[i].orgId) {
					$scope.selectSaveShopArr.splice(i, 1);
				}
			}
			for(var i = 0; i < $scope.showSelectSaveShopArr.length; i++) {
				if(orgId == $scope.showSelectSaveShopArr[i].orgId) {
					$scope.showSelectSaveShopArr.splice(i, 1);
				}
			}
			$scope.countShop = $scope.selectSaveShopArr.length;
			$scope.showDelDialog = '0';
		}
		// 取消弹框
	$scope.cancelFrame = function() {
		$scope.showDelDialog = '0';
		$scope.joinedShopsArr = [];
		$scope.joinSaveProArr = [];
	}

	//编辑保存优惠券
	$scope.editSave = function() {
		if($scope.couponModality == '1') {
			if($scope.amount1 == '1') {
				$scope.discountSum = $scope.fixedLimit1;
			} else {
				$scope.discountSum = $scope.randomMIn1 + ',' + $scope.randomMax1;
			}
		} else {
			$scope.discountSum = '';
		}
		if($scope.notCouponCount) {
			$scope.couponCount = '-1';
		} else {
			$scope.couponCount = $scope.couponCounta;
		}
		if($scope.notFullAmount) {
			$scope.fullAmount = '0';
		} else {
			$scope.fullAmount = $scope.fullAmounta;
		}
		$scope.activeTime2='';//判斷生效時間有無改動
		if($scope.activeTime1=="undefined") {
			$scope.activeTime2 = $scope.activeTime;
		} else {
			$scope.activeTime2 = $scope.activeTime1;
		}
		$scope.lapsedTime2='';//判斷結束時間有無改動
		if($scope.lapsedTime1=="undefined") {
			$scope.lapsedTime2 = $scope.lapsedTime;
		} else {
			$scope.lapsedTime2 = $scope.lapsedTime1;
		}
		if($scope.memberScope1 == '1') {
			$scope.memberScopeId = $scope.memberScope;
		} else {
			$scope.memberScopeId = $scope.memberScope1;
		}
		$scope.productScopeArr1 = "";
		if($scope.productScope1 == "0") {
			$scope.productScopeArr1 = "AllProduct";
		} else {
			angular.forEach($scope.selectSaveProArr, function(ele) {
				$scope.productScopeArr1 += ele.proModelid + ",";
			})
		}
		$scope.orgScopeArr1 = '';
		if($scope.orgScope1 == '0') {
			$scope.orgScopeArr1 = "AllShop";
		} else {
			$scope.orgScopeArr = $scope.shopOrgIdArr;
			angular.forEach($scope.orgScopeArr, function(ele) {
				$scope.orgScopeArr1 += ele + ",";
			})
		}
		$scope.jsonObject = {
			couponName: $scope.couponName,
			amount: $scope.discountSum,
			superposition: $scope.superposition,
			activeTime: $scope.activeTime2,
			couponModality: $scope.couponModality,
			discount: $scope.discount,
			couponCount: $scope.couponCount,
			productScope: $scope.productScopeArr1,
			fullAmount: $scope.fullAmount,
			couponState: '1',
			autoProviding: $scope.autoProviding,
			memberScope: $scope.memberScopeId,
			couponType: $scope.couponType,
			limitCollar: $scope.limitCollar,
			lapsedTime: $scope.lapsedTime2,
			couponMsgId: $scope.couponMsgId,
			colorValue: '',
			useCount: '0',
			orgScope: $scope.orgScopeArr1
		};
		jsonObject = JSON.stringify($scope.jsonObject);
		$http({
			method: 'post',
			url: pos + 'couponMsg/updateCpMsg',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$state.go("disCountCard", {
					uiParams: ""
				});
			} else {
				alertmsg("添加失败", "error");
			}
		})
	}

	var start = {
		elem: '#start',
		format: 'YYYY-MM-DD ',
		min: laydate.now(), //设定最小日期为当前日期
		max: '2099-06-16', //最大日期
		//		istime: true,
		istoday: false,
		choose: function(datas) {
			$scope.activeTime1 = datas;
			end.min = datas; //开始日选好后，重置结束日的最小日期
			end.start = datas //将结束日的初始值设定为开始日
		}
	};
	var end = {
		elem: '#end',
		format: 'YYYY-MM-DD',
		min: laydate.now(),
		max: '2099-06-16',
		//		istime: true,
		istoday: false,
		choose: function(datas) {
			$scope.lapsedTime1 = datas;

			start.max = datas; //结束日选好后，重置开始日的最大日期
		}
	};
	setTimeout(function() {
		laydate(start);
		laydate(end);
	}, 1000);

}]);