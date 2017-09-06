<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--微店列表页面-->
<div class="content-wrapper  fn-clear">
	<div class="wx-content pdl20">
		<div class="wx-head col-md-10 mgb10 pl0 pr0 fn-clear">
			<div class="wx-title fn-left">微店列表 ({{shopListCount}})</div>
			<button class="fn-right wx-green-btn">配置微信公众号</button>
		</div>
		<div class="col-md-10  pl0 pr0 fn-clear">
			<div class="wx-shop-list fn-clear pt20 pb15 pdl20 mgb10" ng-repeat = "shopList in shopLists">
				<div class="fn-left">
					<div class="mgb25 fn-clear">
						<div class="fn-left wx-shop-logo">
							<img ng-src="{{shopList.shopLogo}}" alt="" />
						</div>
						<div class="fn-left  pdl15 wx-shop-info">
							<p class="wx-shopname mgb5"><span>{{shopList.shopName}}</span> <a href="javascript:;" class="am-ft-12" ng-click="editWxShop(shopList)">编辑</a></p>
							<p class="wx-shopaddr">
								<span>{{shopList.province}}</span> &nbsp;&nbsp;
								<span>{{shopList.city}}</span> &nbsp;&nbsp;
								<span ng-if="shopList.shopIndustry=='1'">食品</span>
								<span ng-if="shopList.shopIndustry=='2'">服装</span>
							</p>
							<p class="wx-manager">
								<span>平均评分：</span> <span class="am-ft-orange">
									<span ng-if="shopList.score!=''">{{shopList.score}}</span>
									<span ng-if="shopList.score==''">0</span>
									分</span>&nbsp;&nbsp;
								<span>好评：</span> <span class="am-ft-orange">
									<span ng-if="shopList.good!=''">{{shopList.good}}</span>
									<span ng-if="shopList.good==''">0</span>
									个
								</span>&nbsp;&nbsp;
								<span>中评：</span> <span class="am-ft-orange">
									<span ng-if="shopList.midder!=''">{{shopList.midder}}</span>
									<span ng-if="shopList.midder==''">0</span>
									个
									</span>&nbsp;&nbsp;
								<span>差评：</span> <span class="am-ft-orange">
									<span ng-if="shopList.bad!=''">{{shopList.bad}}</span>
									<span ng-if="shopList.bad==''">0</span>
									个
									</span>&nbsp;&nbsp;
							</p>
						</div>
					</div>
					<div>
						<span style="color:#333" class="shopurl">店铺地址：{{shopList.shopUrl}}</span>
						<a href="javascript:;" class="mgl10 copyurl"  data-clipboard-text="{{shopList.shopUrl}}">复制链接</a>
						<a href="javascript:;" class="mgl10" ng-click="shouWxCode($event,shopList)" >
						<!--<a href="javascript:;" class="mgl10" ng-mouseover="shouWxCode($event,shopList)" >-->
							<img src="../static/base/images/icon_code_small.png" alt="" />
						</a>
					</div>
				</div>
				<div class="fn-right mgr20 wx-list-right">
					<p class="am-ft-gray mgb5">微信管理员：{{shopList.contacts}} ({{shopList.shopTel}})</p>
					<p class="am-ft-gray">创建时间：{{shopList.createTime}}</p>
				</div>
			</div>
		<div class="wx-list-bottom fn-clear col-md-10">
			<div class="fn-left mgt15">
				<button type="button" class="btn btn-primary addBrandBtn mgl0 " ng-click="toAddWxShop()">继续添加微店</button>
			</div>
			<div class="fn-left mgl35">
				<div class="two-code-content fn-hide" ng-mouseleave="hideWxCode($event)">
					<p>
						<!--<img src="../static/base/images/bin-code.jpg" alt="" />-->
						<div id="qrcode" class="qrcode"></div>
					</p>
					<p class="mgt5">微信扫一扫进入店铺</p>
					<p class="mgt10 shopUrl" style="width:112px">
						店铺地址：{{dialogUrl}}
					</p>
					<div class="addadjustshop mgt15" >
						<a ng-href="javascript:;" class="mgl0" ng-click = "downLoadQrCode()">下载二维码</a>
						<!--<button href="javascript:;" ng-click="addShop()" ng-hide="obj.scan">添加门店</button>-->
					</div>
				</div>
			</div>
		</div>

	</div>

</div>
<script>
	
</script>
<!--微店列表页面-->
