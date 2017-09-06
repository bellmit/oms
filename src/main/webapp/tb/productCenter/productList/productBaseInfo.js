qyApp.controller("productBaseInfoController", function($scope, $http, Upload, $compile, $route, $state, $stateParams) {
	$scope.userInfo = eval('(' + localStorage.userInfo + ')');
	$scope.model = $stateParams.uiParams.model;
	$scope.orgId = $stateParams.uiParams.orgId;
	$scope.source = $stateParams.uiParams.source;
	if($stateParams.uiParams.type == "1") {
		$stateParams.uiParams.source.push({
			level: $stateParams.uiParams.source.length,
			name: "productBaseInfo"
		})
	}
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
			"proModelid": $scope.model.proModelid,
			"proAttrName": "b"
		});
		$scope.ue.execCommand('serverparam', function(editor) {
			return {
				jsonObject: getJsonObject(jsonObject),
				keyParams: getKeyParams(jsonObject, keyParams)
			};
		});
	});
	$scope.$on('$stateChangeStart', function() {
		$scope.ue.destroy();
	});
	/*点击返回按钮*/
	$scope.goback = function() {
			$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
			$state.go($stateParams.uiParams.source[$stateParams.uiParams.source.length - 1].name, {
				uiParams: {
					"orgId": $stateParams.uiParams.orgId,
					"source": $stateParams.uiParams.source,
					"type": "2",
					"orgManage": $stateParams.uiParams.orgManage
				}
			})
		}
		/*分页*/
	$scope.nub = 0;
	$scope.size = 5;
	$scope.count = 0;
	$scope.proCount = 0;
	$scope.publish = 0;
	$scope.notPublish = 0;
	//分页
	$scope.createPagePlugin = function(total, pageSize, pageId, type) {
		$("#" + pageId + "").empty();
		paging = pagePlugin.createPaging({
			renderTo: pageId,
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			if(type == "1") {
				$scope.page(from - 1, pageSize);
			} else if(type == "2") {
				$scope.pageB(from - 1, pageSize);
			}
		}
	};
	$scope.page = function(from, pageSize) {
		var jsonObject1 = {
			"proAttrName": "a",
			"proModelid": $scope.model.proModelid,
			"nub": from,
			"size": pageSize
		};
		jsonObject1 = JSON.stringify(jsonObject1);
		$http({
			method: 'post',
			url: pos + 'product/getProductAttrTB',
			params: {
				keyParams: getKeyParams(jsonObject1, keyParams),
				jsonObject: getJsonObject(jsonObject1)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				var imgList = [];
				var fileList = [];
				attrList = data.data.attrList;
				for(var i = 0; i < attrList.length; i++) {
					if(attrList[i].proAttrFilePath.indexOf("/") >= 0) {
						var file = attrList[i].proAttrFilePath;
						file = file.substring(0, file.lastIndexOf("/"));
						if(fileList.indexOf(file) < 0) {
							fileList.push(file)
						}
					} else if(attrList[i].proAttrFilePath.indexOf("/") < 0) {
						imgList.push(attrList[i]);
					}
				}
				$scope.imgList = imgList;
				$scope.imgListCount = data.data.count;
				$scope.fileList = fileList;
			} else {
				alertmsg("获取商品列表失败", "error");
			}
		})
	}
	$scope.pageB = function(from, pageSize) {
			var jsonObject1 = {
				"proAttrName": "b",
				"proModelid": $scope.model.proModelid,
				"nub": from,
				"size": pageSize
			};
			jsonObject = JSON.stringify(jsonObject1);
			$http({
				async: true,
				method: "post",
				url: pos + "product/getProductAttrTB",
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data) {
				if(data.code == 1) {
					$scope.imgListZ = data.data.attrList;
					/*productPicturePage*/
					$scope.imgListCountZs = data.data.count;
				} else {
					if(data.msg != null) {
						showError(data.msg);
					} else {
						showError(errorTip);
					}
					return;
				}
			});
		}
		/*分页*/
		/*判断页面是从新增模板进来的还是冲商品列表进来的*/
	if($scope.model.tabIndex == "4") {
		$scope.tabFlag = "4";
	} else if($scope.model.tabIndex == "2") {
		$scope.tabFlag = "2";
	} else if($scope.model.tabIndex == "6") {
		$scope.tabFlag = "6";
	} else {
		$scope.tabFlag = "1";
	}
	$scope.shiftTab = function(index) {
			selectPros = [];
			$scope.tabFlag = index;
			if(index == "2") {
				$scope.getMatter($scope.model.proModelid);

			} else if(index == "3") {
				$scope.getMatterZS($scope.model.proModelid);

			}
		}
		//汪雪来
		/*查询PC端代码*/
	$scope.loadpcHtml = function(proModelid) {
			$scope.pcDetJsonObject = {
				"proModelid": proModelid,
				"proAttrName": "pc"
			};
			$scope.pcDetJsonObject = JSON.stringify($scope.pcDetJsonObject);
			$http({
				method: 'post',
				url: pos + 'product/getProductAttrTB',
				params: {
					keyParams: getKeyParams($scope.pcDetJsonObject, keyParams),
					jsonObject: getJsonObject($scope.pcDetJsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					if(data.data.attrList.length > 0) {
						$scope.PcHtml = data.data.attrList[0].proAttrValue;
					} else {
						$scope.PcHtml = "";
					}
					if($scope.model.pcHtml != undefined) {
						$scope.ue.ready(function() {
							$scope.ue.setContent($scope.model.pcHtml);
						})
					} else {
						$scope.ue.ready(function() {
							$scope.ue.setContent($scope.PcHtml);
						})
					}
				} else {
					alertmsg(data.msg, "error")
				}
			});
		}
		/*查询mobile端代码*/
	$scope.loadmobileHtml = function(proModelid) {
		$scope.mobileDetJsonObject = {
			"proModelid": proModelid,
			"proAttrName": "mobile"
		};
		$scope.mobileDetJsonObject = JSON.stringify($scope.mobileDetJsonObject);
		$http({
			method: 'post',
			url: pos + 'product/getProductAttrTB',
			params: {
				keyParams: getKeyParams($scope.mobileDetJsonObject, keyParams),
				jsonObject: getJsonObject($scope.mobileDetJsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				if(data.data.attrList.length > 0) {
					data.data.attrList.forEach(function(ele) {
						if(ele.proAttrIndex == "1") {
							$scope.Mobileabstract = ele.proAttrValue
						} else if(ele.proAttrIndex == "2") {
							$scope.MobileHtml = ele.proAttrValue
						}
					})
				} else {
					$scope.Mobileabstract = "";
					$scope.MobileHtml = "";
				}
				$("#title").val($scope.Mobileabstract);
				$("#target").val($scope.MobileHtml);
				$("#content").append($scope.MobileHtml);
			} else {
				alertmsg(data.msg, "error")
			}
		});
	}

	//	点击事件获取Uedit里面的代码
	//	z在PC端详情页面点击保存代码按钮
	$scope.savePcDet = function() {
			$scope.html = $scope.ue.getContent();
			$scope.jsonObject = {
				"productAttrs": [{
					"proModelid": $scope.model.proModelid,
					"proAttrName": "pc",
					"proAttrIndex": "",
					"proAttrValue": $scope.html
				}]
			};
			$scope.jsonObject = JSON.stringify($scope.jsonObject);
			$http({
				method: 'post',
				url: pos + 'product/addOrUpdatePcAndMobDetailTB',
				params: {
					keyParams: getKeyParams($scope.jsonObject, keyParams),
					jsonObject: getJsonObject($scope.jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					alertmsg(data.msg);
					$scope.loadpcHtml($scope.model.proModelid);
				} else {
					alertmsg(data.msg, "error")
				}
			})
		}
		/*给编辑器添加模板列表下拉框个*/
	$scope.getPublishInfo = function(proModelid) {
		$scope.modelid1=proModelid;
		var json = eval('(' + keyParams + ')');
		var jsonObject1 = {
			"modelid": proModelid,
			"pOrgId": $scope.orgId
		};
		var jsonObject = JSON.stringify(jsonObject1);
		$http({
			async: true,
			method: "post",
			url: pos + "publish/getPublishInfoTB",
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == 1) {
				$scope.publishInfoList = data.data.publishInfoList;
				$scope.publishStatus = [];
				$scope.selOrg = [];
				$scope.publishInfoList.forEach(function(ele) {
					$scope.publishStatus.push(ele.publishStatus);
				});
				if($scope.publishStatus.indexOf("未发布") < 0) {
					$(".storeProRightPublish").prop("disabled", true).addClass('postStDefault');
				} else {
					$(".storeProRightPublish").prop("disabled", false).removeClass('postStDefault');
				}
			} else {
				if(data.msg != null) {
					showError(data.msg);
				} else {
					showError(errorTip);
				}
				return;
			}
		});
	}

	/*商品详情页面的代码*/
	var attrList = [];
	$scope.getMatter = function(proModelid) {
		$scope.proModelidPicture = proModelid;
		var json = eval('(' + keyParams + ')');
		var jsonObject1 = {
			"proAttrName": "a",
			"proModelid": proModelid,
			"nub": "0",
			"size": "25"
		};
		var jsonObject = JSON.stringify(jsonObject1);
		$http({
			async: true,
			method: "post",
			url: pos + "product/getProductAttrTB",
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == 1) {
				var imgList = [];
				var fileList = [];
				attrList = data.data.attrList;
				for(var i = 0; i < attrList.length; i++) {
					if(attrList[i].proAttrFilePath.indexOf("/") >= 0) {
						var file = attrList[i].proAttrFilePath;
						file = file.substring(0, file.lastIndexOf("/"));
						if(fileList.indexOf(file) < 0) {
							fileList.push(file)
						}
					} else if(attrList[i].proAttrFilePath.indexOf("/") < 0) {
						imgList.push(attrList[i]);
					}
				}
				$scope.imgList = imgList;
				$scope.imgListCount = data.data.count;
				if(Number($scope.imgListCount) > Number(25)) {
					$scope.createPagePlugin($scope.imgListCount, "25", "productPicturePage", "1");
				} else {
					$("#productPicturePage").empty();
				}
				$scope.fileList = fileList;
			} else {
				if(data.msg != null) {
					showError(data.msg);
				} else {
					showError(errorTip);
				}
				return;
			}
		});
	};
	$scope.getMatterZS = function(proModelid) {
		var json = eval('(' + keyParams + ')');
		var jsonObject1 = {
			"proAttrName": "b",
			"proModelid": proModelid,
			"nub": "0",
			"size": "25"
		};
		var jsonObject = JSON.stringify(jsonObject1);
		$http({
			async: true,
			method: "post",
			url: pos + "product/getProductAttrTB",
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == 1) {
				$scope.imgListZ = data.data.attrList;
				/*productPicturePage*/
				$scope.imgListCountZs = data.data.count;
				if(Number($scope.imgListCountZs) > Number(25)) {
					$scope.createPagePlugin($scope.imgListCountZs, "25", "productListPage", "2");
				} else {
					$("#productListPage").empty();
				}
			} else {
				if(data.msg != null) {
					showError(data.msg);
				} else {
					showError(errorTip);
				}
				return;
			}
		});
	}
	$scope.getProductInfo = function(proModelid) {
		var jsonObject1 = {
			"proModelid": proModelid
		};
		var jsonObject = JSON.stringify(jsonObject1);
		$http({
			async: true,
			method: "post",
			url: pos + "product/getProductInfoTB",
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}

		}).success(function(data) {
			if(data.code == 1) {
				//商品属性
				$scope.property = data.data.propertyList[0];
				var proColorList = data.data.proColorList;
				$scope.attrList = data.data.attrList;
				//add by xsy
				$scope.strColor = "";
				$scope.ColorNumAndName = [];
				$scope.SizeNumAndName = [];
				$scope.imagesList = [];
				for(var i = 0; i < proColorList.length; i++) {
					if($scope.strColor.indexOf(proColorList[i].proColorId) < 0) {
						$scope.strColor = $scope.strColor + proColorList[i].proColorId + ",";
						var object = new Object();
						object.colorNum = proColorList[i].colorNum;
						object.colorId = proColorList[i].proColorId;
						object.colorName = proColorList[i].proColorName;
						$scope.ColorNumAndName.push(object);
					}
				}
				for(var a = 0; a < $scope.attrList.length; a++) {
					var objects = new Object();
					objects.proModelid = $scope.model.proModelid;
					objects.proAttrValue = $scope.attrList[a].proAttrValue;
					objects.proAttrName = $scope.attrList[a].proAttrName;
					objects.proAttrIndex = $scope.attrList[a].proAttrIndex;
					$scope.imagesList.push(objects);
				}
				$http({
						method: 'post',
						url: pos + 'brand/getBrandTB',
						params: {
							keyParams: getKeyParams('{}', keyParams),
							jsonObject: getJsonObject('{}')
						}
					}).success(function(data, stauts, headers, config) {
						if(data.code == "1") {
							for(var i = 0; i < $scope.attrList.length; i++) {
								var id = $scope.attrList[i].proAttrName + $scope.attrList[i].proAttrIndex;
								$("#" + id).attr("src", $scope.attrList[i].proAttrValue);
							}
						}
					})
					//商品颜色列表
					//				var index = 0;
					//				for(var i = 0; i < proColorList.length; i++) {
					//					if(i == proColorList.length - 1 || (i != 0 && proColorList[i].proColorId != proColorList[i - 1].proColorId)) {
					//						for(var j = 0; j < proColorList.length; j++) {
					//							if(proColorList[i - 1].proColorId == proColorList[j].proColorId) {
					//								proColorList[j].index = index
					//							}
					//						}
					//						index = 1;
					//					}
					//					index++;
					//				}

				var index1 = 1;
				for(var i = 0; i < proColorList.length; i++) {
					if(i != (proColorList.length - 1) && proColorList[i].proColorName == proColorList[i + 1].proColorName) {
						index1 += 1;
					} else {
						break;
					}
				}
				$scope.index1 = index1;
				$scope.proColorList = proColorList;
				//商品图片
				var imgList = data.data.attrList;
				var main = [];
				var colorList = [];
				var colorCount = [];
				var img = 1;
				for(var i = 0; i < imgList.length; i++) {
					if(imgList[i].proAttrName == "main") {
						if(imgList[i].proAttrIndex == "1") {
							$scope.topPic = imgList[i]
						} else {
							main.push(imgList[i]);
						}
					} else {
						colorList.push(imgList[i]);
						if(i == 0 || imgList[i].proAttrName != imgList[i - 1].proAttrName || img == 1) {
							colorCount.push(imgList[i]);
							img++;
						}
					}
				}
				$scope.mainList = main;
				$scope.colorList = colorList;
				$scope.colorCount = colorCount;
			} else {
				if(data.msg != null) {
					showError(data.msg);
				} else {
					showError(errorTip);
				}
				return;
			}

		});
	}
	$scope.imagesList = [];
	$scope.uploadMain = function(files, imgId, type) {
		var proModelid = $scope.model.proModelid;
		var imageUrl = JSON.parse(keyParams).orgId + "/product/"
		jsonObject = "{\"imageUrl\":\"" + imageUrl + "\"}";
		if(files && files.length) {
			$scope.files = files;
			for(var i = 0; i < files.length; i++) {
				Upload.upload({
					//服务端接收
					url: pos + 'imageUpload/addProductImage',
					//上传的同时带的参数
					data: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					},
					file: files[i]
				}).success(function(data, status, headers, config) {
					//上传成功
					if(data.code == "1") {
						if(type == "1") {
							$scope.imagesPath = data.data.imagesPath;
							$("#" + imgId).attr("src", $scope.imagesPath);
							var object = new Object();
							object.proModelid = proModelid;
							object.proAttrName = imgId.substring(0, imgId.length - 1);
							object.proAttrValue = $scope.imagesPath;
							object.proAttrIndex = imgId.substring(imgId.length - 1, imgId.length);
							for(var i = 0; i < $scope.imagesList.length; i++) {
								if($scope.imagesList[i].proModelid == object.proModelid &&
									$scope.imagesList[i].proAttrName == object.proAttrName &&
									$scope.imagesList[i].proAttrIndex == object.proAttrIndex
								) {
									$scope.imagesList.splice(i, 1);
								}
							}
							$scope.imagesList.push(object);
						} else {
							$scope.imagesPath = data.data.imagesPath;
							$("#" + imgId).attr("src", $scope.imagesPath);
							var object = new Object();
							object.proModelid = proModelid;
							object.proAttrName = imgId.substring(0, imgId.length - 5);
							object.proAttrValue = $scope.imagesPath;
							object.proAttrIndex = imgId.substring(imgId.length - 1, imgId.length);
							for(var i = 0; i < $scope.imagesList.length; i++) {
								if($scope.imagesList[i].proModelid == object.proModelid &&
									$scope.imagesList[i].proAttrName == object.proAttrName &&
									$scope.imagesList[i].proAttrIndex == object.proAttrIndex
								) {
									$scope.imagesList.splice(i, 1);
								}
							}
							$scope.imagesList.push(object);
						}
					} else {
						alertmsg("上传图片失败", "error");
					}
				}).error(function(data, status, headers, config) {
					//上传失败
					console.log('error status: ' + status);
				});
			}

		}
	}

	//清除图片
	$scope.clearImage = function(position) {
			$("#" + position).attr("src", "http://static.qineasy.com/base/images/photobg.jpg");
			for(var j = 0; j < $scope.imagesList.length; j++) {
				if(position == $scope.imagesList[j].proAttrName + $scope.imagesList[j].proAttrIndex) {
					$scope.imagesList.splice(j, 1);
				}
			}
		}
		//移动图片
	$scope.moveImage = function(position1, position2, positionType) {
		var url1 = $("#" + position1)[0].src;
		var url2 = $("#" + position2)[0].src;
		$("#" + position1).attr("src", url2);
		$("#" + position2).attr("src", url1);
		var f = 0;
		var k = 0;
		for(var h = 0; h < $scope.imagesList.length; h++) {
			if(position1 == $scope.imagesList[h].proAttrName + positionType + $scope.imagesList[h].proAttrIndex) {
				$scope.imagesList[h].proAttrValue = url2;
				f++;
			}
			if(position2 == $scope.imagesList[h].proAttrName + positionType + $scope.imagesList[h].proAttrIndex) {
				$scope.imagesList[h].proAttrValue = url1;
				k++;
			}
		}
		if(f == 0) {
			var object = new Object();
			object.proModelid = $scope.model.proModelid;
			object.proAttrName = position1.substring(0, position1.length - 1);
			object.proAttrValue = url2;
			object.proAttrIndex = position1.substring(position1.length - 1, position1.length);
			$scope.imagesList.push(object);
		}
		if(k == 0) {
			var object = new Object();
			object.proModelid = $scope.model.proModelid;
			object.proAttrName = position2.substring(0, position2.length - 1);
			object.proAttrValue = url1;
			object.proAttrIndex = position2.substring(position2.length - 1, position2.length);
			$scope.imagesList.push(object);
		}
	}
	$scope.saveImages = function() {
			var jsonObjImage = new Object();
			jsonObjImage.imagesList = $scope.imagesList;
			jsonObjImage = JSON.stringify(jsonObjImage);
			$http({
				method: 'post',
				url: pos + 'product/addProductAttrListTB',
				params: {
					keyParams: getKeyParams(jsonObjImage, keyParams),
					jsonObject: getJsonObject(jsonObjImage)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					alertmsg(data.msg);
					//				$scope.goback('commercialInfo');
				} else {
					alertmsg('保存失败', "error");
				}
			})
		}
		//	$scope.getProductInfo = function(proModelid) {
		//		var jsonObject1 = {
		//			"proModelid": proModelid
		//		};
		//		var jsonObject = JSON.stringify(jsonObject1);
		//		$http({
		//			async: true,
		//			method: "post",
		//			url: pos + "product/getProductInfoTB",
		//			params: {
		//				keyParams: getKeyParams(jsonObject, keyParams),
		//				jsonObject: getJsonObject(jsonObject)
		//			}
		//		}).success(function(data) {
		//			if(data.code == 1) {
		//				//商品属性
		//				$scope.property = data.data.propertyList[0];
		//				var proColorList = data.data.proColorList;
		//				$scope.attrList = data.data.attrList;
		//				//add by xsy
		//				$scope.strColor = "";
		//				$scope.ColorNumAndName = [];
		//				$scope.SizeNumAndName = [];
		//				$scope.imagesList = [];
		//				for(var i = 0; i < proColorList.length; i++) {
		//					if($scope.strColor.indexOf(proColorList[i].proColorId) < 0) {
		//						$scope.strColor = $scope.strColor + proColorList[i].proColorId + ",";
		//						var object = new Object();
		//						object.colorNum = proColorList[i].colorNum;
		//						object.colorId = proColorList[i].proColorId;
		//						object.colorName = proColorList[i].proColorName;
		//						$scope.ColorNumAndName.push(object);
		//					}
		//				}
		//				for(var a = 0; a < $scope.attrList.length; a++) {
		//					var objects = new Object();
		//					objects.proModelid = $scope.model.proModelid;
		//					objects.proAttrValue = $scope.attrList[a].proAttrValue;
		//					objects.proAttrName = $scope.attrList[a].proAttrName;
		//					objects.proAttrIndex = $scope.attrList[a].proAttrIndex;
		//					$scope.imagesList.push(objects);
		//				}
		//				$http({
		//						method: 'post',
		//						url: pos + 'brand/getBrandTB',
		//						params: {
		//							keyParams: getKeyParams('{}', keyParams),
		//							jsonObject: getJsonObject('{}')
		//						}
		//					}).success(function(data, stauts, headers, config) {
		//						if(data.code == "1") {
		//							for(var i = 0; i < $scope.attrList.length; i++) {
		//								var id = $scope.attrList[i].proAttrName + $scope.attrList[i].proAttrIndex;
		//								$("#" + id).attr("src", $scope.attrList[i].proAttrValue);
		//							}
		//						}
		//					})
		//				//商品颜色列表
		//				var index = 0;
		//				for(var i = 0; i < proColorList.length; i++) {
		//					if(i == proColorList.length - 1 || (i != 0 && proColorList[i].proColorId != proColorList[i - 1].proColorId)) {
		//						for(var j = 0; j < proColorList.length; j++) {
		//							if(proColorList[i - 1].proColorId == proColorList[j].proColorId) {
		//								proColorList[j].index = index
		//							}
		//						}
		//						index = 1;
		//					}
		//					index++;
		//				}
		//
		//				var index1 = 1;
		//				for(var i = 0; i < proColorList.length; i++) {
		//					if(proColorList[i].proColorName == proColorList[i + 1].proColorName) {
		//						index1 += 1;
		//					} else {
		//						break;
		//					}
		//
		//				}
		//				$scope.index1 = index1;
		//				$scope.proColorList = proColorList;
		//				//商品图片
		//				var imgList = data.data.attrList;
		//
		//				var main = [];
		//				var colorList = [];
		//				var colorCount = [];
		//				var img = 1;
		//				for(var i = 0; i < imgList.length; i++) {
		//					if(imgList[i].proAttrName == "main") {
		//						if(imgList[i].proAttrIndex == "1") {
		//							$scope.topPic = imgList[i]
		//						} else {
		//							main.push(imgList[i]);
		//						}
		//					} else {
		//						colorList.push(imgList[i]);
		//						if(i == 0 || imgList[i].proAttrName != imgList[i - 1].proAttrName || img == 1) {
		//							colorCount.push(imgList[i]);
		//							img++;
		//						}
		//					}
		//				}
		//				$scope.mainList = main;
		//				$scope.colorList = colorList;
		//				$scope.colorCount = colorCount;
		//			} else {
		//				if(data.msg != null) {
		//					showError(data.msg);
		//				} else {
		//					showError(errorTip);
		//				}
		//				return;
		//			}
		//		});
		//	};
		//点击商品管理商品中心的商品详情按钮将代码回显在Pc编辑框里面
	$scope.loadpcHtml($scope.model.proModelid);
	//点击商品管理商品中心的商品详情按钮将代码回显在Pc编辑框里面
	$scope.loadmobileHtml($scope.model.proModelid);
	$scope.getPublishInfo($scope.model.proModelid);
	$scope.getMatter($scope.model.proModelid);
	$scope.getMatterZS($scope.model.proModelid);
	$scope.getProductInfo($scope.model.proModelid);

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
	$scope.preview = function() {
		$scope.html = $scope.ue.getContent();
		localStorage.previewCode = $scope.html;
		window.open('../tb/productCenter/productList/preview.jsp', '商品详情预览', 'height=' + screenHeight + ', width=' + screenWidth + ', top=0,left=0, toolbar=no,menubar=no, scrollbars=no, resizable=no,location=no, status=no');
		//				OpenWindow.document.write($scope.html)  
	};

	/*配置artEdit文件*/
	//	/*配置artEdit文件*/
	//	点击保存代码按钮保存代码
	$("#saveMobileDesc").on("click", function() {
		var codeTosave = $("#target").val();
		var abstractTosave = $("#title").val();
		var jsonObjecta = {
			"productAttrs": [{
				"proModelid": $scope.model.proModelid,
				"proAttrName": "mobile",
				"proAttrIndex": "1",
				"proAttrValue": abstractTosave
			}, {
				"proModelid": $scope.model.proModelid,
				"proAttrName": "mobile",
				"proAttrIndex": "2",
				"proAttrValue": codeTosave
			}]
		}
		jsonObjecta = JSON.stringify(jsonObjecta);
		$.ajax({
			async: false,
			type: "post",
			dataType: "json",
			url: pos + 'product/addOrUpdatePcAndMobDetailTB',
			data: {
				keyParams: getKeyParams(jsonObjecta, keyParams),
				jsonObject: getJsonObject(jsonObjecta)
			},
			success: function(data) {
				if(data.code == "1") {
					alertmsg("保存手机详情成功");
				} else {
					alertmsg("保存手机详情失败", "error");
				}
			}
		});
	});
	/*点击添加模板按钮*/
	$scope.addModel = function() {
			$scope.obj.modelList = "hide";
			$scope.obj.modelAdd = "show";
		}
		//图片上传
	$scope.uploadHeadpicPath = function(files) {
			if(files && files.length) {
				$scope.files = files;
				var imageUrl = $scope.model.proModelid + "/matter/";
				jsonObject = "{\"imageUrl\":\"" + imageUrl + "\"}";
				for(var i = 0; i < files.length; i++) {
					Upload.upload({
						//服务端接收
						url: pos + 'imageUpload/addProductImage',
						//上传的同时带的参数
						data: {
							keyParams: getKeyParams(jsonObject, keyParams),
							jsonObject: getJsonObject(jsonObject)
						},
						file: files[i]
					}).success(function(data, status, headers, config) {
						if(data.code == "1") {
							//上传成功
							var url = data.data.imagesPath;
							var imageName = data.data.imageName;
							$scope.addAttr(imageName, url);
						} else {
							alertmsg(data.msg)
						}
					}).error(function(data, status, headers, config) {
						//上传失败
						console.log('error status: ' + status);
					});
				}

			}
		}
		/*商品详情页的代码*/
		//	单张图片下载
	$scope.downloadone = function(obj) {
		var pro = obj;
		if(pro == null) {
			alertmsg("请选择文件！", "error")
		}
		var brower = myBrowser();
		if(brower == "IE") {
			var imgURL = "";
			//如果隐藏IFRAME不存在，则添加  
			if(!document.getElementById("IframeReportImg" + pro.proAttrId))
				$('<iframe style="display:none;" id="IframeReportImg' + pro.proAttrId + '" name="IframeReportImg' + pro.proAttrId + '" onload="DoSaveAsIMG(' + pro.proAttrId + ');" width="0" height="0" src="about:blank"></iframe>').appendTo("body");
			//加载图片
			document.getElementById("IframeReportImg" + pro.proAttrId).src = pro.prcUrl;
		} else if(brower == "DOWNLOAD") {
			var fileName = pro.proAttrId + ".png";
			var aLink = document.createElement('a');
			var evt = document.createEvent("HTMLEvents");
			evt.initEvent("click", false, false);
			aLink.download = fileName;
			aLink.href = pro.proAttrValue;
			//				aLink.dispatchEvent(evt);
			aLink.click();

		}
	}

	//判断浏览器类型
	function myBrowser() {
		if(!!window.ActiveXObject || "ActiveXObject" in window) {
			return "IE";
		}
		if('download' in document.createElement('a')) {
			return "DOWNLOAD";
		}
		return "OTHER";
	}

	function download(pro, i) {
		var brower = myBrowser();
		if(brower == "IE") {
			var imgURL = "";
			//如果隐藏IFRAME不存在，则添加  
			if(!document.getElementById("IframeReportImg" + pro.proAttrId))
				$('<iframe style="display:none;" id="IframeReportImg' + pro.proAttrId + '" name="IframeReportImg' + pro.proAttrId + '" onload="DoSaveAsIMG(' + pro.proAttrId + ');" width="0" height="0" src="about:blank"></iframe>').appendTo("body");
			//加载图片
			document.getElementById("IframeReportImg" + pro.proAttrId).src = pro.prcUrl;
		} else if(brower == "DOWNLOAD") {
			var fileName = pro.proAttrId + "-" + i + ".png";
			var aLink = document.createElement('a');
			var evt = document.createEvent("HTMLEvents");
			evt.initEvent("click", false, false);
			aLink.download = fileName;
			aLink.href = pro.prcUrl;
			aLink.click();
			//			aLink.dispatchEvent(evt);
		}
	}

	$scope.delPic = function(proAttrId) {
		var jsonObject1 = {
			"proAttrId": proAttrId
		};
		var jsonObject = JSON.stringify(jsonObject1);
		$('#updateFile').center();
		$('#updateFile,.maskBg').show();
		$('#updateFile').find('.confirmExecute').click(function() {
			$('#updateFile,.maskBg').hide();
			$http({
				method: 'post',
				url: pos + 'product/deleteAttrTB',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data) {
				if(data.code == 1) {
					$('#updateFile,.maskBg').hide();

					$scope.getMatter($scope.model.proModelid)
					$scope.getMatterZS($scope.model.proModelid);

					alertmsg('删除成功');
				} else {
					alertmsg("删除失败", "error");
				}
			})
		})
	}

	$scope.updateFileName = function(proAttrId) {
		if($("input[name=" + proAttrId + "]").val() == null || $("input[name=" + proAttrId + "]").val() == '') {
			return;
		}
		var jsonObject1 = {
			"proAttrId": proAttrId,
			"proAttrFilePath": $("input[name=" + proAttrId + "]").val()
		};
		var jsonObject = JSON.stringify(jsonObject1);
		$('#updateFile').center();
		$('#updateFile,.maskBg').show();
		$('#updateFile').find('.confirmExecute').click(function() {
			$('#updateFile,.maskBg').hide();
			$http({
				method: 'post',
				url: pos + 'product/updateAttrTB',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data) {
				if(data.code == 1) {
					$('#updateFile,.maskBg').hide();
					$scope.getMatter($scope.model.proModelid)
					$("input").prop().css({
						"border": "1px solid transparent"
					});
					alertmsg('修改文件名成功');
				} else {
					alertmsg("修改文件名失败", "error");
				}
			})
		})
	}
	$scope.addAttr = function(fileName, url) {
		if($scope.file != null && $scope.file != '') {
			fileName = $scope.file + "/" + fileName;
		}
		var jsonObject1 = {
			"proModelid": $scope.model.proModelid,
			"proAttrValue": url,
			"proAttrName": "a",
			"proAttrFilePath": fileName,
			"proAttrIndex": "",
			"orgId": $scope.userInfo.orgId
		};
		var jsonObject = JSON.stringify(jsonObject1);
		$http({
			method: 'post',
			url: pos + 'product/addProductAttrTB',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == 1) {
				$scope.getMatter($scope.model.proModelid);
				alertmsg('添加成功');
			} else {
				alertmsg("添加失败", "error");
			}
		})
	}

	//增加文件夹
	var html = '';
	html += "<div class='fodderMain' foldtype='folder'>";
	html += "<div class='fodderMainImg'><img class='imgFodder' src='../static/base/images/icon_folder.png' ng-click = 'newFile(11)'/></div>";
	html += "<div class='fodderMainEditTitle'><input type='text' id = 'newFile' class='fodderMainTitle' placeholder='文件夹名字' disabled='disabled' /></div>"
	html += "</div>";

	$scope.addFile = function() {
		var template = angular.element(html);
		var newHtml = $compile(template)($scope);
		$(".fodderMain").eq(0).before(newHtml);
	}

	$scope.newFile = function() {
		if($("#newFile").val() != null && $("#newFile").val() != '') {
			$scope.file = $("#newFile").val();
		}
	}

	$scope.chooseShop = function(orgId) {
		/*alert("111")*/
		$("." + orgId).toggleClass('selectStoreName').siblings('.selec-stores');
		$("." + orgId).children('.iconSelect').toggleClass('fn-hide');
	}
	$scope.publishPro = function() {
		var orgId = "";
		$("div.selectStoreName input").each(function() {
			orgId += $(this).val() + ",";
		});
		if(orgId == "") {
			$('.setDayTargetL,.maskBg').hide();
			alertmsg("至少选择一个店铺", "error");
			return false;
		}
		var json = eval('(' + keyParams + ')');
		var jsonObject1 = {
			"pOrgId": json.orgId,
			"modelid": $scope.model.proModelid,
			"orgIds": orgId,
			"publishStatus": "1"
		};
		var jsonObject = JSON.stringify(jsonObject1);
		$http({
			method: 'post',
			url: pos + 'publish/addPublishInfoTB',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == 1) {
				$('.setDayTargetL,.maskBg').hide();
				alertmsg('添加成功');
				$scope.getPublishInfo($scope.model.proModelid);
			} else {
				alertmsg("添加失败", "error");
			}
		})

	}

	$scope.publishPro1 = function(orgId) {
			$('#updateFile').center();
			$('#updateFile,.maskBg').show();
			$('#updateFile').find('.confirmExecute').click(function() {
				$('#updateFile,.maskBg').hide();
				var json = eval('(' + keyParams + ')');
				var jsonObject1 = {
					"pOrgId": json.orgId,
					"modelid": $scope.model.proModelid,
					"orgIds": orgId,
					"publishStatus": "1"
				};
				var jsonObject = JSON.stringify(jsonObject1);
				$http({
					method: 'post',
					url: pos + 'publish/addPublishInfoTB',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data) {
					if(data.code == 1) {
						$('.setDayTargetL,.maskBg').hide();
						alertmsg('添加成功');
						$scope.getPublishInfo($scope.model.proModelid);
					} else {
						alertmsg("添加失败", "error");
					}
				})
			})
		}
		//////////////////HXL END
	$scope.getShop = function(obj) {
		$scope.model = obj.model;
		$scope.getPublishInfo($scope.model.proModelid);
		$('.setDayTargetL').center().show();
		$('.maskBg').show();
	}
	$scope.releaseAgain = function(shopOrgId) {
		var jsonObject = "{\"shopOrgId\":\"" + shopOrgId + "\",\"modelId\":\"" + $scope.model.proModelid + "\"}";
		var jsonObj = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'alibaba/alibabaProPublishEdit',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				alertmsg("发布成功");
			} else {
				alertmsg(data.msg, "error");
			}
		})
	};

	$scope.getShop = function() {
		$scope.getPublishInfo($scope.model.proModelid);
		$('#showShops').center().show();
		$('.maskBg').show();
	}

	$scope.getShop1 = function() {
		$scope.getPublishInfo($scope.model.proModelid);
		$('#showShops1').center().show();
		$('.maskBg').show();
	}

	$scope.type = "";
	//选择店铺
	$scope.chooseShopPublish = function(orgId, type) {
		if($scope.type == "") {
			$scope.type = type;
		}
		if($scope.type == type) {
			$("." + orgId).toggleClass('selectStoreName').siblings('.selec-stores');
			$("." + orgId).children('.iconSelect').toggleClass('fn-hide');
			if($scope.selOrg.indexOf(orgId) >= 0) {
				var orgIdIndex = -1;
				for(var i = 0; i < $scope.selOrg.length; i++) {
					if($scope.selOrg[i] == orgId) {
						orgIdIndex = i;
					}
				}
				$scope.selOrg.splice(orgIdIndex, 1);
				if($scope.selOrg.length == 0) {
					$scope.type = "";
				}
			} else {
				$scope.selOrg.push(orgId);
				if($scope.selOrg.length == 0) {
					$scope.type = "";
				}
			}
		} else {
			alertmsg("只能选择同一种平台的店铺", "error");
		}

	}

	//跳转发布商品页面
	$scope.goRoute2 = function() {
		//判断是否选中店铺
		if($scope.selOrg.length == 0) {
			alertmsg("至少选择一个店铺", "error");
			return false;
		}
		//判断品类是否有对应的平台品类
		var type = $scope.type;
		var jsonObject = {
			type: type,
			orgId: $scope.orgId,
			sortId: $scope.model.sortId,
			shopOrgIds: $scope.selOrg
		};
		var jsonObject = JSON.stringify(jsonObject);
		$http({
			async: true,
			method: "post",
			url: pos + "sortCompare/getPlatformSort",
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.data.flag == 0) {
				alertmsg(data.data.shopNames + " 店铺未授权，请授权再发布", "error");
			} else {
				if(data.data.sort.sortId == '') {
					alertmsg("该商品没有对应平台类目", "error");
				} else {
					$scope.sort = data.data.sort;
					var source = {
						level: 0,
						name: "productList"
					};
					$scope.source.push(source);
					var params = {
						"source": $scope.source,
						"type": "1"
					};
					$.extend(
						params, {
							model: $scope.model,
							orgId: $scope.orgId,
							orgInfo: $scope.orgInfo,
							publish: $scope.publishInfoList,
							selOrg: $scope.selOrg,
							sortId: $scope.sort.sortId,
							type: type
						});
					$state.go("productPost", {
						uiParams: params
					});
					$('.maskBg').hide();
					$scope.type = "";
				}
			}
		});

	}

	$scope.showPlatformInfo = function() {
			var type = "0";
			var jsonObject = {
				type: type,
				orgId: $scope.orgId,
				sortId: $scope.model.sortId,
			};
			var jsonObject = JSON.stringify(jsonObject);
			$http({
				async: true,
				method: "post",
				url: pos + "sortCompare/getPlatformSortEdit",
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data) {
				if(data.data.sort.sortId == '') {
					alertmsg("该商品没有对应平台类目", "error");
				} else {
					$scope.sort = data.data.sort;
					var source = {
						level: 0,
						name: "productList"
					};
					$scope.source.push(source);
					var params = {
						"source": $scope.source,
						"type": "1"
					};
					$.extend(
						params, {
							model: $scope.model,
							orgId: $scope.orgId,
							orgInfo: $scope.orgInfo,
							publish: $scope.publishInfoList,
							selOrg: $scope.selOrg,
							sortId: $scope.sort.sortId,
							type: type,
							onlyShow: true
						});
					$state.go("productPost", {
						uiParams: params
					});
				}
			});
		}
		//重置要发布的店铺
	$scope.selectReset = function(event) {
			var orgId = "";
			$(event.target).parents('.publishFrame').prev('.setDayTargetContent').find('.selec-stores').removeClass('selectStoreName').end().find('.iconSelect').addClass('fn-hide');
		}
		//点击编辑商品信息按钮
	$scope.editProDetInfo = function() {
			$state.go("productUpdate", {
				uiParams: {
					"model": $stateParams.uiParams.model,
					"proModelid": $scope.model.proModelid,
					"orgId": $scope.orgId,
					"source": $stateParams.uiParams.source,
					"type": "1",
					"orgManage": $stateParams.uiParams.orgManage
				}
			})
		}
		/*导入电脑端详情*/
	$scope.insertPcHtml = function() {
			$("#content").empty();
			$("#content").append($scope.ue.getContent());
			$("#content img").attr("width", "98%");
			$("#target").val($("#content").html());
		}
		/*加载模板列表*/
	$scope.loadFile = function(fileName) {
		$scope.file = fileName;
		var imgList = [];
		var file = "";
		for(var i = 0; i < attrList.length; i++) {
			file = attrList[i].proAttrFilePath;
			file = file.substring(0, file.lastIndexOf("/"));
			if(file == fileName) {
				var pName = attrList[i].proAttrFilePath;
				attrList[i].proAttrFilePath = pName.substring(pName.lastIndexOf("/") + 1);
				imgList.push(attrList[i]);
			}
		}
		$scope.imgList = imgList;
		$scope.fileList = [];
	};
	/*正式图库的批量下载功能*/
	//选择、取消选择
	var selectPros = new Array();
	//选择效果
	$scope.doSelect = function(obj) {
			$("#selectedAlla").prop('checked', false);
			if($("#material" + obj.x.proAttrId + "").hasClass("currentFodderMain") == false) {
				$("#material" + obj.x.proAttrId + "").addClass("currentFodderMain");
				var selectPro = {
					proAttrId: obj.x.proAttrId,
					prcUrl: obj.x.proAttrValue
				}
				selectPros.push(selectPro);
			} else if($("#material" + obj.x.proAttrId + "").hasClass("currentFodderMain") == true) {
				$("#material" + obj.x.proAttrId + "").removeClass("currentFodderMain");
				for(var i = 0; i < selectPros.length; i++) {
					if(selectPros[i].proAttrId == obj.x.proAttrId) {
						selectPros.splice(i, 1);
						i--;
					}
				}
			}
		}
		//全选
	$scope.selectAll = function(imgArr, id) {
		for(var i = 0; i < imgArr.length; i++) {
			//判断当前每个图片但是不影响前后选择的图片
			//先取消选择样式
			$("#material" + imgArr[i].proAttrId + "").removeClass("currentFodderMain");
			var flag = true;
			for(var j = 0; j < selectPros.length; j++) {
				//循环所有已选择的图片
				if($("#" + id + "").prop("checked") == true) {
					//全选时,判断是否已选择，已选择不做处理，未选择插入
					if(imgArr[i].proAttrId == selectPros[j].proAttrId) {
						flag = false;
					}
				} else {
					//取消反选时，若已选中，取消选择
					if(imgArr[i].proAttrId == selectPros[j].proAttrId) {
						selectPros.splice(j, 1);
						j--;
					}
				}
			}
			if($("#" + id + "").prop("checked") == true) {
				//全选情况下添加选中样式
				$("#material" + imgArr[i].proAttrId + "").addClass("currentFodderMain");
				if(flag) {
					//若之前未选中，则添加数据
					//					$("#materialcheck"+$scope.imgListZ[i].proAttrId+"")[0].checked=true;
					var selectPro = {
						proAttrId: imgArr[i].proAttrId,
						prcUrl: imgArr[i].proAttrValue
					}
					selectPros.push(selectPro);
				}
			}
		}
	}
	$scope.downLoadPic = function() {
		if(selectPros.length == 0) {
			alertmsg("请选择下载图片", "error");
		}
		for(var i = 0; i < selectPros.length; i++) {
			download(selectPros[i], i);
		}
	}

	function myBrowser() {
		if(!!window.ActiveXObject || "ActiveXObject" in window) {
			return "IE";
		}
		if('download' in document.createElement('a')) {
			return "DOWNLOAD";
		}
		return "OTHER";
	}

	function download(pro, i) {
		var brower = myBrowser();
		if(brower == "IE") {
			var imgURL = "";
			//如果隐藏IFRAME不存在，则添加  
			if(!document.getElementById("IframeReportImg" + pro.proAttrId))
				$('<iframe style="display:none;" id="IframeReportImg' + pro.proAttrId + '" name="IframeReportImg' + pro.proAttrId + '" onload="DoSaveAsIMG(' + pro.proAttrId + ');" width="0" height="0" src="about:blank"></iframe>').appendTo("body");
			//加载图片
			document.getElementById("IframeReportImg" + pro.proAttrId).src = pro.prcUrl;
		} else if(brower == "DOWNLOAD") {
			var fileName = pro.proAttrId + "-" + i + ".png";
			var aLink = document.createElement('a');
			var evt = document.createEvent("HTMLEvents");
			evt.initEvent("click", false, false);
			aLink.download = fileName;
			aLink.href = pro.prcUrl;
			aLink.click();
			//			aLink.dispatchEvent(evt);
		}
	}

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
	});
	//	加载下拉框的接口函数
	/*加载模板列表*/
	$scope.keyParam = JSON.parse(keyParams);
	$scope.userId = $scope.keyParam.userId;
	$scope.orgId1 = $scope.keyParam.orgId;
	$scope.loadModelList = function() {
		$scope.jsonObject = {
			orgId: $scope.orgId1,
			userId: $scope.userId,
			templateId: "",
			templateType: "0",
			/*模板类型(0详情页模板,1首页,2首页模板),*/
			//			merchantId:$scope.orgId,
			title: "",
			nub: "0",
			size: "100"
		}
		$scope.loadModel($scope.jsonObject);
	}
	$scope.loadModel = function(obj) {
		$scope.jsonObject = JSON.stringify($scope.jsonObject);
		$http({
			method: 'post',
			url: pos + 'template/getTemplate',
			params: {
				keyParams: getKeyParams($scope.jsonObject, keyParams),
				jsonObject: getJsonObject($scope.jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.templateLists = data.data.templateList;
			} else {
				alertmsg(data.msg, "error");
			}
		});
	}
	$scope.loadModelList();
	$("#forwardaddForm .selectePart").on("click", "li", function() {
		var thisHtml = $(this).html();
		var thisId = $(this).attr("data-Id");
		var thisContent = $(this).attr("data-html");
		$(this).css({
				"background-color": "#00afd4",
				"color": "#ffffff",
			})
			.siblings().css({
				"background-color": "#ffffff",
				"color": "#666666",
			}).end().parents(".simulateSelect").hide().prev().attr("data-selectId", thisId).find("span").html(thisHtml)
		$scope.ue.execCommand('inserthtml', thisContent);
	});
	$("#forwardaddForm .selectePart").on("mouseover", "li", function() {
		$(this).siblings().css({
			"background-color": "#ffffff",
			"color": "#666666"
		})
		$(this).css({
			"background-color": "#00afd4",
			"color": "#ffffff"
		})
	});
	/*点击查询按钮*/
	$scope.searchModel = function(modelName) {
		if(modelName == undefined) {
			modelName = "";
		}
		$scope.jsonObject = {
			orgId: $scope.orgId1,
			userId: $scope.userId,
			templateName: modelName,
			title: modelName,
			nub: "0",
			size: "100"
		}
		$scope.loadModel($scope.jsonObject);
	};
	/*点击新建模板*/
	$scope.createNewModel = function() {
		//		$stateParams.uiParams.add = false
		$state.go('modelAdd', {
			uiParams: {
				"model": $stateParams.uiParams.model,
				"proModelid": $scope.model.proModelid,
				"orgId": $scope.orgId,
				"source": $stateParams.uiParams.source,
				"type": "1",
				"orgManage": $stateParams.uiParams.orgManage
			}
		})
	};
	/*点击管理模板按钮*/
	$scope.manageNewModel = function() {
		$state.go("modelList", {
			uiParams: {
				"model": $stateParams.uiParams.model,
				"proModelid": $scope.model.proModelid,
				"orgId": $scope.orgId,
				"source": $stateParams.uiParams.source,
				"type": "1",
				"orgManage": $stateParams.uiParams.orgManage
			}
		})
	}

	//按款号添加图片
	$scope.addImageB = function(files) {
		if(files && files.length) {
			$scope.files = files;
			var imageUrl = $scope.orgId + "/a/";
			jsonObject = "{\"imageUrl\":\"" + imageUrl + "\"}";
			for(var i = 0; i < files.length; i++) {
				Upload.upload({
					url: pos + 'imageUpload/addProductImage',
					data: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					},
					file: files[i]
				}).success(function(data, status, headers, config) {
					$scope.imagesPath = data.data.imagesPath;
					$scope.imageName = data.data.imageName;
					var jsonObj = {
						proModelid: $scope.model.proModelid,
						proAttrName: "b",
						orgId: $scope.orgId,
						proAttrValue: $scope.imagesPath,
						proAttrFilePath: $scope.imageName
					}
					jsonObj = JSON.stringify(jsonObj);
					$http({
						method: 'post',
						url: pos + 'product/addProductAttrTB',
						params: {
							keyParams: getKeyParams(jsonObj, keyParams),
							jsonObject: getJsonObject(jsonObj)
						}

					}).success(function(data, stauts, headers, config) {
						if(data.code == "1") {
							$scope.getMatterZS($scope.model.proModelid);
						} else {
							alertmsg(data.msg, "error")
						}
					})
				}).error(function(data, status, headers, config) {
					console.log('error status: ' + status);
				});
			}

		}
	};
	/*图片预览功能*/
	//	计算图片位置的函数
	/*图片预览功能*/
	/*新建一个数组存放当前页的图片链接*/
	var ImgArr, thisImgIndex, thisImgSrc, mulriple;
	var showImgBox = $(".showScanImg img");
	var winWidth = $(window).width();
	var winHeight = $(window).height();
	$(".fodderMainRow").on("click", ".scan", function() {
		ImgArr = [];
		var thisPageImgs = $(this).parents(".fodderMainRow").find("img");
		thisPageImgs.each(function(index, ele) {
			//			ImgArr.push(ele.currentSrc);
			if(ele.currentSrc) {
				ImgArr.push(ele.currentSrc);
			} else if(ele.href) {
				ImgArr.push(ele.href);
			}
		});
		/*当前选中的图片的序号*/
		thisImgIndex = $(this).parents(".fodderMain").attr("index");
		thisImgSrc = ImgArr[thisImgIndex];
		if(ImgArr.length == 1) {
			$('#prevImg').hide();
			$('#nextImg').hide();
		} else {
			if(thisImgIndex == 0) {
				$('#prevImg').hide();
				$('#nextImg').show();
			} else if(thisImgIndex == ImgArr.length - 1) {
				$('#prevImg').show();
				$('#nextImg').hide();
			} else {
				$('#prevImg').show();
				$('#nextImg').show();
			}
		}

		$(".showScanImg").show();
		showImgBox.attr("src", thisImgSrc);
		var showImg = new Image();
		showImg.src = thisImgSrc;
		showImgBox.width(showImg.width);
		showImgBox.height(showImg.height);
		/*图片的宽和高*/
		var showImgWid = showImgBox.width();
		var showImgHei = showImgBox.height();
		mulriple = showImgHei / showImgWid;
		if(showImgHei > winHeight) {
			showImgBox.css({
				"position": "absolute",
				"left": (winWidth - showImgWid) / 2 + "px",
				"top": "0px"
			})
		} else if(showImgHei <= winHeight) {
			showImgBox.centera();
		}
		/*图片的位置*/
	});
	/*点击下一张图片*/
	$("#nextImg").on("click", function() {
			thisImgIndex++;
			if(thisImgIndex <= ImgArr.length - 1) {
				$('#prevImg').show();
				$('#nextImg').show();
				showImgBox.attr("src", ImgArr[thisImgIndex]);
				var showImg = new Image();
				showImg.src = ImgArr[thisImgIndex];
				showImgBox.width(showImg.width);
				showImgBox.height(showImg.height);
				/*图片的宽和高*/
				var showImgWid = showImgBox.width();
				var showImgHei = showImgBox.height();
				mulriple = showImgHei / showImgWid;

				if(showImgHei > winHeight) {
					showImgBox.css({
						"position": "absolute",
						"left": (winWidth - showImgWid) / 2 + "px",
						"top": "0px"
					})
				} else if(showImgHei <= winHeight) {
					showImgBox.centera();
				}
				if(thisImgIndex == ImgArr.length - 1) {
					$('#prevImg').show();
					$('#nextImg').hide();
				}
			}
		})
		/*点击下一张图片*/
		/*点击上一张图片*/
	$("#prevImg").on("click", function() {
			thisImgIndex--;
			if(thisImgIndex >= 0) {
				$('#prevImg').show();
				$('#nextImg').show();
				showImgBox.attr("src", ImgArr[thisImgIndex]);
				var showImg = new Image();
				showImg.src = ImgArr[thisImgIndex];
				showImgBox.width(showImg.width);
				showImgBox.height(showImg.height);
				/*浏览器视口的宽和高*/

				/*图片的宽和高*/
				var showImgWid = showImgBox.width();
				var showImgHei = showImgBox.height();
				mulriple = showImgHei / showImgWid;
				if(showImgHei > winHeight) {
					showImgBox.css({
						"position": "absolute",
						"left": (winWidth - showImgWid) / 2 + "px",
						"top": "0px"
					})
				} else if(showImgHei <= winHeight) {
					showImgBox.centera();
				}

				if(thisImgIndex == 0) {
					$('#prevImg').hide();
					$('#nextImg').show();
				}
			}
			//		else{
			//			$('#prevImg').hide();
			//			$('#nextImg').show();
			//		}
		})
		/*点击上一张图片*/
		//关闭预览弹窗
	$("#closeScanImg").click(function($event) {
		$(".showScanImg").hide();
	});
	/*图片预览功能*/
	/*	图片拖拽效果*/
	//	showImgBox.mousedown(function(e) {
	//			e.preventDefault();
	//			showImgBox.on("mousemove", function(e) {
	//				var showImgBoxLeft = showImgBox.position().left;
	//				var showImgBoxTop = showImgBox.position().top;
	//				var showImgWid = showImgBox.width() / 2;
	//				var showImgHei = showImgBox.height() / 2;
	//				var event = e;
	//				showImgBox.offset({
	//					left: event.pageX - showImgWid,
	//					top: event.pageY - showImgHei
	//				})
	//			})
	//			showImgBox.parent().on("mouseup", function() {
	//				showImgBox.unbind("mousemove")
	//			})
	//		})
	/*鼠标滚轮滚动对图片进行缩放*/
	var myimage = document.getElementById('showImg');
	if(myimage.addEventListener) {
		// IE9, Chrome, Safari, Opera   
		myimage.addEventListener("mousewheel", MouseWheelHandler, false);
		// Firefox   
		myimage.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
	}
	// IE 6/7/8   
	else {
		myimage.attachEvent("onmousewheel", MouseWheelHandler);
	}

	function MouseWheelHandler(event) {
		var delta = 0;
		if(!event) {
			event = window.event;
		}
		if(event.wheelDelta) {
			var delta = Math.max(-1, Math.min(1, event.wheelDelta));
			delta = event.wheelDelta / 120;
			if(window.opera) delta = -delta;
		} else if(event.detail) {
			delta = Math.max(-1, Math.min(1, -event.detail));
		}
		myimage.style.width = Math.max(50, Math.min(2000, myimage.width + (30 * delta))) + "px";
		myimage.style.height = mulriple * Math.max(50, Math.min(2000, myimage.width + (30 * delta))) + "px";
		var myimageheight = Math.round(myimage.style.height.substr(0, myimage.style.height.indexOf("p")))
		var myimagewidth = Math.round(myimage.style.width.substr(0, myimage.style.width.indexOf("p")))
		if(myimageheight > winHeight) {
			showImgBox.css({
				"position": "absolute",
				"left": (winWidth - myimagewidth) / 2 + "px",
				"top": "0px"
			})
		} else if(myimageheight <= winHeight) {
			showImgBox.css({
				"position": "absolute",
				"left": (winWidth - myimagewidth) / 2 + "px",
				"top": (winHeight - myimageheight) / 2 + "px",
			})
		}
		return false;
	}
	$("#showImg").mouseover(function() {
		if(document.getElementById("showScanImg").addEventListener) {
			document.getElementById("showScanImg").addEventListener('DOMMouseScroll', scrollFunc, false);
		} //W3C  
		document.getElementById("showScanImg").onmousewheel = scrollFunc; //IE/Opera/Chrome  

		function scrollFunc(evt) {
			return false;
		}
	})
	$("#showImg").mouseout(function() {
		if(document.getElementById("showScanImg").addEventListener) {
			document.getElementById("showScanImg").addEventListener('DOMMouseScroll', scrollFunc, false);
		} //W3C  
		document.getElementById("showScanImg").onmousewheel = scrollFunc; //IE/Opera/Chrome  

		function scrollFunc(evt) {
			return true;
		}
	})

	/*手机端页面代码*/
	//		//	点击图片弹窗后的tab选项卡效果
	$(".dialog_tab").on("click", "p", function() {
			var tabIndex = $(this).index();
			$(this).addClass("tabSelected").siblings().removeClass("tabSelected");
			$(".uploadTabBox").hide();
			$(".uploadTabBox").eq(tabIndex).show();
			$(".mobilePicDialog").center();
			$scope.openPicDialog();
		})
		//		//	点击图片打开上传图片弹窗
	$("#mobilEditFrameb").on("click", function() {
			$(".dialog-content").show().children().center();
			$scope.choosenImgList = [];
			$scope.imgSrcArrB = [];
		})
		//		//	关闭图片弹窗按钮
	$(".closeDiaUpload").on("click", function() {
			$(".dialog-content").hide();
			$(".selectedImgList").empty();
			$scope.choosenImgList = [];
			$scope.imgSrcArrB = [];
			$('#content').artEditor({
				imgArr: $scope.imgSrcArrB,
				cursorIndex: $scope.lastEditRange
			});
		})
		//	对图片进行操作
		//	从正式图库中选取图片插入到页面当中
	document.getElementById('content').onclick = function() {
		// 获取选定对象
		var selection = getSelection();
		// 设置最后光标对象
		$scope.lastEditRange = selection.getRangeAt(0);
	};
	$scope.choosenImgList = new Array();

	$scope.selectedimg = false;
	$scope.chooseImg = function(obj) {
			$scope.imgSrcArrB = [];
			$("#selectedImgList").empty();
			var imgObj = obj.attrList;
			if($scope.choosenImgList.length == 0) {
				$scope.choosenImgList.push(imgObj);
				obj.selectedimg = true;
			} else if($scope.choosenImgList.length > 0) {
				if(obj.selectedimg == true) {
					$scope.choosenImgList.forEach(function(ele, index) {
						if(ele.imageId == imgObj.imageId) {
							$scope.choosenImgList.splice(index, 1)
						}
					})
					obj.selectedimg = false;
				} else if(obj.selectedimg == false) {
					$scope.choosenImgList.push(imgObj);
					obj.selectedimg = true;
				}
			}
			$scope.choosenImgList.forEach(function(ele, index) {
				$("#selectedImgList").append('<div class="selectedImg" style="float:left">' +
					'<i style="position:absolute;top:5px;right:5px" data-imgid="' + ele.imageId + '"class="fa fa-times" aria-hidden="true"></i>' +
					'<img src="' + ele.url + '"alt=""/>' +
					'<div class="sizeCover">' +
					ele.width +
					'X' +
					ele.height +
					'</div>' +
					'</div>');
				$scope.imgSrcArrB.push(ele.url);
			});

			$('#content').artEditor({
				imgArr: $scope.imgSrcArrB,
				cursorIndex: $scope.lastEditRange
			});
			$scope.dragImg();
		}
		//	$scope.$watch("imgSrcArrB",function(){
		//		$('#content').artEditor({
		//				imgArr: $scope.imgSrcArrB,
		//				cursorIndex: $scope.lastEditRange
		//			});
		//	})
		//		选中图片后对图片进行拖拽排序
	$scope.counta = 1;
	$scope.dragImg = function() {
		$scope.firstBox = null;
		$scope.secondBox = null;
		$scope.selectedImg = document.getElementsByClassName("selectedImg");
		for(var k = 0; k < $scope.selectedImg.length; k++) {
			$scope.selectedImg[k].addEventListener("drag", function(ev) {
				$scope.firstBox = this;
				$scope.firstInnerHtml = $scope.firstBox.innerHTML;
				//				ev.dataTransfer.setData("text/html", $scope.firstBox.innerHTML);
			});
			$scope.selectedImg[k].addEventListener("dragover", function(event) {
				event.preventDefault();
			});
			$scope.selectedImg[k].addEventListener("drop", function(e) {
				e.preventDefault();
				$scope.firstBox.innerHTML = this.innerHTML;
				this.innerHTML = $scope.firstInnerHtml;
				//				this.innerHTML = e.dataTransfer.getData("text/html");
				$scope.drapImgArr = [];
				for(var j = 0; j < $scope.selectedImg.length; j++) {
					$scope.drapImgArr.push($scope.selectedImg[j].childNodes[1].getAttribute("src"));
				}
				$scope.imgSrcArrB = $scope.drapImgArr;
				$('#content').artEditor({
					imgArr: $scope.imgSrcArrB,
					cursorIndex: $scope.lastEditRange
				});
			});
		};
	}
	$('#content').artEditor({
		imgArr: $scope.imgSrcArrB,
		cursorIndex: ""
	});
	//	点击插入图片按钮调查询在线图片的按钮
	$scope.openPicDialog = function() {
		//		product/getProDtailInServerTB
		$scope.jsonObject = {
			"proModelid": $scope.model.proModelid,
			"proAttrName": "b"
		}
		$scope.jsonObject = JSON.stringify($scope.jsonObject);
		$http({
			method: 'post',
			url: pos + 'product/getProDtailInServerTB',
			params: {
				keyParams: getKeyParams($scope.jsonObject, keyParams),
				jsonObject: getJsonObject($scope.jsonObject)
			}
		}).success(function(data) {
			data.list.forEach(function(ele) {
				var img = new Image();
				img.src = ele.url;
				if(img.complete) {
					ele.width = img.width;
					ele.height = img.height;
					img = null;
				} else {
					img.onload = function() {
						ele.width = img.width;
						ele.height = img.height;
						img = null;
					};
				};
			})
			$scope.attrLists = data.list;
		})
	};
	//	//	在弹窗中点击图片上传按钮
	//	$scope.iIndex = 0;
	//	$scope.fileLength = 0;
	$scope.mobileUploadImg = function(files, imgId, type) {
		var imageUrl = JSON.parse(keyParams).orgId + "/color/";
		jsonObject = JSON.stringify({
			'imageUrl': imageUrl,
			"proModelid": $scope.model.proModelid,
			"proAttrName": "b"
		});
		if(files && files.length) {
			$scope.files = files;
			$scope.fileLength = $scope.fileLength + files.length
			for(var i = 0; i < files.length; i++) {
				Upload.upload({
					//服务端接收
					url: pos + 'imageUpload/addProDetailImageMob',
					//上传的同时带的参数
					data: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					},
					file: files[i]
				}).success(function(data, status, headers, config) {
					//上传成功
					$scope.imgSrcArrB = [];
					$("#selectedImgList").empty();
					$scope.choosenImgList.push(data);
					$scope.choosenImgList.forEach(function(ele, index) {
						$("#selectedImgList").append('<div class="selectedImg" style="float:left">' +
							'<i style="position:absolute;top:5px;right:5px" data-imgid="' + ele.imageId + '" class="fa fa-times" aria-hidden="true"></i>' +
							'<img src="' + ele.url + '"alt=""/>' +
							'<div class="sizeCover">' +
							ele.width +
							'X' +
							ele.height +
							'</div>' +
							'</div>');
						$scope.imgSrcArrB.push(ele.url);
					})
					$('#content').artEditor({
						imgArr: $scope.imgSrcArrB,
						cursorIndex: $scope.lastEditRange
					});
					$scope.dragImg();
				}).error(function(data, status, headers, config) {
					//上传失败
					console.log('error status: ' + status);
				});
			}
		}
	}
	$("#imageUpload").click(function() {
		$(".dialog-content").hide();
		$(".selectedImgList").empty();
		$scope.choosenImgList = [];
		$scope.imgSrcArrB = [];
		$('#content').artEditor({
			imgArr: $scope.imgSrcArrB,
			cursorIndex: $scope.lastEditRange
		});
	});
	/*点击删除按钮*/
	$("#selectedImgList").on("click", "i", function() {
			$scope.imgSrcArrB = [];
			$("#selectedImgList").empty();
			var imgId = $(this).attr("data-imgid");
			$scope.choosenImgList.forEach(function(ele, index) {
				if(ele.imageId == imgId) {
					$scope.choosenImgList.splice(index, 1);
				}
			})
			$scope.choosenImgList.forEach(function(ele, index) {
				$("#selectedImgList").append('<div class="selectedImg" style="float:left">' +
					'<i style="position:absolute;top:5px;right:5px" data-imgid="' + ele.imageId + '" class="fa fa-times" aria-hidden="true"></i>' +
					'<img src="' + ele.url + '"alt=""/>' +
					'<div class="sizeCover">' +
					ele.width +
					'X' +
					ele.height +
					'</div>' +
					'</div>');
				$scope.imgSrcArrB.push(ele.url);
			})
			$('#content').artEditor({
				imgArr: $scope.imgSrcArrB,
				cursorIndex: $scope.lastEditRange
			});
			$scope.dragImg();
		})
		/*手机端页面代码*/
		/*鼠标划入发布商品弹窗店铺名称的时候执行的操作*/
	$(".showshopName").showName();
	$(".showshopName").removeName();
	$scope.updateListing = function(shopType,orgId,modelid){
		var jsonObject1 = {
				"modelid": modelid,
				 "orgId":orgId,
				 "type":shopType
			};
			var jsonObject = JSON.stringify(jsonObject1);
			$http({
				method: "post",
				url: pos + "alitaobao/aliTaoBaoUpdateListing",
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data) {
				if(data.code==1){
					alertmsg(data.msg);
				}else{
					alertmsg("上架失败", "error");
				}
			})
		}
	$scope.updateDelisting = function(shopType,orgId,modelid){
		var jsonObject1 = {
				"modelid": modelid,
				 "orgId":orgId,
				 "type":shopType
			};
			var jsonObject = JSON.stringify(jsonObject1);
			$http({
				async: true,
				method: "post",
				url: pos + "alitaobao/aliTaoBaoUpdateDelisting",
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}

			}).success(function(data) {
				if(data.code==1){
					alertmsg(data.msg);
				}else{
					alertmsg("下架失败", "error");
				}
			})
		}
});