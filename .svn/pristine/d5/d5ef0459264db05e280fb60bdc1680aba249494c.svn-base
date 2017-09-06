qyApp.controller("HugeTableStoreController", function ($scope,$http) {

//地区联动
    $scope.province = '';
    $scope.city = '';
    $scope.district = '';
    //请求省文件
    $scope.initprovinces=function(){
        for(var i=0;i<$scope.provinces.length;i++){
            if($scope.provinces[i].name==$scope.storeDetail.province){
                $scope.provinceId=$scope.provinces[i].id;
            }
        }
    };
    $http.get('/oms/static/base/json/province.json').success(function(data){
        $scope.provinces = data;
        if(localStorage.storeDetail !=undefined){
            $scope.initprovinces();
        }
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
    };
    $http.get('/oms/static/base/json/city.json').success(function(data){
        $scope.citys = data;
        if(localStorage.storeDetail !=undefined){
            $scope.initcitys();
        }
    });
    //请求区文件
    $http.get('/oms/static/base/json/district.json').success(function(data){
        $scope.districts = data;
    });

    var from=0;
    var pageSize=5;
    $scope.count = "0";
    
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
	
	$scope.createPagePluginAdd=function(total,pageSize){
	 	  $("#pagingAdd").empty();
	      paging = pagePlugin.createPaging({
			    renderTo : 'pagingAdd',
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
	       url:pos+'shop/getO2OShop',
	       params:{
	           keyParams:getKeyParams($scope.jsonObject,keyParams),
	           jsonObject:getJsonObject($scope.jsonObject)
	       }
	   }).success(function(data,stauts,headers,config){
	  	 if (data.code == 1) {
	  		$scope.shopList = data.data.shopList;
		     } else {
		    	 alertmsg("获取订单失败","error");
		     }
	   })
	}
    //状态查询
    $scope.seletedsit = '';
    $scope.situations = [
       {Statusid:1,statusName:'正常接单'},
       {Statusid:2,statusName:'停止接单'}
    ];

    //查询门店列表
    $scope.getShops=function(obj){
        var shopName = $('#shopName').val();
        var province = '';
        var city = '';
        var district = '';
        var o2oStatus= $scope.seletedsit;
        var startStockNum = $('#stock-begin').val();
        var endStockNum = $('#stock-end').val();
        var startSingleRate = $('#singleRate-begin').val();
        var endSingleRate = $('#singleRate-end').val();
        if(undefined!=$scope.province && $scope.province != "" ){
            province = $scope.province.name;
        }
        if(undefined!=$scope.city && $scope.city != "" ){
            city = $scope.city.name;
        }
        if(undefined!=$scope.district && $scope.district != "" ){
            district = $scope.district.name;
        }

        var jsonObject;
        if(obj == 'addSearch'){
            shopName = $('#shopDetName').val();
            o2oStatus="0";
            startStockNum="";
            endStockNum="";
            startSingleRate="";
            startSingleRate="";
        }
            jsonObject = "{"+"\"shopName\":\""+shopName+"\",\"o2oStatus\":\""+o2oStatus+"\",\"province\":\""+province+"\",\"city\":\""+city+"\",\"district\":\""+district+"\",\"startStockNum\":\""+startStockNum+"\",\"endStockNum\":\""+endStockNum+"\",\"startSingleRate\":\""+startSingleRate+"\",\"endSingleRate\":\""+endSingleRate+"\",\"nub\":\""+from+"\",\"size\":\""+pageSize+"\"}";
        $http({
            method:'post',
            url:pos+'shop/getO2OShop',
            params: {
                keyParams:getKeyParams(jsonObject,keyParams),
                jsonObject:getJsonObject(jsonObject)
            }
        }).success(function(data,stauts,headers,config){
            if (data.code == 1) {
                //alertmsg(data.msg);
                $scope.shopList = data.data.shopList;
                if(data.data.shopList.length != 0){
                    $scope.count = data.data.shopList[0].count;
                    if(obj == 'addSearch'){
                    	$scope.createPagePluginAdd($scope.count,pageSize);
                    	$scope.param = JSON.parse($('#storeAdd').serializeJson());
                    	$scope.param.o2oStatus = "0";
                    }else{
                    	$scope.createPagePlugin($scope.count,pageSize);
                    	$scope.param = JSON.parse($('#store').serializeJson());
                    }
                }else{
                    $scope.count = "0";
                }
            } else {
                alertmsg("获取订单信息失败","error");
            }
        })
    };
    //追加class
    $scope.red = "am-ft-red";
    //移除/增加门店
    $scope.editShops=function($event){
        $('.del-dialog').find('.btn-con').removeClass('addGroup').addClass('deletShop');

        var orgId = $event.target.id;
        var checkboxId = [];
        var o2oStatus = '1';

        if($event.target.name == "remove"){
            o2oStatus = '0';
            checkboxId.push(orgId);
            var shopList = JSON.stringify(checkboxId);
            var jsonObject = "{\"orgId\":"+shopList +",\"o2oStatus\":\""+o2oStatus+"\"}";
            $('.del-dialog,.maskBg').show();
            $('.am-dialog-header').children().html("确定移除？");
            $('.dialogBtn').delegate('.deletShop','click',function(){
                $http({
                    method:'post',
                    url:pos+'shop/updateO2OStatus',
                    params: {
                        keyParams:getKeyParams(jsonObject,keyParams),
                        jsonObject:getJsonObject(jsonObject)
                    }
                }).success(function(data,stauts,headers,config){
                    if (data.code == 1) {
                        $('.del-dialog,.maskBg').hide();
                        $scope.getShops();
                    } else {
                        alertmsg(data.msg,"error");
                    }
                })
            })
        }else{
            checkboxId.push(orgId);
            var shopList = JSON.stringify(checkboxId);
            var jsonObject = "{\"orgId\":"+shopList+""+",\"o2oStatus\":\""+o2oStatus+"\"}";
            $http({
                method:'post',
                url:pos+'shop/updateO2OStatus',
                params: {
                    keyParams:getKeyParams(jsonObject,keyParams),
                    jsonObject:getJsonObject(jsonObject)
                }
            }).success(function(data,stauts,headers,config){
                if (data.code == 1) {
                    $('.del-dialog,.maskBg').hide();
                    $scope.getShops("addSearch");
                } else {
                    alertmsg(data.msg,"error");
                }
            })
        };

    };

    //增加门店
    $scope.HugeTableStoreAdd=function(){
        $scope.numA=1;
        $scope.shopList="";
        $scope.count="";
        $scope.province = '';
        $scope.city ='';
        $scope.district = '';
    };

    //返回上一页
    $scope.callback=function(){
        $scope.numA=0;
        $scope.getShops();
        $scope.province = '';
        $scope.city = '';
        $scope.district = '';
    };

   //全选
    $scope.selectAll=false;

    //批量增加
    $scope.addShops= function () {

        var shop = $("#shop").serializeJson();
        var jsonObject = shop;

        jsonObject = JSON.parse(jsonObject);
        jsonObject.o2oStatus='1';
        var noneId = jsonObject.orgId;
        if(typeof noneId == 'string'){
            noneId=noneId.split(",")
        }
        jsonObject.orgId = noneId;
        jsonObject = JSON.stringify(jsonObject);


        $('.del-dialog,.maskBg').show();
        $('.del-dialog').find('.btn-con').removeClass('deletShop').addClass('addGroup');

        if(noneId == undefined){
            $('.am-dialog-header').children().html("请至少选中一条数据");
            $('.dialogBtn').delegate('.addGroup','click',function(){
                $('.del-dialog,.maskBg').hide();
            });
        }else{
            $('.am-dialog-header').children().html("确定批量增加？");
            $('.dialogBtn').delegate('.addGroup','click',function(){

                $http({
                    method:'post',
                    url:pos+'shop/updateO2OStatus',
                    params: {
                        keyParams:getKeyParams(jsonObject,keyParams),
                        jsonObject:getJsonObject(jsonObject)
                    }
                }).success(function(data,stauts,headers,config){
                    if (data.code == 1) {
                        $('.del-dialog,.maskBg').hide();
                        $scope.getShops("addSearch");
                        $('.selectAll,.checkAdd').prop({"checked":false});
                    } else {
                        alertmsg(data.msg,"error");
                    }
                })
            });
        };
    }

});