//编辑按钮
function edit_btn(a){
    $('.td_edit').show().next().hide().parent().find('input,select').prop('disabled',true);
    $(a).parent().hide().next().show().parent().find('input,select').prop('disabled',false);
};
//取消按钮
function cancel_btn(a){
    $(a).parent().hide().prev().show().parent().find('input,select').prop('disabled',true);
};
//删除
function delete_btn(a){
    $(a).parents('tr').remove();
};
//弹窗显示/隐藏
function Dialshow(){
    $('.EditDialog,.maskBg').dialogShow();
};
function Dialhide(){
    $('.EditDialog,.maskBg').dialogHide();
};
qyApp.controller("storeController", function ($state,$stateParams,$scope,$http) {
	$stateParams.uiParams=new Object();
	$stateParams.uiParams.sourceArr=new Array();
    var noRecord = '';
    noRecord += '<div class="noRecord text-center">';
    noRecord += '<p class="am-ft-14 mgt15 mgb15">当前没有门店记录，请添加门店！</p>';
    noRecord += '</div>';
    var from=0;
    var pageSize=10;
    var keyParam =JSON.parse(localStorage.keyParams);
    var orgId=keyParam.orgId;
    $scope.count = "0";
    
   //查询门店
    $scope.getAllStore = function(){
    	var shopProp = "1";
        var jsonObject ="{\"orgId\":\""+keyParam.orgId+"\",\"nub\":\""+from+"\",\"size\":\""+pageSize+"\",\"shopProp\":\""+shopProp+"\"}";
        $http({
            method:'post',
            url:pos+'shop/getMerchantShop',
            params:{
                keyParams:getKeyParams(jsonObject,keyParams),
                jsonObject:getJsonObject(jsonObject)
            }
        }).success(function(data,stauts,headers,config) {
        	if (data.code == 1) {
	            var shopList = data.data.shopList;
	            if(shopList.length > 0){
	            	$scope.shopList = shopList;
	                $scope.count = data.data.shopList[0].count;
	                $scope.orgType = data.data.shopList[0].orgType;
	                if(shopList.length ==0){
	                    $('.ManColTable').empty();
	                    $('.ManColTable').append(noRecord);
	                }
	                $scope.createPagePlugin($scope.count,pageSize);
	            }else{
	            	$scope.shopList="";
	            }
	    	 } else {
	    		 alertmsg("获取门店失败","error");
	         }
        });
    };
    
    $scope.getAllStore();

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
    	var shopProp = "1";
        var jsonObject ="{\"orgId\":\""+orgId+"\",\"nub\":\""+from+"\",\"size\":\""+pageSize+"\",\"shopProp\":\""+shopProp+"\"}";
        $http({
            method:'post',
            url:pos+'shop/getMerchantShop',
            params:{
                keyParams:getKeyParams(jsonObject,keyParams),
                jsonObject:getJsonObject(jsonObject)
            }
        }).success(function(data,stauts,headers,config){
        	if (data.code == 1) {
	            var shopList = data.data.shopList;
	            $scope.shopList = shopList;
	            if(shopList.length ==0){
	                $('.ManColTable').empty();
	                $('.ManColTable').append(noRecord);
	            }
	    	 } else {
	    		 alertmsg("获取门店失败","error");
	         }
        })
    }

    //删除门店
    $scope.del=function(){
        var orgId = $('#orgId').val();
        var jsonObject ="{\"orgId\":\""+orgId+"\"}";
            $http({
                method:'post',
                url:pos+'shop/deleteOrgAndShop',
                params:{
                    keyParams:getKeyParams(jsonObject,keyParams),
                    jsonObject:getJsonObject(jsonObject)
                }
            }).success(function(data,stauts,headers,config){
            	if (data.code == 1) {
	            	alertmsg(data.msg);
	                $scope.getAllStore();
	   	    	 } else {
	   	    		 alertmsg("删除门店失败","error");
	   	         }
            })
    };
    
    //编辑
    $scope.getStore=function(obj){  
    	
    	$stateParams.uiParams.params=obj.n;
    	$stateParams.uiParams.sourceArr.push({level:"0",name:"store"});
    	$state.go("updateStore",{uiParams:$stateParams.uiParams});
    	
    };
    //添加
    $scope.toaddstore=function(){   
    	$stateParams.uiParams.params={};
    	$stateParams.uiParams.type="1";
		$stateParams.uiParams.sourceArr.push({leval:"0",name:"store"});
    	$state.go("addStore",{uiParams:$stateParams.uiParams})

    };

});








