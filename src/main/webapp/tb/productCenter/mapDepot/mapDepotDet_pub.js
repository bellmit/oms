qyApp.controller("mapDepotDet_pubController", ["$scope", "$http", '$compile', "Upload", "$route", "$state", "$stateParams", function($scope, $http, $compile, Upload, $route, $state, $stateParams) {
	$scope.imgSize = new Image();
	$scope.imgSize.src = "http://qineasyimg.oss.aliyuncs.com/product-img/11664/a/20161127100749350nanzhuang2.jpg";

	$scope.userInfo = eval('(' + localStorage.userInfo + ')');
	//页面展现，隐藏
	var nub = "0";
	var sizePub = "18";
	if($scope.userInfo.roleId != '1' && $scope.userInfo.roleId != '2') {
		sizePub = "20"
	}
	$scope.type = "0";
	//获取商户公共图片库分页
	$scope.createPagePluginPub = function(total, pageSize) {
		$("#pagingPub").empty();
		paging = pagePlugin.createPaging({
			renderTo: 'pagingPub',
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			$scope.pagePub(from - 1, pageSize);
		}
	};

	//获取商户公共图片库翻页
	$scope.pagePub = function(from, pageSize) {
			var jsonObject = "{\"orgId\":\"" + $scope.orgId + "\",\"pProAttrId\":\"" + $scope.type + "\",\"proAttrName\":\"" + $scope.proAttrName + "\",\"nub\":\"" + from + "\",\"size\":\"" + pageSize + "\"}";
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
					window.setTimeout(function() {
						initPage();
					}, "200");
				} else {
					alertmsg(data.msg, "error")
				}
			})
		}
		//获取商户公共图片库数据
	$scope.getFolderFile = function() {
		$scope.proAttrName = 'b1';
		var jsonObject = {
			pProAttrId: $scope.type,
			proAttrName: $scope.proAttrName,
			orgId: $scope.orgId,
			nub: nub,
			size: sizePub
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
				$scope.selectPros = [];
				$(".fodderMain").children("input[type=checkbox]").prop("checked", false).end().removeClass("currentFodderMain");
				if(data.data.attrList.length > 0) {
					$scope.attrList = data.data.attrList;
					$scope.foldercount = 0;
					$scope.attrList.forEach(function(ele) {
						if(ele.proAttrValue == '') {
							$scope.foldercount++
						}
					})
					$scope.countFolderFile = $scope.attrList[0].count;
					if(Number($scope.countFolderFile) > Number(sizePub)) {
						$scope.createPagePluginPub($scope.countFolderFile, sizePub);
					} else {
						$("#pagingPub").empty();
					}
				} else {
					$scope.countFolderFile = 0;
					$scope.attrList = "";
				}
			} else {
				alertmsg(data.msg, "error")
			}
		})
	}

	//新建文件夹
	$scope.addFolderPub = function() {
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
		angular.element($("#addFilesPub").after(newHtml));
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
				proAttrFilePath: proAttrFilePath,
				proAttrName: 'b1'
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

	//公共图片库添加图片
	$scope.addFiles = function(files) {
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
							pProAttrId: $scope.type,
							orgId: $scope.orgId,
							proAttrName: "b1",
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
								$scope.getFolderFile();
							} else {
								alertmsg(data.msg, "error")
							}
						})
					}).error(function(data, status, headers, config) {
						console.log('error status: ' + status);
					});
				}

			}
		}
		//删除图片
	$scope.delImage = function(id) {
			var jsonObject = {
				proAttrId: id
			}
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'product/deleteAttrTB',
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
		/*批量删除图片功能*/
	$scope.delImages = function() {
			if($scope.selectPros.length == 0) {
				alertmsg("请选择您要删除的图片", "error");
				return false;
			}
			var jsonObject = {
				proList: $scope.selectPros
			};
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'product/delProAttrList',
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
		/*批量删除图片功能*/
		//	单张图片下载 start
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
		}
	}
	//	单张图片下载 end

	//选择下载内容
	//选择、取消选择
	$scope.selectPros = new Array();
	//选择效果
	$scope.doSelect = function(obj, type) {
			$scope.typeSelect = type;
			$("#materialcheck" + obj.attr.proAttrId + $scope.typeSelect)[0].checked = !$("#materialcheck" + obj.attr.proAttrId + $scope.typeSelect)[0].checked;
			$("#material" + obj.attr.proAttrId + $scope.typeSelect).removeClass("currentFodderMain");
			if($("#materialcheck" + obj.attr.proAttrId + $scope.typeSelect)[0].checked) {
				$("#material" + obj.attr.proAttrId + $scope.typeSelect).addClass("currentFodderMain");
				var selectPro = {
					proAttrId: obj.attr.proAttrId,
					prcUrl: obj.attr.proAttrValue
				}
				$scope.selectPros.push(selectPro);
			} else {
				$("#" + $scope.selectID).prop('checked', false);
				for(var i = 0; i < $scope.selectPros.length; i++) {
					if($scope.selectPros[i].proAttrId == obj.attr.proAttrId) {
						$scope.selectPros.splice(i, 1);
						i--;
					}
				}
			}
		}
		//全选图片
	$scope.selectAll = function(type) {
			$scope.typeSelect = type;
			if(type == 'P') {
				$scope.selectID = "selectAllP";
			} else if(type == 'S') {
				$scope.selectID = "selectAllS";
			} else if(type == 'M') {
				$scope.selectID = "selectAllM";
			}
			$("#" + $scope.selectID)[0].check = !$("#" + $scope.selectID)[0].check;
			for(var i = 0; i < $scope.attrList.length; i++) {

				if($scope.attrList[i].proAttrValue != '') {
					//判断当前每个图片但是不影响前后选择的图片
					//先取消选择样式
					$("#material" + $scope.attrList[i].proAttrId + $scope.typeSelect).removeClass("currentFodderMain");
					var flag = true;
					for(var j = 0; j < $scope.selectPros.length; j++) {
						//循环所有已选择的图片
						if($("#" + $scope.selectID)[0].check) {
							//全选时,判断是否已选择，已选择不做处理，未选择插入
							if($scope.attrList[i].proAttrId == $scope.selectPros[j].proAttrId) {
								flag = false;
							}
						} else {
							//取消反选时，若已选中，取消选择
							if($scope.attrList[i].proAttrId == $scope.selectPros[j].proAttrId) {
								$scope.selectPros.splice(j, 1);
								j--;
								$("#materialcheck" + $scope.attrList[i].proAttrId + $scope.typeSelect)[0].checked = false;
							}
						}
					}
					if($("#" + $scope.selectID)[0].check) {
						//全选情况下添加选中样式
						$("#material" + $scope.attrList[i].proAttrId + $scope.typeSelect).addClass("currentFodderMain");
						if(flag) {
							//若之前未选中，则添加数据
							$("#materialcheck" + $scope.attrList[i].proAttrId + $scope.typeSelect)[0].checked = true;
							var selectPro = {
								proAttrId: $scope.attrList[i].proAttrId,
								prcUrl: $scope.attrList[i].proAttrValue
							}
							$scope.selectPros.push(selectPro);
						}
					}
				}
			}
		}
		//多选下载
	$scope.downLoadPic = function() {
		if($scope.selectPros.length == 0) {
			alertmsg("请选择下载素材", "error");
		}
		for(var i = 0; i < $scope.selectPros.length; i++) {
			download($scope.selectPros[i], i);
		}
	}

	//翻页完成后样式效果铺设
	function initPage() {
		$("#" + $scope.selectID)[0].check = false;
		$("#" + $scope.selectID).prop('checked', false);
		var flag1 = true;
		for(var i = 0; i < $scope.attrList.length; i++) {
			//先取消选择样式
			if($scope.attrList[i].proAttrValue != '') {
				$("#material" + $scope.attrList[i].proAttrId + $scope.typeSelect).removeClass("currentFodderMain");
				var flag = false;
				for(var j = 0; j < $scope.selectPros.length; j++) {
					//循环所有已选择的图片,若已选择,加上样式
					if($scope.attrList[i].proAttrId == $scope.selectPros[j].proAttrId) {
						flag = true;
					}
				}
				if(flag && $scope.selectPros.length > 0) {
					$("#material" + $scope.attrList[i].proAttrId + $scope.typeSelect).addClass("currentFodderMain");
					$("#materialcheck" + $scope.attrList[i].proAttrId + $scope.typeSelect)[0].checked = true;
				} else {
					$("#materialcheck" + $scope.attrList[i].proAttrId + $scope.typeSelect)[0].checked = false;
					flag1 = false;
				}
			}
		}
		if(flag1 && $scope.selectPros.length > 0) {
			//若全部选中，勾上选择全部
			$("#" + $scope.selectID)[0].check = true;
			$("#" + $scope.selectID).prop('checked', true);
		}
	}

	//判断是否带参数
	if($stateParams.uiParams.orgManage != undefined) {
		$scope.orgId = $stateParams.uiParams.orgId;
		$scope.orgInfo = $stateParams.uiParams.orgManage;
		$scope.source = $stateParams.uiParams.source;
		$scope.getFolderFile();
	} else {
		$scope.orgId = JSON.parse(keyParams).orgId;
		$scope.getFolderFile();
	}

	$scope.getmateriaDetPubSingle = function(proAttrId) {
			$scope.proAttrId = proAttrId;
			var source = {
				level: 0,
				name: "mapDepotDet_pubSingle"
			};
			$scope.source.push(source);
			var params = {
				"source": $scope.source,
				"type": "1"
			};
			$.extend(
				params, {
					orgManage: $scope.orgInfo,
					orgId: $scope.orgId,
					proAttrId: $scope.proAttrId
				});
			$state.go("mapDepotDet_pubSingle", {
				uiParams: params
			})
		}
		//路由统一返回方法
	$scope.gobackByRoute = function() {
			$scope.selectPros = new Array();
			$scope.source.splice($scope.source.length - 1, 1);
			$state.go($scope.source[$scope.source.length - 1].name, {
				uiParams: {
					"source": $scope.source,
					"type": "2",
					"orgId": $scope.orgId,
					"orgManage": $scope.orgInfo
				}
			})
		}
		/*公共图片的发布代码*/
		/*z-tree代码*/
	var zTree, rMenu;
	var setting = {
		view: {
			dblClickExpand: true
		},
		data: {
			keep: {
				parent: true,
				leaf: true
			},
			simpleData: {
				enable: true
			}
		},
		check: {
			enable: false
		},
		callback: {
			//			onRightClick: OnRightClick,
			onClick: zTreeOclick,
			onRename: addNewAlbum
		}
	};
	/*增加节点*/
	function addNewAlbum(event, treeId, treeNode, clickFlag) {
		var jsonObject = {
			orgId: $scope.postOrgId,
			authType: "0",
			/*平台类型0阿里巴巴1淘宝2京东*/
			authority: "1",
			/*相册访问权限。 取值范围: 0 - 不公开； 1 - 公开； 2 - 密码访问*/
			password: "",
			name: treeNode.name,
			description: ""
		}
		jsonObject = JSON.stringify(jsonObject);
		$http({
			async: true,
			method: "post",
			url: pos + "alibaba/alibabaPhotobankAlbumAdd",
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			//			if(data.code == 1) {
			var jsonObject1 = {
				orgId: $scope.postOrgId,
				authType: "0" /*平台类型0阿里巴巴1淘宝2京东*/
			}
			$scope.loadAlbumjsonObject = JSON.stringify(jsonObject1);
			$http({
				async: true,
				method: "post",
				url: pos + "alibaba/alibabaPhotobankAlbumGetList",
				params: {
					keyParams: getKeyParams($scope.loadAlbumjsonObject, keyParams),
					jsonObject: getJsonObject($scope.loadAlbumjsonObject)
				}
			}).success(function(data) {
				if(data.code == 1) {
					$scope.treeNode = [{
						//						icon: "../static/base/images/icon_folder_open.png",
						iconClose: "../static/base/images/icon_folder_close.png",
						iconOpen: "../static/base/images/icon_folder_open.png",
						id: "1",
						name: "相册目录",
						open: "true",
						pId: "0"
					}]
					data.data.albumList.forEach(function(ele, index) {
							ele.icon = "../static/base/images/icon_folder_close.png";
							$scope.treeNode.push(ele);
						})
						/*树结构初始话*/
					$.fn.zTree.init($("#treeDemo"), setting, $scope.treeNode);
					zTree = $.fn.zTree.getZTreeObj("treeDemo");
					rMenu = $("#rMenu");
					/*树结构初始话*/
				}
			});
			//			} else {
			//				alertmsg("请选择下载素材", "error");
			//			}
		});
	}
	/*增加节点*/
	/*点击树结构的节点,根据id来查图片*/
	function zTreeOclick(event, treeId, treeNode, clickFlag) {
		$scope.albumId = treeNode.id;
		$scope.albumName = treeNode.name;
		$scope.loadAlbum($scope.albumId);
	}
	$scope.loadAlbum = function(albumId) {
			var jsonObject1 = {
				orgId: $scope.postOrgId,
				authType: "0",
				/*平台类型0阿里巴巴1淘宝2京东*/
				albumID: albumId
			}
			var jsonObject = JSON.stringify(jsonObject1);
			$http({
				async: true,
				method: "post",
				url: pos + "alibaba/alibabaPhotobankPhotoGetList",
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data) {
				if(data.code == 1) {
					$scope.albumPics = data.data.photoList;
				} else {
					alertmsg("请选择下载素材", "error");
				}
			});
		}
		/*z-tree代码*/
	$scope.depotdia = 'hide';
	$scope.album_dia = 'hide';
	$("#depotdia").center();
	$("#album_dia").center();
	$scope.postImg = function(type, obj) {
		$scope.postType = type;
		if(type == "imgs") {
			if($scope.selectPros.length == 0) {
				alertmsg("请选择您要发布的图片", "error");
				return;
			}
		} else if(type == "img") {
			$scope.prcUrlObj = new Object;
			$scope.selectProsA = new Array();
			$scope.prcUrlObj.prcUrl = obj.proAttrValue;
			$scope.prcUrlObj.proAttrId = obj.proAttrId;
			$scope.selectProsA.push($scope.prcUrlObj);;
			//			$scope.selectPros.push(obj);
		}
		var jsonObject1 = {
			"modelid": "",
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
				$scope.depotdia = 'show';
				$scope.publishInfoList = data.data.publishInfoList;
			} else {
				alertmsg("获取相册失败", "error");
			}
		});
	};
	/*点击店铺获取树型结构*/
	var newCount = 1;
	$scope.add = function(e) {
		var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
			isParent = e.data.isParent,
			nodes = zTree.getSelectedNodes(),
			treeNode = nodes[0];
		if(treeNode) {
			treeNode = zTree.addNodes(treeNode, {
				id: (100 + newCount),
				pId: treeNode.id,
				isParent: isParent,
				icon: "../static/base/images/icon_folder_close.png",
				name: "new node" + (newCount++)
			});
		} else {
			treeNode = zTree.addNodes(null, {
				id: (100 + newCount),
				pId: 0,
				icon: "../static/base/images/icon_folder_close.png",
				isParent: isParent,
				name: "new node" + (newCount++)
			});
		}
		if(treeNode) {
			zTree.editName(treeNode[0]);
		} else {
			alert("叶子节点被锁定，无法增加子节点");
		}
	};
	$scope.postImgAlbum = function(obj) {
			$scope.postOrgId = obj.orgId;
			$scope.postshopName = obj.shopName;
			$scope.postOrgType = obj.shopType;
			var jsonObject1 = {
				orgId: $scope.postOrgId,
				authType: "0" /*平台类型0阿里巴巴1淘宝2京东*/
			}
			$scope.loadAlbumjsonObject = JSON.stringify(jsonObject1);
			$http({
				async: true,
				method: "post",
				url: pos + "alibaba/alibabaPhotobankAlbumGetList",
				params: {
					keyParams: getKeyParams($scope.loadAlbumjsonObject, keyParams),
					jsonObject: getJsonObject($scope.loadAlbumjsonObject)
				}
			}).success(function(data) {
				if(data.code == 1) {
					$scope.treeNode = [{
						//						icon: "../static/base/images/icon_folder_open.png",
						iconClose: "../static/base/images/icon_folder_close.png",
						iconOpen: "../static/base/images/icon_folder_open.png",
						id: "1",
						name: "相册目录",
						open: "true",
						pId: "0"
					}]
					data.data.albumList.forEach(function(ele, index) {
							//							ele.iconOpen="../static/base/images/icon_folder_open.png";
							//							ele.iconClose="../static/base/images/icon_folder_close.png";
							ele.icon = "../static/base/images/icon_folder_close.png";
							$scope.treeNode.push(ele);
						})
						//					$scope.treeNode = data.data.albumList;
						//					$scope.album_dia = 'show';
						//					$scope.depotdia = 'hide';
						/*树结构初始话*/
					$.fn.zTree.init($("#treeDemo"), setting, $scope.treeNode);
					zTree = $.fn.zTree.getZTreeObj("treeDemo");
					rMenu = $("#rMenu");
					$("#addLeaf").bind("click", {
						isParent: false
					}, $scope.add);
					/*树结构初始话*/
					$scope.album_dia = 'show';
					$scope.depotdia = 'hide';
				} else {
					alertmsg("该店铺未授权", "error");
				}
			});
		}
		/*点击店铺获取树型结构*/

	/*关闭弹窗*/
	$scope.closePostDia = function(type) {
			$scope.selectPros = [];
			$("input[type=checkbox]").prop("checked", false);
			$(".fodderMain").removeClass("currentFodderMain");
			if(type == "depotdia") {
				$scope.depotdia = 'hide';
			} else if(type == "album_dia") {
				$scope.album_dia = 'hide';
			}
		}
		/*关闭弹窗*/

	/*点击发布功能*/
	$scope.postPictures = function() {
			if($scope.postType == "imgs") {
				$scope.postImgs = $scope.selectPros;
			} else if($scope.postType == "img") {
				$scope.postImgs = $scope.selectProsA;
			}
			if($scope.albumId == undefined) {
				alertmsg("请选择相册", "error");
				return;
			}
			var jsonObject1 = {
				photoUrl: $scope.postImgs,
				/*平台类型0阿里巴巴1淘宝2京东*/
				albumID: $scope.albumId,
				orgId: $scope.postOrgId
			}
			var jsonObjectaa = JSON.stringify(jsonObject1);
			$http({
				async: true,
				method: "post",
				url: pos + "alibaba/alibabaPhotobankPhotoAdd",
				params: {
					keyParams: getKeyParams(jsonObjectaa, keyParams),
					jsonObject: getJsonObject(jsonObjectaa)
				}
			}).success(function(data) {
				if(data.code == 1) {
					$scope.selectPros = [];
					$("input[type=checkbox]").prop("checked", false);
					$(".fodderMain").removeClass("currentFodderMain");
					$scope.album_dia = 'hide';
				} else if(data.code == "20032") {
					$scope.selectPros = [];
					$("input[type=checkbox]").prop("checked", false);
					$(".fodderMain").removeClass("currentFodderMain");
					$scope.album_dia = 'hide';
					alertmsg("图片大小不能超过2M", "error");
				} else {
					$scope.selectPros = [];
					$("input[type=checkbox]").prop("checked", false);
					$(".fodderMain").removeClass("currentFodderMain");
					$scope.album_dia = 'hide';
					alertmsg(data.msg, "error");

				}
			});
		}
		/*公共图片的发布代码*/
		/*图片预览代码*/
		/*图片预览功能*/
		//	计算图片位置的函数
		/*图片预览功能*/
		/*新建一个数组存放当前页的图片链接*/
	var ImgArr, thisImgIndex, thisImgSrc, mulriple;
	var showImgBox = $(".showScanImg img");
	var winWidth = $(window).width();
	var winHeight = $(window).height();
	$(".fodderMainRow").on("click", ".scan", function(e) {
		ImgArr = [];
		var thisPageImgs = $(this).parents(".fodderMainRow").children(".fodderMain[foldtype='proimg']").find("img");
		thisPageImgs.each(function(index, ele) {
			//			ImgArr.push(ele.currentSrc);
			if(ele.currentSrc) {
				ImgArr.push(ele.currentSrc);
			} else if(ele.href) {
				ImgArr.push(ele.href);
			}
		});
		/*当前选中的图片的序号*/
		//		thisImgIndex = $(this).parents(".fodderMain").attr("index");
		//		thisImgIndexa = $(this).parents(".cover").prev().attr("src");
		thisImgIndex = $(".fodderMainRow").children(".fodderMain[foldtype='proimg']").index($(this).parents(".fodderMain[foldtype='proimg']"));
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

	//查询共享图库文件夹
	$scope.getShareFolder = function() {
		$('.moveDialog').hide();
		var jsonObject = {
			pProAttrId: "0",
			orgId: $scope.userInfo.orgId,
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
				$scope.attrListFolder = data.data.attrList;
				$('.shareDialog').show();
			} else {
				alertmsg(data.msg, "error")
			}
		})
	}

	//共享图片
	$scope.shareImages = function(pProAttrId) {
		if($scope.selectPros.length == 0) {
			alertmsg("至少选择一张图片", "error")
		} else {
			var proList = [];
			for(var i = 0; i < $scope.selectPros.length; i++) {
				var proAttrId = $scope.selectPros[i].proAttrId;
				var proAttrIds = {
					"proAttrId": proAttrId
				};
				proList.push(proAttrIds);
			}
			var jsonObject = {
				pProAttrId: pProAttrId,
				proList: proList
			}
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'product/shareImages',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					alertmsg("共享成功");
					$('.shareDialog').hide();
					$(".fodderMain").removeClass("currentFodderMain");
					$("input[type=checkbox]").prop("checked", false);
					$scope.selectPros = [];
					$scope.getFolderFile();
				} else {
					alertmsg(data.msg, "error");
				}
			})
		}
	}

	//查询图片可移动到的文件夹
	$scope.getMoveDialog = function() {
		$('.shareDialog').hide();
		$('.moveDialog').show();
	}

	//移动图片
	$scope.moveImages = function(pProAttrId) {
		if($scope.selectPros.length == 0) {
			alertmsg("至少选择一张图片", "error")
		} else {
			var proList = [];
			for(var i = 0; i < $scope.selectPros.length; i++) {
				var proAttrId = $scope.selectPros[i].proAttrId;
				var proAttrIds = {
					"proAttrId": proAttrId
				};
				proList.push(proAttrIds);
			}
			var jsonObject = {
				pProAttrId: pProAttrId,
				proList: proList
			}
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'product/updateProAttrList',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					alertmsg("移动成功");
					$('.moveDialog').hide();
					$scope.selectPros = [];
					$scope.getFolderFile();
				} else {
					alertmsg(data.msg, "error")
				}
			})
		}
	}
}]);