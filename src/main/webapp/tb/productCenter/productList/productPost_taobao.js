qyApp.controller("productPost_taobaoController",function($scope, $http, Upload, $compile, $route,$state,$stateParams) {
	$scope.orgId = $stateParams.uiParams.orgId;
	$scope.model = $stateParams.uiParams.model;
	$scope.source = $stateParams.uiParams.source;
	$scope.publish = $stateParams.uiParams.publish;
	$scope.selOrg = $stateParams.uiParams.selOrg;
	$scope.sortId = $stateParams.uiParams.sortId;
	$scope.type = $stateParams.uiParams.type;
	$scope.orgInfo = $stateParams.uiParams.orgInfo;
	$scope.onlyShow = false;
	$scope.saleTotalCount=0;

//	$scope.province;
//	$scope.city;
	$scope.sellPoint="";
	$scope.count =0;
	$scope.price = 0;
	$scope.showSaleFlag = "0";
	$scope.ColorNumAndName = [];
	$scope.SizeNumAndName = [];
	$scope.publishs = [];
	for(var i=0; i<$scope.publish.length; i++){
		for(var j=0; j<$scope.selOrg.length; j++){
			if($scope.publish[i].orgId == $scope.selOrg[j]){
				$scope.publishs.push($scope.publish[i]);
			}
		}
	}
	
	//地区联动
    $scope.province;
    $scope.city;
    $scope.provinceName="";
    $scope.cityName="";
    //请求省文件
    $scope.initprovinces=function(){
    	for(var i=0;i<$scope.provinces.length;i++){
  			if($scope.provinces[i].name==$scope.provinceName){
  				$scope.provinceId=$scope.provinces[i].id;
  			}
  		}
    }
    $http.get('/oms/static/base/json/province.json').success(function(data)
    {
        $scope.provinces = data;
    });
    //请求市文件
    $scope.initcitys=function(){
    	if(""!=$scope.provinceId){
        	for(var i=0;i<$scope.citys[$scope.provinceId].length;i++){
    			if($scope.citys[$scope.provinceId][i].name==$scope.cityName){
    				$scope.cityId=$scope.citys[$scope.provinceId][i].id;
    			}
    		}
    	}
    }
    $http.get('/oms/static/base/json/city.json').success(function(data)
    {
        $scope.citys = data;
    });
    
    $scope.colorList;
	//根据平台类目id获取必填属性
	$scope.getAttrValueBySortId=function(){
		var jsonObject = {
				sortId:	$scope.sortId,
				orgId: $scope.orgId,
				modelId: $scope.model.proModelid,
				type:$scope.type
		};
		var jsonObject = JSON.stringify(jsonObject);
		$http({
			async: true,
			method: "post",
			url: pos + "sortAttrValueDown/getAttrValueBySortId",
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			$scope.attrList = data.data.sortAttrList;
			for(var i=0;i<$scope.attrList.length;i++){
				if($scope.attrList[i].attrName == '颜色分类'){
					$scope.colorList = $scope.attrList[i];
				}
			}
			$scope.getProCompare();
		})
	}
	
	$scope.skuInfo = [];
	$scope.sizeHas = [];
	$scope.colorOrg = [];
	//根据商品id获取已填写的平台属性
	$scope.getProCompare=function(){
		var jsonObject = {
				modelId:$scope.model.proModelid,
				type:$scope.type
		}
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'alibaba/getProCompare',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			var skuInfoList = data.data.skuInfoList;
			var proAttrList = data.data.proAttrList;
			if(skuInfoList.length >0){
				$scope.ColorNumAndName = [];
				$scope.SizeNumAndName = [];
				$scope.showSaleFlag = "1";
				//获取商品sku属性
				for(var i = 0; i < skuInfoList.length; i++){
					var skuInfoObj = new Object();
					skuInfoObj.skuPrice = skuInfoList[i].price;
					skuInfoObj.amountOnSale = skuInfoList[i].amountOnSale;
					skuInfoObj.color = skuInfoList[i].skuColorValue;
					$scope.skuInfo.push(skuInfoObj);
					if(i==0){
						var colorObject = new Object();
						colorObject.attrId = skuInfoList[i].skuColorKey;
						colorObject.attrValueId = skuInfoList[i].skuColorValue;
						colorObject.attrValueName = skuInfoList[i].skuColorName;
						$scope.ColorNumAndName.push(colorObject);
						$scope.colorOrg.push(colorObject);
						
						var sizeObject = new Object();
						sizeObject.attrId = skuInfoList[i].skuSizeKey;
						sizeObject.attrValueId = skuInfoList[i].skuSizeValue;
						sizeObject.attrValueName = skuInfoList[i].skuSizeName;
						$scope.SizeNumAndName.push(sizeObject);
						$scope.sizeHas.push(skuInfoList[i].skuSizeValue);
					}else{
						if(skuInfoList[i-1].skuColorValue != skuInfoList[i].skuColorValue){
							var colorObject = new Object();
							colorObject.attrId = skuInfoList[i].skuColorKey;
							colorObject.attrValueId = skuInfoList[i].skuColorValue;
							colorObject.attrValueName = skuInfoList[i].skuColorName;
							$scope.ColorNumAndName.push(colorObject);
							$scope.colorOrg.push(colorObject);
						}
						if($scope.sizeHas.indexOf(skuInfoList[i].skuSizeValue) == -1){
							var sizeObject = new Object();
							sizeObject.attrId = skuInfoList[i].skuSizeKey;
							sizeObject.attrValueId = skuInfoList[i].skuSizeValue;
							sizeObject.attrValueName = skuInfoList[i].skuSizeName;
							$scope.SizeNumAndName.push(sizeObject);
							$scope.sizeHas.push(skuInfoList[i].skuSizeValue);
						}
					}
				}
			}
			//获取商品属性
			for(var i = 0; i < proAttrList.length; i++){
				if(proAttrList[i].attrId == 'province'){
					$scope.provinceName = proAttrList[i].attrValue;
					$scope.initprovinces();
				}
				if(proAttrList[i].attrId == 'city'){
					$scope.cityName = proAttrList[i].attrValue;
		            $scope.initcitys();
				}
				if(proAttrList[i].attrId == 'sellPoint'){
					$scope.sellPoint = proAttrList[i].attrValue;
				}
				if(proAttrList[i].attrId == 'newprepay'){
					if(proAttrList[i].attrValue != 0){
						$("#newprepay").attr("checked", true);
					}
				}
				if(proAttrList[i].attrId == 'sellPromise'){
					if(proAttrList[i].attrValue != false){
						$("#sellPromise").attr("checked", true);
					}
				}
				if(proAttrList[i].attrId == 'price'){
					$scope.price = proAttrList[i].attrValue;
				}
				if(proAttrList[i].attrId == 'num'){
					$scope.count = proAttrList[i].attrValue;
				}
				for(var n=0; n<$scope.attrList.length; n++){
					if($scope.attrList[n].required == 0){
						if(proAttrList[i].attrId == $scope.attrList[n].attrId){
							$scope.attrList[n].value = proAttrList[i].attrValue;
						}
					}
				}
			}
		})
	}
	
	$scope.getAttrValueBySortId();
	
	$scope.postParam = '';
	$scope.getParam = function(){
		//获取平台商品属性
		var name = "";
		var flag = false;
		var param = "";
		$("#proInfo").find("div[id='ashow']").each(function(index,element){ 
			if($(element).children("div:eq(1)").children(":eq(0)").val().length==0){
				name = $(element).children("div:eq(0)").children("span:eq(0)").text();
				flag = true;
				return false;
			}
			param += $(element).children("div:eq(0)").find("input:eq(0)").val()+":"+$(element).children("div:eq(1)").children(":eq(0)").val()+";";
		})
		if(flag){
			alertmsg(name+" 是必填项");
			return false;
		}
		//获取sku颜色
		var colorParam = "";
		$("#addColor").find("div[id='skuColor']").each(function(index,element){ 
			if($(element).children("select:eq(0)").val().length>0){
				colorParam += $(element).children("input:eq(0)").val()+":"+$(element).children("select:eq(0)").val()+";";
			}
		})
		if(colorParam.length == 0){
			alertmsg("颜色至少填一项");
			return false;
		}
		param += colorParam; 
		//获取sku尺码
		var sizeParam = "";
		$("#addSize").find("div[id='skuSize']").each(function(index,element){ 
			if($(element).children("input:eq(0)").is(':checked')){
				sizeParam += $(element).children("input:eq(0)").val()+":"+$(element).children("input:eq(1)").val()+";";
			}
		})
		if(sizeParam.length == 0){
			alertmsg("尺码至少填一项");
			return false;
		}
		param += sizeParam; 
		
		param = param.substring(0,param.length-1);
		
		//获取sku属性
//		var skuInfos = "["
		var skuInfos =[];
		$("#showSku").find("tr[id=skuTr]").each(function(index,element){ 
			var colorAttrId = $(element).children("td:eq(0)").children("input:eq(0)").val();
			var colorAttrValueId = $(element).children("td:eq(0)").children("input:eq(1)").val();
			var colorAttrValueName = $(element).children("td:eq(0)").children("span:eq(0)").text();
			var sizeAttrIdAry = [];
			var sizeAttrValueId = [];
			var sizeAttrValueName = [];
			$(element).children("td:eq(1)").find("div").each(function(index,element){ 
				sizeAttrIdAry.push($(element).children("input:eq(0)").val());
				sizeAttrValueId.push($(element).children("input:eq(1)").val());
				sizeAttrValueName.push($(element).children("span:eq(0)").text());
			})
			var priceAry = [];
			var countAry = [];
			var numAry = [];
			var codeAry = [];
			for(var i=2;i<6;i++){
				if(i==2){
					$(element).children("td:eq("+i+")").find("input").each(function(index,element){ 
						var price = $(element).val();
						priceAry.push(price);
					})
				}else if(i==3){
					$(element).children("td:eq("+i+")").find("input").each(function(index,element){ 
						var count = $(element).val();
						countAry.push(count);
					})
				}else if(i==4){
					$(element).children("td:eq("+i+")").find("input").each(function(index,element){ 
						var num = $(element).val();
						numAry.push(num);
					})
				}else if(i==5){
					$(element).children("td:eq("+i+")").find("input").each(function(index,element){ 
						var code = $(element).val();
						codeAry.push(code);
					})
				}
			}
			
			//条形码未传
			for(var n=0;n<sizeAttrValueName.length;n++){
				var skuInfo = {modelId:$scope.model.proModelid,skuAttrType:"0",skuType:"2",skuColorName:colorAttrValueName,
				skuSizeName:sizeAttrValueName[n],amountOnSale:countAry[n],cargoNumber:numAry[n],skuColorKey:colorAttrId,skuColorValue:colorAttrValueId,
				skuSizeKey:sizeAttrIdAry[n],skuSizeValue:sizeAttrValueId[n],price:priceAry[n]};
				skuInfos.push(skuInfo);
			}
		})
		
		var shopOrgIds = $scope.selOrg+"";
		var ary = shopOrgIds.split(",");
		shopOrgIds = [];
		ary.forEach(function(item, index, array){
			shopOrgIds.push(item);
		})
		
		//获取省市
		var province="";
        var city="";
        province = $scope.provinceName;
        city = $scope.cityName;
        
        var sellPromise = false;
        if($("#sellPromise").is(':checked')){
        	sellPromise = true;
        }
        var newprepay = 0;
        if($("#newprepay").is(':checked')){
        	newprepay = 1;
        }
        $scope.postParam = {
			orgId:$scope.orgId,
			shopOrgIds:shopOrgIds,
			modelId:$scope.model.proModelid,
			type:"fixed",
			num:$scope.count,
			price:$scope.price,
			sortId:$scope.sortId,
			stuffStatus:"new",
			title:$scope.model.proName,
			approveStatus:"instock",
			sellPoint:$scope.sellPoint,
			province:province,
			city:city,
			sellPromise:sellPromise,
			newprepay:newprepay,
			prop:param,
			mainImg:$scope.model.mainPic,
			skuInfo:skuInfos
		}
	}
	
	$scope.publishProduct = function(){
		$scope.getParam();
		var jsonObject = JSON.stringify($scope.postParam);
		$http({
			async: true,
			method: "post",
			url: pos + "alitaobao/aliTaoBaoProPublish",
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == 1) {
				alertmsg("发布成功");
				$scope.showPostProductList();
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
	
	$scope.proInfoSave=function(){
		$scope.getParam();
		var jsonObject = JSON.stringify($scope.postParam);
		$http({
			async: true,
			method: "post",
			url: pos + "alitaobao/aliTaoBaoProInfoSave",
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data) {
			if(data.code == 1) {
				alertmsg("保存成功");
				$scope.showPostProductList();
			} else {
				alertmsg(data.msg, "error");
			}
		})
	}
	
    $scope.changePrice = function(){
    	$scope.price=0;
    	$("#showSku").find("input[name='skuPrice']").each(function(index,element){ 
    		if($scope.price == 0){
    			$scope.price = parseInt($(element).val());
    		}
    		if($scope.price > parseInt($(element).val())){
    			$scope.price = parseInt($(element).val());
    		}
    	})
    }
    
    $scope.changeCount = function(){
    	$scope.count=0;
    	$("#showSku").find("input[name='skuCount']").each(function(index,element){ 
    		if($(element).val().length>0){
    			$scope.count = parseInt($scope.count) + parseInt($(element).val());
    		}
    	})
    }
	//储存选中颜色的数据
	$scope.chkColor = function() {
		$scope.showSaleFlag = "1";
		var colorSize = $scope.ColorNumAndName.length;
		$scope.ColorNumAndName = [];
		$("#addColor").find("div[id='skuColor']").each(function(index,element){ 
			if($(element).children("select:eq(0)").val() != ''){
				var object = new Object();
				object.attrId = $(element).children("input:eq(0)").val();
				object.attrValueId = $(element).children("select:eq(0)").val();
				object.attrValueName = $(element).children("select:eq(0)").children('option:selected').text();
				$scope.ColorNumAndName.push(object);
			}
		})
		
		$scope.skuInfo = [];
		$("#addColor").find("div[id='skuColor']").each(function(index,element){ 
			if($(element).children("select:eq(0)").val().length>0){
				$("#addSize").find("div[id='skuSize']").each(function(index,element1){ 
					if($(element1).children("input:eq(0)").is(':checked')){
						var object = new Object();
						object.color = $(element).children("select:eq(0)").val();
						$scope.skuInfo.push(object);
					}
				})
			}
		})
		
		if(colorSize < $scope.ColorNumAndName.length){
			var customSort=[];
			customSort.push('<div id="skuColor" class="mgb20" ng-repeat="attr in attrList" ng-if="attr.attrName==\'颜色分类\'">');
			customSort.push('<input type="hidden" value="{{attr.attrId}}"/>');
			customSort.push('<select style="width:250px" ng-change="chkColor()" ng-model="color">');
			customSort.push('<option value="">请选择</option>');
			customSort.push('<option ng-repeat="value in attr.attrValue" value="{{value.attrValueId}}">{{value.attrValueName}}</option>');
			customSort.push('</select>');
			customSort.push('</div>');
		   	var html=customSort.join("");
		    var template=angular.element(html);
		    var newHtml=$compile(template)($scope);
		   	angular.element($('#addFlag').before(newHtml));
		}
	}
	
	//储存选中尺码的数据
	$scope.chkSize = function() {
		$scope.SizeNumAndName = [];
		$("#addSize").find("div[id='skuSize']").each(function(index,element){ 
			if($(element).children("input:eq(0)").is(':checked')){
				var object = new Object();
				object.attrId = $(element).children("input:eq(0)").val();
				object.attrValueId = $(element).children("input:eq(1)").val();
				object.attrValueName = $(element).children("span").text();
				$scope.SizeNumAndName.push(object);
			}
		})
		$scope.skuInfo = [];
		$("#addColor").find("div[id='skuColor']").each(function(index,element){ 
			if($(element).children("select:eq(0)").val().length>0){
				$("#addSize").find("div[id='skuSize']").each(function(index,element1){ 
					if($(element1).children("input:eq(0)").is(':checked')){
						var object = new Object();
						object.color = $(element).children("select:eq(0)").val();
						$scope.skuInfo.push(object);
					}
				})
			}
		})
	}
	
	$scope.sizeCheck = function(sizeValue){
		if($scope.sizeHas.indexOf(sizeValue) != -1){
			return true;
		}else{
			return false;
		}
	}
	var sourceArr=[{level:0,name:"productPost"}];
	$scope.showPostProductList = function() {
		var source = {level:0,name:"productList"}
		sourceArr.push(source);
		var params={
				"source":sourceArr,
				"type":"1"
			};
		$.extend(params,{orgManage:"",orgId:$scope.orgId});
		$state.go("productList", {
			uiParams: params
		})
	}
	
	/*点击返回按钮*/
	$scope.goback = function() {
		$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
		$state.go($stateParams.uiParams.source[$stateParams.uiParams.source.length - 1].name, {
			uiParams: {
				"orgId": $stateParams.uiParams.orgId,
				"orgManage": $stateParams.uiParams.orgInfo,
				"source": $stateParams.uiParams.source,
				"type": "2"
			}
		})
	}
})