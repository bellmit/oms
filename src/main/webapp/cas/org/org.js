qyApp.controller('orgController', function($scope, $http) {
	$http({
		method : 'post',
		url : cas + 'org/orgs',
		params : {
			keyParams : getKeyParams("{}", keyParams),
			jsonObject : getJsonObject("{}")
		}
	}).success(function(data, stauts, headers, config) {
		$scope.x = data.data.orgs;
	})

	$scope.reload = function() {
		$http({
			method : 'post',
			url : cas + 'org/orgs',
			params : {
				keyParams : getKeyParams("{}", keyParams),
				jsonObject : getJsonObject("{}")
			}
		}).success(function(data, stauts, headers, config) {
			$scope.x = data.data.orgs;
		})
	}
	$scope.del = function() {
		var data1 = $("#myform").serializeJson();
		$http({
			method : 'post',
			url : cas + 'org/deleteOrg',
			params : {
				jsonObject : getJsonObject(data1),
				keyParams : getKeyParams(data1, keyParams)
			}
		}).success(function(data, stauts, headers, config) {
			$scope.reload();
			alertmsg(data.msg);
			var url = cas + "org/orgs";
			var objs = "orgs";
			zTreeInit(url, objs);
			var orgId = eval('(' + data1 + ')').orgId;
			// 加载树节点，选中状态不变
			setTimeout("initZtreeSelect('orgId','" + orgId + "')", 100);
		})
	}
	$scope.save = function(obj) {
		var msg = $("#msave").html()
		var url
		var msg1
		if (msg == '新增') {
			url = cas + "org/addOrg";
			msg1 = "新增成功"
		}
		if (msg == '新增单位') {
			url = cas + "org/addOrg";
			msg1 = "新增成功"
		}
		if (msg == '修改') {
			var id = $("#orgId").val();
			url = cas + "org/updateOrg";
			msg1 = "修改成功"
		}
		if (msg == '修改单位') {
			var id = $("#orgId").val();
			url = cas + "org/updateOrg";
			msg1 = "修改成功"
		}

		var data1 = $("#myform").serializeJson();

		$http({
			method : 'post',
			url : url,
			params : {
				jsonObject : getJsonObject(data1),
				keyParams : getKeyParams(data1, keyParams)
			}
		}).success(function(data, stauts, headers, config) {
			$scope.reload();
			alertmsg(data.msg);
			var url = cas + "org/orgs";
			var objs = "orgs";
			zTreeInit(url, objs);
			var orgId = eval('(' + data1 + ')').orgId;
			// 加载树节点，选中状态不变
			setTimeout("initZtreeSelect('orgId','" + orgId + "')", 100);
		})
	}
});
