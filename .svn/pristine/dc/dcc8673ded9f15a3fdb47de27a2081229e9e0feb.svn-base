

var obj=[
{
	"name":"register_home",
	"controller":"register_homeController",  
	"url":"../cas/register/register_home.jsp"	
},
{
	"name":"register_addBrand",
	"controller":"register_addBrandController",  
	"url":"../cas/register/register_addBrand.jsp"	
},
{
	"name":"register_commercial_success",
	"controller":"register_commercial_successController",  
	"url":"../cas/register/register_commercial_success.jsp"	
},
{
	"name":"applyJoin_success",
	"controller":"applyJoin_successController",  
	"url":"../cas/register/applyJoin_success.jsp"	
},
{
	"name":"register_type",
	"controller":"register_typeController",  
	"url":"../cas/register/register_type.jsp"	
},
]

var registerApp=angular.module("registerApp",["ngRoute","ngFileUpload"]);



registerApp
.controller("registerCtr",["$scope",function($scope){
}])
.config(['$routeProvider','$httpProvider',function ($routeProvider,$httpProvider){
	
	angular.forEach(obj, function(v) {
		$routeProvider
			.when('/'+v.name,{
				templateUrl:v.url,
				controller:v.name+"Controller"
			})
		$routeProvider.otherwise({redirectTo: '/'});
	})
	
//	$httpProvider.interceptors.push('timestampMarker');
				
}])


registerApp.factory('timestampMarker', ["$rootScope", function ($rootScope) {
    var timestampMarker = {
        request: function (config) {
            $rootScope.loading = true;
            config.requestTimestamp = new Date().getTime();
            var keyParams=JSON.parse(localStorage.keyParams);
            keyParams.timestamp=config.requestTimestamp;
            localStorage.keyParams=JSON.stringify(keyParams);
            return config;
        },
        response: function (response) {    	
            $rootScope.loading = false;
            response.config.responseTimestamp = new Date().getTime();
            return response;
        },
        responseError:function(response) {
        	console.log('response:' + response);
        	alertmsg("系统异常!",'error');
        	return response;
        }
    };
    return timestampMarker;
}]);
