<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div class="content-wrapper">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">会员联盟管理</h2>
        <a href="javascript:;" class="line-btn fn-right" ng-click="cancelOrGoback('showUnionMember')">返回</a>
	</div>
	<div class="col-md-11 vipCloudRow1 showBackground">
		<div class="vipCloudHearder1" style="width:12%;">
			<img class="unionlog" src="../static/base/images/ownStoreLogo.png" />
		</div>
		<div class="vipCloudHearder2" style="width: 60%;">
			<p class="am-ft-16">{{memberUnionName}}</p>
			<span class="am-ft-12">简称：{{memberUnionName}}&nbsp;&nbsp;&nbsp;&nbsp;品牌：{{brandName}}</span><br />
			<span class="am-ft-12">创建商户：{{orgName}}&nbsp;&nbsp;&nbsp;&nbsp;创建时间：{{createDate}}</span>
		</div>
	</div>
	<div class="addListtSetting col-lg-11">
		<div class="settingFlag fn-clear">
			<div class="commonflaga flagActivea fn-left" ng-click="showSettingData()" ng-class="{true:'flagActivea '}[obj.showSetPart=='a']">已加入商户（{{unionListsCount}}个）</div>
			<div class="commonflaga fn-left" ng-click="showSettingShop()" ng-class="{true:'flagActivea '}[obj.showSetPart=='b']">未加入商户（{{notJoinMemberCount}}个）</div>
			<div class="commonflaga fn-left" ng-click="showSettingPrice()" ng-class="{true:'flagActivea '}[obj.showSetPart=='c']">已加入门店（{{unionShopMemberCount}}个）</div>
		</div>
		<div class="settingcontent col-lg-12" style="border:0px">
			<div class="fn-clear" ng-show="obj.showSetPart=='a'">
				<table class="table table-hover table-striped table-bordered">
					<tr>
						<th scope="col">商户编号</th>
						<th scope="col">商户名称</th>
						<th scope="col">地址</th>
						<th scope="col">会员数量</th>
						<th scope="col">门店数量</th>
						<th scope="col" ng-if="orgIde==orgIda">操作</th>
					</tr>
					<tr ng-repeat="unionList in unionLists">
						<td>{{unionList.shopNum}}</td>
						<td>{{unionList.shopName}}</td>
						<td>{{unionList.province}} &nbsp;&nbsp;{{unionList.city}} &nbsp;&nbsp;{{unionList.district}}&nbsp;&nbsp;{{unionList.shopAddr}}</td>
						<td>{{unionList.countMemberId}}个</td>
						<td>{{unionList.countOrgId}}个</td>
						<td class="am-ft-red" ng-if="orgIde==orgIda">
							<!--<button style="background-color: white" ng-disabled="unionList.orgId=={{orgIda}}" ng-click="OrgQuitMebUnion(this.unionList)">退出</button>-->
							<button style="background-color: white" ng-if="unionList.orgId!=orgId" ng-click="OrgQuitMebUnion(this.unionList)">退出</button>
						</td>
					</tr>
				</table>
				<div class="fn-right priv-pagelist price-pagelist">
					<div id="pagingJoinedStore"></div>
				</div>
			</div>
			<div class="" ng-show="obj.showSetPart=='b'">
				<table class="table table-hover table-striped table-bordered">
					<tr>
						<th scope="col"></th>
						<th scope="col">商户编号</th>
						<th scope="col">商户名称</th>
						<th scope="col">地址</th>
						<th scope="col">操作</th>
					</tr>
					<tr ng-repeat="notJoinMember in notJoinMembers">
						<td><input  type="checkbox" value="" ng-checked="notJoinMember.isCheckedB" ng-click="selectMemberTojoin(this.notJoinMember.orgId,notJoinMembers,'one')"/></td>
						<td>{{notJoinMember.shopNum}}</td>
						<td>{{notJoinMember.shopName}}</td>
						<td>{{notJoinMember.province}} &nbsp;&nbsp;{{notJoinMember.city}} &nbsp;&nbsp;{{notJoinMember.district}}&nbsp;&nbsp;{{notJoinMember.shopAddr}}</td>
						<td>
							<a href="javascript:;" ng-click="orgJoinMebUnion(this.notJoinMember)">加入</a>
						</td>
					</tr>
				</table>
				<div>
				<div class="fn-clear">
	                 <div class="fn-clear mgl20 fn-left">
	                 	<input id="allUnjoinedMember" ng-model="getAllChecked" ng-click="selectMemberTojoin(this.notJoinMember.orgId,notJoinMembers,'thisPage')" type="checkbox" class="fn-left" value="">
	                    <label for="allUnjoinedMember" class="fn-left mgt5">全选当前页</label>
	                 </div>
					<!--分页 start-->
					<div class="fn-right priv-pagelist price-pagelist">
						<div id="pagingNotJoinedStore">分页</div>
					</div>
			<!--分页 end-->
				</div>
				</div>
					<a href="javascript:;" class="btn btn-primary" ng-click="orgsJoinMebUnion()">添加选中成员</a>
				<!--分页-->
				
			</div>
			<div class="" ng-show="obj.showSetPart=='c'">
				<table class="priceadjustTable table table-hover table-striped table-bordered">
					<tr>
						<th>门店编号</th>
						<th>门店名称</th>
						<th>所属商户</th>
						<th>门店地址</th>
					</tr>
					<tr ng-repeat="unionShopMember in unionShopMembers">
						<td>{{unionShopMember.shopNum}}</td>
						<td>{{unionShopMember.shopNum}}</td>
						<td>{{unionShopMember.shopNum}}</td>
						<td>{{unionShopMember.province}} &nbsp;&nbsp;{{unionShopMember.city}} &nbsp;&nbsp;{{unionShopMember.district}}&nbsp;&nbsp;{{unionShopMember.shopAddr}}</td>
					</tr>
				</table>
				<!--分页-->
				<!--分页 start-->
				<div class="fn-right priv-pagelist price-pagelist">
					<div id="pagingJoinedShop">分页</div>
				</div>
				<!--分页 end-->
			</div>

		</div>
	</div>
</div>