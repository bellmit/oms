qyApp.controller("editNewMemberController", function($state, $stateParams, $scope, $http) {

	$stateParams.uiParams.sourceArr.push({
		leval: "1",
		name: "editNewMember"
	});
	$scope.returnback = function() {
		$stateParams.uiParams.sourceArr.splice($stateParams.uiParams.sourceArr.length - 1, 1);
		$stateParams.uiParams.type = '2';
		$state.go("managerUser", {
			uiParams: $stateParams.uiParams
		});
	}

	$scope.storeDetail = $stateParams.uiParams.params;
	
)}