qyApp.controller('purchseController', function($scope, $http) {
	
	var pageSize=10;
	var from=0;
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
	//打开供应商弹窗
	$scope.addPurchse=function(){
		$scope.addlist="";
		$scope.pl="";
		$scope.mdl="";
		$('#disWarehName').val("");
		$scope.createTime="";
		$scope.disWarehName="";
		$scope.recievingId="";
		$scope.numA=1;
		$('.addPurdialog,.maskBg').show();
	}
	//关闭弹窗
	$scope.closed=function(){
		$scope.numA=0;
		$scope.numB=0;
		$scope.numC=0;
		$('.maskBg,.addPurdialog').fadeOut();
	}
	//分页
	$scope.createPagePlugin=function(total,pageSize){
	 	  $("#paging").empty();
	      paging = pagePlugin.createPaging({
			    renderTo : 'paging',
			    total:total,
			    pageSize:pageSize
		  });
         paging.goPage = function(from,to){
           	$scope.page(from-1,pageSize);
         }			    	
	};
	//分页
	$scope.page=function(from,pageSize){
		 $scope.jsonPage={"nub":""+from+"","size":""+pageSize+""};
		 $.extend($scope.jsonPage,$scope.param);
		 page=$scope.jsonPage;
			var id=$("#id").val();
			var data=$("#data").val();
		 size=page.size;
		 nub=page.nub;
		var data1="{\"endTime\":\""+data+"\",\"beginTime\":\""+data+"\",\"recievingId\":\""+id+"\",\"orgId\":\""+orgId+"\",\"nub\":\""+nub+"\",\"size\":\""+pageSize+"\"}";
		$http({
			method : 'post',
			url : ss + 'recieving/getRecievings_New',
			params : {
				keyParams : getKeyParams(data1, keyParams),
				jsonObject : getJsonObject(data1)
			}
		}).success(function(data, stauts, headers, config) {
			$scope.x = data.data.recievingList;
			$scope.counts=data.data.recievingList[0].count;
		})
	}	
	//统计
	$scope.count= function(proModelnum,unitPrice,type) {
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
	    	tatil=parseFloat(tatil)+parseFloat($scope.list1[i].tatil);
	    }
	    $scope.tatilProce=totaltatilProce;
	    $scope.tatil=tatil;
	    $scope.tatilprm=$scope.list1.length;
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
		var data="";
		$http({
			method : 'post',
			url : ss + 'recieving/getRecievings_New',
			params : {
				keyParams : getKeyParams("{\"endTime\":\""+data+"\",\"beginTime\":\""+data+"\",\"recievingId\":\""+id+"\",\"orgId\":\""+orgId+"\",\"nub\":\"0\",\"size\":\"100\"}", keyParams),
				jsonObject : getJsonObject("{\"endTime\":\""+data+"\",\"beginTime\":\""+data+"\",\"recievingId\":\""+id+"\",\"orgId\":\""+orgId+"\",\"nub\":\"0\",\"size\":\"100\"}")
			}
		}).success(function(data, stauts, headers, config) {
			 localStorage.createTime=data.data.recievingList[0].createTime;
			 localStorage.disWarehName=data.data.recievingList[0].disWarehName;
			 localStorage.recievingId=data.data.recievingList[0].recievingId;
			 window.location.href="#/purchsedetail";
		})
	}
	//单个采购单主表信息
	$scope.updatadetails = function(obj) {
		var id=obj.xs.recievingId;
		data="";
		$http({
			method : 'post',
			url : ss + 'recieving/getRecievings_New',
			params : {
				keyParams : getKeyParams("{\"endTime\":\""+data+"\",\"beginTime\":\""+data+"\",\"recievingId\":\""+id+"\",\"orgId\":\""+orgId+"\",\"nub\":\"0\",\"size\":\"100\"}", keyParams),
				jsonObject : getJsonObject("{\"endTime\":\""+data+"\",\"beginTime\":\""+data+"\",\"recievingId\":\""+id+"\",\"orgId\":\""+orgId+"\",\"nub\":\"0\",\"size\":\"100\"}")
			}
		}).success(function(data, stauts, headers, config) {
			 localStorage.createTime=data.data.recievingList[0].createTime;
			 localStorage.disWarehName=data.data.recievingList[0].disWarehName;
			 localStorage.recievingId=data.data.recievingList[0].recievingId;
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
	
	
	//添加采购主表信息
	$scope.add = function() {
		data1=$("#disWarehName").val();
		data="{\"dispWarehName\":\""+data1+"\",\"orgId\":\""+orgId+"\",\"status\":\"0\"}"
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
	//增加采购明细
	$scope.addAddDetail = function(type) {
		var id="";
		if(type==0){
			id=$("#updateAddId").val();
		}else{
			id=$("#addAddId").val();
		}
		$scope.list1=[];
		if($scope.addlist!=""){
			$scope.list1=$scope.addlist;
		}
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
		if($scope.list1!=null){
			var length=$scope.list1.length;
			var a="{\"discount\":\"1\",\"tatilProce\":\""+tatilProce+"\",\"detail\":["+listdeail+"],\"tatil\":\""+tatil+"\",\"proModelnum2\":\"1\",\"proModelnum\":\""+id+"\"}";
			$scope.list1.push(eval("("+a+")"));
		}else{
			var a="{\"discount\":\"1\",\"tatilProce\":\""+tatilProce+"\",\"detail\":["+listdeail+"],\"tatil\":\""+tatil+"\",\"proModelnum2\":\"1\",\"proModelnum\":\""+id+"\"}";
			list.push(eval("("+a+")"));
			$scope.list1=list;
		}
		$scope.addlist=$scope.list1;
		$scope.count(id,price,'1');
		if(type==1){
			$('.addAddDialog,.maskBg').hide();
		}else{
			$('.updateAddDialog,.maskBg').hide();
		}
	}
	
	//删除采购明细
	$scope.deldetail = function(obj) {
		var id=obj.xs.proModelnum;
		$scope.list1=$scope.addlist ;
		for(var i=0;i<$scope.list1.length;i++){
			if($scope.list1[i].proModelnum==id){
				$scope.list1.splice(i,1);
			}
		}
		
		list=$scope.list1;
		$scope.addlist=list;
		$scope.count('','','');
	}
	
	//修改采购明细
	$scope.updatadetail = function(obj) {
		id=$("#id2").text();
		$scope.list1=$scope.addlist;
		var pl=$scope.pl;
		var detail=[];
		detaillist=$scope.mdl;
		price=detaillist.proPrice;
		var tatilProce=0;
		for(var i=0;i<$scope.list1.length;i++){
			if($scope.list1[i].proModelnum==id){
				detail=$scope.list1[i].deail;
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
		$scope.count('','','1');
	}
	
	
	
	//查询采购明细
	$scope.finddetail = function(data) {
		data1="{\"orgId\":\""+orgId+"\",\"recievingId\":\""+data+"\"}"
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
	//打开修改明细层
	$scope.updataproduct = function(obj) {
		$("input[type=reset]").trigger("click");
		$('.editInvDialog3,.maskBg').fadeIn;
		$('.editInvDialog3,.maskBg').show();
	}
	
	//款号的基本信息
//	$scope.getModelByModelNum = function(obj) {
//		var proModelId=obj;
//		$http({
//			method : 'post',
//			url : pos + 'model/getModelByModelNum',
//			params : {
//				keyParams : getKeyParams("{\"proModelnum\":\""+proModelId+"\"}", keyParams),
//				jsonObject : getJsonObject("{\"proModelnum\":\""+proModelId+"\"}")
//			}
//		}).success(function(data, stauts, headers, config) {
//			$scope.mdl = data.data.modelList[0];
//			if($scope.mdl.proUrl!=""){
//				$('#proUrl').attr("src",$scope.mdl.proUrl);
//			}
//		})
//	}
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
		$scope.result=boolean;
	}
	
	//二维表生成-修改
	$scope.editProduct = function(obj,type) {
		var proModelId=obj;
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
			$('#addEditProUrl').attr("src","../static/base/images/large.png");
			$('#addProUrl').attr("src","../static/base/images/large.png");
			$('#updateProUrl').attr("src","../static/base/images/large.png");
			$('#updateEditProUrl').attr("src","../static/base/images/large.png");
			$('#detailProUrl').attr("src","../static/base/images/large.png");
			$scope.getModelByModelNum(proModelId);
			$scope.list1=$scope.addlist ;
			var detailList=[];
		    for(var i=0;i<$scope.list1.length;  i++)  {
		    	if(proModelId==$scope.list1[i].proModelnum){
		    		detailList=$scope.list1[i].detail;
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
		  		    	a=a+"<td><input class=\"\" type=\"text\" id=\"p"+map[res[i]+","+res2[p]]+"\" name=\""+res[i]+","+res2[p]+"\" value=\""+sizemap[res[i]+","+res2[p]]+"\"  /></td>";
		  		    	}else{
			  		    	a=a+"<td><input class=\"\" type=\"text\" id=\"p"+map[res[i]+","+res2[p]]+"\" name=\""+res[i]+","+res2[p]+"\" value=\"0\" /></td>";
		  		    	}
		  		    	
		  		    }else{
		  		    	a=a+"<td><input class=\"\" type=\"text\" value=\"-\" readonly=\"readonly\" /></td>";
		  		    }
		    	 }
		    	 a=a+"</tr>"
		    }
			if($scope.mdl.proUrl!=""){
				$('#editProUrl').attr("src",$scope.mdl.proUrl);
			}
			if(type=="0"){
			    $("#tr2").before(a);
				$('.addEditInvDialog,.maskBg').show();
			}else{
			    $("#updateTr2").before(a);
				$('.updateEditInvDialog,.maskBg').show();
			}
		    $('.addEditInvDialog').center();
			$('.updateEditInvDialog').center();
		})
	}
	//修改采购明细
	$scope.updata = function() {
		id=$scope.id;
		$scope.list1=$scope.addlist ;
		var price1=0;
		for(var i=0;i<$scope.list1.length;i++){
			if($scope.list1[i].proModelnum==id){
				price1=$scope.list1[i].discount;
				$scope.list1.splice(i,1);
			}
		}
		$scope.addlist=$scope.list1;
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
		if($scope.list1!=null){
			var length=$scope.list1.length;
			var a="{\"discount\":\"1\",\"tatilProce\":\""+tatilProce+"\",\"detail\":["+listdeail+"],\"tatil\":\""+tatil+"\",\"proModelnum2\":\"1\",\"proModelnum\":\""+id+"\"}"
			$scope.list1.push(eval("("+a+")"));
		}else{
			var a="{\"discount\":\"1\",\"tatilProce\":\""+tatilProce+"\",\"detail\":["+listdeail+"],\"tatil\":\""+tatil+"\",\"proModelnum2\":\"1\",\"proModelnum\":\""+id+"\"}"
			list.push(eval("("+a+")"));
			$scope.list1=list;
		}
		$scope.addlist=$scope.list1;
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
	//保存采购单
	$scope.saveProducts = function(type) {
		list=$scope.addlist;
		var detaillist=[];
		for(var p=0;p<list.length;p++){
			$scope.list1=list[p].detail;
			var proModelnum=$scope.list1[p].proModelnum;
			for(var i=0;i<$scope.list1.length;i++){
				proSizeName=$scope.list1[i].proSizeName;
				proColorId=$scope.list1[i].colorId;
				proName=$scope.list1[i].proName;
				ordQty=$scope.list1[i].amount;
				proSize=$scope.list1[i].proSize;
				unitPrice=$scope.list1[i].unitPrice;
				proNum=$scope.list1[i].proNum;
				proColorName=$scope.list1[i].ColorName;
				discount=$scope.list1[i].discount;
				mkUnitPrice=$scope.list1[i].oldunitPrice;
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
			if(type=="0"){
				$scope.numA=0;
			}else{
				$scope.numB=0;
			}
			$scope.getAll();
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
	//确认入库
	$scope.addAndcommit= function(obj) {
		list=$scope.addlist;
		var detaillist=[];
		for(var p=0;p<list.length;p++){
			$scope.list1=list[p].detail;
			var proModelnum=$scope.list1[p].proModelnum;
			for(var i=0;i<$scope.list1.length;i++){
				proSizeName=$scope.list1[i].proSizeName;
				proColorId=$scope.list1[i].colorId;
				proName=$scope.list1[i].proName;
				ordQty=$scope.list1[i].amount;
				proSize=$scope.list1[i].proSize;
				unitPrice=$scope.list1[i].unitPrice;
				proNum=$scope.list1[i].proNum;
				proColorName=$scope.list1[i].ColorName;
				discount=$scope.list1[i].discount;
				mkUnitPrice=$scope.list1[i].oldunitPrice;
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

	//修改页面
	$scope.createTime=localStorage.createTime;
	$scope.disWarehName=localStorage.disWarehName;
	$scope.recievingId=localStorage.recievingId;
	
	
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
			$scope.list1=data.data.recievingDetailList;
			$scope.detail=$scope.list1;
			$scope.listanew (obj);
		})
	}
	//采购单明细列表
	$scope.obtainDetails=function(recievingId){
		$http({
			method : 'post',
			url : ss + 'recievingDetail/getRecievingForModelNum',
			params : {
				keyParams : getKeyParams("{\"recievingId\":\""+recievingId+"\"}", keyParams),
				jsonObject : getJsonObject("{\"recievingId\":\""+recievingId+"\"}")
			}
		}).success(function(data, stauts, headers, config) {
			list=data.data.rDList;
			//主数据
			for(var i=0;i<list.length;i++){
				$scope.getDetail3(list[i]);
			}		
		})
	}
	//获取单款明细
	$scope.listanew = function(obj) {
		listzhu=obj;
		listdetail=$scope.detail;
		$scope.list1=$scope.addlist;
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
		if($scope.list1!=undefined){
			var length=$scope.list1.length;
			var a="{\"discount\":\""+discount+"\",\"tatilProce\":\""+tatilProce+"\",\"detail\":["+listdeail2+"],\"tatil\":\""+tatil+"\",\"proModelnum2\":\"1\",\"proModelnum\":\""+proModelnum+"\"}"
			$scope.list1.push(eval("("+a+")"));
		}else{
			var a="{\"discount\":\""+discount+"\",\"tatilProce\":\""+tatilProce+"\",\"detail\":["+listdeail2+"],\"tatil\":\""+tatil+"\",\"proModelnum2\":\"1\",\"proModelnum\":\""+proModelnum+"\"}"
			list.push(eval("("+a+")"));
			$scope.list1=list;
		}
		$scope.addlist=$scope.list1;
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
				keyParams : getKeyParams("{\"endTime\":\""+data+"\",\"beginTime\":\""+data+"\",\"recievingId\":\""+id+"\",\"orgId\":\""+orgId+"\",\"nub\":\""+from+"\",\"size\":\""+pageSize+"\"}", keyParams),
				jsonObject : getJsonObject("{\"endTime\":\""+data+"\",\"beginTime\":\""+data+"\",\"recievingId\":\""+id+"\",\"orgId\":\""+orgId+"\",\"nub\":\""+from+"\",\"size\":\""+pageSize+"\"}")
			}
		}).success(function(data, stauts, headers, config) {
			$scope.x = data.data.recievingList;
			if(data.data.recievingList.length === 0){
				$scope.counts = 0
			}else{
				$scope.counts=data.data.recievingList[0].count;
			}
			if($scope.counts>pageSize){
				$scope.createPagePlugin($scope.counts,pageSize);
			}else{
				$('#paging').empty();
			}
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
	//------查询详情信息开始------
	$scope.queryDetails = function(obj) {
		var id=obj;
		data="{\"recievingId\":\""+id+"\",\"orgId\":\""+orgId+"\",\"nub\":\"0\",\"size\":\"1000\"}"
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
			//采购单明细列表
			$http(
			{
				method : 'post',
				url : ss + 'recievingDetail/getRecievingForModelNum',
				params : {
					keyParams : getKeyParams("{\"recievingId\":\""+$scope.recievingId+"\"}", keyParams),
					jsonObject : getJsonObject("{\"recievingId\":\""+$scope.recievingId+"\"}")
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
					$scope.list1=data.data.recievingDetailList;
					var list=[];
					list=$scope.detail;
					if(list==null){
						list=[];	
					}
					if($scope.list1.length>0){
					a="{\"proModelId\":\""+proModelId+"\",\"details\":"+JSON.stringify($scope.list1)+"}"
					list.push(eval("("+a+")"))
					}
					$scope.detail =list;
				})
			}
		})
		 $scope.numC=1;
	}
	//获取详情数据
	$scope.getDetail2 = function(proModelId,recievingId) {
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
	//二维表生成-修改-只读
	$scope.productReadonly = function(proModelId) {
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
		  		    	a=a+"<td><input class=\"\" type=\"text\" id=\""+map[res[i]+","+res2[p]]+"\" name=\""+res[i]+","+res2[p]+"\" value=\""+sizemap[res[i]+","+res2[p]]+"\" readonly=\"readonly\" /></td>";
		  		    	}else{
			  		    	a=a+"<td><input class=\"\" type=\"text\" id=\""+map[res[i]+","+res2[p]]+"\" name=\""+res[i]+","+res2[p]+"\" value=\"0\" readonly=\"readonly\" /></td>";

		  		    	}
		  		    	
		  		    }else{
		  		    	a=a+"<td><input class=\"\" type=\"text\" value=\"-\" readonly=\"readonly\" /></td>";
		  		    }
		    	 }
		    	 a=a+"</tr>"
		    }
		    $("#detailtr").before(a);
			$('.editInvDialog').center();
			$('.editInvDialog,.maskBg').show();
		})
	}	
	$scope.callback=function(){
		$scope.numA=0;
		$scope.numB=0;
		$scope.numC=0;
		$scope.numD=0;
		$scope.getAll();
	}
	//------查询详情信息结束------
	//------修改页面-----
	$scope.updateDetails = function(obj) {
		data="{\"recievingId\":\""+obj+"\",\"orgId\":\""+orgId+"\",\"nub\":\"0\",\"size\":\"1000\"}"
		$http({
			method : 'post',
			url : ss + 'recieving/getRecievings_New',
			params : {
				keyParams : getKeyParams(data, keyParams),
				jsonObject : getJsonObject(data)
			}
		}).success(function(data, stauts, headers, config) {
				 $scope.createTime=data.data.recievingList[0].createTime;
				 $scope.disWarehName=data.data.recievingList[0].disWarehName;
				 $scope.recievingId=data.data.recievingList[0].recievingId;
				 $scope.addlist=[];
				 $scope.obtainDetails($scope.recievingId);
				 $scope.numB=1;
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
	
	//删除采购明细
	$scope.deldetail = function(obj) {
		var id=obj.xs.proModelnum;
		$scope.list1=$scope.addlist ;
		for(var i=0;i<$scope.list1.length;i++){
			if($scope.list1[i].proModelnum==id){
				$scope.list1.splice(i,1);
			}
		}
		
		list=$scope.list1;
		$scope.addlist=list;
		$scope.count('','','');
	}
	
	//修改采购明细
	$scope.updatadetail = function(obj) {
		id=$("#id2").text();
		$scope.list1=$scope.addlist;
		var pl=$scope.pl;
		var detail=[];
		detaillist=$scope.mdl;
		price=detaillist.proPrice;
		var tatilProce=0;
		for(var i=0;i<$scope.list1.length;i++){
			if($scope.list1[i].proModelnum==id){
				detail=$scope.list1[i].deail;
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
	//打开修改和添加的添加商品明细层
    $scope.hasproModelnum="";
    $scope.closeDia=function(){
        $scope.hasproModelnum="";
    }
	$scope.addproduct = function(type) {
		$("input[type=reset]").trigger("click");
		$scope.pl=[];
		$scope.mdl=[];
		$('#addEditProUrl').attr("src","../static/base/images/large.png");
		$('#addProUrl').attr("src","../static/base/images/large.png");
		$('#updateProUrl').attr("src","../static/base/images/large.png");
		$('#updateEditProUrl').attr("src","../static/base/images/large.png");
		$('#detailProUrl').attr("src","../static/base/images/large.png");
		$scope.cm=[];
		$("tr[class=sc]")
		.remove();
		if(type=="0"){		
			$('.addAddDialog,.maskBg').fadeIn;
			$('.addAddDialog,.maskBg').show();	
		}else{
			$('.updateAddDialog,.maskBg').fadeIn;
			$('.updateAddDialog,.maskBg').show();			
		}
//        if($("#addAddId").val()||$("#updateAddId").val()==''){
//            $('.searchProType').prop({"disabled":true}).css({"background":"#959798","color":"#ccc","border-color":"#959798"})
//        }else{
//            $('.searchProType').prop({"disabled":false})
//        }
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
				$('#addEditProUrl').attr("src",$scope.mdl.proUrl);
				$('#addProUrl').attr("src",$scope.mdl.proUrl);
				$('#updateProUrl').attr("src",$scope.mdl.proUrl);
				$('#updateEditProUrl').attr("src",$scope.mdl.proUrl);
				$('#detailProUrl').attr("src",$scope.mdl.proUrl);
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
		$scope.result=boolean;
	};

	//二维表-添加 0是添加1是修改
	$scope.product = function(type) {
		var proModelId="";
		if(type=="0"){
			proModelId=$("#addAddId").val();
		}else{
			proModelId=$("#updateAddId").val();
		}
		$scope.boolean(proModelId);
		result=$scope.result;
		if(result==true){
			alertmsg("该款已添加","error");
			return
		}
        var jsonObject = "{\"orgId\":\""+orgId+"\",\"modelId\":\""+proModelId+"\"}";
		$http({
			method : 'post',
			url : pos + 'product/findProductOnHand',
			params : {
				keyParams : getKeyParams(jsonObject, keyParams),
				jsonObject : getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			var productList=data.data.productList;
			$scope.pl =productList;
			$('#addEditProUrl').attr("src","../static/base/images/large.png");
			$('#addProUrl').attr("src","../static/base/images/large.png");
			$('#updateProUrl').attr("src","../static/base/images/large.png");
			$('#updateEditProUrl').attr("src","../static/base/images/large.png");
			$('#detailProUrl').attr("src","../static/base/images/large.png");
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
		  		    	a=a+"<td><input class=\"\" type=\"text\" id=\""+map[res[i]+","+res2[p]]+"\" name=\""+res[i]+","+res2[p]+"\" value=\"0\"  /></td>";
		  		    }else{
		  		    	a=a+"<td><input class=\"\" type=\"text\" value=\"-\" readonly=\"readonly\" /></td>";
		  		    }
		    	 }
		    	 a=a+"</tr>"
		    }
		    if(type=="0"){
			    $("#tr").before(a);
				$scope.cm =res2;
			    $('.EditDialog,.editInvDialog').center();
			    $('.EditDialog2,.editInvDialog2').center();
		    }else{
			    $("#updateTr").before(a);
				$scope.cm =res2;
			    $('.EditDialog,.editInvDialog').center();
			    $('.EditDialog2,.editInvDialog2').center();
		    }
		})
	}
	//修改单款采购明细
	$scope.UpdateProductDetail = function(type) {
		id=$scope.id;
		$scope.list1=$scope.addlist ;
		var price1=0;
		for(var i=0;i<$scope.list1.length;i++){
			if($scope.list1[i].proModelnum==id){
				price1=$scope.list1[i].discount;
				$scope.list1.splice(i,1);
			}
		}
		$scope.addlist=$scope.list1;
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
		if($scope.list1!=null){
			var length=$scope.list1.length;
			var a="{\"discount\":\"1\",\"tatilProce\":\""+tatilProce+"\",\"detail\":["+listdeail+"],\"tatil\":\""+tatil+"\",\"proModelnum2\":\"1\",\"proModelnum\":\""+id+"\"}"
			$scope.list1.push(eval("("+a+")"));
		}else{
			var a="{\"discount\":\"1\",\"tatilProce\":\""+tatilProce+"\",\"detail\":["+listdeail+"],\"tatil\":\""+tatil+"\",\"proModelnum2\":\"1\",\"proModelnum\":\""+id+"\"}"
			list.push(eval("("+a+")"));
			$scope.list1=list;
		}
		$scope.addlist=$scope.list1;
		$scope.count(id,price1,'2');
		if(type=="0"){
			$('.addEditInvDialog,.maskBg').hide();
		}else{
			$('.updateEditInvDialog,.maskBg').hide();
		}
	}
	$scope.change = function(proModelnum,unitPrice,type) {
		$scope.count(proModelnum,unitPrice,type);
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
			$scope.list1=list[p].detail;
			var proModelnum=$scope.list1[p].proModelnum;
			for(var i=0;i<$scope.list1.length;i++){
				proSizeName=$scope.list1[i].proSizeName;
				proColorId=$scope.list1[i].colorId;
				proName=$scope.list1[i].proName;
				ordQty=$scope.list1[i].amount;
				proSize=$scope.list1[i].proSize;
				unitPrice=$scope.list1[i].unitPrice;
				proNum=$scope.list1[i].proNum;
				proColorName=$scope.list1[i].ColorName;
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
				alertmsg(data.msg);
		        $scope.numA=0;
		        $scope.numB=0;
		        $scope.numC=0;	
		        $scope.getAll();
			})
		})
	}	
	//------修改页面结束-----

    //返回上一页
    function callback($scope){
        $scope.numA=0;
        $scope.numB=0;
        $scope.numC=0;
        $scope.getAll();
    }
    $scope.getAll();
});
