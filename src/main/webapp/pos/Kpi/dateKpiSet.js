qyApp.controller('dateKpiSetController', function($stateParams, $state, $scope, $http, $compile, Upload, $filter) {
	if($stateParams.uiParams.type == '0') { /*0是前进，1是后退到这个页面*/
		$stateParams.uiParams.routeArr.push({
			name: "dateKpiSet",
			level: "1"
		})
	}
	$scope.dataInfo = $stateParams.uiParams.routeParam;
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
	$scope.getShopDatePlan = function() {
		var jsonObject = {
			planDate: $scope.dataInfo.year + $scope.dataInfo.month,
			shopId: $scope.dataInfo.shopId
		}
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'shopPlan/getShopPlanDate',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.amount = 0;
				$scope.shopPlanLists = data.data.shopPlanList;
				angular.forEach($scope.shopPlanLists, function(ele, index) {
					ele.rate = ((Number(ele.planAmount)) / (Number($scope.dataInfo.planAmount)) * 100).toFixed(0);
					$scope.amount += Number(ele.planAmount);
				})

			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
	$scope.getShopDatePlan();
	/*编辑每天的店铺指标*/
	$scope.editDatePlan = function(index, planAmount) {
			$scope.shopPlanLists[index].planAmount = planAmount;
			$scope.amount = 0;
			angular.forEach($scope.shopPlanLists, function(ele, index) {
				ele.rate = ((Number(ele.planAmount)) / (Number($scope.dataInfo.planAmount)) * 100).toFixed(0);
				$scope.amount += Number(ele.planAmount);
				//				Number(ele.planDate)<10?ele.planDate=$scope.dataInfo.year+$scope.dataInfo.month+"0"+ele.planDate:ele.planDate=$scope.dataInfo.year+$scope.dataInfo.month+ele.planDate;
			})
//			if($scope.amount > Number($scope.dataInfo.planAmount)) {
//				alertmsg("您设置的指标总和超过了店铺月指标,请重新设置！", "error")
//			}
		}
		/*点击保存按钮*/
	$scope.saveDatePlan = function() {
		$scope.shopPlanLists_a = new Object();
		$scope.shopPlanLists_a = angular.copy($scope.shopPlanLists);
		angular.forEach($scope.shopPlanLists_a, function(ele, index) {
			if(Number(ele.planDate)<10){
				if(ele.planDate.indexOf("0")==0){
					ele.planDate=$scope.dataInfo.year+$scope.dataInfo.month+ele.planDate;
				}else{
					ele.planDate=$scope.dataInfo.year+$scope.dataInfo.month+"0"+ele.planDate
				}
			}else{
				ele.planDate=$scope.dataInfo.year+$scope.dataInfo.month+ele.planDate;
			}
		})
//		if($scope.amount > Number($scope.dataInfo.planAmount)) {
//			alertmsg("您设置的指标总和超过了店铺月指标,请重新设置！", "error");
//			return false;
//		}
		var jsonObject = {
			shopPlanList:$scope.shopPlanLists_a,
			shopId: $scope.dataInfo.shopId,
			planType: "D"
		}
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'shopPlan/addShopPlanDate',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.getShopDatePlan()
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
	/*点击平分日指标按钮*/
	$scope.dividePlanAmount = function () {
		$scope.dateAmount = $scope.shopPlanLists.length;
		$scope.datePlan=($scope.dataInfo.planAmount/$scope.dateAmount).toFixed(0);
		angular.forEach($scope.shopPlanLists,function(ele,index){
			ele.planAmount = $scope.datePlan;
			ele.rate = ((Number(ele.planAmount)) / (Number($scope.dataInfo.planAmount)) * 100).toFixed(0);
		})
			$scope.amount = $scope.dataInfo.planAmount ;
	}
	$scope.reset = function () {
		$scope.getShopDatePlan()
	}
});