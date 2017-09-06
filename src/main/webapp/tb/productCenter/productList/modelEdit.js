qyApp.controller("modelEditController", ["$scope", "$http", "Upload", "$compile", "$route", "$state", "$stateParams", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	$stateParams.uiParams.source.push({
		level: $stateParams.uiParams.source.length,
		name: "modelEdit"
	});
	
	$scope.uiParams = $stateParams.uiParams.model;
	$scope.remark = $scope.uiParams.remark;
	$scope.title = $scope.uiParams.title;
	$scope.PcHtml = $scope.uiParams.content;
	$scope.templateId = $scope.uiParams.templateId;
	$scope.ue = UE.getEditor('editor', {
		autoHeightEnabled: true,
		autoFloatEnabled: true
	});
	//	点击事件获取Uedit里面的代码
	$scope.ue.ready(function() {
		var imageUrl = JSON.parse(keyParams).orgId + "/color/";
		jsonObject = JSON.stringify({
			'imageUrl': imageUrl,
			//			"proModelid": $scope.model.proModelid,
			"proModelid": "",
			"proAttrName": "b"
		});
		$scope.ue.execCommand('serverparam', function(editor) {
			return {
				jsonObject: getJsonObject(jsonObject),
				keyParams: getKeyParams(jsonObject, keyParams)
			};
		});
		$scope.ue.setContent($scope.PcHtml);
	});
	$scope.$on('$destroy', function() {
		$scope.ue.destroy();
	});
	//	图片上传路径的选择
	UE.Editor.prototype._bkGetActionUrl = UE.Editor.prototype.getActionUrl;
	UE.Editor.prototype.getActionUrl = function(action) {
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
	/*点击保存按钮*/
	$scope.saveModelData = function() {
		$scope.jsonObject = {
			templateId: $scope.templateId,
			title: $scope.title,
			content: $scope.ue.getContent(),
			remark: $scope.remark
		}
		$scope.jsonObject = JSON.stringify($scope.jsonObject);
		$http({
			method: 'post',
			url: pos + 'template/updateTemplate',
			params: {
				keyParams: getKeyParams($scope.jsonObject, keyParams),
				jsonObject: getJsonObject($scope.jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$state.go("modelList",{uiParams: $stateParams.uiParams});
			} else {
				alertmsg(data.msg, "error");
			}
		});
	}
	$scope.goBack=function(){
		$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
		$state.go($stateParams.uiParams.source[$stateParams.uiParams.source.length - 1].name, {
			uiParams: {
				"source": $stateParams.uiParams.source,
				"type": "2",
				"model": $.extend($stateParams.uiParams.model, {
					tabIndex: ""
				})
			}
		})
	}

}]);