<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--编辑微店信息页面-->
<div class="content-wrapper content-forwardAdd-wrapper pb20 fn-clear">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">编辑微店信息</h2>
		<!--<a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>-->
	</div>
	<div class="fn-clear"></div>
	<section class="container-fluid col-md-11 pl0 pr0 mgl20 mgt30">
		<form id="" name="myForm" novalidate class="col-md-8  pl0 pr0 ">
			<div class="row">
				<div class="prodet-nav">
					<div class="prodet-box pdl15 pr0">
						<!-- row1 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14 mgt25 col-md-3">
								<em class="am-ft-red mgr5">*</em>微店logo：
							</div>
							<div class="col-md-3  memImg mgl0">
								<input type="file" ngf-select="uploadFiles($files)" />
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
								</select>
							</div>
						</div>
						<!-- row3 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14 col-md-3"><em class="am-ft-red mgr5">*</em>地区：</div>
							<div class="col-md-9 form-group needValInfo">
								<!--<select class="col-md-3 mgr5 shopAddr1" ng-options="province.name for province in provinces" ng-model="province" ng-change="member.city='';member.district='';">-->
								<select class="col-md-5 mgr5 shopAddr1" ng-model="province" ng-change="initprovinces()">
									<option value="">请选择省</option>
									<option ng-repeat="province in provinces" value="{{province.name}}">{{province.name}}</option>
								</select>
								<select class="col-md-5 mgr5 shopAddr2" ng-model="city" ng-change="initcitys()">
									<option value="">请选择市</option>
									<option ng-repeat="city in citys[provinceId]" value="{{city.name}}">{{city.name}}</option>
								</select>
							</div>
						</div>
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14 col-md-3">&nbsp;</div>
							<div class="col-md-9">
								<button type="button" class="btn btn-primary addBrandBtn mgl0" ng-click="editWxShop()">确认修改</button>
								<button type="button" class="btn btn-default mgl10" ng-click="goback()">取消</button></div>
						</div>
					</div>
				</div>
			</div>

		</form>
	</section>
</div>

<!--编辑微店信息页面-->
