<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--商户管理主页-->
<!--------------- Content start ----------------->
<div class="content-wrapper content-member-wrapper sku-content-wrapper content-forward-wrapper">
	<div class="col-lg-8">
		<div class="col-md-12 pl0 pr0">
			<h2 class="am-ft-16 fn-left">SKU编码管理（共{{count}}个商户）</h2>
			<div class="OderlistSearch skulistSearch mgt0 fn-right " ng-if="count>0">
				<!--<div class="">-->
					<div class="fn-clear pl0 pr0" style="width:350px">
						<a href="javascript:;" style="line-height: 14px;" class="fn-right search-button" ng-click="search(shopName)">查询</a>
						<input type="text" class="col-sm-8 agentSearch fn-right" ng-model="shopName" placeholder="请输入商户名称查询" value="" />
					</div>
					<div class="fn-clear"></div>
				<!--</div>-->
			</div>
		</div>
		<div class="fn-clear"></div>
		<!--缺省-->
		<div class="col-md-11 pageTitl" ng-if="count==0">
			<div class="col-md-12 dafaultWapper">
				<div class="loadingFormal">
					<img src="../static/base/images/icon_notice.png">
					<span style="font-size:16px;">暂无商户</span>
				</div>
			</div>
		</div>

		<!-- 品牌列表 -->
		<div class="mgl0 col-md-12" style="padding: 0;">
			<div class="productCenterInfo">
				<table class="table table-hover table-striped productTable" ng-if="count>0">
					<tr>
						<th width="40%" colspan="2">商户</th>
						<th width="40%">管理</th>
					</tr>
					<!--未分配-->
					<tr ng-repeat="orgManageList in orgManageLists">
						<td class="orgManageProImgC">
							<img ng-if="orgManageList.shopLogo!=''" ng-src="{{orgManageList.shopLogo}}" class="productImg" title="" alt="" />
							<img ng-if="orgManageList.shopLogo==''" src="http://static.qineasy.com/base/images/img_default_company.png" class="productImg" title="" alt="" />
						</td>
						<td class="comProducInfo">
							<p class="productTitl">{{orgManageList.shopName}}</p>
							<p>联系电话：{{orgManageList.shopTel}}</p>
							<p>详细地址：{{orgManageList.province}}{{orgManageList.city}}{{orgManageList.district}}{{orgManageList.shopAddr}}</p>
						</td>
						<td>
							<a href="javascript:;" class="mgr20" ng-click="goRoute('skuSize',this.orgManageList)">尺码管理</a>
							<a href="javascript:;" ng-click="goRoute('skuColor',this.orgManageList)">颜色管理</a>
						</td>
					</tr>
				</table>
				<!--分页 start-->
				<div class="pagelist priv-pagelist">
					<div id="pagingMain"></div>
				</div>
				<!--分页 end-->
			</div>
			<div class="fn-clear"></div>
		</div>
		<!-- /品牌列表 -->
	</div>
	<div class="fn-clear"></div>
</div>
<%-- <div ng-show="obj.size=='show'">
	<!--商品基本信息-->
	<jsp:include page="skuSize.jsp" />

</div>
<div ng-show="obj.color=='show'">
	<!--商品基本信息-->
	<jsp:include page="skuColor.jsp" />

</div> --%>