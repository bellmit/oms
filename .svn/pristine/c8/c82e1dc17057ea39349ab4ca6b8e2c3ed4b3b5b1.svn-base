<%@page contentType="text/html"  pageEncoding="UTF-8"%>
<!--头部LOGO部分-->
<!---- Content start ---->
<div class="contentNav">
	<div class="content-section">
		<div class="dredge">
			<span>注册新商户</span>
		</div>
		<div class="clearfix set-nav">
			<div class="set line-bottom">
				<span class="set-bgcolor show-bgcolor">1</span>
				<span class="stepName activeStepName">填写商户资料</span>
			</div>
			<div class="set">
				<span class="set-bgcolor">2</span>
				<span class="stepName">设置品牌</span>
			</div>
			<div class="set">
				<span class="set-bgcolor">3</span>
				<span class="stepName">完成</span>
			</div>
		</div>
		<div class="line"></div>
		<div class="content">
			<div class="register-new-box clearfix">
				<div class="box-left">商户类型：</div>
				<div class="box-right">
					<a class="btn-css " ng-class="{true:'btn-change'}[btnClass=='active']" ng-click="commercial()">企业</a>
					<a class="btn-css " ng-class="{true:'btn-change'}[btnClass=='notactive']" ng-click="personal()">个人</a>
				</div>
			</div>
			<div class="register_enterprise" ng-show="btnClass=='active'">
				<jsp:include page="register_enterprise.jsp" />
			</div>
			<div class="register_person" ng-show="btnClass=='notactive'">
				<jsp:include page="register_person.jsp" />
			</div>
		</div>
		<div class="fn-clear"></div>
	</div>
</div>
