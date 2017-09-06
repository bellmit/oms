

qyApp.controller('purchsedetailController', function($scope, $http) {
	
	$scope.createTime=localStorage.createTime;
	$scope.disWarehName=localStorage.disWarehName;
	$scope.recievingId=localStorage.recievingId;

	var orgId = JSON.parse(keyParams).orgId;
	//采购单明细列表
	$http(
	{
		method : 'post',
		url : ss + 'recievingDetail/getRecievingForModelNum',
		params : {
			keyParams : getKeyParams("{\"recievingId\":\""+localStorage.recievingId+"\"}", keyParams),
			jsonObject : getJsonObject("{\"recievingId\":\""+localStorage.recievingId+"\"}")
		}
	}).success(function(data, stauts, headers, config) {
		list=data.data.rDList;
		$scope.rl = data.data.rDList;
		$scope.tatilprm=list.length;
		$scope.tatilProce=0;
		$scope.tatil=0;
		for(var i=0;i<list.length;i++ ){
			proModelId=list[i].proModelId;
			$scope.getDetail3(proModelId);
			$scope.tatilProce=parseFloat($scope.tatilProce)+parseFloat(list[i].unitPrice*list[i].rcvQty);			
		    $scope.tatil=parseFloat($scope.tatil)+parseFloat(list[i].rcvQty);
		}
		
	})
	
	//获取单个数据
	$scope.getDetail3 = function(obj) {
		var recievingId= $scope.recievingId;
		var proModelId=obj;
		var data="{\"recievingId\":\""+recievingId+"\",\"proModelId\":\""+proModelId+"\"}";
		$http({
			method : 'post',
			url : ss + 'recievingDetail/getRcvQty',
			params : {
				keyParams : getKeyParams(data, keyParams),
				jsonObject : getJsonObject(data)
			}
		}).success(function(data, stauts, headers, config) {
			var list1=[];
			list1=data.data.recievingDetailList;
			var list=[];
			list=$scope.detail;
			if(list==null){
				list=[];	
			}
			if(list1.length>0){
			a="{\"proModelId\":\""+proModelId+"\",\"details\":"+JSON.stringify(list1)+"}"
			list.push(eval("("+a+")"))
			}
			$scope.detail =list;
		})
	}
	
	
	//获取详情数据
	$scope.getDetail = function(obj) {
		var recievingId= $scope.recievingId;
		var proModelId=obj.xs.proModelId;
		var data="{\"recievingId\":\""+recievingId+"\",\"proModelId\":\""+proModelId+"\"}";
		$http({
			method : 'post',
			url : ss + 'recievingDetail/getRcvQty',
			params : {
				keyParams : getKeyParams(data, keyParams),
				jsonObject : getJsonObject(data)
			}
		}).success(function(data, stauts, headers, config) {
			$scope.rdl = data.data.recievingDetailList;
			$scope.product(proModelId);
		})
	}
	
	//获取详情数据
	$scope.getDetail2 = function(obj) {
		var recievingId= $scope.recievingId;
		var proModelId=obj.xs.proModelId;
		var data="{\"recievingId\":\""+recievingId+"\",\"proModelId\":\""+proModelId+"\"}";
		$http({
			method : 'post',
			url : ss + 'recievingDetail/getRcvQty',
			params : {
				keyParams : getKeyParams(data, keyParams),
				jsonObject : getJsonObject(data)
			}
		}).success(function(data, stauts, headers, config) {
			$scope.rdl = data.data.recievingDetailList;
			$scope.productReadonly(proModelId);
		})
	}
	
	//二维表生成-修改
	$scope.product = function(obj) {
		var proModelId=obj;
		$http({
			method : 'post',
			url : pos + 'product/findProductOnHand',
			params : {
				keyParams : getKeyParams("{\"orgId\":\""+orgId+"\",\"modelId\":\""+proModelId+"\"}", keyParams),
				jsonObject : getJsonObject("{\"orgId\":\""+orgId+"\",\"modelId\":\""+proModelId+"\"}")
			}
		}).success(function(data, stauts, headers, config) {
			$scope.getModelByModelNum(proModelId);
			var productList=data.data.productList;
			$scope.pl =productList;
			var sizeList=$scope.rdl;
			//数量存入Map
			var sizemap={};
		    for(var i=0;i<sizeList.length;  i++)  {
		    	sizemap[sizeList[i].proColorName+","+sizeList[i].proSizeName] = sizeList[i].rcvQty;
		    }
			
			//颜色出重复
		    var res = [], hash = {};
		    for(var i=0;i<productList.length;  i++)  {
		        if (!hash[productList[i].ColorName]) {
		            res.push(productList[i].ColorName);
		            hash[productList[i].ColorName] = true;
		            
		        }
		    }
			$scope.ys = res;
		    //尺码去重复
		    var res2 = [], hash = {};map={};
		    for(var i=0;i<productList.length;  i++)  {
		        if (!hash[productList[i].proSizeName]) {
		            res2.push(productList[i].proSizeName);
		            hash[productList[i].proSizeName] = true;
		        }
		    }
			$scope.cm =res2;
		    var phash={}; map={};
		    for(var i=0;i<productList.length;  i++)  {
		    	phash[productList[i].ColorName+","+productList[i].proSizeName] = true;
	            map[productList[i].ColorName+","+productList[i].proSizeName] = productList[i].proNum;
		    }
		    var a=""
		    //拼接数据
				$("tr[class=sc]")
				.remove();	
		    for(var i=0;i<res.length;i++){
		    	a=a+("<tr class='sc'><th scope=\"row\" >"+res[i]+"</th>");
		    	 for(var p=0;p<res2.length;p++){
		  		    if(phash[res[i]+","+res2[p]]){
		  		    	
		  		    	if(sizemap[res[i]+","+res2[p]]!=null){
		  		    	a=a+"<td><input class=\"input-mini\" type=\"text\" id=\"p"+map[res[i]+","+res2[p]]+"\" name=\""+res[i]+","+res2[p]+"\" value=\""+sizemap[res[i]+","+res2[p]]+"\"  /></td>";
		  		    	}else{
			  		    	a=a+"<td><input class=\"input-mini\" type=\"text\" id=\"p"+map[res[i]+","+res2[p]]+"\" name=\""+res[i]+","+res2[p]+"\" value=\"0\" /></td>";

		  		    	}
		  		    	
		  		    }else{
		  		    	a=a+"<td><input class=\"input-mini\" type=\"text\" value=\"-\" readonly=\"readonly\" /></td>";
		  		    }
		    	 }
		    	 a=a+"</tr>"
		    }
		    $("#tr").before(a);
			$('.editInvDialog').center();
			$('.editInvDialog,.maskBg').show()
		})
	}
	//获取详情数据
	$scope.show = function() {
		$('.editInvDialog2,.maskBg').show()
	}
	
	//二维表生成-修改-只读
	$scope.productReadonly = function(obj) {
		var proModelId=obj;
		$http({
			method : 'post',
			url : pos + 'product/findProductOnHand',
			params : {
				keyParams : getKeyParams("{\"orgId\":\""+orgId+"\",\"modelId\":\""+proModelId+"\"}", keyParams),
				jsonObject : getJsonObject("{\"orgId\":\""+orgId+"\",\"modelId\":\""+proModelId+"\"}")
			}
		}).success(function(data, stauts, headers, config) {
			$scope.getModelByModelNum(proModelId);
			var productList=data.data.productList;
			$scope.pl =productList;
			var sizeList=$scope.rdl;
			//数量存入Map
			var sizemap={};
		    for(var i=0;i<sizeList.length;  i++)  {
		    	sizemap[sizeList[i].proColorName+","+sizeList[i].proSizeName] = sizeList[i].rcvQty;
		    }
			
			//颜色出重复
		    var res = [], hash = {};
		    for(var i=0;i<productList.length;  i++)  {
		        if (!hash[productList[i].ColorName]) {
		            res.push(productList[i].ColorName);
		            hash[productList[i].ColorName] = true;
		            
		        }
		    }
			$scope.ys = res;
		    //尺码去重复
		    var res2 = [], hash = {};map={};
		    for(var i=0;i<productList.length;  i++)  {
		        if (!hash[productList[i].proSizeName]) {
		            res2.push(productList[i].proSizeName);
		            hash[productList[i].proSizeName] = true;
		        }
		    }
			$scope.cm =res2;
		    var phash={}; map={};
		    for(var i=0;i<productList.length;  i++)  {
		    	phash[productList[i].ColorName+","+productList[i].proSizeName] = true;
	            map[productList[i].ColorName+","+productList[i].proSizeName] = productList[i].proNum;
		    }
		    var a=""
		    //拼接数据
				$("tr[class=sc]")
				.remove();	
		    for(var i=0;i<res.length;i++){
		    	a=a+("<tr class='sc'><th scope=\"row\" >"+res[i]+"</th>");
		    	 for(var p=0;p<res2.length;p++){
		  		    if(phash[res[i]+","+res2[p]]){
		  		    	
		  		    	if(sizemap[res[i]+","+res2[p]]!=null){
		  		    	a=a+"<td><input class=\"input-mini\" type=\"text\" id=\""+map[res[i]+","+res2[p]]+"\" name=\""+res[i]+","+res2[p]+"\" value=\""+sizemap[res[i]+","+res2[p]]+"\" readonly=\"readonly\" /></td>";
		  		    	}else{
			  		    	a=a+"<td><input class=\"input-mini\" type=\"text\" id=\""+map[res[i]+","+res2[p]]+"\" name=\""+res[i]+","+res2[p]+"\" value=\"0\" readonly=\"readonly\" /></td>";

		  		    	}
		  		    	
		  		    }else{
		  		    	a=a+"<td><input class=\"input-mini\" type=\"text\" value=\"-\" readonly=\"readonly\" /></td>";
		  		    }
		    	 }
		    	 a=a+"</tr>"
		    }
		    $("#tr").before(a);
			$('.editInvDialog').center();
			$('.editInvDialog,.maskBg').show();
		})
	}
	//获取详情数据
	$scope.show = function() {
		$('.editInvDialog2,.maskBg').show()
	}
	
	//提交二维表
	$scope.updataDetail = function(obj) {
		id=$("#id2").text();
		list1=$scope.rl;
		for(var i=0;i<list1.length;i++){
			if(list1[i].proModelnum==id){

				list1.splice(i,1);
			}
		}
		$scope.addlist=list1;
		var pl=$scope.pl;
		detaillist=$scope.mdl;
		var a="";
		var listdeail=[];
		var tatil=0;
		var list=[];
		price=detaillist.proPrice;
		var tatilProce=0;
		for(var i=0;i<pl.length;i++){
			xjunitPrice=parseFloat(price)*parseFloat($("#p"+pl[i].proNum+"").val());
			a="{\"proName\":\""+detaillist.proName+"\",\"discount\":\"1\",\"oldunitPrice\":\""+price+"\",\"xjunitPrice\":\""+xjunitPrice+"\",\"unitPrice\":\""+price+"\",\"proModelnum\":\""+id+"\",\"ColorName\":\""+pl[i].ColorName+"\",\"proNum\":\""+pl[i].proNum+"\",\"proSizeName\":\""+
			pl[i].proSizeName+"\",\"colorId\":\""+pl[i].colorId+"\",\"proSize\":\""+pl[i].proSize+"\",\"amount\":\""+$("#p"+pl[i].proNum+"").val()+"\"}";
			tatil=parseFloat(tatil)+parseFloat($("#p"+pl[i].proNum+"").val());
			tatilProce=parseFloat(tatilProce)+parseFloat(xjunitPrice);
			listdeail.push(a);
		}
		if(list1!=null){
			var length=list1.length;
			var a="{\"discount\":\"1\",\"tatilProce\":\""+tatilProce+"\",\"detail\":["+listdeail+"],\"tatil\":\""+tatil+"\",\"proModelnum2\":\"1\",\"proModelnum\":\""+id+"\"}"
			list1.push(eval("("+a+")"));
		}else{
			var a="{\"discount\":\"1\",\"tatilProce\":\""+tatilProce+"\",\"detail\":["+listdeail+"],\"tatil\":\""+tatil+"\",\"proModelnum2\":\"1\",\"proModelnum\":\""+id+"\"}"
			list.push(eval("("+a+")"));
			list1=list;
		}
		$scope.rl=list1;
		$scope.count('','','');
	    $('.editInvDialog,.maskBg').hide();
		
	}
	
	
	//款号的基本信息--添加
	$scope.getModelByModelNum_add = function(obj) {
		var proModelId=obj;
		$http({
			method : 'post',
			url : pos + 'model/getModelByModelNum',
			params : {
				keyParams : getKeyParams("{\"proModelnum\":\""+proModelId+"\"}", keyParams),
				jsonObject : getJsonObject("{\"proModelnum\":\""+proModelId+"\"}")
			}
		}).success(function(data, stauts, headers, config) {
			$scope.mdladd = data.data.modelList[0];
		})
	}
	
	//款号的基本信息--修改 二维表头
	$scope.getModelByModelNum = function(obj) {
		var proModelId=obj;
		$http({
			method : 'post',
			url : pos + 'model/getModelByModelNum',
			params : {
				keyParams : getKeyParams("{\"proModelnum\":\""+proModelId+"\"}", keyParams),
				jsonObject : getJsonObject("{\"proModelnum\":\""+proModelId+"\"}")
			}
		}).success(function(data, stauts, headers, config) {
			$scope.mdl = data.data.modelList[0];
			if($scope.mdl.proUrl!=""){
				$('#proUrl').attr("src",$scope.mdl.proUrl);
			};
		})
	}
	
	//二维表-添加
	$scope.getproduct2 = function() {
		var id=$("#id").val();
		$http({
			method : 'post',
			url : pos + 'product/findProductOnHand',
			params : {
				keyParams : getKeyParams("{\"orgId\":\""+orgId+"\",\"modelId\":\""+id+"\"}", keyParams),
				jsonObject : getJsonObject("{\"orgId\":\""+orgId+"\",\"modelId\":\""+id+"\"}")
			}
		}).success(function(data, stauts, headers, config) {
			var productList=data.data.productList;
			$scope.pl =productList;
			$scope.getModelByModelNum_add(id);

			//颜色出重复
		    var res = [], hash = {};
		    for(var i=0;i<productList.length;  i++)  {
		        if (!hash[productList[i].ColorName]) {
		            res.push(productList[i].ColorName);
		            hash[productList[i].ColorName] = true;
		            
		        }
		    }
			$scope.ys = res;
		    //尺码去重复
		    var res2 = [], hash = {};map={};
		    for(var i=0;i<productList.length;  i++)  {
		        if (!hash[productList[i].proSizeName]) {
		            res2.push(productList[i].proSizeName);
		            hash[productList[i].proSizeName] = true;
		        }
		    }
		    var phash={}; map={};
		    for(var i=0;i<productList.length;  i++)  {
		    	phash[productList[i].ColorName+","+productList[i].proSizeName] = true;
	            map[productList[i].ColorName+","+productList[i].proSizeName] = productList[i].proNum;
		    }
		    var a=""
		    //拼接数据
				$("tr[class=sc2]")
				.remove();	
		    for(var i=0;i<res.length;i++){
		    	a=a+("<tr class='sc2'><th scope=\"row\" >"+res[i]+"</th>");
		    	 for(var p=0;p<res2.length;p++){
		  		    if(phash[res[i]+","+res2[p]]){
		  		    	a=a+"<td><input class=\"input-mini\" type=\"text\" id=\""+map[res[i]+","+res2[p]]+"\" name=\""+res[i]+","+res2[p]+"\" value=\"0\"  /></td>";
		  		    }else{
		  		    	a=a+"<td><input class=\"input-mini\" type=\"text\" value=\"-\" readonly=\"readonly\" /></td>";
		  		    }
		    	 }
		    	 a=a+"</tr>"
		    }
		    $("#tr2").before(a);
			$scope.cm =res2;
		    $('.EditDialog,.editInvDialog').center();
		    $('.EditDialog2,.editInvDialog2').center();
		    $('.EditDialog3,.editInvDialog3').center();

		})
	}
	//增加商品
	$scope.adddetail = function() {
		id=$("#id2").text();
		rls=$scope.rl;
		detaillist=$scope.mdladd;
	    list=$scope.detail;
		pl=$scope.pl;
		var tatil=0;
		price=detaillist.proPrice;
		var tatilProce=0;
		var listdeail=[];
	    for(var i=0;i<pl.length;i++){
			xjunitPrice=parseFloat(price)*parseFloat($("#p"+pl[i].proNum+"").val());
			a="{\"proName\":\""+detaillist.proName+"\",\"discount\":\"1\",\"oldunitPrice\":\""+price+"\",\"xjunitPrice\":\""+xjunitPrice+"\",\"unitPrice\":\""+price+"\",\"proModelnum\":\""+id+"\",\"ColorName\":\""+pl[i].ColorName+"\",\"proNum\":\""+pl[i].proNum+"\",\"proSizeName\":\""+
			pl[i].proSizeName+"\",\"colorId\":\""+pl[i].colorId+"\",\"proSize\":\""+pl[i].proSize+"\",\"amount\":\""+$("#p"+pl[i].proNum+"").val()+"\"}";
			tatil=parseFloat(tatil)+parseFloat($("#p"+pl[i].proNum+"").val());
			tatilProce=parseFloat(tatilProce)+parseFloat(xjunitPrice);
			listdeail.push(a);
		}
		if(list==null){
			var length=list1.length;
			var a="{\"proModelnum\":\""+id+"\",\"detail\":["+listdeail+"]}"
			var list=[];
			list.push(eval("("+a+")"));
		}else{
			var a="{\"proModelnum\":\""+id+"\",\"detail\":["+listdeail+"]}"
			list.push(eval("("+a+")"));
		}
		a="\"unitPrice\":\""+detaillist.proPrice+"\",\"proModelId\":\""+detaillist.proModelnum+"\",\"proName\":\""+detaillist.proName
		+"\",\"rcvQty\":\""+tatil+"\"";	
		rls.push(detaillist);

	}
	
	//统计
	$scope.count = function(proModelnum,unitPrice,type) {
		var tatilProce=0;
		var totaltatilProce=0;
		var tatil=0;
		if(type=='1'){
			for(var i=0;i<$scope.addlist.length;i++){
				if(proModelnum==$scope.addlist[i].proModelnum){
					for(var j=0;j<$scope.addlist[i].detail.length;j++){
						$scope.addlist[i].detail[j].unitPrice= unitPrice;
						$scope.addlist[i].detail[j].discount=parseFloat(unitPrice/$scope.addlist[i].detail[j].oldunitPrice).toFixed(2);
						tatilProce=tatilProce+$scope.addlist[i].detail[j].unitPrice*$scope.addlist[i].detail[j].amount;
					}
					$scope.addlist[i].tatilProce=tatilProce;
					$scope.addlist[i].discount = parseFloat($scope.addlist[i].detail[0].discount).toFixed(2);
				}
			}			
		}else{
			for(var i=0;i<$scope.addlist.length;i++){
				if(proModelnum==$scope.addlist[i].proModelnum){
					for(var j=0;j<$scope.addlist[i].detail.length;j++){
						$scope.addlist[i].detail[j].discount=unitPrice;
						$scope.addlist[i].detail[j].unitPrice=parseFloat($scope.addlist[i].detail[j].oldunitPrice*unitPrice).toFixed(2);
						tatilProce=tatilProce+$scope.addlist[i].detail[j].unitPrice*$scope.addlist[i].detail[j].amount;
					}
					$scope.addlist[i].tatilProce=tatilProce;
					$scope.addlist[i].discount = parseFloat($scope.addlist[i].detail[0].discount).toFixed(2);
				}
			}
		}
	    for(var i=0;i<$scope.addlist.length; i++)  {
	    	totaltatilProce=totaltatilProce+$scope.addlist[i].tatilProce;
	    	tatil=parseFloat(tatil)+parseFloat(list1[i].tatil);
	    }
	    $scope.tatilProce=totaltatilProce;
	    $scope.tatil=tatil;
	    $scope.tatilprm=list1.length;
	}
	
	//删除采购明细
	$scope.deldetail = function(obj) {
		var id=obj.xs.proModelId;
		list1=$scope.rl ;
		for(var i=0;i<list1.length;i++){
			if(list1[i].proModelId==id){
				list1.splice(i,1);
			}
		}
		
		list=list1;
		$scope.rl=list;
		$scope.count('','','');
	}
	
});
