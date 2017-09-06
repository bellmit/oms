qyApp.controller('addDiscountCardstep3Controller', ['$scope','$http','$compile','Upload','$sce',"$state","$stateParams",function($scope,$http,$compile,Upload,$sce,$state,$stateParams) {
	$scope.activeTime=$stateParams.uiParams.activeTime;
	$scope.lapsedTime=$stateParams.uiParams.lapsedTime;
	$scope.discount=$stateParams.uiParams.discount;
	$scope.randomMIn=$stateParams.uiParams.randomMIn;
	$scope.randomMax=$stateParams.uiParams.randomMax;
	$scope.fixedLimit=$stateParams.uiParams.fixedLimit;
	$scope.couponModality=$stateParams.uiParams.couponModality;
	$scope.amount=$stateParams.uiParams.amount;
	$scope.superposition=$stateParams.uiParams.superposition;
	$scope.fullAmount=$stateParams.uiParams.fullAmount;
	$scope.disCountName=$stateParams.uiParams.disCountName;
	$scope.couponType=$stateParams.uiParams.couponType;
	$scope.autoProviding=$stateParams.uiParams.autoProviding;
	$scope.limitCollar=$stateParams.uiParams.limitCollar;
	$scope.countPro=$stateParams.uiParams.countPro;
	$scope.countShop=$stateParams.uiParams.countShop;
	$scope.couponCount=$stateParams.uiParams.couponCount;
	$scope.memberScope=$stateParams.uiParams.memberScope;
	$scope.memberUnionName=$stateParams.uiParams.memberUnionName;
	$scope.gradeName=$stateParams.uiParams.gradeName;
	$scope.productScope=$stateParams.uiParams.productScope;
	$scope.orgScope=$stateParams.uiParams.orgScope;
	$scope.couponMsgId=$stateParams.uiParams.couponMsgId;
	$scope.colorValue=$stateParams.uiParams.colorValue;
	$("#bgColor3").css("background",$scope.colorValue);
	//提交审核
	$scope.submitCheck=function(type){
		if(type=='1'){
		$state.go("disCountCard",{uiParams:""});
		}else{
		$state.go("disCountCard",{uiParams:""});
				$scope.jsonObject = {
						  superposition:$scope.superposition,
						  activeTime:$scope.activeTime,
						  couponModality:$scope.couponModality,
						  discount:$scope.discount,
						  couponCount:$scope.couponCount,
						  productScope:$scope.productScope,
						  fullAmount:$scope.fullAmount,
						  couponState:'1',
						  autoProviding:$scope.autoProviding,
						  memberScope:$scope.memberScope,
						  couponType:$scope.couponType,
						  limitCollar:$scope.limitCollar,
						  lapsedTime:$scope.lapsedTime,
						  couponMsgId:$scope.couponMsgId,
						  colorValue:$scope.colorValue,
						  useCount:'0',
						  orgScope:$scope.orgScope
						  };
		jsonObject = JSON.stringify($scope.jsonObject);
		$http({
	         method:'post',
	         url:pos+'couponMsg/updateCpMsg',
	         params:{
	             keyParams:getKeyParams(jsonObject,keyParams),
	             jsonObject:getJsonObject(jsonObject)
	         }
	     }).success(function(data,stauts,headers,config){
	    	 if (data.code == 1) {
	    	 	
	    	 } else {
	    		 alertmsg("提交失败","error");                   
	         }
	     })
		}
			
	}
	//查看商品和门店
	$scope.showtype='';/*1 显示商品 2 显示门店*/
	$scope.showFrame=function(type){
		if(type=="1"){
			$('.AddGoodsAndStoreItem,.maskBg').show();
			$scope.showtype='1';
		}else{
			$('.AddGoodsAndStoreItem,.maskBg').show();
			$scope.showtype='2';
		}
		$scope.queryPro();
		$scope.queryShop();
	}
		//查询商品
	$scope.queryPro=function(){
			var reg=/,$/gi;//去掉最后一位结尾的逗号
			$scope.productScope = $scope.productScope.replace(reg,"");
			var jsonObject = {
			    "proModelids":$scope.productScope,
//				"proModelids":"311001,304002,304001,299001,3001",
				"orgId": $scope.orgId,
				"proGrandparentSortId": '',
				"proParentSortId": '',
				"proSortId": '',
				"proModelid": '',
				"brandId": '',
				"proYear": '',
				"proSeason": '',
				"startStock": "",
				"endStock": "",
				"nub": "0",
				"size": "0"
			};
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'product/getAllProduct',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.products = data.data.productList;
					$scope.countPro=$scope.products.length;
				} else {
					alertmsg("获取商品信息失败", "error");
				}
			});
	}
	//查询门店
	$scope.queryShop=function(){
		var reg=/,$/gi;//去掉最后一位结尾的逗号
		var orgIds=$scope.orgScope.replace(reg,"");
		var jsonObject = {
			orgIds:orgIds,
			shopId: '',
			shopName: ''
		};
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'shop/getShopByOrgId',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
					$scope.orgList = data.data.orgList;
					$scope.countShop=data.data.orgList.length;
			} else {
				alertmsg("获取门店信息失败", "error");
			}
		})

	}
	//关闭查看门店或者商品弹框
	$scope.closeProOrShop=function(){
		$('.maskBg').hide();
		$scope.showtype='';
	}
	//创建类似卡券
	$scope.createCard=function(){
		$state.go("editDiscountCard",{uiParams:""});
	}
}]);