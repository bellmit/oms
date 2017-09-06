<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--添加微店成功页面-->
<div class="content-wrapper content-forwardAdd-wrapper fn-clear">
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
						<img ng-src="{{wxShopInfo.shopLogo}}" alt="" />
					</div>
					<div class="fn-left  pdl15 wx-shop-info">
						<p class="wx-shopname mgb5">{{wxShopInfo.shopName}}</p>
						<p class="wx-shopaddr">
							<span>{{wxShopInfo.province}}</span> &nbsp;&nbsp;
							<span>{{wxShopInfo.city}}</span> &nbsp;&nbsp;
							<span ng-if="wxShopInfo.shopIndustry=='1'">食品</span>
							<span ng-if="wxShopInfo.shopIndustry=='2'">服装</span>
						</p>
						<p class="wx-manager">
							<span>微信管理员：{{wxShopInfo.contacts}} ({{wxShopInfo.shopTel}})</span> &nbsp;&nbsp;
							<span>创建时间：{{wxShopInfo.createTime}}</span>
						</p>
					</div>
				</div>
				<p class="warn-black mgb10">用微信扫一扫，看看你的店铺</p>
				<div class="wx-shop-code mgb20">
					<div class="qrcode" id="qrcodea">
					</div>
					<!--<img src="../static/base/images/logo_jindong.png" alt="" />-->
				</div>
				<p class="mgb20">
					<span>店铺地址：{{wxShopInfo.shopUrl}} </span>
					<a href="javascript:;" class="mgl10 " id="copyurl" data-clipboard-text="{{wxShopInfo.shopUrl}}">复制链接</a>
				</p>
				<div class="addadjustshop mgb25">
					<a href="javascript:;" class="mgl0" ng-click="downLoadQrCode()">下载二维码</a>
				</div>
			</div>
		</div>
		<button type="button" class="btn btn-primary addBrandBtn mgl0 mgt20" ng-click="addWxShop()">继续添加微店</button>
	</div>
</div>

<!--添加微店成功页面-->
