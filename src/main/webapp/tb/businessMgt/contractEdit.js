qyApp.controller("contractAddController", function($scope, $timeout, $http, Upload, $compile, $route, $state, $stateParams) {
	$scope.parts1=[];
	$scope.parts2=[];
	$scope.parts3=[];
	$scope.parts4=[];
	$scope.parts5=[];
	$scope.selectpartId1='';
	$scope.selectpartId2='';
	$scope.selectpartId3='';
	$scope.selectpartId4='';
	$scope.selectpartId5='';
	$scope.selectCustomer=false;
	$scope.selectArt=false;
	$scope.selectOperation=false;
	$scope.selectTrain=false;
	$scope.userInfo = angular.fromJson(localStorage.userInfo);
	if($scope.userInfo.roleId=='5'){
		$scope.roleId=$scope.userInfo.roleId;
		$scope.trueName=$scope.userInfo.trueName;
		$scope.saler=$scope.userInfo.userId;
	}
	$scope.myDate = new Date();
//	$scope.data = myDate.getFullYear() + "-" + (1 + myDate.getMonth()) + "-" + myDate.getDate();
	/*判断页面入口*/
	if($stateParams.uiParams.orgInfo!=undefined&&$stateParams.uiParams.orgInfo.orgId != undefined){
		$scope.orgId=$stateParams.uiParams.orgInfo.orgId;
		$scope.shopName=$stateParams.uiParams.orgInfo.shopName;
		$scope.pageIn="1";/*商户添加合同进入*/
	}else{
		$scope.pageIn="2";/*直接添加合同进入*/
	}
	/*判断页面入口*/
	/*选择服务类型的代码*/
	$("#forwardaddForm .shopparent").on("click", function(e) {
		e.stopPropagation();
		$("#forwardaddForm .simulateSelect").toggle();
		$("#forwardaddForm .orgshopName").val("");
		$(window).on("click", function(event) {
			if(event.target.className != "shopparent" && event.target.className != "searchpart" && event.target.className != "fangda" && event.target.tagName != "INPUT" && event.target.className != "selectLi") {
				$("#forwardaddForm .simulateSelect").hide();
			}
		})
	});
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
		$("#forwardaddForm .shopparent").val(thisHtml);
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
	/*选择服务类型的代码*/
	/*选择服务类型的代码*/
	$("#forwardaddForma .shopparent").on("click", function(e) {
		e.stopPropagation();
		$("#forwardaddForma .simulateSelect").toggle();
		$("#forwardaddForma .orgshopName").val("");
		$(window).on("click", function(event) {
			if(event.target.className != "shopparent" && event.target.className != "searchpart" && event.target.className != "fangda" && event.target.tagName != "INPUT" && event.target.className != "selectLi") {
				$("#forwardaddForma .simulateSelect").hide();
			}
		})
		$scope.loadOrgLists();
	});
	$("#forwardaddForma .selectePart").on("click", "li", function() {
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
		$scope.orgId = $("#forwardaddForma .shopparent").attr("data-selectid");
	});
	$("#forwardaddForma .selectePart").on("mouseover", "li", function() {
		$(this).siblings().css({
			"background-color": "#ffffff",
			"color": "#666666"
		})
		$(this).css({
			"background-color": "#00afd4",
			"color": "#ffffff"
		})
	});
	/*加载客户数据*/
	$scope.loadOrgList=function(jsonObject){
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: stat + 'orgManage/getOrgListTB',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				//data.data.orgManageList.unshift({orgId:"",shopName:"请选择"})
				$scope.orgManageLists = data.data.orgManageList;
				var html=[];
				$.each($scope.orgManageLists,function(i,n){
					html.push('<option value="'+n.orgId+'">'+n.shopName+'</option>')
				})
				$('#comCiaList').append(html.join(""));
				$('.selectpicker').selectpicker('refresh');
			} else {
//				alertmsg(data.msg, "error")
			}
		})
	}
	$scope.getUserList=function(){
		var jsonObject={
			"roleIds":"13,14",
			"orgId":JSON.parse(keyParams).orgId,
			"status":"1"
		}
		jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: cas + 'user/getUserList',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				//data.data.orgManageList.unshift({orgId:"",shopName:"请选择"})
				$scope.userLists = data.data.userList;
				var html=[];
				$.each($scope.userLists,function(i,n){
					html.push('<option value="'+n.userId+","+n.departId+'">'+n.trueName+'</option>')
				})
				$('#comCiaLista').append(html.join(""));
				$('.selectpicker').selectpicker('refresh');
			} else {
//				alertmsg(data.msg, "error")
			}
		})
	}
	$scope.loadOrgLists = function() {
		var jsonObject = {
				orgId: "",
				userId: "",
				shopName: "",
				nub: "",
				size: ""
		};
		$scope.loadOrgList(jsonObject);
		$scope.getUserList();
	}
	$scope.loadOrgLists();
		//上传work
	$scope.uploadWork=function(files,type){
		if(files){
			var fileUrl = JSON.parse(keyParams).orgId + "/work/"
			jsonObject = "{\"fileUrl\":\"" + fileUrl + "\"}";
			if(files && files.length) {
				$scope.files = files;
				for(var i = 0; i < files.length; i++) {
					Upload.upload({
						//服务端接收
						url: pos + 'contract/uploadWork',
						//上传的同时带的参数
						data: {
							keyParams: getKeyParams(jsonObject, keyParams),
							jsonObject: getJsonObject(jsonObject)
						},
						file: files[i]
					}).success(function(data, status, headers, config) {
						//上传成功
						if(data.code == "1") {
							if(type=='1'){
								$scope.fileName1=data.data.workName;
								$scope.fileUrl1=data.data.workPath;
							}else if(type=='2'){
								$scope.fileName2=data.data.workName;
								$scope.fileUrl2=data.data.workPath;
							}else if(type=='3'){
								$scope.fileName3=data.data.workName;
								$scope.fileUrl3=data.data.workPath;
							}else{
								$scope.fileName4=data.data.workName;
								$scope.fileUrl4=data.data.workPath;
							}
						} else {
							alertmsg("上传Work失败", "error");
						}
					}).error(function(data, status, headers, config) {
						//上传失败
						console.log('error status: ' + status);
					});
				}
			}
		}
		
	}
	
	/*加载签单人-商户人员*/
	
	/*输入框输入查询*/
	$scope.searchOrgList=function(){
		var jsonObject = {
				orgId: "",
				userId: "",
				shopName: $scope.orgshopName,
				nub: "",
				size: ""
		};
		$scope.loadOrgList(jsonObject);
	}
	/*加载客户数据*/
	/*选择服务类型的代码*/
	if($stateParams.uiParams.type == '1') {
		$stateParams.uiParams.source.push({
			level: 1,
			name: "contractAdd"
		});

	} 
//	else {
//		$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
//
//	};
	$scope.goback = function() {
		$stateParams.uiParams.type="2";
		$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
		$state.go($stateParams.uiParams.source[$stateParams.uiParams.source.length - 1].name, {
			uiParams: $stateParams.uiParams
		});
	}
	/*查找服务类型*/
	$scope.loadServiceType=function(){
		var jsonObject={};
		jsonObject=JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'contract/getServiceType',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.typeListsa=data.data.typeList;
			} else {
				alertmsg(data.msg, "error")
			}
		});
	};
//	$scope.loadServiceType();
	/*查找服务类型*/
	$scope.dataCacu=function(data,monthStr){
		var date1 = new Date(data);
		date1.setMonth(date1.getMonth()+monthStr);
		$scope.endDate = date1.getFullYear()+"-"+(date1.getMonth()+1)+"-"+(date1.getDate()-1);
	};
	/*选择服务类型*/
	$scope.isServiceType='0';
	$scope.selectServiceType=function(type){
		if(type=='1'){
			$scope.isServiceType='0';
		}else{
			$scope.isServiceType='1';
		}
	}
	/*点击添加合同保存按钮*/
	$scope.addContract = function() {
		var shopId="";
		var shopIdArr=JSON.parse($('#shopId').serializeJson());
		if(shopIdArr.shopId instanceof Array){
			if(shopIdArr.shopId!=undefined){
				for(var i=0;i<shopIdArr.shopId.length;i++){
					if(shopId==""){
						shopId=shopIdArr.shopId[i];
					}else{
						shopId=shopId+","+shopIdArr.shopId[i];
					}
				}
			}
		}else{
			shopId=shopIdArr.shopId;
		}
		/*获取签单日期*/
		var signDate= $('[name="signDate"]').val();
		var carryAmount= $('[name="carryAmount"]').val();
		/*校验字段*/
		if($scope.orgManage==''||$scope.orgManage==undefined){
			alertmsg("请选择商户", "error");
			return ;
		}
		if($('[name="shopId"]:checked').length==0){
			alertmsg("店铺列表不能为空", "error");
			return ;
		}
		if($scope.userDpeartInfo==undefined){
			alertmsg("签单人不能为空", "error");
			return ;
		}
		/*客服*/
		var customer=JSON.parse($('#customer').serializeJson());
		console.log(customer)
			customer.fileArr=[];//上传文件数组
		if($scope.fileUrl1!=undefined){
			var fileObjecta={};
			fileObjecta.fileName=$scope.fileName1;
			fileObjecta.fileUrl=$scope.fileUrl1;
			customer.fileArr.push(fileObjecta);
		}
		/*美工服*/
		var art=JSON.parse($('#art').serializeJson());
			art.fileArr=[];//上传文件数组
		if($scope.fileUrl2!=undefined){
			var fileObjectb={};
			fileObjectb.fileName=$scope.fileName2;
			fileObjectb.fileUrl=$scope.fileUrl2;
			art.fileArr.push(fileObjectb);
		}
		/*运营*/
		var operation=JSON.parse($('#operation').serializeJson());
			operation.fileArr=[];//上传文件数组
		if($scope.fileUrl3!=undefined){
			var fileObjectc={};
			fileObjectc.fileName=$scope.fileName3;
			fileObjectc.fileUrl=$scope.fileUrl3;
			operation.fileArr.push(fileObjectc);
		}
		/*培训*/
		var train=JSON.parse($('#train').serializeJson());
			train.fileArr=[];//上传文件数组
		if($scope.fileUrl4!=undefined){
			var fileObjectd={};
			fileObjectd.fileName=$scope.fileName4;
			fileObjectd.fileUrl=$scope.fileUrl4;
			train.fileArr.push(fileObjectd);
		}
		var productArr=[];
		if(customer.prodcutType=='客服'){
			productArr.push(customer);
			if(customer.serviceNum==''||customer.serviceNum==undefined){
				alertmsg("席位数不能为空", "error");
				return;
			}
			if(customer.unitPrice==''||customer.unitPrice==undefined){
				alertmsg("客服席位单价不能为空", "error");
				return;
			}
			if(customer.months==''||customer.months==undefined){
				alertmsg("客服服务周期不能为空", "error");
				return;
			}
			if(customer.serviceType=='值守'){
				customer.deductRate='0';
			}
			if(customer.serviceType=='提成'&&customer.deductRate==""){
				alertmsg("提成比例不能为空", "error");
				return;
			}
			if(customer.beginDate==''||customer.beginDate==undefined){
				alertmsg("客服开始时间不能为空", "error");
				return;
			}
			if(customer.endDate==''||customer.endDate==undefined){
				alertmsg("客服结束时间不能为空", "error");
				return;
			}
			if(customer.serviceAmount==''||customer.serviceAmount==undefined){
				alertmsg("客服产品费用不能为空", "error");
				return;
			}
//			if(customer.taskMemo==''||customer.taskMemo==undefined){
//				alertmsg("客服备注不能为空", "error");
//				return;
//			}
//			if(customer.fileArr.length<1){
//				alertmsg("客服上传附件不能为空", "error");
//				return;
//			}
		}
		if(art.prodcutType=='美工'){
			productArr.push(art);
			if(art.months==''||art.months==undefined){
				alertmsg("美工服务周期不能为空", "error");
				return;
			}
			if(art.beginDate==''||art.beginDate==undefined){
				alertmsg("美工开始时间不能为空", "error");
				return;
			}
			if(art.endDate==''||art.endDate==undefined){
				alertmsg("美工结束时间不能为空", "error");
				return;
			}
			if(art.serviceAmount==''||art.serviceAmount==undefined){
				alertmsg("美工产品费用不能为空", "error");
				return;
			}
//			if(art.taskMemo==''||art.taskMemo==undefined){
//				alertmsg("美工备注不能为空", "error");
//				return;
//			}
//			if(art.fileArr.length<1){
//				alertmsg("美工上传附件不能为空", "error");
//				return;
//			}
		}
		if(operation.prodcutType=='运营'){
			productArr.push(operation);
			if(operation.beginDate==''||operation.beginDate==undefined){
				alertmsg("运营开始时间不能为空", "error");
				return;
			}
			if(operation.endDate==''||operation.endDate==undefined){
				alertmsg("运营结束时间不能为空", "error");
				return;
			}
			if(operation.serviceAmount==''||operation.serviceAmount==undefined){
				alertmsg("运营服务费用不能为空", "error");
				return;
			}
//			if(operation.taskMemo==''||operation.taskMemo==undefined){
//				alertmsg("运营备注不能为空", "error");
//				return;
//			}
//			if(operation.fileArr.length<1){
//				alertmsg("运营上传附件不能为空", "error");
//				return;
//			}
		}
		if(train.prodcutType=='培训'){
			productArr.push(train);
			
			if(train.beginDate==''||train.beginDate==undefined){
				alertmsg("培训开始时间不能为空", "error");
				return;
			}
			if(train.endDate==''||train.endDate==undefined){
				alertmsg("培训结束时间不能为空", "error");
				return;
			}
			if(train.serviceAmount==''||train.serviceAmount==undefined){
				alertmsg("培训产品费用不能为空", "error");
				return;
			}
//			if(train.taskMemo==''||train.taskMemo==undefined){
//				alertmsg("培训备注不能为空", "error");
//				return;
//			}
//			if(train.fileArr.length<1){
//				alertmsg("培训上传附件不能为空", "error");
//				return;
//			}
		}
		if(productArr.length <1||productArr==[]){
			alertmsg("请选择产品类型", "error");
			return ;
		}
		if($scope.totalAmount==''||$scope.totalAmount==undefined){
			alertmsg("请填写合同费用", "error");
			return ;
		}
		if(Number(carryAmount)>Number($scope.accountAmount)){
			alertmsg("抵扣金额不能大于可结转金额", "error");
			return ;
		}
		if(signDate==''||signDate==undefined){
			alertmsg("请选择签单时间", "error");
			return ;
		}
		var jsonObject={
			contractType:'0',
			departId:$scope.userInfo.departId,
			memo:$scope.memo,
			orgId:$scope.orgManage,
			shopId:shopId,
			signDate:signDate,
			userDpeartInfo:$scope.userDpeartInfo,
			totalAmount:$scope.totalAmount,
			carryAmount:carryAmount,
			productArr:productArr
		}
		jsonObject=JSON.stringify(jsonObject);
		console.log(jsonObject)
			$http({
				method: 'post',
				url: pos + 'contractNew/addContract',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				console.log(data)
				if(data.code == 1) {
//					$scope.goback();
					alertmsg("添加合同成功");
					$scope.goback();
				} else {
					alertmsg(data.msg, "error")
				}
			});
	};
	/*查询查询模块的销售人员数据*/
	$scope.loadSalers = function() {
		var jsonObject = {
				trueName: "",
				roleIds: "",
				roleId: "5",
				manageOrgId: "",
				orgId: "",
				userName: "",
				nub: "0",
				size: "0",
				"status":"1"
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: cas + 'user/getUserList',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.userLists = data.data.userList;
				$scope.firstObj = {
						appId: "",
						count: "",
						email: "",
						manageOrgId: "",
						orgId: "",
						orgName: "",
						roleId: "",
						roleName: "",
						status: "",
						telphone: "",
						trueName: "请选择",
						userId: "",
						userName: ""
				};
				$scope.userLists.unshift($scope.firstObj);
			} else {
				alertmsg(data.msg, "error")
			}
		});
	};
	//$scope.loadSalers();
	/*查询查询模块的销售人员数据*/
	/*	查询付款方式*/
	$scope.getPayType = function() {
		var jsonObject = {
				appId: "3",
				type: "pay_type"
		};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: pos + 'typeBase/getTypeBase',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				data.data.types.unshift({
					"name": "请选择",
					"value":""
				})
				$scope.typeLists = data.data.types;
			} else {
				alertmsg(data.msg, "error")
			}
		});
	}
	//$scope.getPayType();
	/*查询付款方式*/
	/*点击添加合同保存按钮*/
	/*日期插件函数*/
	/*$timeout(function() {
		laydate({
			//elem: '#effectdatatime',
			format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
			festival: true, //显示节日
			//min: laydate.now(0),
			istoday: true,
		});
	}, 500)*/
	/*日期插件函数*/

	/*根据商户id获取旗下店铺*/
	$scope.getShopList=function(){
		$scope.isDeduction=false;
		if($scope.orgManage==undefined||$scope.orgManage==""){
			return;
		}
		/*获取可结转金额*/
		angular.forEach($scope.orgManageLists,function(item){
			if(item.orgId==$scope.orgManage){
				$scope.accountAmount=item.accountAmount;
			}
		});
		console.log($scope.accountAmount)
		var shopObject={
				orgId:$scope.orgManage,
				shopProp:"3"
		};
		jsonObject = angular.toJson(shopObject);
		$http({
			method: 'post',
			url: pos + 'shop/getMerchantShop',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.shopList = data.data.shopList;
				$('[name="shopNum"]').val("0");
			} else {
				alertmsg(data.msg, "error")
			}
		});
	}

	//获取部门区域
	$scope.getDepartArea=function(){
		var jsonObject = {};
		jsonObject = angular.toJson(jsonObject);
		$http({
			method: 'post',
			url: cas + 'depart/getDepartArea',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				$scope.departAreaList = data.data.departAreaList;
			} else {
				alertmsg("获取失败", "error");
			}
		});
	}
	$scope.getDepartArea();
	//查询区域下的部门列表
	$scope.getDepartList = function(departArea,objClass){
		if(departArea==""){
			$('.'+objClass+'1').remove();
		}else{
			$('.'+objClass+'1').remove();
			var jsonObject = "{\"pDepartId\":\""+0+"\",\"departArea\":\""+departArea+"\"}";
			$http({
				method: 'post',
				url: cas + 'depart/getDepartList',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if (data.code == 1) {
					$scope.parts1 = data.data.departList;
					$scope.type="1";
					var html=[];
					html.push('<select class="col-md-2 mgr10 '+objClass+'1" ng-model="'+objClass+'select"  ng-change="sortIdChange('+objClass+'select,type)">');
					html.push('<option value="" selected="selected">请选择</option>');
					$.each($scope.parts1,function(i,n){
						html.push('<option value="'+n.departId+'">'+n.departName+'</option>');
					})
					html.push('</select>');

					var template=angular.element(html.join(""));
					html=$compile(template)($scope);
					angular.element($('.'+objClass).append(html));
				} else {
					alertmsg("获取部门分组失败", "error");
				}
			})
		}

	}
	//查询部门分组
	$scope.sortIdChange = function(id, type){
		$scope.departId=id;
		var jsonObject = "{\"pDepartId\":\""+id+"\"}";
		$http({
			method: 'post',
			url: cas + 'depart/getDepartList',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if (data.code == 1) {              	
				if(type == "1") {
					$scope.parts2 = data.data.departList; 
//					$scope.type="2";
//					var html=[];
//					html.push('<select class="col-md-2 mgr10 '+objClass+'1" ng-model="'+objClass+'select1"  ng-change="sortIdChange('+objClass+'select,type)">');
//					html.push('<option value="" selected="selected">请选择</option>');
//					$.each($scope.parts2,function(i,n){
//					html.push('<option value="'+n.departId+'">'+n.departName+'</option>');
//					})
//					html.push('</select>');

//					var template=angular.element(html.join(""));
//					html=$compile(template)($scope);
//					angular.element($('.'+objClass).append(html));
				}else if(type == "2"){
					$scope.parts3 = data.data.departList; 
					$scope.parts4 = [];
					$scope.parts5 = [];
					$scope.selectpartId4='';
					$scope.selectpartId5='';
				}else if(type == "3"){
					$scope.parts4 = data.data.departList; 
					$scope.parts5 = [];
					$scope.selectpartId5='';
				}else if(type == "4"){
					$scope.parts5 = data.data.departList; 
				}
			} else {
				alertmsg("获取部门列表信息失败", "error");
			}
		})
	}
	//跳转添加客户
	$scope.gotoMemberAdd = function(type){
		var params = {
				"source":$stateParams.uiParams.source,
				"addtype": type,
				"type": "1"
		};
		$state.go("commercialAdd", {
			uiParams: params,
			orgType:$scope.userInfo.orgType 			
		}); 
	};

	//跳转添加部门
	$scope.goToStreAdd = function(){
		var params = {
				"source":$stateParams.uiParams.source,
				"type": "1"
		};
		$state.go("storeAdd", {
			uiParams: params,
			orgType:$scope.userInfo.orgType			
		}); 
	};

	$scope.qian=function($event){
		var obj=$event.target;
		if($(obj).val()=="1"){
			$('#contractNum').show();
		}else{
			$('#contractForm')[0].reset();
			$('.selectpicker').selectpicker('refresh');
			$('#contractNum').hide();
		}

	}

	
	//合同续签
	$scope.getNewContract=function($event){
		var obj=$event.target;
		var contractNum=$(obj).val();
		if(contractNum.length<=6){
			alertmsg("请输入大于7位数的合同编号", "error");
			return;
		}
//		$scope.orgManage="12378";
//		$('[name="shopNum"]').val("1234");
//		$('[name="totalprice"]').val("1");
		if(contractNum!=""){
			$http({
				method: 'post',
				url: pos + 'contract/getContractByContractNum',
				params: {
					keyParams: getKeyParams("{\"contractNum\":\""+contractNum+"\"}", keyParams),
					jsonObject: getJsonObject("{\"contractNum\":\""+contractNum+"\"}")
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == 1) {
					var contractList=data.data.contractList;
					if(contractList){
						var contract=contractList[0];
						$scope.orgManage=contract.orgId;
						$('[name="orgId"]').val(contract.orgId);
						$scope.getShopList();

						$('.selectpicker').selectpicker('refresh');
						$('[name="shopNum"]').val(contract.shopNum);
						$('[name="totalprice"]').val(contract.totalprice);
						//$('[name="serviceType"]').val(contract.serviceType);
						if(contract.serviceType=="1"){
							$('#zh').prop("checked",true);
						}else{
							$('#ti').prop("checked",false);
						}
						//$('[name="productType"]').val(contract.productType);
						var objClass="ke";
						if(contract.productType=="客服"){
							$('#ke').prop("checked",true);
							var html=[];
							html.push('<div class="infoLine infoLinec fn-clear '+objClass+'Depart">');
							html.push('<div class="fn-left infoTitile">');
							html.push('<em class="am-ft-red mgr5">*</em>'+contract.productType+'部门：');
							html.push('</div><div class="'+objClass+'">');
							html.push('<select class="col-md-2 mgr10 '+objClass+'1" name=""  id="departName"   data="'+objClass+'"  onchange="getDepartList(this)">');
							html.push('<option value="" selected="selected">请选择</option>');
							$.each($scope.departAreaList,function(i,n){
								html.push('<option value="'+n.areaName+'">'+n.areaName+'</option>');
							})
							html.push('</select>');
							html.push('</div>');
							html.push('</div>');
							$('.contractRemark').before(html.join(''));
						}else{
							$('.'+objClass+'Depart').remove();
						}
						objClass="mei";
						if(contract.productType=="美工"){
							$('#mei').prop("checked",true);
							var html=[];
							html.push('<div class="infoLine infoLinec fn-clear '+objClass+'Depart">');
							html.push('<div class="fn-left infoTitile">');
							html.push('<em class="am-ft-red mgr5">*</em>'+contract.productType+'部门：');
							html.push('</div><div class="'+objClass+'">');
							html.push('<select class="col-md-2 mgr10 '+objClass+'1" name=""  id="departName"   data="'+objClass+'"  onchange="getDepartList(this)">');
							html.push('<option value="" selected="selected">请选择</option>');
							$.each($scope.departAreaList,function(i,n){
								html.push('<option value="'+n.areaName+'">'+n.areaName+'</option>');
							})
							html.push('</select>');
							html.push('</div>');
							html.push('</div>');
							$('.contractRemark').before(html.join(''));
						}else{
							$('.'+objClass+'Depart').remove();
						}
						objClass="yun";
						if(contract.productType=="运营"){
							$('#yun').prop("checked",true);
							var html=[];
							html.push('<div class="infoLine infoLinec fn-clear '+objClass+'Depart">');
							html.push('<div class="fn-left infoTitile">');
							html.push('<em class="am-ft-red mgr5">*</em>'+contract.productType+'部门：');
							html.push('</div><div class="'+objClass+'">');
							html.push('<select class="col-md-2 mgr10 '+objClass+'1" name=""  id="departName"   data="'+objClass+'"  onchange="getDepartList(this)">');
							html.push('<option value="" selected="selected">请选择</option>');
							$.each($scope.departAreaList,function(i,n){
								html.push('<option value="'+n.areaName+'">'+n.areaName+'</option>');
							})
							html.push('</select>');
							html.push('</div>');
							html.push('</div>');
							$('.contractRemark').before(html.join(''));
						}else{
							$('.'+objClass+'Depart').remove();
						}
						objClass="pei";
						if(contract.productType=="培训"){
							$('#pei').prop("checked",true);
							var html=[];
							html.push('<div class="infoLine infoLinec fn-clear '+objClass+'Depart">');
							html.push('<div class="fn-left infoTitile">');
							html.push('<em class="am-ft-red mgr5">*</em>'+contract.productType+'部门：');
							html.push('</div><div class="'+objClass+'">');
							html.push('<select class="col-md-2 mgr10 '+objClass+'1" name=""  id="departName"   data="'+objClass+'"  onchange="getDepartList(this)">');
							html.push('<option value="" selected="selected">请选择</option>');
							$.each($scope.departAreaList,function(i,n){
								html.push('<option value="'+n.areaName+'">'+n.areaName+'</option>');
							})
							html.push('</select>');
							html.push('</div>');
							html.push('</div>');
							$('.contractRemark').before(html.join(''));
						}else{
							$('.'+objClass+'Depart').remove();
						}
						objClass="";
						$('[name="serviceMemo"]').val(contract.serviceMemo);
						$('[name="beginDate"]').val(contract.beginDate);
						$('[name="endDate"]').val(contract.endDate);
						$('[name="planDate"]').val(contract.planDate);
						//$('[name="serviceArea"]').val(contract.serviceArea);
						if(contract.serviceArea=="杭州"){
							$('#hz').prop("checked",true);
						}
						if(contract.serviceArea=="武汉"){
							$('#wh').prop("checked",true);
						}
						if(contract.serviceArea=="合肥"){
							$('#hf').prop("checked",true);
						}
						$('[name="serviceDepart"]').val(contract.serviceDepart);
						$('[name="remark"]').val(contract.remark);
					}
					//$scope.shopList = data.data.shopList;
				} else {
					alertmsg(data.msg, "error")
				}
			});
		}

	}

	$scope.updateContract=function(){
		var jsonObject=JSON.parse($('#contractForm').serializeJson());
		var shopId="";
		if(jsonObject.shopId instanceof Array){
			if(jsonObject.shopId!=undefined){
				for(var i=0;i<jsonObject.shopId.length;i++){
					if(shopId==""){
						shopId=jsonObject.shopId[i];
					}else{
						shopId=shopId+","+jsonObject.shopId[i];
					}

				}
			}
			jsonObject.shopId=shopId;
		}
		jsonObject.userId=$scope.userInfo.userId;
		jsonObject.departId=$scope.userInfo.deptId;
		jsonObject.contractStatus='0';
		jsonObject.orgId=$scope.orgManage;
		jsonObject=JSON.stringify(jsonObject);
//		$http({
//			method: 'post',
//			url: pos + 'contract/addContract',
//			params: {
//				keyParams: getKeyParams(jsonObject, keyParams),
//				jsonObject: getJsonObject(jsonObject)
//			}
//		}).success(function(data, stauts, headers, config) {
//			if(data.code == 1) {
//				$scope.goback();
//				alertmsg("续签合同成功");
//			} else {
//				alertmsg(data.msg, "error")
//			}
//		});
	}
	$scope.shopCountDis=false;
	$scope.shopChecked=function($event){
		$scope.shopCountDis=true;
		var shopNum=parseInt($('[name="shopCount"]').val());
		if($($event.target).prop("checked")){
			shopNum++;
		}else{
			shopNum--;
		}
		$('[name="shopCount"]').val(shopNum);
		$scope.shopCountDis=false;
	}
	
	$scope.showShopNum=false;
	$scope.productTypeChecked=function($event){
		var val=$($event.target).val();
//		var objClass;
//		if(val=="客服") objClass="ke";
//		if(val=="美工") objClass="mei";
//		if(val=="运营") objClass="yun";
//		if(val=="培训") objClass="pei";
		if(val=="客服"){
			if($($event.target).prop("checked")){
				$scope.showShopNum=true;
//				var html=[];
//				html.push('<div class="infoLine infoLinec fn-clear '+objClass+'Depart">');
//				html.push('<div class="fn-left infoTitile">');
//				html.push('<em class="am-ft-red mgr5">*</em>'+val+'部门：');
//				html.push('</div><div class="'+objClass+'">');
//				html.push('<select class="col-md-2 mgr10 '+objClass+'1" name=""  id="departName"   data="'+objClass+'"  onchange="getDepartList(this)">');
//				html.push('<option value="" selected="selected">请选择</option>');
//				$.each($scope.departAreaList,function(i,n){
//					html.push('<option value="'+n.areaName+'">'+n.areaName+'</option>');
//				})
//				html.push('</select>');
//				html.push('</div>');
//				html.push('</div>');
//	
//	//			var template=angular.element(html.join(""));
//	//			html=$compile(template)($scope);
//	//			angular.element($('.contractRemark').before(html));
//				$('.contractRemark').before(html.join(''));
			}else{
				$scope.showShopNum=false;
//				$('.'+objClass+'Depart').remove();
			}
		}
	}


//	<div class="infoLine infoLinec fn-clear serviceDepart">
//	<div class="fn-left infoTitile">
//	<em class="am-ft-red mgr5">*</em>服务部门：
//	</div>

//	<div>
//	<select class="col-md-2 mgr10" ng-model="depart1" ng-options='depart.areaName as depart.areaName for depart in departAreaList' ng-change="getDepartList(depart1)">
//	<option value="">请选择</option>
//	</select>
//	<select class="col-md-2 mgr10" ng-show="parts1.length != 0" ng-options="n.departId as n.departName for n in parts1" ng-model="selectKe1" ng-change="sortIdChange(selectKe1,1)">
//	<option value="">请选择</option>
//	</select>
//	<select class="col-md-2 mgr10" ng-show="parts2.length != 0" ng-options="x.departId as x.departName for x in parts2" ng-model="selectKe2" ng-change="sortIdChange(selectKe1,2)">
//	<option value="">请选择</option>
//	</select>
//	<select class="col-md-2 mgr10" ng-show="parts3.length != 0" ng-options="a.departId as a.departName for a in parts3" ng-model="selectKe3" ng-change="sortIdChange(selectKe3,3)">
//	<option value="">请选择</option>
//	</select>
//	</div>
//	<!-- <input type="text" name='serviceDepart' /> -->
//	</div>


});

function getDepartList(obj){
	var objClass=$(obj).attr("data");
	var departArea=$(obj).val();
	if(departArea==""){
		$('.'+objClass+'2').remove();
	}else{
		$('.'+objClass+'2').remove();
		var jsonObject = "{\"pDepartId\":\""+0+"\",\"departArea\":\""+departArea+"\"}";	 			       	       	       
		$.ajax({
			type:"post",
			url: cas + 'depart/getDepartList',			
			data : {
				keyParams:getKeyParams(jsonObject, keyParams),
				jsonObject:getJsonObject(jsonObject)},
				success : function(data) {
					data=JSON.parse(data);
					if (data.code == 1) {
						if(data.data.departList.length>0){							
							var html=[];
							html.push('<select class="col-md-2 mgr10 '+objClass+'1 '+objClass+'2" data="'+objClass+'" type="1" name="serviceDepartId" onchange="sortIdChange(this)">');
							html.push('<option value="" selected="selected">请选择</option>');
							$.each(data.data.departList,function(i,n){
								html.push('<option value="'+n.departId+'">'+n.departName+'</option>');
							})
							html.push('</select>');
							$('.'+objClass).append(html.join(''));
						}
						
					} else {
						alertmsg("获取部门分组失败", "error");
					}
				}
		});
	}
}

//查询部门分组
function sortIdChange(obj){
	var objClass=$(obj).attr("data");
	var departId=$(obj).val();
	var type=$(obj).attr("type");
	var jsonObject = "{\"pDepartId\":\""+departId+"\"}";

	$.ajax({
		type:"post",
		url: cas + 'depart/getDepartList',	
		data : {
			keyParams:getKeyParams(jsonObject, keyParams),
			jsonObject:getJsonObject(jsonObject)},
			success : function(data) {
				data=JSON.parse(data);
				if (data.code == 1) {              	
					if(type == "1") {
						$('.'+objClass+'3').remove();
						if(data.data.departList.length>0){
							$('.'+objClass+'2').removeAttr('name');
							var html=[];
							html.push('<select class="col-md-2 mgr10 '+objClass+'1 '+objClass+'2 '+objClass+'3" type="2" name="serviceDepartId" ng-change="sortIdChange(this)">');
							html.push('<option value="" selected="selected">请选择</option>');
							$.each(data.data.departList,function(i,n){
								html.push('<option value="'+n.departId+'">'+n.departName+'</option>');
							})
							html.push('</select>');
							$('.'+objClass).append(html.join(''));
						}
					}else if(type == "2"){
						$('.'+objClass+'4').remove();
						if(data.data.departList.length>0){
							$('.'+objClass+'3').removeAttr('name');
							var html=[];
							html.push('<select class="col-md-2 mgr10 '+objClass+'1 '+objClass+'2 '+objClass+'3 '+objClass+'4" type="3" name="serviceDepartId" ng-change="sortIdChange(this)">');
							html.push('<option value="" selected="selected">请选择</option>');
							$.each(data.data.departList,function(i,n){
								html.push('<option value="'+n.departId+'">'+n.departName+'</option>');
							})
							html.push('</select>');
							$('.'+objClass).append(html.join(''));
						}
					}else if(type == "3"){
//						$scope.parts4 = data.data.departList; 
//						$scope.parts5 = [];
//						$scope.selectpartId5='';
					}else if(type == "4"){
//						$scope.parts5 = data.data.departList; 
					}
				} else {
					alertmsg("获取部门列表信息失败", "error");
				}
			}
	});
	
}
