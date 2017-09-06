qyApp.controller("commercialInfoController", function($scope, $http, Upload) {

    var keyParam = JSON.parse(localStorage.keyParams);
    $scope.orgid = keyParam.orgId;
    var nub = 0;
    var size = 10;

    $scope.obj={
		"commercialInfoEdit":"hide",
		"commercialInfo":"show"
	};

    //返回列表页面
    $scope.goBack= function(){
        $scope.obj.commercialInfo = 'show';
        $scope.obj.commercialInfoEdit = 'hide';
        $scope.getCommercialInfo();
    };
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
    };
    $http.get('/oms/tb/commercialInfo/province.json').success(function(data)
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
    };
    $http.get('/oms/tb/commercialInfo/city.json').success(function(data)
    {
        $scope.citys = data;
    });
    //请求区文件
    $http.get('/oms/tb/commercialInfo/district.json').success(function(data)
    {
        $scope.districts = data;
    });

    //商户资料
    $scope.getCommercialInfo = function(){
        var jsonObject ="{\"orgId\":\""+$scope.orgid+"\",\"nub\":\""+nub+"\",\"size\":\""+size+"\"}";
        $http({
            method:'post',
            url:pos+'shop/getMerchant',
            params:{
                keyParams:getKeyParams(jsonObject,keyParams),
                jsonObject:getJsonObject(jsonObject)
            }
        }).success(function(data,stauts,headers,config) {
            if (data.code == 1) {
                $scope.shopList = data.data.shopList;
                $scope.initprovinces();
                $scope.initcitys();
            } else {
                alertmsg("获取商户失败","error");
            }
        });
    };
    $scope.getCommercialInfo();

    //跳转编辑页面
    $scope.editCommercialInfo = function(){
        $scope.obj.commercialInfo="hide";
        $scope.obj.commercialInfoEdit="show";
    };

    //修改商户资料
    $scope.updateComercia = function(){
        $scope.shopList[0].shopLogo= $("#shopLogo").attr("src");
        var jsonObject = JSON.stringify($scope.shopList[0]);
        $http({
            method : 'post',
            url : pos+'shop/updateShop',
            params : {
                keyParams:getKeyParams(jsonObject,keyParams),
                jsonObject:getJsonObject(jsonObject)
            }
        }).success(function(data,stauts,headers,config){
            if (data.code == 1) {
                alertmsg("修改商户资料成功");
                $scope.goBack();
            } else {
                alertmsg("修改商户资料失败","error");
            }

        })
    };

//	图片上传
    $scope.uploadHeadpicPath = function(files) {
        var userInfo = JSON.parse(localStorage.userInfo);
        var orgId = userInfo.orgId;
        if(files && files.length) {
            $scope.files = files;
            var imageUrl = "Logo/"+orgId+"/Logo/";
            jsonObject = "{\"imageUrl\":\"" + imageUrl + "\"}";
            for(var i = 0; i < files.length; i++) {
                Upload.upload({
                    //服务端接收
                    url: pos + 'imageUpload/addShopImage',
                    //上传的同时带的参数
                    data: {
                        keyParams: getKeyParams(jsonObject, keyParams),
                        jsonObject: getJsonObject(jsonObject)
                    },
                    file: files[i]
                }).success(function(data, status, headers, config) {
                    if(data.code == "1") {
                        //上传成功
                        $scope.shopLogo = data.data.imagesPath;
                        $("#shopLogo").attr("src", $scope.shopLogo);
                    } else {
                        alertmsg(data.msg)
                    }
                }).error(function(data, status, headers, config) {
                    //上传失败
                    console.log('error status: ' + status);
                });
            }

        }
    }




});
