<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!-- <a href="javascript:;" class="line-btn forwardTop-goBack" ng-if="type=='1'" ng-click="gobWorkBench()" >返回</a> -->
<div class="content-wrapper content-wrapper-itemshow content-wrapper-itemshow2">
	<div class="forwardTop-content fn-left" ng-if="userInfo.orgType == '6'">
		<div class="forwardTop-left">
			<img ng-src="{{orgInfo.shopLogo}}" ng-if="orgInfo.shopLogo != '' " />
			<img src="http://static.qineasy.com/base/images/img_default_company.png" ng-if="orgInfo.shopLogo == '' " />
		</div>
		<div class="forwardTop-right">
			<div class="forwardTop-righttop">
				<p href="javascript:;" class="forwardTop-rightTitl">{{orgInfo.shopName}}</p>
				<div class="fn-clear"></div>
			</div>
			<p class="am-ft-black">
				<span class="stores-count">店铺数：<a href="javascript:;">{{orgInfo.shopNum}}个</a></span>
				<span class="mgl10">运营人员：{{orgInfo.userName}}<!-- <a href="javascript:;"
						class="mgl5 allotOprate">更换</a> --></span>
			</p>
			<p>联系电话：{{orgInfo.shopTel}}</p>
			<p>
				<span class="fn-left">详细地址：{{orgInfo.province}}{{orgInfo.city}}{{orgInfo.district}}{{orgInfo.shopAddr}}</span>
				<span class="fn-right am-ft-gray">商户添加时间：{{orgInfo.openDate}}</span>
			</p>
		</div>
	</div>
	<div class="fn-clear"></div>
	<div class="ManColTable col-lg-12">
		<!-- 商品列表 -->
		<div>
				<div class="AddproTabnav">
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='1']" ng-click="shiftProductTab('1')">在册店铺</div>
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='2']" ng-click="shiftProductTab('2')">暂停店铺</div>
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='3']" ng-click="shiftProductTab('3')">终止店铺</div>
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='4']" ng-click="shiftProductTab('4')">区域调动</div>
					<div class="tab-item" ng-class="{true:'tabactive'}[productTab=='5']" ng-click="shiftProductTab('5')">全部店铺</div>
					<!--<a href="javascript:;" class="btn fn-right btn-primary" ng-show="productTab=='1'" ng-click="addData('saleManage','commercialAdd',{},'1')">添加商户</a>-->		
					<a href="javascript:;" class="btn fn-right btn-primary"  ng-click="addData('saleManage','contractAdd',{},'2')">添加合同</a>
					<div class="fn-clear"></div>
				</div>
				<div>
					<constract-search></constract-search>
					<div class="productCenterInfo" ng-show="productTab=='2'">
						<jsp:include page="contractList.jsp" />
					</div>
				</div>
				<div class="fn-clear"></div>
			<!--分页 start-->
			<!--分页 end-->
		</div>
		<!-- /商品列表 -->
	</div>
	<div class="fn-clear"></div>
</div>
<!--发布商品弹框-->
<script type="text/javascript">
	$(function(){
		$('.selectpicker').selectpicker('refresh');
	})
</script>