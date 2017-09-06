qyApp.controller("productPostController",function($scope, $http, Upload, $compile, $route,$state,$stateParams) {
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
	if($stateParams.uiParams.onlyShow!=undefined){
		$scope.onlyShow = $stateParams.uiParams.onlyShow;
	}
	//网上订购
		$scope.supportOnlineTrade = "true";
	//建议零售价
		$scope.retailprice = "";
	//每个SKU可售数量
		$scope.amountOnSale = "";
	//销售方式
		$scope.saleType = "normal";
	//价格区间
		$scope.priceRanges = [];
	//计量单位
		$scope.unit = "件";
	//信息有效期
		$scope.periodOfValidity = "10";
		
	//自定义属性
		$scope.customAttr = [];
	//报价方式
		$scope.quoteType = "";
	//最小起订量
		$scope.minOrderQuantity=0;
		
	$scope.publishs = [];
	for(var i=0; i<$scope.publish.length; i++){
		for(var j=0; j<$scope.selOrg.length; j++){
			if($scope.publish[i].orgId == $scope.selOrg[j]){
				$scope.publishs.push($scope.publish[i]);
			}
		}
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
			$scope.unitAry;
			for(var i = 0; i < $scope.attrList.length; i++){
				$scope.attrList[i].value = "";
				if($scope.attrList[i].attrName == "颜色" || 
					$scope.attrList[i].attrName == "尺码"){
					$scope.attrList.splice(i, 1);
					i--;
				}else if($scope.attrList[i].attrName == "计量单位"){
					$scope.unitAry = $scope.attrList[i].attrValue;
				}
			}
			$scope.clothesSkuInfoFlag = data.data.clothesSkuInfoFlag;
			if($scope.clothesSkuInfoFlag == 1){
				$scope.skuInfos = data.data.skuInfos;
				var index = 1;
				for(var i = 0; i < $scope.skuInfos.length; i++) {
					if(i != ($scope.skuInfos.length - 1) && $scope.skuInfos[i].proColorName == $scope.skuInfos[i + 1].proColorName) {
						index += 1;
					} else {
						break;
					}
				}
				$scope.index = index;
				$scope.quoteType = "2";
			}else{
				
			}
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
				$scope.proAttrList = data.data.proAttrList;
				for(var i = 0; i < $scope.attrList.length; i++){
					for(var j = 0; j < $scope.proAttrList.length; j++){
						if($scope.attrList[i].attrId == $scope.proAttrList[j].attrId){
							$scope.attrList[i].value = $scope.proAttrList[j].attrValue;
							break;
						}else if($scope.proAttrList[j].attrId =="quoteType"){
							$scope.quoteType = $scope.proAttrList[j].attrValue;
						}else if($scope.proAttrList[j].attrId =="minOrderQuantity"){
							$scope.minOrderQuantity = $scope.proAttrList[j].attrValue;
						}
					}
				}
				
				for(var i =0;i<$scope.skuInfos.length;i++){
					for(var n=0;n<data.data.skuInfoList.length;n++){
						if(($scope.skuInfos[i].proColorName == data.data.skuInfoList[n].skuColorName) && ($scope.skuInfos[i].proSizeName == data.data.skuInfoList[n].skuSizeName)){
							$scope.skuInfos[i].amountOnSale = data.data.skuInfoList[n].amountOnSale;
							$scope.skuInfos[i].cargoNumber = data.data.skuInfoList[n].cargoNumber;
							$scope.saleTotalCount += parseInt(data.data.skuInfoList[n].amountOnSale);
							break;
						}
					}
				}
				for(var i = 0; i < $scope.proAttrList.length; i++){
					if($scope.proAttrList[i].attrType == "2"){
						$scope.customAttr.push($scope.proAttrList[i]);
						$("#addCustomSort").hide();
					}
					//网上订购
					if($scope.proAttrList[i].attrId == "supportOnlineTrade"){
						$scope.supportOnlineTrade = $scope.proAttrList[i].attrValue;
						if($scope.supportOnlineTrade == "true"){
							$('#supportOnlineTradeT').prop("checked", true);
						}else{
							$('#supportOnlineTradeF').prop("checked", true);
						}
					}
					//建议零售价
					if($scope.proAttrList[i].attrId == "retailprice"){
						$scope.retailprice = $scope.proAttrList[i].attrValue;
					}
					//每个SKU可售数量
					if($scope.proAttrList[i].attrId == "amountOnSale"){
						$scope.amountOnSale = $scope.proAttrList[i].attrValue;
					}
					//销售方式
					if($scope.proAttrList[i].attrId == "saleType"){
						$scope.saleType = $scope.proAttrList[i].attrValue;
						if($scope.saleType == "normal"){
							$('#normal').prop("checked", true);
						}
					}
					//价格区间
					if($scope.proAttrList[i].attrId == "priceRanges"){
						$scope.priceRanges = $scope.proAttrList[i].attrValue;
						$scope.priceRanges = JSON.parse($scope.priceRanges);
					}
					//计量单位
					if($scope.proAttrList[i].attrId == "unit"){
						$scope.unit = $scope.proAttrList[i].attrValue;
					}
					//信息有效期
					if($scope.proAttrList[i].attrId == "periodOfValidity"){
						$scope.periodOfValidity = $scope.proAttrList[i].attrValue;
						if($scope.periodOfValidity == "10"){
							$('#periodOfValidity10').prop("checked", true);
						}else if($scope.periodOfValidity == "20"){
							$('#periodOfValidity20').prop("checked", true);
						}else if($scope.periodOfValidity == "30"){
							$('#periodOfValidity30').prop("checked", true);
						}else if($scope.periodOfValidity == "90"){
							$('#periodOfValidity90').prop("checked", true);
						}else if($scope.periodOfValidity == "180"){
							$('#periodOfValidity180').prop("checked", true);
						}
					}
				}
			}) 
		});
	}
	
	$scope.getAttrValueBySortId();
	
	$scope.addCustomSort=function(){
		var customSort=[];
		customSort.push('<div id="otherAttr" class="row new-property">');
		customSort.push('<input class="col-md-1" type="text" name="" value="" placeholder="属性" />');
		customSort.push('<em class="fn-left">:</em>');
		customSort.push('<input class="col-md-2" type="text" name="" value="" placeholder="属性值" />');
		customSort.push('<a href="javascript:;" class="fn-left" ng-click="delCustomSort($event)">删除</a>');
		customSort.push('</div>');
	   	var html=customSort.join("");
	    var template=angular.element(html);
	    var newHtml=$compile(template)($scope);
	   	angular.element($('#addCustomSort').before(newHtml));
	   	$("#addCustomSort").hide();
	}
	
	$scope.delCustomSort=function(obj){
		$(obj.target).parents(".new-property").remove();
		$("#addCustomSort").show();
	}
	
	$scope.addPriceRange=function(){
		var customSort=[];
		customSort.push('<div id="priceRange" class="row new-price">');
		customSort.push('<div class="col-md-12 form-group">');
		customSort.push('<span>起订量</span>');
		customSort.push('<input class="col-md-2 mgr5" type="text" name="" value="" />');
		customSort.push('<span>件及以上：</span>');
		customSort.push('<input class="col-md-2 mgr5" type="text" name="" value="" />');
		customSort.push('<span>元/件</span>');
		customSort.push('<a class="fn-left mgl10" href="javascript:;" ng-click="delCustomPrice($event)">删除</a>');
		customSort.push('</div>');
		customSort.push('</div>');
	   	var html=customSort.join("");
	    var template=angular.element(html);
	    var newHtml=$compile(template)($scope);
	   	angular.element($('.addPrice-row').before(newHtml));
	}
	
	$scope.addPriceRange1=function(){
		var customSort=[];
		customSort.push('<tr id="priceRange1">');
		customSort.push('<td colspan="2" style="text-align: left;" class="pdl15">');
		customSort.push('起订量<input type="text" style="width:100px" /> 条及以上：');
		customSort.push('<input type="text" style="width:100px" /> 元/条 <a href="javascript:;" ng-click="delCustomPrice1($event)">删除</a>');
		customSort.push('</td>');
		customSort.push('</tr>');
	   	var html=customSort.join("");
	    var template=angular.element(html);
	    var newHtml=$compile(template)($scope);
	   	angular.element($('#addPrice-tr').before(newHtml));
	}
	
	$scope.delCustomPrice=function(obj){
		$(obj.target).parents(".new-price").remove();
	}
	
	$scope.delCustomPrice1=function(obj){
		$(obj.target).parents("#priceRange1").remove();
	}
	
	$scope.publishProduct=function(){
		var name = "";
		var flag = false;
		var param = "\"attributes\":[";
		$("#proInfo").find("div[id='ashow']").each(function(index,element){ 
			if($(element).children("div:eq(1)").children(":eq(0)").val().length==0){
				name = $(element).children("div:eq(0)").children("span:eq(0)").text();
				flag = true;
				return false;
			}
			param += "{\"attributeID\":\""+$(element).children("div:eq(0)").find("input:eq(0)").val()+"\",\"attributeName\":\""
					+$(element).children("div:eq(0)").children("span:eq(0)").text()+"\",\"value\":\""+$(element).children("div:eq(1)").children(":eq(0)").val()
					+"\",\"isCustom\":\"false\"},";
		})
		if(flag){
			alertmsg(name+" 是必填项");
			return false;
		}
		$("#proInfo").find("div[id='otherAttr']").each(function(index,element){ 
			if($(element).children("input:eq(0)").val().length==0 || $(element).children("input:eq(1)").val().length==0){
				name = "自定义属性不能为空";
				flag = true;
				return false;
			}
			param += "{\"attributeName\":\""+$(element).children("input:eq(0)").val()+"\",\"value\":\""
			+$(element).children("input:eq(1)").val()+"\",\"isCustom\":\"true\"},";
		})
		if(flag){
			alertmsg(name);
			return false;
		}
		param = param.substring(0,param.length-1);
		param += "]";
		
		var amountOnSale = $scope.saleTotalCount;
		//priceRange
		var priceRange = "\"priceRanges\":[";
		var skuInfo = "\"skuInfo\":["; 
		if($scope.quoteType == ""){
			$("#showPriceRange").find("div[id='priceRange']").each(function(index,element){ 
				if($(element).find("input:eq(0)").val().length==0 || $(element).find("input:eq(1)").val().length == 0){
					name = "价格区间";
					flag = true;
					return false;
				}
				priceRange += "{\"startQuantity\":\""+$(element).find("input:eq(0)").val()+"\",\"price\":\""
				+$(element).find("input:eq(1)").val()+"\"},";
			})
			if(flag){
				alertmsg(name+" 是必填项");
				return false;
			}
			priceRange = priceRange.substring(0,priceRange.length-1);
			priceRange += "]";
			amountOnSale = $("input[name='amountOnSale']").val();
			skuInfo += "]";
		}else if($scope.quoteType == "1"){
			//skuInfo2
			var temSkuColorname="";
			$("#skuInfoShow2").find("tr[id='skuInfo2']").each(function(index,element){ 
				if($(element).find("input:eq(0)").val().length==0 || $(element).find("input:eq(1)").val().length==0 ){
					name = "规格报价";
					flag = true;
					return false;
				}
				if($(element).find("td").length == 5){
					skuInfo += "{\"modelId\":\""+$scope.model.proModelid+"\",\"skuAttrType\":\"0\",\"skuType\":\"0\",\"skuColorName\":\""
					+temSkuColorname+"\",\"skuSizeName\":\""+$(element).find("td:eq(0)").text()+"\",\"price\":\""+
					$(element).find("input:eq(0)").val()+"\",\"amountOnSale\":\""+$(element).find("input:eq(1)").val()+
					"\",\"retailPrice\":\""+$(element).find("input:eq(2)").val()+"\",\"cargoNumber\":\""+$(element).find("input:eq(3)").val()+"\"},";
				}else{
					skuInfo += "{\"modelId\":\""+$scope.model.proModelid+"\",\"skuAttrType\":\"0\",\"skuType\":\"0\",\"skuColorName\":\""+
					$(element).find("td:eq(0)").text()+"\",\"skuSizeName\":\""+$(element).find("td:eq(1)").text()+"\",\"price\":\""+
					$(element).find("input:eq(0)").val()+"\",\"amountOnSale\":\""+$(element).find("input:eq(1)").val()+
					"\",\"retailPrice\":\""+$(element).find("input:eq(2)").val()+"\",\"cargoNumber\":\""+$(element).find("input:eq(3)").val()+"\"},";
					temSkuColorname = $(element).find("td:eq(0)").text();
				}
			})
			if(flag){
				alertmsg(name+" 是必填项");
				return false;
			}
			priceRange += "]";
			skuInfo = skuInfo.substring(0,skuInfo.length-1);
			skuInfo += "]";
		}else{
			//priceRange1
			$("#skuInfoShow1").find("tr[id='priceRange1']").each(function(index,element){ 
				if($(element).find("input:eq(0)").val().length==0 || $(element).find("input:eq(1)").val().length == 0){
					name = "价格区间";
					flag = true;
					return false;
				}
				priceRange += "{\"startQuantity\":\""+$(element).find("input:eq(0)").val()+"\",\"price\":\""
				+$(element).find("input:eq(1)").val()+"\"},";
			})
			if(flag){
				alertmsg(name+" 是必填项");
				return false;
			}
			priceRange = priceRange.substring(0,priceRange.length-1);
			priceRange += "]";
			
			//skuInfo1
			var temSkuColorname="";
			$("#skuInfoShow1").find("tr[id='skuInfo1']").each(function(index,element){ 
				if($(element).find("input:eq(0)").val().length==0 ){
					name = "可售数量";
					flag = true;
					return false;
				}
				if($(element).find("td").length == 3){
					skuInfo += "{\"modelId\":\""+$scope.model.proModelid+"\",\"skuAttrType\":\"0\",\"skuType\":\"0\",\"skuColorName\":\""
					+temSkuColorname+"\",\"skuSizeName\":\""+$(element).find("td:eq(0)").text()+"\",\"amountOnSale\":\""+
					$(element).find("input:eq(0)").val()+"\",\"cargoNumber\":\""+$(element).find("input:eq(1)").val()+"\"},";
				}else{
					skuInfo += "{\"modelId\":\""+$scope.model.proModelid+"\",\"skuAttrType\":\"0\",\"skuType\":\"0\",\"skuColorName\":\""+
					$(element).find("td:eq(0)").text()+"\",\"skuSizeName\":\""+$(element).find("td:eq(1)").text()+"\",\"amountOnSale\":\""+
					$(element).find("input:eq(0)").val()+"\",\"cargoNumber\":\""+$(element).find("input:eq(1)").val()+"\"},";
					temSkuColorname = $(element).find("td:eq(0)").text();
				}
			})
			if(flag){
				alertmsg(name+" 是必填项");
				return false;
			}
			skuInfo = skuInfo.substring(0,skuInfo.length-1);
			skuInfo += "]";
		}
		var periodOfValidity = $("input[name='periodOfValidity']:checked").val();
		var supportOnlineTrade = $("input[name='supportOnlineTrade']:checked").val();
		var saleType = "normal";
		var retailprice = $scope.retailprice;
		var unit = $("select[name='unit']").val();
		if(periodOfValidity.length == 0){
			alertmsg("信息有效期 是必填项");
			return false;
		}
		if(($scope.quoteType == "2"||$scope.quoteType == "") && retailprice.length == 0){
			alertmsg("建议零售价 是必填项");
			return false;
		}
		
		var mixWholeSale = false;
		var tax = "";
		var priceAuth = false;
		var pictureAuth = false;
		var batchNumber = 0;
		var quoteType = $scope.quoteType;
		var minOrderQuantity = 1;
		if(quoteType == 2){
			minOrderQuantity = 1;
		}else{
			minOrderQuantity = $scope.minOrderQuantity;
		}
		var sellunit = "";
		var bizType = 1;
		
		var modelId = $scope.model.proModelid;
		var orgId = $scope.orgId;
		var shopOrgIds = $scope.selOrg+"";
		var ary = shopOrgIds.split(",");
		shopOrgIds = "\"shopOrgIds\":[";
		ary.forEach(function(item, index, array){
			shopOrgIds += "{\"shopOrgId\":\""+item+"\"},";
		})
		shopOrgIds = shopOrgIds.substring(0,shopOrgIds.length-1);
		shopOrgIds += "]";
		var jsonObject = "{\"modelId\":\"" + modelId + "\",\"orgId\":\"" + orgId +"\",\"bizType\":\"" + bizType +"\",\"minOrderQuantity\":\"" + minOrderQuantity +
						"\",\"periodOfValidity\":\""+periodOfValidity+"\",\"supportOnlineTrade\":\""+supportOnlineTrade+
						"\",\"saleType\":\""+saleType+"\",\"retailprice\":\""+retailprice+"\",\"amountOnSale\":\""+amountOnSale
						+"\",\"unit\":\""+unit+"\",\"mixWholeSale\":\""+mixWholeSale+"\",\"tax\":\""+tax+"\",\"sellunit\":\""+sellunit+
						"\",\"priceAuth\":\""+priceAuth+"\",\"pictureAuth\":\""+pictureAuth+"\",\"batchNumber\":\""+batchNumber+
						"\",\"quoteType\":\""+quoteType+"\","+skuInfo+","+shopOrgIds+","+priceRange+","+param+"}";
		console.log(jsonObject);
		var jsonObj = JSON.stringify(jsonObject);
		console.log(jsonObj);
		$http({
			method: 'post',
			url: pos + 'alibaba/alibabaProPublish',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				alertmsg("发布成功");
				$scope.showPostProductList();
			} else {
				alertmsg(data.msg, "error");
			}
		}) 
	}
	
	$scope.proInfoSave = function(){
		var name = "";
		var flag = false;
		var param = "\"attributes\":[";
		$("#proInfo").find("div[id='ashow']").each(function(index,element){ 
			if($(element).children("div:eq(1)").children(":eq(0)").val().length==0){
				name = $(element).children("div:eq(0)").children("span:eq(0)").text();
				flag = true;
				return false;
			}
			param += "{\"attributeID\":\""+$(element).children("div:eq(0)").find("input:eq(0)").val()+"\",\"attributeName\":\""
					+$(element).children("div:eq(0)").children("span:eq(0)").text()+"\",\"value\":\""+$(element).children("div:eq(1)").children(":eq(0)").val()
					+"\",\"isCustom\":\"false\"},";
		})
		if(flag){
			alertmsg(name+" 是必填项");
			return false;
		}
		$("#proInfo").find("div[id='otherAttr']").each(function(index,element){ 
			if($(element).children("input:eq(0)").val().length==0 || $(element).children("input:eq(1)").val().length==0){
				name = "自定义属性不能为空";
				flag = true;
				return false;
			}
			param += "{\"attributeName\":\""+$(element).children("input:eq(0)").val()+"\",\"value\":\""
			+$(element).children("input:eq(1)").val()+"\",\"isCustom\":\"true\"},";
		})
		if(flag){
			alertmsg(name);
			return false;
		}
		param = param.substring(0,param.length-1);
		param += "]";
		
		var amountOnSale = $scope.saleTotalCount;
		//priceRange
		var priceRange = "\"priceRanges\":[";
		var skuInfo = "\"skuInfo\":["; 
		if($scope.quoteType == ""){
			$("#showPriceRange").find("div[id='priceRange']").each(function(index,element){ 
				if($(element).find("input:eq(0)").val().length==0 || $(element).find("input:eq(1)").val().length == 0){
					name = "价格区间";
					flag = true;
					return false;
				}
				priceRange += "{\"startQuantity\":\""+$(element).find("input:eq(0)").val()+"\",\"price\":\""
				+$(element).find("input:eq(1)").val()+"\"},";
			})
			if(flag){
				alertmsg(name+" 是必填项");
				return false;
			}
			priceRange = priceRange.substring(0,priceRange.length-1);
			priceRange += "]";
			amountOnSale = $("input[name='amountOnSale']").val();
			skuInfo += "]";
		}else if($scope.quoteType == "1"){
			//skuInfo2
			var temSkuColorname="";
			$("#skuInfoShow2").find("tr[id='skuInfo2']").each(function(index,element){ 
				if($(element).find("input:eq(0)").val().length==0 || $(element).find("input:eq(1)").val().length==0 ){
					name = "规格报价";
					flag = true;
					return false;
				}
				if($(element).find("td").length == 5){
					skuInfo += "{\"modelId\":\""+$scope.model.proModelid+"\",\"skuAttrType\":\"0\",\"skuType\":\"0\",\"skuColorName\":\""
					+temSkuColorname+"\",\"skuSizeName\":\""+$(element).find("td:eq(0)").text()+"\",\"price\":\""+
					$(element).find("input:eq(0)").val()+"\",\"amountOnSale\":\""+$(element).find("input:eq(1)").val()+
					"\",\"retailPrice\":\""+$(element).find("input:eq(2)").val()+"\",\"cargoNumber\":\""+$(element).find("input:eq(3)").val()+"\"},";
				}else{
					skuInfo += "{\"modelId\":\""+$scope.model.proModelid+"\",\"skuAttrType\":\"0\",\"skuType\":\"0\",\"skuColorName\":\""+
					$(element).find("td:eq(0)").text()+"\",\"skuSizeName\":\""+$(element).find("td:eq(1)").text()+"\",\"price\":\""+
					$(element).find("input:eq(0)").val()+"\",\"amountOnSale\":\""+$(element).find("input:eq(1)").val()+
					"\",\"retailPrice\":\""+$(element).find("input:eq(2)").val()+"\",\"cargoNumber\":\""+$(element).find("input:eq(3)").val()+"\"},";
					temSkuColorname = $(element).find("td:eq(0)").text();
				}
			})
			if(flag){
				alertmsg(name+" 是必填项");
				return false;
			}
			priceRange += "]";
			skuInfo = skuInfo.substring(0,skuInfo.length-1);
			skuInfo += "]";
		}else{
			//priceRange1
			$("#skuInfoShow1").find("tr[id='priceRange1']").each(function(index,element){ 
				if($(element).find("input:eq(0)").val().length==0 || $(element).find("input:eq(1)").val().length == 0){
					name = "价格区间";
					flag = true;
					return false;
				}
				priceRange += "{\"startQuantity\":\""+$(element).find("input:eq(0)").val()+"\",\"price\":\""
				+$(element).find("input:eq(1)").val()+"\"},";
			})
			if(flag){
				alertmsg(name+" 是必填项");
				return false;
			}
			priceRange = priceRange.substring(0,priceRange.length-1);
			priceRange += "]";
			
			//skuInfo1
			var temSkuColorname="";
			$("#skuInfoShow1").find("tr[id='skuInfo1']").each(function(index,element){ 
				if($(element).find("input:eq(0)").val().length==0 ){
					name = "可售数量";
					flag = true;
					return false;
				}
				if($(element).find("td").length == 3){
					skuInfo += "{\"modelId\":\""+$scope.model.proModelid+"\",\"skuAttrType\":\"0\",\"skuType\":\"0\",\"skuColorName\":\""
					+temSkuColorname+"\",\"skuSizeName\":\""+$(element).find("td:eq(0)").text()+"\",\"amountOnSale\":\""+
					$(element).find("input:eq(0)").val()+"\",\"cargoNumber\":\""+$(element).find("input:eq(1)").val()+"\"},";
				}else{
					skuInfo += "{\"modelId\":\""+$scope.model.proModelid+"\",\"skuAttrType\":\"0\",\"skuType\":\"0\",\"skuColorName\":\""+
					$(element).find("td:eq(0)").text()+"\",\"skuSizeName\":\""+$(element).find("td:eq(1)").text()+"\",\"amountOnSale\":\""+
					$(element).find("input:eq(0)").val()+"\",\"cargoNumber\":\""+$(element).find("input:eq(1)").val()+"\"},";
					temSkuColorname = $(element).find("td:eq(0)").text();
				}
			})
			if(flag){
				alertmsg(name+" 是必填项");
				return false;
			}
			skuInfo = skuInfo.substring(0,skuInfo.length-1);
			skuInfo += "]";
		}
		var periodOfValidity = $("input[name='periodOfValidity']:checked").val();
		var supportOnlineTrade = $("input[name='supportOnlineTrade']:checked").val();
		var saleType = "normal";
		var retailprice = $scope.retailprice;
		var unit = $("select[name='unit']").val();
		if(periodOfValidity.length == 0){
			alertmsg("信息有效期 是必填项");
			return false;
		}
		if(($scope.quoteType == "2"||$scope.quoteType == "") && retailprice.length == 0){
			alertmsg("建议零售价 是必填项");
			return false;
		}
		
		var mixWholeSale = false;
		var tax = "";
		var priceAuth = false;
		var pictureAuth = false;
		var batchNumber = 0;
		var quoteType = $scope.quoteType;
		var sellunit = "";
		var bizType = 1;
		var minOrderQuantity = $scope.minOrderQuantity;
		
		var modelId = $scope.model.proModelid;
		var orgId = $scope.orgId;
		
		var jsonObject = "{\"modelId\":\"" + modelId + "\",\"orgId\":\"" + orgId +"\",\"bizType\":\"" + bizType +"\",\"minOrderQuantity\":\"" + minOrderQuantity +
						"\",\"periodOfValidity\":\""+periodOfValidity+"\",\"supportOnlineTrade\":\""+supportOnlineTrade+
						"\",\"saleType\":\""+saleType+"\",\"retailprice\":\""+retailprice+"\",\"amountOnSale\":\""+amountOnSale
						+"\",\"unit\":\""+unit+"\",\"mixWholeSale\":\""+mixWholeSale+"\",\"tax\":\""+tax+"\",\"sellunit\":\""+sellunit+
						"\",\"priceAuth\":\""+priceAuth+"\",\"pictureAuth\":\""+pictureAuth+"\",\"batchNumber\":\""+batchNumber+
						"\",\"quoteType\":\""+quoteType+"\","+skuInfo+","+priceRange+","+param+"}";
		var jsonObj = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'alibaba/alibabaProInfoSave',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				alertmsg("保存成功");
				$scope.showPostProductList();
			} else {
				alertmsg("保存失败", "error");
			}
		}) 
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
	
	$scope.showSku = "";
	$scope.showFlag = 0;
	
	$scope.change = function(){
		if($scope.showSku == ""){
			$scope.showFlag = 0;
		}else{
			$scope.showFlag = 1;
		}
	}
	
	
	$scope.saleCount = function(type){
		$scope.saleTotalCount=0;
		if(type==2){
			$("#quoteNum").find("input[id='saleNum1']").each(function(index,element){ 
				if($(element).val() != '' && $(element).val() != null){
					$scope.saleTotalCount += parseInt($(element).val());
				}
			})
		}else{
			$("#quoteNum1").find("input[id='saleNum1']").each(function(index,element){ 
				if($(element).val() != '' && $(element).val() != null){
					$scope.saleTotalCount += parseInt($(element).val());
				}
			})
		}
	}
	
	$scope.selectAll = function(obj,num){
		if($(obj.target).is(':checked')){
			var param = "";
			if(num == 1){
				param = $("#quoteNum").find("input[id='saleNum1']:eq(0)").val();
				$("#quoteNum").find("input[id='saleNum1']").each(function(index,element){ 
					$(element).val(param);
				})
			}else if(num == 2){
				param = $("#quoteNum").find("input[id='cargoNumber1']:eq(0)").val();
				$("#quoteNum").find("input[id='cargoNumber1']").each(function(index,element){ 
					$(element).val(param);
				})
			}else if(num == 3){
				param = $("#quoteNum1").find("input[id='salePrice1']:eq(0)").val();
				$("#quoteNum1").find("input[id='salePrice1']").each(function(index,element){ 
					$(element).val(param);
				})
			}else if(num == 4){
				param = $("#quoteNum1").find("input[id='saleNum1']:eq(0)").val();
				$("#quoteNum1").find("input[id='saleNum1']").each(function(index,element){ 
					$(element).val(param);
				})
			}else if(num == 5){
				param = $("#quoteNum1").find("input[id='retailPrice1']:eq(0)").val();
				$("#quoteNum1").find("input[id='retailPrice1']").each(function(index,element){ 
					$(element).val(param);
				})
			}else if(num == 6){
				param = $("#quoteNum1").find("input[id='cargoNumber1']:eq(0)").val();
				$("#quoteNum1").find("input[id='cargoNumber1']").each(function(index,element){ 
					$(element).val(param);
				})
			}
			$scope.saleTotalCount=0;
			if(num == 1 || num == 2){
				$("#quoteNum").find("input[id='saleNum1']").each(function(index,element){ 
					if($(element).val() != '' && $(element).val() != null){
						$scope.saleTotalCount += parseInt($(element).val());
					}
				})
			}else{
				$("#quoteNum1").find("input[id='saleNum1']").each(function(index,element){ 
					if($(element).val() != '' && $(element).val() != null){
						$scope.saleTotalCount += parseInt($(element).val());
					}
				})
			}
		}
	}
})