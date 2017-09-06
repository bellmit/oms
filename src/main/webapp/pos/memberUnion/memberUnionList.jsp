<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<div class="content-wrapper">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">会员联盟</h2>
	</div>
	<!-- 缺省 -->
	<div class="col-md-11 vipCloudRow1">
		<img class="stateSign" src="../static/base/images/status_default.png" />
		<div class="vipCloudHearder1" style="width:12%;">
			<img class="unionlog" src="../static/base/images/ownStoreLogo.png" />
		</div>
		<div class="vipCloudHearder2" style="width: 38%;">
			<p>直营门店会员联盟<span class="color999 am-ft-14">(缺省)</span></p>
		</div>
		<div class="vipCloudHearder3" style="width: 35%;">
			<p class="colorGery am-ft-14">门店共计:{{shopCount}}个</p>
			<p class="color999">创建商户时默认开通的会员联盟（即自营门店会员联盟），</p>
			<p class="color999">已打通商户下面的所有直营门店的所有会员</p>
		</div>
		<div class="vipCloudHearder4" style="width: 15%;">
			<span class="am-ft-16">状态：</span><span class="am-ft-16 resetVip">启用</span>
			<button ng-click="setIntergrationRule()" class="mgt5">设置积分规则</button>
		</div>
	</div>
	<!-- 已创建 -->
	<div class="col-md-11 vipCloudRow1 createBackground" ng-repeat="joinedMebUnionList in joinedMebUnionLists | filter:{memberUnionListType:'create',memberUnionStatus:'!2'}">
		<img class="stateSign" src="../static/base/images/status_created.png" />
		<div class="vipCloudHearder1" style="width:12%;">
			<img class="unionlog" ng-src="{{joinedMebUnionList.logo}}" />
		</div>
		<div class="vipCloudHearder2" style="width: 38%;">
			<p>{{joinedMebUnionList.memberUnionName}}<span class="color999 am-ft-14">（{{joinedMebUnionList.memberUnionName}}）</span></p>
			<span class="colorGery">联盟ID：</span>
			<span class="colorGery mgr20">{{joinedMebUnionList.memberUnionId}}</span>
			<span class="colorGery">品牌：</span>
			<span class="colorGery">{{joinedMebUnionList.brandName}}</span><br />
			<span class="colorGery">创建商户：</span><span class="colorGery">{{joinedMebUnionList.orgName}}</span><br />
			<span class="colorGery">创建时间：</span><span class="colorGery">{{joinedMebUnionList.createDate}}</span>
		</div>
		<div class="vipCloudHearder3" style="width: 35%;">
			<p>已加入商户:
				<a href="javascript:;" class="am-ft-blue mgl5 am-ft-14" ng-click="joinedStore(this.joinedMebUnionList,'joinedStore')">{{joinedMebUnionList.joinedMerchant}}个</a>&nbsp;&nbsp;未加入商户：
				<a href="javascript:;" class="am-ft-blue mgl5 am-ft-14" ng-click="unJoinedStore(this.joinedMebUnionList,'unJoinedStore')">{{joinedMebUnionList.notJoinedMerchant}}个</a>
			</p>
			<p>已参与门店:
				<a href="javascript:;" class="am-ft-blue mgl5 am-ft-14" ng-click="joinedMemShop(this.joinedMebUnionList,'joinedMemShop')"> {{joinedMebUnionList.joinedShop}}个</a>
			</p>
			<p>所有会员：<span class="am-ft-black mgl5 am-ft-14">{{joinedMebUnionList.joinedMember}}个</span></p>
		</div>
		<div class="vipCloudHearder4" style="width: 15%;">

			<p ng-if="joinedMebUnionList.memberUnionStatus=='1'"><span class="am-ft-16">状态：</span><span class="am-ft-16 resetVip " style="color: red;">已停用</span><button class="disuse disusea" ng-click="startUnion(this)">启用</button><br /></p>
			<p ng-if="joinedMebUnionList.memberUnionStatus=='0'"><span class="am-ft-16">状态：</span><span class="am-ft-16 resetVip " style="color: red;">启用</span><button class="disuse disusea" ng-click="disabledUnion(this)">停用</button><br /></p>
			<p>
				<a href="javascript:;" ng-click="dissolutionUnion(this)">解散联盟</a>
			</p>
			<button ng-click="setIntergrationRule()">设置积分规则</button>
		</div>
	</div>
	<!-- 已加入 -->
	<div class="col-md-11 vipCloudRow1 joinBackground" ng-repeat="joinedMebUnionList in joinedMebUnionLists | filter:{memberUnionListType:'join',memberUnionStatus:'!2'}">
		<img class="stateSign" src="../static/base/images/status_join.png" />
		<div class="vipCloudHearder1" style="width:12%;">
			<img class="unionlog" ng-src="{{joinedMebUnionList.logo}}" />
		</div>
		<div class="vipCloudHearder2" style="width: 38%;">
			<p>{{joinedMebUnionList.memberUnionName}}<span class="color999 am-ft-14">（{{joinedMebUnionList.memberUnionName}}）</span></p>
			<span class="colorGery">联盟ID：</span>
			<span class="colorBack mgr20">{{joinedMebUnionList.memberUnionId}}</span>
			<span class="colorGery">品牌：</span><span class="colorBack">{{joinedMebUnionList.brandName}}</span><br />
			<span class="colorGery">创建商户：</span>
			<span class="colorBack">{{joinedMebUnionList.orgName}}</span><br />
			<span class="colorGery">创建时间：</span>
			<span class="colorBack">{{joinedMebUnionList.createDate}}</span>
		</div>
		<div class="vipCloudHearder3" style="width: 35%;">
			<p>已加入商户:
				<a href="javascript:;" class="am-ft-blue mgl5 am-ft-14" ng-click="joinedStore(this.joinedMebUnionList)">{{joinedMebUnionList.joinedMerchant}}个</a>
				&nbsp;&nbsp;未加入商户：
				<a href="javascript:;" class="am-ft-blue mgl5 am-ft-14" ng-click="unJoinedStore(this.joinedMebUnionList)">{{joinedMebUnionList.notJoinedMerchant}}个</a>
			</p>
			<p>已参与门店:
				<a href="javascript:;" class="am-ft-blue mgl5 am-ft-14" ng-click="joinedMemShop(this.joinedMebUnionList)">{{joinedMebUnionList.joinedShop}}个</a>
			</p>
			<p>所有会员：<span class="am-ft-black mgl5 am-ft-14">{{joinedMebUnionList.joinedMember}}个</span></p>
		</div>
		<div class="vipCloudHearder4" style="width: 15%;">
			<p ng-if="joinedMebUnionList.memberUnionStatus=='1'"><span class="am-ft-16">状态：</span><span class="am-ft-16 resetVip " style="color: red;">已停用</span><button class="disuse disusea" ng-click="startUnion(this)">启用</button><br /></p>
			<p ng-if="joinedMebUnionList.memberUnionStatus=='0'"><span class="am-ft-16">状态：</span><span class="am-ft-16 resetVip " style="color: red;">启用</span><button class="disuse disusea" ng-click="disabledUnion(this)">停用</button><br /></p>
			<p>
				<a href="javascript:;" ng-click="quitMemUnion(this)">退出联盟</a>
			</p>
			<p>
				<a href="javascript:;">查看积分规则</a>
			</p>
		</div>
	</div>
	<!-- 已解散 -->
	<div class="col-md-11 vipCloudRow1 disableBackground" ng-repeat="joinedMebUnionList in joinedMebUnionLists | filter:{memberUnionStatus:'2'}">
		<img class="stateSign" src="../static/base/images/status_disbanded.png" />
		<div class="vipCloudHearder1" style="width:12%;">
			<img class="unionlog" ng-src="{{joinedMebUnionList.logo}}" />
		</div>
		<div class="vipCloudHearder2" style="width: 38%;">
			<p>{{joinedMebUnionList.memberUnionName}}<span class="color9e9e am-ft-14">（{{joinedMebUnionList.memberUnionName}}）</span></p>
			<span class="color9e9e">联盟ID：</span>
			<span class="color9e9e mgr20">{{joinedMebUnionList.memberUnionId}}</span>
			<span class="color9e9e">品牌：</span>
			<span class="color9e9e">{{joinedMebUnionList.brandName}}</span><br />
			<span class="color9e9e">创建商户：</span>
			<span class="color9e9e">{{joinedMebUnionList.orgName}}</span><br />
			<span class="color9e9e">创建时间：</span>
			<span class="color9e9e">{{joinedMebUnionList.createDate}}</span>
		</div>
	</div>

	<div class="col-md-11 vipCloudRow2">
		<div class=" am-ft-14 vipCloudBanner" >
			<p>1、帮助您快速积累会员，提高自有会员数量，多种渠道发展会员；</p>
			<p>2、为联盟中的会员提供个性化的折扣和积分服务；</p>
			<p>3、加入联盟的会员，同时享受所有参与联盟商户的所有门店的联盟折扣服务。</p>
		</div>
	</div>
	<div class="fn-clear vipCloudRow3" ng-if="createMebUnionListBrands.length!=0">
		<div class="createUnionAfter" style="float:right;margin-right: 75px;">
			<p>创建会员联盟</p>
			<p class="am-ft-14">1、您可以统一管理加入该会员联盟的所有商户的所有会员。</p>
			<p class="am-ft-14">2、打通所有参与该联盟的会员，强化会员关系管理。</p>
		</div>
		<div style="width: 53%;border-right:1px solid #f0f0f0;" ng-repeat="createMebUnionListBrand in createMebUnionListBrands">
			<div class="vipOwnBrand">
				<div><img class="vipOwnBrandLogo" ng-src="{{createMebUnionListBrand.brandLogo}}" /></div>
				<div class="mgt5">
					<p class="am-ft-16">{{createMebUnionListBrand.brandName}}</p>
					<p>品牌类型：{{createMebUnionListBrand.brandJoinType}}</p>
				</div>
				<div class="goCreateMemUn" ng-click="toCreateMemberUnion(this.createMebUnionListBrand,'create')">
					<p><i class="fa fa-arrow-circle-right"></i>立即创建会员联盟</p>
				</div>
			</div>
		</div>

	</div> 
	<div class="col-md-11 vipCloudRow4" ng-if='canJoinMebUnionLists.length!=0'>
		<p>您可以加入的会员联盟：</p>
		<div style="width: 46%;margin-top: 10px;" class="vipCloudList" ng-class="{true:'float-right'}[$index%2!=0]" ng-repeat="canJoinMebUnionList in canJoinMebUnionLists">
			<!--row1-->
			<div class="vipCloudListR1">
				<div class="vipCloudListR1-1"><img ng-src="{{canJoinMebUnionList.logo}}" /></div>
				<div class="vipCloudListR1-2">
					<p>{{canJoinMebUnionList.memberUnionName}}</p>
					<span class="colorGery">联盟ID：</span><span class="colorBack">{{canJoinMebUnionList.memberUnionId}}&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="colorGery">品牌：</span><span class="colorBack">{{canJoinMebUnionList.brandName}}</span><br/>
					<span class="colorGery">创建商户：</span><span class="colorBack">{{canJoinMebUnionList.orgName}}</span><br />
					<span class="colorGery">创建时间：</span><span class="colorBack">{{canJoinMebUnionList.createDate}}</span>
				</div>
				<div class="vipCloudListR1-3"><img src="../static/base/images/status_notJoin.png" /></div>
			</div>
			<!--row2-->
			<div class="vipCloudListR2">
				<div class="vipCloudListR2-1">
					<span class="colorBack">{{canJoinMebUnionList.joinedMerchant}}个</span>
					<span class="colorGery">已加入商户</span>
				</div>
				<div class="vipCloudListR2-1">
					<span class="colorBack">{{canJoinMebUnionList.joinedShop}}个</span>
					<span class="colorGery">已参与门店</span>
				</div>
				<div class="vipCloudListR2-1">
					<span class="colorBack">{{canJoinMebUnionList.joinedMember}}个</span>
					<span class="colorGery">所有会员</span>
				</div>
			</div>
			<!--row3-->
			<div class="vipCloudListR3">
				<p class="am-ft-16">加入会员联盟</p>
				<p>1、您可以统一使用加入该会员联盟的所有商户的所有会员。</p>
				<p>2、打通所有参与该联盟的会员，强化会员关系管理。</p>
			</div>
			<!--row4-->
			<div class="vipCloudListR4">
				<button ng-click="toJoinMemberUnion(this.canJoinMebUnionList,'join')">加入会员联盟</button>
			</div>
		</div>
		<div class="fn-clear"></div>
	</div>
</div>