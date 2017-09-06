<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div class="content-wrapper">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">创建会员联盟</h2>
		<a href="javascript:;" class="line-btn fn-right" ng-click="cancelOrGoback('memberUnionCreate')">返回</a>
	</div>
	<div class="col-md-11 vipCloudRow3">
		<div style="width: 53%;">
			<div class="vipOwnBrand">
				<div><img class="vipOwnBrandLogo" ng-src="{{unionLogo}}" /></div>
				<div class="" style="float: left;">
					<p class="am-ft-16">{{brandName}}</p>
					<p>品牌类型：{{brandJoinType}}</p>
				</div>
			</div>
		</div>
		<div class="createUnionAfter">
			<p>创建联盟后</p>
			<p class="am-ft-14">1、您可以统一管理加入该会员联盟的所有商户的所有会员。</p>
			<p class="am-ft-14">2、打通所有参与该联盟的会员，强化会员关系管理。</p>
		</div>
	</div>
	<div class="col-md-11  memberunioncreate">
		<div class="createUnionContent col-md-12">
			<p>1、填写会员联盟基本信息</p>
			<div action="" class="fn-clear createUnionForm">
				<form id="memUnionName">
					<div class="fn-clear ">
					<span style="width:175px" class="fn-left">会员联盟名称：</span>
					<input type="text" class="fn-left" ng-value="memberUnionName" name="memberUnionName">
					<!--<input type="text" class="fn-left" value="{{memberUnionName}}" ng-model="mebUnionName" name="cloudName">-->
					<span class="fn-left unionNameDes">请输入4-32位的名称<br/>会员联盟名称一旦成立，不可修改</span>
				</div>
				<div class="fn-clear">
					<span style="width:175px" class="fn-left">简称：</span>
					<!--<input type="text" class="fn-left" value="{{memberUnionShortName}}" ng-model="mebUnionDesc" name="cloudName">-->
					<input type="text" class="fn-left" ng-value="memberUnionShortName"  name="shortName">
					<span class="fn-left unionNameDes1">请输入4-10位的简称</span>
				</div>
				</form>
				<div class="ownshopListcontent">
					<div class="abc fn-clear">
						<span style="width:175px" class="fn-left">将同时加入的直营门店：</span>
						<span class="fn-left shopNum">{{shopLists.length}}个</span>
						<span class="fn-left fold foldb"><a href="javascript:;"></a></span>
						<!--<span class="fn-left unfold unfoldb"><a href="javascript:;">展开</a></span>-->
					</div>
					<div class="ownshopListbox ownshopListboxb">
						<table class="table  table-hover table-striped table-bordered" style="margin-bottom: 0px;">
							<tr>
								<th>门店编号</th>
								<th>门店名称</th>
								<th>所属商户</th>
								<th>门店地址</th>
							</tr>
							<tr ng-repeat="shopList in shopLists">
								<td>{{shopList.shopNum}}</td>
								<td>{{shopList.shopName}}</td>
								<td>{{shopList.shopName}}</td>
								<td>{{shopList.province}}&nbsp;&nbsp;{{shopList.city}}&nbsp;&nbsp;{{shopList.district}}&nbsp;&nbsp;{{shopList.shopAddr}}</td>
							</tr>
						</table>
					</div>
				</div>

			</div>
			<div class="membercreatechoose">
				<div class="membercreatestep2">
					<span>2、请选择一起加入的商户</span>
					<span>（同时加入商户的所有门店）</span>
				</div>
				<form>
					<div>
						<table class="table table-hover table-striped table-bordered">
							<tr>
								<th class="col-lg-1"></th>
								<th class="col-lg-2">商户编号</th>
								<th class="col-lg-2">商户名称</th>
								<th class="col-lg-2">直营门店数</th>
								<th class="col-lg-3">地址</th>
								<th class="col-lg-2">状态</th>
							</tr>
							<tr ng-repeat="orgList in orgLists" ng-class="{true:'bgGrey'}[orgList.memberUnionName!='']">
								<td><input ng-disabled="orgList.memberUnionName!=''" type="checkbox" ng-checked="orgList.check" ng-click="selectMember(this.orgList.orgId,orgLists,'one')" value="" /></td>
								<td>{{orgList.shopNum}}</td>
								<td>{{orgList.orgName}}</td>
								<td>{{orgList.storeNum}}个</td>
								<td>{{orgList.province}}&nbsp;&nbsp;{{orgList.city}}&nbsp;&nbsp;{{orgList.district}}&nbsp;&nbsp;{{orgList.shopAddr}}</td>
								<td><span ng-if="orgList.memberUnionName!=''">已加入</span>&nbsp;&nbsp;&nbsp;&nbsp;{{orgList.memberUnionName}}</td>
							</tr>
							<tr>
								<td colspan="6">
									<div class="fn-left fn-clear">
										<input type="checkbox" class="fn-left" ng-model="unJoinedgetchecked" ng-checked="unJoinedgetchecked" ng-click="selectMember(this.orgList.orgId,orgLists,'thisPage')" id="selectAllPro" />
										<label for="selectAllPro" class="fn-left">全选当前页</label>
										<input type="checkbox" class="fn-left" id="selectAllProA" ng-model="selectedAllData" ng-click="selectedAllUnionProduct()" />
										<label for="selectAllProA" class="fn-left">全选所有页</label>
									</div>
									<div class=" priv-pagelist fn-right price-pagelist">
										<div id="pageCreate"></div>
									</div>
								</td>
							</tr>
						</table>
					</div>
				</form>
				<button type="button" class="btn btn-primary fn-left" ng-click="saveCreateUnionMember()">保存</button>
				<button type="button" class="btn btn-default mgl20" ng-click="cancelOrGoback('memberUnionCreate')">取消</button>
				<!-- 分页 -->
				<!--ng-click="sureToAddMember-->
			</div>
		</div>
	</div>
</div>
<script>
	$(".foldb").children().html("展开")
		.parent().parent().next().hide();
		var foldflag=false;
	$(".foldb").click(function(){
		if(foldflag==true){
			$(this).children().html("展开");
			foldflag=false;
		}else{
			$(this).children().html("收起");
			foldflag=true;
		}
			$(this).children().parent().parent().next().stop().slideToggle();
	})
	
</script>