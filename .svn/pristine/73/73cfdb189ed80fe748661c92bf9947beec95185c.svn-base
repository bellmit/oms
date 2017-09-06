qyApp.controller("bindingPublicController", function ($scope,$http,$window) {
	//授权界面
	$scope.userInfo=JSON.parse(localStorage.userInfo)
	$scope.orgId=$scope.userInfo.orgId;
	$scope.numA = "0";
	$scope.numB = "a";
	$scope.publicAuthorisedId = "";
	$scope.flag = "";
	$scope.editFlag = "0";
	
	var jsonObject = "{\"orgId\":\"" + $scope.orgId + "\"}";	
    
	$http({
    	 method:'post',
	     url:vm+'publicauthorised/isBindingPublic',
	     params:{
	    	 jsonObject: getJsonObject(jsonObject)
     	}
     }).success(function(data, stauts, headers, config) {
			if(data.code=="1"){
				if(data.data.publicAuthorised == ""){
					$scope.numA = "0";
				}else{
					if(data.data.gradeFlag =="N"){
						if(data.data.memberGradeList.length>0){
							$scope.numB = "a";
		        			$scope.memberGradeList = data.data.memberGradeList;
						}else{
							$scope.brandList = data.data.brandList;
							$scope.numB = "b";
						}
						$scope.numA = "1";
					}else{
						if(data.data.hasMenu == "0"){
							$scope.numA = "2";
		           			$scope.authorised = data.data.publicAuthorised;
		           			$scope.publicAuthorisedId = $scope.authorised.publicAuthorisedId;
		           			$scope.allMenuList = data.data.allMenuList;
						}else if(data.data.hasMenu == "1"){
							$scope.numA = "3";
							$scope.qrurl = data.data.qrurl;
							$scope.size = data.data.hasMenuSize;
							$scope.allMenuList = data.data.allMenuList;
							$scope.authorised = data.data.publicAuthorised;
							$scope.publicAuthorisedId = $scope.authorised.publicAuthorisedId;
						}
					}
				}
			}else{
				alertmsg(data.msg,"error")
			}
		})
		
    $('.EditDialog').center(); 
    
	$scope.go_binding=function(){
         $http({
        	 method:'post',
             url:vm+'publicauthorised/toBindingPublic',
             params:{
            	 jsonObject: getJsonObject(jsonObject)
             }
         }).success(function(data,stauts,headers,config){
        	 if(data.code=="1"){
        		 if(data.data.hasbind == "0"){
	        		 $window.open(data.data.bindurl, "New Window");
	        		 $scope.confirmInfo = "请确认公众号已授权";
	        		 $scope.remark = "请务必在公众号完成授权后确认；若未跳出新弹窗，可能被浏览器拦截。";
	 		         $('.EditDialog,.maskBg').show();
        		 }else{
        			 $scope.numA = "1";
        			 $scope.allMenuList = data.data.allMenuList;
 					 $scope.authorised = data.data.publicAuthorised;
 					 $scope.publicAuthorisedId = $scope.authorised.publicAuthorisedId;
        		 }
        	 }else{
        		 alertmsg('获取预授权码失败',"error");
        	 }
         })
     }
	$scope.authorised = function(){ 
            $http({
            	 method:'post',
                 url:vm+'publicauthorised/getPublicAuthorisedInfo',
                 params:{
                	 jsonObject: getJsonObject(jsonObject)
                 }
             }).success(function(data,stauts,headers,config){
            	 if(data.code=="1"){
            		 if(data.data.flag=="Y"){
//	            		 clearInterval($scope.interval);
						 if(data.data.memberGradeList.length>0){
							 $scope.numB = "a";
							 $scope.memberGradeList = data.data.memberGradeList;
						 }else{
							 $scope.brandList = data.data.brandList;
							 $scope.numB = "b";
						 }
						 $scope.numA = "1";
            			 $('.EditDialog,.maskBg').hide();
            		 }else if(data.data.flag =="N"){
            			 alertmsg('请授权后再确认',"error");
            		 }else if(data.data.flag =="Y2"){
//            			 $scope.qrurl = data.data.qrurl;
         				 $scope.size = data.data.hasMenuSize;
         				 $scope.allMenuList = data.data.allMenuList;
         				 $scope.authorised = data.data.publicAuthorised;
         				 $scope.publicAuthorisedId = $scope.authorised.publicAuthorisedId;
            			 $scope.numA = "3";
            			 $('.EditDialog,.maskBg').hide();
            		 }else{
            			 alertmsg(data.data.errorMsg,"error");
            			 $('.EditDialog,.maskBg').hide();
            		 }
            	 }else{
            		 alertmsg('授权跳转失败',"error");
            	 }
             })
          }
	
	$scope.addMenu=function(){
		var param = "1";
		angular.forEach($scope.allMenuList,function(menu){
  	 		if(menu.flag=="1"){
 				param += ","+menu.publicMenuId;
  	 		}
  	 	})
		var jsonObj = "{\"orgId\":\"" + $scope.orgId + "\",\"publicAuthorisedId\":\"" + $scope.publicAuthorisedId + "\",\"menuIds\":\""+param+"\"}";
		$http({
       	 	method:'post',
            url:vm+'publicauthorised/addPublicAuthorisedMenu',
            params:{
           	 	jsonObject: getJsonObject(jsonObj)
            }
        }).success(function(data,stauts,headers,config){
        	if(data.code=="1"){
        		$scope.qrurl = data.data.qrurl;
				$scope.size = data.data.hasMenuSize;
				$scope.allMenuList = data.data.allMenuList;
				$scope.authorised = data.data.publicAuthorised;
				$scope.publicAuthorisedId = $scope.authorised.publicAuthorisedId;
				$scope.numA = "3";
       	 	}else{
       	 		alertmsg('授权菜单功能失败,请确认公众号是否已授权',"error");
       	 	}
        })
	}
	
	$scope.addMemberGrade=function(){
		var gradeId = $("#gradeId").val();
		var gradeName = $("#gradeName").val();
		if(gradeId == '' && gradeName == ''){
			alertmsg('卡类型必填',"error");
			return false;
		}
		
		var reg = /^(0\.(?!0+$)\d{1,2}|1(\.0{1,2})?)$/;
		var arr = document.getElementsByName("discount");
		var valueparam = "";
		var testflag = false;
		jQuery.each(arr, function(i, val) {  
			if(gradeId == '' && reg.test(val.value) == false){
				testflag = true;
				return false;
			}
			valueparam += val.previousSibling.value+","+val.value+";";
		});  
		if(testflag){
			alertmsg('折扣力度必须为大于0且小于等于1之间，至多保留两位小数',"error");
			return false;
		}
		
		var discount = valueparam.substring(0,valueparam.length-1);
		
		var jsonObj = "{\"gradeId\":\"" + gradeId + "\",\"orgId\":\"" + $scope.orgId + "\",\"gradeName\":\"" + gradeName + "\",\"discount\":\""+discount+"\"}";
		$http({
       	 	method:'post',
            url:vm+'publicauthorised/addDefaultMemberGrade',
            params:{
           	 	jsonObject: getJsonObject(jsonObj)
            }
        }).success(function(data,stauts,headers,config){
        	if(data.code=="1"){
        		$scope.authorised = data.data.publicAuthorised;
				$scope.publicAuthorisedId = $scope.authorised.publicAuthorisedId;
				$scope.allMenuList = data.data.allMenuList;
        		$scope.numA = "2";
       	 	}else{
       	 		alertmsg('设置默认会员等级失败',"error");
       	 	}
        })
	}
	
	$scope.toEditMenu=function(){
		$scope.editFlag="1";
	}
	
	$scope.editMenu=function(){
		var param = "1";
		angular.forEach($scope.allMenuList,function(menu){
  	 		if(menu.flag=="1" && menu.publicMenuId != "1"){
 				param += ","+menu.publicMenuId;
  	 		}
  	 	})
		var jsonObj = "{\"orgId\":\"" + $scope.orgId + "\",\"publicAuthorisedId\":\"" + $scope.publicAuthorisedId + "\",\"menuIds\":\""+param+"\"}";
		$http({
       	 	method:'post',
            url:vm+'publicauthorised/editPublicAuthorisedMenu',
            params:{
           	 	jsonObject: getJsonObject(jsonObj)
            }
        }).success(function(data,stauts,headers,config){
        	if(data.code=="1"){
        		$scope.editFlag="0";
				$scope.allMenuList = data.data.allMenuList;
				$scope.size = data.data.hasMenuSize;
       	 	}else{
       	 		alertmsg('授权菜单功能失败,请确认公众号是否已授权',"error");
       	 	}
        })
	}
	
	$scope.doPrint = function () {
		$scope.width=$(".codeSize-titl").text();
		$scope.height=$('.code-size').text();
		$("#printImg").attr("width",$(".codeSize-titl").text()).attr("height",$('.code-size').text());
		$("#printImg").jqprint();
    }
	
	$scope.changeCodeSize=function(){
		$('.codeSize-dialog').toggle();
	}
	
	function codesize(my, unit, def,max) {
        $(my).noUiSlider({
            range: [50, max],
            start: [def],
            handles: 1,
            orientation: "vertical",
            connect: 'upper',
            slide: function() {
                var val =Math.floor($(this).val());
                $(".codeSize-titl").text(val + unit);
                $('.code-size').text(val + unit);
            },
            set: function() {
                var val =Math.floor($(this).val());
                $(".codeSize-titl").text(val + unit);
                $('.code-size').text(val + unit);
            }
        });
        $(my).val(def, true);
    }
    codesize('.slider-minmax1', "px", "500",1000);
    
    $scope.cancleConfirm=function(){
    	$('.EditDialog,.maskBg').hide();
    }
    
    $scope.cancle=function(){
    	var jsonObj = "{\"publicAuthorisedId\":\"" + $scope.publicAuthorisedId + "\"}";
		$http({
       	 	method:'post',
            url:vm+'publicauthorised/getPublicAuthorisedMenu',
            params:{
           	 	jsonObject: getJsonObject(jsonObj)
            }
        }).success(function(data,stauts,headers,config){
        	if(data.code=="1"){
        		$scope.editFlag="0";
				$scope.allMenuList = data.data.allMenuList;
				$scope.size = data.data.hasMenuSize;
       	 	}else{
       	 		alertmsg('授权跳转失败',"error");
       	 	}
        })
    }
    
	$scope.selected=function(index){
		$scope.flag = $scope.allMenuList[index].flag;
		if($scope.flag=='' || $scope.flag=='0'){
			$scope.allMenuList[index].flag = '1';
		}else{
			$scope.allMenuList[index].flag = '0';		
		}
	}
	
	$scope.changeClass=function(index){
		$scope.flag = $scope.allMenuList[index].flag;
		if($scope.flag==''){
			return 'it-uncheck';
		}else if($scope.flag=='1'){
			return 'it-check';
		}else {
			return 'it-uncheck';
		}
	}
	
	$scope.iChangeClass=function(index){
		$scope.flag = $scope.allMenuList[index].flag;
		if($scope.flag==''){
			return 'fa-circle-thin';
		}else if($scope.flag=='1'){
			return 'fa-check-circle';
		}else {
			return 'fa-circle-thin';
		}
	}

});
