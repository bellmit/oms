qyApp.controller('membergraderebateController',['$scope', '$http', '$compile','Upload',function($scope, $http, $compile,Upload) {
	var orgId = JSON.parse(keyParams).orgId;
	$scope.memberGrade = {
	        orgId: orgId,
	        gradeId: '',
	        brandId: '',
	        discount: '1',
	        gradeName:'',
	        level:''
	    }
	$scope.getMemberGrade = function() {
        var jsonObject = "{\"orgId\":\""+orgId+"\"}";
        $http(
        {
            method: 'post',
            url: pos
            + 'membergrade/getMemberGrades',
            params: {
                keyParams: getKeyParams(
                jsonObject, keyParams),
                jsonObject: getJsonObject(jsonObject)

            }

        }).success(function(data, stauts, headers,config) {
        	if(data.code=="1"){
        		$scope.gradeTypes = data.data.memberGradeList;
        	}else{
        		alertmsg(data.msg,"error")
        	}
        })

    }
    $scope.getMemberGrade();
    
    $scope.del_btn = function(obj) {
        $scope.memberGrade.gradeId = obj.grade.gradeId.toString();
    }
    
    $scope.updateGrade=function(obj,type){
    	$scope.memberGrade.gradeId = obj.grade.gradeId.toString();
    	if(type=="discount"){
    		$('#gradeDis' + obj.grade.gradeId).val(returnFloat($('#gradeDis' + obj.grade.gradeId).val()));
    		if(validateForm("memberGradeDisForm","msg")==true){
	    		$scope.memberGrade.discount = nulltoZero($('#gradeDis' + obj.grade.gradeId).val());
	    		$scope.memberGrade.level = obj.grade.level;
	    		$scope.memberGrade.gradeName = obj.grade.gradeName;
    		}else{
    			alertmsg(validateForm("memberGradeDisForm","msg"),'error');
    			return;
    		}
    	}else if(type=="grade"){
    		if(validateForm("memberGradeForm","msg")==true){
    			$scope.memberGrade.level = $('#gradeLevel' + obj.grade.gradeId).val().trim();
    			$scope.memberGrade.gradeName = $('#gradeId' + obj.grade.gradeId).val().trim();
        	}
    		else{
    			alertmsg(validateForm("memberGradeForm","msg"),'error');
    			return;
    		}
    	}
    	var jsonObject = JSON.stringify($scope.memberGrade);
        $http({
            method: 'post',
            url: pos + 'membergrade/updateMemberGrade',
            params: {
                keyParams: getKeyParams(
                jsonObject, keyParams),
                jsonObject: getJsonObject(jsonObject)
            }
        }).success(function(data, stauts, headers,config) {
            alertmsg(data.msg);
            $scope.getMemberGrade();
        });
    }
    
    function nulltoZero(val){
    	if(val.trim()==""){
    		return "0";
    	}
    	return val.trim();
    }
    
    function returnFloat(value) {
	    var xsd = value.toString().split(".");
	    if(xsd.length==1){
			if(xsd[0]=="1"){
				value = value.toString()+".00";
			}
	        return value;
	    }
	    if(xsd.length>1){
	        if(xsd[1].length<2){
	            value = value.toString()+"0";
	        }
	        return value;
	    }
	}
}]);