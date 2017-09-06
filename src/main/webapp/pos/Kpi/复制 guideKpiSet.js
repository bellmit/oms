qyApp.controller('guideKpiSetController', function($stateParams, $state, $scope, $http, $compile, Upload, $filter) {
	/*日期代码*/
	//判断当前年份是否是闰年(闰年2月份有29天，平年2月份只有28天)
	function isLeap(year) {
		return year % 4 == 0 ? (year % 100 != 0 ? 1 : (year % 400 == 0 ? 1 : 0)) : 0;
	}
	var i, k,
		today = new Date(), //获取当前日期
		getCalendar = function(year, month, date) {
			$(".datacontent").empty();
			var firstday = new Date(year, month - 1, 1), //获取当月的第一天
				dayOfWeek = firstday.getDay(), //判断第一天是星期几(返回[0-6]中的一个，0代表星期天，1代表星期一，以此类推)
				days_per_month = new Array(31, 28 + isLeap(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);//创建月份数组
//				str_nums = Math.ceil((dayOfWeek + days_per_month[month - 1]) / 7);
				console.log(days_per_month)
			//确定日期表格所需的行数
			//			$(".datacontent").append('<ul class="fn-clear"><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li></ul>'); //打印表格第一行(显示星期)
//			for(i = 0; i < str_nums; i += 1) { //二维数组创建日期表格
//				for(k = 0; k < 7; k++) {
//					var idx = 7 * i + k; //为每个表格创建索引,从0开始
//					var date = idx - dayOfWeek + 1; //将当月的1号与星期进行匹配
//					//					(date <= 0 || date > days_per_month[month - 1]) ? date = ' ': date = idx - dayOfWeek + 1; //索引小于等于0或者大于月份最大值就用空表格代替
//					(date <= 0 || date > days_per_month[month - 1]) ? date = ' ': date = '<p class="mgt10 mgb10">' + (idx - dayOfWeek + 1) + '日</p><p><input class="daily-kpi" type="text" /></p>'; //索引小于等于0或者大于月份最大值就用空表格代替
//						// date == d ? document.write('<td class="today">' + date + '</td>') : document.write('<td>' + date + '</td>');  //高亮显示当天
//					$(".datacontent").append('<div class="date fn-left">' + date + '</div>'); //高亮显示当天
//				}
//			}
		};
		$scope.year = today.getFullYear(), //获取日期中的年份
		$scope.month = today.getMonth()+1, //获取日期中的月份(需要注意的是：月份是从0开始计算，获取的值比正常月份的值少1)
	getCalendar($scope.year, $scope.month);
//	创建年份的下拉框
$scope.yearDateArr=[];
	$scope.setYearDate=(function(){
		for(var i = 1900 ;i<=2100;i++){
			$scope.yearDateArr.push({year:i});
		}
	})()
	if($stateParams.uiParams.type == '0') { /*0是前进，1是后退到这个页面*/
		$stateParams.uiParams.routeArr.push({
			name: "guideKpiSet",
			level: "1"
		})
	}
	$scope.goback = function() {
		$stateParams.uiParams.routeArr.splice($stateParams.uiParams.routeArr.length - 1, 1);
		$state.go($stateParams.uiParams.routeArr[$stateParams.uiParams.routeArr.length - 1].name, {
			uiParams: {
				routeArr: $stateParams.uiParams.routeArr,
				routeParam: '',
				type: "1"
			}
		})
	}
//	点击年份查询每个月的日期
$scope.setYear=function(){
	getCalendar($scope.year, $scope.month);
}
//点击月份查询每个月的日期
$scope.setMonth=function(month){
	$scope.month=month;
	getCalendar($scope.year, $scope.month);
}
});