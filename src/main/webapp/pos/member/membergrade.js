qyApp.controller('membergradeController',['$scope', '$http', '$compile','Upload',function($scope, $http, $compile,Upload) {
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
    
    /**
     * 会员卡内容
     */
    // 添加会员卡等级
    $scope.addgrad = function() {
    	if($("#newGradeName").length>0){
    		alertmsg("请先保存上一条记录");
    		return;
    	}
        var addLineGrad = [];
        addLineGrad.push('<tr id="newGrade">');
        addLineGrad
        .push('<td><input name="gradeName" type="text" id="newGradeName" value="" /></td>');
        addLineGrad
        .push('<td><input name="level" type="text" id="newGradeLevel" value="" /></td>');
        addLineGrad
        .push('<td class="td_editing" style="display:table-cell"><button type="button" class="line-btn fn-left alterBtn col-lg-6" am-bg="blue" ng-click="addGrade()">保存</button><button type="button" class="fn-left line-btn-delete col-lg-6" am-bg="white" onclick="remove_btn(this)">取消</button></td>');
        addLineGrad.push('</tr>');
        var html = addLineGrad.join("");
        var template = angular.element(html);
        var newHtml = $compile(template)($scope);
        angular.element($('.addTr').before(newHtml));
        
        var formArray=[];
    	formArray.push('{"memberGradeForm":"/membergrade/addMemberGrade"}');
    	initValidate(formArray,pos);
    }
    $scope.del_btn = function(obj) {
        $scope.memberGrade.gradeId = obj.grade.gradeId.toString();
    }
    $scope.delGrade = function() {
        var jsonObject = JSON.stringify($scope.memberGrade);
        $http({
            method: 'post',
            url: pos
            + 'membergrade/deleteMemberGrade',
            params: {
                keyParams: getKeyParams(
                jsonObject, keyParams),
                jsonObject: getJsonObject(jsonObject)

            }

        }).success(
        function(data, stauts, headers, 
        config) {
            alertmsg(data.msg);
            $scope.getMemberGrade();

        });

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
    $scope.addGrade=function(){
    	if(validateForm("memberGradeForm","msg")==true){
    	$scope.memberGrade.level = $("#newGradeLevel").val().trim();
    	$scope.memberGrade.gradeName = $("#newGradeName").val().trim();
    	var jsonObject = JSON.stringify($scope.memberGrade);
	        $http({
	            method: 'post',
	            url: pos + 'membergrade/addMemberGrade',
	            params: {
	                keyParams: getKeyParams(
	                jsonObject, keyParams),
	                jsonObject: getJsonObject(jsonObject)
	            }
	        }).success(function(data, stauts, headers, config) {
	            alertmsg(data.msg);
	            $("#newGrade").remove();
	            $scope.getMemberGrade();
	        });
    	}else{
    		alertmsg(validateForm("memberGradeForm","msg"),'error');
    	}
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