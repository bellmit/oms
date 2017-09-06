  $(function(){
		var keyParams='{"timestamp":"","duid":"duid","token":"","userId":"","appKey":"aZ23dA4S4I","orgId":""}'; 		
        var url=cas+"user/userlogin";
        var jsonObject = localStorage.userLogin;
        $.post(url,{keyParams:getKeyParams(jsonObject,keyParams),jsonObject:getJsonObject(jsonObject)},function(data){
			var json = $.parseJSON(data);
			if(json.code=='1'){
				var object=json.data.user;
				keyParams={"timestamp":object.timestamp,"duid":"duid","token":object.token,"userId":object.userId,"appKey":object.appKey,"orgId":object.orgId};
    			localStorage.keyParams=JSON.stringify(keyParams);
    			localStorage.userInfo=JSON.stringify(object);
//  			delete localStorage.userLogin;  
			}else{
				alert(json.msg);
			}
        })
     })
registerApp.
controller("register_homeController",["$scope","$http",function($scope,$http){
	$scope.brandLicense="";
	$scope.showUserInfo=JSON.parse(localStorage.myUserName);
	
	$scope.showBrandName=function(){
		var jsonObject="{\"orgLicense\":"+"\""+$scope.brandLicense+"\""+"}";
		$http({
			method:"post",
			url:cas+"orgInfo/getOrgByOrgLicense",
			params: {
					keyParams: getKeyParams(jsonObject, localStorage.keyParams),
	                jsonObject: getJsonObject(jsonObject)
					}
		}).success(function(data){
			$scope.code=data.code;
			if($scope.code!=="1"){
				$(".showorgname p").css({
					"color":"red"
				})
				$scope.name={"name":"请输入正确的商户授权码"}
			}else{
				$(".showorgname p").css({
					"color":"black"
				})
				$scope.orgId=data.data.orgInfo.orgId;
				$scope.name=data.data.orgInfo;
				$scope.organization = data.data.orgInfo.name;
			}
		})
	}
//	注册新商铺
	$scope.registerNewShop=function(){
		window.location.href="register_index.jsp#/register_type";
	}
	//加入商户
	$scope.show=false;
	$scope.joinCompany=function(){
		if($scope.code=="1"){
			$scope.show=true;
		}else{
			alertmsg("请输入正确的商户授权码","error")
		}
	}
//	弹窗上面的操作
//	确认加入商户
	$scope.sureToJoin=function(){
		var userId = JSON.parse(localStorage.userInfo).userId;
		var userName = JSON.parse(localStorage.userInfo).userName;
		var jsonObject="{\"orgId\":"+"\""+$scope.orgId+"\",\"userId\":\""+userId+"\",\"userName\":\""+userName+"\"}";
			$http({
				method:"post",
				url:cas+"userApply/addApply",
				params:{
					keyParams: getKeyParams(jsonObject, localStorage.keyParams),
	                jsonObject: getJsonObject(jsonObject)
					}
			}).success(function(data){
				if(data.code=="1"){
					window.location.href="register_index.jsp#/applyJoin_success";
				}else{
					alertmsg("加入商户失败","error")
				}
			})
	}
//	关闭弹窗
	$scope.close=function(){
		$scope.show=false;
	}
	
	
}])
