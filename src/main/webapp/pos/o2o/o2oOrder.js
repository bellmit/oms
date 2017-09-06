qyApp.controller("o2oOrderController", function($scope, $http) {
	$scope.orderList = "show";
	$scope.ordersDet = "hide";
	//	在订单页面点击子订单详情
	$scope.packageInfo = function(orderId, packageNo,discount) {
		angular.forEach($scope.orderListsUsed, function(ele) {
			if(ele.order.orderId == orderId) {
				angular.forEach(ele.packages, function(elea) {
					if(elea.package.packageNo == packageNo) {
						$scope.packageDetail = elea;
					}
				})
				$scope.packageTime = ele.order.orderTime;
				$scope.orderDetail = ele;
			}
		})
		$scope.discount = discount;
		$scope.orderIda = orderId;
		$scope.packageNoa = packageNo;
		$scope.orderList = "hide";
		$scope.ordersDet = "show";
		$scope.totalAmount = 0;
		$scope.totalPriceAmount = 0;
		angular.forEach($scope.packageDetail.orderDetail, function(ele) {
			$scope.totalAmount += angular.fromJson(ele.amount);
			$scope.totalPriceAmount += angular.fromJson(ele.totalPrice);
		})
	}
		//	点击返回按钮
	$scope.callback = function() {
		$scope.orderList = "show";
		$scope.ordersDet = "hide";
	}
		//	在O2O订单页面点击查询按钮
	$scope.pageSize = "5";
	$scope.from = "0";
	$scope.count = "0";
	$scope.searchOrder = function(type) {
		$scope.searchType = type;
		$scope.loadO2OOrderListAjax($scope.loadJsonObject($scope.searchType));
	}
		//	加载020订单的AJAX数据请求
		//	加载订单详情的AJAX请求
	$scope.loadO2OOrderListAjax = function(jsonObject) {
		$http({
			method: 'post',
			url: pos + 'order/getorderForO2O',
			params: {
				keyParams: getKeyParams(
					jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				if(data.data) {
					$scope.orderLists = data.data.orderList;
					var pagsizea;
					for (var i = 0; i < $scope.orderLists.length; i++) {
						pagsizea = $scope.orderLists[i].packages.length;
						$scope.orderLists[i].packages.pagsize = pagsizea;
					}
					$scope.orderListsUsed = $scope.orderLists;
					$scope.count = data.data.count;
					$scope.createPagePlugin($scope.count, $scope.pageSize);
				} else {
					$scope.orderLists = [];
					$scope.orderListsUsed = [];
					$scope.count=0;
//					alertmsg("无满足您需要的订单数据", "error")
				}
			} else {
				alertmsg(data.msg, "error")
			}
		})
	}
		//	加载门店列表下拉框
	$scope.loadShop = function() {
		var keyParam = JSON.parse(keyParams);
		var userInfo = JSON.parse(localStorage.userInfo);
		var orgType = userInfo.orgType;
		if(orgType == '4'){
			$scope.orgLists = [];
			var orgList = {
					orgId:userInfo.orgId,
					shopName:userInfo.orgName
			}
			$scope.orgLists.push(orgList);
		}else{
			var jsonObject = {
					shopNum: "",
					shopName: "",
					orgId: keyParam.orgId,
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
					if(data.code == "1") {
						$scope.orgLists = data.data.shopList;
					} else {
						alertmsg(data.msg, "error")
					}
				})
		}
	}
	$scope.loadShop();
	$scope.loadJsonObject = function(type) {
		var jsonObjecta = $("#searchOrderForm").serializeJson();
		jsonObjecta = angular.fromJson(jsonObjecta);
		var startTimeArr = jsonObjecta.startTime.split("-");
		var startTimeString = "";
		angular.forEach(startTimeArr, function(ele) {
			startTimeString += ele;
		})
		var endTimeArr = jsonObjecta.endTime.split("-");
		var endTimeString = "";
		angular.forEach(endTimeArr, function(ele) {
			endTimeString += ele;
		})
		startTime = startTimeString
		endTime = endTimeString
		if(type == "filter") {
			var jsonObject = {
				"orderId": "",
				"startTime": startTime,
				"endTime": endTime,
				"orgId": jsonObjecta.orgId,
				"wfUser": "",
				"status": jsonObjecta.status,
				"nub": $scope.from,
				"size": $scope.pageSize
			}
		} else if(type == "orderId") {
			var jsonObject = {
				"orderId": jsonObjecta.orderId,
				"startTime": "",
				"endTime": "",
				"orgId": "",
				"wfUser": "",
				"status": "",
				"nub": $scope.from,
				"size": $scope.pageSize
			}
		}
		jsonObject = angular.toJson(jsonObject);
		$scope.reloadJsonObject = jsonObject;
		return $scope.reloadJsonObject;
	}
	var start = {
		elem: '#start',
		format: 'YYYY-MM-DD',
		max: '2099-06-16', //最大日期
		istime: true,
		istoday: false,
		choose: function(datas) {
			end.min = datas; //开始日选好后，重置结束日的最小日期
			end.start = datas //将结束日的初始值设定为开始日
		}
	};
	var end = {
		elem: '#end',
		format: 'YYYY-MM-DD',
		max: '2099-06-16',
		istime: true,
		istoday: false,
		choose: function(datas) {
			start.max = datas; //结束日选好后，重置开始日的最大日期
		}
	};
	laydate(start);
	laydate(end);
	//  分页
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
		var jsonObjecta = $("#searchOrderForm").serializeJson();
		jsonObjecta = angular.fromJson(jsonObjecta);
		var startTimeArr = jsonObjecta.startTime.split("-");
		var startTimeString = "";
		angular.forEach(startTimeArr, function(ele) {
			startTimeString += ele;
		})
		var endTimeArr = jsonObjecta.endTime.split("-");
		var endTimeString = "";
		angular.forEach(endTimeArr, function(ele) {
			endTimeString += ele;
		})
		startTime = startTimeString
		endTime = endTimeString
		var jsonObject = {
			"orderId": "",
			"startTime": startTime,
			"endTime": endTime,
			"orgId": jsonObjecta.orgId,
			"wfUser": "",
			"status": jsonObjecta.status,
			"nub": from,
			"size": pageSize
		}
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'order/getorderForO2O',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.orderLists = data.data.orderList;
				$scope.orderListsUsed = $scope.orderLists;
			} else {
				alertmsg("获取订单失败", "error");
			}
		})
	}
});