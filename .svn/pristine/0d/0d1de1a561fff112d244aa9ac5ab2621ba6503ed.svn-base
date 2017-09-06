var app = angular.module('register', []);
app.controller('registerController', function($scope, $http, $interval, $timeout) {
	var keyParams = "{}";
	$scope.repassWarn = false;
	$scope.userNameWarn = false;
	$scope.registerForm = {
		userName: '',
		trueName: '',
		password: '',
		newPassword: '',
		email: ''
	}
	$scope.regist = function() {
		if($scope.userNameWarn) {
			alertmsg("该用户已存在！", 'error');
			return;
		}
		if($scope.repassWarn) {
			alertmsg("请确认密码保持一致！", 'error');
			return;
		}
		if($("#readFlag")[0].checked == false) {
			alertmsg("请确认已阅读用户协议", 'error');
			return;
		}
//		if(Number($scope.verticationCode) != $scope.verificationCode_right) {
//			alertmsg("验证码错误！", 'error');
//			return;
//		}
//		if($scope.registerForm.userName!=sessionStorage.truePhonNum){
//			alertmsg("请输入验证码对应的手机号码！", 'error');
//			return;
//		}
		var myUserName = {
			"userName": $scope.registerForm.userName,
			"trueName": $scope.registerForm.trueName
		}
		localStorage.myUserName = JSON.stringify(myUserName);
		if(validateForm("registerForm", "msg") == true) {
			var jsonObject = JSON.stringify($scope.registerForm);
			console.log(jsonObject)
			$http({
					method: 'post',
					url: cas + 'user/addUser',
					params: {
						keyParams: getKeyParams(
							jsonObject, keyParams),
						jsonObject: getJsonObject(jsonObject)

					}
				})
				.success(
					function(data, stauts, headers, config) {
						if(data.code == "1") {
							var userLogin = {
								"userName": $scope.registerForm.userName,
								"passWord": $scope.registerForm.password
							};
							localStorage.userLogin = JSON.stringify(userLogin);
							window.location.href = "public/register_index.jsp#/register_home";
						} else {
							alertmsg(data.msg)
						}
					})
		} else {
			alertmsg(validateForm("registerForm", "msg"), 'error')
		}
	}

	//校验密码重复
	$scope.checkPassword = function() {
		if($scope.registerForm.newPassword != $scope.registerForm.password) {
			$scope.repassWarn = true;
		} else {
			$scope.repassWarn = false;
		}
	}
	$scope.checkUserName = function() {
		$scope.registerForm.userName = $scope.registerForm.userName.trim();
		if($scope.registerForm.userName == "") {
			return;
		}
		checkUserByName($scope.registerForm.userName);
	}

	function checkUserByName(userName) {
		var jsonObject = "{\"userName\":\"" + userName + "\"}";
		$http({
				method: 'post',
				url: cas +
					'user/userExistsCheck',
				params: {
					keyParams: getKeyParams(
						jsonObject, keyParams),
					jsonObject: getJsonObject(jsonObject)
				}
			})
			.success(
				function(data, stauts, headers,
					config) {
					if(data.code == "1") {
						var flag = data.data.flag;
						if(flag == undefined) {
							$scope.userNameWarn = true;
						}
						if("true" == flag) {
							$scope.userNameWarn = true;
						} else {
							$scope.userNameWarn = false;
						}
					} else {
						$scope.registerForm.userName = "";
						alertmsg(data.msg);
					}
				})
	}
	$scope.vertical = false;
	$scope.getVerticationCode = function() {
		var re = /^1[34578]\d{9}$/;
		var result = re.test($scope.registerForm.userName);
		if(result) {
			sessionStorage.truePhonNum = $scope.registerForm.userName
			var jsonObject = {
				telphone: $scope.registerForm.userName
			};
			jsonObject = angular.toJson(jsonObject);
			$http({
				method: 'post',
				url: cas + 'smsVerification/sendMsg',
				params: {
					keyParams: getKeyParams(jsonObject, "{}"),
					jsonObject: getJsonObject(jsonObject)
				}
			}).success(function(data, stauts, headers, config) {
				if(data.code == "1") {
					$scope.vertical = true;
					$scope.timeCountDown = 60;
					$scope.verificationCode_right = data.data.verificationCode;
					$scope.timestamp_right = data.data.time;
					$scope.stampTime = new Date($scope.timestamp_right);
					$scope.timeout = $interval(function() {
						$scope.vertical = true;
						$scope.timeCountDown--;
						if($scope.timeCountDown == 0) {
							$interval.cancel($scope.timeout);
							$scope.vertical = false;
						}
					}, 1000)

				} else {
					alertmsg(data.msg, "error");
				}
			})
		} else {
			alertmsg("请输入正确的手机号", "error");
		}

	}

});