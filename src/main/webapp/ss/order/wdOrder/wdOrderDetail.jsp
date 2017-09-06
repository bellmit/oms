<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="content-wrapper contractCreate-wraper fn-clear contractCreate-wraper-info contractCreate-wraper-wd">
	<div class="col-md-11 pageTitl">
		<span class="am-ft-14 fn-left color666">订单编号：</span>
		<span class="am-ft-14 fn-left am-ft-black">{{orderInfo.orderId}}</span>
		<span class="am-ft-d4">&nbsp;&nbsp;({{orderInfo.orderStatus}})</span>
		<a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>
	</div>
	<div class="col-md-11 fn-clear addContractBox">
		<div class="fn-clear col-md-12 contractBaseInfoBox">
			<div class="contractInfo col-md-12">
				<div class="wdOrder_detail pt10 pb10" >
					<div class="infoLine infoLinea fn-clear">
						<div class="fn-left infoTitile">
							订单金额：
						</div>
						<span class="am-ft-orangeS fn-left">{{orderInfo.totalPrice}}元</span>
						<span class="am-ft-gray fn-left mgl20">（商品金额：2400.00元&nbsp;&nbsp;运费&nbsp;&nbsp;{{orderInfo.buyPostPrice}}元&nbsp;&nbsp;优惠卷&nbsp;&nbsp;-{{orderInfo.couponAmt}}元）</span>
					</div>
					<div class="infoLine infoLineb fn-clear">
						<div class="fn-left infoTitile">
							支付方式：
						</div>
						<span class="am-ft-gray fn-left mgl20" ng-if="orderInfo.orderStatus=='未支付'">——</span>
						<span class="am-ft-gray fn-left mgl20" ng-if="orderInfo.orderStatus!='未支付'">(微信支付&nbsp;&nbsp;{{orderInfo.payPrice-orderInfo.carryAmount}}元&nbsp;&nbsp;余额&nbsp;&nbsp;{{orderInfo.carryAmount}}元)</span>
					</div>
					<div class="infoLine infoLinec fn-clear">
						<div class="fn-left infoTitile">
							买家留言：
						</div>
						<div class="infoLineccd">
							<span>{{orderInfo.orderBuyMemo}}</span>
						</div>
					</div>
				</div>
				<div class="wdOrder_detail  pt10 pb10">
					<div class="infoLine infoLinea fn-clear">
						<div class="fn-left infoTitile">
							会员ID：
						</div>
						<span class="color333 fn-left">{{orderInfo.memberId}}</span>
						<div class="fn-left mgl10 mgr10">
							<span class="color666">姓名：</span>
							<span class="color333">{{orderInfo.memberName}}</span>
						</div>
						<div class="fn-left">
							<span class="color666">手机号：</span>
							<span class="color333">{{orderInfo.telphone}}</span>
						</div>
					</div>
					<div class="infoLine infoLineb fn-clear">
						<div class="fn-left infoTitile">
							下单时间：
						</div>
						<span class="am-ft-black fn-left">{{orderInfo.orderTime}}</span>
					</div>
					<div class="infoLine infoLinec fn-clear" ng-if="orderInfo.logiticInfo.sendTime!=''">
						<div class="fn-left infoTitile">
							发货时间：
						</div>
						<span class="am-ft-black fn-left">{{orderInfo.logiticInfo.sendTime}}</span>
					</div>
					<div class="infoLine infoLinec fn-clear" ng-if="orderInfo.logiticInfo.finishTime!=''">
						<div class="fn-left infoTitile">
							完成时间：
						</div>
						<span class="am-ft-black fn-left">{{orderInfo.logiticInfo.finishTime}}</span>
					</div>
					<!-- <div class="infoLine infoLinec fn-clear">
						<div class="fn-left infoTitile">
							配送方式：
						</div>
						<span class="am-ft-black fn-left">快速模版1</span>
					</div> -->
				</div>
				<!--快递信息-->
				<div class="wdOrder_detail">
					<div class="infoLine infoLinea fn-clear" style="background: #F0EFF5;border: 1px solid #F4F4F4;">
						<span class="mgl10">快递信息</span>
					</div>
					<div class="infoLine infoLinea fn-clear mgt10">
						<div class="fn-left infoTitile">
							姓名：
						</div>
						<span class="color333 fn-left" ng-if="!editLogitic">{{logiticInfo.consignee}}</span>
						<input type="text" class="input-w80 fn-left" ng-if="editLogitic" ng-model="logiticInfo.consignee"/>
						<div class="fn-left mgl60">
							<span class="color666">手机号：</span>
							<span class="color333" ng-if="!editLogitic">{{logiticInfo.mobile}}</span>
							<input type="text" class="input-w100" ng-if="editLogitic" ng-model="logiticInfo.mobile"/>
						</div>
					</div>
					<div class="infoLine infoLineb fn-clear mgt10">
						<div class="fn-left infoTitile">
							收货地址：
						</div>
						<div class="fn-left">
							<p class="am-ft-black" ng-if="!editLogitic">{{logiticInfo.province}}{{logiticInfo.city}}{{logiticInfo.district}}{{logiticInfo.address}}</p>
							<select class="col-md-3 mgr5 shopAddr1" ng-options="province.name for province in provinces" ng-model="test.province"  ng-if="editLogitic" ng-change="logiticInfo.city='';logiticInfo.district='';">
                                <option value="">请选择省</option>
                            </select>
                            <select class="col-md-3 mgr5 shopAddr2" ng-options="city.name for city in citys[test.province.id]" ng-model="test.city"  ng-if="editLogitic" ng-change="logiticInfo.district='';">
                                <option value="">请选择市</option>
                            </select>
                            <select class="col-md-3 mgr5 shopAddr3" ng-options="district.name for district in districts[test.city.id]" ng-model="test.district" ng-if="editLogitic">
                                <option value="">请选择区</option>
                            </select>
							<p>
								<input type="text" class="input-w300 mgt10" ng-if="editLogitic" ng-model="logiticInfo.address"/>
							</p>
						</div>
					</div>
					<div class="infoLine fn-clear mgb10">
						<div class="fn-right mgr15">
							<button class="whiteGroundBlueBtn width120" ng-if="!editLogitic&&(orderInfo.orderStatus=='未支付'||orderInfo.orderStatus=='未发货')" ng-click="editLogiticInfo()">修改收件人信息</button>
							<button class="blueGroundWhiteBtn w70 " ng-if="editLogitic" ng-click="updateLogiticInfo()">保存</button>
							<button class="whiteGroundBlueBtn w70" ng-if="editLogitic" ng-click="closeDia()">取消</button>
						</div>
					</div>
				</div>
				<!--商品信息-->
				<div class="wdOrder_detail" style="border: none;">
					<div class="infoLine infoLinea fn-clear mgb0" style="background: #F0EFF5;border: 1px solid #F4F4F4;">
						<span class="mgl10">商品信息</span>
					</div>
					<div class="infoLine infoLinea fn-clear">
						<div class="orderTbTabel wdOrderDetailTable mgl0">
							<table>
								<tr>
									<th scope="col" width="23%">商品名称</th>
									<th scope="col" width="10%">数量</th>
									<th scope="col" width="12%">单价</th>
									<th scope="col" width="12%">金额</th>
								</tr>
								<tr ng-repeat="orderDetail in orderInfo.orderDetails">
										<td scope="col" rowspan="" width="23%" class="orderTbProBox">
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
										<td rowspan="" width="8%">
											{{orderDetail.amount}}
										</td>
										<td rowspan="" width="12%" scope="col">
											{{orderDetail.unitPrice}}元
										</td>
										<td rowspan="{{orderInfo.orderDetails.length}}" width="12%" ng-if="$index==0">
											<p class="am-ft-orange">{{orderInfo.totalPrice}}元</p>
											<p>（运费：：{{orderInfo.buyPostPrice}}元）</p>
											<p ng-if="order.couponAmt>0">优惠：-{{orderInfo.couponAmt}}元</p>
											<p ng-if="order.couponAmt==0">优惠：0.00元</p>
										</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				<div class="wdOrder_detail pt10 pb10" ng-if="orderInfo.orderStatus=='待退款'||orderInfo.orderStatus=='已退款'">
					<div class="infoLine infoLinea fn-clear mgb0" style="background: #F0EFF5;border: 1px solid #F4F4F4;">
						<span class="mgl10">退款信息</span>
					</div>
					<div class="infoLine infoLinea fn-clear">
						<div class="fn-left infoTitile">
							联系人：
						</div>
						<span class="am-ft-black fn-left" >{{orderInfo.refundContactName}}</span>
					</div>
					<div class="infoLine infoLineb fn-clear">
						<div class="fn-left infoTitile">
							联系电话：
						</div>
						<span class="am-ft-black fn-left " >{{orderInfo.refundContactTel}}</span>
					</div>
					<div class="infoLine infoLinec fn-clear">
						<div class="fn-left infoTitile">
							退款原因：
						</div>
						<div class="infoLineccd">
							<span>{{orderInfo.refundReason}}</span>
						</div>
					</div>
					<div class="infoLine infoLinec fn-clear">
						<div class="fn-right ">
							<button class="refund-btn" ng-click="refund('1')">拒绝退款</button>
							<button class="refund-btn" ng-click="refund('2')">同意退款</button>
						</div>	
					</div>
				</div>
				<!--物流信息
				<div class="wdOrder_detail">
					<div class="infoLine infoLinea fn-clear" style="background: #F0EFF5;border: 1px solid #F4F4F4;">
						<span class="mgl10">物流信息</span>
					</div>
					<div class="infoLine infoLinea fn-clear mgt10">
						<div class="fn-left infoTitile">
							下单时间：
						</div>
						<span class="color333 fn-left">2016-04-10 10:30:30</span>
					</div>
					<div class="infoLine infoLineb fn-clear">
						<div class="fn-left infoTitile">
							发货时间：
						</div>
						<span class="color333 fn-left">2016-04-10 10:30:30</span>
					</div>
					<div class="infoLine infoLineb fn-clear">
						<div class="fn-left infoTitile">
							物流时间：
						</div>
						<div class="fn-left">
							<p class="am-ft-black ">
								<span class="am-ft-gray mgr15">2016-04-10 14:31:30</span>
								<span class="am-ft-black ">您的订单开始处理</span>
							</p>
							<p class="am-ft-black ">
								<span class="am-ft-gray mgr15">2016-04-10 14:31:30</span>
								<span class="am-ft-black ">您的包裹已出库</span>
							</p>
							<p class="am-ft-black ">
								<span class="am-ft-gray mgr15">2016-04-10 14:31:30</span>
								<span class="am-ft-black ">商家正通知快递公司揽件</span>
							</p>
							<p class="am-ft-black ">
								<span class="am-ft-gray mgr15">2016-04-10 14:31:30</span>
								<span class="am-ft-black ">【杭州市】中通快递 西湖区收件员 已揽件</span>
							</p>
							<p class="am-ft-black ">
								<span class="am-ft-gray mgr15">2016-04-10 14:31:30</span>
								<span class="am-ft-black ">【杭州市】西湖区 已发出</span>
							</p>
							<p class="am-ft-black ">
								<span class="am-ft-gray mgr15">2016-04-10 14:31:30</span>
								<span class="am-ft-black ">【杭州市】快件已签收，感谢您使用中通快递，期待再次为您服务</span>
							</p>
						</div>
					</div>
					<div class="infoLine infoLineb fn-clear mgb10">
						<div class="fn-left infoTitile">
							收货时间：
						</div>
						<span class="am-ft-gray mgr15">2016-04-10 14:31:30</span>
						<span class="am-ft-black ">李依依  确认收货</span>
					</div>
				</div>-->
				<!--退款申请
				<div class="wdOrder_detail">
					<div class="infoLine infoLinea fn-clear" style="background: #F0EFF5;border: 1px solid #F4F4F4;">
						<span class="mgl10">退款申请</span>
					</div>
					<div class="infoLine infoLinea fn-clear mgt10">
						<div class="fn-left infoTitile">
							退款类型：
						</div>
						<span class="color333 fn-left">只退款</span>
					</div>
					<div class="infoLine infoLineb fn-clear">
						<div class="fn-left infoTitile">
							退款原因：
						</div>
						<span class="color333 fn-left">卖家缺货，迟迟不发货</span>
					</div>
					<div class="infoLine infoLineb fn-clear">
						<div class="fn-left infoTitile">
							退款金额：
						</div>
						<span class="color333 fn-left">100元</span>
					</div>
					<div class="infoLine infoLineb fn-clear">
						<div class="fn-left infoTitile">
							退款说明：
						</div>
						<span class="am-ft-black ">卖家缺货，迟迟不发货</span>
					</div>
					<div class="infoLine infoLineb fn-clear mgb10">
						<div class="fn-left infoTitile">
							退款时间：
						</div>
						<span class="am-ft-black "> 2017-3-15 17:14</span>
					</div>
				</div>-->
			</div>
		</div>
	</div>
	<div class="fn-clear"></div>
</div>
<!--退款弹窗-->
	<div class="maskBgw " ng-if="refundOrder!='0'">
	<div class="mask-container">
		<div class="mask-top fn-clear">
			<p class="fn-left" ng-if="refundOrder=='1'">拒绝退款</p>
			<p class="fn-left" ng-if="refundOrder=='2'">同意退款</p>
			<a href="javascript:;">
				<img ng-click="closeDia()" src="http://static.qineasy.com/base/images/closelogo.png" class="fn-right" alt="" />
			</a>
		</div>
		<div class="mask-content mask-contenta" style="padding:50px 100px;">
			<form action="" class="info-form fn-clear" id="">
				<div class="continue-frame">
					<div class="continue-frame-content">
						<span class="am-ft-14 color666">订单号：</span>
						<span>{{orderInfo.orderId}}</span>
					</div>
				</div>
			</form>
		</div>
		<div class="mask-bottom fn-clear">
			<!--拒绝退款-->
			<button class="commit fn-left" ng-click="sureRefundOrder()" ng-if="refundOrder=='1'">确认</button>
			<!--同意退款-->
			<button class="commit fn-left" ng-click="sureRefundOrder()" ng-if="refundOrder=='2'">确认</button>
			<button class="cancel fn-left" ng-click="closeDia()">取消</button>
		</div>
	</div>
</div>
