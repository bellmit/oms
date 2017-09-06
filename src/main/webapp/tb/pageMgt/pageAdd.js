qyApp.controller("pageAddController", function($scope, $http, Upload, $route, $state, $stateParams) {
	$scope.pageUseType = $stateParams.uiParams.pageUseType;
	$scope.pageInfo = $stateParams.uiParams.pageInfo;
	if($stateParams.uiParams.type == "go") {
		$stateParams.uiParams.source.push({
			level: 1,
			name: "pageAdd"
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
		/*点击返回按钮*/
		/*编辑器代码*/
	var userInfo = JSON.parse(localStorage.userInfo);
	//			//	图片上传路径的选择
	//Uedit插件的配置代码
	$scope.ue = UE.getEditor('editorpageadd', {
		autoHeightEnabled: true,
		autoFloatEnabled: true
	});
	//	点击事件获取Uedit里面的代码
	$scope.ue.ready(function() {
		var imageUrl = JSON.parse(keyParams).orgId + "/color/";
		jsonObject = JSON.stringify({
			"imageUrl": imageUrl,
			"proAttrName": "b"
		});
		$scope.ue.execCommand('serverparam', function(editor) {
			return {
				jsonObject: getJsonObject(jsonObject),
				keyParams: getKeyParams(jsonObject, keyParams)
			};
		});
		$("#editorpageadd iframe").contents().find("body").css({
			"width": "1920px"
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
	/*选择商户的代码*/
	/*代运营增加店铺的页面代码orgManage/getOrgListTB*/
	$("#forwardaddForm .shopparent").on("click", function(e) {
		e.stopPropagation();
		$("#forwardaddForm  .simulateSelect").toggle();
		$("#forwardaddForm .orgshopName").val("");
		$(window).on("click", function(event) {
			if(event.target.className != "shopparent" && event.target.className != "searchpart" && event.target.className != "fangda" && event.target.tagName != "INPUT" && event.target.className != "selectLi") {
				$("#forwardaddForm  .simulateSelect").hide();
			}
		})
		if($("#forwardaddForm  .simulateSelect").css("display") == "block") {
			var jsonObject = "{\"userId\":\"" + userInfo.userId + "\",\"shopName\":\"" + "" + "\",\"nub\":\"" + "" + "\",\"size\":\"" + "" + "\"}";
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
	$scope.loadOrgList("{\"userId\":\"" + userInfo.userId + "\",\"shopName\":\"" + "" + "\",\"nub\":\"" + "" + "\",\"size\":\"" + "" + "\"}")
	$("#forwardaddForm .selectePart").on("click", "li", function() {
		var thisHtml = $(this).html();
		var thisId = $(this).attr("data-Id");
		$(this).parents("#forwardaddForm  .simulateSelect").hide().prev().attr("data-selectId", thisId).find("span").html(thisHtml);
		$scope.merchantId = $("#forwardaddForm  .shopparent").attr("data-selectId");
	});
	$scope.searchOrgList = function() {
			var jsonObject = "{\"userId\":\"" + userInfo.userId + "\",\"shopName\":\"" + $scope.orgshopName + "\",\"nub\":\"" + "" + "\",\"size\":\"" + "" + "\"}";
			$scope.loadOrgList(jsonObject);
		}
		/*选择商户的代码*/
		/*选择模板的代码*/
		/*代运营增加店铺的页面代码orgManage/getOrgListTB*/
	$scope.keyP = JSON.parse(keyParams);
	$("#forwardaddForma .shopparent").on("click", function(e) {
		e.stopPropagation();
		$("#forwardaddForma .simulateSelect").toggle();
		$("#forwardaddForma .orgshopName").val("");
		$(window).on("click", function(event) {
			if(event.target.className != "shopparent" && event.target.className != "searchpart" && event.target.className != "fangda" && event.target.tagName != "INPUT" && event.target.className != "selectLi") {
				$("#forwardaddForma .simulateSelect").hide();
			}
		})
		if($("#forwardaddForma .simulateSelect").css("display") == "block") {
			var jsonObject = {
				orgId: $scope.keyP.orgId,
				userId: $scope.keyP.userId,
				templateId: "",
				title: "",
				templateType: "2",
				/*(0 详情页模板, 1 首页, 2 首页模板)*/
				merchantId: "",
				nub: "0",
				size: "0"
			};
			$scope.loadPageList(jsonObject);
		}
	});
	//	加载下拉框的接口函数
	$scope.loadPageList = function(jsonObject) {
		var jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'template/getTemplate',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.templateLists = data.data.templateList;
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
	$scope.loadPageList({
		orgId: userInfo.orgId,
		userId: userInfo.userId,
		templateId: "",
		title: "",
		templateType: "2",
		/*(0 详情页模板, 1 首页, 2 首页模板)*/
		merchantId: "",
		nub: "0",
		size: "0"
	})
	$("#forwardaddForma .selectePart").on("click", "li", function(e) {
		var thisHtml = $(this).html();
		var thisHtmla = $(this).attr("data-html");
		var thisId = $(this).attr("data-Id");
		$(this).parents("#forwardaddForma .simulateSelect").hide().prev().attr("data-selectId", thisId).attr("data-selectHtml", thisHtmla).find("span").html(thisHtml);
		$scope.merchantId = $("#forwardaddForma .shopparent").attr("data-selectId");

		$scope.ue.ready(function() {
			$scope.ue.execCommand('inserthtml', thisHtmla);
			//			$scope.ue.setContent(thisHtmla);
		})
	});
	$scope.searchModel = function(name) {
			var jsonObject = {
				orgId: userInfo.orgId,
				userId: userInfo.userId,
				templateId: "",
				title: name,
				templateType: "2",
				/*(0 详情页模板, 1 首页, 2 首页模板)*/
				merchantId: "",
				nub: "0",
				size: "0"
			};
			$scope.loadPageList(jsonObject);
		}
		/*选择模板的代码*/
		/*编辑入口进入*/
	if($stateParams.uiParams.pageUseType == "edit") {
		$scope.pageTitle = $stateParams.uiParams.pageInfo.title;
		$scope.shopName = $stateParams.uiParams.pageInfo.shopName;
		$scope.merchantId = $stateParams.uiParams.pageInfo.merchantId;
		$scope.content = $stateParams.uiParams.pageInfo.content;
		$scope.templateId = $stateParams.uiParams.pageInfo.templateId;
		$(".shopparent span").eq(0).html($scope.shopName);
		$(".shopparent").eq(0).attr("data-selectid", $scope.merchantId);
		$scope.ue.ready(function() {
			$scope.ue.setContent($scope.content);
		})
		$scope.editPage = function(url) {
			$scope.savePage(url);
		}
	}
	/*编辑入口进入*/
	/*html转canvas的代码*/
	$scope.savePage = function(url) {
			if($scope.pageTitle == undefined || $scope.merchantId == undefined || $scope.pageTitle == "") {
				alertmsg("请输入页面的标题并选择商户", "error");
				return;
			}
			//			$form = $("#htmlcontent").contents().find("body");
			$form = $("#iframe1").contents().find("body");
			//			$form = $("#htmlcontent");
			$form.append("<div style='width:1920px'>" + $scope.ue.getContent() + "</div>");
			//			$form = $("#htmlcontent").contents().find("p").css({
			//				"margin": "0px"
			//			})
			html2canvas($form, {
				allowTaint: false,
				taintTest: false,
				letterRendering: true,
				useCORS: true,
				onrendered: function(canvas) {
					//					$("#ssss").append(canvas)
					function dataURLtoBlob(dataurl) {
						var arr = dataurl.split(','),
							mime = arr[0].match(/:(.*?);/)[1],
							bstr = atob(arr[1]),
							n = bstr.length,
							u8arr = new Uint8Array(n);
						while(n--) {
							u8arr[n] = bstr.charCodeAt(n);
						}
						return new Blob([u8arr], {
							type: mime
						});
					}
					//test:
					var blob = dataURLtoBlob(canvas.toDataURL("image/jpeg", 0.95));
					blob.name = $scope.pageTitle + ".jpeg";
					var jsonObject = {
						imageUrl: userInfo.orgId + "/template/product/"
					};
					jsonObject = JSON.stringify(jsonObject);
					Upload.upload({
							url: pos + "imageUpload/addTemplateImage",
							data: {
								keyParams: getKeyParams(jsonObject, keyParams),
								jsonObject: getJsonObject(jsonObject)
							},
							file: blob
						}).success(function(data, status, headers, config) {
							console.log(data);
							if(data.code == "1") {
								$scope.html = $scope.ue.getContent();
								if($scope.templateId == undefined) {
									$scope.templateId = "";
								}
								var jsonObject = {
									title: $scope.pageTitle,
									content: $scope.html,
									remark: "",
									templateType: "1",
									templateImage: data.data.imagesPath,
									merchantId: $scope.merchantId,
									templateId: $scope.templateId
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
						})
						//						}, "image/jpg", 1);
				}
			});
		}
		/*html转canvas的代码*/
		/*另存为模板功能*/
	$scope.showSaveTemp = "hide";
	$("#saveAsTempDialog").center();
	$scope.saveTempDia = function() {
			if($scope.ue.getContent() == "") {
				alertmsg("请在编辑器中输入内容", "error");
				return;
			}
			$scope.showSaveTemp = "show";
		}
		/*关闭弹窗*/
	$scope.closeDia = function() {
			$scope.showSaveTemp = "hide";
		}
		/*关闭弹窗*/
		/*点击确认保存模板按钮*/
	$scope.saveTemp = function() {
			var jsonObject = {
				title: $scope.templateName,
				content: $scope.ue.getContent(),
				remark: $scope.templateAbs,
				templateType: "2",
				/*模板类型(0 详情页模板, 1 首页, 2 首页模板)*/
				templateImage: "",
				merchantId: ""
			};
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + "template/addTemplate",
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.showSaveTemp = "hide";
				} else {
					alertmsg(data.msg, "error");
				}
			})
		}
		/*点击确认保存模板按钮*/
		/*另存为模板功能*/
		/*管理页面模板跳转*/
	$scope.manageNewModel = function() {
			$state.go("pageTemplate", {
				uiParams: $stateParams.uiParams
			})
		}
		/*管理页面模板跳转*/
		/*创建页面模板跳转*/
	$scope.createNewModel = function() {
			$stateParams.uiParams.useType = "add";
			$state.go("pageTempAdd", {
				uiParams: $stateParams.uiParams
			})
		}
		/*创建页面模板跳转*/
		/*预览功能*/
	$scope.preview = function() {
		$scope.html = $scope.ue.getContent();
		localStorage.previewCode = "<div style='width:1920px'>" + $scope.html + "</div>";
		window.open('../tb/productCenter/productList/preview.jsp', '商品详情预览', 'height=' + screenHeight + ', width=' + screenWidth + ', top=0,left=0, toolbar=no,menubar=no, scrollbars=no, resizable=no,location=no, status=no');
		//				OpenWindow.document.write($scope.html)  
	};
	/*预览功能*/

});