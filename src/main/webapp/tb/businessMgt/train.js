qyApp.controller('trainController',['$scope', '$http', '$compile', '$state', '$stateParams', function($scope, $http, $compile, $state, $stateParams) {
	//初始化数据
	$scope.parts1 = [];
	$scope.parts2 = [];
	$scope.parts3 = [];
    $scope.parts4 = [];
	$scope.model={
		'isShiftTab':"1",
	}
	var userInfo=JSON.parse(localStorage.userInfo);
	
	//查询参数
	$scope.search={
		"orgId":"",
		"signName":"",
		"serviceType":"",
		"serviceArea":"",
		"months":"",
		"productType":"培训",
		"type":"2",
		"serviceDepartId":"",
		"roleId":"12"//userInfo.roleId,
//					"departId":userInfo.departId
	}
	/**
	 * tab选项卡切换:shiftShopTab
	 * 部门选择:departSelect
	 * 部门选择回调方法:departSelectBack
	 */
	/*店铺选项卡*/
	$scope.shiftShopTab=function(type){
		if(type=='1'){
			$scope.search.taskStatus="'4'";
			$scope.model.isShiftTab='1';
		}else if(type=='2'){
			$scope.search.taskStatus="'5','6'";
			$scope.model.isShiftTab='2';
		}else if(type=='3'){
			$scope.search.taskStatus="'7'";
			$scope.model.isShiftTab='3';
		}else{
			$scope.search.taskStatus="";
			$scope.model.isShiftTab='4';
		}
		$scope.getContracts();
	}
	
	$scope.departSelect = function(id, type){
		$scope.departSelectType=type;
		if(id==null){
			if($scope.departSelectType == 1) {
				$scope.search.serviceDepartId="";
				$scope.parts2 = []; 
				$scope.parts3 = [];
				$scope.parts4 = [];
			}else if($scope.departSelectType == 2){
				if($scope.selectKe1==null) return;
				$scope.search.serviceDepartId=$scope.selectKe1;
				$scope.parts3 = [];
				$scope.parts4 = [];
			}else if($scope.departSelectType == 3){
				if($scope.selectKe2==null) return;
				$scope.search.serviceDepartId=$scope.selectKe2;
				$scope.parts4 = [];
			}
			return;
		}
		$scope.departSelectType=type;
		//选择部门
		$scope.search.serviceDepartId=id;
		var jsonObject = {pDepartId:id};
		$scope.getDepartList(jsonObject);
	}
	
	$scope.getDepart = function (){
		//选择服务区域
		$scope.departSelectType=0;
		$scope.search.serviceDepartId="";
		$scope.parts1 = []; 
		$scope.parts2 = [];
		$scope.parts3 = [];
	    $scope.parts4 = [];
		var jsonObject = {pDepartId:0,departArea:$scope.search.serviceArea};
		$scope.getDepartList(jsonObject);
	}
	
	function departSelectBack(rsDepartList){
		if($scope.departSelectType==0){
			$scope.parts1 = rsDepartList; 
			$scope.parts2 = [];
			$scope.parts3 = [];
		    $scope.parts4 = [];
		}else if($scope.departSelectType == 1) {
		    $scope.parts2 = rsDepartList; 
			$scope.parts3 = [];
		    $scope.parts4 = [];
		}else if($scope.departSelectType == 2){
			$scope.parts3 = rsDepartList; 
		    $scope.parts4 = [];
		}else if($scope.departSelectType == 3){
			$scope.parts4 = rsDepartList;
		}
	}
	
	/**
	 * 接口调用部分:
	 * getContracts 获取合同数据
	 * getDepartArea 获取服务区域数据
	 * getDepartList 获取部门列表
	 */
	/*查询合同列表*/
	var from='0';
	var pageSize=10;
	$scope.getContracts =function(){
		/*默认查询在册店铺*/
		$scope.jsonPage={"nub":""+from+"","size":""+pageSize+""};
		if($scope.search.serviceArea==undefined||$scope.search.serviceArea==null){
			$scope.search.serviceArea="";
		}
		$.extend($scope.jsonPage,$scope.search);
		var jsonObject=JSON.stringify($scope.jsonPage);
		console.log($scope.jsonObject)
		$http({
			method: 'post',
			url: pos + 'contractNew/getContract',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			console.log(data)
			if(data.code == 1) {
				if(data.data.contractList){
					$scope.contractList = data.data.contractList;
					$scope.count1="";$scope.count2="";
					$scope.count3="";$scope.count4="";
					if($scope.model.isShiftTab=='1'){
						$scope.count1=data.data.count;
					}else if($scope.model.isShiftTab=='2'){
						$scope.count2=data.data.count;
					}else if($scope.model.isShiftTab=='3'){
						$scope.count3=data.data.count;
					}else{
						$scope.count4=data.data.count;
					}
					$scope.count=data.data.count;
					$("#paging").empty();
					if($scope.count > pageSize) {
						$scope.createPagePlugin($scope.count,pageSize);
					}
				}
			} else {
				alertmsg("查询失败", "error")
			}
		});
	}
	
	/*分页代码*/
	$scope.createPagePlugin = function(total, pageSize) {
		paging = pagePlugin.createPaging({
			renderTo: 'paging',
			total: total,
			pageSize: pageSize
		});
		paging.goPage = function(from, to) {
			$scope.page(from - 1, pageSize);
		}
	};
	
	$scope.page = function(from, pageSize) {
		/*默认查询在册店铺*/
		$scope.jsonPage={"nub":""+from+"","size":""+pageSize+""};
		$.extend($scope.jsonPage,$scope.search);
		var jsonObject=JSON.stringify($scope.jsonPage);
		console.log($scope.jsonObject)
		$http({
			method: 'post',
			url: pos + 'contractNew/getContract',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			console.log(data)
			if(data.code == 1) {
				if(data.data.contractList){
					$scope.contractList = data.data.contractList;
				}
			} else {
				alertmsg("查询失败", "error")
			}
		});
	}
	
	$scope.getDepartArea =function(){
		var jsonObject="{}";
		$http({
			method: 'post',
			url: cas + 'depart/getDepartArea',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				if(data.data.departAreaList){
					$scope.departAreaList = data.data.departAreaList;
				}
			} else {
				alertmsg("查询失败", "error")
			}
		});
	}
	
	$scope.getDepartList =function(jsonObject){
		jsonObject.departType=$scope.search.productType;
		jsonObject=JSON.stringify(jsonObject);
		var rsDepartList=[];
		$http({
			method: 'post',
			url: cas + 'depart/getDepartList',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				if(data.data.count!='0'){
					rsDepartList= data.data.departList;
				}
				departSelectBack(rsDepartList);
			} else {
				alertmsg("查询失败", "error")
			}
		});
	}
	
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
				$scope.orgManageLists = data.data.orgManageList;
				var html=[];
				$.each($scope.orgManageLists,function(i,n){
					html.push('<option value="'+n.orgId+'">'+n.shopName+'</option>')
				})
				$('#comCiaList').append(html.join(""));
				$('.selectpicker').selectpicker('refresh');
			} else {
				alertmsg(data.msg, "获取商户信息失败")
			}
		})
	}
	
	/**
	 * 路由跳转方法
	 * showLog:查看日志明细
	 * loadInit:初始化页面
	 */
	function loadInit(){
		//初始化数据
		$scope.shiftShopTab("1");
		//初始化服务区域数据
		var jsonObject = {
				orgId: "",
				userId: "",
				shopName: "",
				nub: "",
				size: ""
		};
		$scope.loadOrgList(jsonObject);
		$scope.getDepartArea();
	}
	
	$scope.showLog=function(obj){
		var sourceArr = [{
			level: 0,
			name: "artDesigner"
		}];
		var params={
			"source": sourceArr,
			"type": "1",
			"contractInfo":obj.contract,
			"tabType":3,
			"taskType":"3",
			"tabShow":"1,3,4,5"
		};
		$state.go("serviceDetails", {
			uiParams: params
		});
	}
	

	loadInit();

}]);