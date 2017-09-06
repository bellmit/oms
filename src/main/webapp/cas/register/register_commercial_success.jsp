<%@page contentType="text/html"   pageEncoding="UTF-8"%>

<!--遮罩 start-->

<!---- Content start ---->
<div class="contentNav">
	<div class="content-section">
		<div class="dredge">注册新商户</div>
		<div class="clearfix set-nav">
			<div class="set">
				<span class="set-bgcolor">1</span>
				<span class="stepName">填写商户资料</span>
			</div>
			<div class="set">
				<span class="set-bgcolor">2</span>
				<span class="stepName">设置品牌</span>
			</div>
			<div class="set line-bottom">
				<span class="set-bgcolor show-bgcolor">3</span>
				<span class="stepName activeStepName">完成</span>
			</div>
		</div>
		<div class="line"></div>
		<div class="content">
			<div class="joinCommercialBox fn-clear">
				<div class="joinCommercial rightImg">
					<img src="http://static.qineasy.com/base/images/img-repltyh.png" />
				</div>
				<div class="joinCommercial">注册商户成功</div>
				<div class="joinCommercial welcomeWorld">
					<p><span>{{orgName}}</span>&nbsp;<span>{{trueName}}</span>，您好！</p>
					<p>您已成功注册商户,欢迎使用勤易通服装零售管理平台。</p>
				</div>
				<div class="joinCommercial">
					<button class="step" ng-click="intoSystem()">进入系统</button>
				</div>
			</div>
		</div>
	</div>
</div>

<!---- Content end ---->