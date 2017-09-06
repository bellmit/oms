qyApp.controller('accountInfoController', [ '$scope', '$http','$timeout',
	function($scope, $http,$timeout) {
		/*
		 * 资料修改
		 */
		var userInfo=eval('(' +localStorage.userInfo+ ')');
		$scope.accountInfo={
				userName:'',
				trueName:'',
				email:'',
				sex:'',
				telphone:'',
				orgId:'',
				userId:'',
		}
		function init(user){
			$scope.accountInfo.userName=user.userName;
			$scope.accountInfo.trueName=user.trueName;
			$scope.accountInfo.userId=user.userId;
			$scope.accountInfo.email=user.email;
			if(user.sex==""||user.sex==undefined){
				$scope.accountInfo.sex="M";
			}else{
				$scope.accountInfo.sex=user.sex;
			}
			$scope.accountInfo.telphone=user.userName;
			$scope.accountInfo.orgId=user.orgId;
		}
		init(userInfo);
		$scope.updateAccountInfo=function(){
			if(validateForm("accountInfoForm","msg")==true){
				var jsonObject=JSON.stringify($scope.accountInfo);
				$http(
			        {
			            method: 'post',
			            url: cas
			            + 'user/updateUser',
			            params: {
			                keyParams: getKeyParams(
			                jsonObject, keyParams),
			                jsonObject: getJsonObject(jsonObject)
			            }
		
			        })
			        .success(
			        function(data, stauts, headers, 
			        config) {
			            alertmsg(data.msg);
			            refreshUserInfo($scope.accountInfo.userName);
		        })
			}else{
				alertmsg(validateForm("accountInfoForm","msg"),'error');
			}
		}
		
		/*
		 * 修改密码
		 * */
		$scope.password={
				userName:'',
				password:'',
				newPassWord:'',
				newPassWord2:''
		}
		function initPassWord(user){
			$scope.password.userName=user.userName;
		}
		initPassWord(userInfo);
		$scope.newPassWordWarn2=false;
		$scope.checkNewPassWord2=function(){
			if($scope.password.newPassWord!=$scope.password.newPassWord2){
				$scope.newPassWordWarn2=true;
			}else{
				$scope.newPassWordWarn2=false;
			}
		}
		$scope.alertPas=function(){
			if($scope.newPassWordWarn2){
				alert("请确认密码保持一致");
				return;
			}
			if(validateForm("alertPassForm","msg")==true){
				var jsonObject=JSON.stringify($scope.password);
				$http(
					{
						method:'post',
						url:cas+"user/editPassWord",
						params:{
							keyParams: getKeyParams(
			                jsonObject, keyParams),
			                jsonObject: getJsonObject(jsonObject)
						}
					}
				).success(function(data,status,headers,config){
					if(data.code=="1"){
		            	alertmsg("密码修改成功,请重新登录!");
		            	$timeout(function(){
		            		window.location.href="/"+document.location.pathname.split('/')[1]+"/login.jsp";
		            	},'1500');
		            }else{
		            	alert(data.msg,"error");
		            }
				}).error(function(data,status,headers,config){
		            alertmsg(data.msg);
				})
			}else{
				alertmsg(validateForm("alertPassForm","msg"),'error');
			}
		}
		
		function refreshUserInfo(userName){
			var jsonObject="{\"userName\":\""+userName+"\"}";
			$http(
				{
					method:'post',
					url:cas+"user/findByUserName",
					params:{
						keyParams: getKeyParams(
		                jsonObject, keyParams),
		                jsonObject: getJsonObject(jsonObject)
					}
				}
			).success(function(data,status,headers,config){
				var userInfo=data.data.content;
				if(userInfo!=undefined){
					init(userInfo);
					initPassWord(userInfo);
					localStorage.userInfo=JSON.stringify(userInfo);
					reloadTrueName();
				}else{
					alertmsg("获取新的用户内容失败，请重新登陆",'error');
					$timeout(function(){
	            		window.location.href="/"+document.location.pathname.split('/')[1]+"/login.jsp";
	            	},'1500');
				}
			})
		}
	} 
]);