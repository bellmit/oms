<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div class="content-wrapper createMemberUnion">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">加入会员联盟</h2>
		<a href="javascript:;" class="line-btn fn-right" ng-click="cancelOrGoback('memberUnionJoin')">返回</a>
		
	</div>
	<div class="col-md-11 vipCloudRow3">
		<div style="width: 55%;">
			<div class="joinVipCloud">
				<div class=""><img ng-src="{{memUnionLogo}}" style="height: 80px;width: 80px;border:1px solid #eeeeee" /></div>
				<div class="joinVipCloudDetil" style="margin-right: 0px;">
					<p class="am-ft-16 am-ft-black mgb10">{{memberUnionName}}({{shortName}})</p>
					<p class="mgb5"><span class="colorGery">联盟ID：</span><span class="colorBack">{{memberUnionId}}&nbsp;&nbsp;&nbsp;</span><span class="colorGery">品牌：</span><span class="colorBack">{{brandName}}</span></p>
					<p class="mgb5"><span class="colorGery">创建商户：</span><span class="colorBack">{{orgName}}</span></p>
					<p class="mgb5"><span class="colorGery">创建时间：</span><span class="colorBack">{{createDate}}</span>
				</div>
				<div class="fn-right mgr20" style="float:right">
					<p class="mgb5"><span class="colorGery am-ft-14">已加入商户:</span><span class="colorBack am-ft-14">{{joinedMerchant}}个</span></p>
					<p class="mgb5"><span class="colorGery am-ft-14">已参与门店:</span><span class="colorBack am-ft-14">{{joinedShop}}个</span></p>
					<span class="colorGery am-ft-14">所有会员:</span><span class="colorBack am-ft-14">{{joinedMember}}个</span>
				</div>
			</div>
		</div>
		<div class="createUnionAfter">
			<p>加入会员联盟</p>
			<p class="am-ft-14">1、您可以统一管理加入该会员联盟的所有商户的所有会员。</p>
			<p class="am-ft-14">2、打通所有参与该联盟的会员，强化会员关系管理。</p>
		</div>
	</div>
	<div class="col-md-11  memberunioncreate">
		<div class="createUnionContent col-md-12">
			<div action="" class="fn-clear createUnionForm" style="margin-left: 0;"> 
				<div class="ownshopListcontent">
					<div class=" fn-clear">
						<span style="width:160px" class="fn-left">将同时加入的直营门店：</span>
						<span class="fn-left shopNum">{{shopLists.length}}个</span>
						<span  class="fn-left fold folda"><a href="javascript:;" ng-click="hideShopListcontent()">收起</a></span>
						<span  class="fn-left unfold unfolda"><a href="javascript:;" ng-click="showShopListcontent()">展开</a></span>
					</div>
					<div class="ownshopListbox ownshopListboxa"  style="margin-left: 150px;">
						<table class="table  table-hover table-striped table-bordered">
							<tr>
								<th>门店编号</th>
								<th>门店名称</th>
								<th>所属商户</th>
								<th>门店地址</th>
							</tr>
							<tr ng-repeat="shopList in shopLists">
								<td>{{shopList.shopNum}}</td>
								<td>{{shopList.shopName}}</td>
								<td>杭州勤易科技有限公司</td>
								<td>{{shopList.province}}&nbsp;&nbsp;{{shopList.city}}&nbsp;&nbsp;{{shopList.district}}&nbsp;&nbsp;{{shopList.shopAddr}}</td>
							</tr>
						</table>
					</div>

				</div>

			</div>
			<div class="membercreatechoose">
				<div class="membercreatestep2">
					<span>请选择一起加入的商户</span>
					<span>（同时加入商户的所有门店）</span>
				</div>
				<form>
					<div class="">
						<table class="table table-hover table-striped table-bordered" style="margin-bottom: 0px;">
							<tr>
								<th scope="col" colspan="2">商户编号</th>
								<th scope="col">商户名称</th>
								<th scope="col">直营门店数</th>
								<th scope="col">地址</th>
								<th scope="col">状态</th>
							</tr>
							<tr ng-repeat="orgList in orgLists" ng-class="{true:'bgGrey'}[orgList.memberUnionName!='']">
								<td><input  type="checkbox" value="" ng-if="orgList.memberUnionName==''" ng-checked="orgList.check" ng-click="selectMemberTojoinB(this.orgList.orgId,orgLists,'one')"/></td>
								<td>{{orgList.shopNum}}</td>
								<td>{{orgList.orgName}}</td>
								<td>{{orgList.storeNum}}个</td>
								<td>{{orgList.province}}&nbsp;&nbsp;{{orgList.city}}&nbsp;&nbsp;{{orgList.district}}&nbsp;&nbsp;{{orgList.shopAddr}}</td>
								<td><span ng-if="orgList.memberUnionName!=''">已加入</span>&nbsp;&nbsp;&nbsp;&nbsp;{{orgList.memberUnionName}}</td>
							</tr>
							<tr>
								<td colspan="6">
									<div class="fn-left fn-clear">
										<input type="checkbox" class="fn-left"  ng-model="thisPageGetChecked" ng-click="selectMemberTojoinB(this.orgList.orgId,orgLists,'thispage')" id="selectAllPro" />
										<label for="selectAllPro" class="fn-left">全选当前页</label>
										<input type="checkbox" class="fn-left" id="selectAllProA" ng-model="selectedAllData" ng-click="selectedAllUnionProduct()" />
										<label for="selectAllProA" class="fn-left">全选所有页</label>
									</div>
									<div class=" priv-pagelist fn-right price-pagelist">
										<div id="pageJoin"></div>
									</div>
								</td>
							</tr>
						</table>
					</div>
				</form>
				<div style="margin:30px 0;">
					<button type="button" class="btn btn-primary fn-left" ng-click="saveJoinMemberUnion()">保存</button>
					<button type="button" class="btn btn-default mgl20" ng-click="cancelOrGoback('memberUnionJoin')">取消</button>
				
				</div>
				<!-- 分页 -->
				<!--ng-click="sureToAddMember-->
			</div>
		</div>
	</div>
</div>
