qyApp.controller("agentProductListController", ["$scope", "$http", "Upload", "$compile","$route", "$state", "$stateParams", function($scope, $http, Upload, $compile,$route, $state, $stateParams) {
	/*初始化首页数据*/
	$scope.shopName = "";
	var nub = 0;
	var size = 10;
	$scope.count = 0;

	$scope.userInfo = eval('(' + localStorage.userInfo + ')');
	//分页
	$scope.createPagePluginMain = function(total, pageSize) {
		$("#pagingMain").empty();
		paging = pagePlugin.createPaging({
			renderTo: 'pagingMain',
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			$scope.pageMain(from - 1, pageSize);
		}
	};
	//翻页
	$scope.pageMain = function(from, pageSize) {
			nub = from;
			var jsonObject = "{\"userId\":\"" + $scope.userInfo.userId + "\",\"nub\":\"" + from + "\",\"size\":\"" + size + "\"}";
			$http({
				method: 'post',
				url: stat +
					'orgManage/getOrgListTB',
				params: {
					keyParams: getKeyParams(
						jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.orgManageList = data.data.orgManageList;
					window.setTimeout(function() {
						setClick();
					}, "200");
				} else {
					alertmsg(data.msg, "error")
				}
			})
		}
	//获取数据
	$scope.initCommercialManager = function() {
			//获取商户信息
			var jsonObject = "{\"userId\":\"" + $scope.userInfo.userId + "\",\"shopName\":\"" + $scope.shopName + "\",\"nub\":\"" + nub + "\",\"size\":\"" + size + "\"}";
			$http({
					method: 'post',
					url: stat +
						'orgManage/getOrgListTB',
					params: {
						keyParams: getKeyParams(
							jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}

				}).success(function(data, stauts, headers, config) {
					if(data.code == "1") {
						$scope.count = data.data.count;
						$scope.orgManageList = data.data.orgManageList;
	                    if (nub == 0) {
	                        if (Number(data.data.count) > Number(size)) {
	                            $scope.createPagePluginMain(data.data.count, size);
	                        } else {
	                            $scope.createPagePluginMain("0", size);
	                        }
	                    }
						window.setTimeout(function() {
							setClick();
						}, "200");
					} else {
						alertmsg(data.msg, "error")
					}
				})
				//获取运营人员列表
			getUserList();
		}
		//获取运营人员
	function getUserList() {
		var jsonObject = "{\"orgId\":\"" + $scope.userInfo.orgId + "\",\"roleId\":\"2\",\"nub\":\"0\",\"size\":\"0\"}";
		$http({
			method: 'post',
			url: stat +
				'orgManage/getUserListTB',
			params: {
				keyParams: getKeyParams(
					jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}

		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.userList = data.data.userList;
			} else {
				alertmsg(data.msg, "error")
			}
		})
	}
	$scope.initCommercialManager();
	//查询商户
	$scope.search = function(shopName) {
		$scope.shopName = shopName;
		nub = 0;
		$scope.initCommercialManager();
	}	
	
	var sourceArr=[{level:0,name:"agentProductList"}];
	$scope.showPostProductList = function(obj, type) {
		var source = {level:0,name:"productList"}
		sourceArr.push(source);
		var params={
				"source":sourceArr,
				"type":"1"
			};
		$.extend(params,{orgManage:obj.orgManage,orgId:obj.orgManage.orgId});
		$state.go("productList", {
			uiParams: params
		})
	}
	
	 //工具类
    function setClick() {
        $('.forwardMgt-Dialog').center();
        $('.DelDialog').center();
        //分配运营人员弹窗
        $('.allotOprate').click(function () {
            $('#forwardMgt-Dialog,.maskBg').show();
        });
        $('#closeDia,.closedialog').click(function () {
            $('#forwardMgt-Dialog,.maskBg').hide();
        });
        //删除弹窗
        $('.deloperateList').click(function () {
            $('.DelDialog,.maskBg').show();
        });
        $('.closedialog').click(function () {
            $('.DelDialog,.maskBg').hide();
        });
        //tr选中效果
        $('.forwComMgt-table').find('tr').click(function () {
            $(this).addClass('current-operate').siblings().removeClass('current-operate');
        })
    }
}]);