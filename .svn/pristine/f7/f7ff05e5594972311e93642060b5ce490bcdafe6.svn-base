
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--------------- Content start ----------------->
<div class="content-wrapper content-wrapper-order disCountCard-content-wrapper">
			  	<div class="col-md-11  addDiscountNav">
			  		<div class="addDiscountNav3_01 fn-left">
			  			<span class="discound_nav">卡券信息输入</span>
			  		</div>
				    <div class="addDiscountNav3_02">
			  			<span class="discound_nav">卡券数量及范围数量</span>
				    </div>
				    <div class="addDiscountNav3_03">
			  			<span class="discound_nav">添加成功</span>
				    </div>
			    </div>
	<div class="fn-clear"></div>
	<div class="col-md-11 newDisCountBox">
		<p class="newDisCountBoxtTitle">卡券已成功添加</p>
			<div class="addDiscountCardPreview ">
				<div id="bgColor3" class="disCountCardBox disCountCardBox2">
					<img class="disCountCardPosition" ng-show="couponType=='0'" src="../static/base/images/virtual.png" />
					<img class="disCountCardPosition" ng-show="couponType=='1'" src="../static/base/images/yhq_shiti_06.png" />
					<img class="twoCodePosition" ng-show="couponType=='0'" src="../static/base/images/yhq_sys_03.png" />
					<div class="disCountCardR1 disCountCardR1-1 fn-clear">
						<div class="fn-left disCountAmount mgr10 mgt10 addStep3_Price" ng-show="amount=='1'&&couponModality=='1'">
							<span class="am-ft-24">￥</span>
							<span class="am-ft-46">{{fixedLimit| number:0}}</span>
						</div>
						<div class="fn-left disCountAmount addStep3Amount  addStep3_Price" style="width: 136px;" ng-show="amount=='0'&&couponModality=='1'">
							<span class="am-ft-24">￥</span>
							<span class="am-ft-34 randomLineheight">{{randomMIn | number:0}}&nbsp;-</span>
							<span class="am-ft-34">{{randomMax | number:0}}</span>	
						</div>
						<div class="fn-left disCountAmount disCountAmountStep addStep3_Price"  ng-show="couponModality=='0'">
							<span class="am-ft-46">{{discount | number:1}}</span>
							<span class="am-ft-18">折</span>
						</div>
						<div class="fn-left  addStep3Name mgl20">
							<p class="am-ft-20 disCountCardP">{{disCountName}}</p>
							<p class="am-ft-12 plinehight" ng-show="fullAmount!='0'">满{{fullAmount | number:0}}元使用</p>
							<p class="am-ft-12 plinehight" ng-show="fullAmount=='0'">无门槛使用</p>
						</div>
					</div>
					<p class="mgt0">{{activeTime}}&nbsp;00:00&nbsp;至&nbsp;{{lapsedTime}}&nbsp;24:00</p>
				</div>
				<img class="dctcDetailBg mgb20" src="../static/base/images/yhq_bg_03.png" />
				<div class="descText mgl-50">
					<div class="descTextBox"> 
						<span ng-if="memberScope=='AllPeople'">非会员可用,</span>
						<span ng-if="memberScope=='AllMember'">所有会员可用,</span>
						<span ng-if="memberScope!='AllPeople'&&memberScope!='AllMember'">限{{memberUnionName}}{{gradeName}}会员使用</span>
						<p ng-if="memberScope!='AllPeople'&&memberScope!='AllMember'">
							<span>每人限{{limitCollar}}张，</span>
							<span ng-if="superposition=='n'">不可叠加.</span>
							<span ng-if="superposition=='y'">可叠加.</span>
						</p>
						<span ng-if="memberScope=='AllPeople'||memberScope=='AllMember'">每人限{{limitCollar | number:0}}张,</span>
						<span ng-if="superposition=='n'&&(memberScope=='AllPeople'||memberScope=='allMember')">不可叠加.</span>
						<span ng-if="superposition=='y'&&(memberScope=='AllPeople'||memberScope=='allMember')">可叠加.</span>
					</div>
					<div class="descTextBoundary"></div>
					<div class="rightCommodityBox  rightCommodityBox1 fn-clear">
						<div class="circleBorder">
							<img src="../static/base/images/yhq_01.png" />
						</div>
						<div class="rightCommodityDes fn-left">
								<!--<span ng-if="productScope1=='1'">适用商品<a href="javascript:;" id="showFrame1" >{{countPro}}&nbsp;</a>款</span>-->
								<div class="am-cursor" ng-if="productScope!='AllProduct'" ng-click="showFrame('1')">适用商品<span class="showFrame" >&nbsp;{{countPro}}&nbsp;</span>款</div>
								<span ng-if="productScope=='AllProduct'">适用所有商品</span>
						</div>
					</div>
					<div class="rightCommodityBox fn-clear" >
						<div class="circleBorder2">
							<img src="../static/base/images/yhq_02.png" />
						</div>
						<div class="rightCommodityDes fn-left">
								<!--<span ng-if="orgScope1=='1'">适用门店<a href="javascript:;" id="showFrame2">{{countShop}}&nbsp;</a>家</span>-->
								<div class="am-cursor" ng-if="orgScope!='AllShop'" ng-click="showFrame('2')">适用门店<span class="showFrame" >&nbsp;{{countShop}}&nbsp;</span>家</div>
								<span ng-if="orgScope=='AllShop'">适用所有门店</span>
						</div>
					</div>
					<div class=" fn-clear"></div>
				</div>
					<div class="faNumber" ng-if="couponCount!='-1'">发放数量：{{couponCount}}份</div>
					<button class="noSubmit_btn" ng-click="submitCheck('1')">暂不提交</button>
					<button class="submit_btn" ng-click="submitCheck('2')">提交审核</button>
			</div>
		
		</div>	
</div>
<!--------------- Content end ----------------->
	<!--查看商品和门店弹框-->
	<div class="AddGoodsAndStoreItem  AddGoodsAndStoreItem1 fn-clear " ng-show="showtype=='1'">
	<!--<div id="proFrame" class="AddGoodsAndStoreItem  AddGoodsAndStoreItem1 fn-clear fn-hide " >-->
		<div class="addItemTitle">
			<span>适用商品（{{countPro}}款）</span>
			<div>
				<img src="../static/base/images/closelogo.png" class="closeProOrShop" ng-click="closeProOrShop()" />
				<!--<img src="../static/base/images/closelogo.png" class="closeProOrShop" />-->
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
	<!--<div id="shopFrame" class="AddGoodsAndStoreItem AddGoodsAndStoreItem1 fn-clear fn-hide" >-->
		<div class="addItemTitle">
			<span>适用门店（{{countShop}}个）</span>
			<div>
				<img src="../static/base/images/closelogo.png"  ng-click="closeProOrShop()" />
				<!--<img src="../static/base/images/closelogo.png" class="closeProOrShop" />-->
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
<script type="text/javascript">
	$(function(){
		$(".maskBg").click(function(e){
			if(e.target.className == "maskBg fn-hide") {
				$('.AddGoodsAndStoreItem,.maskBg').hide();
			}
			
		});
		
	});
</script>