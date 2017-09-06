<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div class="content-wrapper">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">创建会员联盟</h2>
	</div>
	<div class="successwarning col-md-11">
		<img src="../static/base/images/right_orange.png" alt="" />
		<span>恭喜您，已成功创建会员联盟！</span>
	</div>
	<div class="col-md-11 vipCloudRow1 createBackground mgb0" ng-repeat="joinedMebUnionList in joinedMebUnionLists | filter:{memberUnionId:getMemberUnionId}">
		<img class="stateSign" ng-src="../static/base/images/status_created.png" />
		<div class="vipCloudHearder1" style="width:12%;">
			<img class="unionlog" ng-src="{{joinedMebUnionList.logo}}" />
		</div>
		<div class="vipCloudHearder2" style="width: 38%;">
			<p>{{joinedMebUnionList.memberUnionName}}</p>
			<span class="colorGery">联盟ID：</span><span class="colorBack">{{joinedMebUnionList.memberUnionId}}</span><br />
			<span class="colorGery">简称：</span><span class="mgr20 colorBack">{{joinedMebUnionList.shortName}}</span>
			<span class="colorGery mgl10">品牌：</span><span class="mgr20 colorBack">{{joinedMebUnionList.brandName}}</span><br />
			<span class="colorGery ">创建商户：</span><span class="colorBack">{{joinedMebUnionList.orgName}}</span>
			<span class="colorBack mgl20">{{joinedMebUnionList.createDate}}</span>
		</div>
		<div class="vipCloudHearder3" style="width: 35%;">
			<p>已加入商户：<a  href="javasccript:;" style="font-size:14px;color:#00afd4;padding-left: 5px;" ng-click="joinedStore(this.joinedMebUnionList,'joinedStore')">{{joinedMebUnionList.joinedMerchant}}个</a>&nbsp;&nbsp;未加入商户：<a style="font-size:14px;color:#00afd4;padding-left: 5px;"  href="javasccript:;"  ng-click="unJoinedStore(this.joinedMebUnionList,'unJoinedStore')">{{joinedMebUnionList.notJoinedMerchant}}个</a></p>
			<p>已加入门店：<a  href="javasccript:;" ng-click="joinedMemShop(this.joinedMebUnionList,'joinedMemShop')" style="font-size:14px;color:#00afd4;padding-left: 5px;">{{joinedMebUnionList.joinedShop}}个</a></p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;所有会员：<span style="font-size:14px;color:#333333;padding-left: 5px;">{{joinedMebUnionList.joinedMember}}个</span></p>
		</div>
		<div class="vipCloudHearder4" style="width: 15%;">
			<p ng-if="joinedMebUnionList.memberUnionStatus=='1'"><span class="am-ft-16" >状态：</span><span class="am-ft-16 resetVip " style="color: red;">已停用</span><button class="disuse disusea" ng-click="startUnion(this)">启用</button><br /></p>
			<p ng-if="joinedMebUnionList.memberUnionStatus=='0'"><span class="am-ft-16">状态：</span><span class="am-ft-16 resetVip " style="color: red;">启用</span><button class="disuse disusea" ng-click="disabledUnion(this)">停用</button><br /></p>
			<!--<p><a href="javascript:;" ng-click="dissolutionUnion(this)">解散联盟</a></p>-->
			<button>设置积分规则</button>
		</div>
	</div>
	<div class="col-md-11 setVipCardType">
		<span>提示：您还没有设置会员卡类型，无法正常使用会员联盟</span>
		<button type="button"  onclick="toMebCardType()">立即设置会员卡类型</button>
	</div>
	<!--<div class="col-md-11 joinCptSet " id="joinCptSet1">
		<p>您还没有为“{{mebUnionName}}”设置会员卡类型，
			<a href="javascript:;" onclick="toMebCardType()"><span>立即设置会员卡类型</span></a>
		</p>
		<p>您还没有为“{{mebUnionName}}”设置会员积分规则，
			<a href="javascript:;"><span>立即设置会员积分规则</span></a>
		</p>
	</div>-->
</div>
<script type="text/javascript"> 
       	function toMebCardType(){
       		var location=window.location.href;
	     	var newlocation=location.substr(0, location.indexOf('page/'));
	     	localStorage.menuId = "51";
	  		localStorage.menuName = "类型设置(新)";
			localStorage.nodeId="343";
	     	window.location.href=newlocation+"page/public/home.jsp#/membergrade";
	     	secMenus(51,'会员管理');
	     	secNode(343,0);
       	}
</script>