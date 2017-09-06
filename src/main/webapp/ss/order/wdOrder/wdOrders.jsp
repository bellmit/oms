<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!--------------- Content start --------------- -->

<div class="content-wrapper">
	<!-- search -->
	<div class="col-md-11 saleListSearch wdOrderSearch">
		<form id="searchOrderForm ">
			<div class="fn-left">
				<span>商品名称：</span>
				<input type="text" ng-model="search.proName"/>
			</div>
			<div class="fn-left">
				<span>会员昵称：</span>
				<input type="text" ng-model="search.memberName"/>
			</div>
			<div class="fn-left">
				<span>订单号：</span>
				<input type="text" ng-model="search.orderId"/>
			</div>
			<div class="fn-left dealTime">
				<span>下单时间：</span>
				<input class="laydate-icon storeOrderTime" type="text" id="startTime" onclick="laydate({max: laydate.now()})" name="createDate" value="" readonly="readonly" placeholder="" style="height: 34px;" />
				<span class="mgl5 mgr5">至</span>
				<input class="laydate-icon storeOrderTime" type="text" id="endTime" onclick="laydate({max: laydate.now()})" name="endDate" value="" readonly="readonly" placeholder="" style="height: 34px;" />
			</div>
			<div class="fn-left ">
				<button class="selectOrderBtn " ng-click="getWdOrderList()">查询</button>
			</div>
		</form>
	</div>
	<!-- /search -->
	<!-- Main content -->
	<div class="ManColTable col-md-11 mgl20 pl0">
		<!-- 订单列表 -->
		<div class="">
			<div class="ordersTable">
				<div class="oderListNavBox fn-clear">
					<ul class="oderListNav oderListNava fn-clear" >
						<li id="" class="commonOrdera" ng-class="{'orderActivea':tab=='0'}" ng-click="showOrder('0')">
							<a href="javascript:;">全部订单</a>
						</li>
						<li id="" class="commonOrdera" ng-class="{'orderActivea':tab=='1'}" ng-click="showOrder('1')">
							<a href="javascript:;">待支付 </a>
						</li>
						<li id="" class="commonOrdera" ng-class="{'orderActivea':tab=='2'}" ng-click="showOrder('2')">
							<a href="javascript:;">待发货 </a>
						</li>
						<li id="" class="commonOrdera" ng-class="{'orderActivea':tab=='3'}" ng-click="showOrder('3')">
							<a href="javascript:;">待收货 </a>
						</li>
						<li id="" class="commonOrdera" ng-class="{'orderActivea':tab=='4'}" ng-click="showOrder('4')">
							<a href="javascript:;">退款退货</a>
						</li>
						<li id="" class="commonOrdera" ng-class="{'orderActivea':tab=='5'}" ng-click="showOrder('5')">
							<a href="javascript:;">已完成</a>
						</li>
						<li id="" class="commonOrdera" ng-class="{'orderActivea':tab=='6'}" ng-click="showOrder('6')">
							<a href="javascript:;">已关闭</a>
						</li>
					</ul>
				</div>
				<div class="col-md-12  fn-clear paddinglr0">
					<div class="wdOrders-nav">
						<span class="am-ft-14 am-ft-black">查询结果（ 订单数：<span class="am-ft-orangeS">{{count}}</span>条）</span>
						<select name="" id="" class="exportType" ng-model="search.exportType">
							<option value="one">当前页</option>
							<option value="all">全部页</option>
						</select>
						<button class="blue-white-btn fn-right mgt10 " ng-click="exportOrder()">导出订单</button>
					</div>
					<div class="orderTbTabel mgl0">
						<table>
							<tr>
								<th scope="col" width="23%">商品信息</th>
								<th scope="col" width="12%">单价</th>
								<th scope="col" width="8%">数量</th>
								<th scope="col" width="12%">会员昵称</th>
								<th scope="col" width="12%">金额</th>
								<th scope="col" width="10%">订单状态</th>
								<th scope="col" width="10%">操作</th>
							</tr>
							<tr ng-repeat="order in orderList">
								<td colspan="7" class="orderTbReponse orderTbReponsea pt0">
									<table>
										<tr>
											<td colspan="7" class="orderTbTabelCode" style="background: #E9F8FF;text-align: left;">
												<span class="mgr10 am-ft-gray">订单号：{{order.orderId}} </span>
												<span class="am-ft-gray">{{order.orderTime}}</span>
											</td>
										</tr>
										<tr ng-repeat="orderDetail in order.orderDetails">
											<td scope="col" width="23%" class="orderTbProBox">
												<div class="orderTbUnit img-set">
													<img ng-src="{{orderDetail.picUrl}}" />
												</div>
												<div class="orderTbPro">
													<p>{{orderDetail.proName}}</p>
													<p class="mgt5">
														<span ng-if="orderDetail.productSpec.item1!=''">{{orderDetail.productSpec.item1}} </span>
														<span ng-if="orderDetail.productSpec.item2!=''">{{orderDetail.productSpec.item2}} </span>
														<span ng-if="orderDetail.productSpec.item3!=''">{{orderDetail.productSpec.item3}}</span>
														<span ng-if="orderDetail.productSpec.proColorName!=''">{{orderDetail.productSpec.proColorName}} </span>
														<span ng-if="orderDetail.productSpec.proSizeName!=''">{{orderDetail.productSpec.proSizeName}}</span>
													</p>
												</div>
											</td>
											<td rowspan="" width="12%" scope="col">
												{{orderDetail.unitPrice}}元
											</td>
											<td rowspan="" width="8%">
												{{orderDetail.amount}}
											</td>
											<td rowspan="{{order.orderDetails.length}}" width="12%" ng-if="$index==0">
												{{order.memberName}}
											</td>
											<td rowspan="{{order.orderDetails.length}}" width="12%" ng-if="$index==0">
												<p class="am-ft-orange">{{order.totalPrice}}元</p>
												<p>（运费：{{order.buyPostPrice}}元）</p>
												<p ng-if="order.couponAmt>0">优惠：-{{order.couponAmt}}元</p>
												<p ng-if="order.couponAmt==0">优惠：0.00元</p>
											</td>
											<td rowspan="{{order.orderDetails.length}}" width="12%" ng-if="$index==0">
												<p ng-class="{'am-ft-orange':order.orderStatus=='未支付','am-ft-blue':order.orderStatus=='未发货','am-ft-orange':order.orderStatus=='已发货'}">{{order.orderStatus}}</p>
												<p class="am-ft-black">
													<a href="javascript:;" ng-click='checkDetail(this)'>查看详情</a>
												</p>
											</td>
											<td rowspan="{{order.orderDetails.length}}" width="12%" ng-if="$index==0">
												<button class="blueGroundWhiteBtn" ng-if="order.orderStatus=='未发货'" ng-click="showLogiticInfo(this)">确认发货</button>
												<button class="blueGroundWhiteBtn " ng-if="order.orderStatus=='未支付'" ng-click="showCloseOrder(this)">关闭订单</button>
												<button class="blueGroundWhiteBtn " ng-if="order.orderStatus=='待退款'" ng-click="showRefundOrder(this)">同意退款</button>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="fn-clear"></div>
			</div>

		</div>
		<div class="pagelist priv-pagelist">
            <div id="paging"></div>
        </div>
		<div class="fn-clear"></div>
		<!-- /订单列表 -->
	</div>
	<!--订单详情
	<div class="ManColTable col-lg-12 mgt30" ng-hide="true" id="orderInfo">
		<div class="col-md-10 orderTbDetilNav" style="border:none">
			<span class="">订单号：</span>
			<span>{{orderDetail.orderId}}</span>
			<span class="mgl15">{{orderDetail.orderTime.substring(0,19)}}</span>
			<span class="mgl15">店铺：{{chooseShopName}}</span>
		</div>
		<div class="col-md-10 orderTbDetilNav" style="border:none">
			<div class="fn-left mgr20">
				<span>会员：{{orderDetail.memberName}}</span>&nbsp;&nbsp;&nbsp;&nbsp;

			</div>
			<!--<div class="fn-left mgr20" style="width: 7%;">
				<span class="am-ft-red" >{{orderDetail.orderStatus}}</span>
			</div>
		</div>
		<div class="col-md-10 orderTbDetilNav mgt10" style="border:none">
			<div class="fn-left mgr20">
				<span class="">收货人姓名：{{orderDetail.logiticInfo.consignee}}</span>
				<span class="mgl35">收货人电话：{{orderDetail.logiticInfo.mobile}}</span>
			</div>
		</div>
		<div class="col-md-10 orderTbDetilNav mgt10" style="border:none">
			<div class="fn-left mgr20">
				<span class="">收货人地址：{{orderDetail.logiticInfo.province}}{{orderDetail.logiticInfo.city}}{{orderDetail.logiticInfo.district}}{{orderDetail.logiticInfo.address}}</span>
			</div>
		</div>
		<div class="col-md-10" class="orderTbProDetil">
			<p class="orderTbProTitle">商品信息</p>
			<table class="table table-hover table-striped">
				<tr>
					<th colspan="3">
						<div class="col-md-12">
							<div style="width: 45%;float:left;text-align: center;">商品</div>
							<div style="width: 25%;float:left;text-align: center;">数量</div>
							<div style="width: 30%;float:left;text-align: center;">单价</div>
						</div>
					</th>
					<th style="text-align: center;">
						实付金额
					</th>
				</tr>
				<tr>
					<td colspan="3" class="por-info col-md-8">
						<div class="proDetialOne col-md-12" style="padding: 0;margin: 0;" ng-repeat="orderDetail in orderDetail.orderDetails">
							<div class="proDetial col-md-4" style="width: 45%; padding: 0;margin: 0;">
								<div class="proDetial">
									<p>{{orderDetail.proName}}</p>
									<p>
										<span ng-if="orderDetail.productSpec.proColorName != ''">颜色：{{orderDetail.productSpec.proColorName}}</span>
										<span class="mgl15" ng-if="orderDetail.productSpec.proSizeName != ''">尺码：{{orderDetail.productSpec.proSizeName}}</span></p>
									<span class="" ng-if="orderDetail.productSpec.item1 != ''">{{orderDetail.productSpec.item1}}</span></p>
									<span class="" ng-if="orderDetail.productSpec.item2 != ''">{{orderDetail.productSpec.item2}}</span></p>
									<span class="" ng-if="orderDetail.productSpec.item3 != ''">{{orderDetail.productSpec.item3}}</span></p>
									<p><span>款号：{{orderDetail.proModelid}}</span></p>
									<p><span>吊牌价：￥{{orderDetail.unitPrice}}</span></p>
								</div>
							</div>
							<div class="buyProNum col-md-4" style="width: 25%; padding: 0;text-align: center;"><span>{{orderDetail.amount}}</span></div>
							<div class="buyProUnit col-md-4" style="width: 25%; padding:  0;text-align: center;"><span>{{orderDetail.totalPrice}}元</span></div>
							<div class="fn-clear"></div>
						</div>
					</td>
					<td class="o2oprice col-md-4">
						<span>{{orderDetail.payPrice}}元</span>
					</td>
				</tr>
			</table>
		</div>
		<div class="fn-clear"></div>
	</div>-->
</div>
<!--立即发货弹窗-->
<div class="area-dialog-content" ng-show="postWxProduct">
	<div class="tborder-dialog tborder-dialog-send " id="wxSendDialog">
		<div class="tborder-dialog-header fn-clear">
			<span class="fn-left">立即发货</span>
			<a href="javascript:;" class="fn-right" ng-click="closeDia()">
				<img src="../static/base/images/closelogo.png" alt="" />
			</a>
		</div>
		<div class="tborder-dialog-content">
			<div class="tborder-dia-line mgb20">
				<span>物流公司:</span>
				<select name="" id="" class="sendcompany" ng-model="logitic" ng-options="logiticMap.logiticCompanyName for logiticMap in logiticMaps">
					
				</select>
			</div>
			<div class="tborder-dia-line mgb20">
				<span>快递单号:</span>
				<input type="text" ng-model="logiticObj.logiticNum" />
			</div>
			<span class="am-ft-red">{{warn}}</span>
			<div class="button-content">
				<button type="button" class="btn btn-primary addBrandBtn mgl0" ng-click="updateLogiticInfo()">确认</button>
				<button type="button" class="btn btn-default mgl20" ng-click="closeDia()">取消</button></div>
			</div>
	</div>
</div>
<div class="maskBgw " ng-if="closeOrder">
	<div class="mask-container">
		<div class="mask-top fn-clear">
			<p class="fn-left">确认关闭订单</p>
			<a href="javascript:;">
				<img ng-click="closeDia()" src="http://static.qineasy.com/base/images/closelogo.png" class="fn-right" alt="" />
			</a>
		</div>
		<div class="mask-content mask-contenta" style="padding:50px 100px;">
			<form action="" class="info-form fn-clear" id="">
				<div class="continue-frame">
					<div class="continue-frame-content">
						<span class="am-ft-14 color666">订单号：</span>
						<span>{{closeOrderInfo.orderId}}</span>
					</div>
				</div>
			</form>
		</div>
		<div class="mask-bottom fn-clear">
			<button class="commit fn-left" ng-click="sureCloseOrder()">确认</button>
			<button class="cancel fn-left" ng-click="closeDia()">取消</button>
		</div>
	</div>
</div>
<!--立即发货弹窗-->
<!--订单详情-->
<div class="maskBgw " ng-if="refundOrder">
	<div class="mask-container">
		<div class="mask-top fn-clear">
			<p class="fn-left">确认退款</p>
			<a href="javascript:;">
				<img ng-click="closeDia()" src="http://static.qineasy.com/base/images/closelogo.png" class="fn-right" alt="" />
			</a>
		</div>
		<div class="mask-content mask-contenta" style="padding:50px 100px;">
			<form action="" class="info-form fn-clear" id="">
				<div class="continue-frame">
					<div class="continue-frame-content">
						<span class="am-ft-14 color666">订单号：</span>
						<span>{{refundOrderInfo.orderId}}</span>
					</div>
				</div>
			</form>
		</div>
		<div class="mask-bottom fn-clear">
			<button class="commit fn-left" ng-click="sureRefundOrder()">确认</button>
			<button class="cancel fn-left" ng-click="closeDia()">取消</button>
		</div>
	</div>
</div>
<!--订单详情-->

<script>
	$(function() {
		var pIndex;
		$(".oderListNava").on("click", "li", function() {
			pIndex = $(this).index();
			$(".oderListNava li").each(function(index, ele) {
				$(this).removeClass("orderActivea")
			});
			$(".oderListNava li").eq(pIndex).addClass("orderActivea");
		});
		$("#wxSendDialog").center();
		$(".mask-container").center();
	});
</script>