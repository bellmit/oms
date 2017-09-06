<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!--------------- Content start --------------- -->

<div class="content-wrapper">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">订单列表</h2>
	</div>
	<!-- search -->
	<div class="col-md-11 saleListSearch">
		<form id="searchOrderForm">
			<div class="fn-left">
				<span>订单时间：</span>
				<input class="laydate-icon storeOrderTime" name="time" type="text" id="data" onclick="laydate({max: laydate.now()})" name="createDate" value="" readonly="readonly" placeholder="选择时间" style="height: 34px;" />
			</div>
			<!--<div class="fn-left" style="width: 22%;">
				<span>订单状态：</span>
				<select class="storeOrderStatus" id="selectStatus_id">
					<option selected="selected" value="">请选择</option>
					<option value="1">已结算</option>
					<option value="2">O2O发起</option>
					<option value="3">店铺已接受未发货</option>
					<option value="4">店铺未接收订单</option>
					<option value="5">已发货订单完结</option>
					<option value="6">订单未支付</option>
					<option value="7">订单已支付</option>
					<option value="8">订单支付失败</option>
					<option value="9">已退单</option>
				</select>
			</div>-->
			<div class="fn-left mgl20 mgr20">
				<span>门店：</span>
				<select class="storeOrderName" id="orgId" name="orgId">
					<!--<option value="">请选择</option>-->
					<option ng-value="orgList.orgId" ng-selected="orgList.selected" ng-repeat="orgList in orgLists">{{orgList.shopName}}</option>
				</select>
				<!--<span>门店：</span>-->
				<!--<select class="storeOrderName" ng-model="orgIdL" id="orgId" ng-options="orgList.shopName as orgList.orgId for orgList in orgLists">-->
				<!--<option value="">请选择</option>-->

			</div>
			<!--<div class="fn-left " style="width: 31%;">
				<span>订单号：</span>
				<input type="text" class="storeOrderNum" id="orderId" />
			</div>-->
			<div class="fn-left">
				<button class="selectOrderBtn" ng-click="dayTargetSearch()">查询</button>
			</div>
		</form>
	</div>
	<!-- /search -->

	<!-- Main content -->
	<div class="ManColTable col-lg-12">
		<!-- 订单列表 -->
		<div class="">
			<div class="ordersTable">
				<div class="oderListNavBox fn-clear">
					<ul class="oderListNav fn-clear">
						<li id="StoreOrder" class=" orderActive commonOrder" ng-click="showOrder('1')">
							<a href="javascript:;">门店POS</a>
						</li>
						<li id="O2OOrder" class="commonOrder" ng-click="showOrder('2')">
							<a href="javascript:;">云仓O2O订单</a>
						</li>
						<li id="ChatOrder" class="commonOrder" ng-click="showOrder('3')">
							<a href="javascript:;">微店订单</a>
						</li>
						<li id="ChatOrder" class="commonOrder" ng-click="showOrder('4')">
							<a href="javascript:;">电商订单</a>
						</li>
					</ul>
				</div>
				<div ng-show="orderType=='1'">
					<table class="table table-hover table-striped">
						<tr class="thHead">
							<!--<th scope="col" style="width: 24%;">商品</th>
							<th scope="col" style="width: 24%;">数量</th>
							<th scope="col" style="width: 12%;">金额</th>
							<th scope="col" style="width: 20%;">总金额</th>-->
							<th class="col-md-4">商品</th>
							<th class="col-md-2">数量</th>
							<th class="col-md-2">金额</th>
							<th class="col-md-2">实付金额</th>
							<th class="col-md-2">门店</th>
						</tr>
						<!-- 待接单-->
					</table>
					<!---->
					<table class="table table-hover table-striped" ng-repeat="item in orderList">
						<tr class="diftr fn-clear">
							<td colspan="5" class="storelistNav">
								<div class="fn-left mgr20" style="width: 57%;">
									<span>{{item.order.orderTime}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
									<span>订单号：
	                                    {{item.order.orderId}}
	                                </span>
								</div>
								<!--<div class="fn-left mgr20" style="width: 19%;">
	                                <span >订单类型：</span>
	                                <span class="" ng-if="item.order.orderType == '1'">门店POS</span>
	                                <span class="" ng-if="item.order.orderType == '2'">云仓020订单</span>
	                                <span class="" ng-if="item.order.orderType == '3'">微店订单</span>
	                                <span class="" ng-if="item.order.oldOrderId ==''">&nbsp;&nbsp;&nbsp;&nbsp;销售单</span>
	                                <span class="" ng-if="item.order.oldOrderId !=''">&nbsp;&nbsp;&nbsp;&nbsp;补单</span>
                                </div>-->
								<div class="fn-left mgr20" style="width: 28%;">
									<span>会员：{{item.order.accountId}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
									<span>导购：{{item.order.salesName}}</span>
								</div>
								<div class="fn-left mgr20" style="width: 7%;">
									<span class="am-ft-red" ng-if="item.order.orderStatus == '3'">未发货</span>
									<span class="am-ft-red" ng-if="item.order.orderStatus == '4'">未接单</span>
									<span ng-if="item.order.orderStatus == '5'">已发货</span>
									<span class="am-ft-red" ng-if="item.order.orderStatus == '6'">未付款</span>
									<span ng-if="item.order.orderStatus == '7'">已支付</span>
									<span class="am-ft-red" ng-if="item.order.orderStatus == '8'">支付失败</span>
									<span class="am-ft-red" ng-if="item.order.orderStatus == '9'">已退单</span>
								</div>
							</td>
						</tr>
						<tr>
							<!---->
							<td colspan="3" class="por-info col-md-8">
								<div class="proDetialOne col-md-12" style="padding: 0;margin: 0;" ng-repeat="orderDetail in item.orderDetails">
									<div class="proDetial col-md-6" style="padding: 0;margin: 0;">
										<div class="proDetial">
											<p>{{orderDetail.proName}}</p>
											<p><span>颜色：{{orderDetail.proColorName}}</span><span>&nbsp;&nbsp;&nbsp;尺码：{{orderDetail.proSizeName}}</span></p>
											<p><span>吊牌价：￥{{orderDetail.unitPrice}}</span></p>
										</div>
									</div>
									<div class="buyProNum col-md-3" style="padding: 0;text-align: center;"><span>{{orderDetail.amount}}</span></div>
									<div class="buyProUnit col-md-3" style="padding: 0;text-align: center;"><span>{{orderDetail.totalPrice}}元</span></div>
									<div class="fn-clear"></div>
								</div>
							</td>
							<td class="o2oprice col-md-2">
								<span>{{item.order.discount}}元</span>
							</td>
							<td class="col-md-2">
								<span>{{item.order.orgName}}</span>
							</td>
						</tr>
					</table>
					<!--分页 start-->
					<div class="pagelist priv-pagelist">
						<div id="paging"></div>
					</div>
					<!--分页 end-->
				</div>
				<div ng-show="orderType=='2'">
					<form>
						<div class="PrivTable ordersTable o2o-ordersTable" style="margin:0">
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
								<tr class="diftr ">
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
												<!-- <td ng-if="package.package.packageStatus=='0'">待接单</td>
												<td ng-if="package.package.packageStatus=='1'">待发货</td>
												<td ng-if="package.package.packageStatus=='2'">已发货</td>
												<td ng-if="package.package.packageStatus=='3'">待收货</td>
												<td ng-if="package.package.packageStatus=='4'">已评价</td>
												<td ng-if="package.package.packageStatus=='5'">退款中</td>
												<td ng-if="package.package.packageStatus=='6'">已退款</td> -->
											</tr>
											<tr ng-repeat="orderDetail in package.orderDetail">
												<td style="width: 41%;" class="o2odetil">
													<div class="o2odetilImage">
														<img ng-src="{{orderDetail.picUrl}}" />
													</div>
													<div class="proDetial o2odetilList">
														<p class="productTitl">{{orderDetail.proName}}</p>
														<p>款号：<span class="mgr20">{{orderDetail.proModelid}}</span>品牌：{{orderDetail.brandName}}</p>
														<p><span class="mgr20">{{orderDetail.proColorName}}</span><span class="mgr20">{{orderDetail.proSizeName}}</span>吊牌价：<span>{{orderDetail.unitPrice | number:2 }}</span>元</p>
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
													<!--<a href="javaScript:;" class="am-ft-blue" ng-click="packageInfo(orderList.order.orderId,package.package.packageNo)">子订单详情</a>-->
												</td>
											</tr>
										</table>
									</td>
									<td rowspan="3" style="text-align: left;">
										<p><span style="padding-right:10px;">&nbsp;&nbsp;&nbsp;总金额:</span><span>{{orderList.order.totalPrice | number:2}}元</span></p>
										<p class="mgt10 mgl10"><span style="padding-right:10px;">优惠金额:</span><span>{{orderList.order.totalPrice-orderList.order.discount | number : 2}}元</span></p>
										<p class="mgt10"><span style="padding-right:10px;">&nbsp;&nbsp;&nbsp;优惠后:</span><span>{{orderList.order.discount | number:2}}元</span></p>

									</td>
								</tr>
							</table>
							</td>
							</tr>
							</table>
						</div>
					</form>
					<!--分页 start-->
					<div class="pagelist priv-pagelist">
						<div id="O2Opage"></div>
					</div>
					<!--分页 end-->
				</div>
				<div ng-show="orderType=='3'">
					<table class="table table-hover table-striped" id="hello">
						<tr class="thHead">
							<!--<th scope="col" style="width: 24%;">商品</th>
							<th scope="col" style="width: 24%;">数量</th>
							<th scope="col" style="width: 12%;">金额</th>
							<th scope="col" style="width: 20%;">总金额</th>-->
							<th class="col-md-4">商品</th>
							<th class="col-md-1">数量</th>
							<th class="col-md-2">金额</th>
							<th class="col-md-3">实付金额</th>
							<!--<th class="col-md-2">门店</th>-->
							<th class="col-md-2">操作</th>
						</tr>
						<!-- 待接单-->
					</table>
					<!---->
					<table class="table table-hover table-striped" ng-repeat="item in orderList track by $index" id="wxorder{{item.order.orderId}}">
						<tr class="diftr fn-clear">
							<td colspan="5" class="storelistNav">
								<div class="fn-left mgr20" style="width: 57%;">
									<span class="mgr15">店铺：
	                                    {{chooseShopName}}
	                                </span>
									<span>{{item.orderTime}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
									<span>订单号：
	                                    {{item.orderId}}
	                                </span>
	                                
								</div>
								<div class="fn-left mgr20" style="width: 28%;">
									<span>会员：{{item.memberName}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
									<!--<span>导购：{{item.order.salesName}}</span>-->
								</div>
								<div class="fn-left mgr20" style="width: 7%;">
									<span class="am-ft-red">{{item.orderStatus}}</span>
								</div>
							</td>
						</tr>
						<tr>
							<!---->
							<td colspan="3" class="por-info col-md-7">
								<div class="proDetialOne col-md-12" style="padding: 0;margin: 0;" ng-repeat="orderDetail in item.orderDetails">
									<div class="proDetial col-md-6" style="padding: 0;margin: 0;">
										<div class="proDetial">
											<p>{{orderDetail.proName}}</p>
											<p>款号：{{orderDetail.proModelid}}</p>
											<p>
												<span class="mgr5" ng-if="orderDetail.productSpec.proColorName!=''">{{orderDetail.productSpec.proColorName}}</span>
												<span class="mgr5" ng-if="orderDetail.productSpec.proSizeName!=''">{{orderDetail.productSpec.proSizeName}}</span>
												<span class="mgr5" ng-if="orderDetail.productSpec.item1!=''">{{orderDetail.productSpec.item1}}</span>
												<span class="mgr5" ng-if="orderDetail.productSpec.item2!=''">{{orderDetail.productSpec.item2}}</span>
												<span class="mgr5" ng-if="orderDetail.productSpec.item3!=''">{{orderDetail.productSpec.item3}}</span>
											</p>
											<p><span>吊牌价：￥{{orderDetail.unitPrice}}</span></p>
										</div>
									</div>
									<div class="buyProNum col-md-3" style="padding: 0;text-align: center;"><span>{{orderDetail.amount}}</span></div>
									<div class="buyProUnit col-md-3" style="padding: 0;text-align: center;"><span>{{orderDetail.totalPrice}}元</span></div>
									<div class="fn-clear"></div>
								</div>
							</td>
							<td class="o2oprice col-md-3">
								<span>{{item.payPrice}}元</span>
							</td>
							<td class="col-md-2">
								<div class="mgb20" ng-if="item.orderStatus == '未发货'">
									<a href="javascript:;" ng-click="sendWxOrder(item)">发货</a>
								</div>
								<div>
									<a href="javascript:;" ng-if="item.orderStatus == '未发货'" ng-click="print(item)">打印订单</a>
								</div>
							</td>
						</tr>
					</table>
					<!--分页 start-->
					<div class="pagelist priv-pagelist">
						<div id="WDpaging"></div>
					</div>
					<!--分页 end-->
				</div>
				<div ng-show="orderType=='4'">
					<div class="col-md-12 orderTbTabel">
						<table>
							<tr>
								<th scope="col" width="24%">商品</th>
								<th scope="col" width="8%">单价</th>
								<th scope="col" width="8%">数量</th>
								<th scope="col" width="15%">实付金额</th>
								<th scope="col" width="26%">买家信息</th>
								<th>备注</th>
							</tr>
							<tr ng-repeat="order in orderList_a">
								<td colspan="6" class="orderTbReponse">
									<table>
										<tr>
											<td colspan="6" class="orderTbTabelCode" ng-show="order.outOrderId != orderList_a[$index-1].outOrderId">
												<span class="mgl15">{{order.orderTime.substring(0,19)}}</span>
												<span class="mgl15">订单号：</span>
												<span class="ooafd4" ng-click="orderDetil(order)">{{order.outOrderId}}</span>
												<span class="orderTbShop">{{order.shopName}}</span>
												<img ng-if="order.shopType=='3'" class="miniBrand-logo" src="../static/base/images/icon_logo_taobao.png" />
												<img ng-if="order.shopType=='4'" class="miniBrand-logo" src="../static/base/images/icon_logo_tmall.png" />
												<img ng-if="order.shopType=='5'" class="miniBrand-logo" src="../static/base/images/icon_logo_taobao.png" />
												<img ng-if="order.shopType=='0'" class="miniBrand-logo" src="../static/base/images/icon_1688.png" />
												<img ng-if="order.shopType=='1'" class="miniBrand-logo" src="../static/base/images/icon_AliExpress.png" />
												<img ng-if="order.shopType=='2'" class="miniBrand-logo" src="../static/base/images/icon_amazon.png" />
												<span class="orderTbStaus">{{order.orderStatus}}</span>
											</td>
										</tr>
										<tr ng-repeat="orderDetails in order.orderDetails">
											<td colspan="3" width="41%" class="orderTbProBox">
												<div class="orderTbPro">
													<p>{{orderDetails.proName}}</p>
													<p>款号：{{orderDetails.proNum}}</p>
													<p>{{orderDetails.proColorName}} {{orderDetails.proSizeName}}</p>
												</div>
												<div class="orderTbUnit">
													<p>{{orderDetails.unitPrice}}元</p>
													<p class="am-ft-orange" ng-show="orderDetails.refundStatus != ''">退款处理中</p>
													<p class="am-ft-orange" ng-show="orderDetails.refundStatus != ''">({{orderDetails.refundStatus}})</p>
												</div>
												<div class="orderTbNum">{{orderDetails.amount.substring(0,orderDetails.amount.indexOf('.'))}}件</div>
											</td>
											<td rowspan="{{order.count}}" width="13%" ng-show="orderDetails.orderId != order.orderDetails[$index-1].orderId">
												<p class="orderTbTotal">{{order.discount}}元</p>
												<p>（含快递费：{{order.postPrice}}元）</p>
											</td>
											<td rowspan="{{order.count}}" width="26%" class="orderTbAddress" ng-show="orderDetails.orderId != order.orderDetails[$index-1].orderId">
												<div style="width:24%">
													<p>买家：</p><br />
													<p>收货信息：</p>
												</div>
												<div style="width:60%">
													<p class="color333">{{order.memberName}}</p><br />
													<p class="color333">{{order.consignee}}，{{order.province}}{{order.city}}{{order.district}}{{order.address}}，{{order.mobile}}</p>
												</div>
											</td>
											<td rowspan="{{order.count}}" class="orderTbAPs" ng-show="orderDetails.orderId != order.orderDetails[$index-1].orderId">
												<span>买家留言：</span><span class="color333">{{order.orderBuyMemo}}</span><br />
												<span>卖家备注：</span><span class="color333">{{order.orderSellerMemo}}</span><br />
												<span>系统备注：</span><span class="color333"></span>
											</td>
										</tr>

									</table>
								</td>
							</tr>
						</table>
						</td>
						</tr>
						</table>
					</div>
					<div class="fn-right priv-pagelist">
						<div id="paginge"></div>
					</div>
					<!--分页 end-->
				</div>
				<div class="fn-clear"></div>
			</div>

		</div>
		<div class="fn-clear"></div>
		<!-- /订单列表 -->
	</div>
	<!--订单详情-->
	<div class="ManColTable col-lg-12 mgt30"  ng-hide="true" id="orderInfo">
		<div class="col-md-10 orderTbDetilNav" style="border:none">
			<span class="">订单号：</span>
			<span>{{orderDetail.orderId}}</span>
			<span class="mgl15">{{orderDetail.orderTime.substring(0,19)}}</span>
			<span class="mgl15">店铺：{{chooseShopName}}</span>
		</div>
		<div class="col-md-10 orderTbDetilNav" style="border:none">
			<div class="fn-left mgr20">
				<span >会员：{{orderDetail.memberName}}</span>&nbsp;&nbsp;&nbsp;&nbsp;

			</div>
			<!--<div class="fn-left mgr20" style="width: 7%;">
				<span class="am-ft-red" >{{orderDetail.orderStatus}}</span>
			</div>-->
		</div>
		<div class="col-md-10 orderTbDetilNav mgt10" style="border:none">
			<div class="fn-left mgr20" >
				<span class="">收货人姓名：{{orderDetail.logiticInfo.consignee}}</span>
				<span class="mgl35">收货人电话：{{orderDetail.logiticInfo.mobile}}</span>
			</div>
		</div>
		<div class="col-md-10 orderTbDetilNav mgt10" style="border:none">
			<div class="fn-left mgr20" >
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
</div>
</div>
<!--立即发货弹窗-->
<div class="area-dialog-content" ng-show="postWxProduct == 'show'">
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
				<select name="" id="" class="sendcompany" ng-model="logitic" ng-options="logiticMap.logiticCompanyId as logiticMap.logiticCompanyName for logiticMap in logiticMaps">
				</select>
			</div>
			<div class="tborder-dia-line mgb20">
				<span>快递单号:</span>
				<input type="text" ng-model="trackingNumber" />
			</div>
			<div class="button-content">
				<button type="button" class="btn btn-primary addBrandBtn mgl0" ng-click="surepostProduct()">确认</button>
				<button type="button" class="btn btn-default mgl20" ng-click="closeDia()">取消</button></div>
		</div>
	</div>

</div>
<!--立即发货弹窗-->
<!--订单详情-->

<!--订单详情-->

<script>
	$(function() {
		var pIndex;
		$(".oderListNav").on("click", "li", function() {
			pIndex = $(this).index();
			$(".oderListNav li").each(function(index, ele) {
				$(this).removeClass("orderActive")
			});
			$(".oderListNav li").eq(pIndex).addClass("orderActive");
		});
		$("#wxSendDialog").center();
	});
</script>