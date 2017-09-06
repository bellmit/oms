<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--添加微店页面-->
<!--------------- Content start ----------------->
<div class="content-wrapper content-forwardAdd-wrapper pb20 fn-hide">
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
								<input type="file" ngf-select="uploadFilesUpdate($files)" />
								<!--<img class="media-object" ng-src="{{imagesPath}}" height="85" alt="请选择商户logo">-->
								<img class="media-object" src="../static/base/images/icon_upload.png" height="85" alt="请选择商户logo">
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
								<select name="" id="" class="col-md-8">
									<option value="">请选择</option>
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
								<button type="button" class="btn btn-primary addBrandBtn mgl0">确认开通</button>
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
				<img src="../static/base/images/logo_jindong.png" alt="" />
				<p class="tip mgt2">微信扫一扫进入“店易宝”</p>
			</div>

		</div>
	</section>
</div>
<!--添加微店页面-->

<!--添加微店成功页面-->
<div class="content-wrapper content-forwardAdd-wrapper fn-clear fn-hide">
	<div class="pdl20  pt20 col-md-11 wx-success-content">
		<div class="fn-clear wx-success-content_a">
			<div class="wx-success-icon fn-left">
				&radic;
			</div>
			<div class="wx-success-info col-md-10 fn-left pl0 pr0 mgl25">
				<p class="wx-success-warn mgb15">
					恭喜您，您已经成功开通微店！
				</p>
				<div class="wx-shop-detail pt20 pdl20 fn-clear pb20 mgt20 mgb15">
					<div class="fn-left wx-shop-logo">
						<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/2016122209324453202yansetu-浅麻灰02.png" alt="" />
					</div>
					<div class="fn-left  pdl15 wx-shop-info">
						<p class="wx-shopname mgb5">唐狮运动休闲馆</p>
						<p class="wx-shopaddr">
							<span>浙江</span> &nbsp;&nbsp;
							<span>杭州</span> &nbsp;&nbsp;
							<span>批发零售业</span>
						</p>
						<p class="wx-manager">
							<span>微信管理员：张晓欢 (15757465746)</span> &nbsp;&nbsp;
							<span>创建时间：2016-12-09  10:33:32</span>
						</p>
					</div>
				</div>
				<p class="warn-black mgb10">用微信扫一扫，看看你的店铺</p>
				<div class="wx-shop-code mgb20">
					<img src="../static/base/images/logo_jindong.png" alt="" />
				</div>
				<p class="mgb20">
					<span>店铺地址：http://qineasy.oms.tsyxxg.com </span>
					<a href="javascript:;" class="mgl10">复制链接</a>
				</p>
				<div class="addadjustshop mgb25">
					<button href="javascript:;" class="mgl0">下载二维码</button>
					<!--<button href="javascript:;" ng-click="addShop()" ng-hide="obj.scan">添加门店</button>-->
				</div>
			</div>
		</div>
		<button type="button" class="btn btn-primary addBrandBtn mgl0 mgt20">继续添加微店</button>
	</div>
</div>

<!--添加微店成功页面-->

<!--微店列表页面-->
<div class="content-wrapper  fn-clear fn-hide">
	<div class="wx-content pdl20">
		<div class="wx-head col-md-10 mgb10 pl0 pr0 fn-clear">
			<div class="wx-title fn-left">微店列表 (3)</div>
			<button class="fn-right wx-green-btn">配置微信公众号</button>
		</div>
		<div class="col-md-10  pl0 pr0 fn-clear">
			<div class="wx-shop-list fn-clear pt20 pb15 pdl20 mgb10">
				<div class="fn-left">
					<div class="mgb25 fn-clear">
						<div class="fn-left wx-shop-logo">
							<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/2016122209324453202yansetu-浅麻灰02.png" alt="" />
						</div>
						<div class="fn-left  pdl15 wx-shop-info">
							<p class="wx-shopname mgb5">唐狮运动休闲馆</p>
							<p class="wx-shopaddr">
								<span>浙江</span> &nbsp;&nbsp;
								<span>杭州</span> &nbsp;&nbsp;
								<span>批发零售业</span>
							</p>
							<p class="wx-manager">
								<span>平均评分：</span> <span class="am-ft-orange">4.8分</span>&nbsp;&nbsp;
								<span>好评：</span> <span class="am-ft-orange">30个</span>&nbsp;&nbsp;
								<span>中评：</span> <span class="am-ft-orange">3个</span>&nbsp;&nbsp;
								<span>差评：</span> <span class="am-ft-orange">3个</span>&nbsp;&nbsp;
							</p>
						</div>
					</div>
					<div>
						<span style="color:#333">店铺地址：http://qineasy.oms.tsyxxg.com </span>
						<a href="javascript:;" class="mgl10">复制链接</a>
						<a href="javascript:;" class="mgl10">
							<img src="../static/base/images/icon_code_small.png" alt="" />
						</a>
					</div>
				</div>
				<div class="fn-right mgr20 wx-list-right">
					<p class="am-ft-gray mgb5">微信管理员：张晓欢 (15757465746)</p>
					<p class="am-ft-gray">创建时间：2016-12-09 10:33:32</p>
				</div>
			</div>
			<div class="wx-shop-list fn-clear pt20 pb15 pdl20 mgb10">
				<div class="fn-left">
					<div class="mgb25 fn-clear">
						<div class="fn-left wx-shop-logo">
							<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/2016122209324453202yansetu-浅麻灰02.png" alt="" />
						</div>
						<div class="fn-left  pdl15 wx-shop-info">
							<p class="wx-shopname mgb5">唐狮运动休闲馆</p>
							<p class="wx-shopaddr">
								<span>浙江</span> &nbsp;&nbsp;
								<span>杭州</span> &nbsp;&nbsp;
								<span>批发零售业</span>
							</p>
							<p class="wx-manager">
								<span>平均评分：</span> <span class="am-ft-orange">4.8分</span>&nbsp;&nbsp;
								<span>好评：</span> <span class="am-ft-orange">30个</span>&nbsp;&nbsp;
								<span>中评：</span> <span class="am-ft-orange">3个</span>&nbsp;&nbsp;
								<span>差评：</span> <span class="am-ft-orange">3个</span>&nbsp;&nbsp;
							</p>
						</div>
					</div>
					<div>
						<span style="color:#333">店铺地址：http://qineasy.oms.tsyxxg.com </span>
						<a href="javascript:;" class="mgl10">复制链接</a>
						<a href="javascript:;" class="mgl10">
							<img src="../static/base/images/icon_code_small.png" alt="" />
						</a>
					</div>
				</div>
				<div class="fn-right mgr20 wx-list-right">
					<p class="am-ft-gray mgb5">微信管理员：张晓欢 (15757465746)</p>
					<p class="am-ft-gray">创建时间：2016-12-09 10:33:32</p>
				</div>
			</div>
			<div class="wx-shop-list fn-clear pt20 pb15 pdl20 mgb10">
				<div class="fn-left">
					<div class="mgb25 fn-clear">
						<div class="fn-left wx-shop-logo">
							<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/2016122209324453202yansetu-浅麻灰02.png" alt="" />
						</div>
						<div class="fn-left  pdl15 wx-shop-info">
							<p class="wx-shopname mgb5">唐狮运动休闲馆</p>
							<p class="wx-shopaddr">
								<span>浙江</span> &nbsp;&nbsp;
								<span>杭州</span> &nbsp;&nbsp;
								<span>批发零售业</span>
							</p>
							<p class="wx-manager">
								<span>平均评分：</span> <span class="am-ft-orange">4.8分</span>&nbsp;&nbsp;
								<span>好评：</span> <span class="am-ft-orange">30个</span>&nbsp;&nbsp;
								<span>中评：</span> <span class="am-ft-orange">3个</span>&nbsp;&nbsp;
								<span>差评：</span> <span class="am-ft-orange">3个</span>&nbsp;&nbsp;
							</p>
						</div>
					</div>
					<div>
						<span style="color:#333">店铺地址：http://qineasy.oms.tsyxxg.com </span>
						<a href="javascript:;" class="mgl10">复制链接</a>
						<a href="javascript:;" class="mgl10">
							<img src="../static/base/images/icon_code_small.png" alt="" />
						</a>
					</div>
				</div>
				<div class="fn-right mgr20 wx-list-right">
					<p class="am-ft-gray mgb5">微信管理员：张晓欢 (15757465746)</p>
					<p class="am-ft-gray">创建时间：2016-12-09 10:33:32</p>
				</div>
			</div>
			<div class="wx-shop-list fn-clear pt20 pb15 pdl20 mgb10">
				<div class="fn-left">
					<div class="mgb25 fn-clear">
						<div class="fn-left wx-shop-logo">
							<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/2016122209324453202yansetu-浅麻灰02.png" alt="" />
						</div>
						<div class="fn-left  pdl15 wx-shop-info">
							<p class="wx-shopname mgb5">唐狮运动休闲馆</p>
							<p class="wx-shopaddr">
								<span>浙江</span> &nbsp;&nbsp;
								<span>杭州</span> &nbsp;&nbsp;
								<span>批发零售业</span>
							</p>
							<p class="wx-manager">
								<span>平均评分：</span> <span class="am-ft-orange">4.8分</span>&nbsp;&nbsp;
								<span>好评：</span> <span class="am-ft-orange">30个</span>&nbsp;&nbsp;
								<span>中评：</span> <span class="am-ft-orange">3个</span>&nbsp;&nbsp;
								<span>差评：</span> <span class="am-ft-orange">3个</span>&nbsp;&nbsp;
							</p>
						</div>
					</div>
					<div>
						<span style="color:#333">店铺地址：http://qineasy.oms.tsyxxg.com </span>
						<a href="javascript:;" class="mgl10">复制链接</a>
						<a href="javascript:;" class="mgl10">
							<img src="../static/base/images/icon_code_small.png" alt="" />
						</a>
					</div>
				</div>
				<div class="fn-right mgr20 wx-list-right">
					<p class="am-ft-gray mgb5">微信管理员：张晓欢 (15757465746)</p>
					<p class="am-ft-gray">创建时间：2016-12-09 10:33:32</p>
				</div>
			</div>
		</div>
		<div class="wx-list-bottom fn-clear col-md-10">
			<div class="fn-left mgt15">
				<button type="button" class="btn btn-primary addBrandBtn mgl0 ">继续添加微店</button>
			</div>
			<div class="fn-left mgl35">
				<div class="two-code-content">
					<p>
						<img src="../static/base/images/bin-code.jpg" alt="" />
					</p>
					<p class="mgt5">微信扫一扫进入店铺</p>
					<p class="mgt10">
						店铺地址：http://qinea sy.oms.tsyxxg.com
					</p>
					<div class="addadjustshop mgt15">
						<button href="javascript:;" class="mgl0">下载二维码</button>
						<!--<button href="javascript:;" ng-click="addShop()" ng-hide="obj.scan">添加门店</button>-->
					</div>
				</div>
			</div>
		</div>

	</div>

</div>

<!--微店列表页面-->

<!--编辑微店信息页面-->
<div class="content-wrapper content-forwardAdd-wrapper pb20 fn-clear fn-hide">
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
								<input type="file" ngf-select="uploadFilesUpdate($files)" />
								<!--<img class="media-object" ng-src="{{imagesPath}}" height="85" alt="请选择商户logo">-->
								<img class="media-object" src="../static/base/images/icon_upload.png" height="85" alt="请选择商户logo">
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
								<select name="" id="" class="col-md-8">
									<option value="">请选择</option>
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
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14 col-md-3">&nbsp;</div>
							<div class="col-md-9">
								<button type="button" class="btn btn-primary addBrandBtn mgl0">确认修改</button>
								<button type="button" class="btn btn-default mgl10">取消</button></div>
						</div>
					</div>
				</div>
			</div>

		</form>
	</section>
</div>

<!--编辑微店信息页面-->

<!--评价管理页面-->

<div class="content-wrapper  fn-clear fn-hide">
	<div class="wx-content pdl20 col-md-11 pr0">
		<div class="oms-tab">
			<ul class="fn-clear">
				<li class="oms-tab-active">全部评价(26)</li>
				<li>好评(20)</li>
				<li>中评(3)</li>
				<li>全部(3)</li>
			</ul>
		</div>
		<div class="wx-oms-search fn-clear">
			<div class="fn-left wx-oms-searcha mgr20">
				<span>微店：</span>
				<select name="">
					<option value="">全部店铺</option>
				</select>
			</div>
			<div class="fn-left wx-oms-searchb mgr20">
				<span>评价时间：</span>
				<select name="">
					<option value="">开始时间</option>
				</select>
				<span>—</span>
				<select name="">
					<option value="">结束时间</option>
				</select>
			</div>
			<div class="fn-left wx-oms-searchc mgr20">
				<span>评价：</span>
				<select name="">
					<option value="">开始时间</option>
				</select>
			</div>
			<button class="search-btn-gray">
				查询
			</button>
		</div>
		<table class="table assess-table table-hover table-striped table-bordered">
			<tr>
				<th class="col-md-2">评价</th>
				<th class="col-md-4">评论</th>
				<th class="col-md-2">评价人</th>
				<th class="col-md-2">商品信息</th>
				<th class="col-md-2">微店</th>
			</tr>
			<tr>
				<td>
					<p>
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
					</p>
					<p class="mgt15 asses-type">好评</p>
				</td>
				<td>
					<div>
						<p class="assess-content asses-type">好评好评好评</p>
						<p class="assess-response-content mgt10">
							<span>[回复]:</span>
							<span>谢谢您的支持！欢迎下次光临。</span>
						</p>
						<p class="assess-time mgt10 am-ft-gray">[2016-10-09 10:30]</p>
					</div>
					<!--<button class="response-btn-blue fn-right">
						回复
					</button>-->
				</td>
				<td>
					<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" class="assess-logo" alt="" />
					<span class="asses-type mgl15">清风吹来</span>
				</td>
				<td>
					<p class="assess-pro-name">呢大衣女装欧美风2016</p>
					<p class="assess-pro-price">80.00元</p>
				</td>
				<td>
					<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" class="assess-shop-logo" alt="" />
					<span class="asses-type mgl5">唐狮休闲运动馆</span>
				</td>
			</tr>
			<tr>
				<td>
					<p>
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
					</p>
					<p class="mgt15 asses-type">好评</p>
				</td>
				<td>
					<div class="fn-left">
						<p class="assess-content asses-type">好评好评好评</p>
						<p class="assess-time mgt10 am-ft-gray">[2016-10-09 10:30]</p>
					</div>
					<button class="response-btn-blue fn-right">
						回复
					</button>
				</td>
				<td>
					<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" class="assess-logo" alt="" />
					<span class="asses-type mgl15">清风吹来</span>
				</td>
				<td>
					<p class="assess-pro-name">呢大衣女装欧美风2016</p>
					<p class="assess-pro-price">80.00元</p>
				</td>
				<td>
					<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" class="assess-shop-logo" alt="" />
					<span class="asses-type mgl5">唐狮休闲运动馆</span>
				</td>
			</tr>
			<tr>
				<td>
					<p>
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
					</p>
					<p class="mgt15 asses-type">好评</p>
				</td>
				<td>
					<div class="fn-left">
						<p class="assess-content asses-type">好评好评好评</p>
						<p class="assess-time mgt10 am-ft-gray">[2016-10-09 10:30]</p>
					</div>
					<button class="response-btn-blue fn-right">
						回复
					</button>
				</td>
				<td>
					<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" class="assess-logo" alt="" />
					<span class="asses-type mgl15">清风吹来</span>
				</td>
				<td>
					<p class="assess-pro-name">呢大衣女装欧美风2016</p>
					<p class="assess-pro-price">80.00元</p>
				</td>
				<td>
					<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" class="assess-shop-logo" alt="" />
					<span class="asses-type mgl5">唐狮休闲运动馆</span>
				</td>
			</tr>
			<tr>
				<td>
					<p>
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
					</p>
					<p class="mgt15 asses-type">好评</p>
				</td>
				<td>
					<div class="fn-left">
						<p class="assess-content asses-type">好评好评好评</p>
						<p class="assess-time mgt10 am-ft-gray">[2016-10-09 10:30]</p>
					</div>
					<button class="response-btn-blue fn-right">
						回复
					</button>
				</td>
				<td>
					<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" class="assess-logo" alt="" />
					<span class="asses-type mgl15">清风吹来</span>
				</td>
				<td>
					<p class="assess-pro-name">呢大衣女装欧美风2016</p>
					<p class="assess-pro-price">80.00元</p>
				</td>
				<td>
					<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" class="assess-shop-logo" alt="" />
					<span class="asses-type mgl5">唐狮休闲运动馆</span>
				</td>
			</tr>
			<tr>
				<td>
					<p>
						<i class="fa fa-star assess-star assess-star-good " aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
						<i class="fa fa-star assess-star" aria-hidden="true"></i>
					</p>
					<p class="mgt15 asses-type">好评</p>
				</td>
				<td>
					<div class="fn-left">
						<p class="assess-content asses-type">好评好评好评</p>
						<p class="assess-time mgt10 am-ft-gray">[2016-10-09 10:30]</p>
					</div>
					<button class="response-btn-blue fn-right">
						回复
					</button>
				</td>
				<td>
					<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" class="assess-logo" alt="" />
					<span class="asses-type mgl15">清风吹来</span>
				</td>
				<td>
					<p class="assess-pro-name">呢大衣女装欧美风2016</p>
					<p class="assess-pro-price">80.00元</p>
				</td>
				<td>
					<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" class="assess-shop-logo" alt="" />
					<span class="asses-type mgl5">唐狮休闲运动馆</span>
				</td>
			</tr>
		</table>
		<div class="assess-dialog big-triangle">
			<textarea name="" class="assess-response fn-left" rows="" cols=""></textarea>
			<a href="javascript:;" class="fn-right">
				<img src="../static/base/images/closelogo.png" alt="" />
			</a>
			<span class="word-count">0/500字</span>
			<button class="response-btn-blue assess-dialog-btn mgl10 fn-left">
				发表回复
			</button>
		</div>
	</div>
</div>

<!--评价管理页面-->

<!--运费模板管理页面-->

<div class="content-wrapper  fn-clear fn-hide">
	<div class="wx-content pdl20 fn-clear">
		<div class="wx-head col-md-10 mgb10 pl0 pr0 fn-clear">
			<div class="wx-title fn-left">运费模板管理</div>
			<button class="selectOrderBtn fn-right">添加运费模版</button>
		</div>
		<div class="freight-none col-md-10 mgb10 pl0 pr0 fn-clear fn-hide">
			<span style="color:#bbb">
				<i class="fa fa-volume-up" aria-hidden="true"></i>
				您还没有添加运费模版
			</span>
			<a href="javascript:;">立即添加</a>
		</div>
		<div class="freight-list col-md-10 mgb20 pl0 pr0 ">
			<div class="freight-list-top fn-clear">
				<div class="freight-title fn-left">
					运费模版01
				</div>
				<div class="freight-time fn-right">
					<span class="freight-time-a">最后编辑时间：2016-09-08 10:28</span>
					<a href="javascript:;" class="am-ft-blue mgl10">编辑</a>
					<a href="javascript:;" class="am-ft-gray mgl10">删除</a>
				</div>
			</div>
			<table class="table freight-table table-hover table-striped table-bordered">
				<tr>
					<th class="col-md-4">运送到</th>
					<th class="col-md-2">首件(个)</th>
					<th class="col-md-2">运费(元)</th>
					<th class="col-md-2">续件(个)</th>
					<th class="col-md-2">运费(元)</th>
				</tr>
				<tr>
					<td>
						全国
					</td>
					<td>
						1
					</td>
					<td>
						12.00
					</td>
					<td>
						1
					</td>
					<td>
						2.00
					</td>
				</tr>
				<tr>
					<td>
						全国
					</td>
					<td>
						1
					</td>
					<td>
						12.00
					</td>
					<td>
						1
					</td>
					<td>
						2.00
					</td>
				</tr>
				<tr>
					<td>
						全国
					</td>
					<td>
						1
					</td>
					<td>
						12.00
					</td>
					<td>
						1
					</td>
					<td>
						2.00
					</td>
				</tr>
				<tr>
					<td>
						全国
					</td>
					<td>
						1
					</td>
					<td>
						12.00
					</td>
					<td>
						1
					</td>
					<td>
						2.00
					</td>
				</tr>
				<tr>
					<td>
						全国
					</td>
					<td>
						1
					</td>
					<td>
						12.00
					</td>
					<td>
						1
					</td>
					<td>
						2.00
					</td>
				</tr>
				<tr>
					<td>
						全国
					</td>
					<td>
						1
					</td>
					<td>
						12.00
					</td>
					<td>
						1
					</td>
					<td>
						2.00
					</td>
				</tr>
				<tr>
					<td colspan="5">

						<span>适用微店:</span>
						<span class="freight-user mgl10">
						<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" alt="" />
						<span>唐狮休闲运动馆</span>
						</span>
						<span class="freight-user mgl10">
						<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" alt="" />
						<span>唐狮休闲运动馆</span>
						</span>
						<span class="freight-user mgl10">
						<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" alt="" />
						<span>唐狮休闲运动馆</span>
						</span>

					</td>

				</tr>
			</table>
			<div class="freight-list-top fn-clear">
				<div class="freight-title fn-left">
					运费模版01
				</div>
				<div class="freight-time fn-right">
					<span class="freight-time-a">最后编辑时间：2016-09-08 10:28</span>
					<a href="javascript:;" class="am-ft-blue mgl10">编辑</a>
					<a href="javascript:;" class="am-ft-gray mgl10">删除</a>
				</div>
			</div>
			<table class="table freight-table table-hover table-striped table-bordered">
				<tr>
					<th class="col-md-4">运送到</th>
					<th class="col-md-2">首件(个)</th>
					<th class="col-md-2">运费(元)</th>
					<th class="col-md-2">续件(个)</th>
					<th class="col-md-2">运费(元)</th>
				</tr>
				<tr>
					<td>
						全国
					</td>
					<td>
						1
					</td>
					<td>
						12.00
					</td>
					<td>
						1
					</td>
					<td>
						2.00
					</td>
				</tr>
				<tr>
					<td>
						全国
					</td>
					<td>
						1
					</td>
					<td>
						12.00
					</td>
					<td>
						1
					</td>
					<td>
						2.00
					</td>
				</tr>
				<tr>
					<td>
						全国
					</td>
					<td>
						1
					</td>
					<td>
						12.00
					</td>
					<td>
						1
					</td>
					<td>
						2.00
					</td>
				</tr>
				<tr>
					<td>
						全国
					</td>
					<td>
						1
					</td>
					<td>
						12.00
					</td>
					<td>
						1
					</td>
					<td>
						2.00
					</td>
				</tr>
				<tr>
					<td>
						全国
					</td>
					<td>
						1
					</td>
					<td>
						12.00
					</td>
					<td>
						1
					</td>
					<td>
						2.00
					</td>
				</tr>
				<tr>
					<td>
						全国
					</td>
					<td>
						1
					</td>
					<td>
						12.00
					</td>
					<td>
						1
					</td>
					<td>
						2.00
					</td>
				</tr>
				<tr>
					<td colspan="5">

						<span>适用微店:</span>
						<span class="freight-user mgl10">
						<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" alt="" />
						<span>唐狮休闲运动馆</span>
						</span>
						<span class="freight-user mgl10">
						<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" alt="" />
						<span>唐狮休闲运动馆</span>
						</span>
						<span class="freight-user mgl10">
						<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" alt="" />
						<span>唐狮休闲运动馆</span>
						</span>

					</td>

				</tr>
			</table>
			<div class="freight-list-top fn-clear">
				<div class="freight-title fn-left">
					运费模版01
				</div>
				<div class="freight-time fn-right">
					<span class="freight-time-a">最后编辑时间：2016-09-08 10:28</span>
					<a href="javascript:;" class="am-ft-blue mgl10">编辑</a>
					<a href="javascript:;" class="am-ft-gray mgl10">删除</a>
				</div>
			</div>
			<table class="table freight-table table-hover table-striped table-bordered">
				<tr>
					<th class="col-md-4">运送到</th>
					<th class="col-md-2">首件(个)</th>
					<th class="col-md-2">运费(元)</th>
					<th class="col-md-2">续件(个)</th>
					<th class="col-md-2">运费(元)</th>
				</tr>
				<tr>
					<td>
						全国
					</td>
					<td>
						1
					</td>
					<td>
						12.00
					</td>
					<td>
						1
					</td>
					<td>
						2.00
					</td>
				</tr>
				<tr>
					<td>
						全国
					</td>
					<td>
						1
					</td>
					<td>
						12.00
					</td>
					<td>
						1
					</td>
					<td>
						2.00
					</td>
				</tr>
				<tr>
					<td>
						全国
					</td>
					<td>
						1
					</td>
					<td>
						12.00
					</td>
					<td>
						1
					</td>
					<td>
						2.00
					</td>
				</tr>
				<tr>
					<td>
						全国
					</td>
					<td>
						1
					</td>
					<td>
						12.00
					</td>
					<td>
						1
					</td>
					<td>
						2.00
					</td>
				</tr>
				<tr>
					<td>
						全国
					</td>
					<td>
						1
					</td>
					<td>
						12.00
					</td>
					<td>
						1
					</td>
					<td>
						2.00
					</td>
				</tr>
				<tr>
					<td>
						全国
					</td>
					<td>
						1
					</td>
					<td>
						12.00
					</td>
					<td>
						1
					</td>
					<td>
						2.00
					</td>
				</tr>
				<tr>
					<td colspan="5">
						<span>适用微店:</span>
						<span class="freight-user mgl10">
						<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" alt="" />
						<span>唐狮休闲运动馆</span>
						</span>
						<span class="freight-user mgl10">
						<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" alt="" />
						<span>唐狮休闲运动馆</span>
						</span>
						<span class="freight-user mgl10">
						<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" alt="" />
						<span>唐狮休闲运动馆</span>
						</span>

					</td>

				</tr>
			</table>
		</div>

	</div>
</div>

<!--运费模板管理页面-->

<div class="content-wrapper  fn-clear">
	<div class="wx-content pdl20 fn-clear">
		<div class="wx-head freight-header col-md-10 mgb15 pl0 pr0 fn-clear">
			<div class="wx-title fn-left">添加运费模板</div>
			<button type="button" class="unionBriefReturn" ng-click="gobackA()">返回</button>
		</div>
		<div class="col-md-10 mgb15 pl0 pr0 freight-edit-content">
			<div class="freight-name freight-row">
				<span class="freight-info-item">模板名称:</span>
				<input type="text" />
				<span class="am-ft-gray">请在1-12个字内输入</span>
			</div>
			<div class="freight-type fn-clear freight-row">
				<span class="fn-left freight-info-item">模板名称:</span>
				<label for="count" class="fn-left">
					<input type="radio" class="mg0 " name="type" id="count"/>
					按件数
				</label>
				<label for="weight" class="fn-left mgl15">
					<input type="radio" name="type" class="mg0" id="weight"/>
					按重量
				</label>
			</div>
			<div class="freight-name freight-row fn-clear">
				<span class="freight-info-item fn-left">运费设置:</span>
				<span class="am-ft-red">除限定城市区域外其他按默认运费</span>
			</div>
			<div class="freight-set-wraper col-md-12 pr0 mgb20">
				<div class="freight-set-content">
					<div class="freight-set-top mgb10">
						<span>默认运费：</span>
						<span>数量在</span>
						<input type="text" />
						<span>件内</span>
						<input type="text" />
						<span>元运费，每增加</span>
						<input type="text" />
						<span>件加</span>
						<input type="text" />
						<span>元运费。</span>
					</div>
					<table class="table freight-set-table table-hover table-striped table-bordered mgb20">
						<tr>
							<th class="col-md-3">运送到</th>
							<th class="col-md-2">首件(个)</th>
							<th class="col-md-2">运费(元)</th>
							<th class="col-md-2">续件(个)</th>
							<th class="col-md-2">运费(元)</th>
							<th class="col-md-1">操作</th>
						</tr>
						<tr>
							<td>
								<div class="fn-left">未添加地区</div>
								<div class="fn-right">
									<a href="javascript:;">编辑</a>
								</div>
							</td>
							<td>
								<input type="text" />
							</td>
							<td>
								<input type="text" />
							</td>
							<td>
								<input type="text" />
							</td>
							<td>
								<input type="text" />
							</td>
							<td>
								<a href="javascript:;">删除</a>
							</td>
						</tr>
					</table>
					<a href="javascript:;">为指定地区城市设置运费</a>
				</div>
			</div>
			<div class=" freight-row fn-clear">
				<span class="freight-info-item fn-left">适用微店:</span>
				<div class="fn-left fn-clear col-md-11 pl0 pr0">
					<div class="fn-left fn-clear freight-useshop mgr20 mgb15">
						<input type="checkbox" class="mgr5 mgt0">
						<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" alt="" />
						<span class="mgl10">唐狮休闲运动馆</span>
					</div>
					<div class="fn-left fn-clear freight-useshop mgr20 mgb15">
						<input type="checkbox" class="mgr5 mgt0">
						<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" alt="" />
						<span class="mgl10">唐狮休闲运动馆</span>
					</div>
					<div class="fn-left fn-clear freight-useshop mgr20 mgb15">
						<input type="checkbox" class="mgr5 mgt0">
						<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" alt="" />
						<span class="mgl10">唐狮休闲运动馆</span>
					</div>
					<div class="fn-left fn-clear freight-useshop mgr20 mgb15">
						<input type="checkbox" class="mgr5 mgt0">
						<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" alt="" />
						<span class="mgl10">唐狮休闲运动馆</span>
					</div>
					<div class="fn-left fn-clear freight-useshop mgr20 mgb15">
						<input type="checkbox" class="mgr5 mgt0">
						<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" alt="" />
						<span class="mgl10">唐狮休闲运动馆</span>
					</div>
					<div class="fn-left fn-clear freight-useshop mgr20 mgb15">
						<input type="checkbox" class="mgr5 mgt0">
						<img src="http://qineasyimg.oss.aliyuncs.com/product-img/11462/product/20170112164145633屏幕快照 2016-09-20 下午2.11.42.png" alt="" />
						<span class="mgl10">唐狮休闲运动馆</span>
					</div>
				</div>
			</div>
			<div style="padding-left: 70px;">
				<button type="button" class="btn btn-primary addBrandBtn mgl0">保存</button>
				<button type="button" class="btn btn-default mgl10">取消</button>
			</div>
		</div>
	</div>
	
<!--选择区域的弹窗-->
	<div class="area-dialog-content">
		<div class="area-dialog">
			<div class="area-dialog-top fn-clear">
				<span class="fn-left">选择区域</span>
				<a href="javascript:;"><img src="../static/base/images/closelogo.png" alt="" class="fn-right"/></a>
			</div>
			<div class="area-list fn-clear">
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>华东</span>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>上海</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>江苏</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>浙江</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>安徽</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>江西</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
			</div>
			<div class="area-list fn-clear">
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>华北</span>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>北京</span>
					<span class="am-ft-red">(1)</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>天津</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>山西</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>山东</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>河北</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>内蒙古</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
			</div>
			<div class="area-list fn-clear">
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>华中</span>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>湖南</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>湖北</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>河南</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
			</div>
			<div class="area-list fn-clear">
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>华南</span>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>广东</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>广西</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>福建</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>海南</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
			</div>
			<div class="area-list fn-clear">
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>东北</span>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>辽宁</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>吉林</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>黑龙江</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
			</div>
			<div class="area-list fn-clear">
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>西北</span>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>辽宁</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>新疆</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>甘肃</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>宁夏</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>青海</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
			</div>
			<div class="area-list fn-clear">
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>西南</span>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>重庆</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>云南</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>贵州</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>西藏</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>四川</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
			</div>
			<div class="area-list fn-clear">
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>港澳台</span>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>香港</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>澳门</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>台湾</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
			</div>
			<div class="area-list fn-clear">
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>海外</span>
				</div>
				<div class="fn-left area-name">
					<input type="checkbox"/>
					<span>海外</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
			</div>
			<div class="area-dialog-bottom">
				<div >
				<button type="button" class="btn btn-primary addBrandBtn mgl0">确认</button>
				<button type="button" class="btn btn-default mgl10">取消</button>
				</div>
			</div>
		</div>
	
	</div>










<!--选择区域的弹窗-->
</div>






</div>

<!--添加运费模板页面-->

<!--添加运费模板页面-->