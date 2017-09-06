<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--<div class="construction">
	<div class="const-content">
		<div class="const-info">
			<img class="const-word" src="http://static.qineasy.com/base/images/consWord.png" />
		</div>		
	</div>
</div>-->
<!--------------- Content start ----------------->
<!--订单列表-->
<div class="content-wrapper content-member-wrapper content-forward-wrapper" ng-show="orderTbListDia">
	<div class="ManColTable col-lg-12">
		<div class="col-md-12 orderNav_Tab">
			<div ng-class="{'orderClassifySelect':type=='1'}" class="orderClassify" ng-click="orderClassify('1')">全部订单</div>
			<div ng-class="{'orderClassifySelect':type=='2'}" class="orderClassify">待付款<span><!-- ({{orderStatusCount.waitBuyerPayCount}}) --></span></div>
			<div ng-class="{'orderClassifySelect':type=='3'}" class="orderClassify">待发货<span><!-- ({{orderStatusCount.waitSellerSendCount}}) --></span></div>
			<div ng-class="{'orderClassifySelect':type=='4'}" class="orderClassify">待收货<span><!-- ({{orderStatusCount.waitBuyerReceiveCount}}) --></span></div>
			<div ng-class="{'orderClassifySelect':type=='5'}" class="orderClassify">已完成<span><!-- ({{orderStatusCount.successCount}}) --></span></div>
			<div class="allOrderLeft">
				<button ng-click="synchronizationOrder()">手工下载订单</button>
			</div>
			<div class="fn-clear"></div>
		</div>
		<div class="col-md-12 orderNavbar">
			<div class="orderNavbarSin">
				<div>平台：</div>
				<div>
					<select class="orderControlDetil" ng-model="orderSource">
						<option value="">全部平台</option>
						<option value="2">淘宝</option>
					</select>
				</div>
			</div>
			<div class="orderNavbarSin" style="text-align: left;">
				<div>店铺：</div>
				<div>
					<select class="orderControlDetil" ng-model="shopOrgId">
						<option value="">全部店铺</option>
						<option ng-repeat="shop in shopList" value="{{shop.orgId}}">{{shop.shopName}}</option>
					</select>
				</div>
			</div>
			<div class="orderNavbarSin">
				<div>买家：</div>
				<div>
					<input class="orderControlDetil" type="text" placeholder="买家账号/手机号" ng-model="memberName" />
				</div>
			</div>
			<div class="orderNavbarSin">
				<div>订单号：</div>
				<div>
					<input class="orderControlDetil" type="text" ng-model="outOrderId" />
				</div>
			</div>
			<div class="orderNavbarSin" style="text-align: left;">
				<div>订单时间：</div>
				<div>
					<input class="laydate-icon setOrderTime" placeholder="开始时间" type="text" id="start" ng-model="queryStartTime" />
					<span class="lineto">-</span>
					<input class="laydate-icon setOrderTime" placeholder="结束时间" ng-model="queryEndTime" type="text" id="end" />
				</div>
			</div>
			<div class="orderNavbarSin">
				<div>订单状态：</div>
				<div>
					<select class="orderControlDetil" ng-model="orderStatus">
						<option value="">全部</option>
						<option value="11">等待买家付款</option>
						<option value="12">等待卖家发货</option>
						<option value="13">等待买家确认收货</option>
						<option value="14">交易成功</option>
						<option value="15">交易关闭</option>
					</select>
				</div>
				<button ng-click="getTaoBaoOrder()">查询</button>
			</div>
		</div>
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
			</table>
			<table ng-repeat="order in orders">
				<tr>
					<td colspan="7" class="orderTbTabelCode" ng-show="order.outOrderId != orderList[$index-1].outOrderId">
						<span class="mgl15">{{order.orderTime}}</span>
						<span class="mgl15">订单号：</span>
						<span class="ooafd4">{{order.outOrderId}}</span>
						<span class="orderTbShop">{{order.orgName}}</span>
						<img ng-if="order.shopType=='3'" class="miniBrand-logo" src="../static/base/images/icon_logo_taobao.png" />
						<img ng-if="order.shopType=='4'" class="miniBrand-logo" src="../static/base/images/icon_logo_tmall.png" />
						<img ng-if="order.shopType=='5'" class="miniBrand-logo" src="../static/base/images/icon_logo_taobao.png" />
						<img ng-if="order.shopType=='0'" class="miniBrand-logo" src="../static/base/images/icon_1688.png" />
						<img ng-if="order.shopType=='1'" class="miniBrand-logo" src="../static/base/images/icon_AliExpress.png" />
						<img ng-if="order.shopType=='2'" class="miniBrand-logo" src="../static/base/images/icon_amazon.png" />
						<span class="orderTbStaus" ng-if="order.orderStatus == '11'">等待买家付款</span>
						<span class="orderTbStaus" ng-if="order.orderStatus == '12'">等待卖家发货</span>
						<span class="orderTbStaus" ng-if="order.orderStatus == '13'">等待买家确认收货</span>
						<span class="orderTbStaus" ng-if="order.orderStatus == '14'">交易成功</span>
						<span class="orderTbStaus" ng-if="order.orderStatus == '15'">交易关闭</span>
					</td>
				</tr>
				<tr>
					<td colspan="3" width="41%" class="orderTbProBox">
						<div ng-repeat="orderDetails in order.orderDetail" class="wxl-border">
							<div class="orderTbPro fn-left">
								<p>{{orderDetails.proName}}</p>
								<p>{{orderDetails.proColorName}} {{orderDetails.proSizeName}}</p>
							</div>
							<div class="orderTbUnit fn-left">
								<p>{{orderDetails.unitPrice}}元</p>
							</div>
							<div class="orderTbNum fn-left">{{orderDetails.amount}}件</div>

						</div>
					</td>
					<td width="13%">
						<p class="orderTbTotal">{{order.totalPrice-order.discount|number}}元</p>
					</td>
					<td width="26%" class="orderTbAddress">
						<div style="width:60%">
							<p class="color333">{{order.memberName}}</p><br />
							<!-- <p class="color333">{{order.consignee}}，{{order.province}}{{order.city}}{{order.district}}{{order.address}}，{{order.mobile}}</p> -->
						</div>
					</td>
					<td class="orderTbAPs">
					</td>
					<td class="orderTbAPs">
						<div style="text-align: center;" ng-if="order.orderStatus == '12'">
							<p>
								<a href="javascript:;" class="am-ft-14 am-ft-blue mgb20" ng-click="topostProduct(order)">立即发货</a>
							</p>
						</div>
					</td>
				</tr>
			</table>
		</div>
		<div class="fn-right priv-pagelist">
			<div id="paging"></div>
		</div>
		<div class="fn-clear"></div>
	</div>
</div>
<!--同步订单弹框-->
<div class="synchronizationBox" ng-show="showDialog">
	<div class="orderTb_dialog">
		<span>手工下载订单</span>
		<img src="http://base-static.oss-cn-hangzhou.aliyuncs.com/base/images/closelogo.png" ng-click="closeDialog()" />
	</div>
	<div class="orderTb_dialog_content">
		<div class="orderTb_dialogRow fn-clear">
			<div>订单时间：</div>
			<div>
				<input class="laydate-icon setOrderTime" placeholder="开始时间" type="text" id="start1" />&nbsp;至&nbsp;
				<input class="laydate-icon setOrderTime" placeholder="结束时间" type="text" id="end1" />
			</div>
		</div>
		<div class="orderTb_dialogRow fn-clear">
			<div>店铺：</div>
			<div>
				<select class="orderTb_dialogRow_shop" ng-model="downShopOrgId">
					<option ng-repeat="shop in shopList" value="{{shop.orgId}}">{{shop.shopName}}</option>
				</select><span id="showError" style="display:none;color:red">请选择一个店铺</span>
			</div>
		</div>
		<div class="orderTb_dialogRow fn-clear">
			<div>订单状态：</div>
			<div>
				<select class="orderTb_dialogRow_status" ng-model="downOrderStatus">
					<option value="">全部</option>
					<option value="11">等待买家付款</option>
					<option value="12">等待卖家发货</option>
					<option value="13">等待买家确认收货</option>
					<option value="14">交易成功</option>
					<option value="15">交易关闭</option>
				</select>
			</div>
		</div>
		<div class="orderTb_dialogRow fn-clear">
			<div>下载进度：</div>
			<div class="orderTbLoading">
				<div class="fn-clear orderTbLoadingOuter">
					<div class="orderTbLoadingInner"></div>
				</div>
				<span>{{progressVal}}%</span>
			</div>
		</div>
		<div class="orderTb_dialogRow_btn">
			<button class="color666" ng-click="closeDialog()">取消</button>
			<button class="am-ft-white" ng-click="downloadOrder()">下载</button>
			<!-- 
	  	<button class="am-ft-white" ng-click="progress()">下载</button>	
 -->
		</div>
	</div>
</div>
<script type="text/javascript">
	$(".maskBg").click(function() {
		$(".synchronizationBox,.maskBg").hide();
	})
</script>
<!--同步订单弹框-->
<!--订单列表-->
<!--订单详情-->
<div class="content-wrapper content-member-wrapper content-forward-wrapper" ng-show="showOrderDetil">
	<div class="ManColTable col-lg-12">
		<div class="col-md-12 orderTbDetilNav">
			<span class="">订单号：</span>
			<span>{{orderDetail.outOrderId}}</span>
			<span class="mgl15">{{orderDetail.orderTime.substring(0,19)}}</span>
			<img ng-if="orderDetail.shopType=='3'" class="miniBrand-logo" src="../static/base/images/icon_logo_taobao.png" />
			<img ng-if="orderDetail.shopType=='4'" class="miniBrand-logo" src="../static/base/images/icon_logo_tmall.png" />
			<img ng-if="orderDetail.shopType=='5'" class="miniBrand-logo" src="../static/base/images/icon_logo_taobao.png" />
			<img ng-if="orderDetail.shopType=='0'" class="miniBrand-logo" src="../static/base/images/icon_1688.png" />
			<img ng-if="orderDetail.shopType=='1'" class="miniBrand-logo" src="../static/base/images/icon_AliExpress.png" />
			<img ng-if="orderDetail.shopType=='2'" class="miniBrand-logo" src="../static/base/images/icon_amazon.png" />
			<span class="">{{orderDetail.shopName}}</span>
			<span class="orderTbDetilStauts">{{orderDetail.orderStatus}}</span>
			<button class="orderTbStaus" ng-click="goBack()">返回</button>
		</div>
		<div class="col-md-10" class="orderTbProDetil">
			<p class="orderTbProTitle">商品信息</p>
			<table class="orderTbProTable">
				<tr>
					<th scope="col" width="30%">商品</th>
					<th scope="col" width="20%">单价</th>
					<th scope="col" width="20%">数量</th>
					<th scope="col">实付金额</th>
				</tr>
				<tr ng-repeat="detail in orderDetail.orderDetails">
					<td colspan="3" class="orderTbProBox">
						<div class="orderTbPro" style="width: 47%;">
							<p>{{detail.proName}}</p>
							<p>款号：{{detail.proNum}}</p>
							<p>{{detail.proColorName}} {{detail.proSizeName}}</p>
						</div>
						<div class="orderTbUnit" style="width: 23%;">{{detail.unitPrice}}元</div>
						<div class="orderTbNum" style="width: 30%;">{{detail.amount.substring(0,detail.amount.indexOf('.'))}}件</div>
					</td>
					<td rowspan="{{orderDetail.count}}" ng-show="detail.orderId != orderDetail.orderDetails[$index-1].orderId">
						<p class="orderTbTotal">{{orderDetail.discount}}元</p>
						<p>（含快递费：{{orderDetail.postPrice}}元）</p>
					</td>
				</tr>
			</table>
		</div>
		<div class="col-md-11 orderTbDetile">
			<div class="col-md-4 orderDetileBox">
				<p>买家信息</p>
				<p>{{orderDetail.memberName}}</p>
			</div>
			<div class="col-md-4 orderDetileBox">
				<p>收货信息</p>
				<p>{{orderDetail.consignee}} {{orderDetail.mobile}}</p>
				<p>{{orderDetail.province}}{{orderDetail.city}}{{orderDetail.district}}{{orderDetail.address}}</p>
			</div>
			<div class="col-md-4 orderDetileBox">
				<p>物流信息</p>
				<p>物流公司：{{orderDetail.logiticCompanyName}}</p>
				<p>快递单号：{{orderDetail.logiticNum}}</p>
			</div>
		</div>
		<div class="col-md-11 orderTbProDetil">
			<p class="orderTbProTitle">订单时间</p>
			<div>
				<span>下单时间：</span>
				<span>{{orderDetail.orderTime.substring(0,19)}}</span>
			</div>
			<div>
				<span>发货时间：</span>
				<span>{{orderDetail.orderSendTime.substring(0,19)}}</span>
			</div>
			<div class="orderTbFlow fn-clear">
				<div style="width:74px;">物流时间：</div>
				<div>
					<p ng-repeat="logitic in logiticTraceList">{{logitic.stepTime}} &nbsp;<span class="color333">{{logitic.stepName}}</span></p>
				</div>
			</div>
			<div>
				<span>收货时间：</span>
				<span>{{orderDetail.orderConfirmTime.substring(0,19)}}&nbsp;</span>
				<span>{{orderDetail.consignee}} 确认收货</span><br />
			</div>
		</div>
		<div class="fn-clear"></div>
	</div>
</div>
<!--订单详情-->

<!--立即发货弹窗-->
<div class="area-dialog-content" ng-show="postProduct == 'show'">
<!--<div class="area-dialog-content">-->
	<div class="tborder-dialog tborder-dialog-send " id="postProductdia_a">
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
<!--q确认退款弹窗-->
<div class="area-dialog-content fn-hide">
	<div class="tborder-dialog tborder-dialog-send ">
		<div class="tborder-dialog-header fn-clear">
			<span class="fn-left">确认退款</span>
			<span class="fn-right">
						<img src="../static/base/images/closelogo.png" alt="" />
					</span>
		</div>
		<div class="tborder-dialog-content">
			<div class="mgb15 certifyWarm">验证码已发送</div>
			<div class="tborder-dia-line mgb20">
				<span>验证码:</span>
				<input type="text" class="certify" />
				<span class="am-ft-gray pdl15" style="font-size: 12px;">请输入收到的验证码</span>
			</div>
			<div class="button-content">
				<button type="button" class="btn btn-primary addBrandBtn mgl0">确认</button>
				<button type="button" class="btn btn-default mgl20">取消</button></div>
		</div>
	</div>
</div>
<!--q确认退款弹窗-->
<!--退货信息弹窗-->
<div class="area-dialog-content fn-hide">
	<div class="tborder-dialog tborder-dialog-back ">
		<div class="tborder-dialog-header fn-clear">
			<span class="fn-left">请填写退货的收货信息</span>
			<span class="fn-right">
						<img src="../static/base/images/closelogo.png" alt="" />
					</span>
		</div>
		<div class="tborder-dialog-content">
			<div class="tborder-dialog-line fn-clear">
				<div class="fn-left dia-title">
					<em class="am-ft-red">*</em>
					<span>收货姓名:</span>
				</div>
				<div class="fn-left dia-input">
					<input type="text" />
				</div>
			</div>
			<div class="tborder-dialog-line fn-clear">
				<div class="fn-left dia-title">
					<em class="am-ft-red">*</em>
					<span>邮编:</span>
				</div>
				<div class="fn-left dia-input">
					<input type="text" />
				</div>
			</div>
			<div class="tborder-dialog-line fn-clear">
				<div class="fn-left dia-title">
					<em class="am-ft-red">*</em>
					<span>座机:</span>
				</div>
				<div class="fn-left dia-input">
					<input type="text" />
				</div>
			</div>
			<div class="tborder-dialog-line fn-clear">
				<div class="fn-left dia-title">
					<em class="am-ft-red">*</em>
					<span>手机:</span>
				</div>
				<div class="fn-left dia-input">
					<input type="text" />
				</div>
			</div>
			<div class="tborder-dialog-line fn-clear">
				<div class="fn-left dia-title">
					<em class="am-ft-red">*</em>
					<span>所在地区:</span>
				</div>
				<div class="fn-left dia-select mgr10">
					<select name="">
						<option value="">请选择省</option>
					</select>
				</div>
				<div class="fn-left dia-select mgr10">
					<select name="">
						<option value="">请选择市</option>
					</select>
				</div>
				<div class="fn-left dia-select">
					<select name="">
						<option value="">请选择区</option>
					</select>
				</div>
			</div>
			<div class="tborder-dialog-line tborder-dialog-addr fn-clear">
				<div class="fn-left dia-title">
					<em class="am-ft-red">*</em>
					<span>通信地址:</span>
				</div>
				<div class="fn-left dia-input">
					<input type="text" />
				</div>
			</div>
			<div class="tborder-dialog-line tborder-dialog-addr fn-clear">
				<div class="fn-left dia-title">
					<em class="am-ft-red">*</em>
					<span>通信地址:</span>
				</div>
				<div class="fn-left dia-textarea">
					<textarea name="" rows="" cols=""></textarea>
				</div>
			</div>
			<div class="button-content">
				<button type="button" class="btn btn-primary addBrandBtn mgl0">确认</button>
				<button type="button" class="btn btn-default mgl20">取消</button>
			</div>
		</div>
	</div>

</div>

<!--退货信息弹窗-->
<script>
	$("#postProductdia_a").centera();
</script>