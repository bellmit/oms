<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="content-wrapper">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">添加店铺</h2>
		<a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>
	</div>
	<div class="fn-clear"></div>

	<section class="container-fluid">
		<div class="row">
			<div class="prodet-nav">
				<div class="prodet-box">
					<!-- row1 -->
					<form id="forwardaddForm">
						<div class="row" ng-show="orgTypeShow!=1">
							<div class="col-md-1 inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>所属商户：</div>
							<div class="col-md-3 selectBox" style="padding: 0;">
								<div data-selectId="" class="shopparent">
									<span>请选择</span>
									<i class="fa fa-sort-desc fn-right mgr5 mgt5" aria-hidden="true"></i>
								</div>
								<!--下拉框的代码-->
								<div class="simulateSelect fn-hide">
									<div class="searchpart">
										<span class="fangda"><i class="fa fa-search" aria-hidden="true"></i></span>
										<input type="text" class="orgshopName" ng-model="orgshopName" ng-change="searchOrgList()" placeholder="请输入商户名称" />
									</div>
									<div class="selectePart">
										<ul>
											<li ng-repeat="orgManageList in orgManageLists" data-Id="{{orgManageList.orgId}}" class="selectLi">{{orgManageList.shopName}}</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-1 inprodet-titl am-ft-14 mgt25">
								<em class="am-ft-red mgr5">*</em>类型选择：
							</div>
							<div ng-class="{true:'selected'}[shopType=='2']" class="selec-terrace form-group" ng-click="selectType('2')">
								<img class="terrace-logo" src="../static/base/images/logo_taobao.png" />
								<img class="selected-icon" src="../static/base/images/icon_selected.png" />
							</div>
							<div ng-class="{true:'selected'}[shopType=='3']" class="selec-terrace form-group" ng-click="selectType('3')">
								<img class="terrace-logo" src="../static/base/images/logo_tmall.png" />
								<img class="selected-icon" src="../static/base/images/icon_selected.png" />
							</div>
							<div ng-class="{true:'selected'}[shopType=='4']" class="selec-terrace form-group" ng-click="selectType('4')">
								<img class="terrace-logo" src="../static/base/images/logo_jindong.png" />
								<img class="selected-icon" src="../static/base/images/icon_selected.png" />
							</div>
							<div ng-class="{true:'selected'}[shopType=='0']" class="selec-terrace form-group" ng-click="selectType('0')">
								<img class="terrace-logo" src="../static/base/images/logo_1688.png" />
								<img class="selected-icon" src="../static/base/images/icon_selected.png" />
							</div>
							<div ng-class="{true:'selected'}[shopType=='1']" class="selec-terrace form-group" ng-click="selectType('1')">
								<img class="terrace-logo" src="../static/base/images/logo_AliExpress.png" />
								<img class="selected-icon" src="../static/base/images/icon_selected.png" />
							</div>
							<div ng-class="{true:'selected'}[shopType=='5']" class="selec-terrace form-group" ng-click="selectType('5')">
								<img class="terrace-logo" src="../static/base/images/logo_amazon.png" />
								<img class="selected-icon" src="../static/base/images/icon_selected.png" />
							</div>
						</div>
						<!-- row2 -->
						<!-- <div class="row">
						<div class="col-md-1 inprodet-titl am-ft-14">店铺编号：</div>
						<div class="col-md-3 form-group needValInfo">
							<input type="text" class="col-md-5 text-overflow" name="shopNum" ng-model="addShopNum" placeholder="" ng-value="" />
						</div>
					</div>	 -->
						<div class="row">
							<div class="col-md-1 inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>店铺名称：</div>
							<div class="col-md-3 form-group needValInfo">
								<input type="text" class="col-md-8 text-overflow" name="shopName" ng-model="addShopName" ng-blur="checkShopName()" placeholder="" ng-value="" />
								<span class="error mgl5" ng-show="userNameWarn">该店铺已存在！</span>
							</div>
						</div>
						<div class="row">
							<div class="col-md-1 inprodet-titl am-ft-14"><em class="am-ft-red mgr5"></em>店铺账号：</div>
							<div class="col-md-3 form-group needValInfo">
								<input type="text" class="col-md-8 text-overflow" name="" ng-model="thirdUserName" placeholder="" ng-value="" />
							</div>
						</div>
						<div class="row">
							<div class="col-md-1 inprodet-titl am-ft-14"><em class="am-ft-red mgr5"></em>店铺密码：</div>
							<div class="col-md-3 form-group needValInfo">
								<input type="text" class="col-md-8 text-overflow" name="" ng-model="thirdPassWord" placeholder="" ng-value="" />
							</div>
						</div>
						<!-- row3 -->
						<div class="row">
							<div class="col-md-1 inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>店铺网址：</div>
							<div class="col-md-5 form-group needValInfo">
								<input type="text" class="col-md-8 text-overflow" name="shopUrl" ng-model="addShopUrl" placeholder="请输入http://或https://开头的店铺网址" ng-value="" />
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<button type="button" id="addForwardStore" class="btn btn-primary addBrandBtn" ng-click="sureAddForwardStore()">确认添加</button>
		<button type="button" class="btn btn-default mgl10" ng-click="goback()">取消</button>
	</section>
</div>
<div class="fn-clear"></div>