qyApp.controller("customerMgtController", function($scope, $http, Upload, $compile, $route, $state, $stateParams){
	var from=0;
	var pageSize=15;
	var total=0;
	$scope.from = "0";
	$scope.pageSize = "10";
	//	$scope.searchType = "1"; /*查询商户*/
	$scope.orgId = (angular.fromJson(keyParams)).orgId;
//		$("#forwardaddForma .shopparent").on("click", function(e) {
//		e.stopPropagation();
//		$("#forwardaddForma .simulateSelect").toggle();
//		$("#forwardaddForma .orgshopName").val("");
//		$(window).on("click", function(event) {
//			if(event.target.className != "shopparent" && event.target.className != "searchpart" && event.target.className != "fangda" && event.target.tagName != "INPUT" && event.target.className != "selectLi") {
//				$("#forwardaddForma .simulateSelect").hide();
//			}
//		})
//		$scope.loadOrgLists();
//	});
//	$("#forwardaddForma .selectePart").on("click", "li", function() {
//		var thisHtml = $(this).html();
//		var thisId = $(this).attr("data-Id");
//		var thisContent = $(this).attr("data-html");
//		$(this).css({
//			"background-color": "#00afd4",
//			"color": "#ffffff",
//		})
//		.siblings().css({
//			"background-color": "#ffffff",
//			"color": "#666666",
//		}).end().parents(".simulateSelect").hide().prev().attr("data-selectId", thisId).find("span").html(thisHtml)
//		$scope.orgId = $("#forwardaddForma .shopparent").attr("data-selectid");
//	});
//	$("#forwardaddForma .selectePart").on("mouseover", "li", function() {
//		$(this).siblings().css({
//			"background-color": "#ffffff",
//			"color": "#666666"
//		})
//		$(this).css({
//			"background-color": "#00afd4",
//			"color": "#ffffff"
//		})
//	});
	$scope.loadContractList = function(jsonObject, createPage) {
			$http({
				method: 'post',
				url: stat + 'orgManage/getCustomerList',
       				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					 if(data.data.shopList) {
						$scope.shopLists = data.data.shopList;
						$scope.contractCount = data.data.contractCount;
						$scope.shopCount = data.data.shopCount;
						$scope.count = data.data.count;
						angular.forEach($scope.shopLists, function(ele, index) {
							if($scope.daysBetween($scope.data, ele.enddate) <= 0) {
								ele.status = "服务中";
							} else {
								ele.status = "已到期";
							}
							if(ele.totalprice == "") {
								ele.totalprice = "0";
							}
						});
						if(createPage!=""){
							if($scope.count > 5) {
								$scope.createPagePlugin1($scope.count,'5','paging2');
							} else {
								$("#paging2").empty();
							}
						}
					}
				} else {
					alertmsg(data.msg, "error")
				}
			});
		}
	/*加载商户列表*/
	$scope.loadOrgListNew = function() {
			var jsonObject = {
				province: "",
				shopName: "",
				userId: "",
				contractType: "",
				/*合同状态(0 服务中 1 已到期)*/
				nub: "0",
				size: "5"
			}
			jsonObject = angular.toJson(jsonObject);
			$scope.loadContractList(jsonObject, "$scope.createPagePlugin($scope.shopCount,'1','paging2')");
		}
	$scope.loadOrgListNew();	
	/*加载客户数据*/
	$scope.loadOrgList=function(jsonObject){
		if(jsonObject==undefined){
			var jsonObject = {
					orgId: "",
					userId: "",
					shopName: "",
					nub: "0",
					size: ""
			};
		}
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: stat + 'orgManage/getOrgListTB',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				//data.data.orgManageList.unshift({orgId:"",shopName:"请选择"})
				$scope.orgManageLists = data.data.orgManageList;
				var html=[];
				$.each($scope.orgManageLists,function(i,n){
					html.push('<option value="'+n.orgId+'">'+n.shopName+'</option>')
				})
				$('#comCiaList').append(html.join(""));
				$('.selectpicker').selectpicker('refresh');
			} else {
//				alertmsg(data.msg, "error")
			}
		})
	}
	$scope.loadOrgLists = function() {
		var jsonObject = {
				orgId: "",
				userId: "",
				shopName: "",
				nub: "",
				size: ""
		};
		$scope.loadOrgList(jsonObject)
	}
	$scope.loadOrgLists();
	/*输入框输入查询*/
	$scope.searchOrgList=function(){
		var jsonObject = {
				orgId: "",
				userId: "",
				shopName: $scope.orgshopName,
				nub: "",
				size: ""
		};
		$scope.loadOrgList(jsonObject);
	}
	/*加载客户数据*/
		$scope.getShopList=function(){
		if($scope.orgManage==undefined||$scope.orgManage==""){
			return;
		}
		var shopObject={
				orgId:$scope.orgManage,
				shopProp:"3"
		};
		jsonObject = angular.toJson(shopObject);
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
				$('.selectpicker').selectpicker('refresh');
			} else {
				alertmsg(data.msg, "error")
			}
		});
	}

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
	/*查询查询模块的销售人员数据*/
	$scope.loadSalers = function() {
		var jsonObject = {
			trueName: "",
			roleIds: "",
			roleId: "5",
			manageOrgId: "",
			orgId: "",
			userName: "",
			nub: "0",
			size: "0"
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: cas + 'user/getUserList',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.userLists = data.data.userList;
				$scope.firstObj = {
					appId: "",
					count: "",
					email: "",
					manageOrgId: "",
					orgId: "",
					orgName: "",
					roleId: "",
					roleName: "",
					status: "",
					telphone: "",
					trueName: "请选择",
					userId: "",
					userName: ""
				};
				$scope.userLists.unshift($scope.firstObj);
			} else {
				alertmsg(data.msg, "error")
			}
		});
	};
	//$scope.loadSalers();
	/*查询查询模块的销售人员数据*/
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

	/*加载商户列表*/
	$scope.loadOrgListNew = function() {
			var jsonObject = {
				province: "",
				shopName: "",
				userId: "",
				contractType: "",
				/*合同状态(0 服务中 1 已到期)*/
				nub: "0",
				size: "5"
			}
			jsonObject = angular.toJson(jsonObject);
		}
		$scope.loadOrgListNew();
		/*加载商户列表*/
	$scope.searchData = function() {
			if($scope.province == "全部") {
				$scope.provincea = "";
			}else{
				$scope.provincea = $scope.province;
			}
			if($scope.searchType == "1") {
				if($scope.contractNum == undefined || $scope.contractNum == "") {
					$scope.contractNum = "";
				}
				var jsonObject = {
					province: $scope.provincea,
					shopName: $scope.contractNum,
					userId: $scope.saler,
					contractType: $scope.contractType,
					/*合同状态(0 服务中 1 已到期)*/
					nub: "0",
					size: "2"
				}
				jsonObject = angular.toJson(jsonObject);
				$scope.loadContractList(jsonObject, "$scope.createPagePlugin($scope.count,'1','paging2')");
		}
		}
		/*点击查询按钮*/
		/*查询*/
		/*分页代码*/
	$scope.createPagePlugin1 = function(total, pageSize, pageId) {
		$("#" + pageId + "").empty();
		paging = pagePlugin.createPaging({
			renderTo: pageId,
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			$scope.page2(from - 1, pageSize);
		}
	};
	$scope.page2 = function(from, pageSize) {
		if($scope.contractNum == undefined || $scope.contractNum == "") {
			$scope.contractNum = "";
		}
			var jsonObject = {
				shopName: $scope.contractNum,
				userId: $scope.saler,
				contractType: $scope.contractType,
				/*合同状态(0 服务中 1 已到期)*/
				nub: from + '',
				size: pageSize
			}
			jsonObject = angular.toJson(jsonObject);
			$scope.loadContractList(jsonObject, "");
		}
		/*分页代码*/
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
	
		/*查看客户详情*/
	$scope.clientInfo = function(obj) {
		$state.go("orgInfo", {
				uiParams: $stateParams.uiParams
			})
	}
	//路由跳转的时候type为1,不是路由跳转的时候为0
	$scope.type = "0";
	//判读是否路由跳转
	if($stateParams.uiParams.tabtype!=undefined) {
		$scope.type = "1";
		$scope.shiftProductTab($stateParams.uiParams.tabtype);
	}
	
	//跳转回工作台
	$scope.gobWorkBench = function() {
		//跳转
		$state.go("bWorkBench", {});		
	}
});