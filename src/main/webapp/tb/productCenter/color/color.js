qyApp.controller('colorController', ['$scope','$http','$compile','Upload',function($scope,$http,$compile,Upload) {
	 var from=0;
	 var pageSize=5;
	 var total=0;
	 $scope.jsonObject="{\"nub\":\""+from+"\",\"size\":\""+pageSize+"\"}";
	 $http({
         method:'post',
         url:pos+'color/getColor',
         params:{
             keyParams:getKeyParams($scope.jsonObject,keyParams),
             jsonObject:getJsonObject($scope.jsonObject)
         }
     }).success(function(data,stauts,headers,config){
    	 if (data.code == 1) {
	         $scope.items = data.data.colorList;
	         total=parseInt($scope.items[0].count);
	         $scope.createPagePlugin(total,pageSize);
    	 } else {
    		 alertmsg("获取颜色失败","error");
         }
     })
     
     //查询全部颜色
	$scope.getAllColor=function(){
		 $scope.param="";
		$http({
	         method:'post',
	         url:pos+'color/getColor',
	         params:{
	             keyParams:getKeyParams("{\"nub\":\""+from+"\",\"size\":\""+pageSize+"\"}",keyParams),
	             jsonObject:getJsonObject("{\"nub\":\""+from+"\",\"size\":\""+pageSize+"\"}")
	         }
	     }).success(function(data,stauts,headers,config){
	    	 if (data.code == 1) {
		         $scope.items = data.data.colorList;
		         total=parseInt($scope.items[0].count);
		         $scope.createPagePlugin(total,pageSize);
	    	 } else {
	    		 alertmsg("获取颜色失败","error");
	         }
	     })
	}
     
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
	         url:pos+'color/getColor',
	         params:{
	             keyParams:getKeyParams($scope.jsonObject,keyParams),
	             jsonObject:getJsonObject($scope.jsonObject)
	         }
	     }).success(function(data,stauts,headers,config){
	    	 if (data.code == 1) {
	    		 $scope.items = data.data.colorList;
		     } else {
		    	 alertmsg("获取颜色失败","error");
		     }
	     })
	 }

     $scope.reload=function(){
			 $http({
		         method:'post',
		         url:pos+'color/getColor',
		         params:{
		        	 keyParams:getKeyParams($scope.jsonObject,keyParams),
		             jsonObject:getJsonObject($scope.jsonObject)
		         }
		     }).success(function(data,stauts,headers,config){
		    	 if (data.code == 1) {
		    		 $scope.items = data.data.colorList;
		    	 } else {
		    		 alertmsg("获取颜色失败","error");
		         }
		     })
		}
	 
     $scope.del=function(obj){
    	 colorId = $("#colorId")[0].value; 
		 var jsonObject ="{\"colorId\":\""+colorId+"\"}";
         $http({
             method:'post',
             url:pos+'color/deleteColor',
             params:{
                 keyParams:getKeyParams(jsonObject,keyParams),
                 jsonObject:getJsonObject(jsonObject)
             }
         }).success(function(data,stauts,headers,config){
        	 if (data.code == 1) {
	             alertmsg(data.msg);
	             $scope.getAllColor();
	    	 } else {
	    		 alertmsg("删除颜色失败","error");
	         }
         })
     }
     $scope.delSys=function(obj){
    	 colorId = $("#colorSysId")[0].value; 
		 var jsonObject ="{\"colorId\":\""+colorId+"\"}";
         $http({
             method:'post',
             url:pos+'color/deleteColor',
             params:{
                 keyParams:getKeyParams(jsonObject,keyParams),
                 jsonObject:getJsonObject(jsonObject)
             }
         }).success(function(data,stauts,headers,config){
        	 if (data.code == 1) {
	             alertmsg(data.msg);
	             var colorSystem = $('[name="colorSysSystem"]').val();
	             $scope.sysReload(colorSystem);
	    	 } else {
	    		 alertmsg("删除颜色失败","error");
	         }
         })
     }
     
     
     $scope.update=function(obj,colorId){
    	 var imagesPath = $("#color"+colorId).attr("src");
    	 obj.item.imagesPath=imagesPath;
    	if(validateForm("colorForm","msg")==true){
 			var jsonObject = JSON.stringify(obj.item);
 	         $http({
 	             method:'post',
 	             url:pos+'color/updateColor',
 	             params:{
 	                 keyParams:getKeyParams(jsonObject,keyParams),
 	                 jsonObject:getJsonObject(jsonObject)
 	             }
 	         }).success(function(data,stauts,headers,config){
 	        	if (data.code == 1) {
	 	             alertmsg(data.msg);
	 	             $scope.reload();
 		    	 } else {
 		    		 alertmsg("修改颜色失败","error");
 		         }
 	         })
 		}else{
 			alertmsg(validateForm("colorForm","msg"),'error')
 		}		 
     }
     
     $scope.add=function(obj){
    	 if(validateForm("colorForm","msg")==true){
	    	 var imagesPath = $("#colorImage").attr('src');
	    	 var colorName = $("#colorName").val();
	    	 var colorSystem = $("#colorSystem").val();
	    	 var colorNum = $("#colorNum").val();
	    	 var colorRgbvalue = $("#colorRgbvalue").val();
	    	 var pantone = $("#pantone").val();
	    	 var jsonObject ="{"+"\"colorName\":\""+colorName+"\",\"colorRgbvalue\":\""+colorRgbvalue+"\",\"pantone\":\""+pantone+"\",\"colorSystem\":\""+colorSystem+"\",\"imagesPath\":\""+imagesPath+"\",\"colorNum\":\""+colorNum+"\"}";
	    	 $http({
	             method:'post',
	             url:pos+'color/addColor',
	             params:{
	                 keyParams:getKeyParams(jsonObject,keyParams),
	                 jsonObject:getJsonObject(jsonObject)
	             }
	         }).success(function(data,stauts,headers,config){
	        	 if (data.code == 1) {
		             alertmsg(data.msg);
		             $('.colortr').remove();
		             $scope.getAllColor();
		    	 } else {
		    		 alertmsg("添加颜色失败","error");
		         }
	         })
    	 }else{
  			alertmsg(validateForm("colorForm","msg"),'error')
  		}	
     }
     $scope.addtr=function(){
    	 var addLineColor=[];
    	 addLineColor.push('<tr class="colortr">');
    	 addLineColor.push('<td><div class="uploadNav" onmouseover="mouseOver(this)" onmouseout="mouseOut(this)"><input type="file" ngf-select="uploadFiles($files)" /><img alt="请选择图片" src="http://static.qineasy.com/base/images/default_color.png" id="colorImage" style="width:70px;height:40px"><i class="fa fa-close close-del icon-hide" onclick="delImage(this)"></i></div></td>');
    	 addLineColor.push('<td><input type="text" name="colorName" value="" id="colorName" /></td>');
    	 addLineColor.push('<td><input type="text" name="colorSystem" value="" id="colorSystem" /></td>');
    	 addLineColor.push('<td><input type="text" name="colorNum" value="" id="colorNum" /></td>');
    	 addLineColor.push('<td><input type="text" name="colorRgbvalue" id="colorRgbvalue" value=""/></td>');
    	 addLineColor.push('<td><input type="text" name="pantone" id="pantone" value=""/></td>');
    	 addLineColor.push('<td class="td_editing" style="display:table-cell"><button type="button" class="line-btn fn-left alterBtn col-md-6" am-bg="blue" ng-click="add(this)">保存</button><button type="button" class="fn-left line-btn-delete col-md-6" am-bg="white" onclick="delete_btn(this)">取消</button></td>');
    	 addLineColor.push('</tr>');
    	 var html=addLineColor.join("");
         var template=angular.element(html);
         var newHtml=$compile(template)($scope);
         angular.element($('.addTr').before(newHtml));
         var formArray=[];
     	formArray.push('{"colorForm":"/color/updateColor"}');
     	initValidate(formArray,pos);
     }
     $scope.getSystem=function(obj){
         $http({
        	 method:'post',
             url:pos+'color/getColorSystem',
             params:{
                 keyParams:getKeyParams("{}",keyParams),
                 jsonObject:getJsonObject("{}")
             }
         }).success(function(data,stauts,headers,config){
        	 $scope.systems = data.data.colorList;
        	 var colorSystem = $scope.systems[0].colorSystem;
        	 jsonObject = "{\"colorSystem\":\""+colorSystem+"\",\"nub\":\""+from+"\",\"size\":\""+pageSize+"\"}";
        	 $http({
            	 method:'post',
                 url:pos+'color/getColor',
                 params:{
                     keyParams:getKeyParams(jsonObject,keyParams),
                     jsonObject:getJsonObject(jsonObject)
                 }
             }).success(function(data,stauts,headers,config){
            	 if (data.code == 1) {
	            	 $scope.items = data.data.colorList;
	            	 var total2=parseInt($scope.items[0].count);
	            	 $scope.param={"colorSystem":""+colorSystem+""}
	                 $scope.createPagePlugin(total2,pageSize);
	            	 $('[name='+colorSystem+']').attr("data-tab","selected");
    	    	 } else {
    	    		 alertmsg("获取颜色失败","error");
    	         }
             })
         })
     }
     
     $scope.getColBySys=function(obj){
    	 var colorSystem = JSON.stringify(obj.system.colorSystem);
    	 jsonObject = "{\"colorSystem\":"+colorSystem+",\"nub\":\""+from+"\",\"size\":\""+pageSize+"\"}";
    	 $http({
        	 method:'post',
             url:pos+'color/getColor',
             params:{
                 keyParams:getKeyParams(jsonObject,keyParams),
                 jsonObject:getJsonObject(jsonObject)
             }
         }).success(function(data,stauts,headers,config){
        	 if (data.code == 1) {
	        	 $scope.items = data.data.colorList;
	        	 var total2=parseInt($scope.items[0].count);
	        	 $scope.param={"colorSystem":""+obj.system.colorSystem+""}
	        	 
	             $scope.createPagePlugin(total2,pageSize);
	        	 $('[name='+colorSystem+']').siblings().removeAttr("data-tab");
	        	 $('[name='+colorSystem+']').attr("data-tab","selected");
	    	 } else {
	    		 alertmsg("获取颜色失败","error");
	         }
         })
     }
     
     $scope.sysReload=function(colorSystem){
    	 jsonObject = "{\"colorSystem\":\""+colorSystem+"\",\"nub\":\""+from+"\",\"size\":\""+pageSize+"\"}";
         $http({
        	 method:'post',
             url:pos+'color/getColor',
             params:{
                 keyParams:getKeyParams(jsonObject,keyParams),
                 jsonObject:getJsonObject(jsonObject)
             }
         }).success(function(data,stauts,headers,config){
        	 if (data.code == 1) {
	        	 $scope.items = data.data.colorList;
	        	 var total2=parseInt($scope.items[0].count);
	        	 $scope.param={"colorSystem":""+colorSystem+""}
	             $scope.createPagePlugin(total2,pageSize);
	        	 $('[name='+colorSystem+']').siblings().removeAttr("data-tab");
	        	 $('[name='+colorSystem+']').attr("data-tab","selected");
	    	 } else {
	    		 alertmsg("获取颜色失败","error");
	         }
         })
     }
     
     $scope.updateSys=function(obj){
    	 if(validateForm("colorForm","msg")==true){
	    	 var colorId = obj.color.colorId;
	    	 var imagesPath = $("#system"+colorId).attr("src");
	    	 obj.color.imagesPath=imagesPath;
			 var jsonObject = JSON.stringify(obj.color);
			 var colorSystem = $('[name="colorSysSystem"]').val();
	         $http({
	             method:'post',
	             url:pos+'color/updateColor',
	             params:{
	                 keyParams:getKeyParams(jsonObject,keyParams),
	                 jsonObject:getJsonObject(jsonObject)
	             }
	         }).success(function(data,stauts,headers,config){
	        	 if (data.code == 1) {
		             alertmsg(data.msg);
		             $scope.sysReload(colorSystem);
		    	 } else {
		    		 alertmsg("修改颜色失败","error");
		         }
	         })
    	 }else{
   			alertmsg(validateForm("colorForm","msg"),'error')
   		}	
     }
     
     $scope.addSystr=function(){
    	 var addLineColor=[];
    	 addLineColor.push('<tr class="colorSystr">');
    	 addLineColor.push('<td><div class="uploadNav" onmouseover="mouseOver(this)" onmouseout="mouseOut(this)"><input type="file" ngf-select="uploadSysFiles($files)" /><img alt="请选择图片" src="http://static.qineasy.com/base/images/default_color.png" id="colorSysImage"><i class="fa fa-close close-del icon-hide" onclick="delImage(this)"></i></div></td>');
    	 addLineColor.push('<td><input type="text" name="colorName" value="" id="colorSysName" /></td>');
    	 addLineColor.push('<td><input type="text" name="colorNum" value="" id="colorSysNum" /></td>');
    	 addLineColor.push('<td><input type="text" name="colorRgbvalue" id="colorSysRgbvalue" value=""/></td>');
    	 addLineColor.push('<td><input type="text" name="pantone" id="pantoneSys" value=""/></td>');
    	 addLineColor.push('<td class="td_editing" style="display:table-cell"><button type="button" class="line-btn fn-left alterBtn col-md-6" am-bg="blue" ng-click="addSys(this)">保存</button><button type="button" class="fn-left line-btn-delete col-md-6" am-bg="white" onclick="delete_btn(this)">取消</button></td>');
    	 addLineColor.push('</tr>');
    	 var html=addLineColor.join("");
         var template=angular.element(html);
         var newHtml=$compile(template)($scope);
         angular.element($('.addTrSys').before(newHtml));
         var formArray=[];
     	formArray.push('{"colorForm":"/color/updateColor"}');
     	initValidate(formArray,pos);
     }
     
     $scope.addSys=function(obj){
    	 if(validateForm("colorForm","msg")==true){
	    	 var imagesPath = $("#colorSysImage").attr('src');
	    	 var colorName = $("#colorSysName").val();
	    	 var colorSystem = $("#colorSysSystem").val();
	    	 var colorNum = $("#colorSysNum").val();
	    	 var colorRgbvalue = $("#colorSysRgbvalue").val();
	    	 var pantone = $("#pantoneSys").val();
	    	 var jsonObject ="{"+"\"colorName\":\""+colorName+"\",\"pantone\":\""+pantone+"\",\"colorRgbvalue\":\""+colorRgbvalue+"\",\"colorSystem\":\""+colorSystem+"\",\"imagesPath\":\""+imagesPath+"\",\"colorNum\":\""+colorNum+"\"}";
	         $http({
	             method:'post',
	             url:pos+'color/addColor',
	             params:{
	                 keyParams:getKeyParams(jsonObject,keyParams),
	                 jsonObject:getJsonObject(jsonObject)
	             }
	         }).success(function(data,stauts,headers,config){
	        	 if (data.code == 1) {
		             alertmsg(data.msg);
		             $('.colorSystr').remove();
		             $scope.sysReload(colorSystem);
		    	 } else {
		    		 alertmsg("添加颜色失败","error");
		         }
	         })
    	 }else{
    			alertmsg(validateForm("colorForm","msg"),'error')
    		}	
     }
     
     	   //新增颜色(上传图片并回显)
    	   $scope.uploadFiles = function (files) {              
    	    if (files && files.length) {
    	     $scope.files = files;
    	     var imageUrl = JSON.parse(keyParams).orgId+"/color/";
    	     jsonObject = "{\"imageUrl\":\""+imageUrl+"\"}";
    	       for (var i = 0; i < files.length; i++) {		       
    	         Upload.upload({
    	           //服务端接收
    	        	 url: pos+'imageUpload/addColorImage',
    	           //上传的同时带的参数
    	             data:{ 
    	            	 keyParams:getKeyParams(jsonObject,keyParams),
    	            	 jsonObject:getJsonObject(jsonObject) } ,
    	        	 file: files[i]
    	       }).success(function (data, status, headers, config) {
    	           //上传成功
    	           $scope.imagesPath = data.data.imagesPath;
    	           $("#colorImage").attr("src", $scope.imagesPath);
    	           $('.close-del').removeClass('fn-hide');
    	       }).error(function (data, status, headers, config) {
    	           //上传失败
    	           console.log('error status: ' + status);
    	       });		        		        
    	       }
    	       
    	     }
    	}
    	   
    	   //按色系新增颜色(上传图片并回显)
    	   $scope.uploadSysFiles = function (files) {              
       	    if (files && files.length) {
       	     $scope.files = files;
	       	  var imageUrl =JSON.parse(keyParams).orgId+"/color/";
	 	      jsonObject = "{\"imageUrl\":\""+imageUrl+"\"}";
       	       for (var i = 0; i < files.length; i++) {		       
       	         Upload.upload({
       	           //服务端接收
       	        	 url: pos+'imageUpload/addColorImage',
       	           //上传的同时带的参数
       	             data:{ 
       	            	 keyParams:getKeyParams(jsonObject,keyParams),
    	            	 jsonObject:getJsonObject(jsonObject) } ,
       	        	 file: files[i]
       	       }).success(function (data, status, headers, config) {
       	           //上传成功
       	           $scope.imagesPath = data.data.imagesPath;
       	           $("#colorSysImage").attr("src", $scope.imagesPath);
       	           $('.close-del').removeClass('fn-hide');
       	       }).error(function (data, status, headers, config) {
       	           //上传失败
       	           console.log('error status: ' + status);
       	       });		        		        
       	       }
       	       
       	     }
       	}
     
    	   //修改颜色(上传图片并回显)
    	   $scope.uploadFilesUpdate = function (files,colorId) { 
    	    if (files && files.length) {
    	     $scope.files = files;
    	     var imageUrl = JSON.parse(keyParams).orgId+"/color/";
    	     jsonObject = "{\"imageUrl\":\""+imageUrl+"\"}";
    	       for (var i = 0; i < files.length; i++) {		       
    	         Upload.upload({
    	           //服务端接收
    	        	 url: pos+'imageUpload/addColorImage',
    	           //上传的同时带的参数
    	             data:{ 
    	            	 keyParams:getKeyParams(jsonObject,keyParams),
    	            	 jsonObject:getJsonObject(jsonObject) } ,
    	        	 file: files[i]
    	       }).success(function (data, status, headers, config) {
    	           //上传成功
    	           $scope.imagesPath = data.data.imagesPath;
    	           $("#color"+colorId).attr("ng-src", $scope.imagesPath);
    	           $("#color"+colorId).attr("src", $scope.imagesPath);
    	           $('[name="images'+colorId+'"]').attr("values",$scope.imagesPath);
    	           $('.close-del').removeClass('fn-hide');
    	       }).error(function (data, status, headers, config) {
    	           //上传失败
    	           console.log('error status: ' + status);
    	       });		        		        
    	       }
    	       
    	     }
    	}
    	   
    	 //按色系修改颜色(上传图片并回显)
    	   $scope.uploadFilesSysUpdate = function (files,colorId) { 
    	    if (files && files.length) {
    	     $scope.files = files;
    	      var imageUrl = JSON.parse(keyParams).orgId+"/color/";
	 	      jsonObject = "{\"imageUrl\":\""+imageUrl+"\"}";
    	       for (var i = 0; i < files.length; i++) {		       
    	         Upload.upload({
    	           //服务端接收
    	        	 url: pos+'imageUpload/addColorImage',
    	           //上传的同时带的参数
    	             data:{ 
    	            	 keyParams:getKeyParams(jsonObject,keyParams),
    	            	 jsonObject:getJsonObject(jsonObject) } ,
    	        	 file: files[i]
    	       }).success(function (data, status, headers, config) {
    	           //上传成功
    	           $scope.imagesPath = data.data.imagesPath;
    	           $("#system"+colorId).attr("ng-src", $scope.imagesPath);
    	           $("#system"+colorId).attr("src", $scope.imagesPath);
    	           $('[name="images'+colorId+'"]').attr("values",$scope.imagesPath);
    	           $('.close-del').removeClass('fn-hide');
    	       }).error(function (data, status, headers, config) {
    	           //上传失败
    	           console.log('error status: ' + status);
    	       });		        		        
    	       }
    	       
    	     }
    	}
}]);

