<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--添加经销商页面-->
<!--------------- Content start ----------------->
<div class="content-wrapper content-forwardAdd-wrapper pb20">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">添加经销商</h2>
		<a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>
	</div>
	<div class="fn-clear"></div>
	<section class="container-fluid">
		<form id="merchantForm" name="myForm" novalidate>
			<div class="row">
				<div class="prodet-nav">
					<div class="prodet-box">
						<!-- row1 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14 mgt25">
								<em class="am-ft-red mgr5">*</em>商户logo：
							</div>
							<div class="col-md-3  memImg mgl0">
								<input type="file" ngf-select="uploadFilesUpdate($files)" />
								<img class="media-object" ng-src="{{imagesPath}}" height="85" alt="请选择商户logo">
							</div>
							<p class="am-ft-red note-shoplogo fn-left">(请上传80*80以上图片，小于3M)</p>
						</div>
						<!-- row2 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>商户全称：</div>
							<div class="col-md-8 form-group needValInfo">
								<input type="text" class="col-md-8 text-overflow" name="shopName" ng-model="shopName" placeholder="" value="" required/>
								<span class="am-ft-red mgl10" ng-show="myForm.shopName.$invalid">商户全称是必须的。</span>
							</div>
						</div>
						<!-- row2 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14">商户简介：</div>
							<div class="col-md-6 form-group needValInfo">
								<textarea class="mgb0" name="shopInfo" ng-model="shopInfo" required></textarea>
								<!--<span class="am-ft-red mgl10" ng-show="myForm.shopInfo.$invalid">商户全称是必须的。</span>-->
							</div>
							<!--<div class="col-md-3">
                            	 0/200
                            </div>-->
						</div>
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>商户编号:</div>
							<div class="col-md-6 form-group needValInfo">
								<input type="text" class="col-md-8 text-overflow shopNum ng-pristine ng-valid ng-touched" name="shopNum" ng-model="shopNum" value="" required>
								<span class="am-ft-red mgl10" ng-show="myForm.shopNum.$invalid">商户编号是必须的。</span>
							</div>
						</div>
						<!-- row3 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14">通讯地址：</div>
							<div class="col-md-8 form-group needValInfo">
								<!--<select class="col-md-3 mgr5 shopAddr1" ng-options="province.name for province in provinces" ng-model="province" ng-change="member.city='';member.district='';">-->
								<select class="col-md-3 mgr5 shopAddr1" ng-model="shopList[0].province" ng-change="shopList[0].district='';shopList[0].city='';initprovinces()">
									<option value="">请选择省</option>
									<option ng-repeat="province in provinces" value="{{province.name}}">{{province.name}}</option>
								</select>
								<select class="col-md-3 mgr5 shopAddr2" ng-model="shopList[0].city" ng-change="shopList[0].district='';initcitys()">
									<option value="">请选择市</option>
									<option ng-repeat="city in citys[provinceId]" value="{{city.name}}">{{city.name}}</option>
								</select>
								<select class="col-md-3 mgr5 shopAddr3" ng-model="shopList[0].district">
									<option value="">请选择区</option>
									<option ng-repeat="district in districts[cityId]" value="{{district.name}}">{{district.name}}</option>
								</select>
							</div>
						</div>
						<!--row4-->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14">详细地址：</div>
							<div class="col-md-5 form-group needValInfo">
								<input type="text" class="col-md-8 text-overflow" name="shopAddr" ng-model="shopAddr" placeholder="" value="">
							</div>
						</div>
						<!-- row5 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>联系人：</div>
							<div class="col-md-8 form-group needValInfo">
								<input type="text" class="col-md-8 text-overflow" name="contacts" ng-model="contacts" placeholder="" value="" required>
								<span class="am-ft-red mgl10" ng-show="myForm.contacts.$invalid">联系人是必须的。</span>
							</div>
						</div>
						<!-- row6 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>联系电话：</div>
							<div class="col-md-8 form-group needValInfo">
								<input type="text" class="col-md-8 text-overflow" name="shopTel" ng-model="shopTel" placeholder="" value="" required>
								<span class="am-ft-red mgl10" ng-show="myForm.shopTel.$invalid">联系电话是必须的。</span>
							</div>
						</div>
						<!-- row7 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14">管理员信息：</div>
							<div class="col-md-10 form-group pro-property mgl5">
								<div class="row">
									<div class="col-md-2 pl0 inprodet-titl am-ft-12"><em class="am-ft-red mgr5">*</em>管理员帐号：</div>
									<div class="col-md-9 form-group needValInfo">
										<input type="text" class="col-md-3 text-overflow" autocomplete="off" name="userName" placeholder="" value="" ng-change="inputPhonNum()" ng-model="userName" required/>
										<small class="error ng-hide" ng-show="userNameWarn =='true'">该用户已存在！</small>
										<span class="am-ft-red mgl10" ng-show="myForm.userName.$invalid">管理员帐号是必须的。</span>
										<span class="mgl20">请输入11位手机号码</span>
									</div>
								</div>
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12"><em class="am-ft-red mgr5">*</em>昵称：</div>
									<div class="col-md-9 form-group needValInfo">
										<input type="text" class="col-md-3 text-overflow" autocomplete="off" id="trueNamea" placeholder="" value="" name="trueName" ng-model="trueName" required/>
										<span class="am-ft-red mgl10" ng-show="myForm.trueName.$invalid">昵称是必须的。</span>
										<span class="mgl20">4-16个字符，一个汉字为两个字符，推荐使用中文昵称</span>
									</div>
								</div>
								<div class="row addMember-row">
									<div class="col-md-2 inprodet-titl am-ft-12"><em class="am-ft-red mgr5">*</em>初始密码：</div>
									<div class="col-md-9 form-group needValInfo">
										<input type="password" autocomplete="off" class="col-md-3 text-overflow" name="password" ng-model="password" placeholder="" required/>
										<span class="am-ft-red mgl10" ng-show="myForm.password.$invalid">密码是必须的。</span>
										<span class="mgl20">6-16位的英文字母及数字组成</span>
									</div>
								</div>
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12">邮箱：</div>
									<div class="col-md-9 form-group needValInfo">
										<input type="text" class="col-md-3 text-overflow" autocomplete="off" id="email" placeholder="请输入邮箱" ng-model="email" ng-blur="checkUserName()" />
										<span class="mgl20">请输入正确的邮箱格式</span>
									</div>
								</div>
								<!--<div class="mgl60">
                                	<p class="mgl30">说明：<em class="am-ft-red">为当前添加的商户创建超级管理员的帐号。</em></p>
                                </div>-->
							</div>
						</div>
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>品牌授权：</div>
							<div class="col-md-10 mgl20 pl0 form-group needValInfo fn-clear">
								<div class="auth-brand fn-left" ng-class="{'brand-active':brandList.choose==true}" ng-repeat="brandList in brandLists track by $index" ng-click="chooseBrand(brandList,$index)">
									<div class="brand-logo fn-left">
										<img ng-src="{{brandList.logo}}" alt="" />
									</div>
									<div class="brand-info mgl10 fn-left">
										<p> {{brandList.brandName}}</p>
										<p>
											<span ng-if="brandList.brandJoinType=='1'">自有品牌</span>
											<span ng-if="brandList.brandJoinType=='2'">自主加盟</span>
											<span ng-if="brandList.brandJoinType=='3'">授权加盟</span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<!-- row8 -->
						<!--  <div class="row">
                            <div class="nowraps-text inprodet-titl am-ft-14">运营人员：</div>
                            <div class="col-md-3 form-group needValInfo">
                                <select class="col-md-7" ng-model="userIds" ng-disabled="canSelect">
                       				<option ng-repeat="user in userList" value="{{user.userId}}" ng-if="user.status != 2">{{user.trueName}}</option>
                       			</select>  
                            </div>
                        </div> -->
					</div>
				</div>
			</div>
			<button type="button" class="btn btn-primary addBrandBtn"  ng-click="addDealer(shopList[0].province,shopList[0].city,shopList[0].district)">确认添加</button>
			<button type="button" class="btn btn-default mgl10" ng-click="goback()">取消</button>
		</form>
	</section>

</div>