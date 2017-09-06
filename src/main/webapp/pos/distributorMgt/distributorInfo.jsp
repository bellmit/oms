<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--经销商详情页面-->
<div class="content-wrapper content-wrapper-order distrubu-info-content fn-clear pdl20">
	<div class="col-md-11 pl0 mgl0 pageTitl distrubu-info-top mgb25">
		<h2 class="am-ft-16 fn-left">经销商编号：{{orgInfo.shopNum}}</h2>
		<a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>
	</div>
	<div class="col-md-11 pl0 distrubu-info-detail fn-clear mgb25">
		<div class="shop-logo fn-left">
			<img ng-src="{{orgInfo.shopLogo}}" alt="" />
		</div>
		<div class="distrubu-detail fn-left mgl10">
			<p class="distrubu-linea">
				{{orgInfo.name}}
			</p>
			<p class="distrubu-lineb distrubu-line">
				<span>
					联 &nbsp;系&nbsp;人：
				</span>
				<span>{{orgInfo.contacts}}&nbsp;&nbsp;{{orgInfo.shopTel}}</span>
			</p>
			<p class="distrubu-lineb distrubu-line">
				<span>
					详细地址：
				</span>
				<span>{{orgInfo.province}}&nbsp;&nbsp;{{orgInfo.city}}&nbsp;&nbsp;{{orgInfo.district}}{{orgInfo.shopAddr}}</span>
			</p>
			<p class="distrubu-linec distrubu-line fn-clear">
				<span class="fn-left">
					商户简介：
				</span>
				<span class="fn-left">{{orgInfo.shopInfo}}</span>
			</p>
		</div>
	</div>
	<div class="col-md-11 pl0 distrubu-info-detail fn-clear mgb25">
		<div class="distrubu-detail fn-left mgl10">
			<p class="manager-info mgb15">管理员信息</p>
			<p class="distrubu-lineb distrubu-line mgl25">
				<span>
					账号：
				</span>
				<span>{{manageInfo.userName}}</span>
			</p>
			<p class="distrubu-lineb distrubu-line mgl25">
				<span>
					昵称：
				</span>
				<span>{{manageInfo.trueName}}</span>
			</p>
			<p class="distrubu-lineb distrubu-line mgl25">
				<span>
					邮箱：
				</span>
				<span>{{manageInfo.email}}</span>
			</p>
		</div>
	</div>
	<div class="col-md-11 pl0 distrubu-info-detail fn-clear mgb25">
		<div class="distrubu-detail fn-left mgl10">
			<p class="manager-info mgb15">品牌授权</p>
			<div class="brand-list fn-clear">
				<div class="auth-brand fn-left" ng-class="{'brand-notauth':brandList.authorizedDealer=='0'}" ng-repeat="brandList in brand_distro_list">
					<div class="fn-clear mgb15 ">
						<div class="brand-logo fn-left">
							<img ng-src="{{brandList.logo}}" alt="" />
						</div>
						<div class="brand-info mgl10 fn-left">
							<p class="mgb10"> {{brandList.brandName}}</p>
							<p>
								<span ng-if="brandList.brandJoinType=='1'">自有品牌 </span>
								<span ng-if="brandList.brandJoinType=='2'">自主加盟</span>
								<span ng-if="brandList.brandJoinType=='3'">授权加盟</span>
							</p>
						</div>
					</div>
					<p class="auth-status mgb25">
						<span class=" am-ft-red" ng-if="brandList.authorizedDealer=='0'">未授权</span>
						<span class="auth-type" ng-if="brandList.authorizedDealer=='1'">已授权</span>
					</p>
					<p>
						<button class="able-btn" ng-click="authorBrand(brandList)" ng-if="brandList.authorizedDealer=='0'">授权</button>
						<button class="disabled-btn" ng-if="brandList.authorizedDealer=='1'" ng-click="notAuthorBrand(brandList)">终止授权</button>
						
					</p>
				</div>

			</div>
		</div>
	</div>
</div>
<!--弹框-->
<div class="maskBg" ng-show="show"></div>
<div class="sure-to-join" ng-show="show">
	<div class="top clearfix">
		<div class="warning">提示</div>
		<div class="close-log" ng-click="close()">
			<img src="http://static.qineasy.com/base/images/closelogo.png" />
		</div>
	</div>
	<div class="middle clearfix">
		<img src="http://static.qineasy.com/base/images/light.png" alt="" />
		<p>{{text_a}}{{authorBrandJsonObject.name}}{{text_b}}{{authorBrandJsonObject.brandName}}{{text_c}}</p>
	</div>
	<div class="middle-line"></div>
	<div class="join-bottom clearfix">
		<a href="javascript:;" class="accept" ng-if = "btn_a" ng-click="sureToAuthor()">确认</a>
		<a href="javascript:;" class="accept" ng-if = "btn_b" ng-click="sureToNotAuthor()">确认</a>
		<a href="javascript:;" class="reject" ng-click="close()">取消</a>
	</div>
</div>
<script>
	$(".sure-to-join").centera();
</script>