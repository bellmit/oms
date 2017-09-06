<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
	<div class="content-wrapper content-wrapper-workbench paddingleft20">
		<div class="ManColTable col-lg-12">
			<div class="AddproTabnav det-top">
				<div class="tab-item" ng-class="{'current-tab-item':today}" ng-click="chooseDate('today');">今天</div><!--选中效果-->
				<div class="tab-item" ng-class="{'current-tab-item':yesterday}" ng-click="chooseDate('yesterday');">昨天</div>
				<div class="fn-clear"></div>
			</div>					
		</div>	
		<div class="fn-clear"></div>
		<!--PART1-->
		<div class="workbench-wrap">
			<div class="workbench-titl">
				<img src="http://static.qineasy.com/base/images/workBench_icon1.png" />
				<h2>新增商户</h2>
				<p>新增商户{{newShopList.length}}个</p>
			</div>
			<ul>
				<li class="current-li" ng-repeat="newShop in newShopList"><!--选中效果-->
					<img ng-show="newShop.shopLogo == ''" src="http://static.qineasy.com/base/images/img_default_company.png" />
					<img ng-show="newShop.shopLogo != ''" ng-src="{{newShop.shopLogo}}" />
					<h2>{{newShop.shopName}}</h2>
					<span>店铺数: {{newShop.count}}</span>
				</li>
				
				<div class="fn-clear"></div>
			</ul>
			<div class="fn-clear"></div>
		</div>
		<!--PART2-->
		<div class="workbench-wrap workbench-wrap2">
			<div class="workbench-titl">
				<img src="http://static.qineasy.com/base/images/workBench_icon2.png" />
				<h2>任务达成情况</h2>
				<p>新增图片{{changeFormalPicCount}}张，新增商品款数{{changeProductCount}}款</p>
			</div>
			<ul>
				<li class="current-li" ng-repeat="changeFormalShop in changeFormalInfoList"><!--选中效果-->
					<img ng-show="changeFormalShop.shopLogo == ''" src="http://static.qineasy.com/base/images/img_default_company.png" />
					<img ng-show="changeFormalShop.shopLogo != ''" ng-src="{{changeFormalShop.shopLogo}}" />
					<div class="workbench-li-info">
						<h3>{{changeFormalShop.shopName}}</h3>
						<h2>新增正式图片{{changeFormalShop.formalChangeNumCount}}张</h2>
						<p>更新{{changeFormalShop.modelChangeNum}}款，新增款图{{changeFormalShop.formalChangeNum}}张</p>
						<p>新增共用图片{{changeFormalShop.publicFormalChangeNum}}张</p>
					</div>							
				</li>
				<div class="fn-clear"></div>
			</ul>
			<div class="fn-clear"></div>
		</div>
		<!--PART3-->
		<div class="workbench-wrap pb20">
			<div class="workbench-titl">
				<img src="http://static.qineasy.com/base/images/workBench_icon3.png" />
				<h2>素材变动</h2>
				<p>新增素材图片{{changeUnformalPicCount}}张</p>
			</div>
			<table>
				<tr>
					<th width="30%">商户</th>
					<th width="20%">素材变动</th>
					<th width="30%">相关人员</th>
					<th width="20%">操作</th>
				</tr>
				<tr ng-repeat="chengeUnformalShop in changeUnformalInfoList">
					<td>
						<img ng-show="chengeUnformalShop.shopLogo == ''" src="http://static.qineasy.com/base/images/img_default_company.png" />
						<img ng-show="chengeUnformalShop.shopLogo != ''" ng-src="{{chengeUnformalShop.shopLogo}}" />
						<p>{{chengeUnformalShop.shopName}}</p>
					</td>
					<td>新增素材图片{{chengeUnformalShop.unformalChangeNumCount}}张</td>
					<td>{{chengeUnformalShop.orgManagers}}</td>
					<td><a href="javascript:;">查看详情</a></td>
				</tr>
			</table>
			<div class="fn-clear"></div>
		</div>
		
		<div class="fn-clear"></div>
	</div>	
	<!--------------- /Content end ----------------->
</div>	
