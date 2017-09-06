<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!---- Content Wrapper start ---->
<div class="content-wrapper">
	<div class="mgl20 inner-content fn-clear">
		<div class="topTab mgl-20 pl0 pr0">
			<ul class="fn-clear mgl20">
				<li class="fn-left tabname" ng-class="{true:'tabActive'}[tabIndex=='1']" ng-click="shiftTab('1')">品类管理</li>
				<li class="fn-left tabname" ng-class="{true:'tabActive'}[tabIndex=='2']" ng-click="shiftTab('2')">颜色管理</li>
				<li class="fn-left tabname" ng-class="{true:'tabActive'}[tabIndex=='3']" ng-click="shiftTab('3')">尺码配置</li>
			</ul>
		</div>
		<!--配置品类配置，颜色管理，尺码管理的路由页面-->
		<div ui-view=""></div>
	</div>  
</div>
