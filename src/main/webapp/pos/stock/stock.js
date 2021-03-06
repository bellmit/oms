qyApp.controller('stockController', function($scope,$http,$compile,Upload) {
	 $scope.season = "";
	 $scope.year = "";
	 $scope.brand = "";
	 $scope.gps = "";
	 $scope.ps = "";
	 $scope.sort = "";
	 var from=0;
	 var pageSize=5;
	 var total=0;
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
	
	$scope.page=function(from,pageSize){
		 $scope.jsonPage={"nub":""+from+"","size":""+pageSize+""};
		 $.extend($scope.jsonPage,$scope.param);
		 $scope.jsonObject=JSON.stringify($scope.jsonPage);
		 $http({
	        method:'post',
	        url:pos+'product/getProStock',
	        params:{
	            keyParams:getKeyParams($scope.jsonObject,keyParams),
	            jsonObject:getJsonObject($scope.jsonObject)
	        }
	    }).success(function(data,stauts,headers,config){
	    	if (data.code == 1) {
	    		if(data.data.productList.length>0){
	    			$scope.products = data.data.productList;
	    		}else{
	    			 alertmsg("没有查到商品","error");
	    			 $scope.products = "";
	    		}
	    	 } else {
	    		 alertmsg("获取商品库存失败","error");
	         }
	    })
	}

	//查询品牌
	$http({
         method:'post',
         url:pos+'model/getDisBrandId',
         params:{
             keyParams:getKeyParams('{}',keyParams),
             jsonObject:getJsonObject('{}')
         }
     }).success(function(data,stauts,headers,config){
    	 if (data.code == 1) {
    		 $scope.brands = data.data.productList;
    	 } else {
    		 alertmsg("获取品牌失败","error");
         }
     })
     
     $scope.getConditions = function(){
		if($scope.brand != null){
			$scope.getYears();
			$scope.getSeasons();
			$scope.getSorts();
		}else{
			$scope.years = "";
			$scope.seasons = "";
			$scope.grandparentSorts = "";
			$scope.parentSorts = "";
			$scope.sorts = "";
		}
	 }
	
     //查询年份
	$scope.getYears = function(){
		var jsonObject = {brandId:$scope.brand};
		jsonObject = JSON.stringify(jsonObject);
		$http({
	         method:'post',
	         url:pos+'model/getDisProYear',
	         params:{
	             keyParams:getKeyParams(jsonObject,keyParams),
	             jsonObject:getJsonObject(jsonObject)
	         }
	     }).success(function(data,stauts,headers,config){
	    	 if (data.code == 1) {
	    		 $scope.years = data.data.productList;
	    	 } else {
	    		 alertmsg("获取年份失败","error");
	         }
	     })
	}
     
     //查询季节
	$scope.getSeasons = function(){
		var jsonObject = {brandId:$scope.brand};
		jsonObject = JSON.stringify(jsonObject);
		$http({
	         method:'post',
	         url:pos+'model/getDisProSeason',
	         params:{
	             keyParams:getKeyParams(jsonObject,keyParams),
	             jsonObject:getJsonObject(jsonObject)
	         }
	     }).success(function(data,stauts,headers,config){
	    	 if (data.code == 1) {
	    		 $scope.seasons = data.data.productList;
	    	 } else {
	    		 alertmsg("获取季节失败","error");
	         }
	     })
	}
     
     //查询大品类
	$scope.getSorts = function(){
		var jsonObject = {brandId:$scope.brand};
		jsonObject = JSON.stringify(jsonObject);
		$http({
	         method:'post',
	         url:pos+'model/getGrandparentSort',
	         params:{
	             keyParams:getKeyParams(jsonObject,keyParams),
	             jsonObject:getJsonObject(jsonObject)
	         }
	     }).success(function(data,stauts,headers,config){
	    	 if (data.code == 1) {
	    		 $scope.grandparentSorts = data.data.productList;
	    	 } else {
	    		 alertmsg("获取大品类失败","error");
	         }
	     })
	}
     
     //查询中品类
     $scope.getParentSort=function(obj){
		var proGrandparentSortId = $scope.gps;
		var jsonObject = "{"+"\"proGrandparentSortId\":\""+proGrandparentSortId+"\",\"brandId\":\""+$scope.brand+"\"}";
		 $http({
	         method:'post',
	         url:pos+'model/getParentSort',
	         params:{
	             keyParams:getKeyParams(jsonObject,keyParams),
	             jsonObject:getJsonObject(jsonObject)
	         }
	     }).success(function(data,stauts,headers,config){
	    	 if (data.code == 1) {
	    		 $scope.parentSorts = data.data.productList;
	    	 } else {
	    		 alertmsg("获取中品类失败","error");
	         }
	     })
	}
	
     //查询小品类
	$scope.getSort=function(obj){
		var proGrandparentSortId = $scope.gps;
		var proParentSortId = $scope.ps;
		var jsonObject = "{"+"\"proGrandparentSortId\":\""+proGrandparentSortId+"\",\"proParentSortId\":\""+proParentSortId+"\",\"brandId\":\""+$scope.brand+"\"}";
		$http({
	         method:'post',
	         url:pos+'model/getSort',
	         params:{
	             keyParams:getKeyParams(jsonObject,keyParams),
	             jsonObject:getJsonObject(jsonObject)
	         }
	     }).success(function(data,stauts,headers,config){
	    	 if (data.code == 1) {
	    		 $scope.sorts = data.data.productList;
	    	 } else {
	    		 alertmsg("获取小品类失败","error");
	         }
	     })
	}
     
     
      $scope.getStock=function(obj){
		
		var proGrandparentSortId = $scope.gps;
		var proParentSortId = $scope.ps;
		var proSortId = $scope.sort;
		var brandId = $scope.brand;
		var proYear="";
		var proSeason = "";
		if($scope.season1!=undefined){
			proSeason = $scope.season1.proSeason;
		}
		if($scope.year1!=undefined){
			proYear = $scope.year1.proYear;
		}
		var proModelid = $("#proModelid").val();
		var startStock = $("#startStock").val();
		var endStock = $("#endStock").val();
		var jsonObject = "{"+"\"brandId\":\""+brandId+"\",\"proGrandparentSortId\":\""+proGrandparentSortId+"\",\"proParentSortId\":\""+proParentSortId+"\",\"proSortId\":\""+proSortId+"\",\"proSeason\":\""+proSeason+"\",\"proYear\":\""+proYear+"\",\"proModelid\":\""+proModelid+"\",\"startStock\":\""+startStock+"\",\"endStock\":\""+endStock+"\",\"nub\":\""+from+"\",\"size\":\""+pageSize+"\"}";
		$http({
	         method:'post',
	         url:pos+'product/getProStock',
	         params:{
	             keyParams:getKeyParams(jsonObject,keyParams),
	             jsonObject:getJsonObject(jsonObject)
	         }
	     }).success(function(data,stauts,headers,config){
	    	 if (data.code == 1) {
		    	 if(data.data.productList.length>0){
		    		 $scope.products = data.data.productList;
			         $scope.count = data.data.count;
			         $scope.createPagePlugin($scope.count,pageSize);
			         $scope.param = {"brandId":""+brandId+"","proGrandparentSortId": ""+proGrandparentSortId+"","proParentSortId": ""+proParentSortId+"","proSortId": ""+proSortId+"","proSeason": ""+proSeason+"","proYear": ""+proYear+"","proModelid": ""+proModelid+"","startStock": ""+startStock+"","endStock": ""+endStock+""};
		    	}else{
		    		 $scope.products = "";
		    		 alertmsg("没有查到商品","error");
		    	}
	    	 } else {
	    		 alertmsg("获取商品库存失败","error");
	         }
	     })
	}
	
	 $scope.getStockDetail=function(obj){
		 var oldProModelid = $("#proDetailProModelid").val();
		 $(".detPanel-info").remove();
		 var proModelid = obj.pro.proModelid
		 if(oldProModelid!=proModelid){
			 var jsonObject = "{"+"\"proModelid\":\""+proModelid+"\"}";
			 var addLineColor=[];
	    	 addLineColor.push('<tr class="detPanel-info" style="display: table-row;">');
	    	 addLineColor.push('<td class="detailTd" colspan="9">');
	    	 addLineColor.push('<table class="table inventDetail mgb0">');
	    	 addLineColor.push('<tr><th scope="col">SKU编码</th><th scope="col">颜色</th><th scope="col">尺寸</th><th scope="col">数量</th></tr>');
	    	 addLineColor.push('<tr ng-repeat="proDetail in proDetails" ng-if="proDetail.stkOnHand != 0"><td>{{proDetail.proNum}}<input type="hidden" id="proDetailProModelid" value="{{proDetail.proModelid}}"></td><td>{{proDetail.proColorName}}</td><td>{{proDetail.proSizeName}}</td><td>{{proDetail.stkOnHand}}</td></tr>');
	    	 addLineColor.push('</table></td></tr>');
	    	 var html=addLineColor.join("");
	         var template=angular.element(html);
	         var newHtml=$compile(template)($scope);
	         angular.element($("."+proModelid).after(newHtml));
	         console.log(jsonObject);
	         $http({
		         method:'post',
		         url:pos+'product/getProDetailByOrgId',
		         params:{
		             keyParams:getKeyParams(jsonObject,keyParams),
		             jsonObject:getJsonObject(jsonObject)
		         }
		     }).success(function(data,stauts,headers,config){
		    	 if (data.code == 1) {
			         $scope.proDetails = data.data.productList;
		    	 } else {
		    		 alertmsg("获取库存详细信息失败","error");
		         }
		     })
		 }
	}
	
});

