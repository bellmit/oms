qyApp.controller('assessMgtController', function($scope, $http, $timeout, $compile, Upload) {
	$scope.userInfo = JSON.parse(localStorage.userInfo);
	var nub = 0;
	var size = 10;
	$scope.orgId = "";
	$scope.evaluateComment = "";
	$scope.startTime = "";
	$scope.endTime = "";
	$scope.evaluateContext = "";

	$timeout(function() {
		var start = {
			elem: '#startTime',
			format: 'YYYY-MM-DD',
			min: '1949-06-16', //设定最小日期为当前日期
			max: '2099-06-16', //最大日期
			istoday: false,
			choose: function(datas) {
				end.min = datas; //开始日选好后，重置结束日的最小日期
				//				end.start = datas //将结束日的初始值设定为开始日
			}
		};
		var end = {
			elem: '#endTime',
			format: 'YYYY-MM-DD',
			min: laydate.now(),
			max: '2099-06-16',
			istoday: false,
			choose: function(datas) {
				start.max = datas; //结束日选好后，重置开始日的最大日期
			}
		};
		laydate(start);
		laydate(end);
	}, 200);

	//查询微店
	$scope.getAllStore = function() {
		var jsonObject = {
			"orgId": $scope.userInfo.orgId,
			"shopProp": "2"
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
				alertmsg("获取微店失败", "error");
			}
		});
	};

	$scope.getAllStore();

	//获取评论统计数量
	$scope.getProEvaluateCalculate = function() {
		var jsonObject = {
			"pOrgId": $scope.userInfo.orgId
		};
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'evaluate/getProEvaluateCalculate',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.evaluate = data.data.evaluate;
				$scope.optEvaluateComment("")
			} else {
				alertmsg("获取评论统计数量失败", "error");
			}
		});
	}
	$scope.getProEvaluateCalculate();
	//切换选项卡
	$scope.evaluateComment = "";
	$scope.optEvaluateComment = function(evaluateComment) {
		$scope.evaluateComment = evaluateComment;

		//		switch($scope.evaluateComment) {
		//			case "":
		//				$scope.evaluateCount = $scope.evaluate.evaluateCount;
		//				break;
		//			case "0":
		//				$scope.evaluateCount = $scope.evaluate.good;
		//				break;
		//			case "1":
		//				$scope.evaluateCount = $scope.evaluate.midder;
		//				break;
		//			case "2":
		//				$scope.evaluateCount = $scope.evaluate.bad;
		//				break;
		//		};
		$scope.getEvaluate();
	}
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
			var jsonObject = {
				"pOrgId": $scope.userInfo.orgId,
				"orgId": $scope.orgId,
				"evaluateComment": $scope.evaluateComment,
				"startTime": $scope.startTime,
				"endTime": $scope.endTime,
				"nub": from,
				"size": pageSize
			};
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'evaluateDetail/getEvaluate',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					$scope.evaluateList = data.data.evaluateList;
					for(var i = 0; i < $scope.evaluateList.length; i++) {
						$scope.evaluateList[i].isReply = '0';
						for(var j = 0; j < $scope.evaluateList[i].evaluateDetail.length; j++) {
							if($scope.evaluateList[i].evaluateDetail[j].evaluateType == '2') {
								$scope.evaluateList[i].isReply = '1';
							}
						}
					}
					$(".wx-content").append($(".assess-dialog"))
					$(".assess-dialog").hide();
				} else {
					alertmsg("获取评价失败", "error");
				}
			});
		}
		//查询评论
	$scope.getEvaluate = function() {
		//		$scope.getProEvaluateCalculate();
		if($scope.orgId == null) {
			$scope.orgId = "";
		}
		$scope.startTime = $("#startTime").val();
		$scope.endTime = $("#endTime").val();
		var jsonObject = {
			"pOrgId": $scope.userInfo.orgId,
			"orgId": $scope.orgId,
			"evaluateComment": $scope.evaluateComment,
			"startTime": $scope.startTime,
			"endTime": $scope.endTime,
			"nub": nub,
			"size": size
		};
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'evaluateDetail/getEvaluate',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.evaluateList = data.data.evaluateList;
				console.log($scope.evaluateList)
				if($scope.evaluateList.length === 0) {
					$scope.evaluateCount = 0;
				} else if($scope.evaluateList.length > 0) {
					$scope.evaluateCount = $scope.evaluateList[0].count;
					if($scope.evaluateCount > size) {
						$scope.createPagePlugin($scope.evaluateCount, size);
					} else {
						$("#paging").empty();
					}
				}
				for(var i = 0; i < $scope.evaluateList.length; i++) {
					$scope.evaluateList[i].isReply = '0';
					for(var j = 0; j < $scope.evaluateList[i].evaluateDetail.length; j++) {
						if($scope.evaluateList[i].evaluateDetail[j].evaluateType == '2') {
							$scope.evaluateList[i].isReply = '1';
						}
					}
				}

				$(".wx-content").append($(".assess-dialog"))
				$(".assess-dialog").hide();
			} else {
				alertmsg("获取评价失败", "error");
			}
		});
	};

	//	$timeout(function() {
	//		$scope.getEvaluate();
	//	}, 100);

	//显示回复弹窗
	$scope.showReplyWindow = function(evaluateId, evaluateMemberId, event) {
			$(event.target).parents(".assessTd").append($(".assess-dialog"));
			$(".assess-dialog").css({
				"display": "block",
				"position": "absolute",
				"bottom": "-170px",
				"left": "0px",
				"z-index": 2
			})
			$scope.evaluateId = evaluateId;
			$scope.evaluateMemberId = evaluateMemberId;
		}
		/*关闭弹窗*/
	$scope.closeResponDialog = function() {
			$(event.target).parents(".assess-dialog").hide();
		}
		//回复
	$scope.reply = function() {
		var jsonObject = {
			"evaluateId": $scope.evaluateId,
			"evaluateMemberId": $scope.evaluateMemberId,
			"evaluateContext": $scope.evaluateContext,
			"evaluateType": "2",
			"answerUserId": $scope.userInfo.userId
		}
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'evaluateDetail/addEvaluateDetail',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.evaluateId = "";
				$scope.evaluateMemberId = "";
				$scope.evaluateContext = "";
				$scope.getEvaluate();
				$(".wx-content").append($(".assess-dialog"))
				$(".assess-dialog").hide();
			} else {
				alertmsg("获取评价失败", "error");
			}
		});
	}
})