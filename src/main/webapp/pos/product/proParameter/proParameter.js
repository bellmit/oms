qyApp.controller('proParameterController',function($scope, $http, $compile, Upload,$state,$stateParams) {
	/*点击tab选项卡进行页面切换*/
	$scope.tabIndex="1";
	$scope.$on("$stateChangeSuccess",function(){
		if(window.location.hash=="#/proParameter"){
			$scope.tabIndex="1";
			$state.go("proParameter.managCategory",{uiParams:""});
		}
	})
	$scope.shiftTab=function(index){
		$scope.tabIndex=index;
		if(index=='1'){
			$state.go("proParameter.managCategory",{uiParams:""})
		}else if(index=='2'){
			$state.go("proParameter.managecolor",{uiParams:""})
		}else if(index=='3'){
			$state.go("proParameter.managesize",{uiParams:""})
		}
	}
	/*点击tab选项卡进行页面切换*/
	
	
	
	
	
	
	
})