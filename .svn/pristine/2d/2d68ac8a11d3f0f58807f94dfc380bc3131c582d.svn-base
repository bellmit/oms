qyApp.controller("updateCommerciaController", function ($scope,$http,$timeout) {
    var noRecord = '';
    noRecord += '<div class="noRecord text-center">';
    noRecord += '<p class="am-ft-14 mgt15 mgb15">当前没有商户，请开通商户！</p>';
    noRecord += '</div>';

    var nub = 0;
    var size = 10;
    var keyParam =JSON.parse(localStorage.keyParams);
    var orgId=keyParam.orgId;
    var userId = keyParam.userId;

    //查询商户
    $scope.getAllCommercial = function(){
        var jsonObject ="{\"orgId\":\""+orgId+"\",\"nub\":\""+nub+"\",\"size\":\""+size+"\"}";
        $http({
            method:'post',
            url:pos+'shop/getMerchant',
            params:{
                keyParams:getKeyParams(jsonObject,keyParams),
                jsonObject:getJsonObject(jsonObject)
            }
        }).success(function(data,stauts,headers,config) {
        	if (data.code == 1) {
	            var shopList = data.data.shopList;
	            $scope.shopList = shopList;
	            if(shopList.length ==0){
	                $('.ManColTable').empty();
	                $('.ManColTable').append(noRecord);
	            }
	            $scope.initprovinces();
	            $scope.initcitys();
	    	 } else {
	    		 alertmsg("获取商户失败","error");
	         }
        });
    };
    $scope.getAllCommercial();


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

    //添加商户
    $scope.AddCommercial=function(){
    	if(validateForm("commerciaForm","msg")==true){
	        var shopName = $('.shopName').val();
	        var shopInfo = $('.shopInfo').val();
	        var contacts = $('.contacts').val();
	        var shopTel = $('.shopTel').val();
	        var province = $scope.province.name;
	        var city = $scope.city.name;
	        var district = $scope.district.name;
	        var shopAddr = $('.shopAddrDet').val();
	        var orgType = "1";
	        var userPrivList=new Array("73","74","75");
	        var jsonObject ="{\"province\":\""+province+"\",\"city\":\""+city+"\",\"district\":\""+district+"\",\"shopAddr\":\""+shopAddr+"\",\"orgId\":\""+orgId+"\",\"shopName\":\""+shopName+"\",\"shopInfo\":\""+shopInfo+"\",\"contacts\":\""+contacts+"\",\"shopTel\":\""+shopTel+"\",\"userId\":\""+userId+"\",\"orgType\":\""+orgType+"\",\"userPrivList\":["+userPrivList+"]}";
//	        $http({
//	            method:'post',
//	            url:pos+'shop/addShopAndOrg',
//	            params:{
//	                keyParams:getKeyParams(jsonObject,keyParams),
//	                jsonObject:getJsonObject(jsonObject)
//	            }
//	        }).success(function(data,stauts,headers,config){
//	        	if (data.code == 1) {
//		        	alertmsg("开通商户成功,请重新登录");
//		        	$timeout(function(){
//		        		delete localStorage.keyParams;
//						delete localStorage.userInfo;
//		        		window.location.href="/"+document.location.pathname.split('/')[1]+"/login.jsp";
//		        	},'1500');
//		    	 } else {
//		    		 alertmsg("开通商户失败");
//		         }
//	
//	        })
        }else{
  			alertmsg(validateForm("commerciaForm","msg"),'error')
  		}	
    }

//修改商户资料
    $scope.Edit=function(obj){
    	if(validateForm("commerciaupdateForm","msg")==true){
	        var shopInfo = $('.shopInfo').val();
	        var shopNum = $('.shopNum').val();
	        var province = $scope.shopList[0].province;
	        var city = $scope.shopList[0].city;
	        var district = $scope.shopList[0].district;
	        var shopAddr = $('.shopAddrDet').val();
	        var shopTel = $('.shopTel').val();
	        var contacts = $('.contacts').val();
	        var jsonObject ="{\"province\":\""+province+"\",\"city\":\""+city+"\",\"district\":\""+district+"\",\"shopAddr\":\""+shopAddr+"\",\"shopInfo\":\""+shopInfo+"\",\"orgId\":\""+orgId+"\",\"shopTel\":\""+shopTel+"\",\"contacts\":\""+contacts+"\",\"shopNum\":\""+shopNum+"\"}";
	        $http({
	            method:'post',
	            url:pos+'shop/updateShop',
	            params:{
	                keyParams:getKeyParams(jsonObject,keyParams),
	                jsonObject:getJsonObject(jsonObject)
	            }
	        }).success(function(data,stauts,headers,config){
	            if (data.code == 1) {
//	                $('.alert,.maskBg').show();
//	                $('.alert').removeClass('alert-danger').addClass('alert-success').children('h4').text('修改成功！');
//	                $('.alert').children('p').text('');
	            	alertmsg("修改商户资料成功");
	                $scope.getAllCommercial();
	            } else {
	   	    		 alertmsg("修改商户资料失败","error");
	            }
	
	        })
        }else{
  			alertmsg(validateForm("commerciaupdateForm","msg"),'error')
  		}	
    }

})
