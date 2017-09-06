/**
 * Created by Zora Tao on 2016/6/22.
 *
 * Please backup before modification
 * 修改前请备份
 **/
/**
 * Created by Zora Tao on 2016/6/12.
 *
 * Please backup before modification
 * 修改前请备份
 **/

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

var todoApp = angular.module("storeApp", []);
todoApp.controller("storeContr", function ($scope,$http) {

    var noRecord = '';
    noRecord += '<div class="noRecord text-center">';
    noRecord += '<p class="am-ft-14 mgt15 mgb15">当前没有门店记录，请添加门店！</p>';
    noRecord += '</div>';

    var nub = 0;
    var size = 10;
    var orgId = 10000;

   //查询门店
    $scope.getAllStore = function(){
        var jsonObject ="{\"orgId\":\""+orgId+"\",\"nub\":\""+nub+"\",\"size\":\""+size+"\"}";
        $http({
            method:'post',
            url:'http://127.0.0.1:8080/pos-api/shop/getShopByOrgId',
            params:{
                keyParams:getKeyParams(jsonObject,keyParams),
                jsonObject:getJsonObject(jsonObject)
            }
        }).success(function(data,stauts,headers,config) {
            var shopList = data.data.shopList;
            $scope.shopList = shopList;
            //console.info(data);
            if(shopList.length ==0){
                $('.ManColTable').empty();
                $('.ManColTable').append(noRecord);
            }
        });
    }
    $scope.getAllStore();

    //修改门店
        $scope.Edit=function(index){
            var shopInfo = $scope.shopList[index].shopInfo;
            var orgId = $scope.shopList[index].orgId;
            var shopAddr = $scope.shopList[index].shopAddr;
            var shopTel = $scope.shopList[index].shopTel;
            var contacts = $scope.shopList[index].contacts;
            var jsonObject ="{\"shopInfo\":\""+shopInfo+"\",\"orgId\":\""+orgId+"\",\"shopAddr\":\""+shopAddr+"\",\"shopTel\":\""+shopTel+"\",\"contacts\":\""+contacts+"\"}";
        $http({
            method:'post',
            url:'http://127.0.0.1:8080/pos-api/shop/updateShop',
            params:{
                keyParams:getKeyParams(jsonObject,keyParams),
                jsonObject:getJsonObject(jsonObject)
            }
        }).success(function(data,stauts,headers,config){
            if (data.code == 1) {
                $('.alert,.maskBg').show();
                $('.alert').removeClass('alert-danger').addClass('alert-success').children('h4').text('修改成功！');
                $('.alert').children('p').text('');
                $scope.getAllStore();
                console.info(data.msg);
            } else {
                $('.alert').show();
                $('.alert').children('p').text(data.msg);
            }

        })
    }

    //删除门店
    $scope.Delete=function(index){
        var orgId = $scope.shopList[index].orgId;
        var jsonObject ="{\"orgId\":\""+orgId+"\"}";
        Dialshow();
        $('.SavEdit').click(function(){
            $http({
                method:'post',
                url:'http://127.0.0.1:8080/pos-api/shop/deleteOrgAndShop',
                params:{
                    keyParams:getKeyParams(jsonObject,keyParams),
                    jsonObject:getJsonObject(jsonObject)
                }
            }).success(function(data,stauts,headers,config){
                if (data.code == 1) {
                    $('.alert,.maskBg').show();
                    $('.alert').removeClass('alert-danger').addClass('alert-success').children('h4').text('删除门店成功！');
                    $('.alert').children('p').text('');
                    Dialhide();
                    $scope.getAllStore();
                    console.info(data.msg);
                } else {
                    $('.alert').show();
                    $('.alert').children('p').text(data.msg);
                }
            })
        })
    }

});

//添加门店
var addSt = angular.module("storeAddApp", []);
addSt.controller("storeAddContr", function ($scope,$http) {
    $scope.AddStore=function(){
        var shopName = $('.shopName').val();
        var shopInfo = $('.shopInfo').val();
        var contacts = $('.contacts').val();
        var shopTel = $('.shopTel').val();
        var email = $('.email').val();
        var shopAddr = $('.shopAddr1').val() + $('.shopAddr2').val() + $('.shopAddr3').val() + $('.shopAddrDet').val();
        var jsonObject ="{\"shopName\":\""+shopName+"\",\"shopInfo\":\""+shopInfo+"\",\"contacts\":\""+contacts+"\",\"shopTel\":\""+shopTel+"\",\"email\":\""+email+"\",\"shopAddr\":\""+shopAddr+"\"}";
        console.info(jsonObject);
        $http({
            method:'post',
            url:'http://127.0.0.1:8080/pos-api/shop/addShopAndOrg',
            params:{
                keyParams:getKeyParams(jsonObject,keyParams),
                jsonObject:getJsonObject(jsonObject)
            }
        }).success(function(data,stauts,headers,config){
            if (data.code == 1) {
                $('.alert,.maskBg').show();
                $('.alert').removeClass('alert-danger').addClass('alert-success').children('h4').text('添加成功！');
                $('.alert').children('p').text('');
                console.info(data.msg);
            } else {
                $('.alert').show();
                $('.alert').children('p').text(data.msg);
            }
        })
    }

});








