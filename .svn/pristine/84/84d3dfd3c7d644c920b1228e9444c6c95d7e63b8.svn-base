<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--------------- Content start ----------------->
<div class="content-wrapper content-wrapper-settled">
	<!--<div class="col-md-11 pageTitl">-->
	<!--<h2 class="am-ft-16 fn-left">订单详情</h2>-->
	<!--<a href="javascript:;" class="line-btn fn-right" ng-click="callback()">返回</a>-->
	<!--</div>
        <div class="fn-clear"></div>-->

	<div class="col-md-11 fn-clear order-topinfo order-topinfoa">
		<!--<p><span>日期：{{packageTime}}</span></p>-->
		<p class="fn-left">订单号：<strong>{{orderIda}}</strong></p>
		<p class="fn-left" ng-if="orderList.packages.pagsize > 1">子订单号：<strong>{{packageNoa}}</strong></p>
		<p class="fn-left">
			<span class="mgl10" ng-if="packageDetail.package.packageStatus=='0'">待接单</span>
			<span class="mgl10" ng-if="packageDetail.package.packageStatus=='1'">待发货</span>
			<span class="mgl10" ng-if="packageDetail.package.packageStatus=='2'">已发货</span>
			<span class="mgl10" ng-if="packageDetail.package.packageStatus=='3'">待收货</span>
			<span class="mgl10" ng-if="packageDetail.package.packageStatus=='4'">已评价</span>
			<span class="mgl10" ng-if="packageDetail.package.packageStatus=='5'">退款中</span>
			<span class="mgl10" ng-if="packageDetail.package.packageStatus=='6'">已退款</span>
		</p>
		<a href="javascript:;" class="line-btn fn-right" ng-click="callback()" style="line-height: 26px;">返回</a>
	</div>
	<!-- Main content -->
	<div class="ManColTable col-lg-9 mgb20 orderdetailcontent">
		<dl class="settle-titl o2oorderowner">
			<!--<dt>O2O接收信息</dt>-->
			<dd class="fn-clear">
				<p class="fn-left">派单方：<strong>{{packageDetail.package.orgName}}</strong></p>
				<p class="fn-left">接单方：<strong>{{packageDetail.package.assigneeOrgName}}</strong></p>
				<!--<p class="col-md-3">O2O结算价：<strong>{{}}</strong>元</p>-->
				<p class="fn-clear"></p>
			</dd>
		</dl>
		<dl class="settle-titl settle-titl2 ordercost">
			<dt class="col-md-6 pl0">商品信息</dt>
			<dd class="fn-clear">
				<p class="col-md-3 pr0 fn-right text-right">
					共<strong>{{totalAmount}}</strong>件&nbsp;&nbsp;合计&nbsp;(含运费)&nbsp;:&nbsp;&nbsp;<strong>{{discount | number:2}}</strong>元
				</p>
			</dd>
		</dl>
		<!-- 商品列表 -->
		<div class="ordersTable">
			<table class="table table-hover table-striped">
				<tr>
					<th class="col-md-6">商品</th>
					<th class="col-md-2">零售价</th>
					<th class="col-md-2">O2O结算价</th>
					<th class="col-md-2">数量</th>
				</tr>
				<tr ng-repeat="info in packageDetail.orderDetail">
					<td class="por-info">
						<div class="inner-Info" ng-if="info.amount!=0" style="padding: 5px;">
							<div class="por-img">
								<img ng-src="{{info.picUrl}}" alt="商品图片" style="width: 60px;height:60px;border:1px solid #dcdce7" />
							</div>
							<div class="">
								<p class="productTitl"><strong>{{info.proName}}</strong></p>
								<p>款号：<span class="mgr20">{{info.proModelid}}</span>品牌：{{info.brandName}}</p>
								<p><span class="mgr20">{{info.proColorName}}</span><span class="mgr20">{{info.proSizeName}}</span>吊牌价：<span>{{info.unitPrice | number:2}}</span>元</p>
							</div>
							<div class="fn-clear"></div>
						</div>
					</td>
					<td class="o2oprice">
						<p><strong>{{info.unitPrice | number:2}}</strong>元</p>
					</td>
					<td class="o2oprice">
						<p><strong>{{info.cloudPrice | number:2}}</strong>元</p>
					</td>
					<td class="o2oprice">
						<p ng-if="info.amount!=0">
							<strong>{{info.amount}}</strong>
						</p>
					</td>
				</tr>
			</table>
			<div class="fn-clear"></div>
			<!-- /商品列表 -->
			<div class="settle-titl mgt0  ordermemberinfobox orderdet-bottom fn-clear">
				<dl class="mgt0 orderdet-bottom col-md-4 fn-left ordermemberinfo">
					<dt>会员信息</dt>
					<dd>
						<img class="member-Img" ng-src="{{orderDetail.order.headpicpath}}" alt="会员头像" />
						<div class="member-detinfo">
							<p ><span class="mgr20">{{orderDetail.order.memberName}}</span> <span class="">{{orderDetail.order.gradeName}}</span></p>
							<!--<p class="col-md-5"><span>{{orderDetail.order.gradeName}}</span></p>-->
							<p class="col-md-10"><span>{{orderDetail.order.memberNo}}</span></p>
						</div>
						<div class="fn-clear"></div>
					</dd>
					<dd class="fn-clear"></dd>
				</dl>
				<dl class=" col-md-4 orderdet-bottom fn-left ordermemberinfo">
					<dt>收货人信息</dt>
					<dd>
						<p>
							<span >{{packageDetail.package.consignee}}</span>
							<span >{{packageDetail.package.mobile}}</span>
						</p>
						<p>
							<span >{{packageDetail.package.province}}&nbsp;&nbsp;{{packageDetail.package.city}}&nbsp;&nbsp;{{packageDetail.package.district}}&nbsp;&nbsp;{{packageDetail.package.address}}</span>
						</p>
						<p>
							<span >{{packageDetail.package.zip}}</span>
						</p>
					</dd>
					<dd class="fn-clear"></dd>
				</dl>
				<dl class=" col-md-4 orderdet-bottom fn-left ordermemberinfo">
					<dt>物流信息</dt>
					<dd>
						<p>
							<span class="" ng-if="packageDetail.package.logiticType=='1'">圆通</span>
							<span class="" ng-if="packageDetail.package.logiticType=='2'">申通</span>
						</p>
						<p>
							<span class="">{{packageDetail.package.logiticNum}}</span>
						</p>
					</dd>
					<dd class="fn-clear"></dd>
				</dl>
			</div>
			<dl class="settle-titl settle-titl2 orderdet-bottom ordertime">
				<dt>订单时间</dt>
				<dd>
					<p ng-if="packageDetail.package.orderTime!=''&&packageDetail.package.orgName!=''">
						<span>下单时间：</span>
						<span>{{packageDetail.package.orderTime}}</span>
						<span class="mgl10">{{packageDetail.package.orgName}} &nbsp;&nbsp;&nbsp;已下单</span>
					</p>
					<p ng-if="packageDetail.package.packageGetTime!=''&&packageDetail.package.assigneeOrgName!=''">
						<span>接单时间：</span>
						<span>{{packageDetail.package.packageGetTime}}</span>
						<span class="mgl10">{{packageDetail.package.assigneeOrgName}}&nbsp;&nbsp;&nbsp;已确认</span>
					</p>
					<p ng-if="packageDetail.package.logiticTime!=''&&packageDetail.package.assigneeOrgName!=''">
						<span>发货时间：</span>
						<span>{{packageDetail.package.logiticTime}}</span>
						<span class="mgl10">由{{packageDetail.package.assigneeOrgName}}安排发货</span>
					</p>
				</dd>
			</dl>
			<div class="fn-clear"></div>
		</div>
		<div class="fn-clear"></div>
	</div>

</div>