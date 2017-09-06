var qyApp = angular.module("qyApp", ['ngRoute', 'ngFileUpload', 'ui.router']);
qyApp.config(function($stateProvider, $urlRouterProvider, $routeProvider, $httpProvider) {
	/*sessionStorage.routeList登录的时候存在sessionStorage里面的路由JSON*/
	if(sessionStorage.routeList) {
		var routes = JSON.parse(sessionStorage.routeList);
		angular.forEach(routes, function(v) {
			$stateProvider
				.state(v.name, {
					url: "/" + v.name,
					controller: v.name + "Controller",
					templateUrl: v.url,
					params: {
						uiParams: ''
					}
				})
		})
		/*route.json里面的参数是子页面的路由参数配置*/
		$.getJSON("route.json", function(data) {
			angular.forEach(data, function(v) {
				$stateProvider
					.state(v.name, {
						url: "/" + v.name + "/:param",
						controller: v.name + "Controller",
						templateUrl: v.url,
						params: {
							uiParams: ''
						}
					})
			})
		})
		/*insertRoute.json里存放的是有嵌套路由需求的页面 v.insertPage父级页面的路由名字 + "." + v.name子页面的名字*/
		$.getJSON("insertRoute.json", function(data) {
			angular.forEach(data, function(v) {
				$stateProvider
					.state(v.insertPage + "." + v.name, {
						url: "/" + v.name + "/:param",
						controller: v.name + "Controller",
						templateUrl: v.url,
						params: {
							uiParams: ''
						}
					})
			})
		})
		/*将拦截器注入$httpProvider服务*/
		$httpProvider.interceptors.push('timestampMarker');
	}
});
/*这个是交互请求的拦截器*/
qyApp.factory('timestampMarker', ["$rootScope", function($rootScope) {
	var timestampMarker = {
		/*request：请求发起的时候*/
		request: function(config) {
			$rootScope.loading = true;
			config.requestTimestamp = new Date().getTime();
			var keyParams = JSON.parse(localStorage.keyParams);
			keyParams.timestamp = config.requestTimestamp;
			localStorage.keyParams = JSON.stringify(keyParams);
			return config;
		},
		/*response：请求结束的时候*/
		response: function(response) {
			$rootScope.loading = false;
			response.config.responseTimestamp = new Date().getTime();
			return response;
		},
		/*response：请求错误的时候*/
		responseError: function(response) {
			if(!localStorage.keyParams) {
				$rootScope.loading = false;
				$('.re-login-wrapper,.maskBg').show();
			} else {
				console.log('response:' + response);
				alertmsg("系统异常!", 'error');
			}
			return response;
		}
	};
	return timestampMarker;
}]);

if(sessionStorage.routeList) {
	document.write("<script src='qy_cas.js'></script>");
	document.write("<script src='qy_pos.js'></script>");
	document.write("<script src='qy_ss.js'></script>");
	document.write("<script src='qy_tb.js'></script>");
} else {
	window.location.href = "../login.jsp";
}