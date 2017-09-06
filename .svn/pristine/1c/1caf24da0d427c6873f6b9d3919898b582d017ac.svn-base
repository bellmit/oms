qyApp.controller("addStoreController", function ($state,$stateParams,$scope,$http) {
	
	$stateParams.uiParams.sourceArr.push({leval:"1",name:"addStore"});
	$scope.goback = function(){
		$stateParams.uiParams.sourceArr.splice($stateParams.uiParams.sourceArr.length-1,1);
		$stateParams.uiParams.type="2";
		$state.go("store",{uiParams:$stateParams.uiParams});
	}

	//地区联动
    $scope.province;
    $scope.city;
    $scope.district;
    //请求省文件
    $scope.initprovinces=function(){
    	for(var i=0;i<$scope.provinces.length;i++){
  			if($scope.provinces[i].name==$scope.storeDetail.province){
  				$scope.provinceId=$scope.provinces[i].id;
  			}
  		}
    }
    $http.get('/oms/static/base/json/province.json').success(function(data)
    {
        $scope.provinces = data;
       /* if($scope.storeDetail !=undefined){
        	$scope.initprovinces();
        };*/
    });
    //请求市文件
    $scope.initcitys=function(){
    	if(""!=$scope.provinceId){
        	for(var i=0;i<$scope.citys[$scope.provinceId].length;i++){
    			if($scope.citys[$scope.provinceId][i].name==$scope.storeDetail.city){
    				$scope.cityId=$scope.citys[$scope.provinceId][i].id;
    			}
    		}
    	}
    }
    $http.get('/oms/static/base/json/city.json').success(function(data)
    {
        $scope.citys = data;
       /* if($scope.storeDetail !=undefined){
        	$scope.initcitys();
        }*/
    });
    //请求区文件
    $http.get('/oms/static/base/json/district.json').success(function(data)
    {
        $scope.districts = data;
    });

	//添加门店
    $scope.AddStore=function(){
    	if(validateForm("addstoreForm","msg")==true){
	        var shopName = $('.addShopName').val();
	        var shopInfo = $('.addShopInfo').val();
	        var contacts = $('.addContacts').val();
	        var shopTel = $('.addShopTel').val();
	        var acreage = $('.addAcreage').val();
	        var shopNum = $('.addShopNum').val();
	        var province="";
	        var city="";
	        var district="";
	        if(undefined!=$scope.province){
	        	province = $scope.province.name;
	        }
	        if(undefined!=$scope.city){
	        	city = $scope.city.name;
	        }
	        if(undefined!=$scope.district){
	        	district = $scope.district.name;
	        }	        
	        var shopAddr = $('.addShopAddr').val();
	        var shopProp = "1";
	        var jsonObject ="{\"province\":\""+province+"\",\"city\":\""+city+"\",\"district\":\""+district+"\",\"shopAddr\":\""+shopAddr+"\",\"shopName\":\""+shopName+"\",\"shopInfo\":\""+shopInfo+"\",\"contacts\":\""+contacts+"\",\"shopTel\":\""+shopTel+"\",\"acreage\":\""+acreage+"\",\"shopNum\":\""+shopNum+"\",\"shopProp\":\""+shopProp+"\"}";
	        $http({
	            method:'post',
	            url:pos+'shop/addMerchantShop',
	            params:{
	                keyParams:getKeyParams(jsonObject,keyParams),
	                jsonObject:getJsonObject(jsonObject)
	            }
	        }).success(function(data,stauts,headers,config){
		        	if (data.code == 1) {
		        		alertmsg(data.msg);
		        		$scope.numA=0;
		        		$scope.numB=0;
		        		$('#addstoreForm')[0].reset();
		        		$scope.goback();
		   	    	 } else {
		   	    		 alertmsg("添加门店失败","error");
		   	         }
	        })
        }else{
 			alertmsg(validateForm("addstoreForm","msg"),'error')
 		}	
    };


});








