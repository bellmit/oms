<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--添加微店页面-->
<!--------------- Content start ----------------->
<div class="content-wrapper content-forwardAdd-wrapper pb20">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">请填写以下信息完成开店，微店开通后可在此平台管理，也可在微信小程序“店易宝”中管理</h2>
		<!--<a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>-->
	</div>
	<div class="fn-clear"></div>
	<section class="container-fluid col-md-11 pl0 pr0 mgl20 mgt30">
		<form id="" name="myForm" novalidate class="col-md-8  pl0 pr0  wx-content-left">
			<div class="row">
				<div class="prodet-nav">
					<div class="prodet-box pdl15 pr0">
						<!-- row1 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14 mgt25 col-md-3">
								<em class="am-ft-red mgr5">*</em>微店logo：
							</div>
							<div class="col-md-3  memImg mgl0">
								<input type="file"  ngf-select="uploadFiles($files)"/>
								<!--<img class="media-object" ng-src="{{imagesPath}}" height="85" alt="请选择商户logo">-->
								<img class="media-object" ng-src="{{imagesPath}}" height="85" alt="请选择商户logo">
							</div>
							<p class="am-ft-red note-shoplogo fn-left">(请上传80*80以上图片，小于3M)</p>
						</div>
						<!-- row2 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14 col-md-3"><em class="am-ft-red mgr5">*</em>微店名称：</div>
							<div class="col-md-8 form-group needValInfo">
								<input type="text" class="col-md-6 text-overflow" name="" ng-model="shopName" placeholder="" value="" required/>
								<span class="am-ft-gray mgl10">请在1-14个字内输入</span>
							</div>
						</div>
						<!-- row2 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14 col-md-3"><em class="am-ft-red mgr5">*</em>行业类型：</div>
							<div class="col-md-6 form-group needValInfo">
								<select name="" id="" class="col-md-8" ng-model="type"  ng-options="type.value as type.name for type in types">
									<!--<option value="">请选择</option>-->
								</select>
							</div>
						</div>
						<!-- row3 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14 col-md-3"><em class="am-ft-red mgr5">*</em>地区：</div>
							<div class="col-md-9 form-group needValInfo">
								<!--<select class="col-md-3 mgr5 shopAddr1" ng-options="province.name for province in provinces" ng-model="province" ng-change="member.city='';member.district='';">-->
								<select class="col-md-5 mgr5 shopAddr1" ng-model="shopList[0].province" ng-change="shopList[0].district='';shopList[0].city='';initprovinces()">
									<option value="">请选择省</option>
									<option ng-repeat="province in provinces" value="{{province.name}}">{{province.name}}</option>
								</select>
								<select class="col-md-5 mgr5 shopAddr2" ng-model="shopList[0].city" ng-change="shopList[0].district='';initcitys()">
									<option value="">请选择市</option>
									<option ng-repeat="city in citys[provinceId]" value="{{city.name}}">{{city.name}}</option>
								</select>
							</div>
						</div>
						<!--row4-->
						<!-- row5 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14 col-md-3"><em class="am-ft-red mgr5">*</em>微店管理者姓名：</div>
							<div class="col-md-9 form-group needValInfo">
								<input type="text" class="col-md-5 text-overflow" name="" ng-model="contacts" placeholder="" value="" required>
								<!--<span class="am-ft-red mgl10" ng-show="myForm.contacts.$invalid">联系人是必须的。</span>-->
							</div>
						</div>
						<!-- row6 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14 col-md-3"><em class="am-ft-red mgr5">*</em>微店管理者手机：</div>
							<div class="col-md-9 form-group needValInfo">
								<input type="text" class="col-md-5 text-overflow" name="" ng-model="shopTel" placeholder="" value="" required>
								<!--<span class="am-ft-red mgl10" ng-show="myForm.shopTel.$invalid">联系电话是必须的。</span>-->
							</div>
						</div>
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14 col-md-3">&nbsp;</div>
							<div class="col-md-9">
								<button type="button" class="btn btn-primary addBrandBtn mgl0" ng-click = "saveWxShop(shopList[0].province,shopList[0].city)">确认开通</button>
								<button type="button" class="btn btn-default mgl10">取消</button></div>
						</div>
					</div>
				</div>
			</div>
			<!--<button type="button" class="btn btn-primary addBrandBtn" ng-click="addDealer(shopList[0].province,shopList[0].city,shopList[0].district)">确认开通</button>
			<button type="button" class="btn btn-default mgl10" ng-click="goback()">取消</button>-->
		</form>
		<div class="col-md-4 pl15 pr0  wx-content-right">
			<p>注册成功后，</p>
			<p>在微信小程序“店易宝”中以管理员手机登录管理微店</p>
			<div class="mgt20">
				<img src="http://base-static.oss-cn-hangzhou.aliyuncs.com/base/images/icon_code_%20program.png" alt="" />
				<!--<p class="tip mgt2">微信扫一扫进入“店易宝”</p>-->
			</div>

		</div>
	</section>
</div>
<!--添加微店页面-->