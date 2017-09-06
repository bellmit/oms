

qyApp.controller('updatepurchseController', function($scope, $http) {
	
	$scope.createTime=localStorage.createTime;
	$scope.disWarehName=localStorage.disWarehName;
	$scope.recievingId=localStorage.recievingId;
	
	var orgId = JSON.parse(keyParams).orgId;
	
	$http({
		method : 'post',
		url : pos + 'wareh/getWarehByOrgId',
		params : {
			keyParams : getKeyParams("{\"orgId\":\""+orgId+"\"}", keyParams),
			jsonObject : getJsonObject("{\"orgId\":\""+orgId+"\"}")
		}
	}).success(function(data, stauts, headers, config) {
		$scope.rcvWarehId = data.data.warehList[0].warehId;
	})
	
	//获取单个数据
	$scope.getDetail3 = function(obj) {
		var recievingId= $scope.recievingId;
		var proModelId=obj.proModelId;
		var data="{\"recievingId\":\""+recievingId+"\",\"proModelNum\":\""+proModelId+"\"}";
		$http({
			method : 'post',
			url : ss + 'recievingDetail/getRcvQty',
			params : {
				keyParams : getKeyParams(data, keyParams),
				jsonObject : getJsonObject(data)
			}
		}).success(function(data, stauts, headers, config) {
			list1=data.data.recievingDetailList;
			$scope.detail=list1;
			$scope.listanew (obj);
		})
	}
	//采购单明细列表
	$http({
		method : 'post',
		url : ss + 'recievingDetail/getRecievingForModelNum',
		params : {
			keyParams : getKeyParams("{\"recievingId\":\""+localStorage.recievingId+"\"}", keyParams),
			jsonObject : getJsonObject("{\"recievingId\":\""+localStorage.recievingId+"\"}")
		}
	}).success(function(data, stauts, headers, config) {
		list=data.data.rDList;
		//主数据
		for(var i=0;i<list.length;i++){
			$scope.getDetail3(list[i]);
		}
		

	})
	//获取单款明细
	$scope.listanew = function(obj) {
		listzhu=obj;
		listdetail=$scope.detail;
		list1=$scope.addlist;
		proName=listzhu.proName;		
		oldunitPrice=listzhu.mkUnitPrice;
		price=listzhu.unitPrice;
		discount=listzhu.mkDiscRate;
		proModelnum=listzhu.proModelId;
		ColorName="1";
		proNum="";
		proSizeName="";
		colorId="";
		proSize="";
		amount="";
		var pl=$scope.pl;
		var a="";
		var listdeail2=[];
		var tatil=listzhu.rcvQty;
		var list=[];
		var tatilProce=0;
		for(var i=0;i<listdetail.length;i++){
			ColorName=listdetail[i].proColorName;
			proNum=listdetail[i].proNum;
			proSizeName=listdetail[i].proSizeName;
			colorId=listdetail[i].proColorId;
			proSize=listdetail[i].proSize;
			amount=listdetail[i].rcvQty;
			xjunitPrice=parseFloat(price)*parseFloat(amount);
			a="{\"proName\":\""+proName+"\",\"discount\":\""+discount+"\",\"oldunitPrice\":\""+oldunitPrice+"\",\"xjunitPrice\":\""+xjunitPrice+"\",\"unitPrice\":\""+price+"\",\"proModelnum\":\""+proModelnum+"\",\"ColorName\":\""+ColorName+"\",\"proNum\":\""+proNum+"\",\"proSizeName\":\""+
			proSizeName+"\",\"colorId\":\""+colorId+"\",\"proSize\":\""+proSize+"\",\"amount\":\""+amount+"\"}";
			tatilProce=parseFloat(tatilProce)+parseFloat(xjunitPrice);
			listdeail2.push(a);
		}
		if(list1!=null){
			var length=list1.length;
			var a="{\"discount\":\""+discount+"\",\"tatilProce\":\""+tatilProce+"\",\"detail\":["+listdeail2+"],\"tatil\":\""+tatil+"\",\"proModelnum2\":\"1\",\"proModelnum\":\""+proModelnum+"\"}"
			list1.push(eval("("+a+")"));
		}else{
			var a="{\"discount\":\""+discount+"\",\"tatilProce\":\""+tatilProce+"\",\"detail\":["+listdeail2+"],\"tatil\":\""+tatil+"\",\"proModelnum2\":\"1\",\"proModelnum\":\""+proModelnum+"\"}"
			list.push(eval("("+a+")"));
			list1=list;
		}
		$scope.addlist=list1;
		$scope.count('','','');
	}
	
	
	
	//采购单列表
	$scope.getAll = function() {
		var id=$("#id").val();
		var data=$("#data").val();
		$http({
			method : 'post',
			url : ss + 'recieving/getRecievings_New',
			params : {
				keyParams : getKeyParams("{\"endTime\":\""+data+"\",\"beginTime\":\""+data+"\",\"recievingId\":\""+id+"\",\"orgId\":\""+orgId+"\",\"nub\":\"0\",\"size\":\"100\"}", keyParams),
				jsonObject : getJsonObject("{\"endTime\":\""+data+"\",\"beginTime\":\""+data+"\",\"recievingId\":\""+id+"\",\"orgId\":\""+orgId+"\",\"nub\":\"0\",\"size\":\"100\"}")
			}
		}).success(function(data, stauts, headers, config) {
			$scope.x = data.data.recievingList;
			$scope.count=data.data.recievingList[0].count;
		})
	}

	$scope.reload = function(obj) {
			var id=obj;
			data="{\"recievingId\":\""+id+"\",\"orgId\":\""+orgId+"\",\"nub\":\"0\",\"size\":\"100\"}"
			$http({
				method : 'post',
				url : ss + '/recieving/getRecievings_New',
				params : {
					keyParams : getKeyParams(data, keyParams),
					jsonObject : getJsonObject(data)
				}
			}).success(function(data, stauts, headers, config) {
				$scope.createTime=data.data.recievingList[0].createTime;
				$scope.disWarehName=data.data.recievingList[0].disWarehName;
				$scope.recievingId=data.data.recievingList[0].recievingId;
			})
		}
	//单个采购单主表信息
	$scope.findById = function(obj) {
		var id=obj.xs.recievingId;
		data="{\"recievingId\":\""+id+"\",\"orgId\":\""+orgId+"\"}"
		$http({
			method : 'post',
			url : ss + 'recieving/getRecievingById',
			params : {
				keyParams : getKeyParams(data, keyParams),
				jsonObject : getJsonObject(data)
			}
		}).success(function(data, stauts, headers, config) {
				 localStorage.createTime=data.data.recieving.createTime;
				 localStorage.disWarehName=data.data.recieving.disWarehName;
				 localStorage.recievingId=data.data.recieving.recievingId;
				 window.location.href="#/purchsedetail";
		})
	}
	//单个采购单主表信息
	$scope.updatadetails = function(obj) {
		var id=obj.xs.recievingId;
		data="{\"recievingId\":\""+id+"\",\"orgId\":\""+orgId+"\"}"
		$http({
			method : 'post',
			url : ss + 'recieving/getRecievingById',
			params : {
				keyParams : getKeyParams(data, keyParams),
				jsonObject : getJsonObject(data)
			}
		}).success(function(data, stauts, headers, config) {
				 localStorage.createTime=data.data.recieving.createTime;
				 localStorage.disWarehName=data.data.recieving.disWarehName;
				 localStorage.recievingId=data.data.recieving.recievingId;
				 window.location.href="#/updatepurchse";
		})
	}
	
	
	//删除采购单
	$scope.del = function(obj) {
		id=obj.xs.recievingId;
		data="{\"recievingId\":\""+id+"\"}";
		$http({
			method : 'post',
			url : ss + 'recieving/deleteRecieving',
			params : {
				keyParams : getKeyParams(data, keyParams),
				jsonObject : getJsonObject(data)
			}
		}).success(function(data, stauts, headers, config) {
			$scope.getAll();
			alertmsg(data.msg);
		})
	}
	
	
	//添加采购单
	$scope.add = function() {
		data1=$("#disWarehName").val();
		data="{\"dispWarehName\":\""+data1+"\",\"orgId\":\""+orgId+"\",\"status\":\"0\"}";
		$http({
			method : 'post',
			url : ss + 'recieving/addRecieving',
			params : {
				keyParams : getKeyParams(data, keyParams),
				jsonObject : getJsonObject(data)
			}
		}).success(function(data, stauts, headers, config) {
			$scope.reload(data.data.recievingId);
			$('.addColordialog,.maskBg').hide()
			
			alertmsg(data.msg);
		})
	}
	var id=0;
	//增加采购明细
	$scope.addde = function() {
		var id=$("#id").val();
		list1=$scope.addlist ;
		detaillist=$scope.mdl;
		var pl=$scope.pl;
		var a="";
		var listdeail=[];
		var tatil=0;
		var list=[];
		price=detaillist.proPrice;
		var tatilProce=0;
		for(var i=0;i<pl.length;i++){
			xjunitPrice=parseFloat(price)*parseFloat($("#"+pl[i].proNum+"").val());
			a="{\"proName\":\""+detaillist.proName+"\",\"discount\":\"1\",\"oldunitPrice\":\""+price+"\",\"xjunitPrice\":\""+xjunitPrice+"\",\"unitPrice\":\""+price+"\",\"proModelnum\":\""+id+"\",\"ColorName\":\""+pl[i].ColorName+"\",\"proNum\":\""+pl[i].proNum+"\",\"proSizeName\":\""+
			pl[i].proSizeName+"\",\"colorId\":\""+pl[i].colorId+"\",\"proSize\":\""+pl[i].proSize+"\",\"amount\":\""+$("#"+pl[i].proNum+"").val()+"\"}";
			tatil=parseFloat(tatil)+parseFloat($("#"+pl[i].proNum+"").val());
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
		$scope.addlist=list1;
		$scope.count(id,price,'1');
	    $('.editInvDialog2,.maskBg').hide();
	}
	
	//删除采购明细
	$scope.deldetail = function(obj) {
		var id=obj.xs.proModelnum;
		list1=$scope.addlist ;
		for(var i=0;i<list1.length;i++){
			if(list1[i].proModelnum==id){
				list1.splice(i,1);
			}
		}
		
		list=list1;
		$scope.addlist=list;
		$scope.count('','','');
	}
	
	//修改采购明细
	$scope.updatadetail = function(obj) {
		id=$("#id2").text();
		list1=$scope.addlist;
		var pl=$scope.pl;
		var detail=[];
		detaillist=$scope.mdl;
		price=detaillist.proPrice;
		var tatilProce=0;
		for(var i=0;i<list1.length;i++){
			if(list1[i].proModelnum==id){
				detail=list1[i].deail;
			}
		}
		for(var i=0;i<detail.length;i++){
			detail.splice(1, 1);
		}
		for(var i=0;i<pl.length;i++){
			xjunitPrice=parseFloat(price)*parseFloat($("#"+pl[i].proNum+"").val());
			a="{\"proName\":\""+detaillist.proName+"\",\"discount\":\"1\",\"oldunitPrice\":\""+price+"\",\"xjunitPrice\":\""+xjunitPrice+"\",\"unitPrice\":\""+price+"\",\"proModelnum\":\""+id+"\",\"ColorName\":\""+pl[i].ColorName+"\",\"proNum\":\""+pl[i].proNum+"\",\"proSizeName\":\""+
			pl[i].proSizeName+"\",\"colorId\":\""+pl[i].colorId+"\",\"proSize\":\""+pl[i].proSize+"\",\"amount\":\""+$("#p"+pl[i].proNum+"").val()+"\"}";
			tatil=parseFloat(tatil)+parseFloat($("#"+pl[i].proNum+"").val());
			tatilProce=parseFloat(tatilProce)+parseFloat(xjunitPrice);
			listdeail.push(a);
		}
		$scope.count('','','');
	}
	
	
	
	//查询采购明细
	$scope.finddetail = function(data) {
		data1="{\"orgId\":\""+orgId+"\",\"recievingId\":\""+data+"\"}";
		$http({
			method : 'post',
			url : ss + 'recievingDetail/addOrUpdateDetail',
			params : {
				keyParams : getKeyParams(data1, keyParams),
				jsonObject : getJsonObject(data1)
			}
		}).success(function(data, stauts, headers, config) {
			$scope.xs = data.data.recievingList;
		})
	}
	//打开添加明细层
	$scope.addproduct = function() {
		$("input[type=reset]").trigger("click");
		$scope.pl=[];
		$scope.mdl=[];
		$('#proUrl').attr("src","../static/base/images/large.png");
		$scope.cm=[];
		$("tr[class=sc]")
		.remove();	
		$('.editInvDialog2,.maskBg').fadeIn;
		$('.editInvDialog2,.maskBg').show();
	}
	//打开修改明细层
	$scope.updataproduct = function(obj) {
		$("input[type=reset]").trigger("click");
		$('.editInvDialog3,.maskBg').fadeIn;
		$('.editInvDialog3,.maskBg').show();
	}
	
	//款号的基本信息
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
				$('#editProUrl').attr("src",$scope.mdl.proUrl);
				$('#proUrl').attr("src",$scope.mdl.proUrl);
			}
		})
	}
	
	//判断款号是否添加
	$scope.boolean = function(obj) {
		proModelId=obj;
		list=$scope.addlist;
		var boolean=false;
		if(list==null){
			var list=[];
		}
		
		for(var i=0;i<list.length;i++){
			if(list[i].proModelnum==proModelId){
				 boolean=true;
			}
		}
		$scope.reslut=boolean;
	}
	//二维表-添加
	$scope.product = function() {
		var proModelId=$("#id").val();
		$scope.boolean(proModelId);
		reslut=$scope.reslut;
		if(reslut==true){
			alertmsg("该款已添加","error");
			return
		}
		$http({
			method : 'post',
			url : pos + 'product/findProductOnHand',
			params : {
				keyParams : getKeyParams("{\"orgId\":\""+orgId+"\",\"modelId\":\""+proModelId+"\"}", keyParams),
				jsonObject : getJsonObject("{\"orgId\":\""+orgId+"\",\"modelId\":\""+proModelId+"\"}")
			}
		}).success(function(data, stauts, headers, config) {
			var productList=data.data.productList;
			$scope.pl =productList;
			$('#proUrl').attr("src","../static/base/images/large.png");
			$scope.getModelByModelNum(proModelId);
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
				$("tr[class=sc]")
				.remove();	
		    for(var i=0;i<res.length;i++){
		    	a=a+("<tr class='sc'><th scope=\"row\" >"+res[i]+"</th>");
		    	 for(var p=0;p<res2.length;p++){
		  		    if(phash[res[i]+","+res2[p]]){
		  		    	a=a+"<td><input class=\"input-mini\" type=\"text\" id=\""+map[res[i]+","+res2[p]]+"\" name=\""+res[i]+","+res2[p]+"\" value=\"0\"  /></td>";
		  		    }else{
		  		    	a=a+"<td><input class=\"input-mini\" type=\"text\" value=\"-\" readonly=\"readonly\" /></td>";
		  		    }
		    	 }
		    	 a=a+"</tr>"
		    }
		    $("#tr").before(a);
		    
			$scope.cm =res2;
		    $('.EditDialog,.editInvDialog').center();
		    $('.EditDialog2,.editInvDialog2').center();
		})
	}
	
	//二维表生成-修改
	$scope.product2 = function(obj) {
		var proModelId=obj.xs.proModelnum;
		$scope.id=proModelId;
		$http({
			method : 'post',
			url : pos + 'product/findProductOnHand',
			params : {
				keyParams : getKeyParams("{\"orgId\":\""+orgId+"\",\"modelId\":\""+proModelId+"\"}", keyParams),
				jsonObject : getJsonObject("{\"orgId\":\""+orgId+"\",\"modelId\":\""+proModelId+"\"}")
			}
		}).success(function(data, stauts, headers, config) {
			var productList=data.data.productList;
			$scope.pl =productList;
			list1=$scope.addlist ;
			$('#editProUrl').attr("src","../static/base/images/large.png");
			$scope.getModelByModelNum(proModelId);
			var detailList=[];
		    for(var i=0;i<list1.length;  i++)  {
		    	if(proModelId==list1[i].proModelnum){
		    		detailList=list1[i].detail;
		    	}
		    	
		    }
			//数量存入Map
			var sizemap={};
		    for(var i=0;i<detailList.length;  i++)  {
		    	sizemap[detailList[i].ColorName+","+detailList[i].proSizeName] = detailList[i].amount;
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
				$("tr[class=sc2]")
				.remove();	
		    for(var i=0;i<res.length;i++){
		    	a=a+("<tr class='sc2'><th scope=\"row\" >"+res[i]+"</th>");
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
		    $("#tr2").before(a);
			$('.editInvDialog3,.maskBg').show()
			if($scope.mdl.proUrl!=""){
				$('#editProUrl').attr("src",$scope.mdl.proUrl);
			}
		    $('.editInvDialog').center();
		    $('.editInvDialog2').center();
			$('.editInvDialog3').center();

		})
	}
	//修改采购明细
	$scope.updata = function() {
		id=$scope.id;
		list1=$scope.addlist ;
		var price1=0;
		for(var i=0;i<list1.length;i++){
			if(list1[i].proModelnum==id){
				price1=list1[i].discount;
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
		$scope.addlist=list1;
		$scope.count(id,price1,'2');
	    $('.editInvDialog3,.maskBg').hide();
	}
	//取消跳转
	$scope.close = function() {
		window.location.href="#/purchse";	
		}
	$scope.change = function(proModelnum,unitPrice,type) {
		$scope.count(proModelnum,unitPrice,type);
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
	    	totaltatilProce=parseFloat(totaltatilProce)+parseFloat($scope.addlist[i].tatilProce);
	    	tatil=parseFloat(tatil)+parseFloat(list1[i].tatil);
	    }
	    $scope.tatilProce=totaltatilProce;
	    $scope.tatil=tatil;
	    $scope.tatilprm=list1.length;
	}
	$scope.addProudct = function() {
		list=$scope.addlist;
		var detaillist=[];
		for(var p=0;p<list.length;p++){
			list1=list[p].detail;
			var proModelnum=list1[p].proModelnum;
			for(var i=0;i<list1.length;i++){
				proSizeName=list1[i].proSizeName;
				proColorId=list1[i].colorId;
				proName=list1[i].proName;
				ordQty=list1[i].amount;
				proSize=list1[i].proSize;
				unitPrice=list1[i].unitPrice;
				proNum=list1[i].proNum;
				proColorName=list1[i].ColorName;
				discount=list1[i].discount;
				mkUnitPrice=list1[i].oldunitPrice;
				recievingId=$scope.recievingId;
				proModelId=proModelnum;
	            detail="{\"difference\":\""+0+"\",\"proSizeName\":\""+proSizeName+"\",\"proColorId\":\""+
	            proColorId+"\",\"proName\":\""+proName+"\",\"rcvQty\":\""+ordQty+"\",\"ordVal\":\"\",\"proSize\":\""+proSize
	            +"\",\"unitPrice\":\""+unitPrice+"\",\"proNum\":\""+proNum+"\",\"proColorName\":\""+proColorName+"\",\"recievingId\":\""+recievingId
	            +"\",\"proModelId\":\""+proModelId+"\",\"mkDiscRate\":\""+discount+"\",\"mkUnitPrice\":\""+mkUnitPrice+"\"}";
	            detaillist.push(detail);
			}
		}
		data="{\"productList\":["+detaillist+"],\"orgId\":\""+orgId+"\"}";
		$http({
			method : 'post',
			url : ss + 'recievingDetail/addOrUpdateDetail',
			params : {
				keyParams : getKeyParams(data, keyParams),
				jsonObject : getJsonObject(data)
			}
		}).success(function(data, stauts, headers, config) {
			alertmsg(data.msg);
			window.location.href="#/purchse";	
		})
		}
	
	//确认入库
	$scope.commit= function(obj) {
		id=obj.xs.recievingId;
		data="{\"recievingId\":\""+id+"\",\"status\":\""+1+"\",\"orgId\":\""+orgId+"\",\"rcvWarehId\":\""+$scope.rcvWarehId+"\"}";
		$http({
			method : 'post',
			url : ss + 'recieving/confirmStorage',
			params : {
				keyParams : getKeyParams(data, keyParams),
				jsonObject : getJsonObject(data)
			}
		}).success(function(data, stauts, headers, config) {
			$scope.getAll();
			alertmsg(data.msg);
		})
	}
	//确认保存并入库
	$scope.addAndcommit= function(obj) {
		list=$scope.addlist;
		var detaillist=[];
		for(var p=0;p<list.length;p++){
			list1=list[p].detail;
			var proModelnum=list1[p].proModelnum;
			for(var i=0;i<list1.length;i++){
				proSizeName=list1[i].proSizeName;
				proColorId=list1[i].colorId;
				proName=list1[i].proName;
				ordQty=list1[i].amount;
				proSize=list1[i].proSize;
				unitPrice=list1[i].unitPrice;
				proNum=list1[i].proNum;
				proColorName=list1[i].ColorName;
				recievingId=$scope.recievingId;
				proModelId=proModelnum;
	            detail="{\"difference\":\""+0+"\",\"proSizeName\":\""+proSizeName+"\",\"proColorId\":\""+
	            proColorId+"\",\"proName\":\""+proName+"\",\"rcvQty\":\""+ordQty+"\",\"ordVal\":\"\",\"proSize\":\""+proSize
	            +"\",\"unitPrice\":\""+unitPrice+"\",\"proNum\":\""+proNum+"\",\"proColorName\":\""+proColorName+"\",\"recievingId\":\""+recievingId
	            +"\",\"proModelId\":\""+proModelId+"\"}";
	            detaillist.push(detail);
			}
		}
		data="{\"productList\":["+detaillist+"],\"orgId\":\""+orgId+"\"}";
		$http({
			method : 'post',
			url : ss + 'recievingDetail/addOrUpdateDetail',
			params : {
				keyParams : getKeyParams(data, keyParams),
				jsonObject : getJsonObject(data)
			}
		}).success(function(data, stauts, headers, config) {
			id=recievingId;
			data="{\"recievingId\":\""+id+"\",\"status\":\""+1+"\",\"orgId\":\""+orgId+"\",\"rcvWarehId\":\""+$scope.rcvWarehId+"\"}";
			$http({
				method : 'post',
				url : ss + 'recieving/confirmStorage',
				params : {
					keyParams : getKeyParams(data, keyParams),
					jsonObject : getJsonObject(data)
				}
			}).success(function(data, stauts, headers, config) {
				$scope.getAll();
				alertmsg(data.msg);
				window.location.href="#/purchse";	
			})
		})
	}
	
});
