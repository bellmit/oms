<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content startsearchOrderForm ----------------->
<div class="content-wrapper content-wrapper-order" ng-show="orderList=='show'">
	<form id="searchOrderForm">

		<div class="col-md-11 pageTitl  fn-clear o2oOrderStoretitle">
			<h2 class="am-ft-16 fn-left">O2O订单列表({{count}})</h2>
			
		</div>
		<div class="fn-clear"></div>
		<!--<div class="codeSelect fn-left o2ocodeSelect mgr20">
				<div class="codeSelectRight codeSelectLeft">
					<input type="text" placeholder="订单号" ng-model="orderId" />
					<button class="codeSelectBtn" ng-click="searchOrder('orderId')">查询</button>
					<button class="tidySelectBtn">收起筛选条件</button>
				</div>
		</div>-->
		<!-- search -->
		<div class="col-md-11 o2oOrderSelect">
			<div class="o2oOrderTime">
				<span>订单时间：</span>
				<input class="laydate-icon" type="text" id="start" name="startTime" readonly="readonly" placeholder="选择时间">
				<span>至</span>
				<input class="laydate-icon" type="text" id="end" name="endTime" readonly="readonly" placeholder="选择时间" />
			</div>
			<div class="o2oOrderStore mgl20 mgr20">
				<span>门店：</span>
				<select name="orgId">
					<!--<option value="">请选择</option>-->
					<option ng-value="orgList.orgId" ng-repeat="orgList in orgLists">{{orgList.shopName}}</option>
				</select>
			</div>
			<div class="o2oOrderType">
				<span>订单类型：</span>
				<select name="status">
					<option value="">请选择</option>
					<option value="0">我发起的</option>
					<option value="1">我接受的</option>
				</select>
			</div>
			<div class="mgl20 o2oOrderSearch">
				<button ng-click="searchOrder('filter')">查询</button>
			</div>
		</div>
	</form>
	<!-- /search -->

	<!-- Main content -->
	<div class="ManColTable col-lg-12 offsetPadding">
		<form>
			<div class="PrivTable ordersTable o2o-ordersTable">
				<table class="table table-hover table-striped unoinListTable vipListTable">
					<tr>
						<th scope="col" style="width: 30%;">商品</th>
						<th scope="col" style="width: 7%;">数量</th>
						<th scope="col" style="width: 8%;">零售价</th>
						<th scope="col" style="width: 12%;">020结算价</th>
						<th scope="col" style="width: 17%;">接单方</th>
						<th scope="col" style="width: 13%;">总金额</th>
					</tr>
				</table>
				<table class="table table-hover table-striped  vipListTable" ng-repeat="orderList in orderLists">
					<tr class="diftr">
						<td colspan="6" class="o2oOrderList">
							<span class="colorGery">订单号：</span><span class="colorBack">{{orderList.order.orderId}}&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span class="colorGery">{{orderList.order.orderTime}}&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span class="colorGery">会员：</span><span class="colorBack">{{orderList.order.memberNo}}（{{orderList.order.memberName}}）&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span class="colorGery">导购：</span><span class="colorBack">{{orderList.order.salesName}}&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span class="colorGery">派单方：</span><span class="colorBack">{{orderList.packages[0].package.orgName}}</span>
						</td>
					</tr>
					<tr>
						<td width="85%" colspan="5" class="por-info">
							<table class="table table-hover table-striped chiledo2oTable" ng-repeat="package in orderList.packages ">
								<tr class="childO2oList">
									<td colspan="4" class="childO2oDetil" ng-if="orderList.packages.pagsize > 1">
										<span class="colorGery"> 子订单号：</span><span class="am-ft-blue">{{package.package.packageNo}}</span>
									</td>
								</tr>
								<tr ng-repeat="orderDetail in package.orderDetail">
									<td style="width: 41%;" class="o2odetil">					
										<div class="o2odetilImage">
											<img ng-src="{{orderDetail.picUrl}}" />
										</div>
										<div class="proDetial o2odetilList">
											 <p class="productTitl">{{orderDetail.proName}}</p>
		                                    <p>款号：<span class="mgr20">{{orderDetail.proModelid}}</span>品牌：{{orderDetail.brandName}}</p>
		                                    <p><span class="mgr20">{{orderDetail.proColorName}}</span><span class="mgr20">{{orderDetail.proSizeName}}</span>吊牌价：<span>{{orderDetail.unitPrice}}</span>元</p>
										</div>
									</td>
									<td style="width: 9%;">{{orderDetail.amount}}件</td>
									<td style="width: 11%;">{{orderDetail.unitPrice | number:2}}元</td>
									<td style="width: 16%;">{{orderDetail.cloudPrice | number:2}}元</td>
									<td ng-if="$index==0" rowspan="{{package.orderDetail.length}}">
									<p class="mgb5">{{package.package.assigneeOrgName}}</p>
                                    <p class="mgb5" ng-if="package.package.packageStatus=='0'">待接单</p>
                                    <p class="mgb5" ng-if="package.package.packageStatus=='1'">待发货</p>
                                    <p class="mgb5" ng-if="package.package.packageStatus=='2'">已发货</p>
                                    <p class="mgb5" ng-if="package.package.packageStatus=='3'">待收货</p>
                                    <p class="mgb5" ng-if="package.package.packageStatus=='4'">已评价</p>
                                    <p class="mgb5" ng-if="package.package.packageStatus=='5'">退款中</p>
                                    <p class="mgb5" ng-if="package.package.packageStatus=='6'">已退款</p>
                                    <a href="javaScript:;" class="am-ft-blue" ng-click="packageInfo(orderList.order.orderId,package.package.packageNo,orderList.order.discount)">子订单详情</a>
									</td> 
								</tr>
							</table>
						</td>
						<td rowspan="3" style="text-align: left;">
							<p><span  style="padding-right:10px;">&nbsp;&nbsp;&nbsp;总金额:</span><span>{{orderList.order.totalPrice | number:2}}元</span></p>
							<p class="mgt10"><span  style="padding-right:10px;">优惠金额:</span><span>{{orderList.order.totalPrice-orderList.order.discount | number : 2}}元</span></p>
							<p class="mgt10"><span  style="padding-right:10px;">&nbsp;&nbsp;&nbsp;优惠后:</span><span>{{orderList.order.discount | number:2}}元</span></p>
						</td>
					</tr>
				</table>
				</td>
				</tr>
				</table>
			</div>
		</form>
	</div>
	<!--分页 start-->
	<div class="pagelist priv-pagelist">
		<div id="paging"></div>
	</div>
	<!--分页 end-->
	<div class="fn-clear"></div>
</div>

<!-- 订单详情 -->
<div ng-show="ordersDet=='show'">
	<jsp:include page="o2oOrdersDet.jsp" />
</div>
<!-- /订单详情 -->