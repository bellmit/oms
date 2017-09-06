qyApp.controller("contractEditController", function($scope, $timeout, $http, Upload, $compile, $route, $state, $stateParams) {

	check=function(){
		if($('#beginDateKF').val()==""||$('#endDateKF').val()==""){
			alertmsg("请填写客服服务日期", "error");
			return true;
		}
		if($('#beginDateMG').val()==""||$('#endDateMG').val()==""){
			alertmsg("请填写美工服务日期", "error");
			return true;
		}
		if($('#beginDateYY').val()==""||$('#endDateYY').val()==""){
			alertmsg("请填写运营服务日期", "error");
			return true;
		}
		if($('#beginDatePX').val()==""||$('#endDatePX').val()==""){
			alertmsg("请填写培训服务日期", "error");
			return true;
		}
		return false;
	}
	/*保存合同编辑内容*/
	$scope.editContract=function(){
		if(check()){
			return;
		}
		if($scope.taskInfoKF!=undefined){
			var taskKF={
				contractId:$scope.contractInfo.contractId,
				contractTaskId:$scope.taskInfoKF.contractTaskId,
				taskType:"0",
				taskStatus:"",
				beginDate:$('#beginDateKF').val(),
				endDate:$('#endDateKF').val()
			}
			$scope.updateContractTask(taskKF);
		}
		
		if($scope.taskInfoMG!=undefined){
			var taskMG={
				contractId:$scope.contractInfo.contractId,
				contractTaskId:$scope.taskInfoMG.contractTaskId,
				taskType:"0",
				taskStatus:"",
				beginDate:$('#beginDateMG').val(),
				endDate:$('#endDateMG').val()
			}
			$scope.updateContractTask(taskMG);
		}
		
		if($scope.taskInfoYY!=undefined){
			var taskYY={
				contractId:$scope.contractInfo.contractId,
				contractTaskId:$scope.taskInfoYY.contractTaskId,
				taskType:"0",
				taskStatus:"",
				beginDate:$('#beginDateYY').val(),
				endDate:$('#endDateYY').val()
			}
			$scope.updateContractTask(taskYY);
		}
		
		if($scope.taskInfoPX!=undefined){
			var taskPX={
				contractId:$scope.contractInfo.contractId,
				contractTaskId:$scope.taskInfoPX.contractTaskId,
				taskType:"0",
				taskStatus:"",
				beginDate:$('#beginDatePX').val(),
				endDate:$('#endDatePX').val()
			}
			$scope.updateContractTask(taskPX);
		}
	}
	
	/*更新会员卡信息*/
	$scope.updateContractTask=function(jsonObject){
		jsonObject=JSON.stringify(jsonObject);
		console.log(jsonObject);
		$http({
			method: 'post',
			url: pos + 'contractNew/updateContractTask',
			params: {
				keyParams: getKeyParams(jsonObject, keyParams),
				jsonObject: getJsonObject(jsonObject)
			}
		}).success(function(data, stauts, headers, config) {
			if(data.code == 1) {
				taskCount=taskCount-1;
				if(taskCount==0){
					alertmsg("保存成功");
					$scope.goback();
				}
			} else {
				alertmsg(data.msg, "error");
			}
			
		});
	}

	/*
	 * 界面跳转用方法
	 * */
	//进入界面
	var taskCount=0;
	if($stateParams.uiParams.type == "1") {
		$stateParams.uiParams.source.push({
			level: $stateParams.uiParams.source.length,
			name: "contractEdit"
		})
		$scope.contractInfo=$stateParams.uiParams.contractInfo;
		console.log($stateParams.uiParams);
		if($stateParams.uiParams.taskInfoKF!=undefined){
			$scope.taskInfoKF=$stateParams.uiParams.taskInfoKF;
			taskCount=taskCount+1;
		}else{
			$scope.taskInfoKF=undefined;
		}
		
		if($stateParams.uiParams.taskInfoMG!=undefined){
			$scope.taskInfoMG=$stateParams.uiParams.taskInfoMG;
			taskCount=taskCount+1;
		}else{
			$scope.taskInfoMG=undefined;
		}
		if($stateParams.uiParams.taskInfoYY!=undefined){
			$scope.taskInfoYY=$stateParams.uiParams.taskInfoYY;
			taskCount=taskCount+1;
		}else{
			$scope.taskInfoYY=undefined;
		}
		if($stateParams.uiParams.taskInfoPX!=undefined){
			$scope.taskInfoPX=$stateParams.uiParams.taskInfoPX;
			taskCount=taskCount+1;
		}else{
			$scope.taskInfoPX=undefined;
		}
	}
	
	/*点击返回按钮*/
	$scope.goback = function() {
		$stateParams.uiParams.source.splice($stateParams.uiParams.source.length - 1, 1);
		$stateParams.uiParams.type="2";
		$state.go($stateParams.uiParams.source[$stateParams.uiParams.source.length - 1].name, {
			uiParams: $stateParams.uiParams
		})
	}




});