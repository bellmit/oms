qyApp.controller("myPagelistController", function($scope, $http, Upload, $route, $state, $stateParams) {
	//跳转添加页面
	$scope.goRoute = function(obj, type) {
		var infoObj = obj;
		var sourceArr = [{
			level: 0,
			name: "myPagelist"
		}];
		$stateParams.uiParams = {
			"source": sourceArr,
			"pageInfo": infoObj,
			"type": "go",
			"pageUseType": type
		};
		$state.go("pageAdd", {
			uiParams: $stateParams.uiParams
		});
	}
	/*查询页面列表*/
	/*加载模板函数*/
	$scope.loadPage = function(obj) {
			var jsonObject = JSON.stringify(obj);
			$http({
				method: 'post',
				url: pos + 'template/getTemplate',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.pageLists = data.data.templateList;
					$scope.pageCount = data.data.count;
					if($scope.pageCount > 10) {
						$scope.createPagePlugin($scope.pageCount, $scope.pageSize);
					} else {
						$("#pagingMem").empty();
					}
				} else {
					alertmsg(data.msg, "error");
				}
			})
		}
		/*加载模板函数*/
	$scope.pageSize = "10";
	$scope.from = "0";
	$scope.keyP = JSON.parse(keyParams);
	$scope.loadPageList = function() {
		if($scope.templateName == undefined) {
			$scope.templateName = "";
		}
		if($scope.merchantId == undefined) {
			$scope.merchantId = "";
		}
		var jsonObject = {
			orgId: $scope.keyP.orgId,
			userId: $scope.keyP.userId,
			templateId: "",
			title: $scope.templateName,
			templateType: "1",
			/*(0 详情页模板, 1 首页, 2 首页模板)*/
			merchantId: $scope.merchantId,
			nub: $scope.from,
			size: $scope.pageSize
		};
		$scope.loadPage(jsonObject);
	};
	$scope.loadPageList();
	/*查询页面列表*/
	/*分页代码*/
	$scope.createPagePlugin = function(total, pageSize) {
		$("#pagingMem").empty();
		paging = pagePlugin.createPaging({
			renderTo: 'pagingMem',
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			$scope.page(from - 1, pageSize);
		}
	};
	$scope.page = function(from, pageSize) {
			if($scope.templateName == undefined) {
				$scope.templateName = "";
			}
			if($scope.merchantId == undefined) {
				$scope.merchantId = "";
			}
			var jsonObject = {
				orgId: $scope.keyP.orgId,
				userId: $scope.keyP.userId,
				templateId: "",
				title: $scope.templateName,
				templateType: "1",
				/*(0 详情页模板, 1 首页, 2 首页模板)*/
				merchantId: $scope.merchantId,
				nub: from,
				size: pageSize
			};
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'template/getTemplate',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.pageLists = data.data.templateList;
					$scope.pageCount = data.data.count;
				} else {
					alertmsg(data.msg, "error");
				}
			})
		}
		/*分页代码*/
		/*选择商户的代码*/
		/*代运营增加店铺的页面代码orgManage/getOrgListTB*/
	$("#forwardaddForm .shopparent").on("click", function(e) {
		e.stopPropagation();
		$(".simulateSelect").toggle();
		$("#forwardaddForm .orgshopName").val("");
		$(window).on("click", function(event) {
			if(event.target.className != "shopparent" && event.target.className != "searchpart" && event.target.className != "fangda" && event.target.tagName != "INPUT" && event.target.className != "selectLi") {
				$(".simulateSelect").hide();
			}
		})
		if($(".simulateSelect").css("display") == "block") {
			var jsonObject = "{\"userId\":\"" + $scope.keyP.userId + "\",\"shopName\":\"" + "" + "\",\"nub\":\"" + "" + "\",\"size\":\"" + "" + "\"}";
			$scope.loadOrgList(jsonObject);
		}
	});
	//	加载下拉框的接口函数
	$scope.loadOrgList = function(jsonObject) {
		$http({
			method: 'post',
			url: stat + 'orgManage/getOrgListTB',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.orgManageLists = data.data.orgManageList;
			} else {
				//				alertmsg(data.msg, "error")
			}
		})
	}
	$scope.loadOrgList("{\"userId\":\"" + $scope.keyP.userId + "\",\"shopName\":\"" + "" + "\",\"nub\":\"" + "" + "\",\"size\":\"" + "" + "\"}")
	$("#forwardaddForm .selectePart").on("click", "li", function() {
		var thisHtml = $(this).html();
		var thisId = $(this).attr("data-Id");
		$scope.merchantId=thisId;
		$(this).parents(".simulateSelect").hide().prev().attr("data-selectId", thisId).find("span").html(thisHtml)
	});
	$scope.searchOrgList = function() {
			var jsonObject = "{\"userId\":\"" + $scope.keyP.userId + "\",\"shopName\":\"" + $scope.orgshopName + "\",\"nub\":\"" + "" + "\",\"size\":\"" + "" + "\"}";
			$scope.loadOrgList(jsonObject)
		}
		/*选择商户的代码*/
	/*点击页面删除按钮*/
	$scope.delePage=function(obj){
		var jsonObject={templateId:obj.templateId};
		jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'template/deleteTemplate',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.loadPageList();
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
	/*点击页面删除按钮*/
});