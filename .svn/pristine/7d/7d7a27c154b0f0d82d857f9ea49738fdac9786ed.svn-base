qyApp.controller("storeLicenseController", function ($scope,$http) {
	$scope.getOrgLicense=function(){
            $http({
                method:'post',
                url:cas+'orgInfo/getOrgLicenseByOrgId',
                params:{
                    keyParams:getKeyParams('{}',keyParams),
                    jsonObject:getJsonObject('{}')
                }
            }).success(function(data,stauts,headers,config){
            	if (data.code == 1) {
            		$scope.orgLicense = data.data.orgInfo.orgLicense;
	   	    	 } else {
	   	    		 alertmsg("删除授权码失败","error");
	   	         }
            })
    };
    
    $scope.getOrgLicense();
});








