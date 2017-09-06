qyApp.controller("shareImagesController", function($scope, $http, Upload,$route, $state, $stateParams) {
	$scope.userInfo = eval('(' + localStorage.userInfo + ')');
	$scope.orgId = $scope.userInfo.orgId;
	
	$scope.getFolderFile = function() {
		var jsonObject = {
			pProAttrId: "0",
			orgId: $scope.orgId,
			nub: "0",
			size: "0"
		}
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'product/getFolderFile',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}

		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.attrList = data.data.attrList;
			} else {
				alertmsg(data.msg, "error")
			}
		})
	}
	
	$scope.getFolderFile();
	
	//修改文件名称
	$scope.updateFolder = function(obj) {
		var proAttrFilePath = obj.attr.proAttrFilePath;
		var proAttrId = obj.attr.proAttrId;
		if(proAttrFilePath == '') {
			alertmsg("请输入文件名称", "error")
			$("#newFolder").focus();
		} else {
			var jsonObject = {
				proAttrId: proAttrId,
				proAttrFilePath: proAttrFilePath
			}
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'product/updateAttrTB',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}

			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {

				} else {
					alertmsg(data.msg, "error")
				}
			})
		}
	}
	
	//新建文件夹
	$scope.addFolder = function() {
		var html = '';
		html += "<div class='fodderMain' id='addPub'>";
		html += "<div class='fodderMainImg '>";
		html += "<img src='http://static.qineasy.com/base/images/icon_newfolder.png' />"
		html += "<input id='' type='hidden' class='code_checkbox' />";
		html += "</div>";
		html += "<div class='fodderMainInfo'>";
		html += "<input type='text' value='' id='newFolder'";
		html += "class='fodderMainTitle fodderPubEdit' placeholder='' ng-blur='addFolder()' />";
		html += "</div>";
		html += "</div>";
		var template = angular.element(html);
		var newHtml = $compile(template)($scope);
		angular.element($("#addFolder").after(newHtml));
		$("#newFolder").focus();
	}

	//添加文件夹方法
	$scope.addFolder = function() {
		var proAttrFilePath = $("#newFolder").val();
		if(proAttrFilePath == '') {
			alertmsg("请输入文件夹名称", "error")
			$("#newFolder").focus();
		} else {
			var jsonObject = {
				pProAttrId: "0",
				orgId: $scope.orgId,
				proAttrFilePath: proAttrFilePath
			}
			jsonObject = JSON.stringify(jsonObject);
			$("#addPub").remove();
			$http({
				method: 'post',
				url: pos + 'product/addProductAttrTB',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}

			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.getFolderFile();
				} else {
					alertmsg(data.msg, "error")
				}
			})
		}
	}
	
	//删除文件夹
	$scope.delFolder = function(id,e){
		e.stopPropagation();
		var jsonObject = {
				pProAttrId: id,
				nub: "0",
				size: "0"
			}
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'product/getFolderFile',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}

		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				if(data.data.attrList.length > 0){
					alertmsg("文件夹内存在图片,不允许删除", "error")
				}else{
					 var jsonObject = {
							   proAttrId:id
					   }
					 jsonObject = JSON.stringify(jsonObject);
					 $http({
					        method: 'post',
					        url: pos + 'product/deleteAttrTB',
					        params: {
					             keyParams: getKeyParams(jsonObject, keyParams),
					            jsonObject: getJsonObject(jsonObject)
					        }

					    }).success(function(data, stauts, headers,config) {
					    	if(data.code=="1"){
					    		$scope.getFolderFile();
					    	}else{
					    		alertmsg(data.msg,"error")
					    	}
					    })
				}
			} else {
				alertmsg(data.msg, "error")
			}
		})
	}
	$scope.source = [{level: 0,name: "shareImages"}]
	$scope.getImagesList = function(proAttrId) {
		var source = {
			level: 0,
			name: "shareImages_list"
		};
		$scope.source.push(source);
		var params = {
			"source": $scope.source,
			"type": "1"
		};
		$.extend(
			params, {
				proAttrId: proAttrId
			});
		$state.go("shareImages_list", {
			uiParams: params
		})
	}
});