qyApp.controller('OyshoKpiController', ['$scope','$http','$compile','Upload',function($scope,$http,$compile,Upload,$filter) {

    var keyParam =JSON.parse(localStorage.keyParams);
    var orgId=keyParam.orgId;
    $scope.orgId=keyParam.orgId;
    $scope.selOrgType = function(){
    	$http({
            method:'post',
            url:cas+'org/getShopSuperOrgId',
            params:{
                keyParams:getKeyParams('{}',keyParams),
                jsonObject:getJsonObject('{}')
            }
        }).success(function(data,stauts,headers,config){
                if (data.code == 1) {
                    $scope.orgType = data.data.org.orgType;
                    if($scope.orgType == 4){
                    	$scope.oyhsokpi();
                    }
                } else {
                    alertmsg("获取信息失败","error");
                }
        });
    }
    $scope.selOrgType();
    //店铺选项查询
    $scope.seletedshop = '';
    $scope.getShops = function(){
        var jsonObject ="{\"orgId\":\""+keyParam.orgId+"\"}";
        $http({
            method:'post',
            url:pos+'shop/getMerchantShop',
            params:{
                keyParams:getKeyParams(jsonObject,keyParams),
                jsonObject:getJsonObject(jsonObject)
            }
        }).success(function(data,stauts,headers,config){
                if (data.code == 1) {
                    $scope.shops = data.data.shopList;
                } else {
                    alertmsg("获取信息失败","error");
                }
        });
    };
    $scope.getShops();

    //导购业绩指标查询
    $scope.oyhsokpi = function(){
        var planDate = $('#planDate').val();
        planDate = planDate.replace(/\//,"");
        if($scope.orgType==1){
        	var orgId = $('#seletedshop').val().substr(7, $('#seletedshop').val().length);
        	var jsonObject = "{"+"\"shopId\":\""+orgId+"\",\"planDate\":\""+planDate+"\"}";
        	if(orgId!=null){
        		$http({
                    method:'post',
                    url:pos+'saleplan/getSalePlanDate',
                    params: {
                        keyParams:getKeyParams(jsonObject,keyParams),
                        jsonObject:getJsonObject(jsonObject)
                    }
                }).success(function(data,stauts,headers,config){
                    if (data.code == 1) {
                        //alertmsg(data.msg);
                        $scope.data = data.data;
                        $scope.saleLen = data.data.salesPlanList[0].sales.length;
                    } else {
                        alertmsg("获取信息失败","error");
                    }
                })
        	}else{
                alertmsg("请选择店铺","error");
            };
        }else if($scope.orgType==4){
        	var jsonObject = "{"+"\"shopId\":\""+$scope.orgId+"\",\"planDate\":\""+planDate+"\"}";
        	$http({
                method:'post',
                url:pos+'saleplan/getSalePlanDate',
                params: {
                    keyParams:getKeyParams(jsonObject,keyParams),
                    jsonObject:getJsonObject(jsonObject)
                }
            }).success(function(data,stauts,headers,config){
                if (data.code == 1) {
                    //alertmsg(data.msg);
                    $scope.data = data.data;
                    $scope.saleLen = data.data.salesPlanList[0].sales.length;
                } else {
                    alertmsg("获取信息失败","error");
                }
            })
        }
    };

    //平分指标
    $scope.divideIndicators = function(num){
        var b = $scope.saleLen;
        var divide = (num.n.planAmount/b).toFixed(2);
        for(i=0;i<num.n.sales.length;i++){
            num.n.sales[i].salesPlanAmount=divide;
        }
    };

    //导购业绩指标--根据日期查询
    var planDate = {
        elem: '#planDate',
        format: 'YYYY/MM',
        //min: laydate.now(),
        max: '2099-06-12',
        istime: false, //是否开启时间选择
        isclear: false, //是否显示清空
        istoday: false, //是否显示今天
        choose: function(datas){ //选择日期完毕的回调
            $scope.oyhsokpi();
        }
    };
    laydate(planDate);

    //获取当前月
    var mydate = new Date();
    var str = "" + mydate.getFullYear();
    (mydate.getMonth()+1 >9) ? str += '/'+(mydate.getMonth()+1) : str += '/0'+(mydate.getMonth()+1);
    $scope.primDate = str;

    //重置
    $scope.reset = function(){
        $('.sales-amount').val('0');
        alertmsg("重置成功,请确认保存！");
    };

    //保存设置
    $scope.saveOyshoKpi = function(){
        var date = $('#planDate').val();
        $scope.data.date = date.replace(/\//,"");

        var jsonObject = JSON.stringify($scope.data);
        $http({
            method:'post',
            url:pos+'saleplan/addSalePlanDate',
            params: {
                keyParams:getKeyParams(jsonObject,keyParams),
                jsonObject:getJsonObject(jsonObject)
            }
        }).success(function(data,stauts,headers,config){
            if (data.code == 1) {
                alertmsg("保存成功");
            } else {
                alertmsg("保存失败","error");
            }
        })

    };


}]);
