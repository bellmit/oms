qyApp.controller("orgInfoController", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	$scope.pageInfo = $stateParams.uiParams.orgInfo;
	//查询合同列表
	var from=0;
	var pageSize=15;
//	$scope.orgId = $scope.pageInfo.orgId;
//	$scope.agentId = angular.fromJson(localStorage.userInfo).orgId;
	/*获取当前时间*/
	var myDate = new Date();
	$scope.data = myDate.getFullYear() + "-" + (1 + myDate.getMonth()) + "-" + myDate.getDate();
	/*计算合同结束日期跟当前日期的差值*/
	$scope.daysBetween = function(DateOne, DateTwo) {
		var OneMonth = DateOne.substring(5, DateOne.lastIndexOf('-'));
		var OneDay = DateOne.substring(DateOne.length, DateOne.lastIndexOf('-') + 1);
		var OneYear = DateOne.substring(0, DateOne.indexOf('-'));
		var TwoMonth = DateTwo.substring(5, DateTwo.lastIndexOf('-'));
		var TwoDay = DateTwo.substring(DateTwo.length, DateTwo.lastIndexOf('-') + 1);
		var TwoYear = DateTwo.substring(0, DateTwo.indexOf('-'));

		var cha = ((Date.parse(OneMonth + '/' + OneDay + '/' + OneYear) - Date.parse(TwoMonth + '/' + TwoDay + '/' + TwoYear)) / 86400000);
		return cha;
	};
	/*计算合同结束日期跟当前日期的差值*/
	if($stateParams.uiParams.type == "1") {
		$stateParams.uiParams.source.push({
			name: "orgInfo",
			level: "1"
		})
	} 
//	else if($stateParams.uiParams.type == "2") {
//		$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1)
//	}
	$scope.goRoute = function(routeName, goPageName, obj, type) {
		$stateParams.uiParams.orgInfo =$.extend(obj,$stateParams.uiParams.orgInfo);
		$stateParams.uiParams.type = type
		$state.go(goPageName, {
			uiParams: $stateParams.uiParams
		})
	}
	$scope.gobackByRoute = function() {
		$stateParams.uiParams.type="1";
		$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
		$state.go($stateParams.uiParams.source[$stateParams.uiParams.source.length - 1].name, {
			uiParams: $stateParams.uiParams
		})
	};
	/*查看该商户的合同列表*/
	$scope.contractInfo=function(){
		$state.go('contractInfo', {
			uiParams: $stateParams.uiParams
		})
	}
	/*查询该商户的合同列表*/
	$scope.loadOrgContract = function() {
		var roleId=JSON.parse(localStorage.userInfo).roleId;
		var jsonObject={
			orgId:$scope.pageInfo.orgId,
			roleId:roleId,
			nub:from,
			size:pageSize
		};
		jsonObject = angular.toJson(jsonObject);
		console.log(jsonObject);
		$http({
			method: 'post',
			url: pos + "contract/getContract",
			//			url: "http://10.0.17.224:8080"+ $scope.url,
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			console.log(data)
			if(data.code == "1") {
				$scope.contractList= data.data.contractList;
				$scope.contractCount = data.data.contractCount;
				$scope.shopCount = data.data.shopCount;
				$scope.count = data.data.count;
				$scope.contractAmount=0;
				$.each($scope.contractList,function(i,n){
					$scope.contractAmount=Number($scope.contractAmount)+Number(n.totalprice);
				})
//				$scope.createPagePlugin(data.data.count,pageSize);
			} else {
				alertmsg(data.msg, "error");
			}
		})

	}
	$scope.loadOrgContract();
	/*查询该商户的合同列表*/

});