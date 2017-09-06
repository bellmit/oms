qyApp.controller("userMgtController", ["$scope", "$http", "Upload", function($scope, $http, Upload) {
	$scope.obj={
		"userInfo":"show",
		"userInfoEdit":"hide"
	}
	
	$scope.userInfo=eval('(' +localStorage.userInfo+ ')');
	$scope.userId=$scope.userInfo.userId;
	$scope.userName=$scope.userInfo.userName;
	$scope.trueName=$scope.userInfo.trueName;
	$scope.email=$scope.userInfo.email;
	$scope.orgName=$scope.userInfo.orgName;
	
	//获取帐户资料
	$scope.getUserInfo = function(){
		$http({
             method:'post',
             url:cas+'user/getUserInfoByUserId',
             params:{
                 keyParams:getKeyParams('{}',keyParams),
                 jsonObject:getJsonObject('{}')
             }
         }).success(function(data,stauts,headers,config){
        	if (data.code == 1) {
      			$scope.userInfos=data.data;
				console.info(data.data);
        	 } else {
        		 alertmsg(data.msg,"error");
             }
         })
	}
	$scope.getUserInfo(); 	
	
	
	
	//编辑账户资料
	$scope.editUserInfo=function(){
		$scope.obj.userInfoEdit='show';
		$scope.obj.userInfo='hide';
	}
	//确认修改
	$scope.sureEdit=function(){
		var jsonObject = {
						"status":'',
						"userId": $scope.userId,
						"userName":$scope.userName,
						"trueName":$scope.trueName ,
						"email":$scope.email,
						"birthday":'' ,
						"sex":'',
						"telphone": '',
						"orgId":''
						 };
    	jsonObject = JSON.stringify(jsonObject);
    	$http({
             method:'post',
             url:cas+'user/updateUser',
             params:{
                 keyParams:getKeyParams(jsonObject,keyParams),
                 jsonObject:getJsonObject(jsonObject)
             }
         }).success(function(data,stauts,headers,config){
        	if (data.code == 1) {
        		$scope.userInfo.trueName=$scope.trueName;
        		$scope.userInfo.email=$scope.email;
        		localStorage.userInfo=JSON.stringify($scope.userInfo);
        		$scope.getUserInfo();
        		$scope.obj.userInfo='show';
        		$scope.obj.userInfoEdit='hide';       		 
        	 } else {
        		 alertmsg(data.msg,"error");
             }
         })
	}
	//取消编辑
	$scope.goback=function(){
		$scope.obj.userInfoEdit='hide';
		$scope.obj.userInfo='show';
	}
}]);