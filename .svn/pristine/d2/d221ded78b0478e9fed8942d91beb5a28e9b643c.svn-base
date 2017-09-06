qyApp.controller("taobaoOrderMgtController", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	var userInfo = JSON.parse(localStorage.userInfo);
	$scope.orgId = userInfo.orgId;
	$scope.showDialog = false; //同步弹框
	$scope.orderTbListDia = true; //订单列表
	$scope.showOrderDetil = false; //订单详情
	$scope.orderSource = "";
	$scope.orderStatus = "";
	$scope.outOrderId = "";
	$scope.memberName = "";
	$scope.shopOrgId = "";
	$scope.queryStartTime = "";
	$scope.queryEndTime = "";
	$scope.downShopOrgId = "";
	$scope.downOrderStatus = "";
	$scope.nub = "0";
	$scope.size = "10";
	$(".orderTbLoadingInner").css("width", 0).addClass("progressing");

	//获取商户下面的店铺
	$scope.getMerchantShop = function() {
		var jsonObject = {
			"orgId": userInfo.orgId,
			"shopProp": "3"
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
				$scope.shopList = data.data.shopList;
			} else {
				alertmsg("获取店铺失败", "error");
			}
		})
	}
	$scope.getMerchantShop();

	$scope.getTaoBaoOrder = function() {
		$scope.queryStartTime = $("#start").val();
		$scope.queryEndTime = $("#end").val();
		var jsonObject = {
			"orgId": $scope.shopOrgId,
			"shopProp": "3",
			"startTime": $scope.queryStartTime,
			"endTime": $scope.queryEndTime,
			"orderStatus": $scope.orderStatus,
			"outOrderId": $scope.outOrderId,
			"nub": $scope.nub,
			"size": $scope.size
		};
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'order/getTaoBaoOrderList',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.orders = data.data.orders;
			} else {
				alertmsg("获取店铺失败", "error");
			}
		})
	}

	$scope.search = function() {
		$scope.queryStartTime = $("#start").val();
		$scope.queryEndTime = $("#end").val();
		$scope.getOrderInfoTB();
	}

	//显示弹框
	$scope.synchronizationOrder = function() {
			$scope.showDialog = true;
			$(".synchronizationBox").center();
			$(".maskBg,.synchronizationBox").show();
		}
		//关闭弹框
	$scope.closeDialog = function() {
			$scope.showDialog = false;
			$(".maskBg").hide();
		}
		//订单选项卡
	$scope.type = '1';
	$scope.orderClassify = function(type) {
			if(type == '1') {
				$scope.type = '1';
				$scope.orderStatus = "";
			}
			if(type == '2') {
				$scope.type = '2';
				$scope.orderStatus = "11";
			}
			if(type == '3') {
				$scope.type = '3';
				$scope.orderStatus = "12";
			}
			if(type == '4') {
				$scope.type = '4';
				$scope.orderStatus = "13";
			}
			if(type == '5') {
				$scope.type = '5';
				$scope.orderStatus = "14";
			}
			$scope.getOrderInfoTB();
		}
		//跳转到订单详情
	$scope.showOrderDetil = false;
	$scope.orderDetil = function(order) {
		$scope.orderDetail = order;
		$scope.orderTbListDia = false;
		$scope.showOrderDetil = true;

		var jsonObject1 = {
			orgId: order.orgId,
			orderSource: "0",
			outOrderId: order.outOrderId,
			outlogiticsId: order.logiticNum,
		};
		jsonObject1 = JSON.stringify(jsonObject1);
		$http({
			method: 'post',
			url: pos + 'alibabaOrder/getLogiticTraceInfo',
			params: {
				keyParams: getKeyParams(jsonObject1, keyParams),
				jsonObject: getJsonObject(jsonObject1)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.logiticTraceList = data.data.logiticTraceList;
			} else {
				alertmsg(data.msg, "error")
			}
		});
	}
	$scope.progressVal = 0;

	//订单下载
	$scope.downloadOrder = function() {
			$scope.progressVal = 0;
			$scope.createStartTime = $("#start1").val() + " 00:00:00";
			$scope.createEndTime = $("#end1").val() + " 23:59:59";
			if($scope.downShopOrgId == "") {
				$("#showError").show();
				return false;
			}
			$("#showError").hide();
			var jsonObject1 = {
				orgId: $scope.downShopOrgId,
				startTime: $scope.createStartTime,
				endTime: $scope.createEndTime,
				status: $scope.downOrderStatus,
			};
			jsonObject1 = JSON.stringify(jsonObject1);
			$http({
				method: 'post',
				url: pos + 'alitaobao/addTaoBaoOrder',
				async: true,
				params: {
					keyParams: getKeyParams(jsonObject1, keyParams),
					jsonObject: getJsonObject(jsonObject1)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.showDialog = false;
					$(".maskBg").hide();
					$(".orderTbLoadingInner").css("width", 0).addClass("progressing");
					$scope.progressVal = 0;
					alertmsg("同步完成");
					$scope.getOrderInfoTB();
				} else {
					//				clearInterval(timer); 
					alertmsg(data.msg, "error");
				}
			});
			//		var timer = setInterval(function(){ 
			//			var jsonObject2 = {
			//				orgId:$scope.orgId,
			//			};
			//			jsonObject2 = JSON.stringify(jsonObject2);
			//			$http({
			//				method: 'post',
			//				url: pos + 'alibabaOrder/getDownloadStatus',
			//				params: {
			//					keyParams: getKeyParams(jsonObject2, keyParams),
			//					jsonObject: getJsonObject(jsonObject2)
			//				}
			//			}).success(function(data, stauts, headers, config) {
			//				if(data.code == "1") {
			//					var task = data.data.task;
			//					if(task == "finish"){
			//						clearInterval(timer); 
			//					}else{
			//						//进度条加载
			//						var taskAry = task.split(",");
			//						var width_p=376;
			//						var width_s=width_p*(taskAry[0]/taskAry[1]);
			//						$(".orderTbLoadingInner").css("width",width_s).addClass("progressing");
			//						$scope.progressVal = (taskAry[0]/taskAry[1]*100).toFixed(2);
			//					}
			//				} else {
			//					clearInterval(timer); 
			//					alertmsg(data.msg, "error");
			//				}
			//			});
			//		}, 1000); 
		}
		//返回到订单列表
	$scope.goBack = function() {
		$scope.showOrderDetil = false;
		$scope.orderTbListDia = true;
	}

	var start = {
		elem: '#start',
		format: 'YYYY-MM-DD',
		max: '2099-06-16', //最大日期
		//		istime: true,
		istoday: false,
		choose: function(datas) {
			$scope.activeTime = datas;
			end.min = datas; //开始日选好后，重置结束日的最小日期
			end.start = datas //将结束日的初始值设定为开始日
		}
	};
	var end = {
		elem: '#end',
		format: 'YYYY-MM-DD',
		max: '2099-06-16',
		//		istime: true,
		istoday: false,
		choose: function(datas) {
			$scope.lapsedTime = datas;
			start.max = datas; //结束日选好后，重置开始日的最大日期
		}
	};
	setTimeout(function() {
		laydate(start);
		laydate(end);
	}, 1000)

	var start1 = {
		elem: '#start1',
		format: 'YYYY-MM-DD',
		max: '2099-06-16', //最大日期
		//		istime: true,
		istoday: false,
		choose: function(datas) {
			$scope.activeTime = datas;
			end1.min = datas; //开始日选好后，重置结束日的最小日期
			end1.start = datas //将结束日的初始值设定为开始日
		}
	};
	var end1 = {
		elem: '#end1',
		format: 'YYYY-MM-DD',
		max: '2099-06-16',
		//		istime: true,
		istoday: false,
		choose: function(datas) {
			$scope.lapsedTime = datas;
			start1.max = datas; //结束日选好后，重置开始日的最大日期
		}
	};
	setTimeout(function() {
		laydate(start1);
		laydate(end1);
	}, 1000)

	/*获取物流公司的接口*/
	$scope.logitic = "";
	$scope.getlogisticsCompany = function() {
		var jsonObject = {
			logiticCompanyIds: "",
			source: "2"
		}
		jsonObject = angular.toJson(jsonObject)
		$http({
			method: 'post',
			url: pos + 'logitic/getLogiticCompany',
			async: true,
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.logiticMaps = [{
					code: "",
					logiticCompanyId: "",
					logiticCompanyName: "请选择",
					logiticDescribe: "",
					logo: ""
				}].concat(data.data.logiticMaps);
			} else {
				//				clearInterval(timer); 
				alertmsg(data.msg, "error");
			}
		});

	}
	$scope.getlogisticsCompany();
	/*点击发货按钮*/
	$scope.postProduct = "hide";
	$scope.topostProduct = function(orderInfo) {
			$scope.outOrderId = orderInfo.outOrderId;
			$scope.orderOrgId = orderInfo.orgId;
			$scope.orderId = orderInfo.orderId;
			$scope.postProduct = "show";
		}
		/*在发货弹窗点击发货按钮*/
	$scope.surepostProduct = function() {
		angular.forEach($scope.logiticMaps, function(ele, index) {
			if(ele.logiticCompanyId == $scope.logitic) {
				$scope.selectLogitic = ele;
			}
		})
		var jsonObject = {
			orgId: $scope.orderOrgId,
			tid: $scope.outOrderId,
			orderId:$scope.orderId,
			logiticCompanyId: $scope.selectLogitic.logiticCompanyId,
			logiticCompanyName: $scope.selectLogitic.logiticCompanyName,
			logiticNum: $scope.trackingNumber,
			companyCode: $scope.selectLogitic.code
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
//			url: 'http://10.0.17.224:8080/pos-api/logitic/logisticsOfflineSend',
			url: pos + 'logitic/logisticsOfflineSend',
//9890432448613
			async: true,
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				alertmsg("发货成功");
				$scope.getTaoBaoOrder();
				$scope.postProduct = "hide";
			} else {
				//				clearInterval(timer); 
				alertmsg(data.msg, "error");
			}
		})
	}
	/*关闭弹窗方法*/
	$scope.closeDia = function(){
		$scope.postProduct = "hide";
	}

});