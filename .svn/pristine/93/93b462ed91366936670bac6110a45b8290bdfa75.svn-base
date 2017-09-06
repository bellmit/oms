qyApp.controller('inventoryController', ['$scope', '$http', '$compile', function($scope, $http, $compile) {

	var from = 0;
	var pageSize = 5;
	var total = 0;
	$scope.jsonPage = {
		"nub": "" + from + "",
		"size": "" + pageSize + ""
	};
	//初始化分页
	$scope.createPagePlugin = function(total, pageSize, pageId, type) {
		$("#" + pageId + "").empty();
		paging = pagePlugin.createPaging({
			renderTo: pageId,
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			if(type == "1") {
				
				$scope.page1(from - 1, pageSize);
			} else if(type == "2") {
				$scope.page2(from - 1, pageSize);
			} else if(type == "3") {
				$scope.page3(from - 1, pageSize);
			}
		}
	};
	//分页跳转的数据
	$scope.currentPage = 0;
	$scope.page1 = function(from, pageSize) {
		var jsonPage = {
			"nub": "" + from + "",
			"size": "" + pageSize + ""
		};
		$scope.currentPage = from;
		var jsonObject = $("#inventoryForm").serializeJson();
		jsonObject = JSON.parse(jsonObject);
		$.extend(jsonPage, jsonObject);
		jsonObject = JSON.stringify(jsonPage);
		$http({
			method: 'post',
			url: ss + 'inventory/getInventory',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			$scope.inventorys = data.data.inventorys;
		})
	}

	$scope.page2 = function(from, pageSize) {
		var jsonPage = {
			"nub": "" + from + "",
			"size": "" + pageSize + ""
		};
		var jsonObject = $("#addProduct").serializeJson();
		jsonObject = JSON.parse(jsonObject);
		$.extend(jsonPage, jsonObject);
		jsonObject = JSON.stringify(jsonPage);
		$http({
			method: 'post',
			url: pos + 'model/getModels',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			$scope.products = data.data.modelList;
			angular.forEach($scope.products, function(ele, index) {
				if($scope.unjoinedMemberArr.indexOf(ele.proModelnum) != -1) {
					ele.allunJoinedgetchecked = true;
				} else {
					ele.allunJoinedgetchecked = false;
				}
			})
		})
	}
	$scope.page3 = function(from, pageSize) {
		var jsonPage = {
			"nub": "" + from + "",
			"size": "" + pageSize + ""
		};
		var jsonObject = $("#addProduct").serializeJson();
		jsonObject = JSON.parse(jsonObject);
		$.extend(jsonPage, jsonObject);
		jsonObject = JSON.stringify(jsonPage);
		$http({
			method: 'post',
			url: pos + 'model/getModels',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			$scope.products = data.data.modelList;
			angular.forEach($scope.products, function(ele, index) {
				if($scope.unjoinedMemberArr.indexOf(ele.proModelnum) != -1) {
					ele.allunJoinedgetchecked = true;
				} else {
					ele.allunJoinedgetchecked = false;
				}
			})

		})
	}

	//获取品类
	$http({
		method: 'post',
		url: pos + 'sort/selectSort',
		params: {
			keyParams: getKeyParams("{\"sortPid\":\"0\"}", keyParams),
			jsonObject: getJsonObject("{\"sortPid\":\"0\"}")
		}
	}).success(function(data, stauts, headers, config) {
		$scope.items = data.data.sortList;
	})

	//获取品牌
	$http({
		method: 'post',
		url: pos + 'brand/getBrand',
		params: {
			keyParams: getKeyParams('{}', keyParams),
			jsonObject: getJsonObject('{}')
		}
	}).success(function(data, stauts, headers, config) {
		$scope.brands = data.data.brandList;
	})

	//查询年份
	$http({
		method: 'post',
		url: pos + 'model/getDisProYear',
		params: {
			keyParams: getKeyParams('{}', keyParams),
			jsonObject: getJsonObject('{}')
		}
	}).success(function(data, stauts, headers, config) {
		if(data.code == 1) {
			$scope.years = data.data.productList;
		} else {
			alertmsg("获取年份失败", "error");
		}
	})

	//盘点清单列表
	$scope.getInventory = function() {
		$scope.currentPage = 0
		var jsonObject = $("#inventoryForm").serializeJson();
		jsonObject = JSON.parse(jsonObject);
		$.extend($scope.jsonPage, jsonObject);
		jsonObject = JSON.stringify($scope.jsonPage);
		$http({
			method: 'post',
			url: ss + 'inventory/getInventory',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			$scope.inventorys = data.data.inventorys;
			if($scope.inventorys.length > 0) {
				total = parseInt($scope.inventorys[0].count);
				$scope.createPagePlugin(total, pageSize, "paging", "1");
			} else {
				total = 0;
				$scope.createPagePlugin(total, pageSize, "paging", "1");
			}
		})
	};

	//获取汇总盘点
	$scope.getInventoryDetailSum = function() {
			$http({
				method: 'post',
				url: ss + 'inventory/getInventoryDetailSum',
				params: {
					keyParams: getKeyParams("{\"inventoryId\":\"" + $scope.inventoryId + "\"}", keyParams),
					jsonObject: getJsonObject("{\"inventoryId\":\"" + $scope.inventoryId + "\"}")
				}
			}).success(function(data, stauts, headers, config) {
				$scope.inventoryDetailSums = data.data.inventoryDetails;
			})
		}
		//编辑 生成二维表
	$scope.inventoryDetailEdit = function($event, obj, type) {
		$scope.editType = type;
		var data = $($event.target).attr("data");
		$scope.proModelid = data;
		$scope.getProductImg($scope.proModelid);
		$http({
			method: 'post',
			url: pos + 'product/findProductOnHand',
			params: {
				keyParams: getKeyParams("{\"modelId\":\"" + $scope.proModelid + "\"}", keyParams),
				jsonObject: getJsonObject("{\"modelId\":\"" + $scope.proModelid + "\"}")
			}
		}).success(function(data, stauts, headers, config) {
			var productList = data.data.productList;
			$scope.sumInvtNum = 0;
			//去除数组中相同的元素生成尺码数组
			var size = [],
				hash = {};
			for(var i = 0; i < productList.length; i++) {
				if(!hash[productList[i].proSizeName]) {
					size.push(productList[i].proSizeName);
					hash[productList[i].proSizeName] = true;
				}
			}
			$scope.sizes = size;
			//$("#size").after(size.join(""));
			//去除数组中相同的元素生成颜色数组
			var color = [],
				hash = {};
			for(var i = 0; i < productList.length; i++) {
				if(!hash[productList[i].ColorName]) {
					color.push(productList[i].ColorName);
					hash[productList[i].ColorName] = true;
				}
			}
			$scope.colors = color;
			var phash = {};
			map = {};
			for(var i = 0; i < productList.length; i++) {
				phash[productList[i].ColorName + "," + productList[i].proSizeName] = true;
				map[productList[i].ColorName + "," + productList[i].proSizeName] = {
					"proNum": productList[i].proNum,
					"stkOnHand": productList[i].stkOnHand
				};
			}
			$(".productStkNum").remove();
			var html = [];
			$scope.sumStkNum = 0;
			for(var i = 0; i < color.length; i++) {
				html.push("<tr class='productStkNum'>");
				html.push("<th scope='row'>" + color[i] + "</th>");
				for(var j = 0; j < size.length; j++) {
					if(phash[color[i] + "," + size[j]]) {
						var proNum = map[color[i] + "," + size[j]].proNum;
						$scope.proNum = proNum;
						var stkOnHand = map[color[i] + "," + size[j]].stkOnHand;
						html.push("<td class='minMg'><input style='text-align:center' class='fn-left invtNum' type='text' name='" + proNum + "' ng-blur='editStkNum($event)' validatetype='require:!盘点数不能为空;regex:0|(^[1-9]([0-9]+$)?)!盘点数不能输入负数' autofocus='autofocus' autofocus='autofocus' />");
						html.push("<span>/" + stkOnHand + "</span></td>");
						$scope.sumStkNum = $scope.sumStkNum + parseInt(stkOnHand);
					} else {
						html.push("<td><input type='text' value='-' readonly='readonly' disabled='disabled'/></td>");
					}
				}
				html.push("</tr>");
			}
			var template = angular.element(html.join(""));
			var newHtml = $compile(template)($scope);
			if(type == "1") {
				angular.element($("#sumRow").before(newHtml));
			} else {
				angular.element($("#addSumRow").before(newHtml))
			}
			$scope.usedInventoryDetails = [];
			if($scope.editType == "1") {
				for(var i in $scope.inventoryDetails) {
					if($scope.inventoryDetails[i].proModelid == $scope.proModelid) {
						$scope.usedInventoryDetails.push($scope.inventoryDetails[i])
					}
				}
				$scope.usedInventoryDetails.forEach(function(ele) {
					$("input[name=" + ele.proNum + "]").val(ele.invtNum);
				});
			} else {
				for(var i in $scope.inventoryDetailsArr) {
					if($scope.inventoryDetailsArr[i].proModelid == $scope.proModelid) {
						$scope.usedInventoryDetails.push($scope.inventoryDetailsArr[i])
					}
				}
				$scope.usedInventoryDetails.forEach(function(ele) {
					$("input[name=" + ele.proNum + "]").val(ele.invtNum);
				});
			}
			if(type == "1") {
				$("#dialogA").centera();
				$('.editInvDialog,.maskBg').show();
				$("#dialogA").keydown(function() {
					if(event.keyCode == "13") {
						$scope.editInventoryDetail('1');
					}
				});
			} else {
				$("#dialogB").centera();
				$('.addEditInvDialog,.maskBg').show();
				$("#dialogB").keydown(function() {
					if(event.keyCode == "13") {
						$scope.editInventoryDetail('2');
					}
				});
			}
		})
	}
	$scope.closeDialog = function() {
			$('.addColordialog2,.maskBg').hide();
			$scope.numA = 0;
			$scope.numB = 0;
			$scope.numC = 0;
		}
		//设置盘点日期
	$scope.setDate = function() {
			var createDate = $("[name='addCreateDate']").val();
			if(createDate) {
				$http({
					method: 'post',
					url: ss + 'inventory/addinventory',
					params: {
						keyParams: getKeyParams("{\"createDate\":\"" + createDate + "\"}", keyParams),
						jsonObject: getJsonObject("{\"createDate\":\"" + createDate + "\"}")
					}
				}).success(function(data, stauts, headers, config) {
					var object = data.data.inventorys[0];
					$scope.inventoryId = object.inventoryId;
					//$scope.getInventoryDetail();
					$scope.userName = object.userName;
					$scope.userId = object.userId;
					$scope.createDate = createDate;
					$('.addColordialog2,.maskBg').hide();
					$('#inventoryContent').show();
				})
			} else {
				alertmsg('请选择时间！', 'error');
			}
		}
		//中品类
	$scope.sortIdchange = function() {
			var sortId = $scope.selected;
			$http({
				method: 'post',
				url: pos + 'sort/selectSort',
				params: {
					keyParams: getKeyParams("{\"sortPid\":\"" + sortId + "\"}", keyParams),
					jsonObject: getJsonObject("{\"sortPid\":\"" + sortId + "\"}")
				}
			}).success(function(data, stauts, headers, config) {
				$scope.itemsc = data.data.sortList;
			})
		}
		//小品类
	$scope.sortIdCchange = function() {
			var sortIdC = $scope.selectedc;
			$http({
				method: 'post',
				url: pos + 'sort/selectSort',
				params: {
					keyParams: getKeyParams("{\"sortPid\":\"" + sortIdC + "\"}", keyParams),
					jsonObject: getJsonObject("{\"sortPid\":\"" + sortIdC + "\"}")
				}
			}).success(function(data, stauts, headers, config) {
				$scope.itemsg = data.data.sortList;
			})
		}
		//添加盘点商品弹窗 type 1为编辑2为添加
	$("#addpreductdialogB").center();
	$("#inventAddOrder").centera();
	$("#dialogA").centera();
	$("#timeset").centera();
	$("#addpreductdialogA").centera();
	$("#dialogB").centera();
	$("#inventAddOrder2").centera();
	$("#adjustStock").centera();
	$("#EditDialog").centera();
	$scope.showdialog = 'hide';
	$scope.addProduct = function(type) {
		$scope.addProductType = type;
		var proModelnum1 = "";
		var inventoryDetailSums = $scope.inventoryDetailSums;
		if(inventoryDetailSums) {
			for(var i = 0; i < inventoryDetailSums.length; i++) {
				proModelnum1 = proModelnum1 + inventoryDetailSums[i].proModelid + ",";
			}
			proModelnum1 = proModelnum1.substr(0, proModelnum1.length - 1);
			$scope.proModelnum1 = proModelnum1;
		}
		$scope.products = null;
		if(type == 1) {
			$scope.showdialog = 'show';
			$("#addpreductdialogB").keydown(function() {
				if(event.keyCode == "13") {
					$scope.addInventoryProduct('1');
				}
			});
		} else {
			$scope.showdialoga = 'show';
			$("#addpreductdialogA").keydown(function() {
				if(event.keyCode == "13") {
					$scope.addInventoryProduct('2');
				}
			});
		}
	};
	//获取盘点商品
	$scope.getInventoryProduct = function(obj) {
			//		当点击查询的时候会把之前勾选的商品数据清空
			if($scope.addProductType == "1") {
				$scope.unjoinedMemberArr = [];
				var jsonObject = $("#addProduct").serializeJson();
				jsonObject = JSON.parse(jsonObject);
				$.extend($scope.jsonPage, jsonObject);
				jsonObject = JSON.stringify($scope.jsonPage);
			} else if($scope.addProductType == "2") {
				$scope.unjoinedMemberArr = [];
				var jsonObject = $("#addProducta").serializeJson();
				jsonObject = JSON.parse(jsonObject);
				$.extend($scope.jsonPage, jsonObject);
				jsonObject = JSON.stringify($scope.jsonPage);
			}
			$http({
				method: 'post',
				url: pos + 'model/getModels',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				data.data.modelList.forEach(function(ele) {
					ele.allunJoinedgetchecked = false;
				})
				$scope.products = data.data.modelList;
				total = parseInt($scope.products[0].count);
				$("#addpreductdialogB").center();
				eval(obj);
				if($scope.addProductType == "1") {
					$scope.createPagePlugin(total, pageSize, "pagingA", "2");
				} else if($scope.addProductType == "2") {
					$scope.createPagePlugin(total, pageSize, "pagingB", "3");
				}
			})
		}
		//新增盘点商品
		//	点击单选框选择店铺"one 单条" "all 选中当前页"
	$scope.unjoinedMemberArr = [];
	$scope.chooseUnJoinedMember = function(proModelnum, obj, type) {
		if(type == "one") {
			$scope.unJoinedgetchecked = false;
			$scope.orgIdIndex = $scope.unjoinedMemberArr.indexOf(proModelnum);
			if($scope.orgIdIndex == -1) {
				$scope.unjoinedMemberArr.push(proModelnum);
			} else if($scope.orgIdIndex == 0 || $scope.orgIdIndex > 0) {
				$scope.unjoinedMemberArr.splice($scope.orgIdIndex, 1);
			}
		} else if(type == "all") {
			//			判断单选框的状态,"true 选中" "false 未选中"
			$scope.keepOrgIdArr = [];
			$scope.usedOrgIdArr = [];
			angular.forEach(obj, function(ele) {
				$scope.usedOrgIdArr.push(ele.proModelnum);
			})
			var unique = {};
			$scope.usedOrgIdArr.forEach(function(gpa) {
				unique[JSON.stringify(gpa)] = gpa
			});
			$scope.usedOrgIdArr = Object.keys(unique).map(function(u) {
				return JSON.parse(u);
			});
			if($scope.unJoinedgetchecked == false) {
				//		当为false的时候,把这一页的数据清空
				$scope.products.forEach(function(ele) {
					ele.allunJoinedgetchecked = false;
				})
				for(var j = 0; j < $scope.unjoinedMemberArr.length; j++) {
					if($scope.usedOrgIdArr.indexOf($scope.unjoinedMemberArr[j]) == -1) {
						$scope.keepOrgIdArr.push($scope.unjoinedMemberArr[j]);
					}
				}
				$scope.unjoinedMemberArr = $scope.keepOrgIdArr;
			} else {
				$scope.products.forEach(function(ele) {
						ele.allunJoinedgetchecked = true;
					})
					//				当为true的时候,把这一页的数据都加上
				$scope.usedOrgIdArr.forEach(function(ele) {
					$scope.unjoinedMemberArr.push(ele);
				});
			}
		}
		var unique = {};
		$scope.unjoinedMemberArr.forEach(function(gpa) {
			unique[JSON.stringify(gpa)] = gpa
		});
		$scope.unjoinedMemberArr = Object.keys(unique).map(function(u) {
			return JSON.parse(u);
		});
	}
	$scope.addInventoryProduct = function(type) {
			var jsonObject = "";
			if($scope.unjoinedMemberArr.length == 1) {
				$scope.unjoinedMemberArr = $scope.unjoinedMemberArr[0];
			}
			if($scope.unjoinedMemberArr.length == 0) {
				alertmsg("请选择商品","error");
			} else if($scope.unjoinedMemberArr.length >1){
				if(type == "2") {
					jsonObject = $("#addInventoryProduct").serializeJson();
					jsonObject = JSON.parse(jsonObject);
					jsonObject.proModelnum = $scope.unjoinedMemberArr;
				} else {
					jsonObject = $("#inventoryProduct").serializeJson();
					jsonObject = JSON.parse(jsonObject);
					jsonObject.proModelnum = $scope.unjoinedMemberArr;
				}
				jsonObject = JSON.stringify(jsonObject);
				if(jsonObject.indexOf("proModelnum") != -1) {
					$http({
						method: 'post',
						url: ss + 'inventory/addinventoryDetail',
						params: {
							keyParams: getKeyParams(jsonObject, keyParams),
							jsonObject: getJsonObject(jsonObject)
						}
					}).success(function(data, stauts, headers, config) {
						alertmsg(data.msg);
						$scope.unjoinedMemberArr = [];
						$("#pagingA").empty();
						$("#pagingB").empty();
						if(type == "2") {
							$scope.showdialoga = 'hide';
							$scope.showdialog = 'hide';
						} else {
							$scope.showdialoga = 'hide';
							$scope.showdialog = 'hide';
						}
						$scope.getInventoryDetailSum();
					})
				} else {
					alertmsg("请选择盘点商品在添加!", 'error');
				}
			}
		}
		//调整入库
	$scope.storage = function($event, obj) {
			var data = $($event.target).attr("data").split(",");
			//盘点时间
			$scope.createDate = obj.inventory.createDate;
			//盘点人
			$scope.oprName = obj.inventory.oprName;
			//盘点单号
			$scope.inventoryId = obj.inventory.inventoryId;
			$scope.stkNum = data[1];
			$scope.invtNum = data[2];
			$scope.diffNum = data[3];
			$scope.getInventoryDetail();
			//$('.createInvDialoglist').center();
			$('.createInvDialoglist,.maskBg').show();
			$("#adjustStock").centera();
		}
		//获取盘点明细
	$scope.getInventoryDetail = function() {
			$http({
				method: 'post',
				url: ss + 'inventory/getInventoryDetail',
				params: {
					keyParams: getKeyParams("{\"inventoryId\":\"" + $scope.inventoryId + "\"}", keyParams),
					jsonObject: getJsonObject("{\"inventoryId\":\"" + $scope.inventoryId + "\"}")
				}
			}).success(function(data, stauts, headers, config) {
				$scope.inventoryDetails = data.data.inventoryDetails;
			})
		}
		//删除盘点信息
	$scope.delInventory = function(inventoryId) {
			//		 var inventoryId=$("#inventoryId").val();
			$http({
				method: 'post',
				url: ss + 'inventory/delInventory',
				params: {
					keyParams: getKeyParams("{\"inventoryId\":\"" + inventoryId + "\"}", keyParams),
					jsonObject: getJsonObject("{\"inventoryId\":\"" + inventoryId + "\"}")
				}
			}).success(function(data, stauts, headers, config) {
				alertmsg(data.msg);
				$('.EditDialog,.maskBg').hide();
				//			$scope.getInventory();
				//				当在不是第一行删除盘点单时页面仍停留在当前页,不返回到第一页(但是页面显示当前页未解决)
				var jsonObject = {
					"nub": $scope.currentPage + "",
					"size": "5",
					"inventoryId": "",
					"createDate": ""
				}
				jsonObject = JSON.stringify(jsonObject);
				$http({
					method: 'post',
					url: ss + 'inventory/getInventory',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data, stauts, headers, config) {
					$scope.inventorys = data.data.inventorys;
					if($scope.inventorys.length > 0) {
						total = parseInt($scope.inventorys[0].count);
						$scope.createPagePlugin(total, pageSize, "paging", "1");
					} else {
						total = 0;
						$scope.createPagePlugin(total, pageSize, "paging", "1");
					}
				})
			})
		}
		//删除盘点明细
	$scope.delInventoryDetail = function() {
			var proModelid = $("#proModelid").val();
			var jsonObject = $("#delInventoryDetForm").serializeJson();
			$http({
				method: 'post',
				url: ss + 'inventory/delInventoryDetail',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				alertmsg(data.msg);
				$('.EditDialog,.maskBg').hide();
				$scope.getInventoryDetailSum();
				$scope.getInventoryDetail();
			})
		}
		//获取盘点详情
	$scope.viewDetails = function($event) {
		$scope.numA = 1;
		$scope.numB = 0;
		var data = $($event.target).attr("data").split(",");
		localStorage.data = data;
		$scope.viewInventoryId = data[0];
		$scope.viewCreateDate = data[1];
		$scope.viewUserName = data[2];
		$http({
			method: 'post',
			url: ss + 'inventory/getInventoryDetail',
			params: {
				keyParams: getKeyParams("{\"inventoryId\":\"" + $scope.viewInventoryId + "\"}", keyParams),
				jsonObject: getJsonObject("{\"inventoryId\":\"" + $scope.viewInventoryId + "\"}")
			}
		}).success(function(data, stauts, headers, config) {
			$scope.inventoryDetails = data.data.inventoryDetails;
		})

	}

	//跳转到继续盘点
	$scope.inventoryEdit = function($event) {
		$scope.numB = 1;
		var data = $($event.target).attr("data").split(",");
		$scope.inventoryId = data[0];
		$scope.createDate = data[1];
		$scope.userName = data[2];
		$scope.getInventoryDetailSum();
		$scope.getInventoryDetail();
	}

	//获取差异盘点详情
	$scope.viewDetail = function($event) {
		var data = $($event.target).attr("data").split(",");
		$scope.inventoryId = data[0];
		$scope.createDate = data[1];
		$scope.userName = data[2];
		$scope.getInventoryDetail();
		//$('.createInvDialog').center();
		$('.createInvDialog,.maskBg').show();

	}

	//修改盘点单事件
	$scope.editStkNum = function($event) {
		var invtNums = $(".invtNum");
		$scope.sumInvtNum = 0;
		$.each(invtNums, function(i, n) {
			var invtNum = $(n).val();
			if(invtNum != "") {
				$scope.sumInvtNum = $scope.sumInvtNum + parseInt(invtNum);
			}
		})
	}

	//确认盘点单
	$scope.inventoryDetailsArr = [];
	$scope.editInventoryDetail = function(type) {
		$scope.setInventNum = type;
		if(type == "1") {
			//			if(validateForm("editInventoryDetForm", "msg") == true) {
			var jsonObject = $("#editInventoryDetForm").serializeJson();
			//				对已经加载出盘点数的进行编辑后所有的数据保存在$scope.usedInventoryDetails中
			$scope.jsonObject = JSON.parse(jsonObject);
			for(var m in $scope.jsonObject) {
				if(m != "inventoryId" && m != "proModelid") {
					if($scope.jsonObject[m] == "") {
						$scope.jsonObject[m] = "0"
					}
				}
			}
			jsonObject = JSON.stringify($scope.jsonObject);
			var arr = [];
			for(var m in $scope.usedInventoryDetails) {
				if($scope.usedInventoryDetails[m].proModelid != $scope.proModelid) {
					arr.push($scope.usedInventoryDetails[m]);
				}
			}
			$scope.usedInventoryDetails = arr;
			$scope.dealjsonObject($scope.usedInventoryDetails);
			//				$scope.usedInventoryDetails是修改后的盘点数量列表
			$http({
					method: 'post',
					url: ss + 'inventory/editInventoryDetail',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data, stauts, headers, config) {
					alertmsg(data.msg);
					$('.editInvDialog,.maskBg').hide();
					$scope.getInventoryDetailSum();
					$scope.getInventoryDetail();
				})
				//			} else {
				//				alertmsg(validateForm("editInventoryDetForm", "msg").split(",")[0], 'error');
				//			}
		} else {
			//			if(validateForm("addEditInventoryDetForm", "msg") == true) {
			var jsonObject = $("#addEditInventoryDetForm").serializeJson();
			$scope.jsonObject = JSON.parse(jsonObject);
			for(var m in $scope.jsonObject) {
				if(m != "inventoryId" && m != "proModelid") {
					if($scope.jsonObject[m] == "") {
						$scope.jsonObject[m] = "0"
					}
				}
			}
			jsonObject = JSON.stringify($scope.jsonObject);
			if($scope.inventoryDetailsArr.length > 0) {
				var arr = [];
				for(var m in $scope.inventoryDetailsArr) {
					if($scope.inventoryDetailsArr[m].proModelid != $scope.jsonObject.proModelid) {
						arr.push($scope.inventoryDetailsArr[m]);
					}
				}
				$scope.inventoryDetailsArr = arr;
				$scope.dealjsonObject($scope.inventoryDetailsArr);
			} else {
				$scope.dealjsonObject($scope.inventoryDetailsArr);
			}
			$http({
					method: 'post',
					url: ss + 'inventory/editInventoryDetail',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data, stauts, headers, config) {
					alertmsg(data.msg);
					$('.addEditInvDialog,.maskBg').hide();
					$scope.getInventoryDetailSum();
					$scope.getInventoryDetail();
				})
				//			} else {
				//				alertmsg(validateForm("addEditInventoryDetForm", "msg").split(",")[0], 'error');
				//			}
		}
	}
	$scope.dealjsonObject = function(detailsArr) {
			for(var m in $scope.jsonObject) {
				if(m != "inventoryId" && m != "proModelid") {
					$scope.pronumObj = {};
					$scope.pronumObj.proNum = m;
					$scope.pronumObj.proModelid = $scope.jsonObject.proModelid;
					$scope.pronumObj.invtNum = $scope.jsonObject[m];
					detailsArr.push($scope.pronumObj);
				}
			}
		}
		//结束盘点
	$scope.endInventory = function() {
		$scope.getInventoryDetail();
		//$('#inventAddOrder').center();
		$('#inventAddOrder,.maskBg').show();
		$("#inventAddOrder").centera();
	};
	$scope.endInventory2 = function() {
		$scope.getInventoryDetail();
		// $('#inventAddOrder2').center();
		$('#inventAddOrder2,.maskBg').show();
	};
	//新增页面的调整库存
	$scope.editProductWareh2 = function() {
		var items = $scope.inventoryDetailSums;
		var flag = true;
		if(items && items.length != 0) {
			$.each(items, function(i, n) {
				if(n.invtNum == "" || n.diffNum == "") {
					flag = false;
					return true;
				}
			})
		} else {
			flag = false;
		}
		if(flag == true) {
			$http({
				method: 'post',
				url: ss + 'inventory/updateWarehStk',
				params: {
					keyParams: getKeyParams("{\"inventoryId\":\"" + $scope.inventoryId + "\"}", keyParams),
					jsonObject: getJsonObject("{\"inventoryId\":\"" + $scope.inventoryId + "\"}")
				}
			}).success(function(data, stauts, headers, config) {
				$('.createInvDialog,.maskBg').hide();
				$scope.editInventory();
			})
		} else {
			$('.createInvDialog,.maskBg').hide();
			alertmsg('此盘点单号未盘点商品，请盘点！', 'error');
		}
	}

	//调整库存type,0外层调整库存，1编辑调整库存
	$scope.editProductWareh = function(type) {
			if($scope.invtNum != "") {
				$http({
					method: 'post',
					url: ss + 'inventory/updateWarehStk',
					params: {
						keyParams: getKeyParams("{\"inventoryId\":\"" + $scope.inventoryId + "\"}", keyParams),
						jsonObject: getJsonObject("{\"inventoryId\":\"" + $scope.inventoryId + "\"}")
					}
				}).success(function(data, stauts, headers, config) {
					if(type == "0") {
						$('.createInvDialoglist0,.maskBg').hide();
						$scope.editInventory();
						$scope.getInventory();
						//                        $(".createInvDialoglist0").keydown(function() {
						//                            if (event.keyCode == "13") {
						//                                $scope.editProductWareh('0');
						//                            }
						//                        });
					} else {
						$('.createInvDialog,.maskBg').hide();
						$scope.numB = 0;
						$scope.editInventory();
						$scope.getInventory();
						//                        $(".createInvDialog1").keydown(function() {
						//                            if (event.keyCode == "13") {
						//                                $scope.editProductWareh('1');
						//                            }
						//                        });
					}
				})
			} else {
				alertmsg('此盘点单号未盘点商品，请继续盘点！', 'error');
			}
		}
		//取消编辑
	$scope.closeEdit = function(type) {
		if(type == "1") {
			$('.editInvDialog,.maskBg').hide();
		} else {
			$('.addEditInvDialog,.maskBg').hide();
		}
	}

	$scope.closeEditWareh = function(type) {
			if(type == "0") {
				$scope.numA = 0;
				$scope.numB = 0;
				$scope.numC = 0;
				$('.createInvDialoglist0,.maskBg').hide();
			} else if(type == "1") {
				$('.createInvDialog1,.maskBg').hide();
			} else {

			}
		}
		//更新盘点单状态
	$scope.editInventory = function() {
		var inventoryDetailSums = $scope.inventoryDetailSums;
		if(inventoryDetailSums) {
			var sumStkNums = 0;
			var sumInvtNums = 0;
			var sumDiffNums = 0;
			for(var s in inventoryDetailSums) {
				sumStkNums = sumStkNums + parseInt(inventoryDetailSums[s].stkNum);
				sumInvtNums = sumInvtNums + parseInt(inventoryDetailSums[s].invtNum);
				sumDiffNums = sumDiffNums + parseInt(inventoryDetailSums[s].diffNum);
			}
			$("#sumStkNums").val(sumStkNums);
			$("#sumInvtNums").val(sumInvtNums);
			$("#sumDiffNums").val(sumDiffNums);
			var jsonObject = $("#updateInventoryForm").serializeJson();
			$http({
				method: 'post',
				url: ss + 'inventory/updateInventory',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				alertmsg(data.msg);
				window.location.href = "#/inventory";
			})
		} else {
			$("#sumStkNums").val($scope.stkNum);
			$("#sumInvtNums").val($scope.invtNum);
			$("#sumDiffNums").val($scope.diffNum);
			var jsonObject = $("#updateInventoryForm").serializeJson();
			$http({
				method: 'post',
				url: ss + 'inventory/updateInventory',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				alertmsg(data.msg);
				$scope.getInventory();
			})
		}
	}
	//保存盘点
	$scope.saveInvetory = function(type) {
			var inventoryDetailSums = $scope.inventoryDetailSums;
			if(inventoryDetailSums && inventoryDetailSums.length != 0) {
				var sumStkNums = 0;
				var sumInvtNums = 0;
				var sumDiffNums = 0;
				for(var s in inventoryDetailSums) {
					sumStkNums = sumStkNums + parseInt(inventoryDetailSums[s].stkNum);
					sumInvtNums = sumInvtNums + parseInt(inventoryDetailSums[s].invtNum);
					sumDiffNums = sumDiffNums + parseInt(inventoryDetailSums[s].diffNum);
				}
				$("#sumStkNums").val(sumStkNums);
				$("#sumInvtNums").val(sumInvtNums);
				$("#sumDiffNums").val(sumDiffNums);
				var jsonObject = $("#updateInventoryForm").serializeJson();
				$http({
					method: 'post',
					url: ss + 'inventory/saveInventory',
					params: {
						keyParams: getKeyParams(jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)
					}
				}).success(function(data, stauts, headers, config) {
					alertmsg(data.msg);
					$scope.numA = 0;
					$scope.numB = 0;
					$scope.numC = 0;
					$scope.getInventory();
				})
			} else {
				$scope.numA = 0;
				$scope.numB = 0;
				$scope.numC = 0;
				$scope.getInventory();
			}

		}
		//返回盘点清单列表
	$scope.returnlist = function() {
		$scope.numA = 0;
	}
	$scope.toaddOrder = function() {
		//$('.addInv-datedialog').center();
		$('.addInv-datedialog,.maskBg').show();
		$scope.inventoryDetailSums = "";
		$("[name='addCreateDate']").val("");
		$scope.numC = 1;
		$("#timeset").keydown(function() {
			if(event.keyCode == "13") {
				$scope.setDate();
			}
		});
	};
	//返回上一页
	$scope.callback = function() {
			$scope.numA = 0;
			$scope.numB = 0;
			$scope.numC = 0;
			$scope.getInventory();
		}
		//	获取商品图片
		//	$scope.productImg="";
	$scope.getProductImg = function(obj) {
		var jsonObject = {
			"proModelnum": obj
		};
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'model/getModelByModelNum',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.productInfo = data.data.modelList[0];
			} else {
				alertmsg("获取商品图片失败")
			}
		})
	};
	$scope.showdialoga = 'hide';
	$scope.showdialog = 'hide';
	$scope.closeInventoryProduct = function() {
		$scope.showdialog = 'hide';
		$scope.unjoinedMemberArr = [];
		$("#pagingA").empty();

	}
	$scope.closeInventoryProducta = function() {
		$scope.showdialoga = 'hide';
		$scope.unjoinedMemberArr = [];
		$("#pagingB").empty();
	}
}]);
$(document).ready(function() {
	$(".minMg").children("input.invtNum").focus();
});