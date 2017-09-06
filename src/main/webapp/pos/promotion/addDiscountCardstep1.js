qyApp.controller('addDiscountCardstep1Controller', ['$scope', '$http', '$compile', 'Upload', '$sce', '$state', '$stateParams', function($scope, $http, $compile, Upload, $sce, $state, $stateParams, $routeParams) {
	$scope.$on('$viewContentLoaded', function() {
		if($scope.disCountName == '' || $scope.disCountName == undefined) {
			$scope.disCountName = '优惠券';
		}
		if($scope.couponModality == '' || $scope.couponModality == undefined) {
			$scope.couponModality = '1';
			$scope.showDiscountType = '1';
		}
		if($scope.amount == '' || $scope.amount == undefined) {
			$scope.amount = '1';
			$scope.isLimitshow = '1'; /*默认为固定额度*/
		}
//		if($scope.fullAmounta == '' || $scope.fullAmounta == undefined) {
//			$scope.fullAmounta = '500';
//		}
		if($scope.superposition == '' || $scope.superposition == undefined) {
			$scope.superposition = 'n';
		}
		if($scope.couponType == '' || $scope.couponType == undefined) {
			$scope.couponType = '0';
		}
		if($scope.autoProviding == '' || $scope.autoProviding == undefined) {
			$scope.autoProviding = 'n';
		}
		if($scope.limitCollar == '' || $scope.limitCollar == undefined) {
			$scope.limitCollar = '1';
		}

	});

	//监听输入格式
	$scope.showmess1 = '0';/*满额文字提示*/
	$scope.showmess2 = '0';/*固定额度文字提示*/
	$scope.showmess3 = '0';/*随机额度文字提示*/
	$scope.showmess4 = '0';/*会员限领提示*/
	$scope.showmess7 = '0';/*折扣文字提示*/
	$scope.isNum = function(type) {
		var reg = /^(0|[1-9][0-9]*)$/;
//		if(type == '1') {
//			if(!reg.test($scope.fullAmounta) && $scope.fullAmounta != '') {
//				$scope.showmess1 = '1';
//			} else {
//				$scope.showmess1 = '0';
//			}
//		}
		if(type == '2') {
			if ($scope.fixedLimit == undefined) {
				$scope.fixedLimit = '';
			}
			if(!reg.test($scope.fixedLimit) && $scope.fixedLimit != '') {
				$scope.showmess2 = '1';
			} else {
				$scope.showmess2 = '0';
			}
		}
		if(type == '3') {
			if ($scope.randomMIn == undefined) {
				$scope.randomMIn = '';
			}
			if ($scope.randomMax == undefined) {
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
				$scope.showmess7 = '1';
			}else{
				if(($scope.discount<=0)||($scope.discount>10)){
					$scope.showmess7 = '1';
				}else{
					$scope.showmess7 = '0';
				}
			}
		}

	}

	//选择卡券形式
	$scope.changeType = function() {
			if($scope.couponModality == '1') {
				$scope.showDiscountType = '1';
			} else {
				$scope.showDiscountType = '0';
			}
			return $scope.showDiscountType;
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
	//返回列表
	$scope.goBack = function() {
		$state.go("disCountCard", {
			uiParams: ""
		});

	}
		//跳转到step2
	$scope.nextStep = function() {
			if(($scope.activeTime != undefined&& $scope.activeTime != undefined)&&($scope.fullAmounta != undefined||$scope.notFullAmount!=undefined)&&($scope.fixedLimit != undefined||$scope.randomMIn != undefined ||$scope.randomMax != undefined || $scope.discount != undefined)) {
				var params = $("#step1").serializeJson();
				if($scope.notFullAmount) {
					$scope.fullAmount = '0';
				} else {
					$scope.fullAmount = $scope.fullAmounta;
				}
				//转化成json格式
				params = JSON.parse(params);
				params.fullAmount = $scope.fullAmount;
				params.isLimitshow = $scope.isLimitshow;
				params.showDiscountType = $scope.showDiscountType;
				$state.go("addDiscountCardstep2", {
					uiParams: params
				});
			} else {
				if($scope.couponModality == '1') {
					if($scope.amount=='1'){
						if($scope.fixedLimit == "" || $scope.fixedLimit == undefined) {
							$scope.showmess2='1';
						}
					}else{
						if($scope.randomMIn == "" || $scope.randomMIn == undefined||$scope.randomMax == "" || $scope.randomMax == undefined) {
							$scope.showmess3='1';
						}
					}

				} 
				if($scope.couponModality=='0'){
					if($scope.discount == "" || $scope.discount == undefined) {
						$scope.showmess4='1';
					}

				}
				if($scope.activeTime == '' || $scope.activeTime == undefined||$scope.lapsedTime == '' || $scope.lapsedTime == undefined) {
						$scope.showmess5='1';
				}
				if(($scope.fullAmounta==''||$scope.fullAmounta == undefined)&&$scope.notFullAmount==undefined){
						$scope.showmess6='1';
				}
			}
		}
		//回显
	$scope.discount = $stateParams.uiParams.discount;
	$scope.disCountName = $stateParams.uiParams.disCountName;
	$scope.amount = $stateParams.uiParams.amount;
	$scope.superposition = $stateParams.uiParams.superposition;
	$scope.activeTime = $stateParams.uiParams.activeTime;
	$scope.couponModality = $stateParams.uiParams.couponModality;
	$scope.fullAmounta = $stateParams.uiParams.fullAmount;
	$scope.notFullAmount = $stateParams.uiParams.notFullAmount;
	$scope.autoProviding = $stateParams.uiParams.autoProviding;
	$scope.couponType = $stateParams.uiParams.couponType;
	$scope.limitCollar = $stateParams.uiParams.limitCollar;
	$scope.lapsedTime = $stateParams.uiParams.lapsedTime;
	$scope.fixedLimit = $stateParams.uiParams.fixedLimit;
	$scope.randomMIn = $stateParams.uiParams.randomMIn;
	$scope.randomMax = $stateParams.uiParams.randomMax;
	$scope.isLimitshow = $stateParams.uiParams.isLimitshow;
	$scope.showDiscountType = $stateParams.uiParams.showDiscountType;

	var start = {
		elem: '#start',
		format: 'YYYY-MM-DD ',
		min: laydate.now(), //设定最小日期为当前日期
		max: '2099-06-16', //最大日期
		//		istime: true,
		istoday: false,
		choose: function(datas) {
			$scope.activeTime=datas;
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
			$scope.lapsedTime=datas;
			
			start.max = datas; //结束日选好后，重置开始日的最大日期
		}
	};
	setTimeout(function() {
		laydate(start);
		laydate(end);
	}, 1000)
}]);