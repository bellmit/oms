qyApp.controller('StorePerformanceKpiController', ['$scope', '$http', '$compile', 'Upload', function($scope, $http, $compile, Upload) {
	$scope.isEditTarget = true;
	$scope.planDate;
	 var planDate = {
        elem: '#planDate',
        format: 'YYYY/MM',
        //min: laydate.now(),
        max: '2099-06-12',
        istime: false, //是否开启时间选择
        isclear: false, //是否显示清空
        istoday: false,//是否显示今天
        choose: function(datas){ //选择日期完毕的回调
          $scope.getShopPlan();
        } 
    };
    laydate(planDate);   
 	   var mydate = new Date();
       var str = "" + mydate.getFullYear();
       (mydate.getMonth()+1 >9) ? str += '/'+(mydate.getMonth()+1) : str += '/0'+(mydate.getMonth()+1);
       $scope.primDate = str;
		 $scope.planDate= $('#planDate').val($scope.primDate);
 		//查询月目标
	$scope.getShopPlan = function(datas) {
       var mydate = new Date();
       var str = "" + mydate.getFullYear();
       (mydate.getMonth()+1 >9) ? str += '/'+(mydate.getMonth()+1) : str += '/0'+(mydate.getMonth()+1);
       $scope.primDate = str;
//  	var date=new Date();
//		 $scope.planDateY=date.getFullYear();
//		 $scope.planDate= datas;
		 $scope.planDate= $('#planDate').val();
		 $scope.planDate = $scope.planDate.replace(/\//,"");
         $scope.planDateY=$scope.planDate.substr(0,4);
         $scope.planDateM=$scope.planDate.substr(4,6);
			var jsonObject = "{\"planDate\":\"" + $scope.planDate + "\"}";
			$http({
				method: 'post',
				url: pos + "shopPlan/getShopPlanMonth",
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data) {
				if(data.code == "1") {
					$scope.shopPlan = data.data.shopPlanList;
				} else {
					alertmsg(data.msg, "error");
				}
			})
		}
	$scope.getShopPlan();
		//设置input的可编辑性 编辑月目标
	$scope.disable = true;
	$scope.editMonthTarget = function(obj) {
			obj.disable = false;
			obj.isEditTarget = false;
		}
		//保存月目标
	$scope.editSave = function(obj) {
			obj.disable = true;
			obj.isEditTarget = true;
			obj.planType = "M";
			obj.shopTarget.planAmount;
			var jsonObject = "{\"planDate\":\"" + $scope.planDate +
				"\",\"shopId\":\"" + obj.shopTarget.shopId +
				"\",\"planAmount\":\"" + obj.shopTarget.planAmount +
				"\",\"planType\":\"" + obj.planType +
				"\",\"planId\":\"" + obj.shopTarget.planId + "\"}";
			$http({
				method: 'post',
				url: pos + "shopPlan/saveShopPlan",
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data) {
				if(data.code == "1") {
					$scope.getShopPlan();
				} else {
					alertmsg(data.msg, "error");
				}
			})

		}
		//设置日目标
	$scope.planType = "M";

	$scope.setDayTarget = function(obj) {
		$scope.planAmount = obj.shopTarget.planAmount;
		if($scope.planAmount<1){
			alertmsg("请先设置月目标","error")
		}else{
		$scope.getShopPlan();
		$('.setDayTargetL,.maskBg').show();
		$scope.planType = "D";
		//$scope.showDayTarget = true;
		$scope.shopName = obj.shopTarget.shopName;
		$scope.planAmount = obj.shopTarget.planAmount;
		$scope.shopId = obj.shopTarget.shopId;
		var jsonObject = "{\"planDate\":\"" + $scope.planDate +
			"\",\"shopId\":\"" + obj.shopTarget.shopId + "\"}";
		$http({
			method: 'post',
			url: pos + "shopPlan/getShopPlanDate",
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == "1") {
				$scope.getDayAmount();
				$scope.shopDayPlan = data.data.shopPlanList;
				$scope.total = 0;
				for(i = 0; i < $scope.shopDayPlan.length; i++) {
					$scope.total += Number($scope.shopDayPlan[i].planAmount);
				}
				//变量日指标 日期
				$scope.dayTime = [];			
				for(var i=0;i<$scope.shopDayPlan.length;i++) {	
					$scope.dayT = $scope.shopDayPlan[i].planDate;
					$scope.dayTime.push($scope.dayT);
			       } 
			}else {
				alertmsg(data.msg, "error");
			}
			
		})
	}	
	}
	$scope.totalChange = function() {
			$scope.getDayAmount();
		}
		//获取计划金额
	$scope.getDayAmount = function() {
		$scope.dayAmount = [];
		$scope.data = $("#setMonthTarget").serializeJson();
		$scope.dayPlanAmount = JSON.parse($scope.data);
		//遍历计划销售 planAmount 
		$scope.total = 0;
		angular.forEach($scope.dayPlanAmount, function(data) {
			// 计划销售额总计
			$scope.total += Number(data);
			$scope.dayAmount.push(data);
		});
	}

	//获取日期
	$scope.getPlanDate = function() {
			//年月和日期拼接
			$scope.planDatea = [];
			$scope.datea;
			for(var i = 0; i < $scope.dayTime.length; i++) {
				if($scope.dayTime[i].length < 2) {
					$scope.datea = "0" + $scope.dayTime[i];
				} else {
					$scope.datea = $scope.dayTime[i];
				}
				$scope.plDate = $scope.planDate + $scope.datea;
				$scope.planDatea.push($scope.plDate);
			}
		}
		//保存日目标
	$scope.dayTargetSave = function() {
			$scope.planType = "D";
			$scope.getDayAmount();
			$scope.getPlanDate();
			//将日期和计划金额组成list
			$scope.shopPlanList = [];
			for(var i = 0; i < $scope.dayAmount.length; i++) {
				$scope.shopListObj = {};
				$scope.shopListObj.planAmount = $scope.dayAmount[i];
				$scope.shopListObj.planDate = $scope.planDatea[i];
				$scope.shopPlanList.push($scope.shopListObj)
			}
			$scope.shopPlanList = JSON.stringify($scope.shopPlanList);
			var jsonObject = "{\"shopPlanList\":" + $scope.shopPlanList + ",\"shopId\":\"" + $scope.shopId +
				"\",\"planType\":\"" + $scope.planType + "\"}";
			$http({
				method: 'post',
				url: pos + "shopPlan/addShopPlanDate",
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data) {
				if(data.code == "1") {
					$('.setDayTargetL,.maskBg').hide();
					$scope.total = 0;

				} else {
					alertmsg(data.msg, "error");
				}
			})

		}
		//日目标数据 重置
	$scope.resetDayTarget = function() {
		//     $scope.getDayAmount();
		var jsonObject = "{\"planDate\":\"" + $scope.planDate +
			"\",\"shopId\":\"" + $scope.shopId + "\"}";
		$http({
			method: 'post',
			url: pos + "shopPlan/getShopPlanDate",
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == "1") {
				$scope.getDayAmount();
				$scope.shopDayPlan = data.data.shopPlanList;

				$scope.total = 0;
				for(i = 0; i < $scope.shopDayPlan.length; i++) {
					$scope.total += Number($scope.shopDayPlan[i].planAmount);
				}
				//遍历日指标 日期
				angular.forEach($scope.shopDayPlan, function(data) {
					$scope.dayT = data.planDate;
					$scope.dayTime.push($scope.dayT);
				});

			} else {
				alertmsg(data.msg, "error");
			}
		})
	}

}]);