qyApp.controller('addorderController',['$scope','$http','$compile','Upload',function($scope,$http,$compile,Upload) {
	
		var pageSize=10;
		var orgId = JSON.parse(keyParams).orgId;
		var data="{\"orgId\":\""+orgId+"\"}";
		//导购列表
		$http({
			method : 'post',
			url : cas + 'user/getSales',
			params : {
				keyParams : getKeyParams(data, keyParams),
				jsonObject : getJsonObject(data)
			}
		}).success(function(data, stauts, headers, config) {
			$scope.dg = data.data.saleList;
		})
		
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
			 size=page.size;
			 nub=page.nub;
			var id=$("#orderId").val();
			var data=$("#data").val();
			 var data1="{\"size\":\""+size+"\",\"nub\":\""+nub+"\",\"orgId\":\""+orgId+"\",\"orderId\":\""+id+"\",\"day\":\""+data+"\"}";
				$http({
					method : 'post',
					url : pos + 'order/getOrder',
					params : {
						keyParams : getKeyParams(data1, keyParams),
						jsonObject : getJsonObject(data1)
					}
		    }).success(function(data,stauts,headers,config){
				$scope.ol = data.data.orderList; 
		    })
		}	

	$scope.reload = function() {
		$http({
			method : 'post',
			url : pos + 'order/getOrder',
			params : {
				keyParams : getKeyParams("{}", keyParams),
				jsonObject : getJsonObject("{}")
			}
		}).success(function(data, stauts, headers, config) {
			$scope.x = data.data.orderList;
		})
	}
	//主页	
	$scope.getById = function() {
		var id=$("#orderId").val();
		var data=$("#data").val();
		var data1="{\"orgId\":\""+orgId+"\",\"orderId\":\""+id+"\",\"day\":\""+data+"\"}"
			$http({
				method : 'post',
				url : pos + 'order/getOrder',
				params : {
					keyParams : getKeyParams(data1, keyParams),
					jsonObject : getJsonObject(data1)
				}
				}).success(function(data, stauts, headers, config) {
					$scope.ol = data.data.orderList;
					count=data.data.count;
					$scope.createPagePlugin(count,pageSize);
				})
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
			if($scope.mdladd.proUrl!=""){
				$('#proUrl').attr("src",$scope.mdladd.proUrl);
			}
		})
	}	
		
    //订单结算
	$scope.add = function() {
		var pl=$scope.odlist;
		var huiyuan=$("#huiyuan").text();
		var beizhu=$("#beizhu").val();
		var daogou=$scope.selected;
		if(daogou==null){
			daogou="";
		}
		ordQty=$scope.tatil;
		if(ordQty==null){
			ordQty=0;
		}
		var order = "\"orderQuantity\":\""+ordQty+"\",\"orgId\":\""+orgId+"\",\"orderType\":\"1\",\"salesId\":\""+daogou+"\",\"orderMemo\":\""+beizhu+"\",\"memberId\":\""+huiyuan+"\" ";
		var data = "{\"order\":{"+ order+"},\"orderDetails\":" + JSON.stringify(pl)+ "}";
		$http({
			method : 'post',
			url : pos + 'order/addOrder',
			params : {
				keyParams : getKeyParams(data, keyParams),
				jsonObject : getJsonObject(data)
			}
		}).success(function(data, stauts, headers, config) {
			alertmsg(data.msg);
			$scope.odlist="";
			$scope.selected="";
			$scope.tatil="";
			$scope.tatilPrice="";
			$scope.member="";
			$scope.oldunitPrice="";
			$scope.zk="";
			$('#pid').val("");
			$('#beizhu').val("");
		})
	}
	//显示detail
	$scope.getDetail = function(obj) {
		 var oldProModelid = $("#proDetailProModelid").val();
		 var olist=$scope.ol;;
	  	 var id=obj.xs.order.orderId;
	  	 $(".detPanel-info").remove();
	  	 if(id!=oldProModelid){
	  	 for(var i=0;i<olist.length;i++){
	  		 if(id==olist[i].order.orderId){
	  			$scope.od=olist[i].orderDetails;
	  		 }
	  	 }
	  	 
		 var addLineColor=[];
		
    	 addLineColor.push('<tr class="detPanel-info" style="display: table-row;">');
    	 addLineColor.push('<td class="detailTd" colspan="9">');
    	 addLineColor.push('<table class="table inventDetail mgb0">');
    	 addLineColor.push('<tr><th scope="col">SKU编码</th><th scope="col">颜色</th><th scope="col">尺寸</th><th scope="col">数量</th><th scope="col">单价</th></tr>');
    	 addLineColor.push('<tr ng-repeat="proDetail in od" ng-if="proDetail.amount!=0"><td>{{proDetail.proNum}}<input type="hidden" id="proDetailProModelid" value="'+id+'"></td><td>{{proDetail.proColorName}}</td><td>{{proDetail.proSizeName}}</td><td>{{proDetail.amount}}</td><td>{{proDetail.unitPrice}}</td></tr>');
    	 addLineColor.push('</table></td></tr>');
    	 var html=addLineColor.join("");
         var template=angular.element(html);
         var newHtml=$compile(template)($scope);
         angular.element($("."+id).after(newHtml));
	  	 }
		
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
	
	
	//查询 
	$scope.getproduct = function() {
		var id = $("#id").val();
		$scope.boolean(id);
		reslut=$scope.reslut;
		if(reslut==true){
			alertmsg("该款已添加","error");
			return
		}
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
			$('#proUrl').attr("src","../static/base/images/large.png");
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
		    $('.editInvDialog').center();
		    $('.editInvDialog2').center();
			$('.editInvDialog3').center();
		})
	}
	//增加明细商品
	$scope.updata = function() {
		var id = $("#id").val();
		list1=$scope.addlist ;
		var pl=$scope.pl;
		var a="";
		detaillist=$scope.mdladd;
		var odllist=[];
		odllist=$scope.odlist;
		var listdeail=[];
		var tatil=0;
		var list=[];
		var unitPrice=detaillist.proPrice;
		var oldunitPrice=detaillist.proPrice;
		var tatilPrice=0;
		var oldunitPrices=0;
		var discount=$scope.discount;
		var proName=detaillist.proName;
		if(discount==null){
			discount=1;
		}
		for(var i=0;i<pl.length;i++){
			xjunitPrice=parseFloat(unitPrice)*parseFloat($("#"+pl[i].proNum+"").val());
			tatilunitPrice=parseFloat(unitPrice)*parseFloat($("#"+pl[i].proNum+"").val());	
			tatil=parseInt(tatil)+parseInt($("#"+pl[i].proNum+"").val());
			tatilPrice=parseFloat(tatilunitPrice)+parseFloat(tatilPrice);
			xjPrices=parseFloat(oldunitPrice)*parseFloat($("#"+pl[i].proNum+"").val());
			oldunitPrices=parseFloat(oldunitPrices)+parseFloat(xjPrices);
			a="{\"proName\":\""+proName+"\",\"discount\":\""+discount+"\",\"oldunitPrice\":\""+oldunitPrice+"\",\"xjunitPrice\":\""+xjunitPrice+"\",\"unitPrice\":\""+unitPrice+"\",\"proModelid\":\""+id+"\",\"proColorName\":\""+pl[i].ColorName+"\",\"proNum\":\""+pl[i].proNum+"\",\"proSizeName\":\""+
			pl[i].proSizeName+"\",\"proColorId\":\""+pl[i].colorId+"\",\"proSize\":\""+pl[i].proSize+"\",\"amount\":\""+$("#"+pl[i].proNum+"").val()+"\"}";
			
			if(odllist!=null){
				odllist.push(eval("("+a+")"));
			}else{
				var odllist=[];
				odllist.push(eval("("+a+")"));
			}
		}
		$scope.oldunitPrice=oldunitPrices;
		$scope.tatilPrice=tatilPrice;
		$scope.zk=tatilPrice/oldunitPrices;
		$scope.tatil=tatil;
		$scope.odlist=odllist;
		$scope.count(); 
	    $('.editInvDialog,.maskBg').hide();
	}
	
	//删除采购明细
	$scope.deldetail = function(obj) {
		var id=obj.xs.proNum;
		list1=$scope.odlist ;
		for(var i=0;i<list1.length;i++){
			if(list1[i].proNum==id){
				list1.splice(i,1);
			}
		}
		list=list1;
		$scope.odlist=list;
		$scope.count(); 
	}
	
	//获取会员号
	$scope.getmember = function() {
		var memberNo=$("#pid").val();
		if(memberNo != ""){
			jsonObject = "{\"orgId\":\""+orgId+"\",\"memberNo\":\""+memberNo+"\",\"nub\":\""+0+"\",\"size\":\""+1+"\"}";
	        $http({
	            method:'post',
	            url:pos+'member/getMembers',
	            params:{
	                keyParams:getKeyParams(jsonObject,keyParams),
	                jsonObject:getJsonObject(jsonObject)
	            }
	        }).success(function(data,stauts,headers,config){
	        	if(data.data.memberList.length > 0){
	        		$scope.member = data.data.memberList[0];
	    	       	$scope.discount=data.data.memberList[0].discount;
	    	       	$scope.change2();
	        	}else{
	        		 alertmsg("本店没有该会员!","error");
	        	}
	        })
		}else{
			alertmsg("请输入会员号!","error");
		}
        
	}
	//统计价格
	$scope.count = function(proModelid,proColorId,proSize,unitPrice,type) {
		var tatilPrice=0;
		var oldunitPrice=0;
		var pl=$scope.odlist;
		var tatil=0;
		if(type=='1'){
			for(var i=0;i<$scope.odlist.length;i++){
				if($scope.odlist[i].proModelid==proModelid&&$scope.odlist[i].proColorId==proColorId
						&&$scope.odlist[i].proSize==proSize){
					$scope.odlist[i].discount=unitPrice/$scope.odlist[i].oldunitPrice;				
				}
			}
		}else{
			for(var i=0;i<$scope.odlist.length;i++){
				if($scope.odlist[i].proModelid==proModelid&&$scope.odlist[i].proColorId==proColorId
						&&$scope.odlist[i].proSize==proSize){
					$scope.odlist[i].unitPrice=$scope.odlist[i].oldunitPrice*unitPrice;				
				}
			}			
		}
		for(var i=0;i<pl.length;i++){
			tatilunitPrice=parseFloat(pl[i].oldunitPrice)*parseFloat(pl[i].amount*pl[i].discount);	
			tatilPrice=parseFloat(tatilunitPrice)+parseFloat(tatilPrice);
			oldunitPrices=parseFloat(pl[i].oldunitPrice)*parseFloat(pl[i].amount);	
			oldunitPrice=oldunitPrice+parseFloat(oldunitPrices);
			tatil=tatil+parseFloat(pl[i].amount);
		}
		$scope.oldunitPrice=parseFloat(oldunitPrice);
		$scope.tatilPrice=parseFloat(tatilPrice);
		$scope.zk=tatilPrice/oldunitPrice;
		$scope.tatil=tatil;
	}
	$scope.show=function(obj) {
		$scope.pl=[];
		$scope.mdladd=[];
		$scope.cm=[];
		$("tr[class=sc]")
		.remove();	
		$("input[type=reset]").trigger("click");
		$('.editInvDialog,.maskBg').show();
	}
	//价格变化
	$scope.change = function(proModelid,proColorId,proSize,unitPrice,type) {
		//$scope.discount=$scope.xs.oldunitPrice;
		$scope.count(proModelid,proColorId,proSize,unitPrice,type);
	}
	$scope.change2=function(obj){
		$scope.updataDiscount();
		$scope.count();
	}
	//修改折扣
	$scope.updataDiscount = function() {
		
		for(var i=0;i<$scope.odlist.length;i++){
			$scope.odlist[i].discount=$('#bulkDiscount').val();
		}
		$('.Bulkditing-dialog,.maskBg').hide();
		
	}
}]);
