<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="content-wrapper content-member-wrapper content-wrapper-pagemgt fn-clear">

	<div class="ManColTable col-lg-12">
		<div class="col-lg-12 pl0 pr0">
			<h2 class="am-ft-16 pagemgt-titl fn-left">页面模板（{{templateCount}}）</h2>
			<a href="javascript:;" class="btn btn-primary fn-right" ng-click="gotempRoute({},'add')">添加模板</a>
			<div class="OderlistSearch mgt0 col-md-4 fn-right">
				<div class="col-md-12 searchBox pl0">
					<input type="text" class="col-sm-10 mgt-8" ng-model="templateName" placeholder="请输入模板名称查询" value="" />
					<a href="javascript:;" class="fn-left search-icon" ng-click="loadTemList()">查询</a>
				</div>
				<div class="fn-clear"></div>
			</div>
			<div class="fn-clear"></div>
		</div>

		<form>
			<div class="table-responsive PrivTable storesMgt-Table">
				<table class="table table-hover table-striped table-bordered temptable">
					<tr>
						<th scope="col">模块名称</th>
						<th scope="col">备注</th>
						<th scope="col">创建时间</th>
						<th scope="col">编辑时间</th>
						<th scope="col">操作</th>
					</tr>
					<tr ng-repeat="templateList in templateLists">
						<td>{{templateList.title}}</td>
						<td >{{templateList.remark}}</td>
						<td>{{templateList.createTime}}</td>
						<td>{{templateList.updateTime}}</td>
						<td>
							<a href="javascript:;" class="mgr5" ng-click="gotempRoute(this.templateList,'edit')">编辑</a>
							<a href="javascript:;" class="am-ft-red" ng-click="delTemplate(this.templateList)">删除</a>
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