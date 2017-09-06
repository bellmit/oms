<%@ page contentType="text/html; charset=utf-8" language="java" import="java.util.*" errorPage="" %>
<div class="content-wrapper fn-clear">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">云仓商品管理</h2>
	</div>
	<div class="fn-clear"></div>

	<!-- Main content -->
	<div class="ManColTable col-lg-12 union-productManage">
		<form>
			<div class="table-responsive PrivTable">
				<table class="table table-hover table-striped table-bordered">
					<tr>
						<th scope="col">联盟</th>
						<th scope="col">云仓商品</th>
						<!--<th scope="col">未参与云仓商品</th>-->
						<th scope="col">操作</th>
					</tr>
					<tr ng-repeat="eachUnionList in unionList">
						<td>
							<p class="am-ft-14 am-ft-black" data-cloudId="{{eachUnionList.cloudId}}">{{eachUnionList.cloudName}}</p>
							<p><span data-brandId="{{eachUnionList.brandId}}">品牌：{{eachUnionList.brandName}}</span> 状态：{{eachUnionList.createOrJoin}}</p>
							<p data-orgId="{{eachUnionList.orgId}}">创建者：{{eachUnionList.shopName}}</p>
						</td>
						<td>
							<div class="col-md-5 fn-left">
								<p>已参与云仓商品共计：<em class="am-ft-14 am-ft-black">{{eachUnionList.proTotal-eachUnionList.proDown}}款</em></p>
								<p>未参与云仓商品：<em class="am-ft-14 am-ft-black">{{eachUnionList.proDown}}款</em></p>
							</div>
							<div class="col-md-7 fn-left">
								<p>其中已设置最低限价商品：<em class="am-ft-black">{{eachUnionList.proMinimum}}款</em></p>
								<!--<p>未设置最低限价商品：<em class="am-ft-red">{{eachUnionList.proTotal-eachUnionList.proDown-eachUnionList.proMinimum}}款</em></p>-->
							</div>
						</td>
						<!--<td>
							{{eachUnionList.proDown}}款
						</td>-->
						<td>
							<a href="javascript:;" data-userType="{{eachUnionList.userType}}" class="btn btn-primary" ng-click="manageUnionProduct(this)">
								<span ng-if="eachUnionList.createOrJoin=='已创建'">云仓商品管理</span>
								<span ng-if="eachUnionList.createOrJoin=='已加入'">云仓商品详情</span>
							</a>
						</td>
					</tr>
				</table>
			</div>
		</form>
		<div class="fn-clear"></div>
	</div>

</div>