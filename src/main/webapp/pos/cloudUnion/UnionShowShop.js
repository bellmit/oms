qyApp.controller('UnionShowShopController', ['$scope', '$http', '$compile', 'Upload', function($scope, $http, $compile, Upload) {

	$scope.getUnion = function(){
		$http({
	         method:'post',
	         url:pos+'cloudUnion/getJoinedCloudUnion',
	         params:{
	             keyParams:getKeyParams('{}',keyParams),
	             jsonObject:getJsonObject('{}')
	         }
	     }).success(function(data,stauts,headers,config){
	    	 if (data.code == 1) {
		         $scope.unionList = data.data.unionList;
		    	 } else {
	    		 alertmsg("获取联盟列表失败","error");
	         }
	     })
	}
	$scope.getUnion();
     $scope.updateReceived = function(obj,isReceived){
		 var cloudId = obj.union.cloudId;
		 var brandId = obj.union.brandId;
		 var jsonObject ="{\"cloudId\":\""+cloudId+"\",\"brandId\":\""+brandId+"\",\"isReceived\":\""+isReceived+"\"}";
		 $http({
	         method:'post',
	         url:pos+'cloudUnionDetail/updateReceived',
	         params:{
	             keyParams:getKeyParams(jsonObject,keyParams),
	             jsonObject:getJsonObject(jsonObject)
	         }
	     }).success(function(data,stauts,headers,config){
	    	 if (data.code == 1) {
	    		 alertmsg(data.msg);
	    		 $scope.getUnion();
		    	 } else {
	    		 alertmsg("操作失败","error");
	         }
	     })
	 }

     $scope.exit = function(obj){
         var cloudId = obj.union.cloudId;
         var brandId = obj.union.brandId;
         $("#exitUnionshop-dialog").center();
         $('.maskBg,#exitUnionshop-dialog').show();

         keyParam =JSON.parse(localStorage.keyParams);
         var orgId=keyParam.orgId;

         $scope.orgName = JSON.parse(localStorage.userInfo).orgName;
         $scope.cloudName = obj.union.cloudName;

         $('.am-dialog-footer').delegate('#quitBtn','click',function(){
             var causeContents = JSON.parse($("#exitUnionReason").serializeJson());
             var causeContent='';
             for (var i = 0; i < causeContents.causeContent.length; i++) {
                 if(causeContents.causeContent[i]!=''){
                     causeContent = causeContent + causeContents.causeContent[i] + ",";
                 }
             }
             causeContent = causeContent.substring(0, causeContent.length-1);
             jsonObject = "{"+"\"cloudId\":\""+cloudId+"\",\"brandId\":\""+brandId+"\",\"orgId\":\""+orgId+"\"}";
             jsonObject = JSON.parse(jsonObject);
             jsonObject.causeContent = causeContent;
             jsonObject= JSON.stringify(jsonObject);
             $http({
                 method:'post',
                 url:pos+'cloudUnionDetail/exitCloudUnion',
                 params: {
                     keyParams:getKeyParams(jsonObject,keyParams),
                     jsonObject:getJsonObject(jsonObject)
                 }
             }).success(function(data,stauts,headers,config){
                 if (data.code == 1) {
                     $('.maskBg,#exitUnionshop-dialog').hide();
                     alertmsg("退出成功");
                     $scope.getUnion();
                 } else {
                     alertmsg("退出失败","error");
                 }
             })

         });
     }
	$scope.closedialog = function() {
	    $('.exitUnion-dialog,.maskBg').hide();
	}
    //派单配置页面跳转
    $scope.rulesSet = function(id,orgid){
        window.location.href="../public/home.jsp#/UnionRuleSet";
        localStorage.cloundId = id;
        localStorage.orgid = orgid;
    }
    
//  在联盟管理页面点击商品管理进行页面跳转,将数据存在LocalStorage中
	$scope.shopProductManege=function(obj){
		localStorage.shopProductManage=angular.toJson(obj);
		 window.location.href="../public/home.jsp#/storeUnionProduct";
	}
    
    
    
}]);