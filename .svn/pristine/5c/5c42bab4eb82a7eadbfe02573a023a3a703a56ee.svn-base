registerApp.controller("register_typeController",function($scope,$http,Upload){
//	表单验证
  $(function(){
        var formArray=[];
         formArray.push('{"addPerson":"/shop/openMerchant"}');
         formArray.push('{"addShop":"/shop/openMerchant"}');
         formArray.push('{"addOwnBrandForm":"/brand/addIndependentBrand"}');
        initValidate(formArray,pos);
    })
//	清除页面内容
	$scope.clearLeftContent=function(){
		$("#addShop")[0].reset();	
	}
	$scope.clearRightContent=function(){
		$("#addPerson")[0].reset();	
	}
//	页面效果
	$scope.btnClass="active"
	$scope.commercial=function(){
	  	$scope.btnClass="active";
	  	$scope.clearRightContent();
	}
	$scope.personal=function(){
		$scope.btnClass="notactive";
		$scope.companyName="";
		$scope.companyInterduce="";
		$scope.businessLicenseCode="";
		$scope.compangBriefPhoto="";
		$scope.address="";
		$scope.companyManeName="";
		$scope.ComManCardNo="";
		$scope.ComManPhone="";
		$scope.clearRightContent();
	}
//	加载通讯地址
	//	加载通讯地址
	  //地区联动
    $scope.province;
    $scope.city;
    $scope.district;
    //请求省文件
    $scope.initprovinces=function(){
    	for(var i=0;i<$scope.provinces.length;i++){
			if($scope.provinces[i].name==$scope.shopList[0].province){
				$scope.provinceId=$scope.provinces[i].id;
			}
		}
    }
    $http.get('/oms/static/base/json/province.json').success(function(data)
    {
        $scope.provinces = data;
    });
    //请求市文件
    $scope.initcitys=function(){
    	if(""!=$scope.provinceId){
        	for(var i=0;i<$scope.citys[$scope.provinceId].length;i++){
    			if($scope.citys[$scope.provinceId][i].name==$scope.shopList[0].city){
    				$scope.cityId=$scope.citys[$scope.provinceId][i].id;
    			}
    		}
    	}
    }
    $http.get('/oms/static/base/json/city.json').success(function(data)
    {
        $scope.citys = data;
    });
    //请求区文件
    $http.get('/oms/static/base/json/district.json').success(function(data)
    {
        $scope.districts = data;
    });

//	企业注册时的参数传递
	$scope.companyName;
	$scope.companyInterduce="";
	$scope.businessLicenseCode;
	$scope.compangBriefPhoto;
	$scope.address;
	$scope.companyManeName;
	$scope.ComManCardNo;
	$scope.ComManPhone;
//	判断是否输入框是否为空
//	点击下一步
	$scope.getPar=function(){
		var keyParams='{"timestamp":"","duid":"duid","token":"","userId":"","appKey":"aZ23dA4S4I","orgId":""}'; 		
        var url=cas+"user/userlogin";
        var jsonObject = localStorage.userLogin;
        $.post(url,{keyParams:getKeyParams(jsonObject,keyParams),jsonObject:getJsonObject(jsonObject)},function(data){
			var json = $.parseJSON(data);
			if(json.code=='1'){
				var object=json.data.user;
				keyParams={"timestamp":object.timestamp,"duid":"duid","token":object.token,"userId":object.userId,"appKey":object.appKey,"orgId":object.orgId};
    			localStorage.keyParams=JSON.stringify(keyParams);
    			localStorage.userInfo=JSON.stringify(object);
		   		window.location.href="register_index.jsp#/register_addBrand";
//  			delete localStorage.userLogin;  
			}else{
				alert(json.msg);
			}
        })
	}
	$scope.nextStepCompany=function(){
		var jsonObject = $('#addShop').serializeJson()
		jsonObject = JSON.parse(jsonObject);
		jsonObject.licenseScan = $scope.businessImage;
		jsonObject = JSON.stringify(jsonObject);
	   $http({
	   	method:"post",
	   	url:pos+"shop/openMerchant",
	   	params:{
	            keyParams: getKeyParams(jsonObject, localStorage.keyParams),
	            jsonObject: getJsonObject(jsonObject)
	            }
	   }).success(function(data){
	   	if(data.code=="1"){
   			$scope.getPar();
	   	}else{
	   		alertmsg("创建商户失败","error");
	   	}
	   })
	}

	//个人注册
	$scope.shopName;
	$scope.shopNum;
	$scope.shopInfo="";
	$scope.shopAddr;
	$scope.contacts;
	$scope.idCard;
	$scope.shopTel;	
	$scope.nextStepPerson=function(){
    var jsonObject="{\"province\":"+"\""+ $scope.shopList[0].province+"\""+",\"city\":"+"\""+ $scope.shopList[0].city+"\""+",\"district\":"+"\""+  $scope.shopList[0].district+"\""+
    ",\"shopName\":"+ "\""+$scope.shopName+"\""+",\"shopInfo\":"+ "\""+$scope.shopInfo+"\""+",\"contacts\":"+"\""+ $scope.contacts+"\""+
    ",\"shopTel\":"+ "\""+$scope.shopTel+"\""+ ",\"shopAddr\":"+"\""+ $scope.shopAddr+"\""+",\"licenseNumber\":"+ "\""+"\""+",\"licenseScan\":"+ "\""+"\""+",\"idCard\":"+ "\""+$scope.idCard+"\""+",\"shopNum\":"+ "\""+$scope.shopNum+"\""+"}";
	$http({
   	method:"post",
   	url:pos+"shop/openMerchant",
   	 params:{
            keyParams: getKeyParams(jsonObject, localStorage.keyParams),
            jsonObject: getJsonObject(jsonObject)
            }
   }).success(function(data){
   		if(data.code=="1"){
   			$scope.getPar();
	   	}else{
	   		alertmsg("创建商户失败","error");
	   	}
  	 })
}
	$scope.businessImage="";
	 //(上传图片并回显)
	   $scope.uploadFiles = function (files) {  
	    if (files && files.length) {
	     $scope.files = files;
	     var imageUrl = JSON.parse(localStorage.keyParams).userId+"/shop/";
	     jsonObject = "{\"imageUrl\":\""+imageUrl+"\"}";
	       for (var i = 0;i < files.length;i++) {		       
	         Upload.upload({
	        	 url: pos+'imageUpload/addBrandImage',
	             data:{ 
	            	 keyParams:getKeyParams(jsonObject,localStorage.keyParams),
	            	 jsonObject:getJsonObject(jsonObject)},
	        		 file: files[i]
	       }).success(function (data, status, headers, config){
	    	   if(data.code==1){
	    		   $scope.businessImage= data.data.imagesPath;
	    		   $("#licenseScan").attr("src",$scope.businessImage)
	    	   }else{
	    		   alertmsg("图片上传失败");
	    	   }
	       }).error(function (data, status, headers, config) {
	           console.log('error status: ' + status);
	       });		        		        
	       }
	     }
	}
})
