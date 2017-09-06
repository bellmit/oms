//qyApp.directive('constractSearch', function() {
//	return {
//		restrict: "EACM",
//		replace: true,
//		require: '?ngModel',
//		templateUrl: "../tb/saleMgt/saleManage/saleModel/saleSearch.html",
//		transclude: true
//	}
//});
qyApp.controller("saleManageController", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	/*tab选项卡*/
	var from=0;
	var pageSize=15;
	var total=0;
	$scope.from = "0";
	$scope.pageSize = "10";
	$scope.contractStatus='3';
	$scope.productTab='1';
	//查询合同列表
	$scope.getContracts =function(){
		$scope.param=JSON.parse($('#search').serializeJson());
		if($scope.param.inputId){
			$scope.param.contractId=$scope.param.inputId.substring(6);
		}		
		$scope.param.contractStatus=$scope.contractStatus;
		$scope.param.roleId=JSON.parse(localStorage.userInfo).roleId;
		$scope.param.departId=JSON.parse(localStorage.userInfo).departId;
		//$scope.param=jsonObject.roleId;
		$scope.jsonPage={"nub":""+from+"","size":""+pageSize+""};
		$.extend($scope.jsonPage,$scope.param);
		$scope.jsonObject=JSON.stringify($scope.jsonPage);
		console.log($scope.jsonObject)
		$http({
			method: 'post',
			url: pos + 'contract/getContract',
			params: {
				keyParams: getKeyParams($scope.jsonObject, keyParams),
				jsonObject: getJsonObject($scope.jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				if(data.data.contractList){
					$scope.contractList = data.data.contractList;
					console.log($scope.contractList)
					$scope.createPagePlugin(data.data.count,pageSize);
				}
			} else {
				alertmsg("查询失败", "error")
			}
		});
	}
	$scope.getContracts();
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
	//	$scope.url = 'orgManage/getCustomerList';
	//	$scope.baseUrl = stat;
	$scope.shiftProductTab = function(index,contractStatus) {
			$scope.contractNum = "";
			$scope.productTab = index;
			$scope.contractStatus=contractStatus;
			console.log($scope.contractStatus);
			$scope.saler = "";
			$scope.contractType = "";
			$('.selectpicker').selectpicker('refresh');
			var roleId=JSON.parse(localStorage.userInfo).roleId;
			$scope.getContracts();
		}
		/*tab选项卡*/
	
	/*查询地区数据*/
	$scope.loadAreaList = function() {
		var jsonObject = {};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'shop/getProvinceBypOrgId',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.provinceLists = data.data.provinceList;
				$scope.firstObj = {
					"province": "全部"
				}
				$scope.provinceLists.unshift($scope.firstObj);
			} else {
				alertmsg(data.msg, "error")
			}
		});
	}
	//$scope.loadAreaList();

	/*查询地区数据*/
	/*查询*/
	/*查询全部*/
	$scope.getContractList = function() {
		var jsonObject = {
			"province": "",
			"pOrgId": $scope.orgId,
			"orgId": "",
			"userId": "",
			"contractNum": "",
			"contractStatus": $scope.contractStatus,
			"contractType": "",
			/*(0 服务中 1 已到期)*/
			"nub": $scope.from,
			"size": $scope.pageSize
		};
		jsonObject = angular.toJson(jsonObject);
		$scope.loadContractList(jsonObject, "$scope.createPagePlugin($scope.count, $scope.pageSize,'paging1')");
	}
	$scope.loadContractList = function(jsonObject, createPage) {
			$http({
				method: 'post',
				url: pos + 'contract/getContract',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					if(data.data.contractList) {
						$scope.contractLists = data.data.contractList;
						$scope.contractCount = data.data.contractCount;
						$scope.shopCount = data.data.shopCount;
						$scope.count = data.data.count;
						angular.forEach($scope.contractLists, function(ele, index) {
							if($scope.daysBetween($scope.data, ele.enddate) <= 0) {
								ele.status = "服务中";
							} else {
								ele.status = "已到期";
							}
						});
						if($scope.count > 10) {
							eval(createPage);
						} else {
							$("#paging1").empty();
						}
					}
				} else {
					alertmsg(data.msg, "error")
				}
			});
		}
		//		$scope.getContractList();
		/*点击查询按钮*/
		/*加载商户列表*/
	$scope.searchData = function() {
			if($scope.province == "全部") {
				$scope.provincea = "";
			}else{
				$scope.provincea = $scope.province;
			}
			$scope.getContracts();
		}
		/*点击查询按钮*/
		/*查询*/

	
	$scope.createPagePlugin = function(total, pageSize) {
		$("#paging1").empty();
		paging = pagePlugin.createPaging({
			renderTo: 'paging1',
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			$scope.page(from - 1, pageSize);
		}
	};
	//$scope.param="";
	$scope.page = function(from, pageSize) {
		$scope.jsonPage={"nub":""+from+"","size":""+pageSize+""};
		$.extend($scope.jsonPage,$scope.param);
		$scope.jsonObject=JSON.stringify($scope.jsonPage);
		//$scope.froma = from;
		$http({
			method: 'post',
			url: pos + 'contract/getContract',
			params: {
				keyParams: getKeyParams($scope.jsonObject, keyParams),
				jsonObject: getJsonObject($scope.jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				if(data.data.contractList){
					$scope.contractList = data.data.contractList;
				}
			} else {
				alertmsg("查询失败", "error")
			}
		});
	}
		/*选择商户的代码*/
		/*点击添加按钮*/
	$scope.pageInfo = {};
	$scope.rootArr = [];
	$scope.addData = function(rootName, rootGoname, obj, productTab) {
			$scope.pageInfo = obj;
			$scope.rootPage = {
				level: 0,
				name: rootName
			};
			$scope.rootArr.push($scope.rootPage)
			$stateParams.uiParams = {
				orgInfo: $scope.pageInfo,
				source: $scope.rootArr,
				type: "1",
				productTab: productTab
			};
			$state.go(rootGoname, {
				uiParams: $stateParams.uiParams
			})
		}
		/*点击添加按钮*/
		/*查看合同详情*/
	$scope.contractInfo = function(obj) {
			$scope.pageInfo = obj;
			$scope.rootPage = {
				level: 0,
				name: "saleManage"
			};
			$scope.rootArr.push($scope.rootPage)
			$stateParams.uiParams = {
				orgInfo: $scope.pageInfo,
				source: $scope.rootArr,
				type: "1",
				productTab: "2"
			};
			$state.go("contractInfo", {
				uiParams: $stateParams.uiParams
			})

		}
		/*查看客户详情*/
	$scope.clientInfo = function(obj) {
		$state.go("orgInfo", {
				uiParams: $stateParams.uiParams
			})
	}
	

	//路由跳转的时候type为1,不是路由跳转的时候为0
//	$scope.type = "0";
	//判读是否路由跳转
//	if($stateParams.uiParams.tabtype!=undefined) {
//		$scope.type = "1";
//		$scope.shiftProductTab($stateParams.uiParams.tabtype);
//	}
	
	//跳转回工作台
	$scope.gobWorkBench = function() {
		//跳转
		$state.go("bWorkBench", {});		
	}
	

});