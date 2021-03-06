qyApp.controller('sortController', ['$scope','$http','$compile','Upload',function($scope,$http,$compile,Upload) {
	//重新加载大品类
	$scope.reloadLargeSort=function(){
		$http({
	        method:'post',
	        url:pos+'sort/selectSort',
	        params:{
	            keyParams:getKeyParams('{"sortPid":"'+0+'"}',keyParams),
	            jsonObject:getJsonObject('{"sortPid":"'+0+'"}')
	        }
	    }).success(function(data,stauts,headers,config){
	   	 if (data.code == 1) {
	   		 $scope.largeSorts = data.data.sortList;
	   		$("#"+$scope.largeSortId).addClass('activeCatego').siblings('li').removeClass('activeCatego');
			$("#"+$scope.largeSortId).parents('.categoNav').nextAll().find('li').removeClass('activeCatego');
	   	 } else {
	   		 alertmsg("获取品类失败","error");
	        }
	    })
	}
	//重新加载中品类
	$scope.reloadMiddleSort=function(){
		var jsonObject = "{\"sortPid\":\""+$scope.largeSortId+"\"}";
		 $http({
         method:'post',
         url:pos+'sort/selectSort',
         params:{
             keyParams:getKeyParams(jsonObject,keyParams),
             jsonObject:getJsonObject(jsonObject)
         }
     }).success(function(data,stauts,headers,config){
    	 	 if (data.code == 1) {
    	 		$scope.middleSorts = data.data.sortList;
    	 		//$scope.smallSorts = "";
    	 		$("#"+$scope.middleSortId).addClass('activeCatego').siblings('li').removeClass('activeCatego');
    			$("#"+$scope.middleSortId).parents('.categoNav').nextAll().find('li').removeClass('activeCatego');
	    	 } else {
	    		 alertmsg("获取品类失败","error");
	         }
     })
	}
	//重新加载小品类
	$scope.reloadSort=function(){
		var jsonObject = "{\"sortPid\":\""+$scope.middleSortId+"\"}";
		 $http({
         method:'post',
         url:pos+'sort/selectSort',
         params:{
             keyParams:getKeyParams(jsonObject,keyParams),
             jsonObject:getJsonObject(jsonObject)
         }
     }).success(function(data,stauts,headers,config){
    	 	 if (data.code == 1) {
    	 		$scope.smallSorts = data.data.sortList;
    	 		$("#"+$scope.smallSortId).addClass('activeCatego').siblings('li').removeClass('activeCatego');
    			$("#"+$scope.smallSortId).parents('.categoNav').nextAll().find('li').removeClass('activeCatego');
	    	 } else {
	    		 alertmsg("获取品类失败","error");
	         }
     })
	}
	
	//查询大品类
	$http({
        method:'post',
        url:pos+'sort/selectSort',
        params:{
            keyParams:getKeyParams('{"sortPid":"'+0+'"}',keyParams),
            jsonObject:getJsonObject('{"sortPid":"'+0+'"}')
        }
    }).success(function(data,stauts,headers,config){
   	 if (data.code == 1) {
   		 $scope.largeSorts = data.data.sortList;
   	 } else {
   		 alertmsg("获取品类失败","error");
        }
    })
    //查询中品类
    $scope.getMiddleSort=function(obj){
		$scope.largeSortId = obj.large.sortId;
		$scope.largeSortName = obj.large.sortName;
		$("#"+$scope.largeSortId).addClass('activeCatego').siblings('li').removeClass('activeCatego');
		$("#"+$scope.largeSortId).parents('.categoNav').nextAll().find('li').removeClass('activeCatego');
		var jsonObject = "{\"sortPid\":\""+$scope.largeSortId+"\"}";
        $http({
            method:'post',
            url:pos+'sort/selectSort',
            params:{
                keyParams:getKeyParams(jsonObject,keyParams),
                jsonObject:getJsonObject(jsonObject)
            }
        }).success(function(data,stauts,headers,config){
       	 	 if (data.code == 1) {
       	 		$scope.middleSorts = data.data.sortList;
       	 		$scope.smallSorts = "";
	    	 } else {
	    		 alertmsg("获取品类失败","error");
	         }
        })
    }
	//查询小品类
	$scope.getSmallSort=function(obj){
		$scope.middleSortId = obj.middle.sortId;
		$scope.middleSortName = obj.middle.sortName;
		$("#"+$scope.middleSortId).addClass('activeCatego').siblings('li').removeClass('activeCatego');
		$("#"+$scope.middleSortId).parents('.categoNav').nextAll().find('li').removeClass('activeCatego');
		var jsonObject = "{\"sortPid\":\""+$scope.middleSortId+"\"}";
        $http({
            method:'post',
            url:pos+'sort/selectSort',
            params:{
                keyParams:getKeyParams(jsonObject,keyParams),
                jsonObject:getJsonObject(jsonObject)
            }
        }).success(function(data,stauts,headers,config){
       	 	 if (data.code == 1) {
       	 		$scope.smallSorts = data.data.sortList;
	    	 } else {
	    		 alertmsg("获取品类失败","error");
	         }
        })
    }
	
	//获取小品类sortId
	$scope.getSortId=function(obj){
		$scope.smallSortId = obj.small.sortId;
		$scope.smallSortName = obj.small.sortName;
		$("#"+$scope.smallSortId).addClass('activeCatego').siblings('li').removeClass('activeCatego');
		$("#"+$scope.smallSortId).parents('.categoNav').nextAll().find('li').removeClass('activeCatego');
    }
	
	//删除品类
	$scope.del=function(obj){
		var type = $("#deltype").val();
		if(type == 1){
			var sortId = $scope.largeSortId;
		}else if(type == 2){
			var sortId = $scope.middleSortId;
		}else if(type == 3){
			var sortId = $scope.smallSortId;
		}
		var jsonObject = "{\"sortId\":\""+sortId+"\"}";
        $http({
            method:'post',
            url:pos+'sort/deleteSort',
            params:{
                keyParams:getKeyParams(jsonObject,keyParams),
                jsonObject:getJsonObject(jsonObject)
            }
        }).success(function(data,stauts,headers,config){
       	 	 if (data.code == 1) {
       	 		alertmsg(data.msg);
	       	 	if(type == 1){
	       	 		$scope.reloadLargeSort();
	    		}else if(type == 2){
	    			$scope.reloadMiddleSort();
	    		}else if(type == 3){
	    			$scope.reloadSort();
	    		}
	    	 } else {
	    		alertmsg("删除品类失败","error");
	         }
        })
    }
	
	$scope.addDiv=function(){
		var addLineColor=[];
	   	 addLineColor.push('<div class="am-input am-input-add">');
	   	 addLineColor.push('<label class="fn-left">品类名称：</label>');
	   	 addLineColor.push('<input class="fn-left inPval" type="text" name="sortName" value="" placeholder="请输入..." />');
	   	 addLineColor.push('<span class="delAdd">删除</span><div class="fn-clear"></div>');
	   	 addLineColor.push('</div>');
	   	 var html=addLineColor.join("");
	        var template=angular.element(html);
	        var newHtml=$compile(template)($scope);
	   	 angular.element($('#adddialogBtn').before(newHtml));
         $('.categoAddDialog').center();
	}
	
	$scope.addSort=function(){
		var type = $("#addtype").val();
		if(type == 1){
			var sortPid = "0";
		}else if(type == 2){
			var sortPid = $scope.largeSortId;
		}else if(type == 3){
			var sortPid = $scope.middleSortId;
		}
		var data=JSON.parse($("#addForm").serializeJson());
		var dataName=data.sortName;
		if(Object.prototype.toString.call(dataName) == "[object String]"){
			dataName=dataName.split(",");
		}
		var jsonObject = [];
		var isEmpty;
		for(var i = 0; i < dataName.length;i++ ){
			var object =new Object();
			object.sortPid = sortPid;
			object.sortName = dataName[i];
			if(object.sortName == ''){
				isEmpty = "1";
				break;
			}
			jsonObject.push(object);
		}
		if(isEmpty == "1"){
			$('.maskBg').show();
			alertmsg("有品类名称未输入","error");
		}else{
			jsonObject='{"sortList":'+JSON.stringify(jsonObject)+'}';
			 $http({
		            method:'post',
		            url:pos+'sort/addSort',
		            params:{
		                keyParams:getKeyParams(jsonObject,keyParams),
		                jsonObject:getJsonObject(jsonObject)
		            }
		        }).success(function(data,stauts,headers,config){
		       	 	 if (data.code == 1) {
		       	 		alertmsg(data.msg);
			       	 	 $('.am-input').not('.am-input-def').remove();
			             $('.categoEditDialog').center();
			             $('#addsortName').val("");
			             $('.categoAddDialog,.maskBg').hide();
		             	if(type == 1){
			       	 		$scope.reloadLargeSort();
			    		}else if(type == 2){
			    			$scope.reloadMiddleSort();
			    		}else if(type == 3){
			    			$scope.reloadSort();
			    		}
			    	 } else {
			    		alertmsg("添加品类失败","error");
			         }
		        })
		}
	}
	
	$scope.update=function($event,type){
		if($($event.target).parents('.categoNav-div').find('li').is('.activeCatego')==true){
			if(type==1){
				var sortId = $scope.largeSortId;
				$scope.updateSortName = $scope.largeSortName;
			}else if(type==2){
				var sortId = $scope.middleSortId;
				$scope.updateSortName = $scope.middleSortName;
			}else if(type==3){
				var sortId = $scope.smallSortId;
				$scope.updateSortName = $scope.smallSortName;
			}
			$("#updatetype").val(type);
			$('.categoEditDialog').fadeIn();
	        $('.maskBg').fadeIn();
		}else{
			if(type==1){
				alertmsg("请选择一个大品类!","error");
			}else if(type==2){
				alertmsg("请选择一个中品类!","error");
			}else if(type==3){
				alertmsg("请选择一个小品类!","error");
			}
    	}
	}
	
	$scope.updateSort=function(obj){
		var sortName = obj.updateSortName;
		if(sortName == "" || sortName == null){
			$('.maskBg').show();
			alertmsg("请输入品类名称","error");
		}else{
			var updateType = $("#updatetype").val();
			if(updateType==1){
				var sortId = $scope.largeSortId;
			}else if(updateType==2){
				var sortId = $scope.middleSortId;
			}else if(updateType==3){
				var sortId = $scope.smallSortId;
			}
			var jsonObject = "{\"sortId\":\""+sortId+"\",\"sortName\":\""+sortName+"\"}";
			$http({
	            method:'post',
	            url:pos+'sort/updateSort',
	            params:{
	                keyParams:getKeyParams(jsonObject,keyParams),
	                jsonObject:getJsonObject(jsonObject)
	            }
	        }).success(function(data,stauts,headers,config){
	       	 	 if (data.code == 1) {
	       	 	 $('.categoEditDialog,.maskBg').hide();
	       	 		alertmsg(data.msg);
		       	 	if(updateType == 1){
		       	 		$scope.reloadLargeSort();
		    		}else if(updateType == 2){
		    			$scope.reloadMiddleSort();
		    		}else if(updateType == 3){
		    			$scope.reloadSort();
		    		}
		    	 } else {
		    		alertmsg("修改品类失败","error");
		         }
	        })
		}
	}
}]);



