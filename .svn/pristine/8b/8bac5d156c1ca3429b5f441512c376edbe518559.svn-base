<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--------------- Content start ----------------->
<div class="content-wrapper content-wrapper-pagemgt fn-clear" style="min-height: 300px;">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">我的页面（{{pageCount}}）</h2>
		<a href="javascript:;" class="btn btn-primary fn-right" ng-click="goRoute({},'add')">添加页面</a>
	</div>
	<div class="fn-clear"></div>

	<div class="row rules-set-row">
		<div class="inprodet-titl">页面名称：</div>
		<div class="col-md-2 form-group needValInfo">
			<input class="col-md-12" type="text" name="" ng-model="templateName" placeholder="请输入页面名称" />
		</div>
		<div class="" id="forwardaddForm">
			<div class=" inprodet-titl">所属商户：</div>
			<div class="col-md-3 selectBox" style="padding: 0; width:230px">
				<div data-selectId="" class="shopparent">
					<span>请选择</span>
					<i class="fa fa-sort-desc fn-right mgr5 mgt5" aria-hidden="true"></i>
				</div>
				<!--下拉框的代码-->
				<div class="simulateSelect fn-hide" style="z-index:2;position: absolute;">
					<div class="searchpart">
						<span class="fangda"><i class="fa fa-search" aria-hidden="true"></i></span>
						<input type="text" class="orgshopName" ng-model="orgshopName" ng-change="searchOrgList()" placeholder="请输入商户名称" />
					</div>
					<div class="selectePart" >
						<ul>
							<li data-Id="" class="selectLi">请选择</li>
							<li ng-repeat="orgManageList in orgManageLists" data-Id="{{orgManageList.orgId}}" class="selectLi">{{orgManageList.shopName}}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!--<div class="inprodet-titl">商户：</div>
		<div class="col-md-2 form-group needValInfo">
			<select class="col-md-12">
				<option>请选择</option>
			</select>
		</div>-->
		<a class="btn btn-default searpage" href="javascript:;" ng-click="loadPageList()">查询</a>
	</div>

	<div class="ManColTable col-lg-12">
		<form>
			<div class="table-responsive PrivTable storesMgt-Table">
				<table class="table table-hover table-striped table-bordered">
					<tr>
						<th scope="col" width="26%">页面名称</th>
						<th scope="col" width="23%">商户</th>
						<th scope="col">创建时间</th>
						<th scope="col">最后编辑时间</th>
						<th scope="col">操作</th>
					</tr>
					<tr ng-repeat="pageList in pageLists">
						<td style="text-align: left;padding-left: 20px;"><i class="fa fa-newspaper-o"></i>{{pageList.title}}</td>
						<td >
							<div style="width:180px;text-align: left;margin: 0 auto;">
								<img class="miniBrand-logo" ng-src="{{pageList.shopLogo}}" />
								<span>{{pageList.shopName}}</span>
							</div>
						</td>
						<td>{{pageList.createTime}}</td>
						<td>{{pageList.updateTime}}</td>
						<td>
							<a href="javascript:;" class="mgr5" ng-click="goRoute(this.pageList,'edit')">编辑</a>
							<a href="javascript:;" class="am-ft-red" ng-click="delePage(this.pageList)">删除</a>
						</td>
					</tr>
				</table>
			</div>

		</form>
		<div class="fn-clear"></div>
		<!--分页 start-->
		<div class="pagelist priv-pagelist">
			<div id="pagingMem"></div>
		</div>
		<!--分页 end-->
	</div>
	<!--------------- Content end ----------------->
</div>