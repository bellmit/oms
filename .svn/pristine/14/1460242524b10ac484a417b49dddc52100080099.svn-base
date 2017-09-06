qyApp.controller('guideKpiSetController', function($stateParams, $state, $scope, $http, $compile, Upload, $filter) {
	/*日期代码*/
	//判断当前年份是否是闰年(闰年2月份有29天，平年2月份只有28天)
	/*商户Id*/
	$scope.notSetMonthPlan = true;
	$scope.notSetMonthPlan_a = false;
	$scope.showGuideKpi = false;
	$scope.orgId = angular.fromJson(keyParams).orgId;

	function isLeap(year) {
		return year % 4 == 0 ? (year % 100 != 0 ? 1 : (year % 400 == 0 ? 1 : 0)) : 0;
	}
	var i, k,
		today = new Date(), //获取当前日期
		getCalendar = function(year, month, date) {
			var firstday = new Date(year, month - 1, 1), //获取当月的第一天
				dayOfWeek = firstday.getDay(), //判断第一天是星期几(返回[0-6]中的一个，0代表星期天，1代表星期一，以此类推)
				days_per_month = new Array(31, 28 + isLeap(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); //创建月份数组
			$scope.nullDate = new Array(dayOfWeek);
			$scope.monthDate = new Array(days_per_month[Number(month) - 1]);
			//确定日期表格所需的行数
		};

	//	创建年份的下拉框
	$scope.yearDateArr = [];
	$scope.setYearDate = (function() {
		for(var i = 1900; i <= 2100; i++) {
			$scope.yearDateArr.push({
				year: i
			});
		}
	})()
	if($stateParams.uiParams.type == '0') { /*0是前进，1是后退到这个页面*/
		$stateParams.uiParams.routeArr.push({
			name: "guideKpiSet",
			level: "1"
		})
	}
	/*从上个页面获得的店铺信息*/
	$scope.shopId = $stateParams.uiParams.routeParam.shopId;
	$scope.year = $stateParams.uiParams.routeParam.year;
	$scope.month = $stateParams.uiParams.routeParam.month;
	$scope.monthPlan = $stateParams.uiParams.routeParam.monthPlan;
	$scope.planAmount = $stateParams.uiParams.routeParam.planAmount;
	$scope.planAmount_a = 0;
	getCalendar($scope.year, $scope.month); /*生成日历列表*/
	$scope.goback = function() {
			$stateParams.uiParams.routeArr.splice($stateParams.uiParams.routeArr.length - 1, 1);
			$state.go($stateParams.uiParams.routeArr[$stateParams.uiParams.routeArr.length - 1].name, {
				uiParams: {
					routeArr: $stateParams.uiParams.routeArr,
					routeParam: '',
					type: "1"
				}
			})
		}
		//	点击年份查询每个月的日期
	$scope.setYear = function() {
			getCalendar($scope.year, $scope.month);
			$scope.getSalePlanMonth();
			$scope.getShopPlan();
		}
		//点击月份查询每个月的日期
	$scope.setMonth = function(month) {
			$scope.month = month;
			$scope.getSalePlanMonth();
			getCalendar($scope.year, $scope.month);
			$scope.getShopPlan();
		}
		/*选择商户*/
	$scope.setShop = function() {
			$scope.getSalePlanMonth();
			$scope.getShopPlan();
		}
	/*查询单个店铺的店铺当月总指标*/
	$scope.getShopPlan = function () {
		var jsonObject = {
			planDate:$scope.year+$scope.month,
			orgId:$scope.shopId
		}
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'shopPlan/getShopPlanMonth',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.planAmount=data.data.shopPlanList[0].planAmount;
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
	
		/*查询商户下面的店铺（用于下拉框）*/
	$scope.loadShop = function() {
		var jsonObject = {
			shopNum: "",
			shopName: "",
			orgId: $scope.orgId,
			nub: "0",
			size: "0"
		}
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'shop/getMerchantShop',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.shopLists = data.data.shopList;
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
	$scope.loadShop();
	/*查询门店所有导购员的月指标*/
	$scope.getSalePlanMonth = function() {
		var jsonObject = {
			shopId: $scope.shopId,
			planDate: $scope.year + $scope.month
		}
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'saleplan/getSalePlanMonth',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.guideLists = data.data.planList;
				if($scope.guideLists.length == 0) {
					$scope.notSetMonthPlan = true;
					$scope.notSetMonthPlan_a = false;
					$scope.showGuideKpi = false;
				} else {
					$scope.notSetMonthPlan = false;
					$scope.notSetMonthPlan_a = true;
					$scope.showGuideKpi = false;
					angular.forEach($scope.guideLists, function(ele, index) {
						if(index == 0) {
							/*							到这个页面默认选中第一个导购,获得导购Id*/
							ele.selected = true;
							$scope.salesId = ele.salesId;
						} else {
							ele.selected = false;
						}
					});
					$scope.loadGuideDefaultPlan();
				}
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
	$scope.getSalePlanMonth();
	/*点击设置店铺导购指标（查询导购员列表）*/
	$scope.setGuidePlan = function() {
		$scope.notSetMonthPlan = false;
		$scope.showGuideKpi = true;
		var jsonObject = {
			orgId: $scope.shopId,
			salesId: ""
		}
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: cas + 'user/findGuideByOrgId',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.guideLists = data.data.guideList;
				if($scope.guideLists.length == 0) {

				} else {
					angular.forEach($scope.guideLists, function(ele, index) {
						ele.salesId = ele.userId;
						ele.salesName = ele.trueName;
						delete ele.userId;
						delete ele.trueName;
						ele.planAmount = "0";
						$scope.planAmount_a += Number(ele.planAmount);
					})
				}
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
	$scope.inputGuideAmount = function(index, planAmount) {
			$scope.planAmount_a = 0;
			$scope.guideLists[index].planAmount = planAmount;
			angular.forEach($scope.guideLists, function(ele, index) {
				$scope.planAmount_a += Number(ele.planAmount);
			})
		}
		/*设置门店所有导购员月指标*/
	$scope.saveGuidePlan = function() {
			$scope.saveGuideLists = angular.copy($scope.guideLists);
			var jsonObject = {
				shopId: $scope.shopId,
				planDate: $scope.year + $scope.month,
				salesPlanList: $scope.saveGuideLists
			}
			jsonObject = angular.toJson(jsonObject);
			$http({
				method: 'post',
				url: pos + 'saleplan/addSalePlanMonth',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.getSalePlanMonth();
				} else {
					alertmsg(data.msg, "error");
				}
			})
		}
		/*选择导购查询导购每天的指标*/
	$scope.chooseGuide = function(salesId, index) {
		if(index == undefined || salesId == undefined) {
			index = 0;
			salesId = $scope.guideLists[index].salesId;
		}
		angular.forEach($scope.guideLists, function(ele, index) {
			ele.selected = false;
		})
		$scope.salesId = salesId;
		$scope.guideLists[index].selected = true;
		var jsonObject = {
			shopId: $scope.shopId,
			planDate: $scope.year + $scope.month,
			salesId: salesId,
		};
		jsonObject = angular.toJson(jsonObject);
		$scope.loadSalePlanDate(jsonObject);
	}
	$scope.loadSalePlanDate = function(jsonObject) {
			$http({
				method: 'post',
				url: pos + 'saleplan/getSalePlanDateBysalesId',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					if(data.data.planList.length == 0) {
						$scope.planLists = [];
						for(var i = 0; i < $scope.monthDate.length; i++) {
							$scope.planLists.push({
								planDate: i + 1 + "",
								planAmount: '0'
							})
						}
					} else {
						$scope.planLists = data.data.planList;
					}
					$scope.guideMonthPlanAmount = 0;
					angular.forEach($scope.planLists, function(ele, index) {
						$scope.guideMonthPlanAmount += Number(ele.planAmount);
					})
				} else {
					alertmsg(data.msg, "error");
				}
			})
		}
		/*j进入导购业绩指标目标设定页面查询第一个导购当月的指标*/
	$scope.loadGuideDefaultPlan = function() {
		var jsonObject = {
			shopId: $scope.shopId,
			planDate: $scope.year + $scope.month,
			salesId: $scope.salesId,
		};
		jsonObject = angular.toJson(jsonObject);
		$scope.loadSalePlanDate(jsonObject);
	}
	/*输入日指标计算总额*/
	$scope.inputGuideDatePlan = function() {
			$scope.guideMonthPlanAmount = 0;
			angular.forEach($scope.planLists, function(ele, index) {
				$scope.guideMonthPlanAmount += Number(ele.planAmount);
			})
		}
		/*设置导购员日指标*/
	$scope.saveGuideDatePlan = function() {
			$scope.planLists_a = angular.copy($scope.planLists)
			angular.forEach($scope.planLists_a, function(ele, index) {
				if(index < 9) {
					if(ele.planDate.indexOf("0") == 0) {
						ele.planDate = $scope.year + $scope.month + ele.planDate
					} else {
						ele.planDate = $scope.year + $scope.month + "0" + ele.planDate
					}
				} else {
					ele.planDate = $scope.year + $scope.month + ele.planDate
				}
			})
			var jsonObject = {
				shopId: $scope.shopId,
				planDate: $scope.year + $scope.month,
				salesId: $scope.salesId,
				salesPlanList: $scope.planLists_a
			}
			jsonObject = angular.toJson(jsonObject);
			$http({
				method: 'post',
				url: pos + 'saleplan/addSalePlanDateBysalesId',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.loadGuideDefaultPlan();
				} else {
					alertmsg(data.msg, "error");
				}
			})
		}
		/*点击导购上的编辑按钮*/
	$scope.editGuideMonthPlan = function() {
			$scope.notSetMonthPlan_a = false;
			$scope.showGuideKpi = true;
		}
		/*设置导购月指标的页面点击取消按钮*/
	$scope.cancelEdit = function() {
		$scope.getSalePlanMonth();
	}
	/*点击重置按钮*/
	$scope.reset = function(){
		$scope.loadGuideDefaultPlan();
	}
});