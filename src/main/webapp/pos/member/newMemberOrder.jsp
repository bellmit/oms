<%@ page contentType="text/html; charset=utf-8" language="java" import="java.util.*" errorPage="" %>
<!--------------- Content start ----------------->
<div class="content-wrapper content-wrapper-order" >
    <div class="col-md-11 pageTitl removeBottom">
        <span class="am-ft-16 ">会员订单</span>
        <button type="button" class="unionBriefReturn" ng-click="goback('memberOrder')">返回</button>
    </div>
    <div class="col-md-11 vipList">
    	<div class="vipDetil">
    		<div><img src="http://base-static.oss-cn-hangzhou.aliyuncs.com/base/images/%E5%BF%86%E6%9D%91%E5%B1%85logo.jpg"/></div>
    		<div class="vipDetildesc">
    			<p class="am-ft-16">李依依&nbsp;&nbsp;15356521561</p>
    			<p>性别:女</p>
    			<p>生日:1990-10-30</p>
    			<p>地址:浙江杭州西湖区文一西路98数娱大厦101室</p>
    		</div>
    	</div>
    	<div class="vipCard vipCardL">
    		<div class="vipCardR1">
    			<span class="am-ft-16">银卡</span>
    			<span>自营门店会员联盟</span>
    			<button class="vipCardBtn">更改</button>
    		</div>
    		<div class="vipCardR2">HY12345678</div>
    		<div class="vipCardR3">
    			<p>可用积分：1500分</p>
    			<p>累积消费：1500.00元</p>
    		</div>
    	</div>
    	<div class="vipCard">
    		<div class="vipCardR1">
    			<span class="am-ft-16">银卡</span>
    			<span>自营门店会员联盟</span>
    			<button class="vipCardBtn">更改</button>
    		</div>
    		<div class="vipCardR2">HY12345678</div>
    		<div class="vipCardR3">
    			<p>可用积分：1500分</p>
    			<p>累积消费：1500.00元</p>
    		</div>
    	</div>
    	
    	<!--<button class="am-ft-blue ">更多卡...</button>-->
    	<div class="fn-clear"></div>
    </div>
    
    <!-- search -->
    <div class="col-md-11 codeSelect">
    	<span class="am-ft-16">所有订单(10个)</span>
    	<div class="codeSelectRight">
    	  <input type="text" placeholder="订单号" ng-model="proModelNum"/>
    	  <button class="codeSelectBtn" ng-click="searchPro(1)">查询</button>
    	</div>
    </div>
    <!-- /search -->

    <!-- Main content -->
    <div class="ManColTable col-lg-12 offsetPadding">
        <form>
            <div class="PrivTable ordersTable o2o-ordersTable">
                <table class="table table-hover table-striped unoinListTable vipListTable">
                    <tr>
                        <th scope="col" style="width: 28%;">商品</th>
                        <th scope="col" style="width: 8%;">数量</th>
                        <th scope="col" style="width: 8%;">金额</th>
                        <th scope="col" style="width: 11%;">总金额</th>
                        <th scope="col" style="width: 18%;">会员卡号</th>
                        <th scope="col" style="width: 10%;">导购</th>
                        <th scope="col" >门店</th>
                    </tr>
                </table>
                <table class="table table-hover table-striped  vipListTable">
                     <tr class="diftr"   >
                         <td colspan="7" >
                         	<div class="fn-left" style="width: 40%;">
                                <span>2016-07-04 10:32:42&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span >订单号：20160704103242787100000003</span>
							</div>	
						     <div class="fn-left" style="width: 30%;">
                                <span class="" >订单类型：门店POS&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span class="" >销售单</span>
                        	 </div>
                        	 
                        <!--</td>
                         <td colspan="2" style="width: 39%;" >-->
                                    <!--<span class="" ng-if="item.order.orderType == '2'">云仓020订单</span>
                                    <span class="" ng-if="item.order.orderType == '3'">微店订单</span>-->
                                    <!--<span class="" ng-if="item.order.oldOrderId !=''">补单</span>-->
                        <!--</td>                       
                        <td >-->
                        <!--<span class="am-ft-red" ng-if="item.order.orderStatus == '4'">未接单</span>
                        <span  ng-if="item.order.orderStatus == '5'">已发货</span>
                        <span class="am-ft-red" ng-if="item.order.orderStatus == '6'">未付款</span>
                        <span  ng-if="item.order.orderStatus == '7'">已支付</span>
                        <span class="am-ft-red" ng-if="item.order.orderStatus == '8'">支付失败</span>
                        <span class="am-ft-red" ng-if="item.order.orderStatus == '9'">已退单</span>-->
                        <!--</td>-->
                    </tr>
                    <tr >
                        <td  colspan="7" class="por-info"  >
                            <table class="table table-hover table-striped vipListTable chiledo2oTable">
                               <tr class="childO2oList">
                               	   <td colspan="6" class="childO2oDetil">
                                     <span class="colorGery"> 子订单号：</span><span class="am-ft-blue">20160704103242787100000031</span>
                               	   </td>
                               	   <td>已完成</td>
                               </tr>  
                               <tr>
                                	<td style="width: 44%;" colspan="3" class="o2odetil">
                               		   <div class="proDetialOne" >
                                       <!--<div class="proDetialOne" ng-repeat="orderDetail in item.orderDetails">-->
						                 <div class="proDetial" style="width: 63%;">
										     <p>2016年春装牛仔短裙淑女风</p>
										     <p>颜色：米白&nbsp;&nbsp;&nbsp;尺码：S</span></p>
										     <p>吊牌价：￥388.00</p>
						     			 </div>
									      <div style="width: 21%;" class="mgt25"><span>1</span></div>
									      <div class="mgt25"><span >200.00元</span></div>					   
			                              <div class="fn-clear"></div>
                            		 </div>   
			                        <div class="proDetialOne" >
                                       <!--<div class="proDetialOne" ng-repeat="orderDetail in item.orderDetails">-->
						                 <div class="proDetial" style="width: 63%;">
										     <p>2016年春装牛仔短裙淑女风</p>
										     <p>颜色：米白&nbsp;&nbsp;&nbsp;尺码：S</span></p>
										     <p>吊牌价：￥388.00</p>
						     			 </div>
									      <div style="width: 21%;" class="mgt25"><span>1</span></div>
									      <div class="mgt25"><span >200.00元</span></div>					   
			                              <div class="fn-clear"></div>
                                 	</td>
			                        <td style="width: 13%;" class="o2oprice">
			                           <span>400.00元</span>
			                        </td>
			                        <td style="width: 15%;"><span>HY12345678</span></td>
			                        <td style="width: 13%;"><span>张三</span></td>
			                        <td>
			                            <span>黄龙中心一号店</span>
			                        </td>
                               </tr>
                             </table>
                            </td>
                     </tr>   
                  </table>  
                   <table class="table table-hover table-striped  vipListTable">
                     <tr class="diftr"   >
                         <td colspan="7" >
                         	<div class="fn-left" style="width: 40%;">
                                <span>2016-07-04 10:32:42&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span >订单号：20160704103242787100000003</span>
							</div>	
						    <div class="fn-left" style="width: 30%;">
                                <span class="" >订单类型：门店POS&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span class="" >销售单</span>
                        	 </div>
                        	
                        <!--</td>
                         <td colspan="2" style="width: 39%;" >-->
                                    <!--<span class="" ng-if="item.order.orderType == '2'">云仓020订单</span>
                                    <span class="" ng-if="item.order.orderType == '3'">微店订单</span>-->
                                    <!--<span class="" ng-if="item.order.oldOrderId !=''">补单</span>-->
                        <!--</td>                       
                        <td >-->
                        <!--<span class="am-ft-red" ng-if="item.order.orderStatus == '4'">未接单</span>
                        <span  ng-if="item.order.orderStatus == '5'">已发货</span>
                        <span class="am-ft-red" ng-if="item.order.orderStatus == '6'">未付款</span>
                        <span  ng-if="item.order.orderStatus == '7'">已支付</span>
                        <span class="am-ft-red" ng-if="item.order.orderStatus == '8'">支付失败</span>
                        <span class="am-ft-red" ng-if="item.order.orderStatus == '9'">已退单</span>-->
                        <!--</td>-->
                    </tr>
                    <tr >
                        <td  colspan="7" class="por-info"  >
                            <table class="table table-hover table-striped vipListTable chiledo2oTable">
                               <tr class="childO2oList">
                               	   <td colspan="6" class="childO2oDetil">
                                     <span class="colorGery"> 子订单号：</span><span class="am-ft-blue">20160704103242787100000031</span>
                               	   </td>
                               	   <td>已完成</td>
                               </tr>  
                               <tr>
                                	<td style="width: 44%;" colspan="3" class="o2odetil">
                               		   <div class="proDetialOne" >
                                       <!--<div class="proDetialOne" ng-repeat="orderDetail in item.orderDetails">-->
						                 <div class="proDetial" style="width: 63%;">
										     <p>2016年春装牛仔短裙淑女风</p>
										     <p>颜色：米白&nbsp;&nbsp;&nbsp;尺码：S</span></p>
										     <p>吊牌价：￥388.00</p>
						     			 </div>
									      <div style="width: 21%;" class="mgt25"><span>1</span></div>
									      <div class="mgt25"><span >200.00元</span></div>					   
			                              <div class="fn-clear"></div>
                            		 </div>   
			                        <div class="proDetialOne" >
                                       <!--<div class="proDetialOne" ng-repeat="orderDetail in item.orderDetails">-->
						                 <div class="proDetial" style="width: 63%;">
										     <p>2016年春装牛仔短裙淑女风</p>
										     <p>颜色：米白&nbsp;&nbsp;&nbsp;尺码：S</span></p>
										     <p>吊牌价：￥388.00</p>
						     			 </div>
									      <div style="width: 21%;" class="mgt25"><span>1</span></div>
									      <div class="mgt25"><span >200.00元</span></div>					   
			                              <div class="fn-clear"></div>
                                 	</td>
			                        <td style="width: 13%;" class="o2oprice">
			                           <span>400.00元</span>
			                        </td>
			                        <td style="width: 15%;"><span>HY12345678</span></td>
			                        <td style="width: 13%;"><span>张三</span></td>
			                        <td>
			                            <span>黄龙中心一号店</span>
			                        </td>
                               </tr>
                             </table>
                            </td>
                     </tr>   
                  </table>  
            </div>
        </form>
        <!-- 分页 -->
            <div class="pagelist priv-pagelist">
                <div id="productListPage"></div>
            </div>
        <!-- /分页 -->
        <div class="fn-clear"></div>
    </div>

    <!-- /Main content -->
</div>
<!--------------- Content end ----------------->

