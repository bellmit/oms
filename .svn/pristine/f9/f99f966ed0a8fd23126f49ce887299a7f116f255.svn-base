<%@page contentType="text/html"  pageEncoding="UTF-8"%>
<form id="addPerson">
	<div class="register-new-box clearfix">
		<div class="box-left">商户全称：</div>
		<div class="box-right">
			<input class="" name="shopName" type="text" ng-model="shopName">
			<span class="text-css">信息审核成功后，企业名称不可修改。</span>
		</div>
	</div>
	<div class="register-new-box clearfix">
		<div class="box-left">商户简介：</div>
		<div class="box-right">
			<textarea class="" name="shopInfo" type="text" ng-model="shopInfo"></textarea>
			<span class="text-css" class="text-css">{{shopInfo.length}}/200</span>
		</div>
	</div>
    <div class="register-new-box clearfix">
        <div class="box-left">商户编号：</div>
        <div class="box-right">
            <input type="text" name="shopNum" ng-model="shopNum">
            <span class="text-css"></span>
        </div>
    </div>
	<div class="register-new-box clearfix">
		<div class="box-left ">通讯地址：</div>
		<div class="box-right">
			<select class="col-md-3 mgr5" name="province" ng-model="shopList[0].province" ng-change="shopList[0].district='';shopList[0].city='';initprovinces()">
				<option value=""></option>
				<option ng-repeat="province in provinces" value="{{province.name}}">{{province.name}}</option>
			</select>
			<select class="col-md-3 mgr5" name="city" ng-model="shopList[0].city" ng-change="shopList[0].district='';initcitys()">
				<option value=""></option>
				<option ng-repeat="city in citys[provinceId]" value="{{city.name}}">{{city.name}}</option>
			</select>
			<select class="col-md-3 mgr5" name="district" ng-model="shopList[0].district">
				<option value=""></option>
				<option ng-repeat="district in districts[cityId]" value="{{district.name}}">{{district.name}}</option>
			</select>
		</div>
	</div>
	<div class="register-new-box clearfix">
		<div class="box-left">详细地址：</div>
		<div class="box-right">
			<input class="" type="text" name="shopAddr" ng-model="shopAddr">
		</div>
	</div>
	<div class="register-new-box clearfix">
		<div class="box-left">管理员身份证姓名：</div>
		<div class="box-right">
			<input class="" type="text" name="contacts" ng-model="contacts">
		</div>
	</div>
	<div class="register-new-box clearfix">
		<div class="box-left">管理员身份证号码：</div>
		<div class="box-right">
			<input class="" type="text" name="idCard" ng-model="idCard">
		</div>
	</div>
	<div class="register-new-box clearfix">
		<div class="box-left">管理员手机号：</div>
		<div class="box-right">
			<input class="" name="shopTel" type="text" ng-model="shopTel">
		</div>
	</div>
	<div class="box-right">
		<a href="#">
			<a href="javascript:;" class="step" ng-disabled="able" ng-click="nextStepPerson()">下一步</a>
		</a>
	</div>
	<div class="register-new-box clearfix">
		<div class="box-left"></div>
	</div>
</form>