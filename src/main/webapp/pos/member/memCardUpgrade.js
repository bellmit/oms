qyApp.controller('memCardUpgradeController', ['$scope', '$http', '$compile', 'Upload', function($scope, $http, $compile, Upload) {
	/*从LOCALSTORAGE获取orgID*/
	$scope.orgId = (JSON.parse(keyParams)).orgId;
	/*页面上的一些默认效果*/
	$scope.updataCardedit = "hide";
	$scope.updataCardshow = "show";
	$scope.selected = 'unable';
	/*查询页面上所有的会员卡数据*/
	$scope.loadCardData = function() {
		$http({
			method: 'post',
			url: pos + 'membergrade/getMemberUpGrade',
			//			url: 'http://10.0.17.89:8080/pos-api/membergrade/getMemberUpGrade',
			params: {
				keyParams: getKeyParams("{}", keyParams),
				jsonObject: getJsonObject("{}")
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.selfGrades = data.data.selfGrade;
				$scope.unionGrades = data.data.unionGrade;
			} else {
				alertmsg(data.msg, "error")
			}
		})
	}
	$scope.loadCardData();
	/*点击编辑按钮*/
		$scope.editFlag=1;
	$scope.editCardUpdate = function(obj) {
		/*点击编辑按钮查询其中的会员卡列表*/
		if($scope.editFlag==1){
			obj.updataCardshow = "hide";
			obj.updataCardedit = "show";
			obj.selected = 'able';
			$scope.editFlag=0;
		}else{
			alertmsg("您有未保存的升级设置","error");
		}
		
	};
	/*加载升级后会员卡的卡类型*/
	$scope.loadMemberCard = function() {
		var jsonObject = {
			orgId: $scope.orgId
		}
		jsonObject = JSON.stringify(jsonObject);
		$http({
			method: 'post',
			url: pos + 'membergrade/getMemberGrades',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				$scope.memberGradeListsB = [];
				data.data.memberGradeList.forEach(function(ele) {
					if(ele.memberUnionId == '') {
						$scope.memberGradeListsB.push(ele);
					}
				})
				$scope.memberGradeLists = data.data.memberGradeList;
			} else {
				alertmsg(data.msg, "error")
			}
		})
	};
	$scope.loadMemberCard();
	/*点击取消按钮*/
	$scope.cacelEdit = function(obj) {
			obj.updataCardshow = "show";
			obj.updataCardedit = "hide";
			obj.selected = 'unable';
			$scope.editFlag=1;
			$scope.loadCardData();
		}
		/*点击自营门店保存按钮*/
	$scope.saveEdit = function(obj, nextGradeId, upMoney) {
		$scope.gradeId = obj.selfGrade.gradeId;
		$scope.gradeName = obj.selfGrade.gradeName;
		var saveJsonObject = {
			gradeId: $scope.gradeId,
			gradeName: $scope.gradeName,
			level: "",
			nextGradeId: nextGradeId,
			upMoney: upMoney,
			brandDiscount: [],
		};
		saveJsonObject = JSON.stringify(saveJsonObject);
		$scope.save(obj,saveJsonObject);
	};
	/*点击其他会员联盟保存按钮*/
	$scope.saveUnionCardEdit = function(obj, nextGradeId, upMoney) {
		$scope.gradeId = obj.unionList.gradeId;
		$scope.gradeName = obj.unionList.gradeName;
		var saveJsonObject = {
			gradeId: $scope.gradeId,
			gradeName: $scope.gradeName,
			level: "",
			nextGradeId: nextGradeId,
			upMoney: upMoney,
			brandDiscount: [],
		};
		saveJsonObject = JSON.stringify(saveJsonObject);
		$scope.save(obj,saveJsonObject);
	};
	$scope.save=function(obj,jsonObject){
		$http({
			method: 'post',
			url: pos + 'membergrade/updateMemberGrade',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == "1") {
				obj.updataCardshow = "show";
				obj.updataCardedit = "hide";
				obj.selected = 'able';
				$scope.editFlag=1;
				$scope.loadCardData();
			} else {
				alertmsg(data.msg, "error")
			}
		})
	};
	
	
	
	
}]);