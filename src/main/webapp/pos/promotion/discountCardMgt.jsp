<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="content-wrapper content-wrapper-order">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">优惠卡券管理</h2>
		<button class="addDiscount_btn" ng-click='addDiscount()'>添加优惠卡券</button>
	</div>
	<div class="col-md-11 disCountListBox">
		<div ng-class="{true:'disCount_change'}[stausValue=='1']" class="fn-left disCount_info disCount_change" ng-click="changeStaus('1')">待审核(3)</div>
		<div ng-class="{true:'disCount_change'}[stausValue=='2']" class="fn-left disCount_info" ng-click="changeStaus('2')">使用中(3)</div>
		<div ng-class="{true:'disCount_change'}[stausValue=='3']" class="fn-left disCount_info" ng-click="changeStaus('3')">历史卡券(3)</div>
		<!--待审核-->
		<div class="disCountCardList " ng-show="stausValue=='1'">
			<table class="table table-hover table-striped" frame='hsides'>
				<tr class="">
					<th scope="col" width="25%">卡券</th>
					<th scope="col" width="12%">ID</th>
					<th scope="col" width="13%">用户范围</th>
					<th scope="col" width="12%">商品范围</th>
					<th scope="col" width="10%">发放数量</th>
					<th scope="col" width="10%">状态</th>
					<th>操作</th>
				</tr>
				<tr>
					<td>
						<div class="disCountCardBox">
							<img src="../static/base/images/virtual.png" />
							<div class="disCountCardR1 fn-clear">
								<div class="fn-left disCountAmount">
									<span class="am-ft-10">￥</span>
									<span class="am-ft-26">50</span>
								</div>
								<div class="fn-left disCountCondition">
									<p class="am-ft-14">优惠券</p>
									<p class="am-ft-10">无门槛使用</p>
								</div>
							</div>
							<p>2016-09-28&nbsp;00:00:00至2016-10-28&nbsp;24:00</p>
						</div>
					</td>
					<td>123458786410</td>
					<td>新注册会员</td>
					<td>限定商品(100)</td>
					<td>1000</td>
					<td><span class="am-ft-orange">待审核</span></td>
					<td>
						<a href="javaScript:;" class="am-ft-red">撤销审核</a>
						<span class="am-ft-gray">|</span>
						<a href="javaScript:;" class="am-ft-d4"   ng-click="checkDteils('1')">查看详情</a>

					</td>
				</tr>
				<tr>
					<td>
						<div class="disCountCardBox">
							<img src="../static/base/images/entity.png" />
							<img src="../static/base/images/twoCode.png" />
							<div class="disCountCardR1 fn-clear">
								<div class="fn-left disCountAmount">
									<span class="am-ft-26">7.5</span>
									<span class="am-ft-10">折</span>
								</div>
								<div class="fn-left disCountCondition">
									<p class="am-ft-14">优惠券</p>
									<p class="am-ft-10">无门槛使用</p>
								</div>
							</div>
							<p>2016-09-28&nbsp;00:00:00至2016-10-28&nbsp;24:00</p>
						</div>
					</td>
					<td>123458786410</td>
					<td>新注册会员</td>
					<td>限定商品(100)</td>
					<td>1000</td>
					<td><span class="am-ft-red">未提交</span></td>
					<td>
						<a href="javaScript:;" class="am-ft-red">撤销审核</a>
						<span class="am-ft-gray">|</span>
						<a href="javaScript:;" class="am-ft-d4"  ng-click="checkDteils('2')">查看详情</a>

					</td>
				</tr>
					<tr>
					<td>
						<div class="disCountCardBox">
							<img src="../static/base/images/entity.png" />
							<img src="../static/base/images/twoCode.png" />
							<div class="disCountCardR1 fn-clear">
								<div class="fn-left disCountAmount">
									<span class="am-ft-26">7.5</span>
									<span class="am-ft-10">折</span>
								</div>
								<div class="fn-left disCountCondition">
									<p class="am-ft-14">优惠券</p>
									<p class="am-ft-10">无门槛使用</p>
								</div>
							</div>
							<p>2016-09-28&nbsp;00:00:00至2016-10-28&nbsp;24:00</p>
						</div>
					</td>
					<td>123458786410</td>
					<td>新注册会员</td>
					<td>限定商品(100)</td>
					<td>1000</td>
					<td><span class="am-ft-red">未提交</span></td>
					<td>
						<a href="javaScript:;" class="am-ft-red" >删除</a>
						<span class="am-ft-gray">|</span>
						<a href="javaScript:;" class="am-ft-d4" ng-click="editDiscountCard()">编辑</a>
						<span class="am-ft-gray">|</span>
						<a href="javaScript:;" class="am-ft-green">提交审核</a>

					</td>
				</tr>
			</table>
		</div>
		<!--待审核/-->
		<!--使用中-->
		<div class="disCountCardList " ng-show="stausValue=='2'">
			<table class="table table-hover table-striped" frame='hsides'>
				<tr class="">
					<th scope="col" width="25%">卡券</th>
					<th scope="col" width="12%">ID</th>
					<th scope="col" width="13%">用户范围</th>
					<th scope="col" width="12%">商品范围</th>
					<th scope="col" width="10%">发放数量</th>
					<th scope="col" width="10%">已使用数量</th>
					<th>操作</th>
				</tr>
				<tr>
					<td>
						<div class="disCountCardBox">
							<img src="../static/base/images/virtual.png" />
							<div class="disCountCardR1 fn-clear">
								<div class="fn-left disCountAmount">
									<span class="am-ft-10">￥</span>
									<span class="am-ft-26">50</span>
								</div>
								<div class="fn-left disCountCondition">
									<p class="am-ft-14">优惠券</p>
									<p class="am-ft-10">无门槛使用</p>
								</div>
							</div>
							<p>2016-09-28&nbsp;00:00:00至2016-10-28&nbsp;24:00</p>
						</div>
					</td>
					<td>123458786410</td>
					<td>新注册会员</td>
					<td>限定商品(100)</td>
					<td>1000</td>
					<td>28</td>
					<td>
						<a href="javaScript:;" class="am-ft-red">暂停发放</a>
						<span class="am-ft-gray">|</span>
						<a href="javaScript:;" class="am-ft-d4"  ng-click="checkDteils('1')">查看详情</a>

					</td>
				</tr>
				<tr>
					<td>
						<div class="disCountCardBox">
							<img src="../static/base/images/entity.png" />
							<img src="../static/base/images/twoCode.png" />
							<div class="disCountCardR1 fn-clear">
								<div class="fn-left disCountAmount">
									<span class="am-ft-26">7.5</span>
									<span class="am-ft-10">折</span>
								</div>
								<div class="fn-left disCountCondition">
									<p class="am-ft-14">优惠券</p>
									<p class="am-ft-10">无门槛使用</p>
								</div>
							</div>
							<p>2016-09-28&nbsp;00:00:00至2016-10-28&nbsp;24:00</p>
						</div>
					</td>
					<td>123458786410</td>
					<td>新注册会员</td>
					<td>限定商品(100)</td>
					<td>1000</td>
					<td>28</td>
					<td>
						<a href="javaScript:;" class="am-ft-green">恢复使用</a>
						<span class="am-ft-gray">|</span>
						<a href="javaScript:;" class="am-ft-d4"  ng-click="checkDteils('2')">查看详情</a>
					</td>
				</tr>
			</table>
		</div>
		<!--使用中/-->

		<!--历史卡券-->
		<div class="disCountCardList" ng-show="stausValue=='3'">
			<table class="table table-hover table-striped" frame='hsides'>
				<tr class="">
					<th scope="col" width="25%">卡券</th>
					<th scope="col" width="12%">ID</th>
					<th scope="col" width="13%">用户范围</th>
					<th scope="col" width="12%">商品范围</th>
					<th scope="col" width="10%">发放数量</th>
					<th scope="col" width="10%">已使用数量</th>
					<th>操作</th>
				</tr>
				<tr>
					<td>
						<div class="disCountCardBox">
							<img src="../static/base/images/virtual.png" />
							<div class="disCountCardR1 fn-clear">
								<div class="fn-left disCountAmount">
									<span class="am-ft-10">￥</span>
									<span class="am-ft-26">50</span>
								</div>
								<div class="fn-left disCountCondition">
									<p class="am-ft-14">优惠券</p>
									<p class="am-ft-10">无门槛使用</p>
								</div>
							</div>
							<p>2016-09-28&nbsp;00:00:00至2016-10-28&nbsp;24:00</p>
						</div>
					</td>
					<td>123458786410</td>
					<td>新注册会员</td>
					<td>限定商品(100)</td>
					<td>1000</td>
					<td>28</td>
					<td>
						<a href="javaScript:;" class="am-ft-d4"  ng-click="checkDteils('1')">查看详情</a>
					</td>
				</tr>
				<tr>
					<td>
						<div class="disCountCardBox">
							<img src="../static/base/images/entity.png" />
							<img src="../static/base/images/twoCode.png" />
							<div class="disCountCardR1 fn-clear">
								<div class="fn-left disCountAmount">
									<span class="am-ft-26">7.5</span>
									<span class="am-ft-10">折</span>
								</div>
								<div class="fn-left disCountCondition">
									<p class="am-ft-14">优惠券</p>
									<p class="am-ft-10">无门槛使用</p>
								</div>
							</div>
							<p>2016-09-28&nbsp;00:00:00至2016-10-28&nbsp;24:00</p>
						</div>
					</td>
					<td>123458786410</td>
					<td>新注册会员</td>
					<td>限定商品(100)</td>
					<td>1000</td>
					<td>28</td>
					<td>
						<a href="javaScript:;" class="am-ft-d4"  ng-click="checkDteils('2')">查看详情</a>

					</td>
				</tr>
			</table>
		</div>
		<!--历史卡券/-->
	</div>
</div>
<!--------------- Content end ----------------->
<!--------------- Cover start ----------------->
<!--待审核 虚拟券 查看详情-->
<div class="creatDiscountCardCover" ng-show="virtualFrame=='1'" ng-click="closeDia()">
	<!--虚拟弹框1 start-->
	<div class="creatCardPreviewBoxXuni1 xnxl" >
		<img class="closeDia" ng-click="closeDia()" src="../static/base/images/colseDiscountCard.png"  ng-click="closeDia()"/>
		<div class="discountCardPreview ">
			<!--cardimg-->
			<div class="disCountCardBox disCountCardBox2">
				<img src="../static/base/images/virtual.png" />
				<div class="disCountCardR1 disCountCardR1-1 fn-clear">
					<div class="fn-left disCountAmount">
						<span class="am-ft-24">￥</span>
						<span class="am-ft-48">50</span>
					</div>
					<div class="fn-left disCountCondition">
						<p class="am-ft-24 dctcDes">优惠券</p>
						<p class="am-ft-12 dctcDes">无门槛使用</p>
					</div>
				</div>
				<p class="liveDate">2016-09-28&nbsp;00:00:00至2016-10-28&nbsp;24:00</p>
			</div>
			<!--carddetail-->
			<img class="dctcDetailBg" src="../static/base/images/yhq_bg_03.png" />
			<div class="descText">
				<p>金卡会员可用，每人限1张，不可叠加，1000张</p>
				<div class="descTextBoundary"></div>
				<div class="rightCommodityBox  rightCommodityBox1 fn-clear">
					<!--<div class="col-md-1"></div>-->
					<div class="circleBorder">
						<img src="../static/base/images/yhq_01.png" />
					</div>
					<div class="rightCommodityDes fn-left">
						<p class="desLin1">适用商品
							<a>100&nbsp;</a>款</p>
					</div>
				</div>
				<div class="rightCommodityBox fn-clear">
					<div class="circleBorder2">
						<img src="../static/base/images/yhq_02.png" />
					</div>
					<div class="rightommodityDes fn-left">
						<p class="desLin1">适用门店
							<a>8&nbsp;</a>家</p>
					</div>
				</div>
			</div>
			<div ng-show="stausValue=='3'" class="historyCard">
				<button class="blueGroundWhiteBtn" ng-click="createCard()">创建类似优惠卡券</button>
			</div>
		</div>
	</div>
</div>	
<!--待审核 虚拟券 查看详情-->
	<!--使用中 虚拟券 查看详情-->
<div class="creatDiscountCardCover" ng-show="virtualFrame=='2'" ng-click="closeDia()">	
	<div class="creatCardPreviewBoxXuni2 xnbxl" >
		<img class="closeDia" src="../static/base/images/colseDiscountCard.png"  ng-click="closeDia()"/>
		<div class="discountCardPreview ">
			<!--cardimg-->
			<div class="disCountCardBox disCountCardBox2">
				<img src="../static/base/images/virtual.png" />
				<div class="disCountCardR1 disCountCardR1-1 fn-clear">
					<div class="fn-left disCountAmount">
						<span class="am-ft-24">￥</span>
						<span class="am-ft-48">50</span>
					</div>
					<div class="fn-left disCountCondition">
						<p class="am-ft-24 dctcDes">优惠券</p>
						<p class="am-ft-12 dctcDes">无门槛使用</p>
					</div>
					<div class="fn-left disCountCondition">
					</div>
				</div>
				<p class="liveDate">2016-09-28&nbsp;00:00:00至2016-10-28&nbsp;24:00</p>
			</div>
			<!--carddetail-->
			<img class="dctcDetailBg" src="../static/base/images/yhq_bg_03.png" />
			<div class="descText">
				<p>金卡会员可用，每人限1张，不可叠加，1000张</p>
				<div class="descTextBoundary"></div>
				<div class="rightCommodityBox  rightCommodityBox1 fn-clear">
					<!--<div class="col-md-1"></div>-->
					<div class="circleBorder">
						<img src="../static/base/images/yhq_01.png" />
					</div>
					<div class="rightCommodityDes fn-left">
						<p class="desLin1">适用商品
							<a>100&nbsp;</a>款</p>
					</div>
				</div>
				<div class="rightCommodityBox fn-clear">
					<div class="circleBorder2">
						<img src="../static/base/images/yhq_02.png" />
					</div>
					<div class="rightommodityDes fn-left">
						<p class="desLin1">适用门店
							<a>8&nbsp;</a>家</p>
					</div>
				</div>
			</div>
		</div>
		<!--发放数量-->
		<div class="fn-right discountCardNumberList ">
			<p>发放数量:
				<a>1000</a>份</p>
			<div class="discountCardNumber">
				<div class="col-md-3 cardNumberListImg"><img src="../static/base/images/yhq_huiyuan_07.png" /></div>
				<div class="col-md-9 cardNumberListDes">
					<p><strong>优惠券号表及使用情况</strong></p>
					<p>优惠券号由系统生成</p>
				</div>

			</div>
		</div>
	</div>
	</div>
	<!--使用中 虚拟券 查看详情-->
	<!--待审核 实物券 查看详情-->
<div class="creatDiscountCardCover" ng-show="entityFrame=='1'" ng-click="closeDia()">		
	<div class="creatCardPreviewBoxXuni2 sjxl" >
		<img class="closeDia" ng-click="closeDia()" src="../static/base/images/colseDiscountCard.png" />
		<div class="discountCardPreview ">
			<!--cardimg-->
			<div class="disCountCardBox disCountCardBox2">
				<img src="../static/base/images/yhq_shiti_06.png" />
				<img src="../static/base/images/yhq_sys_03.png" />
				<div class="disCountCardR1 disCountCardR1-1 fn-clear">
					<div class="fn-left disCountAmount">
						<span class="am-ft-24">￥</span>
						<span class="am-ft-48">50</span>
					</div>
					<div class="fn-left disCountCondition">
						<p class="am-ft-24 dctcDes">优惠券</p>
						<p class="am-ft-12 dctcDes">无门槛使用</p>
					</div>
				</div>
				<p class="liveDate">2016-09-28&nbsp;00:00:00至2016-10-28&nbsp;24:00</p>
			</div>
			<!--carddetail-->
			<img class="dctcDetailBg" src="../static/base/images/yhq_bg_03.png" />
			<div class="descText">
				<p>金卡会员可用，每人限1张，不可叠加，1000张</p>
				<div class="descTextBoundary"></div>
				<div class="rightCommodityBox  rightCommodityBox1 fn-clear">
					<!--<div class="col-md-1"></div>-->
					<div class="circleBorder">
						<img src="../static/base/images/yhq_01.png" />
					</div>
					<div class="rightCommodityDes fn-left">
						<p class="desLin1">适用商品
							<a>100&nbsp;</a>款</p>
					</div>
				</div>
				<div class="rightCommodityBox fn-clear">
					<div class="circleBorder2">
						<img src="../static/base/images/yhq_02.png" />
					</div>
					<div class="rightommodityDes fn-left">
						<p class="desLin1">适用门店
							<a>8&nbsp;</a>家</p>
					</div>
				</div>
			</div>
			<div ng-show="stausValue=='3'" class="historyCard">
				<button class="blueGroundWhiteBtn" ng-click="createCard()">创建类似优惠卡券</button>
			</div>
		</div>
		
	</div>
	</div>
	<!--待审核 查看详情-->
	<!--使用中  实物券 查看详情-->
<div class="creatDiscountCardCover" ng-show="entityFrame=='2'" ng-click="closeDia()">		
	<div class="creatCardPreviewBoxXuni2 xjbxl " >
		<img class="closeDia" ng-click="closeDia()" src="../static/base/images/colseDiscountCard.png" />
		<div class="discountCardPreview ">
			<!--cardimg-->
			<div class="disCountCardBox disCountCardBox2">
				<img src="../static/base/images/yhq_shiti_06.png" />
				<img src="../static/base/images/yhq_sys_03.png" />
				<div class="disCountCardR1 disCountCardR1-1 fn-clear">
					<div class="fn-left disCountAmount">
						<span class="am-ft-24">￥</span>
						<span class="am-ft-48">50</span>
					</div>
					<div class="fn-left disCountCondition">
						<p class="am-ft-24 dctcDes">优惠券</p>
						<p class="am-ft-12 dctcDes">无门槛使用</p>
					</div>
				</div>
				<p class="liveDate">2016-09-28&nbsp;00:00:00至2016-10-28&nbsp;24:00</p>
			</div>
			<!--carddetail-->
			<img class="dctcDetailBg" src="../static/base/images/yhq_bg_03.png" />
			<div class="descText">
				<p>金卡会员可用，每人限1张，不可叠加，1000张</p>
				<div class="descTextBoundary"></div>
				<div class="rightCommodityBox  rightCommodityBox1 fn-clear">
					<!--<div class="col-md-1"></div>-->
					<div class="circleBorder">
						<img src="../static/base/images/yhq_01.png" />
					</div>
					<div class="rightCommodityDes fn-left">
						<p class="desLin1">适用商品
							<a>100&nbsp;</a>款</p>
					</div>
				</div>
				<div class="rightCommodityBox fn-clear">
					<div class="circleBorder2">
						<img src="../static/base/images/yhq_02.png" />
					</div>
					<div class="rightommodityDes fn-left">
						<p class="desLin1">适用门店
							<a>8&nbsp;</a>家</p>
					</div>
				</div>
			</div>
		</div>
		<div class="fn-right discountCardNumberList cardNumberList2 ">
			<p class="dcCardNumber">优惠券号:
				<a>1234567890</a>
			</p>
			<div class="discountCardNumber">
				<div class="col-md-3 cardNumberListImg">
					<img src="../static/base/images/down2weima_07.png" /></div>
				<div class="col-md-9 cardNumberListDes">
					<p><strong>下载二维码</strong></p>
					<p>将下载的二维码放到自己设计的优惠券中</p>
				</div>

			</div>
			<div class="discountCardNumber">
				<div class="col-md-3 cardNumberListImg">
					<img src="../static/base/images/downTiaoxingma_10.png" /></div>
				<div class="col-md-9 cardNumberListDes">
					<p><strong>下载条形码</strong></p>
					<p>将下载的条形码放到自己设计的优惠券中</p>
				</div>

			</div>
		</div>
	</div>
	</div>
	<!--使用中  实物券 查看详情-->

<!--------------- Cover end ------------>
	<script>
	</script>
