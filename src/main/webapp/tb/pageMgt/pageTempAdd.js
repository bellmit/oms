qyApp.controller("pageTempAddController", function($scope, $http, Upload, $route, $state, $stateParams) {
	/*页面跳转的代码*/
	$scope.useType = $stateParams.uiParams.useType;
	$scope.pageInfo = $stateParams.uiParams.pageInfo;
	if($stateParams.uiParams.type == "go") {
		$stateParams.uiParams.source.push({
			level: 1,
			name: "pageTempAdd"
		})
	} else if($stateParams.uiParams.type == "back") {
		$stateParams.uiParams.source.splice($stateParams.uiParams.source.length, 1);
	};
	/*点击返回按钮*/
	$scope.goback = function() {
			$stateParams.uiParams.type = "back";
			$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
			$state.go($stateParams.uiParams.source[$stateParams.uiParams.source.length - 1].name, {
				uiParams: $stateParams.uiParams
			})
		}
		/*页面跳转的代码*/
		/*编辑器代码*/
	var userInfo = JSON.parse(localStorage.userInfo);
	//			//	图片上传路径的选择
	//Uedit插件的配置代码
	$scope.ue = UE.getEditor('editor', {
		autoHeightEnabled: true,
		autoFloatEnabled: true
	});
	//	点击事件获取Uedit里面的代码
	$scope.ue.ready(function() {
		var imageUrl = JSON.parse(keyParams).orgId + "/color/";
		jsonObject = JSON.stringify({
			'imageUrl': imageUrl,
			"proAttrName": "b"
		});
		$scope.ue.execCommand('serverparam', function(editor) {
			return {
				jsonObject: getJsonObject(jsonObject),
				keyParams: getKeyParams(jsonObject, keyParams)
			};
		});
		$("#editor iframe").contents().find("body").css({
			"width":"1920px"
		})
	});
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
	};
	$scope.$on('$destroy', function() {
		$scope.ue.destroy();
	});
	/*编辑器代码*/
	/*编辑页面进入数据绑定*/
	if($scope.useType == "edit") {
		$scope.templateName = $scope.pageInfo.title;
		$scope.templateAbs = $scope.pageInfo.remark;
		$scope.ue.ready(function() {
				$scope.ue.setContent($scope.pageInfo.content);
			})
			/*点击修改模板按钮*/
		$scope.editTemplate = function() {
				$scope.addTemplate();
			}
			/*点击修改模板按钮*/
	}
	/*编辑页面进入数据绑定*/
	/*点击保存模板按钮*/
	$scope.addTemplate = function() {
			if($scope.templateName == undefined || $scope.templateAbs == undefined) {
				alertmsg("请输入模板的标题以及备注", "error");
				return;
			}
			if($scope.pageInfo.templateId == undefined) {
				$scope.pageInfo.templateId = "";
				var url = "template/addTemplate";
			} else {
				var url = "template/updateTemplate";
			}
			var jsonObject = {
				title: $scope.templateName,
				content: $scope.ue.getContent(),
				remark: $scope.templateAbs,
				templateType: "2",
				templateId: $scope.pageInfo.templateId
			};
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + url,
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.goback();
				} else {
					alertmsg(data.msg, "error");
				}
			})
		}
		/*点击保存模板按钮*/
		/*预览功能*/
	$scope.preview = function() {
		$scope.html = $scope.ue.getContent();
		localStorage.previewCode = $scope.html;
		window.open('../tb/productCenter/productList/preview.jsp', '商品详情预览', 'height='+screenHeight+', width='+screenWidth+', top=0,left=0, toolbar=no,menubar=no, scrollbars=no, resizable=no,location=no, status=no');
		//				OpenWindow.document.write($scope.html)  
	};
	/*预览功能*/
});