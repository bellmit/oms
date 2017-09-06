qyApp.controller('addMerchandiseController', ['$scope','$http','$compile','Upload','$sce',function($scope,$http,$compile,Upload,$sce) {
	//初始化编辑器
	//Uedit插件的配置代码
			//	图片上传路径的选择
			$scope.ue = UE.getEditor('editoraa', {
				autoHeightEnabled: true,
				autoFloatEnabled: true
			});
			UE.Editor.prototype._bkGetActionUrl = UE.Editor.prototype.getActionUrl;
			UE.Editor.prototype.getActionUrl = function(action) {
				if(action == 'config') {
					return qineasy + "oms/static/base/ueditor1_4_3_3-utf8-jsp/utf8-jsp/jsp/controller.jsp?action=config";
				} else if(action == 'uploadimage' || action == 'uploadscrawl' || action == 'uploadimage') {
					return pos + 'imageUpload/addProDetailImage';
				} else if(action == 'listimage') {
					return pos + 'product/getProDtailInServerTB';
				} else {
					return this._bkGetActionUrl.call(this, action);
				}
			}
			
			//	点击事件获取Uedit里面的代码
			$scope.ue.ready(function() {
				var imageUrl = JSON.parse(keyParams).orgId + "/product/";
				jsonObject = JSON.stringify({
					'imageUrl': imageUrl,
					"proAttrName": "b"
				});
				$scope.ue.execCommand('serverparam', function(editor) {
					return {
						jsonObject: getJsonObject(jsonObject),
						keyParams: getKeyParams(jsonObject, keyParams)
					};
				});
			});
			$scope.$on('$destroy', function() {
				$scope.ue.destroy();
			});
	//初始化数据
	$scope.querybase = function(){
		//查询品牌
		$scope.queryBrand();
		//查询年份
		$scope.queryYears();
		//初始化编辑器
//		$scope.createEditor();
		//查询大类
		$scope.querySort();
		//查询尺码组
		$scope.sizeGroup();
		//初始化色系获取颜色
		$scope.getSystem();
		//储存颜色数组
		$scope.ColorNumAndName=[];
		//存储尺码数组
		$scope.SizeNumAndName=[];
		//储存图片数组
		$scope.imagesList=[];
	}
	//查询品牌
	$scope.queryBrand=function(){
		$http({
	         method:'post',
	         url:pos+'brand/getBrand',
	         params:{
	             keyParams:getKeyParams('{}',keyParams),
	             jsonObject:getJsonObject('{}')
	         }
	     }).success(function(data,stauts,headers,config){
	    	 if (data.code == 1) {
	    		 $scope.itemsb = data.data.brandList;
	    	 } else {
	    		 alertmsg("获取品牌失败","error");
	         }
	     })
	}
	
//		}
//	$scope.createEditor=function(){
//	    $scope.$on('$destroy', function() {
//	    	$scope.ue.destroy();
//	    });
//	    $scope.ue = UM.getEditor('myAddEditor',{
//	        autoHeightEnabled: true,
//	        autoFloatEnabled: true,	        
//	    });
//	}
	//年份数组
    $scope.queryYears=function(){
		var dt = new Date();
		year = dt.getFullYear();
		$scope.years = [];
		for(var i = 0; i < 7; i++) {
			$scope.years.push(year - 5 + i);
		}
		$scope.proYear = year + "";
    }
    //查询大品类
	$scope.querySort=function(){ 
	    $http({
	         method:'post',
	         url:pos+'sort/selectSort',
	         params:{
	             keyParams:getKeyParams("{\"sortPid\":\"0\",\"brandId\":\"\"}",keyParams),
	             jsonObject:getJsonObject("{\"sortPid\":\"0\",,\"brandId\":\"\"}")
	         }
	     }).success(function(data,stauts,headers,config){
	    	 if(data.code=="1"){
		         $scope.items = data.data.sortList;
	    	 }else{
	    		 alertmsg('获取大品类失败',"error");
	    	 }
	     })	
	}
     //获取尺码组
     $scope.sizeGroup=function(){
        $http({
            method:'post',
            url:pos+'sizeGroup/getSizeGroup',
            params:{
                keyParams:getKeyParams('{}',keyParams),
                jsonObject:getJsonObject('{}')
            }
        }).success(function(data,stauts,headers,config){
       	 if(data.code=="1"){
	             $scope.itemsGroup = data.data.groupList;
       	 }else{
       		 alertmsg('获取尺码组失败',"error");
       	 }
        })
     }
     //根据色系获取颜色
     $scope.getColBySys=function(colorSystem){
		 jsonObject = "{\"colorSystem\":\""+colorSystem+"\",\"brandId\":\"\"}";
	     $http({
	    	 method:'post',
	         url:pos+'color/getColor',
	         params:{
	             keyParams:getKeyParams(jsonObject,keyParams),
	             jsonObject:getJsonObject(jsonObject)
	         }
	     }).success(function(data,stauts,headers,config){
	    	 if(data.code=="1"){
	        	 $scope.colors = data.data.colorList;
	        	 $('[name='+colorSystem+']').siblings().removeAttr("data-tab");
	        	 $('[name='+colorSystem+']').attr("data-tab","selected");
	    	 }else{
	    		 alertmsg('获取初始化色系颜色失败',"error");
	    	 }
	     })
     }      
     //初始化色系获取颜色
     $scope.getSystem=function(){
         $http({
        	 method:'post',
             url:pos+'color/getColorSystem',
             params:{
                 keyParams:getKeyParams("{\"brandId\":\"\"}",keyParams),
                 jsonObject:getJsonObject("{\"brandId\":\"\"}")
             }
         }).success(function(data,stauts,headers,config){
        	 if(data.code=="1"){
	        	 $scope.itemsColorList = data.data.colorList;
//	        	 $scope.getColBySys($scope.itemsColorList[0].colorSystem);
        	 }else{
        		 alertmsg('获取初始化色系颜色失败',"error"); 
        	 }
         })
     }
	//开始初始化
	$scope.querybase();
	//重置
	$scope.resetProduct = function() {
		$("#addproductForm")[0].reset();
		$scope.ColorNumAndName = [];
		$scope.SizeNumAndName = [];
		$scope.imagesList=[];
		$scope.selectedGroup = "";
		$scope.pGrandparentSort = "";
		$scope.pParentSortId = "";
		$scope.pSortId = "";
		$scope.brandIds = "";
		$scope.ue.setContent("");
		$scope.clearImage("main1");
		$scope.clearImage("main2");
		$scope.clearImage("main3");
		$scope.clearImage("main4");
		$scope.clearImage("main5");
		//初始化色系
		$scope.getSystem();
	}
    //选择品类事件
 	$scope.sortIdChange = function(sortId, type) {
		$http({
			method: 'post',
			url: pos + 'sort/selectSort',
			params: {
				keyParams: getKeyParams("{\"sortPid\":\""+sortId+"\"}", keyParams),
				jsonObject: getJsonObject("{\"sortPid\":\""+sortId+"\"}")
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				if(type == 1) {
					$scope.item1 = data.data.sortList;
				} else if(type == 2) {
					$scope.item2 = data.data.sortList;
				} else {
					$scope.item3 = data.data.sortList;
				}
			} else {
				alertmsg('获取品类失败', "error");
			}
		})
	}
    //选择尺码组事件获取尺码
    $scope.groupIdChange=function(){
   	 var groupId=$scope.selectedGroup;
		 $http({
	         method:'post',
	         url:pos+'size/getAllSize',
	         params:{
	             keyParams:getKeyParams("{\"groupId\":\""+groupId+"\"}",keyParams),
	             jsonObject:getJsonObject("{\"groupId\":\""+groupId+"\"}")
	         }
	     }).success(function(data,stauts,headers,config){
		 if(data.code=="1"){
			 var sizeGroup =data.data.sizeGroup[0].sizes;
		     $scope.sizes = sizeGroup;
		     $scope.SizeNumAndName=[];
			 var groupName="";
			 for(var i = 0; i < $scope.itemsGroup.length; i++) {
				if($scope.itemsGroup[i].groupId == groupId) {
					groupName = $scope.itemsGroup[i].groupName;
				}
			 }
			 for(var i = 0; i < sizeGroup.length; i++) {
				var selectSize = "S,M,L,XL,XXL,27,28,29,30,31,36,37,38,39,均码";
				if(groupName == "裤子") {
					selectSize = "27,28,29,30,31";
				}
				if(selectSize.indexOf(sizeGroup[i].sizeName) > -1) {
					var object = new Object();
					object.sizeId = sizeGroup[i].sizeId;
					object.sizeName = sizeGroup[i].sizeName;
					object.sizeNum = sizeGroup[i].sizeNum;
					$scope.SizeNumAndName.push(object);
				}
			 }		     
		 }else{
			 alertmsg('获取尺码失败',"error");
	     }
	     })
	}	
    //储存选中颜色的数据
    $scope.chkColor=function(colorId,chks,colorName,colorNum){  
		if (chks == true) {//选中
			var object = new Object();
	        object.colorNum=colorNum;
	        object.colorId=colorId;
	        object.colorName=colorName;
	        $scope.ColorNumAndName.push(object);
		} else {
			for(var x=0;x<$scope.ColorNumAndName.length;x++){
				if($scope.ColorNumAndName[x].colorId==colorId){
					$scope.ColorNumAndName.splice(x,1);
				}
			}
		}
    }
    $scope.isSelected = function(id){
   	 for(var u=0;u<$scope.ColorNumAndName.length;u++){
   		 if($scope.ColorNumAndName[u].colorId==id){
   			 return true;
   		 }    			 
   	 }
   	 return false;
    }     
    //储存选中尺码的数据
    $scope.chkSize=function(sizeId,chks,sizeName,sizeNum){  
		if (chks == true) {//选中
			var object = new Object();
	        object.sizeNum=sizeNum;
	        object.sizeId=sizeId;
	        object.sizeName=sizeName;
	        $scope.SizeNumAndName.push(object);
	    } else {
			for(var x=0;x<$scope.SizeNumAndName.length;x++){
				if($scope.SizeNumAndName[x].sizeId==sizeId){
					$scope.SizeNumAndName.splice(x,1);
				}
			}
		}		
    }
    $scope.isSelectedSize = function(id){
   	 for(var u=0;u<$scope.SizeNumAndName.length;u++){
   		 if($scope.SizeNumAndName[u].sizeId==id){
   			 return true;
   		 }    			 
   	 }
   	 return false;
    }     
    //上传图片方法
    $scope.uploadMain = function (files,imgId,type) { 
 	   var imageUrl = JSON.parse(keyParams).orgId + "/product/";
 	   jsonObject = "{\"imageUrl\":\""+imageUrl+"\"}";
 	    if (files && files.length) {
 	     $scope.files = files;
 	       for (var i = 0; i < files.length; i++) {		       
 	         Upload.upload({
 	           //服务端接收
 	        	 url: pos+'imageUpload/addProductImage',
 	           //上传的同时带的参数
 	             data:{
 	            	 keyParams:getKeyParams(jsonObject,keyParams),
 	            	 jsonObject:getJsonObject(jsonObject)},
 	        	 file: files[i]
 	       }).success(function (data, status, headers, config) {
 	           //上传成功
 	    	   if(data.code=="1"){
		           $scope.imagesPath = data.data.imagesPath;
		           $("#"+imgId).attr("src", $scope.imagesPath);
		           var object= new Object();
//		           object.proModelid=proModelid;
		           object.proAttrValue=imgId.substring(0,imgId.length-1);
		           object.url=$scope.imagesPath;
		           object.index=imgId.substring(imgId.length-1,imgId.length);
		           for(var i=0;i<$scope.imagesList.length;i++){
			           if($scope.imagesList[i].proAttrValue==object.proAttrValue&&	   
			        	$scope.imagesList[i].index==object.index
			           ){			        	   
			        	   $scope.imagesList.splice(i,1);
			           }
		           }
		           $scope.imagesList.push(object);
 	    	   }else{
 	    		   alertmsg("上传图片失败","error");
 	    	   }
 	       }).error(function (data, status, headers, config) {
 	           //上传失败
 	           console.log('error status: ' + status);
 	       });		        		        
 	       }
 	     }
 	}    
    //清除图片
    $scope.clearImage=function(position){
    	$("#"+position).attr("src", "http://static.qineasy.com/base/images/photobg.jpg");
    }
    //移动图片
    $scope.moveImage=function(position1,position2,positionType){
    	var url1 =$("#"+position1)[0].src;
    	var url2 =$("#"+position2)[0].src;
    	$("#"+position1).attr("src", url2);
    	$("#"+position2).attr("src", url1);
    	var f=0;
    	var k=0;	
    	for(var h=0;h<$scope.imagesList.length;h++){
			if(position1==$scope.imagesList[h].proAttrValue+positionType+$scope.imagesList[h].index){
				$scope.imagesList[h].url=url2;
				f++;
			}
			if(position2==$scope.imagesList[h].proAttrValue+positionType+$scope.imagesList[h].index){
				$scope.imagesList[h].url=url1;
				k++;
			}
    	}
    	if(f==0){
			var object= new Object();
//			object.proModelid=$scope.proModelid;
			object.proAttrValue=position1.substring(0,position1.length-1);
			object.url=url2;
			object.index=position1.substring(position1.length-1,position1.length);
			$scope.imagesList.push(object);
    	}
    	if(k==0){
			var object= new Object();
//			object.proModelid=$scope.proModelid;
			object.proAttrValue=position2.substring(0,position2.length-1);
			object.url=url1;
			object.index=position2.substring(position2.length-1,position2.length);
			$scope.imagesList.push(object);
    	}
    }    	
    //添加数据
    $scope.saveProduct=function(obj){
   	 if(validateForm("addproductForm","msg")==true){
	         var jsonObjecta =$("#addproductForm").serializeJson();
	         var jsonObj =eval('(' + jsonObjecta + ')');
	         var products=[];
	         jsonObj.proDescription=$scope.ue.getContent();
	         for(var i=0; i<$scope.ColorNumAndName.length;i++){
	             for(var j=0;j<$scope.SizeNumAndName.length;j++){
	            	 var prods=new Object();
	            	 prods.proSizeName=$scope.SizeNumAndName[j].sizeName;
	            	 prods.proSize=$scope.SizeNumAndName[j].sizeId;
	            	 prods.proColorId=$scope.ColorNumAndName[i].colorId;
//	            	 var proSkuPrice=$scope.ColorNumAndName[i].colorId+$scope.SizeNumAndName[j].sizeId+"2"; 
//	            	 prods.proSkuPrice=$('#'+proSkuPrice).val();	            	 
	            	 var proInnerbc=$scope.ColorNumAndName[i].colorId+$scope.SizeNumAndName[j].sizeId+"1"; 
	            	 prods.proInnerbc=$('#'+proInnerbc).val();
	            	 var proInterbc=$scope.ColorNumAndName[i].colorId+$scope.SizeNumAndName[j].sizeId;
	            	 prods.proInterbc=$('#'+proInterbc).val();
	            	 products.push(prods);
	             }
	         }
	         jsonObj.products=products;
	         jsonObj.imagesList=$scope.imagesList;
	         if($scope.selectSortId3 != "" && $scope.selectSortId3 != null){
					jsonObj.proSortId = $scope.selectSortId3;
					jsonObj.sortId = $scope.selectSortId3;
					for(var i=0;i<$scope.item3.length;i++){
						if($scope.selectSortId3 == $scope.item3[i].sortId){
							jsonObj.sortName = $scope.item3[i].sortName;
						}
					}
				}else{
					if($scope.selectSortId2 != "" && $scope.selectSortId2 != null){
						jsonObj.proSortId = $scope.selectSortId2;
						jsonObj.sortId = $scope.selectSortId2;
						for(var i=0;i<$scope.item2.length;i++){
							if($scope.selectSortId2 == $scope.item2[i].sortId){
								jsonObj.sortName = $scope.item2[i].sortName;
							}
						}
					}else{
						if($scope.selectSortId1 != "" && $scope.selectSortId1 != null){
							jsonObj.proSortId = $scope.selectSortId1;
							jsonObj.sortId = $scope.selectSortId1;
							for(var i=0;i<$scope.item1.length;i++){
								if($scope.selectSortId1 == $scope.item1[i].sortId){
									jsonObj.sortName = $scope.item1[i].sortName;
								}
							}
						}else{
							jsonObj.proSortId = $scope.selectSortId0;
							jsonObj.sortId = $scope.selectSortId0;
							for(var i=0;i<$scope.item0.length;i++){
								if($scope.selectSortId0 == $scope.item0[i].sortId){
									jsonObj.sortName = $scope.item0[i].sortName;
								}
							}
						}
					}
				}
	         jsonObj=JSON.stringify(jsonObj);
	         $http({
	        	 method:'post',
	             url:pos+'product/addProduct',
	             params:{
	                 keyParams:getKeyParams(jsonObj,keyParams),
	                 jsonObject:getJsonObject(jsonObj)
	             }
	         }).success(function(data,stauts,headers,config){
	        	 if(data.code=="1"){
	        		 alertmsg(data.msg);
	        		 $scope.resetProduct();
	        	 }else if(data.code=="20010"){
	        		 alertmsg('款号不允许重复',"error");
	        	 }else{
	        		 alertmsg('添加款号失败',"error");
	        	 }
	         })
   	}else{
	 		alertmsg(validateForm("addproductForm","msg"),'error')
	 	}	
    }
    	/*获取大品类*/
	$scope.item0 = [];
	$scope.item1 = [];
	$scope.item2 = [];
	$scope.item3 = [];
	$scope.selectSortId0 = "";
	$scope.selectSortId1 = "";
	$scope.selectSortId2 = "";
	$scope.selectSortId3 = "";
	var jsonSortPid = JSON.stringify({
		"orgId": JSON.parse(keyParams).orgId,
		"sortPid": 0
	});
	$http({
		method: 'post',
		url: pos + 'sort/getBaseAndCustomSort',
		params: {
			keyParams: getKeyParams(jsonSortPid, keyParams),
			jsonObject: getJsonObject(jsonSortPid)
		}
	}).success(function(data, stauts, headers, config) {
		if(data.code == "1") {
			$scope.item0 = data.data.sortList;
		} else {
			alertmsg('获取大品类失败', "error");
		}
	});
	//tyep 1为获取第2级品类 、2为获取第3级品类、 3为获取第4级品类
	$scope.sortIdChange = function(sortId, type) {
		if(sortId != null) {
			var jsonObject = {
				"orgId": $scope.orgId,
				"sortPid": sortId
			};
			jsonObject = JSON.stringify(jsonObject);
			$http({
				method: 'post',
				url: pos + 'sort/getBaseAndCustomSort',
				params: {
					keyParams: getKeyParams(jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					if(type == "1") {
						$scope.item1 = data.data.sortList;
						$scope.item2 = [];
						$scope.item3 = [];
						$scope.selectSortId2 = "";
						$scope.selectSortId3 = "";
					} else if(type == "2") {
						$scope.item2 = data.data.sortList;
						if($scope.item2.length == 0) {
//							$scope.changeProName($scope.item1, $scope.selectSortId1);
						}
						$scope.item3 = [];
						$scope.selectSortId3 = "";
					} else if(type == "3") {
						$scope.item3 = data.data.sortList;
						if($scope.item3.length == 0) {
//							$scope.changeProName($scope.item2, $scope.selectSortId2);
						}
					}
				} else {
					alertmsg('获取品类失败', "error");
				}
			})
		}
	}
//	$scope.changeProName = function(items,selectSortId) {
//			$scope.itemsSort=items;
//			$scope.itemsSelectSortId=selectSortId;
//			if(items != '' && items != undefined) {
//				for(var i = 0; i < items.length; i++) {
//					if(items[i].sortId == selectSortId) {
//						$('[name="proName"]').val(($scope.proYear == undefined ? "" : $scope.proYear) +
//							($scope.proSeason == undefined ? "" : $scope.proSeason) +
//							((($scope.proSex == undefined ? "" : $scope.proSex) == "F") ? "男款" : "女款") +
//							items[i].sortName +
//							($scope.styleNumber == undefined ? "" : $scope.styleNumber));
//					}
//				}
//			}
//		}
}]);
