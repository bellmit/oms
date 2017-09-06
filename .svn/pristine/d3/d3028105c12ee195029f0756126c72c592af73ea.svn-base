<%@page contentType="text/html"  pageEncoding="UTF-8"%>
<form id="addShop">
	<div class="register-new-box clearfix">
		<div class="box-left">企业全称：</div>
		<div class="box-right">
			<input type="text" name="shopName" id="shopName" ng-model="shopName">
			<span class="text-css">信息审核成功后，企业名称不可修改。</span>
		</div>
	</div>
	<div class="register-new-box clearfix ">
		<div class="box-left">企业简介：</div>
		<div class="box-right">
			<textarea id="shopInfo" type="text" name="shopInfo" ng-model="companyInterduce" ></textarea>
		</div>
	</div>
    <div class="register-new-box clearfix">
        <div class="box-left">企业编号：</div>
        <div class="box-right">
            <input type="text" name="shopNum" id="shopNum" ng-model="shopNum">
            <span class="text-css"></span>
        </div>
    </div>
	<div class="register-new-box clearfix ">
		<div class="box-left" >营业执照注册号：</div>
		<div class="box-right">
			<input id="shopCer" type="text" name="licenseNumber" ng-model="businessLicenseCode" >
			<span class="text-css">请输入15位营业执照注册号或18位统一社会信用代码</span>
		</div>
	</div>
	<div class="register-new-box clearfix">
		<div class="box-left">营业执照扫描件：</div>
		<div class="box-right">
			<div class="cerdesc">
				<span class="text-css">请上传营业执照清晰彩色原件扫描件或数码照</span><br />
				<span class="text-css">营业执照需在有效期内</span><br />
				<span class="text-css">由中国大陆工商局或市场监督管理局颁发</span><br />
				<span class="text-css">支持.jpg,.png,.bemp格式照片,大小不超过2M</span>
			</div>
			<div class="upload-box licenseScan clearfix">
				<img alt="请选择图片" src="http://static.qineasy.com/base/images/add_files01.png" id="licenseScan" name="licenseScan">
				<input type="file" class="uploadCer"   ngf-multiple="false" ngf-select="uploadFiles($files)"/>
			</div>
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
			<input class="" type="text" id="shopAddr" name="shopAddr" ng-model="address" >
		</div>
	</div>
	<div class="register-new-box clearfix">
		<div class="box-left">管理员身份证姓名：</div>
		<div class="box-right">
			<input class="" type="text" name="contacts" ng-model="companyManeName" >
		</div>
	</div>
	<div class="register-new-box clearfix">
		<div class="box-left">管理员身份证号码：</div>
		<div class="box-right">
			<input class="" type="text" name="idCard" ng-model="ComManCardNo">
		</div>
	</div>
	<div class="register-new-box clearfix">
		<div class="box-left">管理员手机号：</div>
		<div class="box-right">
			<input class="" type="text" name="shopTel" ng-model="ComManPhone">
		</div>
	</div>
	<div class="box-right">
		<a href="javascript:;" class="step" ng-click="nextStepCompany()">下一步</a>
	</div>
	<div class="register-new-box clearfix">
		<div class="box-left"></div>
	</div>
</form>