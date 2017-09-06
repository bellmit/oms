qyApp.controller('kpiMgtController', function($stateParams, $state, $scope, $http, $compile, Upload, $filter) {
	var today = new Date(); //获取当前日期
	$scope.year = today.getFullYear(); //获取日期中的年份
	$scope.month = today.getMonth() + 1;
	if($scope.month < 10) {
		$scope.month = "0" + $scope.month;
	} else {
		$scope.month = "" + $scope.month;
	}
	$scope.yearDateArr = [];
	$scope.setYearDate = (function() {
		for(var i = 1900; i <= 2100; i++) {
			$scope.yearDateArr.push({
				year: i
			});
		}
	})();
	$stateParams.uiParams = new Object();
	//	统一设置日目标
	$scope.setDailyKpi = function(shopPlanList) {
		if(shopPlanList.planAmount == "0.00" ){
			alertmsg("请先设置月目标","error");
			return false;
		}
		shopPlanList.year = $scope.year;
		shopPlanList.month = $scope.month;
		$stateParams.uiParams.routeArr = [{
			name: "kpiMgt",
			level: "0"
		}]
		$state.go("dateKpiSet", {
			uiParams: {
				routeArr: $stateParams.uiParams.routeArr,
				routeParam: shopPlanList,
				type: "0"
			}
		})
	}
	$scope.setGuideKpi = function(shopPlanList) {
		shopPlanList.year = $scope.year;
		shopPlanList.month = $scope.month;
		$stateParams.uiParams.routeArr = [{
			name: "kpiMgt",
			level: "0"
		}]
		$state.go("guideKpiSet", {
			uiParams: {
				routeArr: $stateParams.uiParams.routeArr,
				routeParam: shopPlanList,
				type: "0"
			}
		})
	}
	$scope.setMonth = function(month) {
			$scope.month = month;
			$scope.searchShopPlan()
		}
		/*查询店铺月指标*/
	$scope.searchShopPlan = function() {
		var jsonObject = {
			planDate: ($scope.year + "") + $scope.month
		};
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
				$scope.shopPlanLists = data.data.shopPlanList;
				angular.forEach($scope.shopPlanLists, function(ele, index) {
					ele.edit = false;
				})
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
	$scope.searchShopPlan();
	/*点击编辑月目标按钮*/
	$scope.flag = true;
	$scope.editShopPlan = function(index) {
			angular.forEach($scope.shopPlanLists, function(ele, index) {
				if(ele.edit == true) {
					alertmsg("您有未设置的月目标，请设置", "error");
					$scope.flag = false;
					return;
				}
			})
			if($scope.flag == false) {
				$scope.shopPlanLists[index].edit = false;
			} else {
				$scope.shopPlanLists[index].edit = true;
				$scope.shopId = $scope.shopPlanLists[index].shopId;
				$scope.planAmounta = $scope.shopPlanLists[index].planAmount;
			}
		}
		/*点击取消编辑按钮*/
	$scope.cancelEdit = function(index) {
			$scope.shopPlanLists[index].edit = false;
			$scope.flag = true;
			$scope.shopPlanLists[index].planAmount = $scope.planAmounta;
		}
		/*点击保存按钮单独对某个店铺设置月目标*/
	$scope.saveShopPlan = function(index) {
		var jsonObject = {
			planDate: ($scope.year + "") + $scope.month,
			shopId: $scope.shopPlanLists[index].shopId,
			planAmount: $scope.shopPlanLists[index].planAmount,
			planType: "M",
			planId: $scope.shopPlanLists[index].planId
		}
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'shopPlan/saveShopPlan',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.searchShopPlan();
			} else {
				alertmsg(data.msg, "error");
			}
		})
	};
	/*点击统一设置月目标按钮*/
	$scope.showDialog = false;
	$scope.toSetAllPlan = function (){
		$scope.showDialog = true;
	}
	$scope.cancelSetTogether=function(){
		$scope.showDialog = false;
	}
	/*统一设置月目标*/
	$scope.setMonthPlanTogether = function() {
		if($scope.togetherPlanAmount==null){
			alertmsg("请输入统一设置的月目标","error");
			return;
		}
		var jsonObject = {
			planDate: $scope.year+$scope.month,
			planAmount: $scope.togetherPlanAmount+""
		}
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'shopPlan/addShopBatchPlan',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.searchShopPlan();
				$scope.showDialog = false;
			} else {
				alertmsg(data.msg, "error");
			}
		})

	}

});