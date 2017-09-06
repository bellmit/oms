qyApp.controller('inventoryEditController', ['$scope','$http','$compile',function($scope,$http,$compile) {
	
	var from=0;
	var pageSize=5;
	var total=0;
	$scope.jsonPage={"nub":""+from+"","size":""+pageSize+""};

	var data = localStorage.data.split(",");
	$scope.inventoryId=data[0];
	$scope.createDate=data[1];
	$scope.userName=data[2];
	
	//加载汇总盘点单
	$http({
         method:'post',
         url:ss+'inventory/getInventoryDetailSum',
	 	 params:{
             keyParams:getKeyParams("{\"inventoryId\":\""+$scope.inventoryId+"\"}",keyParams),
             jsonObject:getJsonObject("{\"inventoryId\":\""+$scope.inventoryId+"\"}")
         }
     }).success(function(data,stauts,headers,config){
         $scope.inventoryDetailSums = data.data.inventoryDetails;
     })
    
	//大品类
	$http({
         method:'post',
         url:pos+'sort/selectSort',
         params:{
             keyParams:getKeyParams("{\"sortPid\":\"0\"}",keyParams),
             jsonObject:getJsonObject("{\"sortPid\":\"0\"}")
         }
     }).success(function(data,stauts,headers,config){
         $scope.items = data.data.sortList;       
     })
     
     //品牌
	 $http({
         method:'post',
         url:pos+'brand/getBrands',
         params:{
             keyParams:getKeyParams('{}',keyParams),
             jsonObject:getJsonObject('{}')
         }
     }).success(function(data,stauts,headers,config){
         $scope.brands = data.data.brandList;
     })
     
      //查询年份
     $http({
         method:'post',
         url:pos+'model/getDisProYear',
         params:{
             keyParams:getKeyParams('{}',keyParams),
             jsonObject:getJsonObject('{}')
         }
     }).success(function(data,stauts,headers,config){
    	 if (data.code == 1) {
    		 $scope.years = data.data.productList;
    	 } else {
    		 alertmsg("获取年份失败","error");
         }
     })
	 //初始化分页
	$scope.createPagePlugin=function(total,pageSize,pageId){
		 	  $("#"+pageId+"").empty();
		      paging = pagePlugin.createPaging({
				    renderTo : pageId,
				    total:total,
				    pageSize:pageSize
			  });
	          paging.goPage = function(from,to){
	            	$scope.page(from-1,pageSize);
	          }			    	
		};
	//分页跳转的数据
	$scope.page=function(from,pageSize){
		 var jsonPage={"nub":""+from+"","size":""+pageSize+""};
		 var jsonObject=$("#addProduct").serializeJson();
		 jsonObject=JSON.parse(jsonObject);		 
		 $.extend(jsonPage,jsonObject);
		 jsonObject=JSON.stringify(jsonPage);		 
		 $http({
	         method:'post',
	         url:pos+'model/getModels',
	         params:{
	             keyParams:getKeyParams(jsonObject,keyParams),
	             jsonObject:getJsonObject(jsonObject)
	         }
	     }).success(function(data,stauts,headers,config){
	         $scope.products = data.data.modelList;	         
	     })
	 }
    
	//获取盘点明细
	$scope.getInventoryDetail=function(){
		 $http({
	         method:'post',
	         url:ss+'inventory/getInventoryDetail',
		 	 params:{
	             keyParams:getKeyParams("{\"inventoryId\":\""+$scope.inventoryId+"\"}",keyParams),
	             jsonObject:getJsonObject("{\"inventoryId\":\""+$scope.inventoryId+"\"}")
	         }
	     }).success(function(data,stauts,headers,config){
	         $scope.inventoryDetails = data.data.inventoryDetails;
	     })
	 }
	 
	 //获取汇总盘点
	 $scope.getInventoryDetailSum=function(){
		 $http({
	         method:'post',
	         url:ss+'inventory/getInventoryDetailSum',
		 	 params:{
	             keyParams:getKeyParams("{\"inventoryId\":\""+$scope.inventoryId+"\"}",keyParams),
	             jsonObject:getJsonObject("{\"inventoryId\":\""+$scope.inventoryId+"\"}")
	         }
	     }).success(function(data,stauts,headers,config){
	         $scope.inventoryDetailSums = data.data.inventoryDetails;
	     })
	 }
    
	//删除盘点明细
	$scope.delInventoryDetail=function(){
		 var proModelid=$("#proModelid").val();
		 var jsonObject=$("#delInventoryDetForm").serializeJson();
		 $http({
	         method:'post',
	         url:ss+'inventory/delInventoryDetail',
		 	 params:{
	             keyParams:getKeyParams(jsonObject,keyParams),
	             jsonObject:getJsonObject(jsonObject)
	         }
	     }).success(function(data,stauts,headers,config){
	         alertmsg(data.msg);
	         $('.EditDialog,.maskBg').hide();
	         $scope.getInventoryDetailSum();
	     })
	 }
	 
	 //获取中品类
	 $scope.sortIdchange=function(){
		 var sortId=$scope.selected;
		 $http({
	         method:'post',
	         url:pos+'sort/selectSort',
	         params:{
	             keyParams:getKeyParams("{\"sortPid\":\""+sortId+"\"}",keyParams),
	             jsonObject:getJsonObject("{\"sortPid\":\""+sortId+"\"}")
	         }
	     }).success(function(data,stauts,headers,config){
	         $scope.itemsc = data.data.sortList;
	     })
	}
	
	//获取小品类
	$scope.sortIdCchange=function(){
    	 var sortIdC=$scope.selectedc;
		 $http({
	         method:'post',
	         url:pos+'sort/selectSort',
	         params:{
	             keyParams:getKeyParams("{\"sortPid\":\""+sortIdC+"\"}",keyParams),
	             jsonObject:getJsonObject("{\"sortPid\":\""+sortIdC+"\"}")
	         }
	     }).success(function(data,stauts,headers,config){
	         $scope.itemsg = data.data.sortList;
	     })
	}
	
	//添加盘点商品弹窗
	$scope.addProduct=function(){
		var proModelnum1="";
		var inventoryDetailSums=$scope.inventoryDetailSums;
		if(inventoryDetailSums){
			for(var i=0;i<inventoryDetailSums.length;i++){
				proModelnum1=proModelnum1+inventoryDetailSums[i].proModelid+",";
			}
			proModelnum1=proModelnum1.substr(0,proModelnum1.length-1);
			$scope.proModelnum1=proModelnum1;
		}
		$scope.products=null;
		$('.addInvDialog,.maskBg').show();
	}
	
	//获取盘点商品
	$scope.getInventoryProduct=function(obj){

		var jsonObject=$("#addProduct").serializeJson();
		jsonObject=JSON.parse(jsonObject);		 
		$.extend($scope.jsonPage,jsonObject);
		jsonObject=JSON.stringify($scope.jsonPage);
		$http({
	         method:'post',
	         url:pos+'model/getModels',
	         params:{
	             keyParams:getKeyParams(jsonObject,keyParams),
	             jsonObject:getJsonObject(jsonObject)
	         }
	     }).success(function(data,stauts,headers,config){
	         $scope.products = data.data.modelList;
	         total=parseInt($scope.products[0].count);
	         $scope.createPagePlugin(total,pageSize,"pagingB");
	     })
	}
	
	//新增盘点商品
	$scope.addInventoryProduct=function(){
		var jsonObject=$("#inventoryProduct").serializeJson();
		if(jsonObject.indexOf("proModelnum")!=-1){
			$http({
		         method:'post',
		         url:ss+'inventory/addinventoryDetail',
		         params:{
		             keyParams:getKeyParams(jsonObject,keyParams),
		             jsonObject:getJsonObject(jsonObject)
		         }
		     }).success(function(data,stauts,headers,config){
		         alertmsg(data.msg);
		         $('.addColordialog,.maskBg').hide();
		         $scope.getInventoryDetailSum();
		     })
		}else{
			alertmsg("请选择盘点商品在添加!",'error');
		}
	}
	
	//编辑 生成二维表
	$scope.inventoryDetailEdit=function($event){
		var data=$($event.target).attr("data");
		$scope.proModelid=data;
		$http({
			method : 'post',
			url : pos + 'product/findProductOnHand',
			params : {
				keyParams : getKeyParams("{\"orgId\":\"10000\",\"modelId\":\""+$scope.proModelid+"\"}", keyParams),
				jsonObject : getJsonObject("{\"orgId\":\"10000\",\"modelId\":\""+$scope.proModelid+"\"}")
			}
		}).success(function(data, stauts, headers, config) {
			var productList=data.data.productList;
			$scope.sumInvtNum=0;
			//去除数组中相同的元素生成尺码数组
			var size=[],hash = {};
			for(var i=0;i<productList.length;i++){
				if(!hash[productList[i].proSizeName]){
					size.push(productList[i].proSizeName);
					hash[productList[i].proSizeName]=true;
				}
			}
			$scope.sizes=size;
			//$("#size").after(size.join(""));
			//去除数组中相同的元素生成颜色数组
			var color = [], hash = {};
		    for(var i=0;i<productList.length;  i++)  {
		        if (!hash[productList[i].ColorName]) {
		        	color.push(productList[i].ColorName);
		            hash[productList[i].ColorName] = true;		            
		        }
		    }
			$scope.colors=color;
			var phash={}; map={};
		    for(var i=0;i<productList.length;  i++)  {
		    	phash[productList[i].ColorName+","+productList[i].proSizeName] = true;	            
	            map[productList[i].ColorName+","+productList[i].proSizeName] = {"proNum":productList[i].proNum,"stkOnHand":productList[i].stkOnHand};
		    }
		    $(".productStkNum").remove();
			var html=[];
			$scope.sumStkNum=0;
			for(var i=0;i<color.length;i++){
				html.push("<tr class='productStkNum'>");
				html.push("<th scope='row'>"+color[i]+"</th>");				
				for(var j=0;j<size.length;j++){
					if(phash[color[i]+","+size[j]]){
						var proNum=map[color[i]+","+size[j]].proNum;
						$scope.proNum=proNum;
						var stkOnHand=map[color[i]+","+size[j]].stkOnHand;	
						html.push("<td><input class='fn-left invtNum' type='text' name='"+proNum+"' ng-blur='editStkNum($event)' validatetype='require:!盘点数不能为空;regex:0|(^[1-9]([0-9]+$)?)!盘点数不能输入负数' />");
						html.push("<span>/"+stkOnHand+"</span></td>");						
						$scope.sumStkNum=$scope.sumStkNum+parseInt(stkOnHand);
					}else{
						html.push("<td><input type='text' value='-' readonly='readonly' disabled='disabled'/></td>");
					}
				}
				html.push("</tr>");				
			}
			var template=angular.element(html.join(""));
	        var newHtml=$compile(template)($scope);
	        angular.element($("#sumRow").before(newHtml));
		})
		$('.editInvDialog,.maskBg').show();
		
	}
	
	//修改盘点单事件
	$scope.editStkNum=function($event){
		var invtNums=$(".invtNum");
		$scope.sumInvtNum=0;
		$.each(invtNums,function(i,n){
			var invtNum=$(n).val();
			if(invtNum!=""){
    			$scope.sumInvtNum=$scope.sumInvtNum+parseInt(invtNum);
    		}
		})
	}
	
	//确认盘点单
	$scope.editInventoryDetail=function(){
		if(validateForm("editInventoryDetForm","msg")==true){
			var jsonObject=$("#editInventoryDetForm").serializeJson();
			$http({
		         method:'post',
		         url:ss+'inventory/editInventoryDetail',
		         params:{
		             keyParams:getKeyParams(jsonObject,keyParams),
		             jsonObject:getJsonObject(jsonObject)
		         }
		     }).success(function(data,stauts,headers,config){
		         alertmsg(data.msg);
		         $('.editInvDialog,.maskBg').hide();
		         $scope.getInventoryDetailSum();
		     })
		}else{
			alertmsg(validateForm("editInventoryDetForm","msg").split(",")[0],'error');
		}		
	}
		
	
	//结束盘点
	$scope.endInventory=function(){
		$scope.getInventoryDetail();
		$('.createInvDialog,.maskBg').show();
			
	}
	
	//调整库存
	$scope.editProductWareh=function(){
		var items=$scope.inventoryDetailSums;
		var flag=true;
		if(items&&items.length!=0){
			$.each(items,function(i,n){
				if(n.invtNum==""||n.diffNum==""){
					flag=false;
					return true;
				}
			})
		}else{
			flag=false;
		}		
		if(flag==true){
			$http({
		         method:'post',
		         url:ss+'inventory/updateWarehStk',
		         params:{
		             keyParams:getKeyParams("{\"inventoryId\":\""+$scope.inventoryId+"\"}",keyParams),
		             jsonObject:getJsonObject("{\"inventoryId\":\""+$scope.inventoryId+"\"}")
		         }
		     }).success(function(data,stauts,headers,config){
		         $('.createInvDialog,.maskBg').hide();
		         $scope.editInventory();
		     })
		}else{
			alertmsg('此盘点单号未盘点商品，请盘点！','error');
		}		
	}
	
	//更新盘点单状态
	$scope.editInventory=function(){		
		var inventoryDetailSums=$scope.inventoryDetailSums;
		var sumStkNums=0;
		var sumInvtNums=0;
		var sumDiffNums=0;
		for(var s in inventoryDetailSums){
			sumStkNums=sumStkNums+parseInt(inventoryDetailSums[s].stkNum);
			sumInvtNums=sumInvtNums+parseInt(inventoryDetailSums[s].invtNum);
			sumDiffNums=sumDiffNums+parseInt(inventoryDetailSums[s].diffNum);
		}
		$("#sumStkNums").val(sumStkNums);
		$("#sumInvtNums").val(sumInvtNums);
		$("#sumDiffNums").val(sumDiffNums);
		var jsonObject=$("#updateInventoryForm").serializeJson();
		$http({
	         method:'post',
	         url:ss+'inventory/updateInventory',
	         params:{
	             keyParams:getKeyParams(jsonObject,keyParams),
	             jsonObject:getJsonObject(jsonObject)
	         }
	     }).success(function(data,stauts,headers,config){
	         alertmsg(data.msg);
	         window.location.href="#/inventory";
	     })
	}
	
    //保存盘点
    $scope.saveInvetory=function(){
    	var inventoryDetailSums=$scope.inventoryDetailSums;
    	if(inventoryDetailSums&&inventoryDetailSums.length!=0){
    		var sumStkNums=0;
    		var sumInvtNums=0;
    		var sumDiffNums=0;
    		for(var s in inventoryDetailSums){
    			sumStkNums=sumStkNums+parseInt(inventoryDetailSums[s].stkNum);
    			sumInvtNums=sumInvtNums+parseInt(inventoryDetailSums[s].invtNum);
    			sumDiffNums=sumDiffNums+parseInt(inventoryDetailSums[s].diffNum);
    		}
    		if(sumInvtNums&&sumDiffNums){
    			$("#sumStkNums").val(sumStkNums);
        		$("#sumInvtNums").val(sumInvtNums);
        		$("#sumDiffNums").val(sumDiffNums);
        		var jsonObject=$("#updateInventoryForm").serializeJson();
        		$http({
        	         method:'post',
        	         url:ss+'inventory/saveInventory',
        	         params:{
        	             keyParams:getKeyParams(jsonObject,keyParams),
        	             jsonObject:getJsonObject(jsonObject)
        	         }
        	     }).success(function(data,stauts,headers,config){
        	         alertmsg(data.msg);
        	         window.location.href="#/inventory";
        	     })
    		}else{
    			window.location.href="#/inventory";
    		}    		
    	}else{
    		window.location.href="#/inventory";
    	}
		
    }

}]);

