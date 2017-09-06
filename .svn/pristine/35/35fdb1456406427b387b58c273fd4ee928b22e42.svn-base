qyApp.controller("modelAddController",  function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	$stateParams.uiParams.source.push({
		level: $stateParams.uiParams.source.length,
		name: "modelAdd"
	});
	$scope.myUe = UE;
	$scope.ue = $scope.myUe.getEditor('modelAdd', {
		autoHeightEnabled: true,
		autoFloatEnabled: true
	});
	//	点击事件获取Uedit里面的代码
	$scope.ue.ready(function() {
		var imageUrl = JSON.parse(keyParams).orgId + "/color/";
		jsonObject = JSON.stringify({
			'imageUrl': imageUrl,
			"proModelid": "",
//			"proModelid": $scope.model.proModelid,
			"proAttrName": "b"
		});
		$scope.ue.execCommand('serverparam', function(editor) {
			return {
				jsonObject: getJsonObject(jsonObject),
				keyParams: getKeyParams(jsonObject, keyParams)
			};
		});
	});
	$scope.$on('$destroy', function() {
		$scope.ue.destroy();
	});
	//	图片上传路径的选择
	$scope.myUe.Editor.prototype._bkGetActionUrl = $scope.myUe.Editor.prototype.getActionUrl;
	$scope.myUe.Editor.prototype.getActionUrl = function(action) {
			if(action == 'config') {
				return qineasy + "oms/static/base/ueditor1_4_3_3-utf8-jsp/utf8-jsp/jsp/controller.jsp?action=config";
			} else if(action == 'uploadimage' || action == 'uploadscrawl' || action == 'uploadimage') {
				return pos + 'imageUpload/addProDetailImage';
			} else if(action == 'listimage') {
				return pos + 'product/getProDtailInServerTB';
			} else {
				return this._bkGetActionUrl.call(this, action);
			}
		}
		/*添加模板内容*/
	$scope.saveModelData = function(proModelid) {
			if($scope.templateId == undefined) {
				$scope.templateId = ""
				url = 'template/addTemplate'
			} else {
				url = 'template/updateTemplate'
			}
			$scope.jsonObject = {
				title: $scope.title,
				content: $scope.ue.getContent(),
				remark: $scope.remark,
				templateType:"0",
				templateId: $scope.templateId
			}
			$scope.jsonObject = JSON.stringify($scope.jsonObject);
			$http({
				method: 'post',
				url: pos + url,
				params: {
					keyParams: getKeyParams($scope.jsonObject, keyParams),
					jsonObject: getJsonObject($scope.jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.templateId = data.data.templateId;
				} else {
					alertmsg(data.msg, "error")
				}
			});
		}
		/*点击反回按钮*/
	$scope.goBack = function() {
		$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
		$state.go($stateParams.uiParams.source[$stateParams.uiParams.source.length - 1].name, {
			uiParams: {
				"source": $stateParams.uiParams.source,
				"type": "2",
				"model": $.extend($stateParams.uiParams.model, {
					"tabIndex": "4",
					"pcHtml": $scope.ue.getContent()
				}),
				"proModelid": $stateParams.uiParams.proModelid,
				"orgId": $stateParams.uiParams.orgId,
				"source": $stateParams.uiParams.source,
				//						"type": "1",
				"orgManage": $stateParams.uiParams.orgManage
			}
		})
	}
	$scope.addAndUse = function() {
		if($scope.templateId == undefined) {
			$scope.templateId = ""
			url = 'template/addTemplate'
		} else {
			url = 'template/updateTemplate'
		}
		$scope.jsonObject = {
			title: $scope.title,
			templateType:"0",
			content: $scope.ue.getContent(),
			remark: $scope.remark,
			templateId: $scope.templateId
		}
		$scope.jsonObject = JSON.stringify($scope.jsonObject);
		$http({
			method: 'post',
			url: pos + url,
			params: {
				keyParams: getKeyParams($scope.jsonObject, keyParams),
				jsonObject: getJsonObject($scope.jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);

				$state.go($stateParams.uiParams.source[$stateParams.uiParams.source.length - 1].name, {
					uiParams: {
						"source": $stateParams.uiParams.source,
						"type": "2",
						"model": $.extend($stateParams.uiParams.model, {
							"tabIndex": "4",
							"pcHtml": $scope.ue.getContent()
						}),
						"proModelid": $stateParams.uiParams.proModelid,
						"orgId": $stateParams.uiParams.orgId,
						"source": $stateParams.uiParams.source,
						//						"type": "1",
						"orgManage": $stateParams.uiParams.orgManage
					}
				})
			} else {
				alertmsg(data.msg, "error")
			}
		});
	}
	$scope.saveModelDatab = function() {
		if($scope.templateId == undefined) {
			$scope.templateId = ""
			url = 'template/addTemplate'
		} else {
			url = 'template/updateTemplate'
		}
		$scope.jsonObject = {
			title: $scope.title,
			templateType:"0",
			content: $scope.ue.getContent(),
			remark: $scope.remark,
			templateId: $scope.templateId
		}
		$scope.jsonObject = JSON.stringify($scope.jsonObject);
		$http({
			method: 'post',
			url: pos + url,
			params: {
				keyParams: getKeyParams($scope.jsonObject, keyParams),
				jsonObject: getJsonObject($scope.jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$state.go("modelList", {
					uiParams: $stateParams.uiParams
				});
			} else {
				alertmsg(data.msg, "error")
			}
		});

	}
});