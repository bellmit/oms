<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->

<div class="content-wrapper content-wrapper-order">
	<div class="col-md-11 pageTitl fn-clear">
		<h2 class="am-ft-16 fn-left">优惠卡券管理</h2>
		<button class="addDiscount_btn" ng-click='addDiscount()'>添加优惠卡券</button>
	</div>
	<div class="col-md-11 disCountListBox fn-clear">
		<div ng-class="{true:'disCount_change'}[stausValue=='1']" class="fn-left disCount_info disCount_change" ng-click="changeStaus('1')">待审核({{couponNeedCheckList.showLength}})</div>
		<div ng-class="{true:'disCount_change'}[stausValue=='2']" class="fn-left disCount_info" ng-click="changeStaus('2')">使用中({{couponIsUseingList.showLength}})</div>
		<div ng-class="{true:'disCount_change'}[stausValue=='3']" class="fn-left disCount_info" ng-click="changeStaus('3')">历史卡券({{couponHistoryList.showLength}})</div>
		<!--待审核-->
		<div class="disCountCardList fn-clear" ng-show="stausValue=='1'">
			<table class="table table-hover table-striped disCountCardListHover" frame='hsides'>
				<tr class="">
					<th scope="col" width="25%">卡券</th>
					<th scope="col" width="8%">ID</th>
					<th scope="col" width="13%">适用范围</th>
					<th scope="col" width="10%">发放数量</th>
					<th scope="col" width="12%">创建</th>
					<th scope="col" width="10%">状态</th>
					<th>操作</th>
				</tr>
				<tr ng-repeat="obj in couponNeedCheckList" ng-class="{'discountListBg':obj.couponState=='0','discountListBg1':obj.couponState=='-1'}">
					<td>
						<div class="disCountCardBox" style="background: {{obj.colorValue}}">
							<img class="disCountCardPosition" src="../static/base/images/virtual.png" ng-if="obj.couponType == '0'" />
							<img class="disCountCardPosition" src="../static/base/images/entity.png" ng-if="obj.couponType == '1'" />
							<img class="twoCodePosition" src="../static/base/images/twoCode.png" ng-if="obj.couponType == '0'" />
							<div class="disCountCardR1 fn-clear">
								<div class="fn-left disCountAmount" ng-if="obj.couponModality == '1'">
									<p ng-if="obj.amountList.length == 1">
										<span class="am-ft-12">￥</span>
										<span class="am-ft-30">{{obj.amountList[0] | number:0}}</span>
									</p>
									<p ng-if="obj.amountList.length == 2">
										<span class="am-ft-12">￥</span>
										<span class="am-ft-30">{{obj.amountList[0] | number:0}}-{{obj.amountList[1] | number:0}}</span>
									</p>

								</div>
								<div class="fn-left disCountAmount" ng-if="obj.couponModality == '0'">
									<span class="am-ft-30">{{obj.discount | number:1}}</span>
									<span class="am-ft-12">折</span>
								</div>
								<div class="fn-left disCountCondition paddingl10">
									<p class="am-ft-16">{{obj.couponName | limitTo:8}}</p>
									<p class="am-ft-12" ng-if="obj.fullAmount == 0">无门槛使用</p>
									<p class="am-ft-12" ng-if="obj.fullAmount != 0">满{{obj.fullAmount}}元使用</p>
								</div>
							</div>
							<p class="">{{obj.activeTime}}&nbsp;00:00&nbsp;至&nbsp;{{obj.lapsedTime}}&nbsp;24:00</p>
						</div>
					</td>
					<td>{{obj.couponMsgId}}</td>
					<td>
						  <p ng-if="obj.memberScope != 'AllMember' && obj.memberScope != 'AllPeople'">限定会员</p> 
						  <p ng-if="obj.memberScope == 'AllPeople'">所有人</p> 
						  <p ng-if="obj.memberScope == 'AllMember'">所有会员</p> 
						  <p ng-if="obj.productScope!= 'AllProduct'">限定商品({{obj.productScopeList.length - 1}})</p> 
						  <p ng-if="obj.productScope == 'AllProduct'">全部商品</p> 
						  <p ng-if="obj.orgScope == 'AllShop'">全部门店</p> 
						  <p ng-if="obj.orgScope!= 'AllShop'">限定门店({{obj.orgScopeList.length - 1}})</p> 
				</td>
					<td ng-if="obj.couponCount == '-1'">不限数量</td>
					<td ng-if="obj.couponCount != '-1'">{{obj.couponCount}}</td>
					<td>
						<p>{{trueName}}</p>
						<p>{{obj.activeTime}}</p>
					</td>
					<td ng-if="obj.couponState == '0'"><span class="am-ft-red">未提交</span></td>
					<td ng-if="obj.couponState == '0' || obj.couponState == ''" class="paddinglr0">
						<a href="javaScript:;" class="am-ft-red" ng-click="deleteCoupon(obj)">删除</a>
						<span class="am-ft-splitt">|</span>
						<a href="javaScript:;" class="am-ft-d4" ng-click="editDiscountCard(obj,'1')">编辑</a>
						<span class="am-ft-splitt">|</span>
						<a href="javaScript:;" class="am-ft-green" ng-click="commitVerify(obj,'1')">提交审核</a>
					</td>
					<td ng-if="obj.couponState == '-1'"><span class="am-ft-red">未通过审核</span></td>
					<td ng-if="obj.couponState == '-1' || obj.couponState == ''" class="paddinglr0">
						<a href="javaScript:;" class="am-ft-red" ng-click="deleteCoupon(obj)">删除</a>
						<span class="am-ft-splitt">|</span>
						<a href="javaScript:;" class="am-ft-d4"  ng-click="checkDteils(obj,'1')">查看详情</a>
					</td>
					<td ng-if="obj.couponState == '1'"><span class="am-ft-orange">待审核</span></td>
					<td ng-if="obj.couponState == '1'" class="paddinglr0">
						<a href="javaScript:;" class="am-ft-d4" id="checkDteils1" ng-click="checkDteils(obj,'1')">查看详情</a>
						<!--<span class="am-ft-splitt">|</span>-->
						<div class="examineDiscount">
							<button  class="examineDiscountL" ng-click="commitVerify(obj,'-1')">不核准</button>
							<button  class="examineDiscountR" ng-click="commitVerify(obj,'2')">核准</button>
						</div>
						<!--<span class="am-ft-splitt">|</span>-->
						<!--<a href="javaScript:;" class="am-ft-red" ng-click="commitVerify(obj,'0')">撤销审核</a>-->
						<!--<span class="am-ft-splitt">|</span>-->
					</td>

				</tr>
			</table>

		</div>
		<!--待审核/-->
		<!--使用中-->
		<div class="disCountCardList " ng-show="stausValue=='2'">
			<table class="table table-hover table-striped disCountCardListHover" frame='hsides'>
				<tr class="">
					<th scope="col" width="25%">卡券</th>
					<th scope="col" width="12%">ID</th>
					<th scope="col" width="13%">适用范围</th>
					<th scope="col" width="10%">发放数量</th>
					<th scope="col" width="10%">创建</th>
					<th scope="col" width="10%">已使用数量</th>
					<th>操作</th>
				</tr>
				<tr ng-repeat="obj in couponIsUseingList" ng-class="{'discountListBg':obj.couponState == '4'}">
					<td>
						<div class="disCountCardBox" style="background: {{obj.colorValue}}">
							<img class="disCountCardPosition" src="../static/base/images/virtual.png" ng-if="obj.couponType == '0'" />
							<img class="disCountCardPosition" src="../static/base/images/entity.png" ng-if="obj.couponType == '1'" />
							<img class="twoCodePosition" src="../static/base/images/twoCode.png" ng-if="obj.couponType == '0'" />
							<div class="disCountCardR1 fn-clear">
								<div class="fn-left disCountAmount" ng-if="obj.couponModality == '1'">
									<p ng-if="obj.amountList.length == 1">
										<span class="am-ft-10">￥</span>
										<span class="am-ft-26">{{obj.amountList[0] | number:0}}</span>
									</p>
									<p ng-if="obj.amountList.length == 2">
										<span class="am-ft-10">￥</span>
										<span class="am-ft-18">{{obj.amountList[0] | number:0}}-{{obj.amountList[1] | number:0}}</span>
									</p>

								</div>
								<div class="fn-left disCountAmount " ng-if="obj.couponModality == '0'">
									<span class="am-ft-26">{{obj.discount | number:1}}</span>
									<span class="am-ft-10">折</span>
								</div>
								<div class="fn-left disCountCondition paddingl10">
									<p class="am-ft-16">{{obj.couponName | limitTo :5}}</p>
									<p class="am-ft-12" ng-if="obj.fullAmount == 0">无门槛使用</p>
									<p class="am-ft-12" ng-if="obj.fullAmount != 0">满{{obj.fullAmount | number:0}}元使用</p>
								</div>
							</div>
							<p>{{obj.activeTime}}&nbsp;00:00&nbsp;至&nbsp;{{obj.lapsedTime}}&nbsp;24:00</p>
						</div>
					</td>
					<td>{{obj.couponMsgId}}</td>
					<td>
						  <p ng-if="obj.memberScope != 'AllMember' && obj.memberScope != 'AllPeople'">限定会员</p> 
						  <p ng-if="obj.memberScope == 'AllPeople'">所有人</p> 
						  <p ng-if="obj.memberScope == 'AllMember'">所有会员</p> 
						  <p ng-if="obj.productScope!= 'AllProduct'">限定商品({{obj.productScopeList.length - 1}})</p> 
						  <p ng-if="obj.productScope == 'AllProduct'">全部商品</p> 
						  <p ng-if="obj.orgScope == 'AllShop'">全部门店</p> 
						  <p ng-if="obj.orgScope!= 'AllShop'">限定门店({{obj.orgScopeList.length - 1}})</p> 
					</td>
					<td ng-if="obj.couponCount == '-1'">不限数量</td>
					<td ng-if="obj.couponCount != '-1'">{{obj.couponCount | number:0}}</td>
					<td>
						<p>{{trueName}}</p>
						<p>{{obj.activeTime}}</p>
					</td>
					<td>{{obj.useCount}}</td>
					<td ng-if="obj.couponState == '2'">
						<a href="javaScript:;" class="am-ft-red" ng-click="commitVerify(obj,'4')">暂停发放</a>
						<span class="am-ft-splitt">|</span>
						<a href="javaScript:;" class="am-ft-d4" id="checkDteils2" ng-click="checkDteils(obj,'2')">查看详情</a>

					</td>
					<td ng-if="obj.couponState == '4'">
						<a href="javaScript:;" class="am-ft-green" ng-click="commitVerify(obj,'2')">恢复发放</a>
						<span class="am-ft-splitt">|</span>
						<a href="javaScript:;" class="am-ft-d4" ng-click="checkDteils(obj,'2')">查看详情</a>
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
					<th scope="col" width="13%">适用范围</th>
					<th scope="col" width="10%">发放数量</th>
					<th scope="col" width="10%">创建</th>
					<th scope="col" width="10%">已使用数量</th>
					<th>操作</th>
				</tr>
				<tr ng-repeat="obj in couponHistoryList">
					<td>
						<div class="disCountCardBox" style="background: {{obj.colorValue}}">
							<img class="disCountCardPosition" src="../static/base/images/virtual.png" ng-if="obj.couponType == '0'" />
							<img class="disCountCardPosition" src="../static/base/images/entity.png" ng-if="obj.couponType == '1'" />
							<img class="twoCodePosition" src="../static/base/images/twoCode.png" ng-if="obj.couponType == '0'" />
							<div class="disCountCardR1 fn-clear">
								<div class="fn-left disCountAmount" ng-if="obj.couponModality == '1'">
									<p ng-if="obj.amountList.length == 1">
										<span class="am-ft-12">￥</span>
										<span class="am-ft-26">{{obj.amountList[0]| number:0}}</span>
									</p>
									<p ng-if="obj.amountList.length == 2">
										<span class="am-ft-12">￥</span>
										<span class="am-ft-18">{{obj.amountList[0]| number:0}}-{{obj.amountList[1]| number:0}}</span>
									</p>

								</div>
								<div class="fn-left disCountAmount" ng-if="obj.couponModality == '0'">
									<span class="am-ft-26">{{obj.discount| number:1}}</span>
									<span class="am-ft-12">折</span>
								</div>
								<div class="fn-left disCountCondition paddingl10">
									<p class="am-ft-14">{{obj.couponName  | limitTo :5}}</p>
									<p class="am-ft-12" ng-if="obj.fullAmount == 0">无门槛使用</p>
									<p class="am-ft-12" ng-if="obj.fullAmount != 0">满{{obj.fullAmount}}元使用</p>
								</div>
							</div>
							<p>{{obj.activeTime}}&nbsp;00:00&nbsp;至&nbsp;{{obj.lapsedTime}}&nbsp;24:00</p>
						</div>
					</td>
					<td>{{obj.couponMsgId}}</td>
					<td >
						 <p ng-if="obj.memberScope != 'AllMember' && obj.memberScope != 'AllPeople'">限定会员</p> 
						  <p ng-if="obj.memberScope == 'AllPeople'">所有人</p> 
						  <p ng-if="obj.memberScope == 'AllMember'">所有会员</p> 
						  <p ng-if="obj.productScope!= 'AllProduct'">限定商品({{obj.productScopeList.length - 1}})</p> 
						  <p ng-if="obj.productScope == 'AllProduct'">全部商品</p> 
						  <p ng-if="obj.orgScope == 'AllShop'">全部门店</p> 
						  <p ng-if="obj.orgScope!= 'AllShop'">限定门店({{obj.orgScopeList.length - 1}})</p> 
					</td>
					<td ng-if="obj.couponCount == '-1'">不限数量</td>
					<td ng-if="obj.couponCount != '-1'">{{obj.couponCount}}</td>
					<td>
						<p>{{trueName}}</p>
						<p>{{obj.activeTime}}</p>
					</td>
					<td>{{obj.useCount}}</td>
					<td>
						<a href="javaScript:;" class="am-ft-d4" id="checkDteils3" ng-click="checkDteils(obj,'3')">查看详情</a>
					</td>
				</tr>
			</table>

		</div>
		<div class="pagelist priv-pagelist">
			<div id="paging"></div>
		</div>
		<!--历史卡券/-->
	</div>
</div>
<!--------------- Content end ----------------->
<!--------------- Cover start ----------------->
<!--删除 确认弹框-->
<div class="am-dialog DelDialog fn-hide" id='DelDialog'>
	<div class="am-dialog-wrap">
		<div class="am-dialog-header">
			<h3 class="am-ft-center">确定删除？</h3>
		</div>
		<div class="dialogBtn am-flexbox" id="dialogBtn">
			<button type="button" class="am-flexbox-item btn am-button SavEdit" am-bg="blue">确认</button>
			<button type="button" class="am-flexbox-item btn am-button" id="closeDialog" am-bg="white">取消</button>
			<input type="reset" name="reset" style="display: none;" />
			<div class="fn-clear"></div>
		</div>
	</div>
</div>
<!--不核准 确认弹框-->
<div class="am-dialog DelDialog fn-hide" id="zzy1">
	<div class="am-dialog-wrap">
		<div class="am-dialog-header">
			<h3 class="am-ft-center">确定不核准该优惠券吗？</h3>
		</div>
		<div class="dialogBtn am-flexbox" id="zzy1DelBtn">
			<button type="button" class="am-flexbox-item btn am-button SavEdit" am-bg="blue">确认</button>
			<button type="button" class="am-flexbox-item btn am-button" id="zzy1CloseDialog" am-bg="white">取消</button>
			<input type="reset" name="reset" style="display: none;" />
			<div class="fn-clear"></div>
		</div>
	</div>
</div>
<!--暂停发放 确认弹框-->
<div class="am-dialog DelDialog fn-hide" id="zzy2">
	<div class="am-dialog-wrap">
		<div class="am-dialog-header">
			<h3 class="am-ft-center">确定要暂停发放吗？</h3>
		</div>
		<div class="dialogBtn am-flexbox" id="zzy2DelBtn">
			<button type="button" class="am-flexbox-item btn am-button SavEdit" am-bg="blue">确认</button>
			<button type="button" class="am-flexbox-item btn am-button" id="zzy2CloseDialog" am-bg="white">取消</button>
			<input type="reset" name="reset" style="display: none;" />
			<div class="fn-clear"></div>
		</div>
	</div>
</div>
<!--弹框-->
<div class="creatDiscountCardCover" ng-show="couponType=='0' || couponType=='1'">
	<div class="creatCardPreviewBoxXuni2" id="xjbxl">
		<img class="closeDia" ng-click="closeDia()" src="../static/base/images/colseDiscountCard.png" />
		<div class="discountCardPreview ">
			<div class="disCountCardBox disCountCardBox2" style="background:{{colorValue}}">
				<img class="disCountCardPosition" ng-show="couponType=='0'" src="../static/base/images/virtual.png" />
				<img class="disCountCardPosition" ng-show="couponType=='1'" src="../static/base/images/yhq_shiti_06.png" />
				<img class="twoCodePosition" ng-show="couponType=='0'" src="../static/base/images/yhq_sys_03.png" />
				<div class="disCountCardR1 disCountCardR1-1 fn-clear">
					<div class="fn-left disCountAmount disCountAmount1 disCountAmountHome" ng-if="detailObj.couponModality == '1'">
						<span class="am-ft-24">￥</span>
						<span class="am-ft-46" ng-if="detailObj.amountList.length == 1">{{detailObj.amountList[0] | number:0}}</span>
						<span class="am-ft-34" ng-if="detailObj.amountList.length == 2">{{detailObj.amountList[0] | number:0}}-{{detailObj.amountList[1] | number:0}}</span>
					</div>
					<div class="fn-left disCountAmount disCountAmountHome" ng-if="detailObj.couponModality == '0'">
						<span class="am-ft-46">{{detailObj.discount | number:1}}</span>
						<span class="am-ft-18">折</span>
					</div>
					<div class="fn-left disCountCondition  disCountConditionHas">
						<p class="am-ft-24 dctcDes">{{detailObj.couponName |limitTo:4}}</p>
						<p class="am-ft-12 dctcDes" ng-if="detailObj.fullAmount == 0">无门槛使用</p>
						<p class="am-ft-12 dctcDes" ng-if="detailObj.fullAmount != 0">满{{detailObj.fullAmount| number:0}}元使用</p>
					</div>
				</div>
				<p class="liveDate">{{detailObj.activeTime}}&nbsp;00:00&nbsp;至&nbsp;{{detailObj.lapsedTime}}&nbsp;24:00</p>
			</div>
			<img class="dctcDetailBg" src="../static/base/images/yhq_bg_03.png" />
			<div class="descText descText1">
				<div class="descTextBox">
					<!--金卡会员可用，每人限1张，不可叠加，1000张-->
					<span ng-if="detailObj.memberScope == 'AllPeople'">所有人可用，</span>
					<span ng-if="detailObj.memberScope == 'AllMember'">所有会员可用，</span>
					<span ng-if="detailObj.memberScope != 'AllMember' && detailObj.memberScope != 'AllPeople'">限{{detailObj.memberScopeName}}使用</span>
					<p ng-if="detailObj.memberScope!='AllPeople'&&detailObj.memberScope!='AllMember'">
						<span>每人限{{detailObj.limitCollar | number:0}}张，</span>
						<span ng-if="detailObj.superposition=='n'">不可叠加.</span>
						<span ng-if="detailObj.superposition=='y'">可叠加.</span>
					</p>
					<span ng-if="detailObj.memberScope == 'AllPeople'||detailObj.memberScope == 'AllMember'">每人限{{detailObj.limitCollar}}张，</span>
					<span ng-if="detailObj.superposition=='n'&&(detailObj.memberScope == 'AllPeople'||detailObj.memberScope == 'AllMember')">不可叠加.</span>
					<span ng-if="detailObj.superposition=='y'&&(detailObj.memberScope == 'AllPeople'||detailObj.memberScope == 'AllMember')">可叠加.</span>
				</div>
				<div class="descTextBoundary"></div>
				<div class="rightCommodityBox  rightCommodityBox1 fn-clear">
					<div class="circleBorder">
						<img src="../static/base/images/yhq_01.png" />
					</div>
					<div class="rightCommodityDes fn-left">
						<p class="desLin1 am-cursor" ng-if="detailObj.productScope!='AllProduct'" ng-click="showFrame('1')">适用商品
							<span class="am-ft-blue" >{{detailObj.productScopeList.length - 1}}&nbsp;</span>款</p>
						<p class="desLin1" ng-if="detailObj.productScope=='AllProduct'">&nbsp;全部商品&nbsp;</p>

					</div>
				</div>
				<div class="rightCommodityBox fn-clear">
					<div class="circleBorder2">
						<img src="../static/base/images/yhq_02.png" />
					</div>
					<div class="rightommodityDes fn-left">
						<p class="desLin1 am-cursor" ng-if="detailObj.orgScope!='AllShop'" ng-click="showFrame('2')">适用门店
							<span class="am-ft-blue">{{detailObj.orgScopeList.length - 1}}&nbsp;</span>家</p>
						<p class="desLin1" ng-if="detailObj.orgScope=='AllShop'">&nbsp;全部门店&nbsp;</p>
					</div>
				</div>
			</div>
			<div ng-show="stausValue=='3'" class="historyCard">
				<button class="" ng-click="editDiscountCard(detailObj,'2')">创建类似优惠卡券</button>
			</div>
		</div>
		<div class="fn-right discountCardNumberList cardNumberList2" ng-show="stausValue=='2'&&couponType=='1'">
			<div class="notLimit" ng-if="couponCount=='-1'">
				<p class="dcCardNumber">优惠券号:
					<a>{{detailObj.couponMsgId}}</a>
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
			<div class="limtitNumber" ng-if="couponCount!='-1'">
				<p>发放数量:
					<a>{{detailObj.couponCount}}</a>份
				</p>
				<div class="discountCardNumber">
					<div class="col-md-3 cardNumberListImg">
						<img src="../static/base/images/yhq_xz_03.png" />
					</div>
					<div class="col-md-9 cardNumberListDes">
						<p><strong>优惠券号表下载</strong></p>
						<p>下载该表格，将表中的优惠券号打印到优惠券中</p>
					</div>
				</div>
			</div>
		</div>
		<div class="fn-right discountCardNumberList cardNumberList2" ng-show="stausValue=='2'&&couponType=='0'&&couponCount!='-1'">
			<div class="limtitNumber">
				<p>发放数量:
					<a>{{detailObj.couponCount}}</a>份
				</p>
				<div class="discountCardNumber">
					<div class="col-md-3 cardNumberListImg">
						<img src="../static/base/images/yhq_huiyuan_07.png" />
					</div>
					<div class="col-md-9 cardNumberListDes">
						<p><strong>优惠券号表及使用情况</strong></p>
						<p>优惠券号由系统生成</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!--------------- Cover end ------------>
<!--查看商品和门店弹框-->
	<div class="AddGoodsAndStoreItem  AddGoodsAndStoreItem1 fn-clear" ng-show="showtype=='1'">
		<div class="addItemTitle">
			<span>适用商品（{{countPro}}款）</span>
			<div>
				<img src="../static/base/images/closelogo.png" ng-click="closeProOrShop()" />
			</div>
		</div>
		<div class="col-md-12 addGoodsTableBox addGoodsTableBox1">
			<table class="addGoodsTable">
				<tr>
					<th scope="col" width="15%">款号</th>
					<th scope="col" width="19%">商品名称</th>
					<th scope="col" width="16%">品牌</th>
					<th scope="col" width="20%">品类</th>
					<th scope="col" width="10%">年份</th>
					<th >季节</th>
				</tr>
				<tr ng-repeat="pro in products">
					<td>{{pro.proModelnum}}</td>
					<td>{{pro.proName | limitTo:8}}<span ng-if="pro.proName.length>8">...</span></td>
					<td>{{pro.brandName}}</td>
					<td>{{pro.grandparentSortName}}/{{pro.parentSortName}}/{{pro.sortName}}</td>
					<td>{{pro.proYear}}</td>
					<td>{{pro.proSeason}}</td>
				</tr>
			</table>
		</div>
		<div class="fn-clear"></div>
	</div>
	<div class="AddGoodsAndStoreItem AddGoodsAndStoreItem1 fn-clear " ng-show="showtype=='2'">
		<div class="addItemTitle">
			<span>适用门店（{{countShop}}家）</span>
			<div>
				<img src="../static/base/images/closelogo.png" ng-click="closeProOrShop()" />
			</div>
		</div>
		<div class="col-md-12 addGoodsTableBox addGoodsTableBox1">
			<table class="addGoodsTable">
				<tr>
					<th width="32%">门店编号</th>
					<th >门店名称</th>
				</tr>
				<tr  ng-repeat="shop in orgList">
					<td>{{shop.orgId}}</td>
					<td>{{shop.shopName}}</td>
				</tr>
			</table>
		</div>
		<div class="col-md-12 checkAllBar checkAllBar2">
		</div>
		<div class="fn-clear"></div>
	</div>
	<!--提示文字信息-->
	<div id="message" class="messageBox" ng-show="msBox=='1'">
		<p ng-if="ms=='1'">优惠券已成功提交,请等待审核</p>
		<p ng-if="ms=='2'">该优惠券已通过审核,可以使用</p>
	</div>
<script type="text/javascript">
	$("#message").center();
	$("#xjbxl").center();
	$('.DelDialog').center();
	$('#closeDialog').click(function() {
		$('.DelDialog,.maskBg').hide();
	});
	$('#zzy1').center();
	$('#zzy1CloseDialog').click(function() {
		$('#zzy1,.maskBg').hide();
	});
	$('#zzy2').center();
	$('#zzy2CloseDialog').click(function() {
		$('#zzy2,.maskBg').hide();
	});
	$('.creatDiscountCardCover').click(function(e) {
		if(e.target.className == "creatDiscountCardCover ng-scope") {
			$('.creatDiscountCardCover').hide();
		}
	});
</script>